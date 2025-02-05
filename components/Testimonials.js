"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    text: "“Objectively visualize error-free technology for B2B alignment. Monotonectally harness reinvent prospective an expanded array of models via effective collaboration in the success. Professionally metrics.”",
    name: "Andrew D. Smith",
    role: "Manager",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_2.png",
    rating: 4,
  },
  {
    text: "“SAGE helped our business grow significantly. Their IT solutions are top-notch, and their team is very professional. Highly recommended!”",
    name: "Sarah Johnson",
    role: "CEO",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_3.png",
    rating: 5,
  },
  {
    text: "“Working with SAGE was a great experience. They understood our needs and delivered a fantastic product. Will definitely collaborate again!”",
    name: "Michael Brown",
    role: "CTO",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_1.png",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          APA YANG MEREKA KATAKAN TENTANG SAGE?
        </p>

        <div className="mt-8 max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-left">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    {item.text}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500">{item.role}</span>
                    </div>
                  </div>
                  <div className="flex mt-2 text-yellow-500">
                    {Array(5)
                      .fill()
                      .map((_, i) =>
                        i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                      )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
