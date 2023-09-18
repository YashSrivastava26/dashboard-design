import { FC } from "react";
import HeroTitle from "./HeroTitle";
import TaskList from "./TaskList";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="h-full w-full p-4 flex flex-col">
      <div className="flex w-full">
        <HeroTitle />
      </div>
      <div className="h-full w-full pt-4 overflow-y-hidden overflow-hidden">
        <TaskList />
      </div>
    </div>
  );
};

export default Hero;
