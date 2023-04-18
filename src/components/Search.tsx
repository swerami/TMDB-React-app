import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="w-full flex flex-row border items-center justify-center py-3 text-gray-800 hover:bg-white transition duration-300 rounded-full">
        <RiSearch2Line className="text-inherit mx-3 text-xl" />
        <input
          type="text"
          className="w-full px-2 rounded-lg bg-inherit focus:outline-none"
          placeholder="Search for Movies"
        />
      </div>
    </form>
  );
};

export default Search;
