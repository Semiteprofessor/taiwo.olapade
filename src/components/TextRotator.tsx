import React from "react";

const TextRotator = () => {
  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a FullStack Developer &{" "}
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))]  sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            <li className="text-[#194586]">Freelancer</li>
            <li className="text-[#194586]">Contributor</li>
            <li className="text-[#194586]">Creator</li>
            <li className="text-[#194586]">Instructor</li>
          </ul>
        </span>
        <br />
        <br />
        <p className="md:text-xl w-[80%] text-justify">
          I’m a resourceful full-stack JavaScript developer skilled in building
          scalable web applications. Proficient in React, Node.js, and
          databases, I deliver user-centric solutions with a passion for clean,
          efficient code.
        </p>
      </div>
    </div>
  );
};

export default TextRotator;
