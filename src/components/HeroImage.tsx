import Image from "next/image";
import React from "react";
import logo from "../../public/portfolioLogo.png";

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={10000}
      />
    </>
  );
};

export default HeroImage;
