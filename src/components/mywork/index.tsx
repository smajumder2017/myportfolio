import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import GithubService from "@/services/github.service";
import Heading from "../ui/heading";
import { Badge } from "../ui/badge";
import { Scale, Star, GitFork, Eye, Link as UrlLink } from "lucide-react";

const Link = (props: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <a
      className="tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

const Licence = (props: { value?: string }) => {
  if (!props.value) {
    return null;
  }
  return (
    <div className="flex gap-2">
      <Scale size={"15px"} />
      <div className="text-sm text-gray-500">{props.value}</div>
    </div>
  );
};

const Starts = (props: { value: number }) => {
  return (
    <div className="flex gap-2">
      <Star size={"15px"} />
      <div className="text-sm text-gray-500">{props.value}</div>
    </div>
  );
};

const Watchers = (props: { value: number }) => {
  return (
    <div className="flex gap-2">
      <Eye size={"15px"} />
      <div className="text-sm text-gray-500">{props.value}</div>
    </div>
  );
};

const Forks = (props: { value: number }) => {
  return (
    <div className="flex gap-2">
      <GitFork size={"15px"} />
      <div className="text-sm text-gray-500">{props.value}</div>
    </div>
  );
};

const MyWorks = async () => {
  const githubService = new GithubService("smajumder2017");
  const repos = await githubService.getRepos("public", 0, 8);
  // console.log(repos);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {repos.map((repo) => {
        return (
          <Card key={repo.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>
                <Heading
                  size="lg"
                  title={
                    <a
                      className="tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                      href={repo.html_url}
                      target="_blank"
                    >
                      {repo.name}
                    </a>
                  }
                  containerClass="mb-1"
                  extra={
                    repo.language ? (
                      <Badge variant={"secondary"}>{repo.language}</Badge>
                    ) : null
                  }
                />
              </CardTitle>
              <CardDescription>
                <Licence value={repo.license?.name} />
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-400">{repo.description}</p>
            </CardContent>
            <CardFooter className="justify-between">
              <Starts value={repo.stargazers_count} />
              <Forks value={repo.forks_count} />
              <Watchers value={repo.watchers} />
              {repo.homepage && (
                <Link href={repo.homepage}>
                  <UrlLink size={"15px"} />
                </Link>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default MyWorks;
