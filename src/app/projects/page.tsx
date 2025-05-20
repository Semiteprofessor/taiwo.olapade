import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const Project = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Access Insurance",
      image: "/images/devzone.png",
      description: `An Insurance Brokerage App by Access Bank.`,
      tags: ["Redux", "Nextjs"],
      link: "https://www.accessbankplc.com/bancassurance",
    },
    {
      title: "3XG Africa",
      image: "/images/devzone.png",
      description:
        "3XG Technologies is an innovative technology company that specializes in providing comprehensive IT solutions for businesses of all sizes",
      tags: ["React.js", "Typescript", "Ant Design"],
      link: "https:/3xg.africa/",
    },
    {
      title: "3XG Merchant Hub",
      image: "/images/devzone.png",
      description: "An e-Commerce Marketplace for seller",
      tags: ["React.js", "Typescript", "Ant Design"],
      link: "https://staging-merchant.3xg.africa/",
    },
    {
      title: "3XG Shopper",
      image: "/images/devzone.png",
      description: "An e-Commerce Marketplace",
      tags: ["Next.js", "Typescript", "Chakra UI"],
      link: "https://staging-shop.3xg.africa/",
    },
    {
      title: "Rupeespot- All deals Product in one place",
      image: "/images/devzone.png",
      description:
        "This is a free tool to check price history charts for millions of products for popular Indian stores such as Amazon and Flipkart. ",
      tags: ["Nextjs", "Freelancing", "MySQL"],
      link: "https://rupeespot.com/",
    },
    {
      title: "Formcraft- Build Type-Safe Forms with Zero Effort",
      image: "/images/devzone.png",
      description:
        "Create production-ready forms with Zod validation, React Hook Form, and TypeScript. Design, customize, and deploy in minutes.",
      tags: ["Nextjs", "Shadcnui", "Zod", "React Hook Form "],
      link: "https://formcraft-ti.vercel.app/",
    },

    {
      title: "KryptoKapital- Investing in Cryptocurreny",
      image: "/images/devzone.png",
      description:
        "This is a platform for learning about cryptocurrency with many tools and festures. It is very big project. ",
      tags: ["Nextjs", "Freelancing", "Supabase"],
      link: "https://pro.kryptokapital.info/",
    },
    {
      title: "FriendZ - A social media Platform",
      image: "/images/devzone.png",
      description:
        "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
      tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/taqui-786/project-friendz",
    },
    {
      title: "ChatApp- Simple instagram clone",
      image: "/images/devzone.png",
      description:
        "ChatApp is similar to instagram, you can create, edit, delete, like,comment, post and  Follow, unfollow users",
      tags: ["Reactjs", "Javascript"],
      link: "https://github.com/taqui-786/chatapp-api",
    },
    {
      title: "Devletter - A Newsletter for devs",
      image: "/images/devzone.png",
      description:
        "Devletter ia a newsletter subscribing single page app made with Nextjs and Tailwindcss.",
      tags: ["Nextjs", "Tailwindcss"],
      link: "https://github.com/taqui-786/Devletter",
    },
    {
      title: "CrouMaker - A Crousal Maker App",
      image: "/images/devzone.png",
      description:
        "Crousal Maker is a tool with in-built crousals templates edit and download it in any format.",
      tags: ["Nextjs", "jsPDF", "html2canvas", "Shadcn Ui"],
      link: "https://github.com/taqui-786/crousal-maker",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default Project;
