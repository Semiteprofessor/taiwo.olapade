import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt: string; img: any }>;
}
const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((val, idx) => {
          return (
            <div className="p-4" key={idx}>
              <Image
                src={val?.img}
                alt={val.alt}
                className="rounded-full w-auto max-h-20"
              />
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;