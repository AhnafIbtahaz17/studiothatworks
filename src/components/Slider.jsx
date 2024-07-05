"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ slides }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <Image
            src={slide}
            alt=""
            className="object-contain max-h-[600px] h-full"
            // height={600}
            // layout="fill"
            // objectFit="contain"
            // unoptimized
          />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}
