import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Movies {
    title: string;
    release_date: string;
    poster_path: string;
  }

export const useMovies = () => {
    const [movies, setMovies] = useState<Movies[]>([]);
    useEffect(() => {
        apiClient
          .get("/discover/movie")
          .then((res) => {
            setMovies(res.data.results);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      
      return { movies }
}
