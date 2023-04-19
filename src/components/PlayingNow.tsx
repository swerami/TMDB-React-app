import useGenres from "../hooks/useGenres";
import usePlayingNow from "../hooks/usePlayingNow";
import movieImage from "../services/movie-image";
import imdbLogo from "../assets/imdb.webp";

const PlayingNow = () => {
  const { data } = usePlayingNow();
  const { data: genres } = useGenres();

  return (
    <div className="flex flex-col gap-4">
      {data.slice(0, 4).map((movie) => (
        <div className="flex flex-row gap-4" key={movie.title}>
          <img
            className="w-14 object-cover rounded-lg"
            src={movieImage(movie.poster_path, "w342")}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold cursor-pointer">{movie.title}</p>
              <p className="text-gray-400 text-sm">
                {genres
                  .filter((genre) => movie.genre_ids.includes(genre.id))
                  .map((genre) => genre.name)
                  .join(", ")}
              </p>
            </div>

            <p className="flex flex-row gap-2 items-center">
              <img className="w-8" src={imdbLogo} alt="imdb icon" />
              <span className="text-gray-400 text-sm mt-1">
                {movie.vote_average}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayingNow;
