"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useDarkMode } from "../components/DarkModeProvider"; // 🔥 Import dark mode hook
import Model3D from "./Model3D";

export default function Hero() {
  const { darkMode } = useDarkMode(); // 🔥 Deteksi mode aktif
  const titleRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(titleRef.current, {
      duration: 0.4,
      y: -10,
      textShadow: `
        0 2px 5px rgba(255, 255, 255, 0.8),
        0 4px 8px rgba(255, 255, 255, 0.6),
        0 6px 10px rgba(255, 255, 255, 0.5),
        0 8px 12px rgba(0, 0, 0, 0.2),
        0 20px 30px rgba(0, 0, 0, 0.2)
      `,
      ease: "power3.out",
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(titleRef.current, {
      duration: 0.4,
      y: 0,
      textShadow: `
        0 1px 0 hsl(174, 5%, 80%),
        0 2px 0 hsl(174, 5%, 75%),
        0 3px 0 hsl(174, 5%, 70%),
        0 4px 0 hsl(174, 5%, 66%),
        0 5px 0 hsl(174, 5%, 64%),
        0 6px 0 hsl(174, 5%, 62%),
        0 7px 0 hsl(174, 5%, 61%),
        0 8px 0 hsl(174, 5%, 60%),
        0 0 5px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.2),
        0 3px 5px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.2),
        0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.3)
      `,
      ease: "power3.in",
    });
  };
  
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-10 py-16 md:py-24">
      {/* 🔹 Bagian Teks */}
      <div className="flex-1 space-y-6 max-w-lg">
        <p className="text-lg font-barlow font-extrabold text-asset uppercase tracking-widest">
          PT SINERGI ANTAR GENERASI
        </p>
        <h1
          ref={titleRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`text-5xl md:text-6xl font-barlow font-bold leading-tight cursor-pointer transition-all duration-300 ${
            darkMode ? "text-white" : "text-headline"
          }`}
        >
          SAGE <span className="text-asset">SOLUTION</span>
        </h1>
        <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Kami menghadirkan solusi inovatif berbasis teknologi dan bisnis yang 
          memberikan dampak nyata bagi perusahaan dan masyarakat.
        </p>

        {/* 🔹 Tombol CTA */}
        <div className="flex space-x-4">
          <button className="bg-asset text-white px-6 py-3 font-medium text-lg rounded-lg shadow-md hover:bg-[#65925F] transition-all duration-300">
            Hubungi Kami
          </button>
          <button className="border-2 border-asset text-asset px-6 py-3 font-medium text-lg rounded-lg hover:bg-asset hover:text-white transition-all duration-300">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* 🔹 Model 3D */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        <Model3D />
      </div>
    </section>
  );
}
