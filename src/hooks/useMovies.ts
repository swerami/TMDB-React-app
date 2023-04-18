import useData from './useData';

export interface Movies {
    title: string;
    release_date: string;
    poster_path: string;
  }

const useMovies = () => useData<Movies>("/discover/movie", '')

export default useMovies
