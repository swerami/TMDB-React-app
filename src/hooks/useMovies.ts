import useData from './useData';

export interface Movies {
    id: number;  
    name: string;
    title: string;
    release_date: string;
    poster_path: string;
    genre_ids: number[];
    vote_average: number;
  }

const useMovies = () => useData<Movies>("/discover/movie", '')

export default useMovies
