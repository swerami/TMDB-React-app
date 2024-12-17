import { ReactNode, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination]);

interface Props {
  spaceBetween: number;
  slidesPerView: number;
  // loop: boolean;
  delay?: number;
  autoPlay?: boolean;
  classes: string;
  showNavigation: boolean;
  children: ReactNode;
}

const SwiperTS = ({
  spaceBetween,
  slidesPerView,
  // loop,
  delay,
  autoPlay,
  classes,
  showNavigation,
  children,
}: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={autoPlay}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={`swiper-container w-full h-full ${classes}`}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {showNavigation && (
        <div className="absolute top-0 right-0 flex flex-row gap-1 z-50">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full border border-gray-300 cursor-pointer"
          >
            <AiOutlineLeft className="w-4 pointer-events-none" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full border border-gray-300 cursor-pointer"
          >
            <AiOutlineRight className="w-4 pointer-events-none" />
          </button>
        </div>
      )}
      {children}
    </Swiper>
  );
};

export default SwiperTS;
