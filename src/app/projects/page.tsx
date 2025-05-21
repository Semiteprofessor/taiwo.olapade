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
      title: "Jobber",
      image: "/images/devzone.png",
      description: "A freelancer job Marketplace",
      tags: [
        "Node.js",
        "Microservices",
        "Elasticsearch",
        "RabbitMq",
        "React.js",
        "Typescript",
        "Redux",
      ],
      link: "https://staging-shop.3xg.africa/",
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

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default Project;
