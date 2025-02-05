"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animasi Scroll GSAP
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 65%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative py-20 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#75A56F] md:text-5xl font-bold">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Menyediakan solusi inovatif berbasis teknologi yang menghubungkan generasi.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Bagian Kiri - Gambar dengan Overlay */}
          <div className="relative flex justify-center">
  <div className="book">
    {/* Cover Depan */}
    <div className="cover">
      <img
        src="/2.png"
        alt="Tentang Kami"
        className="w-full h-full object-cover rounded-lg"
      />
      {/* Hover Me Message */}
      <span className="hover-message">Hover Me</span>
    </div>

    {/* Konten di Dalam Flip */}
    <div className="inner-content text-center p-6">
      <h3>15 Tahun</h3>
      <p>Berpengalaman di Bidang Teknologi</p>

      <ul className="mt-4">
        <li>Fokus pada kepuasan pelanggan</li>
        <li>Efisiensi Biaya dengan Hasil Maksimal</li>
        <li>Pendekatan custom dan inovatif</li>
        <li>Pemeliharaan Proaktif</li>
        <li>Skalabilitas yang fleksibel</li>
        <li>Transparansi penuh</li>
      </ul>
    </div>
  </div>
</div>



{/* Bagian Kanan - Teks yang Ditingkatkan */}
<div ref={textRef} className="relative">
  {/* Animasi Teks dengan GSAP */}
  <h3 className="text-2xl font-semibold text-[#75A56F] opacity-0 transform translate-x-10">
    TENTANG <span className="text-gradient">SAGE SOLUTION</span>
  </h3>

  {/* Teks Deskripsi dengan Animasi & Hover Effect */}
  <p className="mt-6 text-lg leading-relaxed opacity-0 transform translate-x-10 transition-all duration-700 hover:text-gray-800 dark:hover:text-gray-200">
    Selamat datang di{" "}
    <span className="relative font-semibold group">
      PT Sinergi Antar Generasi
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#75A56F] transition-all duration-500 group-hover:w-full"></span>
    </span>!  
    Kami menghadirkan solusi terbaik untuk mendukung pertumbuhan industri dan masyarakat.
  </p>

  <p className="mt-4 text-lg leading-relaxed opacity-0 transform translate-x-10 transition-all duration-700 hover:text-gray-800 dark:hover:text-gray-200">
    Sebagai perusahaan penyedia layanan TIK,{" "}
    <span className="relative font-semibold group">
      SAGE
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#75A56F] transition-all duration-500 group-hover:w-full"></span>
    </span>  
    dipercaya dalam menciptakan solusi digital yang praktis dan efisien.
  </p>

 
</div>

        </div>
      </div>
    </section>
  );
}
