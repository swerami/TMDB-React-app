import { useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import useSearch from "../hooks/useSearch";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { Link } from "react-router-dom";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [debouncedValue, setDebouncedValue] = useDebouncedValue("", 800);
  const [isInputFocused, setInputFocused] = useState(false);

  const { data } = useSearch({
    query: debouncedValue,
    dependency: debouncedValue,
  });

  console.log("search data", data);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="relative"
    >
      <div
        className={twMerge(
          "input input-bordered w-full flex flex-row border items-center justify-center py-3 text-gray-800 hover:bg-white transition duration-300 rounded-full",
          isInputFocused && "border-blue-500"
        )}
      >
        <RiSearch2Line className="text-inherit mx-3 text-xl" />
        <input
          type="text"
          onChange={(e) => setDebouncedValue(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          ref={inputRef}
          className="w-full px-2 rounded-lg bg-inherit focus:outline-none"
          placeholder="Search for Movies"
        />
      </div>
      {isInputFocused &&
        data &&
        inputRef?.current &&
        inputRef?.current?.value?.length > 0 && (
          <div
            className={twMerge(
              "max-h-[300px] flex my-2 flex-col overflow-auto absolute transition w-full bg-base-200 rounded-box"
            )}
          >
            {data.map((movie) => (
              <div
                className="p-2 transition-colors duration-300 hover:bg-base-300"
                key={movie?.id}
              >
                <Link to={""}>{movie?.title}</Link>
              </div>
            ))}
          </div>
        )}
    </form>
  );
};

export default Search;
