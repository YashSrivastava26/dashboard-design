"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import MenuList from "./MenuList";
import { Menu } from "lucide-react";
import SearchIcon from "../assets/search 2.svg";
import USA from "../assets/united-states 1.svg";
import Profile from "../assets/profilePicture.svg";
import ArrowDown from "../assets/arrow.svg";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";

import Bell from "../assets/bell 1.svg";
import Video from "../assets/Video Lesson 2 1.svg";
import Checkbox from "../assets/checkbox 1.svg";
import Office from "../assets/office 1.svg";
import Banner from "./Banner";

interface NavBarMobileProps {}

const open_scans = Open_Sans({
  subsets: ["latin"],
});

const intern = Inter({
  subsets: ["latin"],
});

const NavBarMobile: FC<NavBarMobileProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="h-full w-full bg-dark-02">
      <div className="flex h-full w-full items-center justify-between px-4">
        <Button
          ref={btnRef}
          colorScheme="purple"
          className="bg-transparent hover:bg-transparent!"
          onClick={onOpen}
        >
          <Menu />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent className="bg-dark-02">
            <DrawerHeader className="text-white text-center flex gap-y-4 flex-col">
              <div className="flex justify-center items-center">
                <DrawerCloseButton className="text-gray-01 pt-4" />
                <span>weframetech</span>
              </div>
              <div className=" relative h-4 w-full pl-2">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="bg-[#211A75] h-full w-full rounded-[4rem] p-4 pl-16 text-sm outline-none"
                />
                <Image
                  src={SearchIcon}
                  alt="search"
                  className="absolute top-3 left-9 h-3 w-3"
                />
              </div>
              <div className="flex gap-x-4 px-4 pt-8 justify-around items-center">
                <div className="relative">
                  <Image src={Bell} alt="search" className="h-6 w-6" />
                  <div className=" absolute -top-2 -right-1 rounded-full bg-[#5ECFFF] text-[0.5rem] h-4 w-4 flex items-center justify-center text-dark-01 font-bold">
                    12
                  </div>
                </div>
                <div className="relative">
                  <Image src={Video} alt="search" className="h-6 w-6" />
                  <div className=" absolute -top-2 -right-1 rounded-full bg-[#5ECFFF] text-[0.5rem] h-4 w-4 flex items-center justify-center text-dark-01 font-bold">
                    5
                  </div>
                </div>
                <div className="relative">
                  <Image src={Checkbox} alt="search" className="h-6 w-6" />
                  <div className=" absolute -top-2 -right-1 rounded-full bg-[#5ECFFF] text-[0.5rem] h-4 w-4 flex items-center justify-center text-dark-01 font-bold">
                    2
                  </div>
                </div>
                <div className="relative">
                  <Image src={Office} alt="search" className="h-6 w-6" />
                  <div className=" absolute -top-2 -right-1 rounded-full bg-[#E328AF] text-[0.5rem] h-4 w-4 flex items-center justify-center text-dark-01 font-bold">
                    !
                  </div>
                </div>
              </div>
            </DrawerHeader>
            <DrawerBody className="scrollbar scrollbar-thumb-primary scrollbar-track-dark-01 scrollbar-w-1 scrollbar-thumb-rounded">
              <MenuList />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div className="h-full flex items-center gap-x-4">
          <div className="bg-[#211A75] px-2 h-8 flex items-center rounded-[4rem] gap-x-2 w-fit">
            <Image src={USA} alt="search" className="w-4 h-4 rounded-full" />
            <Image src={ArrowDown} alt="search" className="w-2 h-2" />
          </div>

          <div className="flex items-center px-2 gap-x-2">
            <Image src={Profile} alt="search" className="w-10 h-10" />
            <Image src={ArrowDown} alt="search" className="w-2 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
