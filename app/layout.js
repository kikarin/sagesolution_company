"use client"; // ⬅️ Tambahkan "use client"

import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DarkModeProvider } from "../components/DarkModeProvider";
import RemoveExtraAttributes from "../components/RemoveExtraAttributes";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Durasi loading effect (2 detik)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="id">
      <body className="relative transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <DarkModeProvider>
          <RemoveExtraAttributes>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Background />
                <Navbar />
                <main className="relative z-10 pt-16">{children}</main>
                <Footer />
              </>
            )}
          </RemoveExtraAttributes>
        </DarkModeProvider>
      </body>
    </html>
  );
}
