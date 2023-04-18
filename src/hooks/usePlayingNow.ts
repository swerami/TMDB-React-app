import useData from './useData';
import { Movies } from './useMovies';

const usePlayingNow = () => useData<Movies>("/movie/now_playing", '')
  

export default usePlayingNow
