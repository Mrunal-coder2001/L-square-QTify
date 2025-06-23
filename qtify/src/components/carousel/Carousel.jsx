// src/components/carousel/Carousel.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";
import LeftNavButton from "../navButtons/LeftNavButton";
import RightNavButton from "../navButtons/RightNavButton";

export default function Carousel({ data, renderComponent }) {
  useEffect(() => {
    // Wait to ensure navigation buttons are fully rendered before Swiper initializes
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      {/* Navigation Buttons - Must be in DOM before Swiper loads */}
      <div className="swiper-button-prev">
        <LeftNavButton />
      </div>
      <div className="swiper-button-next">
        <RightNavButton />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={false}
        speed={400}
        spaceBetween={20}
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
