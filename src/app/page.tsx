import Image from "next/image";
import Heading from "@/components/ui/heading";
import Timeline from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { AtSign, DownloadCloud, Linkedin } from "lucide-react";
import MyWorks from "@/components/mywork";
import Skills from "@/components/skills";

import { skills } from "@/data/skills";
import { workExperiences } from "@/data/experience";
import { edicationDetails } from "@/data/education";

import avatar from "@/assets/avatar.svg";

export default function Home() {
  return (
    <main>
      <section id="brief" className="mt-8 md:mt-36">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>
              <h1 className="text-center md:text-left text-4xl md:text-6xl hyphens-auto tracking-wide text-primary">
                Hey there, I&apos;m Subhadip developer & mentor
              </h1>
              <p className="text-center md:text-left text-base md:text-lg mt-8 text-gray-400 tracking-wide">
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
              <Button variant={"outline"}>
                <DownloadCloud className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
          <div className="order-[-1] md:order-1 flex items-start justify-center">
            <Image src={avatar} height={500} alt="avatar" />
          </div>
        </div>
      </section>
      <section id="work" className="mt-16 md:mt-36">
        <div className="container">
          <Heading
            title="My Work"
            extra="more"
            containerClass="flex justify-center md:justify-start"
          />
          <MyWorks />
        </div>
      </section>
      <section id="skills" className="mt-16 md:mt-36">
        <div className="container">
          <Heading
            title="My Skills"
            containerClass="flex justify-center md:justify-start"
          />
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillSet) => {
              return (
                <Skills
                  key={skillSet.title}
                  title={skillSet.title}
                  subtitle={skillSet.subtitle}
                  data={skillSet.data}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="experiences" className="mt-16 md:mt-36">
        <div className="container">
          <Heading
            title="My Experiences"
            containerClass="flex justify-center md:justify-start md:mb-9"
          />
          <Timeline data={workExperiences} />
        </div>
      </section>
      <section id="education" className="mt-16 md:mt-36">
        <div className="container">
          <Heading
            title="My Education"
            containerClass="flex justify-center md:justify-start md:mb-9"
          />
          <Timeline data={edicationDetails} />
        </div>
      </section>
      <section id="blogs" className="mt-16 md:mt-36 mb-20">
        <div className="container">
          <Heading title="My Blogs" />
        </div>
      </section>
    </main>
  );
}
