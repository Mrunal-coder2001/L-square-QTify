import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LeftNavButton from "../navButtons/LeftNavButton";
import RightNavButton from "../navButtons/RightNavButton";

export default function Carousel({ data, renderComponent }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Wait until refs are defined, then assign them to swiper navigation
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "0 10px",
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{
          padding: "10px 0",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "200px", // Adjust as per your Card component
              flexShrink: 0,
            }}
          >
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left Button */}
      <div
        ref={prevRef}
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          zIndex: 10,
        }}
      >
        <LeftNavButton />
      </div>

      {/* Custom Right Button */}
      <div
        ref={nextRef}
        style={{
          position: "absolute",
          top: "40%",
          right: "3%",
          zIndex: 10,
        }}
      >
        <RightNavButton />
      </div>
    </div>
  );
}
