import { ExternalLink, Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import FramerWrapper from "./animation/FramerWrapper";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    {
      name: "Github",
      url: "https://github.com/taiwoolapade",
      icon: <Facebook />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/taiwoolapade/",
      icon: <Twitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/taiwoolapade/",
      icon: <Linkedin />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/taiwoolapade",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((item, index) => {
        const timing = 0.08 + index * 0.125;
        return (
          <FramerWrapper key={index} delay={timing} y={50}>
            <Link
              target="black"
              key={index}
              href={item.url}
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300"
            ></Link>

            {item.icon}
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
