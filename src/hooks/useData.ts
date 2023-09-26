import { useEffect, useState } from "react";
import { axiosInstance } from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  results: T[];
  genres: T[];
}

interface ErrorResponse {
  message: string;
}

const useData = <T>(
  endpoint: string,
  type?: string,
  requestConfig?: AxiosRequestConfig,
  dependency?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    axiosInstance
      .get<FetchResponse<T>>(endpoint, { ...requestConfig })
      .then((res) => {
        setData(type ? res.data.genres : res.data.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [dependency]);

  return { data, error };
};

export default useData;
