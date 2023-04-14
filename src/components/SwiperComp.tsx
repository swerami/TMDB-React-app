import { useRef } from "react";
import MovieCard from "./MovieCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Movies } from "../hooks/useMovies";

SwiperCore.use([Navigation, Pagination]);

// Define a generic type T for the data
interface Props<T> {
  results: T[];
}

const SwiperComp = <T extends Movies>({ results }: Props<T>) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div className="w-[720px] relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        className="swiper-container py-14"
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
        {results.map((result) => (
          <SwiperSlide key={result.title}>
            <MovieCard data={result} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
