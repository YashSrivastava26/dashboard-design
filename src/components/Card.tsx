"use client";
import { Avatar, AvatarGroup, Progress } from "@chakra-ui/react";
import { FC } from "react";
import ProfilePic from "../assets/profilePicture.svg";
import { Clock4, MoreHorizontal } from "lucide-react";

interface CardProps {
  content: CardContents;
}

const Card: FC<CardProps> = ({ content }) => {
  const textStyle = {
    color: content.color,
  };
  const bgstyle = {
    backgroundColor: content.color,
  };
  return (
    <div className="bg-[#211A75] w-full rounded-lg flex flex-col p-4 justify-center gap-y-2">
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-black" style={bgstyle}></div>
          <span className="text-xs" style={textStyle}>
            {content.label}
          </span>
        </div>
        <MoreHorizontal className="h-3 text-gray-01" />
      </div>

      <span className="text-sm">
        {content.description}adfgkudfgakdf fg kdf asudf bdsf udf buisdfa ;oi
        osku eu bf sdnf
      </span>

      <Progress
        colorScheme={content.color}
        size="xs"
        value={parseInt(content.completion)}
        className="rounded-md bg-dark-04"
      />

      <div className="flex justify-between">
        <AvatarGroup size="xs" max={4} className="text-dark-02">
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
          <Avatar src={ProfilePic} className="bg-gray-01" />
        </AvatarGroup>

        <div className="flex items-center">
          <Clock4 className="h-3 w-3 text-gray-01" />
          <span className="text-xs text-gray-01 pl-1">{content.due}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
