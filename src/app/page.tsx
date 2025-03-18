import FramerWrapper from "@/components/animation/FramerWrapper";
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
// import HeroImage from "@/components/HeroImage";
import DownloadResumeBtn from "@/components/DownloadResumeBtn";
import GithubBtn from "@/components/animation/GithubBtn";
import WaveCard from "@/components/WaveCard";

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
        <DownloadResumeBtn />
      </FramerWrapper>
      <FramerWrapper
        className="h-full w-full mt-32 relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <WaveCard
          imgSrc="https://i.postimg.cc/dt6GnHYD/Mine.jpg"
          caption="Full Stack Developer"
        />
      </FramerWrapper>

      <GithubBtn />
    </>
  );
}
