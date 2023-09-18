"use client";

import { FC } from "react";
import Image from "next/image";
import BackBtn from "../assets/btnback.svg";
import Logo from "../assets/logo 1.svg";
import ProfilePic from "../assets/profilePicture.svg";
import AddFriend from "../assets/add-friend 1.svg";
import Chat from "../assets/chat.svg";
import { Avatar, AvatarGroup, Button, Progress } from "@chakra-ui/react";

interface HeroTitleProps {}

const HeroTitle: FC<HeroTitleProps> = ({}) => {
  return (
    <div className="flex w-full bg-dark-02 rounded-2xl p-2">
      <div className="p-2">
        <Image src={BackBtn} alt="back" className="h-8 w-8 cursor-pointer" />
      </div>
      <div className="p-2 pl-0 flex flex-col  grow">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className=" text:sm sm:text-lg">School November Tasks</h3>
            <span className="text-gray-01 text-xs hidden md:block">
              Created by Instructor Day on November 31, 2022
            </span>
          </div>

          <div className="text-right flex items-center justify-center">
            <div>
              <h3 className="text-md hidden md:block">Centered Martial Arts</h3>
              <span className="text-gray-01 text-xs hidden md:block">
                Centered Martial Arts
              </span>
            </div>
            <div className="px-2">
              <Image
                src={Logo}
                alt="logo"
                className="h-8 w-8 bg-white rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center py-2">
          <div className="flex gap-x-4">
            <AvatarGroup
              size="xs"
              max={4}
              className="text-dark-02 hidden sm:flex"
            >
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
              <Avatar src={ProfilePic} className="bg-gray-01" />
            </AvatarGroup>

            <Button
              className="bg-primary text-white gap-x-1"
              size="xs"
              colorScheme="unset"
            >
              <Image src={AddFriend} alt="add friend" className="h-4 w-4" />
              <span className="hidden lg:block">Invite People</span>
            </Button>

            <Button
              variant="outline"
              className="bg-transparent border-primary text-white gap-x-1"
              size="xs"
              colorScheme="unset"
            >
              <span>Private</span>
            </Button>

            <Button
              className="bg-primary text-white gap-x-1"
              size="xs"
              colorScheme="unset"
            >
              <Image src={AddFriend} alt="add friend" className="h-4 w-4" />
              <span className="hidden lg:block">Edit</span>
            </Button>

            <Button
              className="bg-primary text-white gap-x-1"
              size="xs"
              colorScheme="unset"
            >
              <Image src={Chat} alt="add friend" className="h-4 w-4" />
              <span className="hidden lg:block">45 Comments</span>
            </Button>
          </div>
          <div className="hidden lg:flex text-xs items-center justify-center gap-x-4">
            Total Progress 60%
            <Progress
              value={60}
              size="xs"
              className="bg-dark-04 w-28 rounded-md"
              colorScheme="purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
