import Image from "next/image";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.scss";

export const Slider = ({ items, navigationNextRef, navigationPrevRef }) => (
  <div className={styles.swiper}>
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
      navigation
      spaceBetween={30}
      className="mySwiper"
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={styles.slider_item}>
            <Image
              width={107}
              height={18}
              src="/images/stars.svg"
              alt="stars"
            />
            <p>{item.description}</p>
            <h4>{item.user}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
