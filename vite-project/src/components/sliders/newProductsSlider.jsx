import React from "react";
import Slider from "react-slick";
import { newProducts } from "../../data/data";
import { ProductCard } from "../card/product-card/product-card";
import img from "../../assets/images/product1.png";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const NewProductsSlider = ({ children }) => {
  const swiper = useSwiper();

  return (
    <div>
      <SwiperSlide spaceBetween={50} slidesPerView={2}>
        {newProducts.map((item) => (
          <Swiper>
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
            />
          </Swiper>
        ))}
        <button
          onClick={() => swiper.slideNext()}
          className=" cursor-pointer border"
        >
          Slide to the next slide
        </button>
      </SwiperSlide>
    </div>
  );
};
