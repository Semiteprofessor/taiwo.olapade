"use client";
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
  User,
} from "lucide-react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
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
  //   const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <div className="items-end pb-3 rounded-full">
        {navLinks.map(({ title, icon, href }) => (
          <Link href={href} key={title} passHref>
            {icon}
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
