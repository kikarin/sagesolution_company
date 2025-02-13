"use client";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Data Portfolio
const projects = [
  { id: 1, company: "Dinkes Kota Bogor", title: "SiGeulis (Sistem Informasi Gerakan Eliminasi Tuberkolosis)", img: "/Sigeulis.png" },
  { id: 2, company: "PSMK Disdik Jabar", title: "Sistem Informasi Pusaka Disdik Provinsi Jawa Barat (Pusat Data SMK)", img: "/Rasajaga.png" },
  { id: 3, company: "Kemkominfo RI", title: "SIM-Pandu Digital Indonesia", img: "/Pandu.png" },
  { id: 4, company: "Kemkominfo RI", title: "EMS Literasi Digital", img: "/EMS.png" },
  { id: 5, company: "Kemkominfo RI", title: "EWS Literasi Digital", img: "/EWS.png" },
  { id: 6, company: "MPP Kota Depok", title: "Aplikasi Pemesanan Makanan", img: "/MPP.png" },
  { id: 7, company: "MPP Kab Bekasi", title: "Sistem Keuangan", img: "/MPP-Kab-Bekasi.png" },
  { id: 8, company: "BKPSDM", title: "SiBemo (Simpeg Mobile Kota Bogor)", img: "/BSH.png" },
  { id: 9, company: "BKAD Kota Bogor", title: "E-Office BKAD Kota Bogor", img: "/project_7_3.webp" },
];

export default function OurPortfolio() {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900 relative">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 fade-in">
        KE<strong className="text-[#75A56F]">BERHASILAN</strong> BERSAMA PELANGGAN KAMI
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto fade-in">
        Kami bangga menjadi mitra pilihan. Lihat apa yang sudah kami selesaikan bersama:
      </p>

      {/* Container Portfolio */}
      <div className="relative mt-12">
        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-[#75A56F] transition hidden md:flex z-10 fade-in"
        >
          <FaChevronLeft />
        </button>

        {/* List Portfolio */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 px-4 scroll-smooth snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800/50 shadow-xl backdrop-blur-lg rounded-xl p-6 min-w-[340px] transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 snap-center relative group fade-in"
            >
              {/* Gambar Project */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={340}
                  height={220}
                  className="w-full h-48 object-cover rounded-lg transition duration-500 group-hover:scale-110"
                />
                {/* Overlay Efek */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Konten Project */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.company}</p>
              </div>

              {/* Tombol "Lihat Detail" */}
              <button
                onClick={() => router.push(`/portfolio/${project.id}`)}
                className="mt-4 relative px-6 py-3 text-white font-semibold bg-[#75A56F] rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-green-700 group"
              >
                <span className="absolute inset-0 bg-white opacity-10 rounded-lg transition-all duration-300 transform scale-105 group-hover:scale-110"></span>
                <span className="relative z-10">Lihat Detail</span>
              </button>
            </div>
          ))}
        </div>

        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-[#75A56F] transition hidden md:flex z-10 fade-in"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Tombol CTA */}
      <div className="mt-14 fade-in">
        <button className="bg-[#75A56F] dark:bg-[#A3D9A5] hover:bg-black dark:hover:bg-white text-white font-bold dark:text-black py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
          HUBUNGI KAMI UNTUK MEMULAI PERJALANAN BISNIS
        </button>
      </div>
    </section>
  );
}
