import MovieCard from "./MovieCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperTS from "./SwiperTS";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination]);

interface Props<T> {
  results: T[];
  title: string;
}

const SwiperComp = <T,>({ results, title }: Props<T>) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesPerView;
  switch (true) {
    case windowWidth >= 0 && windowWidth <= 420:
      slidesPerView = 1;
      break;
    case windowWidth >= 420 && windowWidth <= 1000:
      slidesPerView = 2;
      break;
    case windowWidth > 900 && windowWidth <= 1600:
      slidesPerView = 3;
      break;
    default:
      slidesPerView = 4;
      break;
  }
  return (
    <div className="relative w-full">
      <SwiperTS
        spaceBetween={12}
        slidesPerView={slidesPerView}
        loop={false}
        showNavigation={true}
        classes={"pt-12"}
      >
        <p className="absolute top-2 left-0 font-semibold text-lg">{title}</p>
        {results.map((result: any, index) => (
          <SwiperSlide key={index} className="">
            <MovieCard data={result} />
          </SwiperSlide>
        ))}
      </SwiperTS>
    </div>
  );
};

export default SwiperComp;
