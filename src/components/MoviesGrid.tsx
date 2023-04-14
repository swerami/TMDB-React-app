import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useMovies, { Movies } from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";

SwiperCore.use([Navigation, Pagination]);

const MoviesGrid = () => {
  const { data } = useMovies();
  return <SwiperComp results={data} />;
};

export default MoviesGrid;
