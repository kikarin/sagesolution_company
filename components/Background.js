"use client";
import { useEffect, useRef } from "react";
import { useDarkMode } from "../components/DarkModeProvider";
import * as THREE from "three";

export default function Background() {
  const { darkMode } = useDarkMode();
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);
  const threeCanvasRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = 100;
    particles.current = [];

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(117, 165, 111, 0.5)";
        ctx.shadowColor = darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(117, 165, 111, 0.8)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.current.push(new Particle());
    }

    const animateParticles = () => {
      ctx.fillStyle = darkMode ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let particle of particles.current) {
        particle.update();
        particle.draw();
      }
      animationFrameId.current = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [darkMode]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeCanvasRef.current.appendChild(renderer.domElement);

    // **Bentuk Torus (Donat 3D)**
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Warna default (diubah di useEffect lain)
      roughness: 0.4,
      metalness: 0.6,
    });

    const torus = new THREE.Mesh(geometry, material);
    torus.visible = darkMode; // Sembunyikan di mode light
    objectRef.current = torus;
    scene.add(torus);

    // **Tambahkan lighting**
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(3, 3, 5);
    scene.add(light);

    camera.position.z = 5;

    // **Efek mengikuti mouse**
    const onMouseMove = (event) => {
      let mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      let mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (torus.visible) {
        torus.position.x = mouseX * 2;
        torus.position.y = mouseY * 2;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      if (torus.visible) {
        torus.rotation.y += 0.02;
        torus.rotation.x += 0.01;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      threeCanvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // **Update visibilitas & warna saat mode berubah**
  useEffect(() => {
    if (objectRef.current) {
      objectRef.current.visible = darkMode; // Muncul di mode dark
      objectRef.current.material.color.set(0xffffff); // Warna tetap putih di dark mode
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <canvas ref={canvasRef} />
      <div ref={threeCanvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
