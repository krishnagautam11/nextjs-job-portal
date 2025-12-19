"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";
import testimonials from "@/data/testimonials";

export default function Testimonials() {

  // ✅ ADD THIS HERE (INSIDE COMPONENT, BEFORE RETURN)
  const slides =
    testimonials.length <= 3
      ? [...testimonials, ...testimonials]
      : testimonials;

  return (
    <section className="testimonial-section">
      <div className="custom-container">

        <div className="testimonial-header">
          <span className="testimonial-subtitle">TESTIMONIAL</span>
          <h2 className="testimonial-title">Happy Clients</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
