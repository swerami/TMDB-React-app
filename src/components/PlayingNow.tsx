import usePlayingNow from "../hooks/usePlayingNow";

const PlayingNow = () => {
  const { data } = usePlayingNow();
  return (
    <div>
      {data.map((movie) => (
        <div key={movie.title}>{movie.title}</div>
      ))}
    </div>
  );
};

export default PlayingNow;
