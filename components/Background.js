"use client";
import { useEffect, useRef } from "react";
import { useDarkMode } from "./DarkModeProvider";

export default function Background() {
  const { darkMode } = useDarkMode();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let gradientAngle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Updated gradients for better visual comfort
      const gradient = ctx.createLinearGradient(
        canvas.width / 2,
        0,
        canvas.width / 2,
        canvas.height
      );

      if (darkMode) {
        gradient.addColorStop(0, "rgba(17, 24, 39, 1)");
        gradient.addColorStop(0.5, "rgba(31, 41, 55, 1)");
        gradient.addColorStop(1, "rgba(17, 24, 39, 1)");
      } else {
        // Softer light mode colors
        gradient.addColorStop(0, "rgba(249, 250, 251, 1)"); // Very light gray
        gradient.addColorStop(0.5, "rgba(243, 244, 246, 1)"); // Slightly darker
        gradient.addColorStop(1, "rgba(249, 250, 251, 1)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle grid pattern
      const patternSize = 40;
      ctx.strokeStyle = darkMode 
        ? "rgba(255, 255, 255, 0.03)" 
        : "rgba(0, 0, 0, 0.02)"; // Reduced opacity for light mode
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += patternSize) {
        for (let y = 0; y < canvas.height; y += patternSize) {
          ctx.beginPath();
          ctx.rect(x, y, patternSize, patternSize);
          ctx.stroke();
        }
      }

      // Accent lines with brand color
      const accentColor = darkMode
        ? "rgba(117, 165, 111, 0.1)"
        : "rgba(117, 165, 111, 0.03)"; // Reduced opacity for light mode

      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;

      const lineCount = 4; // Reduced number of lines
      const spacing = canvas.width / lineCount;

      for (let i = 0; i < lineCount; i++) {
        const x = (i * spacing + gradientAngle) % canvas.width;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + canvas.height, canvas.height);
        ctx.stroke();
      }

      gradientAngle += 0.15; // Slower animation
      if (gradientAngle >= canvas.width) {
        gradientAngle = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full transition-opacity duration-500"
      />
      
      {/* Enhanced overlay gradient */}
      <div className={`absolute inset-0 pointer-events-none ${
        darkMode 
          ? 'bg-gradient-to-b from-transparent via-gray-900/20 to-transparent'
          : 'bg-gradient-to-b from-transparent via-gray-50/30 to-transparent'
      }`} />
    </div>
  );
}
