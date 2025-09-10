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
      style={{
        WebkitOverflowScrolling: "touch", // smooth scroll on iOS
      }}
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

      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-6">
        <Heading>My Technical Experience/Skills</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl text-primary leading-relaxed max-sm:text-lg">
            As an experienced backend-focused developer, I have a deep
            understanding of architecting and developing robust web applications
            using modern technologies like Node.js, Laravel, JavaScript,
            TypeScript, and databases. I also integrate DevOps practices to
            ensure scalability, security, and performance.
          </p>
        </FramerWrapper>

        {/* Programming Languages */}
        <FramerWrapper y={100} delay={0.3}>
          <h1 className="text-2xl font-poppins text-primary font-semibold max-sm:text-xl mb-2">
            Programming Languages
          </h1>
          <SkillsFooter items={language} />
        </FramerWrapper>

        {/* Frameworks & Version Control */}
        <FramerWrapper y={100} delay={0.32}>
          <h1 className="text-2xl font-poppins text-primary font-semibold max-sm:text-xl mb-2">
            Frameworks / Libraries & Version Control
          </h1>
          <SkillsFooter items={framework} />
        </FramerWrapper>

        {/* DevOps */}
        <FramerWrapper y={100} delay={0.34}>
          <h1 className="text-2xl font-poppins text-primary font-semibold max-sm:text-xl mb-2">
            DevOps
          </h1>
          <SkillsFooter items={devOps} />
        </FramerWrapper>

        {/* Databases */}
        <FramerWrapper y={100} delay={0.36}>
          <h1 className="text-2xl font-poppins text-primary font-semibold max-sm:text-xl mb-2">
            Databases
          </h1>
          <SkillsFooter items={database} />
        </FramerWrapper>
      </div>
    </div>
  );
};

export default Skill;
