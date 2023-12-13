import { GithubRepository } from "@/interfaces/github";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class GithubService {
  private axios: AxiosInstance;
  private userName: string;
  constructor(
    githubUsername: string,
    apiBaseUrl = process.env.GITHUB_API_URL,
    accessToken = process.env.GITHUB_ACCESS_TOKEN
  ) {
    if (!apiBaseUrl) {
      throw new Error("Github api base url not provided");
    }
    if (!accessToken) {
      throw new Error("Github api access token provided");
    }
    this.userName = githubUsername;
    this.axios = axios.create({
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  getRepos = async (type = "public", page = 0, per_page = 4, sort?: string) => {
    try {
      const repos = await this.axios.get<{}, AxiosResponse<GithubRepository[]>>(
        `/users/${this.userName}/repos?type=${type}&page=${page}&per_page=${per_page}`
      );
      return repos.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
