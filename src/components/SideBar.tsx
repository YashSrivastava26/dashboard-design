import { Menu } from "lucide-react";
import { FC } from "react";
import Banner from "./Banner";
import MenuList from "./MenuList";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="h-full w-full bg-[#15132B] flex flex-col">
      <div className="h-16 flex items-center justify-evenly flex-shrink-0">
        <h1 className="text-white text-2xl w-fit tracking-wider">
          weframetech
        </h1>
        <Menu className="text-white" size={32} />
      </div>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="h-[70%]">
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
