import { ExternalLink, Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

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
  return <div></div>;
};

export default SocialLinks;
