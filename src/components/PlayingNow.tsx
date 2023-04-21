import movieImage from "../services/movie-image";
import imdbLogo from "../assets/imdb.webp";
import { Movies } from "../hooks/useMovies";
import { Genre } from "../hooks/useGenres";

interface Props {
  data: Movies[];
  genres?: Genre[];
  title: string;
}

const PlayingNow = ({ data, genres, title }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl">{title}:</h1>
      {data.slice(0, 4).map((item) => (
        <div className="flex flex-row gap-4" key={item.id}>
          <img
            className="w-14 object-cover rounded-lg"
            src={movieImage(item.poster_path, "w342")}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold cursor-pointer">
                {item.title ? item.title : item.name}
              </p>
              {genres && (
                <p className="text-gray-400 text-sm">
                  {genres
                    .filter((genre) => item.genre_ids.includes(genre.id))
                    .map((genre) => genre.name)
                    .join(", ")}
                </p>
              )}
            </div>

            <p className="flex flex-row gap-2 items-center">
              <img className="w-8" src={imdbLogo} alt="imdb icon" />
              <span className="text-gray-400 text-sm mt-1">
                {item.vote_average}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayingNow;
