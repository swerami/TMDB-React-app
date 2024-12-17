import useGenres from "../hooks/useGenres";
import usePlayingNow from "../hooks/usePlayingNow";
import useTv from "../hooks/useTv";
import PlayingNow from "./PlayingNow";

const RightSidebarGrid = () => {
  const { data: movies } = usePlayingNow();
  const { data: tv } = useTv();
  const { data: genres } = useGenres();
  return (
    <div className="flex flex-col gap-10 h-fit">
      <PlayingNow title="Playing Now" data={movies} genres={genres} />
      <PlayingNow title="Popular TV shows" data={tv} genres={genres} />
    </div>
  );
};

export default RightSidebarGrid;
