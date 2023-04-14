import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useMovies } from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";

SwiperCore.use([Navigation, Pagination]);

const MoviesGrid = () => {
  const { movies } = useMovies();
  return <SwiperComp results={movies} />;
};

export default MoviesGrid;
