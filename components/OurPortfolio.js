"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  { id: 1, company: "Dinkes Kota Bogor", title: "SiGeulis (Sistem Informasi Gerakan Eliminasi Tuberkolosis)", img: "/sigeulis.png" },
  { id: 2, company: "PSMK Disdik Jabar", title: "Sistem Informasi Pusaka Disdik Provinsi Jawa Barat (Pusat Data SMK)", img: "/Rasajaga.png" },
  { id: 3, company: "Kemkominfo RI", title: "SIM-Pandu Digital Indonesia", img: "/Pandu.png" },
  { id: 4, company: "Kemkominfo RI", title: "EMS Literasi Digital", img: "/EMS.png" },
  { id: 5, company: "Kemkominfo RI", title: "EWS Literasi Digital", img: "/EWS.png" },
  { id: 6, company: "MPP Kota Depok", title: "Aplikasi Pemesanan Makanan", img: "/MPP.png" },
  { id: 7, company: "MPP Kab Bekasi", title: "Sistem Keuangan", img: "/MPP-Kab-Bekasi.png" },
  { id: 8, company: "BKPSDM", title: "SiBemo(Simpeg Mobile Kota Bogor)", img: "/BSH.png" },
  { id: 9, company: "BKAD Kota Bogor", title: "E-Office BKAD Kota Bogor", img: "/project_7_3.webp" },
];

export default function OurPortfolio() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-6 text-center bg-gray-100 dark:bg-gray-900 relative">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        KE<strong className="text-[#75A56F]">BERHASILAN</strong> BERSAMA PELANGGAN KAMI
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
        Kami bangga menjadi mitra pilihan. Lihat apa yang sudah kami selesaikan bersama:
      </p>

      {/* Container Portfolio */}
      <div className="relative mt-8">
        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-[#75A56F] transition hidden md:flex"
        >
          <FaChevronLeft />
        </button>

        {/* List Portfolio */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 scroll-smooth"
        >
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 min-w-[300px]">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={180}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.company}</p>
            </div>
          ))}
        </div>

        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-[#75A56F] transition hidden md:flex"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Tombol CTA */}
      <div className="mt-10">
        <button className="bg-[#75A56F] dark:bg-[#A3D9A5]  hover:bg-black dark:hover:bg-white  text-white font-bold dark:text-black py-3 px-6 rounded-lg text-lg transition">
          HUBUNGI KAMI UNTUK MEMULAI PERJALANAN BISNIS
        </button>
      </div>
    </section>
  );
}
1