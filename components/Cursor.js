"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme(); // Deteksi mode tema

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const isDarkMode = theme === "dark";

  return (
    <>
      {/* Cursor utama */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 ${
          isDarkMode ? "border-[#a2ff86]" : "border-[#75A56F]"
        } border-2`}
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Glow / Cahaya */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40 blur-md opacity-50"
        style={{
          backgroundColor: isDarkMode ? "#A2FF86" : "#fcd34d",
          filter: "blur(10px)",
        }}
        animate={{ x: position.x - 24, y: position.y - 24 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}
