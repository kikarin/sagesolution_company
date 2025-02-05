"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Enhanced scroll animations
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
      }
    );

    // Staggered text animation
    gsap.fromTo(
      textRef.current.children,
      { 
        opacity: 0, 
        y: 30,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    // Image reveal animation
    gsap.fromTo(
      imageRef.current,
      { 
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#75A56F] to-[#4B7355] bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
            Menyediakan solusi inovatif berbasis teknologi yang menghubungkan generasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative group mx-auto lg:mx-0 max-w-sm md:max-w-md lg:max-w-full">
            <div className="book transform transition-all duration-700 hover:scale-105">
              {/* Front Cover with Professional Styling */}
              <div className="cover relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/2.png"
                  alt="Tentang Kami"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced Content Reveal */}
              <div className="inner-content text-center p-8 bg-gradient-to-br from-[#75A56F] to-[#4B7355]">
                <h3 className="text-2xl font-bold text-white mb-4">15 Tahun Pengalaman</h3>
                <div className="space-y-4">
                  {[
                    "Fokus pada kepuasan pelanggan",
                    "Efisiensi Biaya dengan Hasil Maksimal",
                    "Pendekatan custom dan inovatif",
                    "Pemeliharaan Proaktif",
                    "Skalabilitas yang fleksibel",
                    "Transparansi penuh"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
                      <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-6 md:space-y-8">
            <div className="overflow-hidden">
              <h3 className="text-3xl font-bold text-[#75A56F] mb-6">
                TENTANG <span className="text-gray-900 dark:text-white">SAGE SOLUTION</span>
              </h3>
            </div>

            <div className="overflow-hidden">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Selamat datang di{" "}
                <span className="font-semibold relative inline-block group">
                  PT Sinergi Antar Generasi
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#75A56F] transition-all duration-300 group-hover:w-full"></span>
                </span>
                ! Kami menghadirkan solusi terbaik untuk mendukung pertumbuhan industri dan masyarakat.
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Sebagai perusahaan penyedia layanan TIK,{" "}
                <span className="font-semibold relative inline-block group">
                  SAGE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#75A56F] transition-all duration-300 group-hover:w-full"></span>
                </span>{" "}
                dipercaya dalam menciptakan solusi digital yang praktis dan efisien.
              </p>
            </div>

            {/* Achievement Metrics */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
              {[
                { number: "200+", label: "Proyek Selesai" },
                { number: "50+", label: "Klien Aktif" },
                { number: "15+", label: "Tahun Pengalaman" },
                { number: "98%", label: "Tingkat Kepuasan" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-200 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#75A56F]">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
