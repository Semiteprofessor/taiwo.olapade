import React from "react";
import Image from "next/image";

const WaveCard = ({ imgSrc, caption }: { imgSrc: string; caption: string }) => {
  return (
    <figure className="relative float-left m-1 cursor-pointer animate-out origin-[center_-36px] hover:[animation-play-state:paused]">
      <span className="absolute top-[-10px] left-1/2 w-5 h-5 border-[1.5px] border-white border-b-0 border-r-0 rotate-[35deg]"></span>
      <span
        className="absolute top-[-23px] left-1/2 h-[44px] w-[47px] bg-no-repeat bg-contain z-10"
        style={{
          backgroundImage:
            "url(https://cdn.hashnode.com/res/hashnode/image/upload/v1602040503586/FW6g79WBY.png)",
          backgroundSize: "30px 30px",
        }}
      ></span>

      <Image
        src={imgSrc}
        alt={caption}
        width={800}
        height={850}
        className="block border-[5px] border-gray-100 w-[2000px] h-[650px]"
      />

      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  );
};

export default WaveCard;
