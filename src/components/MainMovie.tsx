import { SwiperSlide } from "swiper/react";
import useMovies from "../hooks/useMovies";
import SwiperTS from "./SwiperTS";
import movieImage from "../services/movie-image";

const MainMovie = () => {
  const { data } = useMovies();
  return (
    <div className="w-full">
      <SwiperTS
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        showNavigation={false}
        classes={"rounded-3xl"}
      >
        {data.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                className="w-full h-[320px] object-top object-cover relative"
                src={movieImage(movie.poster_path, "w1280")}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute top-0 grid grid-rows-2 h-full p-12">
                <div></div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-white text-3xl lg:text-4xl">
                    {movie.title.replace("Movie", "")}
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Action, Adventure, Comed.
                  </p>
                  <button
                    className="btn bg-red-500
                      w-32 py-3 rounded-lg text-white
                      border-none
                      hover:text-black hover:bg-white duration-500
                      "
                  >
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperTS>
    </div>
  );
};

export default MainMovie;
