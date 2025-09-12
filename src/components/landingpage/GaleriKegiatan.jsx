import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./galeri-style.css"; // Tetap import dari folder yang sama

const GaleriKegiatan = () => {
  const images = [
    "/images/galeri1.jpg",
    "/images/galeri2.jpg",
    "/images/galeri3.jpg",
    "/images/galeri4.jpg",
    "/images/galeri5.jpg",
    "/images/galeri6.jpg",
    "/images/galeri7.jpg",
    "/images/galeri8.jpg",
  ];

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="mb-10">
          <div className="flex justify-center items-center gap-2 mb-3">
            <img src="/images/logo2.png" alt="icon" className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-blue-800">Galeri Kegiatan</h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Tidak hanya untuk tempat belajar, TK Negeri 1 juga sebagai tempat yang mewadahi anak-anaknya untuk terus berprestasi dan mengembangkan bakat minatnya.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="galeri-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="galeri-slide">
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                className="w-full h-[280px] object-cover rounded-xl transition-transform duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GaleriKegiatan;
