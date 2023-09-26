import axios, { AxiosRequestConfig } from "axios";

import { API_KEY } from "../../config";
import { MovieResponse } from "../entities/MovieResponse";

export const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: API_KEY,
  },
});

interface FetchResponse<T> {
  results: T[];
  pages: number;
  total_pages: number;
  total_results: number;
}

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axios.get<FetchResponse<T>>(this.endpoint, config);
  };

  get = (id: number, config?: AxiosRequestConfig) => {
    return axios.get<MovieResponse>(`${this.endpoint}/${id}`, config);
  };
}

export default APIClient;
