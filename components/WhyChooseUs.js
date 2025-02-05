"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const features = [
  {
    title: "Ahli Berpengalaman",
    description:
      "Tim profesional berpengalaman yang siap mengubah tantangan Anda menjadi solusi.",
  },
  {
    title: "Pendekatan Custom & Inovatif",
    description:
      "Kami merancang layanan yang disesuaikan dengan kebutuhan unik Anda, memastikan bahwa setiap aspek bisnis dioptimalkan untuk hasil terbaik.",
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Data dan aplikasi Anda terlindungi dengan teknologi keamanan terbaik.",
  },
  {
    title: "Pemeliharaan Proaktif",
    description:
      "Aktif menjaga performa sistem tetap prima dengan respon dan penanganan yang cepat.",
  },
  {
    title: "Transparansi Penuh",
    description:
      "Kejujuran yang menghasilkan kepercayaan penuh pada setiap keputusan yang diambil bersama.",
  },
  {
    title: "Skalabilitas yang Fleksibel",
    description:
      "Memungkinkan penyesuaian dan ekspansi yang mudah sesuai kebutuhan Anda.",
  },
  {
    title: "Efisiensi Biaya dengan Hasil Maksimal",
    description:
      "Investasi melalui optimalisasi teknologi yang efektif dan efisien.",
  },
  {
    title: "Fokus pada Kepuasan Pelanggan",
    description:
      "Kepuasan Anda adalah prioritas utama kami, kami ada di sini untuk melampaui harapan Anda.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] dark:from-gray-900 dark:to-gray-800 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
        Kenapa Anda Harus Bekerja Sama dengan {" "}
        <span className="text-[#75A56F]">SAGE?</span>
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
        Kami Menangani Layanan IT Profesional dengan keunggulan berikut.
      </p>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02]"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-5 font-semibold text-gray-900 dark:text-gray-200 group-hover:bg-[#75A56F] group-hover:text-white transition-all duration-300"
            >
              {feature.title}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-[#75A56F] group-hover:text-white" : "rotate-0 text-gray-500"
                }`}
              />
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 p-6 bg-gray-50 dark:bg-gray-700" : "max-h-0 opacity-0 p-0"
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
