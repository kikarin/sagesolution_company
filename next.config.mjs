/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["sagesolusi.id"], // Domain yang diizinkan
    },
    // Konfigurasi lainnya (jika ada)
    reactStrictMode: true,
    swcMinify: true,
  };
export default nextConfig;
