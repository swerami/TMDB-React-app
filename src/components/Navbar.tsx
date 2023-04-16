import { Genre } from "../hooks/useGenres";

interface Props {
  genres: Genre[];
}

const Navbar = ({ genres }: Props) => {
  return (
    <ul>
      {genres && genres?.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default Navbar;
