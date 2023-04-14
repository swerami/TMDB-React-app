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
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

const listItems: { [key: string]: IconType } = {
  Home: AiOutlineHome,
  Community: RiCommunityLine,
  Discovery: AiOutlineCompass,
  Coming_soon: AiOutlineFieldTime,
};

const socialItems: { [key: string]: IconType } = {
  Friends: BsPeople,
  Media: GoFileMedia,
};

const generalItems: { [key: string]: IconType } = {
  settings: IoSettingsOutline,
  logout: CiLogout,
};

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="border-r h-screen">
      <div className="flex flex-row items-center gap-2">
        <img
          className="w-12 text-red-500"
          src="/src/assets/logo.svg"
          alt="website logo"
        />
        <p className="font-bold text-2xl">Exxmon.</p>
      </div>
      <SidebarList
        active={active}
        onSelect={(key) => setActive(key)}
        label={"menu"}
        list={listItems}
      />
      <SidebarList
        active={active}
        onSelect={(key) => setActive(key)}
        label={"Social"}
        list={socialItems}
      />
      <SidebarList
        active={active}
        onSelect={(key) => setActive(key)}
        label={"general"}
        list={generalItems}
      />
    </nav>
  );
};

export default Navbar;
