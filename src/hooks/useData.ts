import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface FetchResponse<T> {
    results: T[]
}

export const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        apiClient
          .get<FetchResponse<T>>(endpoint)
          .then((res) => {
            setData(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      
      return { data }
}