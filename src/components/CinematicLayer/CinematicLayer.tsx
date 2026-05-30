"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";
import styles from "@/styles/CinematicLayer.module.css";

export default function CinematicLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Track lerped mouse position for parallax
  const mouse = useMousePosition(0.05);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // Create a dark subtle fog to blend particles smoothly in the distance
    scene.fog = new THREE.FogExp2(0x07111f, 0.015);

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // 3. Renderer Setup (GPU Optimized)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // Turned off for raw GPU efficiency, soft shapes are achieved via shaders/textures
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Procedural Soft Glow Texture Generator
    const createBokehTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const texture = createBokehTexture();

    // 5. Build Particles Geometries & Materials (Mobile Optimized)
    const isMobile = window.innerWidth < 768;
    const particleCountA = isMobile ? 25 : 70; // 60%+ reduction
    const geometryA = new THREE.BufferGeometry();
    const positionsA = new Float32Array(particleCountA * 3);
    const speedsA = new Float32Array(particleCountA);
    const offsetsA = new Float32Array(particleCountA * 3);

    for (let i = 0; i < particleCountA; i++) {
      // Wide volume distribution
      positionsA[i * 3] = (Math.random() - 0.5) * 35;
      positionsA[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positionsA[i * 3 + 2] = -15 + Math.random() * 15; // Restrict z range so particles never drift too close to the camera lens (prevents huge blurry blobs)

      speedsA[i] = 0.05 + Math.random() * 0.08;
      offsetsA[i * 3] = Math.random() * Math.PI * 2;
      offsetsA[i * 3 + 1] = Math.random() * Math.PI * 2;
      offsetsA[i * 3 + 2] = Math.random() * Math.PI * 2;
    }

    geometryA.setAttribute("position", new THREE.BufferAttribute(positionsA, 3));

    // Warm colors mapped to premium blue palette: #60A5FA, #3B82F6, #93C5FD
    const colorsA = [
      new THREE.Color(0x60a5fa), // Ice Blue Glow
      new THREE.Color(0x3b82f6), // Electric Soft Blue
      new THREE.Color(0x93c5fd), // Soft Light Blue
    ];

    const materialA = new THREE.PointsMaterial({
      size: isMobile ? 0.8 : 1.2, // Smaller size on mobile
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: isMobile ? 0.5 : 0.65, // Lower opacity to simplify shaders
    });

    // Custom coloring via vertex loop helper to give random soft blue values
    const pointsA = new THREE.Points(geometryA, materialA);
    scene.add(pointsA);

    // Pool B: Tiny Frost White Embers (Sparkles)
    const particleCountB = isMobile ? 45 : 120; // 60%+ reduction
    const geometryB = new THREE.BufferGeometry();
    const positionsB = new Float32Array(particleCountB * 3);
    const speedsB = new Float32Array(particleCountB);
    const offsetsB = new Float32Array(particleCountB * 2);

    for (let i = 0; i < particleCountB; i++) {
      positionsB[i * 3] = (Math.random() - 0.5) * 40;
      positionsB[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positionsB[i * 3 + 2] = -10 + Math.random() * 10; // Restrict z range for sparkles to maintain crisp, small embers in the background

      speedsB[i] = 0.08 + Math.random() * 0.12;
      offsetsB[i * 2] = Math.random() * Math.PI * 2;
      offsetsB[i * 2 + 1] = Math.random() * Math.PI * 2;
    }

    geometryB.setAttribute("position", new THREE.BufferAttribute(positionsB, 3));

    const materialB = new THREE.PointsMaterial({
      size: 0.35,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8,
    });

    const pointsB = new THREE.Points(geometryB, materialB);
    scene.add(pointsB);

    // Fade in canvas slowly after rendering starts to prevent visual jump
    setTimeout(() => setIsVisible(true), 300);

    // 6. Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Slow drift and sine-wave oscillations for Pool A
      const posArrA = geometryA.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCountA; i++) {
        // Vertical slow drift
        posArrA[i * 3 + 1] += speedsA[i] * 0.03;
        // Horizontal oscillation
        posArrA[i * 3] += Math.sin(time + offsetsA[i * 3]) * 0.003;
        
        // Loop back when moving past vertical boundaries
        if (posArrA[i * 3 + 1] > 12) {
          posArrA[i * 3 + 1] = -12;
        }
      }
      geometryA.attributes.position.needsUpdate = true;

      // Drifting motion for Pool B (Sparkles)
      const posArrB = geometryB.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCountB; i++) {
        posArrB[i * 3 + 1] += speedsB[i] * 0.05;
        posArrB[i * 3] += Math.sin(time * 1.5 + offsetsB[i * 2]) * 0.005;

        if (posArrB[i * 3 + 1] > 15) {
          posArrB[i * 3 + 1] = -15;
        }
      }
      geometryB.attributes.position.needsUpdate = true;

      // Mouse Parallax Interaction (Smooth camera translation based on normalized mouse coords)
      const targetCamX = mouse.current.x * 2.5;
      const targetCamY = mouse.current.y * 2.5 + 0.5; // subtle look upward angle

      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 8. Resource Disposal Cleanup (CRITICAL for high performance)
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      
      // Dispose meshes
      scene.remove(pointsA);
      scene.remove(pointsB);

      geometryA.dispose();
      materialA.dispose();
      geometryB.dispose();
      materialB.dispose();

      texture.dispose();
      renderer.dispose();
    };
  }, [mouse]);

  return (
    <div ref={containerRef} className={styles.canvasContainer} id="threejs-particle-layer">
      <canvas 
        ref={canvasRef} 
        className={`${styles.canvas} ${isVisible ? styles.canvasVisible : ""}`} 
      />
    </div>
  );
}
