import useData from './useData';
import { Movies } from './useMovies';

const useTv = () => useData<Movies>("/tv/popular", '')
  

export default useTv
