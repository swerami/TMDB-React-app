import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import SwiperTS from "./SwiperTS";

SwiperCore.use([Navigation, Pagination]);

interface Props<T> {
  results: T[];
  title: string;
}

const SwiperComp = <T,>({ results, title }: Props<T>) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div className="w-[720px] relative">
      <SwiperTS
        spaceBetween={12}
        slidesPerView={4}
        loop={false}
        classes={"pt-12"}
      >
        <div className="w-full absolute top-0 right-0 flex flex-row justify-between items-center">
          <p className="font-semibold text-lg">{title}</p>
          <div className="flex flex-row gap-4">
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
        </div>
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
