"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Pembangunan Website",
    description: "Ciptakan kehadiran online yang mengesankan dengan website profesional.",
    icon: "/Browser_perspective_matte_s 1.png",
  },
  {
    title: "Pembangunan Aplikasi",
    description: "Hadirkan bisnis Anda ke dunia digital dengan aplikasi kustom yang memikat.",
    icon: "/Add_apps_perspective_matte_s.png",
  },
  {
    title: "Pemeliharaan Website & Aplikasi",
    description: "Kami memastikan website & aplikasi Anda tetap berjalan lancar dengan pemeliharaan rutin.",
    icon: "/Shield_perspective_matte_s 1.png",
  },
  {
    title: "Server Enterprise",
    description: "Solusi server scalable untuk mengelola beban kerja dan volume data besar.",
    icon: "/Settings_perspective_matte_s 1.png",
  },
  {
    title: "Konsultan IT",
    description: "Dapatkan strategi IT terbaik untuk meningkatkan efisiensi operasional bisnis Anda.",
    icon: "/Headphone-3 1.png",
  },
  {
    title: "Pelatihan IT",
    description: "Pelatihan IT bagi siswa SMK & industri dengan fokus pada keterampilan praktis.",
    icon: "/Flash_perspective_matte_s.png",
  },
  {
    title: "Jasa IT Lainnya",
    description: "Beragam layanan IT yang disesuaikan untuk memastikan sistem berjalan dengan lancar.",
    icon: "/Message_perspective_matte_s 1.png",
  },
];

export default function OurServices() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 70%",
          toggleActions: "play none none none",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "bottom 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-[#75A56F] to-gray-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            LAYANAN YANG KAMI SEDIAKAN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareBorderRadius="12px">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="p-6 rounded-lg shadow-lg bg-white/10 dark:bg-gray-800/70 backdrop-blur-none flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-[#75A56F] relative h-full"
              >
                <img src={service.icon} alt="Icon" className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-2xl font-bold text-[#75A56F]">{service.title}</h3>
                <p className="text-lg mt-4 flex-grow">{service.description}</p>

                {/* Tombol 3D */}
                <button className="relative group overflow-hidden bg-[#75A56F] text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 mt-4">
                  <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative z-10">Hubungi Kami</span>
                </button>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
