import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import React from "react";

import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import python from "../../../public/python.webp";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
const Skill = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "python", img: python },
  ];

  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "erpnext", img: erpnext },
  ];

  const library = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ];

  const devOps = [
    { alt: "github", img: github },
    { alt: "circleci", img: circleci },
    { alt: "docker", img: docker },
    { alt: "kubernetes", img: kubernetes },
    { alt: "aws", img: aws },
    { alt: "azure", img: azure },
    { alt: "google", img: google },
    { alt: "digitalocean", img: digitalocean },
  ];
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently i am a fresher and i have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default Skill;
