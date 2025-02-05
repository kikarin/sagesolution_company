"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../components/DarkModeProvider";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-md" // Transparan saat scroll
          : "bg-white/90 dark:bg-gray-900/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (Ganti dengan Gambar) */}
        <a href="#">
          <img
            src="/SAGE.png" // Ganti dengan path logo kamu
            alt="SAGE Logo"
            className="w-14 h-auto"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Tentang", "Layanan", "Kontak"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-gray-700 dark:text-gray-300 hover:text-asset transition-all before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[2px] before:bg-asset before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Tombol Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-900" />}
        </button>

        {/* Burger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute w-full top-full left-0 p-4 space-y-4 text-center transition-all duration-300 ${
            darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
          }`}
        >
          {["Home", "Tentang", "Layanan", "Kontak"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block hover:text-asset transition-all"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-900" />}
          </button>
        </div>
      )}
    </nav>
  );
}
