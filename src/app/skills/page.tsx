"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { database, devOps, framework, language } from "@/lib/utils/constants";
import { Lightbulb } from "lucide-react";

const Skill = () => {
  return (
    <div
      className="h-full w-full relative flex flex-col items-start gap-5 overflow-y-auto pr-2 hide-scrollbar"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* Hide scrollbar globally for this div */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* Header Badge */}
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            As an experienced developer, I have a deep understanding of HTML5,
            CSS3, JavaScript, TypeScript, and React, with expertise in
            implementing responsive design principles. I specialize in
            architecting and developing robust web applications and dynamic
            websites using modern technologies, including JavaScript,
            TypeScript, React, Next.js, and Node.js.
          </p>
        </FramerWrapper>

        {/* Skills Sections */}
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-between sm:items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-between sm:items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            DevOps
          </h1>
          <div className="w-full h-fit flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-between sm:items-center">
            <SkillsFooter items={devOps} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Databases
          </h1>
          <div className="w-full h-fit flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-between sm:items-center">
            <SkillsFooter items={database} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default Skill;
