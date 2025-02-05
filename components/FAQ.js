"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Kenapa harus memilih SAGE untuk solusi IT bisnis saya?",
    answer:
      "SAGE memiliki tim profesional berpengalaman yang siap mengubah tantangan bisnis Anda menjadi solusi inovatif. Kami menawarkan pendekatan custom yang disesuaikan dengan kebutuhan unik Anda, memastikan bahwa setiap aspek bisnis Anda dioptimalkan untuk hasil terbaik.",
  },
  {
    question: "Bagaimana SAGE menjamin keamanan data perusahaan saya?",
    answer:
      "SAGE sangat mengutamakan keamanan data Anda. Kami menggunakan teknologi keamanan terbaik untuk melindungi informasi penting bisnis Anda dari berbagai ancaman. Selain itu, pemeliharaan proaktif yang kami lakukan memastikan bahwa sistem Anda selalu dalam performa optimal dengan penanganan cepat terhadap segala potensi risiko keamanan. Dengan kami, data Anda selalu berada dalam perlindungan yang aman.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-20 px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://sagesolusi.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-18-at-10.34.14_3970e9c0.jpg')`, 
      }}
    >
      {/* Overlay agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-white">FAQs</span>
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Pertanyaan yang Sering Diajukan
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 font-semibold text-gray-900 dark:text-gray-200 group-hover:bg-[#75A56F] group-hover:text-white transition-all duration-300"
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[#75A56F] group-hover:text-white"
                      : "rotate-0 text-gray-500"
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 p-6 bg-gray-50 dark:bg-gray-700"
                    : "grid-rows-[0fr] opacity-0 p-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
