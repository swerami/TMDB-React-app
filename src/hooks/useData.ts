import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface FetchResponse<T> {
  results: T[]
  genres: T[]
}

interface ErrorResponse {
  message: string
}

const useData = <T>(endpoint: string, type: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        if (type === 'genres') {
          setData(res.data.genres);
        } else {
          setData(res.data.results);
        }
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);
  

  return { data, error };
}

export default useData;
