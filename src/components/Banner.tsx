import { FC } from "react";
import Vector from "../assets/Vector (1).svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="h-full w-full px-4 md:px-10 py-4 md:py-8 flex items-center justify-center">
      <div className="max-h-[8rem] max-w-[8rem] md:max-w-[12rem] md:max-h-[12rem] rounded-2xl bg-gradient-to-br from-blue-700 to-blue-400 overflow-hidden relative p-4">
        <div className="absolute w-[50%] h-[50%] rounded-tl-[100%] bg-blue-400 bottom-0 right-0" />

        <div className="flex flex-col justify-between gap-y-2">
          <div className="flex flex-col gap-y-2 z-10">
            <Image src={Vector} alt="vector" className="h-4 w-4 object-cover" />
            <span className="flex flex-wrap text-xs">
              Increase your work with kanban
            </span>
          </div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
