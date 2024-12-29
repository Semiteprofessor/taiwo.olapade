"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { title: "Home", icon: <HomeIcon className="h-full w-full" />, href: "/" },
    {
      title: "About",
      icon: <User className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Skills",
      icon: <Briefcase className="w-full h-full" />,
      href: "/skills",
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-full h-full" />,
      href: "/education",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="w-full h-full" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <Mail className="w-full h-full" />,
      href: "/contact",
    },
    {
      title: "More",
      icon: <MoreHorizontal className="w-full h-full" />,
      href: "/more",
    },
  ];

  const [scrolling, setScrolling] = useState<Boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <div></div>;
};

export default Navbar;
