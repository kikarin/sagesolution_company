"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Cloud Computing: Masa Depan Infrastruktur Bisnis",
    desc: "Manfaat menggunakan cloud computing untuk efisiensi bisnis.",
    image: "/1.jpg",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "AI dan Machine Learning untuk Perusahaan",
    desc: "Bagaimana AI bisa mengubah cara perusahaan bekerja.",
    image: "/1.jpg",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Strategi IT yang Harus Dimiliki Startup",
    desc: "Strategi teknologi yang dapat membantu startup berkembang lebih cepat dan efisien.",
    image: "/1.jpg",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "Transformasi Digital untuk Bisnis Anda",
    desc: "Pelajari bagaimana transformasi digital bisa meningkatkan efisiensi dan profitabilitas perusahaan Anda.",
    image: "/1.jpg",
    link: "/blog/4",
  },
  {
    id: 5,
    title: "Keamanan Siber: Perlindungan Data Perusahaan",
    desc: "Tips terbaik untuk menjaga keamanan data perusahaan Anda dari ancaman cyber.",
    image: "/1.jpg",
    link: "/blog/5",
  },
];

export default function RecentBlog() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#75A56F] dark:text-[#A3D9A5] text-base md:text-lg font-semibold tracking-widest uppercase">
            Recent Blog Post
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            LIHAT BLOG TERBARU KAMI
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto px-4">
            Dapatkan wawasan dan tips terbaru dari para ahli kami.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {blogs.slice(0, showAll ? blogs.length : 3).map((blog) => (
            <Link key={blog.id} href={blog.link} className="group relative block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <div className="relative h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold group-hover:text-[#75A56F] dark:group-hover:text-[#A3D9A5] transition-colors text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    {blog.desc}
                  </p>
                  <span className="mt-4 inline-block text-[#75A56F] dark:text-[#A3D9A5] font-semibold group-hover:underline transition duration-300">
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#75A56F] dark:bg-[#A3D9A5] hover:bg-black dark:hover:bg-white text-white font-bold dark:text-black py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "View All Posts"}
          </button>
        </div>
      </div>
    </section>
  );
}
