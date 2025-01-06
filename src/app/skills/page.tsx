"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
const Skill = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const language = [
    {
      alt: "html",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      alt: "css",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      alt: "js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      alt: "ts",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      alt: "python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ];

  const framework = [
    {
      alt: "react",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      alt: "nextjs",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      alt: "nodejs",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      alt: "redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      alt: "express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      alt: "git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      alt: "materialui",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      alt: "tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      alt: "framer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    },
    {
      alt: "erpnext",
      img: "https://www.okoone.com/wp-content/uploads/2024/09/erpnext-logo.png",
    },
  ];

  const devOps = [
    {
      alt: "github",
      img: "https://cdn.prod.website-files.com/65264f6bf54e751c3a776db1/66d86964333d11e0a1f1da9e_github_actions.png",
    },
    {
      alt: "circleci",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
    },
    {
      alt: "docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      alt: "kubernetes",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    },
    {
      alt: "aws",
      img: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
    },
    {
      alt: "azure",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      alt: "google",
      img: "https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png",
    },
    {
      alt: "digitalocean",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    },
    {
      alt: "nginx",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
  ];

  const database = [
    {
      alt: "mysql",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      alt: "mongodb",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      alt: "postgresql",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      alt: "sequelize",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    },
    {
      alt: "knex",
      img: "https://knexjs.org/knex-logo.png",
    },
    {
      alt: "firebase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    },
    {
      alt: "redis",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    // { alt: "google", img: "google" },
    // { alt: "digitalocean", img: digitalocean },
  ];
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-scroll">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
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
        <br />
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
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            DevOps
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={devOps} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Databases
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={database} />
          </div>
        </FramerWrapper>
        <br />
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
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
        {/* EXPERIENCE TITLE */}
        <div
          className="flex flex-col gap-12 justify-center pb-48"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            WORK EXPERIENCE
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Full Stack Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I led the team of experienced JavaScript developer by offering
                  expertise the development of .{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  3XG Africa
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Full Stack Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development, leveraging
                  advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2023 - 2024{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Zulfah Group
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Full Stack Developer{" "}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I provided web solutions, applying a range of technologies to
                  address client requirements.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2019 - 2023{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  GeoCodec Technologies
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
