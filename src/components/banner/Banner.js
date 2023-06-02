import React from 'react'
import "./Baner.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import photo1 from "../../img/carusel1.jpg"
import photo2 from "../../img/carusel2.jpg"
import photo3 from "../../img/carusel3.jpg"

function Banner() {
  return (
    <div className='container banner'>
      <Swiper 
      autoplay={{
        delay:2500,
        disableOnInteraction:false,
      }}
      loop={true} 
      navigation={true} 
      modules={[Navigation, Autoplay]} 
      className="mySwiper">
      <SwiperSlide> <img className='img1' src={photo1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='img2' src={photo2} /> </SwiperSlide>
        <SwiperSlide> <img className='img3' src={photo3} alt="" /> </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
