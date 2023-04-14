import { Movies } from "./MoviesGrid";
import movieImage from "../services/movie-image";

interface Props {
  data: Movies;
}

const MovieCard = ({ data }: Props) => {
  const backgroundImage = movieImage(data.poster_path);
  return (
    <>
      <div
        className="grid grid-rows-2 gap-4 h-64 rounded-2xl" // relative
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div
          className="absolute inset-0 bg-gradient-to-t 
          from-white to-transparent opacity-0 
          transition-opacity duration-300 rounded-2xl
          hover:opacity-100"
        /> */}
      </div>
      <p className="font-bold text-md cursor-pointer my-2">{data.title}</p>
    </>
  );
};

export default MovieCard;
