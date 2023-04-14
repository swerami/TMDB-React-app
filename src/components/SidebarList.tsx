import { IconType } from "react-icons/lib";

interface Props {
  label: string;
  list: { [key: string]: IconType };
  onSelect: (key: string) => void;
  active: string;
}

const SidebarList = ({ list, label, onSelect, active }: Props) => {
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
            ${active === key ? "border-r-4 border-red-500" : ""}
            `}
            onClick={() => onSelect(key)}
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-300 ${
                active === key ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span
              className={`
              transition-colors duration-300
            ${active === key ? "text-gray-500 font-bold" : "text-gray-400"}
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
