import { useState } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  label: string;
  list: { [key: string]: IconType };
}

const SidebarList = ({ list, label }: Props) => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  return (
    <ul className="flex flex-col gap-8 py-8">
      <label className="text-gray-400 capitalize">{label}</label>
      {Object.keys(list).map((key) => {
        const Icon = list[key];
        const formattedKey = key.replace("_", " ");
        return (
          <li
            key={key}
            className={`flex items-center gap-2 cursor-pointer
            ${activeItem === key ? "border-r-4 border-red-500" : ""}
            `}
            onClick={() => setActiveItem(key)}
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-300 ${
                activeItem === key ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`
              transition-colors duration-300
            ${activeItem === key ? "text-gray-500 font-bold" : "text-gray-400"}
            `}
            >
              {formattedKey}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarList;
