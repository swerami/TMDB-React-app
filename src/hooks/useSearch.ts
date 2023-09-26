import { MovieResponse } from "../entities/MovieResponse";
import useData from "./useData";

interface SearchProps {
  query: string;
  dependency?: any;
}

const useSearch = ({ query, dependency }: SearchProps) =>
  useData<MovieResponse>(
    "/search/movie",
    "",
    {
      params: {
        query: query,
      },
    },
    dependency
  );

export default useSearch;
