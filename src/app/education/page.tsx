import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-center gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5">Education</Briefcase>
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-center text-lg max-sm:text-base"
          >
            2014
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            Bachelor of Techology, <br />
            Federal University of Technology, Akure
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-center text-lg max-sm:text-base"
          >
            2018
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            Masters of Science, <br />
            University of Lagos
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default Education;
