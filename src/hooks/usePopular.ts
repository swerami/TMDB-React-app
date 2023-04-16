import useData from './useData';

interface Person {
    id: number;
    name: string;
    popularity: number;
    profile_path: string | null;
  }

export interface Popular {
   results: Person[]
  }

const usePopular = () => useData<Popular>("/movie/top_rated")

export default usePopular
