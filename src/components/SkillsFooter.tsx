import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt: string; img: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items?.map((val, idx) => (
        <div className="p-4" key={idx}>
          <Image src={val.img} alt={val.alt} width={60} height={60} />
        </div>
      ))}
    </>
  );
};

export default SkillsFooter;
