import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../assets/banner-e-commerce-2.jpg';
import slide3 from '../../assets/banner-e-commerce-3.jpg';
import slide4 from '../../assets/banner-e-commerce-4.jpg';
import slide5 from '../../assets/banner-e-commerce-5.jpg';
import slide6 from '../../assets/banner-e-commerce-6.jpg';
import slide from '../../assets/banner-e-commerce.jpg';

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;