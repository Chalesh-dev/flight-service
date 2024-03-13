"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const ImgSlider = ({ data }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      navigation={true}
      className="w-full bg-white h-full"
      slidesPerView={1}
    >
      {data?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="sm:rounded-l-xl rounded-t-xl w-full h-full bg-[#eff3f7] overflow-hidden"
        >
          <Image
            fill
            priority
            className="overflow-hidden object-cover"
            objectFit="cover"
            objectPosition="center"
            alt={`img-${index}`}
            src={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImgSlider;
