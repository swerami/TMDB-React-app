import { Movies } from "./MoviesGrid";
import movieImage from "../services/movie-image";

interface Props {
  data: Movies;
}

const MovieCard = ({ data }: Props) => {
  const backgroundImage = movieImage(data.poster_path);
  return (
    <div
      className="relative flex flex-col gap-4 h-64 rounded-2xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t 
          from-white to-transparent opacity-0 
          transition-opacity duration-300 rounded-2xl
          hover:opacity-100"
      />
      <p>{data.title}</p>
    </div>
  );
};

export default MovieCard;
