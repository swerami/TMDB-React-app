import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useMovies, { Movies } from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";
import usePopular, { Popular } from "../hooks/usePopular";

SwiperCore.use([Navigation, Pagination]);

const MoviesGrid = () => {
  const { data: movieData } = useMovies();
  const { data: popularData } = usePopular();
  return (
    <>
      <SwiperComp results={movieData} />
      <SwiperComp results={popularData} />
    </>
  );
};

export default MoviesGrid;
