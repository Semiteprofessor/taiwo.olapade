import FramerWrapper from "@/components/animation/FramerWrapper";
import HeroTexts from "@/components/ui/HeroTexts";

export const siteConfig = {
  name: "Taiwo Olapade",
  description: "I am a passionate Software Developer.",
  ogImage: "",
  url: "http://taiwoolapade.vercel.app",
};
export default function Home() {
  return (
    <>
      {/* LEFT SIDE */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
      </FramerWrapper>
    </>
  );
}
