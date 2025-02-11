import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] min-h-[345px] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base font-poppins">{value.description}</p>
          <div className="w-full h-fit flex mt-2 justify-center flex-row gap-3">
            {value.tags.map((tag, index) => (
              <span
                key={tag + index}
                className={cn(
                  "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium",
                  tag === "Nextjs" && "bg-teal-100 text-teal-800",
                  tag === "Freelancing" && "bg-yellow-100 text-yellow-800",
                  tag === "Shadcn Ui" && "bg-blue-100 text-blue-800",
                  tag === "Typescript" && "bg-red-100 text-red-800",
                  ![
                    "Nextjs",
                    "Freelancing",
                    "Shadcn Ui",
                    "Typescript",
                  ].includes(tag) && "bg-gray-100 text-gray-800"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Link
            href={value.link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex"
            )}
          >
            Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
