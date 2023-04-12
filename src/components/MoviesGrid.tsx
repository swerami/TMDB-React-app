import { useEffect, useState, useRef } from "react";
import apiClient from "../services/api-client";
import movieImage from "../services/movie-image";
import MovieCard from "./MovieCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

SwiperCore.use([Navigation, Pagination]);

export interface Movies {
  title: string;
  release_date: string;
  poster_path: string;
}

const MoviesGrid = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    apiClient
      .get("/discover/movie")
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-[720px] relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        className="swiper-container relative py-14"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="absolute top-0 right-0 flex flex-row gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full border border-gray-300"
          >
            <AiOutlineLeft className="w-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full border border-gray-300"
          >
            <AiOutlineRight className="w-4" />
          </button>
        </div>
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <MovieCard data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesGrid;
