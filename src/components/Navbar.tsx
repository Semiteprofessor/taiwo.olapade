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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dock, DockIcon, DockItem, DockLabel } from "./animation/DockAnimation";
import { cn } from "@/lib/utils";

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
    // {
    //   title: "Education",
    //   icon: <GraduationCap className="w-full h-full" />,
    //   href: "/education",
    // },
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

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[9999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <Dock className="items-end pb-3 rounded-full border border-gray-400">
        {navLinks.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                pathname === item.href && "bg-gray-100 border border-primary"
              )}
            >
              {/* <DockLabel className={cn("text-2xl")}>
                {item?.title ?? "Default Title"}
              </DockLabel> */}
              <DockIcon
                className={cn(pathname === item.href && "text-[#2f7df4]")}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
