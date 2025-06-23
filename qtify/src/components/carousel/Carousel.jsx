// src/components/carousel/Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";
import LeftNavButton from "../navButtons/LeftNavButton";
import RightNavButton from "../navButtons/RightNavButton";

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.carouselWrapper}>
      <LeftNavButton />
      <RightNavButton />
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        loop={false} // test-friendly behavior
        speed={400}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id || item._id || item.title}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
