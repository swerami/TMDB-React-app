import React from "react";
import MoviesGrid from "../../components/MoviesGrid";
import useMovies from "../../hooks/useMovies";
import usePopular from "../../hooks/usePopular";

const HomePage = () => {
  const { data: MovieData } = useMovies();
  const { data: TopRateData } = usePopular();
  return <MoviesGrid MovieData={MovieData} TopRateData={TopRateData} />;
};

export default HomePage;
