
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Slider.css";

//import images
import drum0 from './project/drum0.png'
import drum1 from './project/drum1.png'
import drum2 from './project/drum2.png'


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


function Slider() {
  
  
  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
    "clickable": true
    }} navigation={true} className="mySwiper">
      <SwiperSlide><img src={drum0} /></SwiperSlide>
      <SwiperSlide><img src={drum1} /></SwiperSlide>
      <SwiperSlide><img src={drum2} /></SwiperSlide>
  </Swiper>
    </>
  )
}

export default Slider