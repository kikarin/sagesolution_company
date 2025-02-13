"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "SAGE membantu bisnis kami berkembang pesat dengan solusi IT yang luar biasa. Profesional dan sangat direkomendasikan!",
    name: "Sarah Johnson",
    role: "CEO",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_3.png",
    rating: 5,
  },
  {
    text: "Bekerja dengan SAGE adalah pengalaman yang luar biasa. Mereka memahami kebutuhan kami dan memberikan solusi terbaik!",
    name: "Michael Brown",
    role: "CTO",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_1.png",
    rating: 5,
  },
  {
    text: "Tim SAGE sangat inovatif dan memberikan layanan yang luar biasa. Sangat puas dengan hasilnya!",
    name: "Andrew D. Smith",
    role: "Manager",
    image:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/04/testi_2_2.png",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 text-center relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-transparent to-transparent dark:from-gray-800/40"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Apa Kata Klien Kami?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Kami bangga menjadi mitra bisnis Anda. Berikut beberapa pengalaman mereka:
        </p>

        {/* Swiper Testimonial */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 text-left relative transition-all">
                  {/* Ikon Quote */}
                  <FaQuoteLeft className="absolute -top-6 left-4 text-gray-300 dark:text-gray-600 text-5xl opacity-40" />

                  {/* Teks Testimoni */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
                    "{item.text}"
                  </p>

                  {/* Profil */}
                  <div className="flex items-center mt-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"
                    />
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Rating Bintang */}
                  <div className="flex mt-4 text-yellow-500">
                    {Array(5)
                      .fill()
                      .map((_, i) =>
                        i < item.rating ? (
                          <FaStar key={i} className="text-xl" />
                        ) : (
                          <FaStar key={i} className="text-xl opacity-30" />
                        )
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
