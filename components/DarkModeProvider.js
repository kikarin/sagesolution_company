"use client";
import { createContext, useState, useContext, useEffect } from "react";

// Buat Context untuk Dark Mode
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Cek apakah user pernah mengaktifkan dark mode sebelumnya
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  // Simpan dark mode ke localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
}

// Hook untuk menggunakan Dark Mode di komponen lain
export function useDarkMode() {
  return useContext(DarkModeContext);
}
