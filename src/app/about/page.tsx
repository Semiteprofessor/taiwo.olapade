"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);

  // const { scrollYProgress } = useScroll({ container: containerRef });

  // const skillRef = useRef();
  // // const isSkillRefInView = useInView(skillRef, {once:true});
  // const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef(null);
  // const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const items = [
    { hobby: "Coding" },
    { hobby: "Teaching" },
    { hobby: "Playing Football" },
  ];
  return (
    <div
      className="h-full w-full relative flex flex-col items-start gap-5 overflow-auto lg:flex"
      ref={containerRef}
    >
      <Badge className="gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In Nigeria
        </Heading>

        <FramerWrapper>
          <p className="text-lg text-justify">
            Highly skilled React.js and Node.js Developer with over 6 years of
            expertise in designing, developing, and maintaining scalable
            frontend and backend applications. Proven ability to develop full
            functioning web and mobile app and troubleshoot complex issues.
            Proficient in modern JavaScript, TypeScript, and various backend
            frameworks and libraries. Strong background in API development,
            database management, and microservices architecture. Adept at
            leading development teams, managing projects, and delivering
            high-quality code. Passionate about continuous learning and
            contributing to the developer community.
          </p>
        </FramerWrapper>
        {/* BIOGRAPHY QUOTE */}
        <span className="italic">
          "Building dreams with code, passion, and purpose."
        </span>
        {/* BIOGRAPHY SIGN SVG*/}
        <div className="self-end">
          <svg
            width="200"
            height="100"
            viewBox="0 0 365 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43 85C47.3733 74.7322 52.4067 65.0285 59.3333 56.2222C61.1681 53.8896 82.738 25.2537 86.3333 32.4445C88.6857 37.1493 88.2293 44.9295 88.3333 49.8889C88.5305 59.2891 87.8719 68.7649 84.1111 77.5556C74.1785 100.772 51.8668 117.114 29.6667 127.556C21.564 131.367 12.7426 135.099 3.88889 136.778C0.0251471 137.511 3.1335 135.451 4.55555 134C9.13667 129.327 14.4217 125.578 19 121C21.0268 118.973 23.536 117.809 25.8889 116.167C41.002 105.616 56.5136 96.0118 72.3889 86.6111C87.6084 77.5988 102.633 68.1797 117.944 59.3333C123.538 56.1017 118.123 59.3612 116.278 60.6667C114.726 61.7644 105.007 66.8844 110.056 67.5C123.636 69.1562 136.854 64.6414 149.333 59.7778C161.326 55.1037 171.736 49.5094 182.222 42.2778C187.454 38.6695 176.446 43.3377 175.333 44C172.84 45.484 169.497 49.2491 172.111 52.2222C176.365 57.0604 185.041 55.8918 190.778 56C196.407 56.1062 189.995 60.838 193 58C194.313 56.7603 199.788 51.7517 201.556 54.4445C202.944 56.5604 200.894 61.188 203.889 56.6667C216.477 37.6607 203.827 75.5995 212.222 74.6667C219.804 73.8243 225.037 63.406 228.556 57.7222C230.185 55.0901 230.652 55.8561 230.5 58.4445C230.314 61.6062 234.818 57.8843 236.222 57C238.239 55.7301 240.94 55.0032 242.778 53.7778C245.107 52.2248 248.423 52.0378 251 50.7778C252.561 50.0146 262.918 42.7443 264 43.5556C265.68 44.8157 269.409 39.0721 270 38.1667C274.141 31.8259 277.593 20.6193 275.222 13.1111C271.831 2.37282 255.775 -1.83456 247.5 5.44446C237.825 13.9546 231.68 27.3578 226.444 38.7778C220.942 50.7798 216.913 63.2986 213.222 75.9445C211.582 81.564 199.482 107.977 210.778 109.389C224.402 111.092 238.802 100.332 248.556 92.1667C255.262 86.5516 263.405 79.994 267.722 72.2222C271.139 66.0719 263.027 75.1161 262.222 78C260.173 85.3417 269.089 83.522 272.889 81.1111C273.243 80.8864 276.456 76.9901 276.833 79C278.055 85.5135 277.561 93.5541 278.111 100C279.486 116.117 281.066 132.281 283.5 148.278C284.594 155.464 285.53 165.219 289.111 171.889C290.474 174.427 290.899 166.324 290.944 163.444C291.094 153.961 290.953 144.477 291.444 135C291.462 134.664 294.323 110.217 295.222 110.667C296.729 111.42 295.088 114.992 296.444 115.778C300.558 118.16 305.379 110.164 309.056 108.556C312.808 106.914 315.043 107.731 317.556 104.5C318.669 103.068 322.459 102.143 322.944 100.444C324.175 96.1369 324.956 96.4246 330.333 97.5C331.379 97.7091 333.164 98.5445 334 97.5C335.008 96.2405 337.084 99.1117 338 99.5556C340.659 100.845 339.997 97.4413 339.556 96C338.427 92.3118 338.643 93.5953 342.111 93.7778C347.653 94.0695 348.173 90.9628 352 88.6667C353.025 88.0515 354.624 89.9391 355.944 89.3889C357.245 88.8469 356.948 86.2222 355.5 86.2222C352.914 86.2222 355.544 89.9363 356.5 90.3889C360.781 92.4167 359.483 84.7584 363 83"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* BIOGRAPHY SCROLL SVG */}
        <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#000000"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
          <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
        </motion.svg>
      </div>
      {/* SKILLS CONTAINER */}

      {/* EXPERIENCE CONTAINER */}
      <div
        className="flex flex-col gap-12 justify-center pb-48"
        ref={experienceRef}
      >
        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
            {" "}
            <Heart className="h-8 w-8" /> Hobbies
          </h1>
          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
            {items.map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
                >
                  <Circle className="h-3 w-3" /> {val.hobby}
                </div>
              );
            })}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default About;
