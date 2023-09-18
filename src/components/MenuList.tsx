"use client";
import Image from "next/image";
import { FC } from "react";
import Dashboard from "../assets/dashboard 1.svg";
import Email from "../assets/email 1.svg";
import Chat from "../assets/comment 1.svg";
import Kanban from "../assets/thumbnail 1.svg";
import Contact from "../assets/contact 1.svg";
import Settings from "../assets/setting 1.svg";
import Calander from "../assets/calendar-silhouette 1.svg";
import Invoice from "../assets/invoice 1.svg";
import Shop from "../assets/online-shopping 1.svg";
import Courses from "../assets/Video Lesson 2 1.svg";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@chakra-ui/react";
import { Open_Sans } from "next/font/google";
interface MenuListProps {}
const open_scans = Open_Sans({
  subsets: ["latin"],
});

const MenuList: FC<MenuListProps> = ({}) => {
  return (
    <div className="flex flex-col pl-8 py-2 w-full gap-y-4  h-full">
      <h2
        className={`uppercase text-white tracking-wide ${open_scans.className}`}
      >
        Main Menu
      </h2>

      <ul
        role="list"
        className="flex flex-1 flex-col gap-y-2 max-h-full overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-track-dark-01 scrollbar-w-1 scrollbar-thumb-rounded"
      >
        {/* dashboard */}
        <li className="py-1">
          <a
            href="#"
            className="text-base flex items-center justify-between text-[#464366]"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Dashboard} alt="dashboard" className="w-4 h-4" />
              <span className="">Home</span>
            </div>
          </a>
        </li>

        {/* Email */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#464366] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 justify-center items-center">
              <Image src={Email} alt="dashboard" className="w-4 h-4" />
              <span className="">Email</span>
              <div className="rounded-full bg-[#5ECFFF] text-[0.6rem] h-4 w-4 flex items-center justify-center text-white">
                17
              </div>
            </div>
            <ChevronDown className="h-4" />
          </a>
        </li>

        {/* Chat */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Chat} alt="dashboard" className="w-4 h-4" />
              <span className="">Chat</span>
            </div>
          </a>
        </li>

        {/* Kanban */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#6418C3] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Kanban} alt="dashboard" className="w-4 h-4" />
              <span className="">Kanban</span>
            </div>
            <ChevronRight className="h-4" />
          </a>
        </li>

        {/* Contact */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center gap-x-4"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Contact} alt="dashboard" className="w-4 h-4" />
              <span className="">Contact</span>
            </div>
            <Badge className="rounded-xl text-[0.6rem] py-1 px-2 bg-[#E328AF] leading-3 text-white font-semibold">
              New
            </Badge>
          </a>
        </li>
        {/* Calander */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Calander} alt="dashboard" className="w-4 h-4" />
              <span className="">Calander</span>
            </div>
          </a>
        </li>
        {/* Courses */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Courses} alt="dashboard" className="w-4 h-4" />
              <span className="">Courses</span>
            </div>
            <ChevronRight className="h-4" />
          </a>
        </li>
        {/* Shop */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Shop} alt="dashboard" className="w-4 h-4" />
              <span className="">Shop</span>
            </div>
          </a>
        </li>
        {/* Invoice */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Invoice} alt="dashboard" className="w-4 h-4" />
              <span className="">Invoice</span>
            </div>
            <ChevronRight className="h-4" />
          </a>
        </li>
        {/* Settings */}
        <li className="py-1">
          <a
            href="#"
            className="text-[#7879F1] text-lg flex items-center justify-between"
          >
            <div className="flex gap-x-4 items-center justify-center">
              <Image src={Settings} alt="dashboard" className="w-4 h-4" />
              <span className="">Settings</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
