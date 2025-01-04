import { Circle, Globe2, Languages } from "lucide-react";
import React from "react";

const AboutFooter = () => {
  const items = [
    {
      name: "Language",
      answer: "English UK",
      icon: <Languages className="h-11 w-11" />,
    },
    {
      name: "Nationality",
      answer: "Nigerian",
      icon: <Globe2 className="h-8 w-8" />,
    },
    { name: "Gender", answer: "Male", icon: <Globe2 className="h-8 w-8" /> },
  ];
  return (
    <div>
      {items.map((val, idx) => (
        <div className="p-1 w-fit relative" key={idx}>
          <h1
            className="gap2
            -2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl"
          >
            {val.icon}
            {val.name}
          </h1>
          <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
            <Circle className="h-3 w-3" />
            {val.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutFooter;
