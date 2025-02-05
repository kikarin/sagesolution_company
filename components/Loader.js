"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animate logo and text
    gsap.fromTo(
      ".loader-logo",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".loader-text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );

    // Hide loader after animation
    const timer = setTimeout(() => {
      gsap.to(".loader-container", {
        opacity: 0,
        duration: 0.8,
        onComplete: () => setIsLoading(false),
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-container fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      {/* Logo */}
      <div className="loader-logo w-24 h-24 mb-8">
        <img
          src="/SAGE.png"
          alt="SAGE Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Loading text */}
      <div className="loader-text text-center">
        <h2 className="text-2xl font-semibold text-asset mb-2">
          SAGE SOLUTION
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Transformasi Digital untuk Masa Depan
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-8 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-asset rounded-full animate-loading-bar" />
      </div>
    </div>
  );
}
