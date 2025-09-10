import React from "react";
import HackerBtn from "./animation/HackerBtn";

const DownloadResumeBtn = () => {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a
        href="https://drive.google.com/file/d/1wyfZv9MxBbbQpaGKz_D8wlW46uAum0u_/view?usp=drive_link"
        download
      >
        <HackerBtn label="Download Resume" />
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
