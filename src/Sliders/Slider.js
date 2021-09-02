//import images
import drum0 from '../Components/project/drum0.png'
import drum1 from '../Components/project/drum1.png'
import drum2 from '../Components/project/drum2.png'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Slider.css";




// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
    </>
  )
}