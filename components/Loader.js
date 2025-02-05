"use client";
import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";
import { useDarkMode } from "../components/DarkModeProvider"; // 🔥 Import darkMode

const Loader = () => {
  const { darkMode } = useDarkMode(); // 🌙 Cek mode dark
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Loader akan menghilang setelah 3 detik
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${styles.loaderContainer} ${
        darkMode ? styles.darkMode : styles.lightMode
      } ${isVisible ? styles.show : styles.hide}`}
    >
      <div className={styles.overlay}></div> {/* 🔥 Overlay untuk efek transisi */}
      <div className={styles.loader}>
        {"SAGESOLUTION".split("").map((char, index) => (
          <span key={index} className={styles[`char${index}`]} data-text={char}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
