import { ReactNode, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination]);

interface Props {
  spaceBetween: number;
  slidesPerView: number;
  loop: boolean;
  classes: string;
  children: ReactNode;
}

const SwiperTS = ({
  spaceBetween,
  slidesPerView,
  loop,
  classes,
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
      {children}
    </Swiper>
  );
};

export default SwiperTS;
