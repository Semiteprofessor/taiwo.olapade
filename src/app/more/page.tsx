import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils/utils";
import { buttonVariants } from "@/components/ui/Button";
import FramerWrapper from "@/components/animation/FramerWrapper";

const More = () => {
  const morelink = [
    {
      title: "Dev.to",
      description:
        "I write blogs on web development, trending tech stacks or JavaScript tips on Dev.to.",
      link: "https://dev.to/taiwo_olapade_3df4ffc6d2f",
    },
    {
      title: "Hashnode",
      description:
        "I share articles on web development, modern tech stacks, and JavaScript guides on Hashnode.",
      link: "https://hashnode.com/@semiteprofessor",
    },
    {
      title: "Medium",
      description:
        "I publish blogs on development, technology, and tutorials on Medium.",
      link: "https://medium.com/@semiteprofessor",
    },
    {
      title: "Daily.Dev",
      description:
        "I’m part of Daily.Dev squads where I contribute posts and discussions.",
      link: "https://app.daily.dev/taiwoolapade",
    },
    {
      title: "Gumroad",
      description:
        "I sell digital products such as Notion templates and web projects on Gumroad.",
      link: "https://semiteprofessor.gumroad.com/",
    },
    {
      title: "Buy Me a Coffee",
      description:
        "Support my work to help me create more valuable content and projects.",
      link: "https://buymeacoffee.com/semiteprofv",
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>

      {/* Heading */}
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>

      {/* Responsive Grid */}
      <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {morelink.map((value, indx) => (
          <FramerWrapper
            key={indx}
            className="w-full"
            y={0}
            scale={0.9}
            delay={indx / 6}
            duration={0.2}
          >
            <Card className="w-full h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-poppins text-primary">
                  {value.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={value.link}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full gap-3"
                  )}
                >
                  <ExternalLink />
                  Visit here
                </Link>
              </CardFooter>
            </Card>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default More;
