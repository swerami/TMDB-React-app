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
  // State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set slidesPerView based on window width
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
    <div className="relative">
      <SwiperTS
        spaceBetween={12}
        slidesPerView={slidesPerView}
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
