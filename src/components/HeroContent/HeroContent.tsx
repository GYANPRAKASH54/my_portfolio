"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/HeroContent.module.css";

const TECH_PILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "CI/CD",
];

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const subtitles = containerRef.current.querySelectorAll(`.${styles.subtitle}`);
    
    // Mobile optimization: simplify transitions on smaller screens
    const isMobile = window.innerWidth < 768;
    const translateY = isMobile ? 10 : 30; 
    const duration = isMobile ? 0.45 : 0.8;

    // Pre-set layouts for smooth entry transitions
    gsap.set([taglineRef.current, headingRef.current, pillsRef.current], {
      y: translateY,
      opacity: 0,
    });
    gsap.set(subtitles, {
      y: isMobile ? 8 : 20,
      opacity: 0,
    });

    const tl = gsap.timeline({ delay: isMobile ? 0.2 : 0.8 });

    tl.to(taglineRef.current, {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: "power3.out",
    })
      .to(
        headingRef.current,
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.55 : 1.0,
          ease: "power3.out",
        },
        isMobile ? "-=0.25" : "-=0.5"
      )
      .to(
        subtitles,
        {
          y: 0,
          opacity: 1,
          duration: duration,
          stagger: isMobile ? 0.12 : 0.25, // Stagger paragraphs seamlessly
          ease: "power3.out",
        },
        isMobile ? "-=0.3" : "-=0.6"
      )
      .to(
        pillsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: "power2.out",
        },
        isMobile ? "-=0.2" : "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.heroOverlay} id="hero-content-section">
      {/* 1. Tagline */}
      <div ref={taglineRef} className={styles.tagline} id="hero-tagline">
        FULL STACK ENGINEER • BACKEND SYSTEMS • API AUTOMATION
      </div>

      {/* 2. Giant blocky vertical title */}
      <div ref={headingRef} className={styles.headingWrapper}>
        <h1 className={styles.mainTitleAccent} id="hero-title">
          GYAN<br />PRAKASH
        </h1>
      </div>

      {/* 3. Narrative Professional Biography Paragraphs */}
      <p className={styles.subtitle} id="hero-subtitle-1">
        Full Stack Engineer passionate about building immersive digital experiences, 
        scalable backend systems, secure authentication architectures, and intelligent 
        automation workflows using modern web technologies.
      </p>

      <p className={styles.subtitle} id="hero-subtitle-2">
        Specialized in React.js, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, 
        JWT Authentication, OAuth2, and modern CI/CD deployment pipelines.
      </p>

      <p className={`${styles.subtitle} ${styles.subtitleLast}`} id="hero-subtitle-3">
        Focused on crafting high-performance applications that combine cinematic frontend 
        experiences with scalable backend engineering and seamless user interaction.
      </p>

      {/* 4. Technical capsules grid */}
      <div ref={pillsRef} className={styles.techPillsWrapper} id="hero-tech-pills">
        {TECH_PILLS.map((pill, index) => (
          <span 
            key={index} 
            className={styles.techPill} 
            id={`hero-pill-${pill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            title={`Gyan core tech pill: ${pill}`}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
