import { ReactNode, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination]);

interface Props {
  spaceBetween: number;
  slidesPerView: number;
  loop: boolean;
  classes: string;
  showNavigation: boolean;
  children: ReactNode;
}

const SwiperTS = ({
  spaceBetween,
  slidesPerView,
  loop,
  classes,
  showNavigation,
  children,
}: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      className={`swiper-container ${classes}`}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {showNavigation && (
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
      )}
      {children}
    </Swiper>
  );
};

export default SwiperTS;
