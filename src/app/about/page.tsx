import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import React from "react";

const About = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Teaching" },
    { hobby: "Playing Football" },
  ];
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div>
        <Heading>
          Software Engineer And Web <br /> Developer, Based In Nigeria
        </Heading>
      </div>
    </div>
  );
};

export default About;
