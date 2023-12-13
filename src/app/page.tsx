import Heading from "@/components/ui/heading";
import Timeline from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AtSign, Linkedin, Layers3, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import MyWorks from "@/components/mywork";

import jsIcon from "@/assets/javascripticon.svg";
import tsIcon from "@/assets/typescripticon.svg";
import htmlIcon from "@/assets/htmlicon.svg";
import cssIcon from "@/assets/cssicon.svg";
import sassIcon from "@/assets/sassicon.svg";
import reactIcon from "@/assets/reacticon.svg";
import reduxIcon from "@/assets/reduxicon.svg";
import nextIcon from "@/assets/nextjsicon.png";
import nodeIcon from "@/assets/nodejsicon.svg";
import expressIcon from "@/assets/expressicon.png";
import nestIcon from "@/assets/nestjsicon.svg";
import prismaIcon from "@/assets/prismaicon.svg";
import sequelizeIcon from "@/assets/sequelizeicon.svg";
import mysqlIcon from "@/assets/mysqlicon.svg";
import mongoIcon from "@/assets/mongodbicon.svg";
import mssqlsIcon from "@/assets/mssqlserver.png";
import tailwindcss from "@/assets/tailwindcss.svg";
import redisIcon from "@/assets/redisicon.png";
import kafkaIcon from "@/assets/kafka.svg";
import esIcon from "@/assets/elasticsearch.svg";
import gqlIcon from "@/assets/graphql.svg";

