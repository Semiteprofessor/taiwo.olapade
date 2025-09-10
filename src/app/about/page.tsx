"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const experienceRef = useRef(null);

  const items = [
    { hobby: "Coding" },
    { hobby: "Teaching" },
    { hobby: "Playing Football" },
  ];

  return (
    <div
      className="h-full w-full relative flex flex-col items-start gap-5 overflow-y-auto pr-2 hide-scrollbar"
      ref={containerRef}
      style={{ WebkitOverflowScrolling: "touch" }} // smooth iOS scroll
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

      {/* Section Badge */}
      <Badge className="gap-2">
        <User2 className="h-5 w-5" />
        About Me
      </Badge>

      {/* Intro & Bio */}
      <div className="flex flex-col gap-3 w-full">
        <Heading>
          Software Engineer & Web <br className="hidden sm:block" /> Developer,
          Based in Nigeria
        </Heading>

        <FramerWrapper>
          <p className="text-base sm:text-lg text-justify font-poppins leading-relaxed text-primary">
            Highly skilled React.js and Node.js Developer with 6+ years of
            expertise in designing, developing, and maintaining scalable
            applications. Experienced in full-stack development, API design,
            database management, and microservices architecture. Proven leader
            in team management and project delivery, with a passion for
            continuous learning and contributing to the developer community.
          </p>
        </FramerWrapper>

        {/* Quote */}
        <span className="italic text-primary text-sm sm:text-base">
          "Building dreams with code, passion, and purpose."
        </span>

        {/* Signature */}
        <div className="self-center sm:self-end">
          {/* SVG kept same */}
          <svg
            width="160"
            height="80"
            viewBox="0 0 365 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* signature path */}
            <path
              d="M43 85C47.3733..."
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Scroll Down Animation */}
        <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto sm:mx-0"
          width={40}
          height={40}
        >
          <path d="M5 15C5 16.8565..." stroke="#000" strokeWidth="1"></path>
        </motion.svg>
      </div>

      {/* Hobbies Section */}
      <div
        className="flex flex-col gap-8 justify-center pb-24 sm:pb-48 w-full"
        ref={experienceRef}
      >
        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-2xl sm:text-3xl font-poppins text-primary font-semibold flex items-center icon_underline relative">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8" /> Hobbies
          </h1>

          <div className="w-full h-fit p-2 flex flex-col sm:flex-row sm:justify-between gap-6">
            {items.map((val, indx) => (
              <div
                key={indx}
                className="flex gap-2 items-center text-lg sm:text-xl text-primary"
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default About;
