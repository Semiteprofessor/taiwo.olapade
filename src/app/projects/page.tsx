import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/utils/constants";
import { Layers } from "lucide-react";

const Project = () => {
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
        <Layers className="h-5 w-5" />
        Projects
      </Badge>

      {/* Heading + Intro */}
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to build cool projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((val, indx) => (
          <ProjectCards key={indx} value={val} num={indx} />
        ))}
      </div>
    </div>
  );
};

export default Project;
