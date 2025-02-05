// // opsi 1
// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function Model3D() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Inisialisasi Scene
//     const scene = new THREE.Scene();

//     // Kamera dengan perspektif lebih luas
//     const camera = new THREE.PerspectiveCamera(
//       50,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(12, 8, 15);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(
//       mountRef.current.clientWidth,
//       mountRef.current.clientHeight
//     );
//     mountRef.current.appendChild(renderer.domElement);

//     // 🌞 **Pencahayaan**
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(10, 20, 10);
//     scene.add(directionalLight);

//     // 🏢 **Bangunan Kantor Modern**
//     const officeGeometry = new THREE.BoxGeometry(6, 10, 6);
//     const officeMaterial = new THREE.MeshStandardMaterial({
//       color: "#4B6587",
//       metalness: 0.8,
//       roughness: 0.3,
//     });
//     const officeBuilding = new THREE.Mesh(officeGeometry, officeMaterial);
//     scene.add(officeBuilding);

//     // 🏢 **Detail Gedung (Jendela & Pintu)**
//     for (let x = -2; x <= 2; x += 2) {
//       for (let y = -3; y <= 3; y += 3) {
//         const windowGeometry = new THREE.BoxGeometry(1, 1.5, 0.1);
//         const windowMaterial = new THREE.MeshStandardMaterial({
//           color: "#ffffff",
//           emissive: "#ADD8E6",
//           emissiveIntensity: 0.8,
//         });
//         const window = new THREE.Mesh(windowGeometry, windowMaterial);
//         window.position.set(x, y, 3.1);
//         scene.add(window);
//       }
//     }

//     // 🚗 **Jalan di Depan Kantor**
//     const roadGeometry = new THREE.BoxGeometry(15, 0.1, 6);
//     const roadMaterial = new THREE.MeshStandardMaterial({ color: "#333333" });
//     const road = new THREE.Mesh(roadGeometry, roadMaterial);
//     road.position.set(0, -5, 0);
//     scene.add(road);

//     // 🌳 **Taman Kecil (Pohon)**
//     const treeGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3, 8);
//     const treeMaterial = new THREE.MeshStandardMaterial({ color: "#654321" });
//     const leavesGeometry = new THREE.SphereGeometry(1.5, 8, 8);
//     const leavesMaterial = new THREE.MeshStandardMaterial({ color: "#2ecc71" });

//     // Pohon pertama
//     const trunk1 = new THREE.Mesh(treeGeometry, treeMaterial);
//     trunk1.position.set(-5.5, -3, 2); // X = -4
//     scene.add(trunk1);

//     const leaves1 = new THREE.Mesh(leavesGeometry, leavesMaterial);
//     leaves1.position.set(-5.5, -1.5, 2);
//     scene.add(leaves1);

//     // Pohon kedua
//     const trunk2 = new THREE.Mesh(treeGeometry, treeMaterial);
//     trunk2.position.set(5.5, -3, 2); // X = +4
//     scene.add(trunk2);

//     const leaves2 = new THREE.Mesh(leavesGeometry, leavesMaterial);
//     leaves2.position.set(5.5, -1.5, 2);
//     scene.add(leaves2);

//     // 🏢 **Pintu Kantor**
//     const doorGeometry = new THREE.BoxGeometry(1.5, 3, 0.1);
//     const doorMaterial = new THREE.MeshStandardMaterial({ color: "#D35400" });
//     const door = new THREE.Mesh(doorGeometry, doorMaterial);
//     door.position.set(0, -3.5, 3.12);
//     scene.add(door);

//     // 🎥 **Animasi Kamera (Smooth Rotation)**
//     let angle = 0;
//     const animate = () => {
//       requestAnimationFrame(animate);
//       angle += 0.005;
//       camera.position.x = 12 * Math.cos(angle);
//       camera.position.z = 12 * Math.sin(angle);
//       camera.lookAt(officeBuilding.position);
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize Responsif
//     const handleResize = () => {
//       renderer.setSize(
//         mountRef.current.clientWidth,
//         mountRef.current.clientHeight
//       );
//       camera.aspect =
//         mountRef.current.clientWidth / mountRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="w-full h-[500px] flex justify-center items-center"
//     />
//   );
// }


// // opsi 2

// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function Model3D() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Inisialisasi Scene
//     const scene = new THREE.Scene();

//     // Kamera dengan perspektif lebih luas
//     const camera = new THREE.PerspectiveCamera(
//       50,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(12, 8, 15);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(
//       mountRef.current.clientWidth,
//       mountRef.current.clientHeight
//     );
//     mountRef.current.appendChild(renderer.domElement);

//     // 🌞 **Pencahayaan**
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(10, 20, 10);
//     scene.add(directionalLight);

//     // 🏢 **Bangunan Kantor Modern**
//     const officeGeometry = new THREE.BoxGeometry(6, 10, 6);
//     const officeMaterial = new THREE.MeshStandardMaterial({
//       color: "#4B6587",
//       metalness: 0.8,
//       roughness: 0.3,
//     });
//     const officeBuilding = new THREE.Mesh(officeGeometry, officeMaterial);
//     scene.add(officeBuilding);

//     // 🏢 **Detail Gedung (Jendela & Pintu)**
//     for (let x = -2; x <= 2; x += 2) {
//       for (let y = -3; y <= 3; y += 3) {
//         const windowGeometry = new THREE.BoxGeometry(1, 1.5, 0.1);
//         const windowMaterial = new THREE.MeshStandardMaterial({
//           color: "#ffffff",
//           emissive: "#ADD8E6",
//           emissiveIntensity: 0.8,
//         });
//         const window = new THREE.Mesh(windowGeometry, windowMaterial);
//         window.position.set(x, y, 3.1);
//         scene.add(window);
//       }
//     }

//     // 🚗 **Jalan di Depan Kantor**
//     const roadGeometry = new THREE.BoxGeometry(15, 0.1, 6);
//     const roadMaterial = new THREE.MeshStandardMaterial({ color: "#333333" });
//     const road = new THREE.Mesh(roadGeometry, roadMaterial);
//     road.position.set(0, -5, 0);
//     scene.add(road);

//     // 🌳 **Taman Kecil (Pohon)**
//     const treeGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3, 8);
//     const treeMaterial = new THREE.MeshStandardMaterial({ color: "#654321" });
//     const leavesGeometry = new THREE.SphereGeometry(1.5, 8, 8);
//     const leavesMaterial = new THREE.MeshStandardMaterial({ color: "#2ecc71" });

//     // Pohon pertama
//     const trunk1 = new THREE.Mesh(treeGeometry, treeMaterial);
//     trunk1.position.set(-5.5, -3.5, 2);
//     scene.add(trunk1);

//     const leaves1 = new THREE.Mesh(leavesGeometry, leavesMaterial);
//     leaves1.position.set(-5.5, -1.5, 2);
//     scene.add(leaves1);

//     // Pohon kedua
//     const trunk2 = new THREE.Mesh(treeGeometry, treeMaterial);
//     trunk2.position.set(5.5, -3.5, 2);
//     scene.add(trunk2);

//     const leaves2 = new THREE.Mesh(leavesGeometry, leavesMaterial);
//     leaves2.position.set(5.5, -1.5, 2);
//     scene.add(leaves2);

//     // 🏢 **Pintu Kantor**
//     const doorGeometry = new THREE.BoxGeometry(1.5, 3, 0.1);
//     const doorMaterial = new THREE.MeshStandardMaterial({ color: "#D35400" });
//     const door = new THREE.Mesh(doorGeometry, doorMaterial);
//     door.position.set(0, -3.5, 3.12);
//     scene.add(door);

//     // 🎥 **Gerakkan Kamera Berdasarkan Kursor**
//     const handleMouseMove = (event) => {
//       const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//       camera.position.x = mouseX * 10; // Sesuaikan sensitivitas
//       camera.position.y = mouseY * 5;  // Sesuaikan sensitivitas
//       camera.lookAt(officeBuilding.position);

//       renderer.render(scene, camera);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Render Scene Secara Berkala
//     const renderScene = () => {
//       requestAnimationFrame(renderScene);
//       renderer.render(scene, camera);
//     };
//     renderScene();

//     // Resize Responsif
//     const handleResize = () => {
//       renderer.setSize(
//         mountRef.current.clientWidth,
//         mountRef.current.clientHeight
//       );
//       camera.aspect =
//         mountRef.current.clientWidth / mountRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="w-full h-[500px] flex justify-center items-center"
//     />
//   );
// }

