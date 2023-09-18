import { FC } from "react";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="h-full w-full px-12 py-8 flex items-center justify-center">
      <div className="h-full w-full max-w-[12rem] max-h-[12rem] rounded-2xl bg-gradient-to-br from-blue-700 to-blue-400 overflow-hidden relative p-4">
        <div className="absolute w-[50%] h-[50%] rounded-tl-[100%] bg-blue-400 bottom-0 right-0" />

        <div className="h-full w-full flex flex-col"></div>
      </div>
    </div>
  );
};

export default Banner;
