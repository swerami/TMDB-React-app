import { useData } from './useData';
import { Movies } from './useMovies';

interface Person {
    id: number;
    name: string;
    popularity: number;
    profile_path: string | null;
  }

export interface Popular {
   results: Person[]
  }

const usePopular = () => useData<Movies>("/movie/top_rated")

export default usePopular