export default function Home() {
  const workExperiences = [
    {
      heading: {
        title: "IQVIA",
        extra: <Badge variant={"secondary"}>Software Developer 2</Badge>,
      },
      subHeading: "September 2022 - Now",
      content: `Get access to over 20+ pages including a dashboard layout,
          charts, kanban board, calendar, and pre-order E-commerce &
          Marketing pages.`,
    },
    {
      heading: {
        title: "Nouveau-Labs Private Limited",
        extra: <Badge variant={"secondary"}>Senior Software Engineer</Badge>,
      },
      subHeading: "July 2020 - September 2022",
      content: `Get access to over 20+ pages including a dashboard layout,
          charts, kanban board, calendar, and pre-order E-commerce &
          Marketing pages.`,
    },
    {
      heading: {
        title: "Flipkart (Nouveau-Labs Private Limited)",
        extra: <Badge variant={"secondary"}>Consultant UI Developer</Badge>,
      },
      subHeading: "March 2018 - July 2020",
      content: `Get access to over 20+ pages including a dashboard layout,
          charts, kanban board, calendar, and pre-order E-commerce &
          Marketing pages.`,
    },
    {
      heading: {
        title: "Altimetrik Private Limited",
        extra: <Badge variant={"secondary"}>Associate Developer</Badge>,
      },
      subHeading: "May 2016 - March 2018",
      content: `Get access to over 20+ pages including a dashboard layout,
          charts, kanban board, calendar, and pre-order E-commerce &
          Marketing pages.`,
    },
  ];
  const edicationDetails = [
    {
      heading: {
        title: "Siliguri Institute of Technology (MAKAUT)",
        extra: (
          <Badge variant={"secondary"}>
            Bachelor of Technology in Computer Science & Engineering
          </Badge>
        ),
      },
      subHeading: "2012-2016",
      content: `Get access to over 20+ pages including a dashboard layout,
        charts, kanban board, calendar, and pre-order E-commerce &
        Marketing pages.`,
    },
    {
      heading: {
        title: "Bankura Kenduadihi High School (WBBHSE)",
        extra: <Badge variant={"secondary"}>Higher Secondary (10+)</Badge>,
      },
      subHeading: "2010-2012",
      content: `Get access to over 20+ pages including a dashboard layout,
        charts, kanban board, calendar, and pre-order E-commerce &
        Marketing pages.`,
    },
    {
      heading: {
        title: "Bankura Zilla School",
        extra: <Badge variant={"secondary"}>Secondary</Badge>,
      },
      subHeading: "2001-2010",
      content: `Get access to over 20+ pages including a dashboard layout,
        charts, kanban board, calendar, and pre-order E-commerce &
        Marketing pages.`,
    },
  ];
  return (
    <main>
      <section id="brief" className="mt-36">
        <div className="container grid grid-cols-2">
          <div>
            <div>
              <h1 className="text-6xl hyphens-auto tracking-wide text-primary">
                Hey there, I&apos;m Subhadip developer & mentor
              </h1>
              <p className="text-lg mt-8 text-gray-400 tracking-wide">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing.
              </p>
            </div>
            <div className="mt-12">
              <div>
                <a
                  className="uppercase inline-flex items-end gap-2 text-sm font-bold tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  href="https://www.linkedin.com/in/subhadip-majumder-939b2bb5"
                >
                  <AtSign size={"18px"} /> majumdersubhadip.sm@gmail.com
                </a>
              </div>
              <div className="mt-3">
                <a
                  className="inline-flex items-end gap-2 text-sm font-bold tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  href="https://www.linkedin.com/in/subhadip-majumder-939b2bb5"
                >
                  <Linkedin size={"18px"} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-8">
              <Button variant={"outline"}>Download Resume</Button>
            </div>
          </div>
          <div>{/* <Image src={} /> */}</div>
        </div>
      </section>
      <section id="work" className="mt-36">
        <div className="container">
          <Heading title="My Work" extra="more" />
          <MyWorks />
        </div>
      </section>
      <section id="skills" className="mt-36">
        <div className="container">
          <Heading title="My Skills" />
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Area of Experties</CardTitle>
                <CardDescription>
                  Programming/Markup Languages & Stacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Javascript</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={tsIcon} height={25} alt="tsicon" />
                  <div>Typescript</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={htmlIcon} height={25} alt="htmlicon" />
                  <div>HTML</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={cssIcon} height={25} alt="cssicon" />
                  <div>CSS</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={sassIcon} height={25} alt="sassicon" />
                  <div>SASS</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Layers3 size={"25px"} />
                  <div>MERN Stack</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Globe size={"25px"} />
                  <div>Web Development</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Libraries & Frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <Image src={reactIcon} height={25} alt="reacticon" />
                  <div>React</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={reduxIcon} height={25} alt="reduxicon" />
                  <div>Redux</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={nextIcon} height={25} alt="nextjsicon" />
                  <div>Next.js</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={tailwindcss} height={25} alt="tailwindcssicon" />
                  <div>Tailwind CSS</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>
                  Technology, Frameworks & Libraries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <Image src={nodeIcon} height={25} alt="nodejsicon" />
                  <div>Node.js</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={expressIcon} height={25} alt="expressicon" />
                  <div>ExpressJs</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={nestIcon} height={25} alt="nestjsicon" />
                  <div>NestJs</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={gqlIcon} height={25} alt="gqlicon" />
                  <div>GraphQL</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={prismaIcon} height={25} alt="prismaicon" />
                  <div>Prisma</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={sequelizeIcon} height={25} alt="sequelizeicon" />
                  <div>Sequelize</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Database & Caching</CardTitle>
                <CardDescription>Backbone of our applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <Image src={mysqlIcon} height={25} alt="mysqlicon" />
                  <div>MySQL</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={mssqlsIcon} height={25} alt="mssqlicon" />
                  <div>Microsoft SQL Server</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={mongoIcon} height={25} alt="mongoicon" />
                  <div>MongoDB</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={redisIcon} height={25} alt="redisicon" />
                  <div>Redis</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={kafkaIcon} height={25} alt="kafkaicon" />
                  <div>Kafka</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={esIcon} height={25} alt="esicon" />
                  <div>Elastic Search</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Devops & tools</CardTitle>
                <CardDescription>Tools & services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Docker</div>
                </div>

                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Jenkins</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Git</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Platforms</CardTitle>
                <CardDescription>
                  Cloud platform and services that I use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Firebase</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Google Cloud Paltform</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secondary Skills</CardTitle>
                <CardDescription>
                  I can also work with these to some extent :P
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Python</div>
                </div>

                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>.NET with C#</div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <Image src={jsIcon} height={25} alt="jsicon" />
                  <div>Java</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="experiences" className="mt-36">
        <div className="container">
          <Heading title="My Experiences" />
          <Timeline data={workExperiences} />
        </div>
      </section>
      <section id="education" className="mt-36">
        <div className="container">
          <Heading title="My Education" />
          <Timeline data={edicationDetails} />
        </div>
      </section>
      <section id="blogs" className="mt-36">
        <div className="container">
          <Heading title="My Blogs" />
        </div>
      </section>
    </main>
  );
}
