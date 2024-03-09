"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const SwiperComp = ({ data }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      navigation={true}
      className="w-full bg-white"
      breakpoints={{
        1650: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="rounded-2xl w-[230px] h-[300px] overflow-hidden bg-white"
        >
          <div className="relative w-[230] h-[300px]">
            <Image
              fill
              className="rounded-2xl overflow-hidden object-cover"
              alt={`img-${index}`}
              src={item.img}
            />
            <div className="absolute bottom-0 w-full h-[40px] px-3 flex items-center text-white font-bold">
              {item.title}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
