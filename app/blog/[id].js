"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const blogData = [
  {
    id: 1,
    title: "Transformasi Digital untuk Bisnis Anda",
    content: "Ini adalah artikel lengkap tentang transformasi digital...",
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "Keamanan Siber: Perlindungan Data Perusahaan",
    content: "Keamanan data perusahaan sangat penting...",
    image: "/1.jpg",
  },
  {
    id: 3,
    title: "Strategi IT yang Harus Dimiliki Startup",
    content: "Startup harus memiliki strategi IT yang kuat...",
    image: "/1.jpg",
  },
  {
    id: 4,
    title: "Cloud Computing: Masa Depan Infrastruktur Bisnis",
    content: "Cloud computing dapat membantu perusahaan...",
    image: "/1.jpg",
  },
  {
    id: 5,
    title: "AI dan Machine Learning untuk Perusahaan",
    content: "AI dan Machine Learning semakin berkembang...",
    image: "/1.jpg",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
          {blog.title}
        </h1>
        <div className="mt-8">
          <Image src={blog.image} alt={blog.title} width={800} height={450} className="rounded-lg mx-auto" />
        </div>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {blog.content}
        </p>
      </div>
    </section>
  );
}
