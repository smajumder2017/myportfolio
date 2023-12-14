import jsIcon from "@/assets/javascripticon.svg";
import tsIcon from "@/assets/typescripticon.svg";
import htmlIcon from "@/assets/htmlicon.svg";
import cssIcon from "@/assets/cssicon.svg";
import sassIcon from "@/assets/sassicon.svg";
import reactIcon from "@/assets/reacticon.svg";
import reduxIcon from "@/assets/reduxicon.svg";
import nextIcon from "@/assets/nextjsicon.png";
import tailwindIcon from "@/assets/tailwindcss.svg";
import nodeIcon from "@/assets/nodejsicon.svg";
import expressIcon from "@/assets/expressicon.png";
import nestIcon from "@/assets/nestjsicon.svg";
import prismaIcon from "@/assets/prismaicon.svg";
import sequelizeIcon from "@/assets/sequelizeicon.svg";
import mysqlIcon from "@/assets/mysqlicon.svg";
import mongoIcon from "@/assets/mongodbicon.svg";
import mssqlsIcon from "@/assets/mssqlserver.png";
import redisIcon from "@/assets/redisicon.png";
import kafkaIcon from "@/assets/kafka.svg";
import esIcon from "@/assets/elasticsearch.svg";
import gqlIcon from "@/assets/graphql.svg";
import dockerIcon from "@/assets/dockericon.svg";
import jenkinsIcon from "@/assets/jenkinsicon.png";
import gitIcon from "@/assets/giticon.svg";
import firebaseIcon from "@/assets/firebaseicon.svg";
import gcpIcon from "@/assets/gcpicon.svg";

import { ISkill } from "@/components/skills";

import Image from "next/image";
import { Globe, Layers3 } from "lucide-react";

export const skills: ISkill[] = [
  {
    title: "Area of Experties",
    subtitle: "Programming/Markup Languages & Stacks",
    data: [
      {
        icon: <Image src={jsIcon} height={25} alt="jsicon" />,
        value: "Javascript",
      },
      {
        icon: <Image src={tsIcon} height={25} alt="tsicon" />,
        value: "Typescript",
      },
      {
        icon: <Image src={htmlIcon} height={25} alt="htmlIcon" />,
        value: "HTML",
      },
      {
        icon: <Image src={cssIcon} height={25} alt="cssIcon" />,
        value: "CSS",
      },
      {
        icon: <Image src={sassIcon} height={25} alt="sassIcon" />,
        value: "SASS",
      },
      {
        icon: <Layers3 size={"22px"} />,
        value: "MERN Stack",
      },
      {
        icon: <Globe size={"22px"} />,
        value: "Web Development",
      },
    ],
  },
  {
    title: "Frontend",
    subtitle: "Libraries & Frameworks",
    data: [
      {
        icon: <Image src={reactIcon} height={25} alt="reactIcon" />,
        value: "React",
      },
      {
        icon: <Image src={reduxIcon} height={25} alt="reduxIcon" />,
        value: "Redux",
      },
      {
        icon: <Image src={nextIcon} height={25} alt="nextIcon" />,
        value: "Next.js",
      },
      {
        icon: <Image src={tailwindIcon} height={25} alt="tailwindIcon" />,
        value: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Backend",
    subtitle: " Technology, Frameworks & Libraries",
    data: [
      {
        icon: <Image src={nodeIcon} height={25} alt="nodeIcon" />,
        value: "Node.js",
      },
      {
        icon: <Image src={expressIcon} height={25} alt="expressIcon" />,
        value: "ExpressJS",
      },
      {
        icon: <Image src={nestIcon} height={25} alt="nestIcon" />,
        value: "NestJs",
      },
      {
        icon: <Image src={gqlIcon} height={25} alt="gqlIcon" />,
        value: "GraphQL",
      },
      {
        icon: <Image src={prismaIcon} height={25} alt="prismaIcon" />,
        value: "Prisma",
      },
      {
        icon: <Image src={sequelizeIcon} height={25} alt="sequelizeIcon" />,
        value: "Sequelize",
      },
    ],
  },
  {
    title: "Database & Caching",
    subtitle: "Backbone of our applications",
    data: [
      {
        icon: <Image src={mysqlIcon} height={25} alt="mysqlIcon" />,
        value: "MySQL",
      },
      {
        icon: <Image src={mssqlsIcon} height={25} alt="mssqlsIcon" />,
        value: "Microsoft SQL Server",
      },
      {
        icon: <Image src={mongoIcon} height={25} alt="mongoIcon" />,
        value: "MongoDB",
      },
      {
        icon: <Image src={redisIcon} height={25} alt="redisIcon" />,
        value: "Redis",
      },
      {
        icon: <Image src={kafkaIcon} height={25} alt="kafkaIcon" />,
        value: "Kafka",
      },
      {
        icon: <Image src={esIcon} height={25} alt="esIcon" />,
        value: "Elastic Search",
      },
    ],
  },
  {
    title: "Devops & tools",
    subtitle: "Tools & services",
    data: [
      {
        icon: <Image src={dockerIcon} height={25} alt="dockerIcon" />,
        value: "Docker",
      },
      {
        icon: <Image src={jenkinsIcon} height={25} alt="jenkinsIcon" />,
        value: "Jenkins",
      },
      {
        icon: <Image src={gitIcon} height={25} alt="gitIcon" />,
        value: "Git",
      },
    ],
  },
  {
    title: "Cloud Platforms",
    subtitle: "Cloud platform and services that I have used.",
    data: [
      {
        icon: <Image src={firebaseIcon} height={25} alt="firebaseIcon" />,
        value: "Firebase",
      },
      {
        icon: <Image src={gcpIcon} height={25} alt="gcpIcon" />,
        value: "Google Cloud Platform",
      },
    ],
  },
];
