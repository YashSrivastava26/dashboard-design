"use client";
import { FC } from "react";
import Banner from "./Banner";
import MenuList from "./MenuList";
import { Inter } from "next/font/google";

interface SideBarProps {}

const inter = Inter({
  subsets: ["latin"],
});

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="h-full w-full bg-[#15132B] flex flex-col">
      <div className="h-16 flex items-center justify-evenly flex-shrink-0">
        <h1
          className={`font-open-scans text-white text-2xl w-fit tracking-wider ${inter.className}`}
        >
          weframetech
        </h1>
      </div>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className={`h-[70%]`}>
          <MenuList />
        </div>
        <div className="h-[30%]">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
