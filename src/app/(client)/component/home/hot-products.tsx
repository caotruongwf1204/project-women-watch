"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import NextImage from "next/image";
import Link from "next/link";

export default function HotProduct() {
  return (
    <div className="flex justify-center p-10">
      <div className="container">
        <h2 className="text-center font-bold mb-10 text-base">SẢN PHẨM NỔI BẬT</h2>
        
        <div className="text-end py-2 underline">
          <Link href={"/collection"}>Xem tất cả</Link>
        </div>
      </div>
    </div>
  );
}
