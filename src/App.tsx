import MoviesGrid from "./components/MoviesGrid";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import useGenres from "./hooks/useGenres";
import useMovies from "./hooks/useMovies";
import usePopular from "./hooks/usePopular";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface genData {
  id: number;
  name: string;
}

const App = () => {
  const { data: GenreData } = useGenres();
  const { data: MovieData } = useMovies();
  const { data: TopRateData } = usePopular();

  return (
    <div className="grid grid-cols-12 gap-4 p-8">
      <div className="col-span-2 hidden lg:block">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-7">
        <Navbar genres={GenreData} />
        <MoviesGrid MovieData={MovieData} TopRateData={TopRateData} />
      </div>
      <div className="col-span-3 hidden xl:block">
        <h1>hiii</h1>
      </div>
    </div>
  );
};

export default App;
