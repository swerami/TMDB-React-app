import MovieCard from "./MovieCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperTS from "./SwiperTS";

SwiperCore.use([Navigation, Pagination]);

interface Props<T> {
  results: T[];
  title: string;
}

const SwiperComp = <T,>({ results, title }: Props<T>) => {
  return (
    <div className="relative">
      <SwiperTS
        spaceBetween={12}
        slidesPerView={4}
        loop={false}
        showNavigation={true}
        classes={"pt-12"}
      >
        <p className="absolute top-2 left-0 font-semibold text-lg">{title}</p>
        {results.map((result, index) => (
          <SwiperSlide key={index}>
            <MovieCard data={result} />
          </SwiperSlide>
        ))}
      </SwiperTS>
    </div>
  );
};

export default SwiperComp;
