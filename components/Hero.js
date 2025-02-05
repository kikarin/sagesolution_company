"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useDarkMode } from "../components/DarkModeProvider";

export default function Hero() {
  const { darkMode } = useDarkMode();
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate hero section
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate stats with delay
    gsap.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500" />

      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div ref={textRef} className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-asset">SAGE SOLUTION</span>
              <br />
              <span
                className={`text-4xl md:text-5xl transition-colors duration-500 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Solusi Cerdas untuk Masa Depan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Kami menghadirkan solusi teknologi inovatif yang memberikan dampak
              nyata bagi pertumbuhan dan efisiensi perusahaan Anda.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 bg-asset text-white font-semibold rounded-lg 
                transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                Mulai Konsultasi
              </button>
              <button
                className="px-8 py-4 border-2 border-asset text-asset font-semibold 
                rounded-lg transform transition duration-300 hover:bg-asset hover:text-white"
              >
                Pelajari Layanan
              </button>
            </div>
          </div>

          {/* Stats section */}
          <div ref={statsRef} className="grid grid-cols-2 gap-8">
            <StatsCard
              number="15+"
              text="Tahun Pengalaman"
              darkMode={darkMode}
            />
            <StatsCard
              number="200+"
              text="Proyek Selesai"
              darkMode={darkMode}
            />
            <StatsCard
              number="50+"
              text="Ahli Profesional"
              darkMode={darkMode}
            />
            <StatsCard number="98%" text="Klien Puas" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50" />
    </section>
  );
}

// Stats card component
function StatsCard({ number, text, darkMode }) {
  return (
    <div
      className={`p-6 rounded-xl transition-all duration-500 ${
        darkMode
          ? "bg-gray-800/50 backdrop-blur-sm text-white"
          : "bg-white/90 backdrop-blur-sm shadow-lg text-gray-900"
      }`}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-asset mb-2">
        {number}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
}
