"use client";  // Tambahkan ini di baris pertama!

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, company: "Dinkes Kota Bogor", title: "SiGeulis", description: "Sistem Informasi Gerakan Eliminasi Tuberkolosis", img: "/Sigeulis.png" },
  { id: 2, company: "PSMK Disdik Jabar", title: "Pusaka Disdik Jabar", description: "Pusat Data SMK", img: "/Rasajaga.png" },
  { id: 3, company: "Kemkominfo RI", title: "SIM-Pandu", description: "Digital Indonesia", img: "/Pandu.png" },
];

export default function PortfolioDetail() {
  const { id } = useParams();  // Mengambil parameter dari URL
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-10 text-gray-500">Project tidak ditemukan</p>;

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">{project.company}</p>
      <Image src={project.img} width={600} height={400} className="mx-auto mt-6 rounded-lg shadow-lg" />
      <p className="text-lg mt-6 text-gray-700 dark:text-gray-300">{project.description}</p>
      <Link href="/" className="mt-6 inline-block bg-[#75A56F] text-white px-6 py-2 rounded-lg">
        Kembali
      </Link>
    </div>
  );
}
