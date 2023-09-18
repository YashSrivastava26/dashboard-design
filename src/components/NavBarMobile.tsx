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

interface NavBarMobileProps {}

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
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent className="bg-dark-02">
            <DrawerCloseButton className="text-gray-01" />
            <DrawerHeader className="text-white text-center">
              weframetech
            </DrawerHeader>

            <DrawerBody>
              <MenuList />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div className="h-full flex items-center gap-x-4">
          <Image src={SearchIcon} alt="search" className="h-4 w-4" />

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
