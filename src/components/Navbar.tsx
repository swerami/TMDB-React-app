import { Genre } from "../hooks/useGenres";

interface Props {
  genres: Genre[];
}

const Navbar = ({ genres }: Props) => {
  const modifiedGenres = genres.slice(0, 3);
  return (
    <ul className="flex flex-row gap-6 font-medium text-gray-400">
      {genres &&
        modifiedGenres?.map((genre) => (
          <li
            className="cursor-pointer hover:scale-105 hover:text-gray-500 transition duration-300"
            key={genre.id}
          >
            {genre.name}
          </li>
        ))}
    </ul>
  );
};

export default Navbar;
