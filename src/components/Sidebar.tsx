import SidebarList from "./SidebarList";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { RiCommunityLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";

const listItems: { [key: string]: IconType } = {
  Home: AiOutlineHome,
  Community: RiCommunityLine,
  Discovery: AiOutlineCompass,
  Coming_soon: AiOutlineFieldTime,
};

const Navbar = () => {
  return (
    <nav className="border-r h-full">
      <div className="flex flex-row items-center gap-2">
        <img
          className="w-12 text-red-500"
          src="/src/assets/logo.svg"
          alt="website logo"
        />
        <p className="font-bold text-2xl">Exxmon.</p>
      </div>
      <SidebarList label={"menu"} list={listItems} />
    </nav>
  );
};

export default Navbar;
