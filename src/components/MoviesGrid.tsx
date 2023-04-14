import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useMovies from "../hooks/useMovies";
import SwiperComp from "./SwiperComp";
import usePopular from "../hooks/usePopular";

SwiperCore.use([Navigation, Pagination]);

const MoviesGrid = () => {
  const { data: movieData } = useMovies();
  const { data: popularData } = usePopular();
  return (
    <>
      <SwiperComp title="Top Rated" results={popularData} />
      <SwiperComp title="Discover more" results={movieData} />
    </>
  );
};

export default MoviesGrid;
