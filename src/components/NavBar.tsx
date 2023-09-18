import Image from "next/image";
import { FC } from "react";
import Search from "../assets/search 2.svg";
import Bell from "../assets/bell 1.svg";
import Video from "../assets/Video Lesson 2 1.svg";
import Checkbox from "../assets/checkbox 1.svg";
import Office from "../assets/office 1.svg";
import USA from "../assets/united-states 1.svg";
import Profile from "../assets/profilePicture.svg";
import ArrowDown from "../assets/arrow.svg";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="flex bg-[#15132B] h-full items-center justify-between px-6">
      <div className="relative h-8 w-[25%] xl:w-[30%]">
        <input
          type="text"
          placeholder="Search Here"
          className="bg-[#211A75] h-full w-full rounded-[4rem] p-4 pl-16"
        />
        <Image
          src={Search}
          alt="search"
          className="absolute top-2 left-9 h-4 w-4"
        />
      </div>

      <div className="h-full flex items-center">
        <div className="uppercase text-xs lg:text-sm tracking-wide text-primary underline font-bold p-8">
          Other Menus
        </div>

        <div className="flex gap-x-4 px-4">
          <Image src={Bell} alt="search" className="h-4 w-4" />
          <Image src={Video} alt="search" className="h-4 w-4" />
          <Image src={Checkbox} alt="search" className="h-4 w-4" />
          <Image src={Office} alt="search" className="h-4 w-4" />
        </div>

        <div className="bg-[#211A75] px-4 h-8 flex ext-xs lg:text-sm items-center rounded-[4rem] text-white uppercase tracking-wide gap-x-2 w-fit">
          <Image src={USA} alt="search" className="w-4 h-4 rounded-full" />
          English
          <Image src={ArrowDown} alt="search" className="w-2 h-2" />
        </div>

        <div className="flex items-center px-6">
          <Image src={Profile} alt="search" className="w-10 h-10" />
          <div className="hidden xl:flex flex-col px-2 text-xs">
            <span className="text-white whitespace-nowrap overflow-hidden text-ellipsis">
              Instructor Day
            </span>
            <span className="text-iris-80 text-ellipsis">Super Admin</span>
          </div>
          <Image src={ArrowDown} alt="search" className="w-2 h-2" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