// opsi 3

"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Model3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Inisialisasi Scene
    const scene = new THREE.Scene();

    // Kamera dengan perspektif lebih luas
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(12, 8, 15);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // 🌞 **Pencahayaan**
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // 🏢 **Bangunan Kantor Modern**
    const officeGeometry = new THREE.BoxGeometry(9, 12, 6);
    const officeMaterial = new THREE.MeshStandardMaterial({
      color: "#4B6587",
      metalness: 0.8,
      roughness: 0.3,
    });
    const officeBuilding = new THREE.Mesh(officeGeometry, officeMaterial);
    scene.add(officeBuilding);

// 🏢 **Detail Gedung (Jendela & Pintu)**
for (let x = -3; x <= 4; x += 3) {
  for (let y = -3; y <= 5.2; y += 3.2) {
    // 🪟 **Jendela**
    const windowGeometry = new THREE.BoxGeometry(2.2, 1.6, 0.1);
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      emissive: "#ADD8E6",
      emissiveIntensity: 0.8,
    });
    const window = new THREE.Mesh(windowGeometry, windowMaterial);
    window.position.set(x, y, 3.2);
    scene.add(window);

    // 🚪 **Pintu Kantor**
    const doorGeometry = new THREE.BoxGeometry(2, 1.8, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: "#ADD8E6", emissive:"#000" });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(x, y - 0, 3.12); // Sesuaikan posisi Y agar pintu berada di bawah jendela
    scene.add(door);
  }
}


    // 🌳 **Taman Kecil (Pohon)**
    const treeGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3, 8);
    const treeMaterial = new THREE.MeshStandardMaterial({ color: "#654321" });
    const leavesGeometry = new THREE.SphereGeometry(1.5, 8, 8);
    const leavesMaterial = new THREE.MeshStandardMaterial({ color: "#2ecc71" });

    // Pohon pertama
    const trunk1 = new THREE.Mesh(treeGeometry, treeMaterial);
    trunk1.position.set(-7, -4.2, 3.3);
    scene.add(trunk1);

    const leaves1 = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves1.position.set(-7, -2.4, 3.3);
    scene.add(leaves1);

    // Pohon kedua
    const trunk2 = new THREE.Mesh(treeGeometry, treeMaterial);
    trunk2.position.set(7, -4.2, 3.3);
    scene.add(trunk2);

    const leaves2 = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves2.position.set(7, -2.4, 3.3);
    scene.add(leaves2);

    // 🎥 **Tambahkan OrbitControls**
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Animasi halus (damping)
    controls.dampingFactor = 0.05; // Faktor damping
    controls.screenSpacePanning = true; // Panning menggunakan mouse
    controls.minDistance = 5; // Jarak minimum zoom
    controls.maxDistance = 20; // Jarak maksimum zoom
    controls.maxPolarAngle = Math.PI / 2; // Batasi sudut rotasi vertikal

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Perbarui kontrol setiap frame
      renderer.render(scene, camera);
    };
    animate();

    // Resize Responsif
    const handleResize = () => {
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[500px] flex justify-center items-center"
    />
  );
}

// // glb
// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// export default function Model3D() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene
//     const scene = new THREE.Scene();

//     // Kamera
//     const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 2, 5);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Pencahayaan
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 10, 5);
//     scene.add(directionalLight);

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     // 🎭 **Muat Model Karakter 3D**
//     const loader = new GLTFLoader();
//     loader.load(
//       "/source/man.glb", // ✅ Pastikan path benar (tanpa `/public`)
//       (gltf) => {
//         const model = gltf.scene;
//         model.scale.set(2, 2, 2); // ✅ Sesuaikan ukuran model
//         model.position.set(0, -1, 0);
//         model.rotation.y = Math.PI; // ✅ Putar model ke arah depan
//         scene.add(model);
//       },
//       undefined,
//       (error) => console.error("Error loading model:", error)
//     );

//     // Animasi Render
//     const renderScene = () => {
//       requestAnimationFrame(renderScene);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     renderScene();

//     // Resize Responsif
//     const handleResize = () => {
//       renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//       camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div ref={mountRef} className="w-full h-[500px] flex justify-center items-center" />
//   );
// }



// opsi 4