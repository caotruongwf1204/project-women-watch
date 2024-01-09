"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NextImage from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";

interface SliderDetailProps {
  item: string[];
}

export default function SliderDetail({ item }: SliderDetailProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider-container">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      >
        {item.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <NextImage
              src={image}
              alt="slide"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="slider-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        centeredSlides={true}
        slideToClickedSlide={true}
        className="mySwiper"
      >
        {item.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <NextImage
              src={image}
              alt="slide"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="slider-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
