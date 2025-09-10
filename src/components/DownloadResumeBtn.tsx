import React from "react";
import HackerBtn from "./animation/HackerBtn";

const DownloadResumeBtn = () => {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a href="/resume.pdf" download="Taiwo_Olapade.pdf">
        <HackerBtn label="Download Resume" />
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
