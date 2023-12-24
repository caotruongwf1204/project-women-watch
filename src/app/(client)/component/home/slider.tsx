"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import NextImage from "next/image";
import '@/app/css/slider.css';


export default function SimpleSlider() {
  return (
    <Swiper
    className="z-0"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 3000,
      }}
      speed={1500}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide>
        <NextImage
          width={0}
          height={0}
          objectFit="cover"
          layout="responsive"
          alt="logo"
          src="/slider-1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NextImage
          width={0}
          height={0}
          objectFit="cover"
          layout="responsive"
          alt="logo"
          src="/slider-2.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NextImage
          width={0}
          height={0}
          objectFit="cover"
          layout="responsive"
          alt="logo"
          src="/slider-3.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}
