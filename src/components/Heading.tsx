import React from "react";
import FramerWrapper from "./animation/FramerWrapper";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <FramerWrapper>
      <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
        {children}
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
