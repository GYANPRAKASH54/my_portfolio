"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import HeroContent from "@/components/HeroContent/HeroContent";
import styles from "@/styles/VideoIntro.module.css";

interface FloatingChipItem {
  label: string;
  className: string;
}

const CHIPS_DATA: FloatingChipItem[] = [
  { label: "MERN Stack", className: styles.chip1 },
  { label: "JWT Auth", className: styles.chip2 },
  { label: "OAuth2", className: styles.chip3 },
  { label: "API Automation", className: styles.chip4 },
  { label: "Backend Dev", className: styles.chip5 },
  { label: "CI/CD", className: styles.chip6 },
];

export default function VideoIntro() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Smooth transition fade-in triggers on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Auto-hide the sound hint after 5.5 seconds
    const hintTimer = setTimeout(() => {
      setShowHint(false);
    }, 5500);

    // Scroll listener for 7. HIGH-PERFORMANCE SCROLL-BASED COMPRESSION EFFECT
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const progress = Math.min(scrollY / innerHeight, 1);
      setScrollProgress(progress);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      clearTimeout(hintTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Sync playback states across both background and foreground video layers
  useEffect(() => {
    const bgVideo = bgVideoRef.current;
    const fgVideo = fgVideoRef.current;

    if (!bgVideo || !fgVideo) return;

    if (isPlaying) {
      bgVideo.play().catch((err) => console.log("Background video autoplay blocked: ", err));
      fgVideo.play().catch((err) => console.log("Foreground video autoplay blocked: ", err));
    } else {
      bgVideo.pause();
      fgVideo.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const fgVideo = fgVideoRef.current;
    if (!fgVideo) return;

    fgVideo.muted = isMuted;
  }, [isMuted]);

  // 1. GSAP Timelines for Cinematic Camera Drift & Floating Chips
  useEffect(() => {
    if (!isLoaded) return;
    if (isMobile) return; // Completely disable continuous CPU/GPU intensive floating drift loops on mobile
    const cardDrift = gsap.to(`#cinematic-video-card`, {
      y: -8,
      x: 5,
      rotation: 0.4,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Ultra-subtle continuous camera drift on left content text
    const textDrift = gsap.to(`#hero-text-content-wrapper`, {
      y: 5,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 4. Staggered slow looping drift for floating chips (6s - 12s durations)
    const chips = document.querySelectorAll(`.${styles.floatingChip}`);
    const chipAnimations: gsap.core.Tween[] = [];

    if (chips.length > 0) {
      chips.forEach((chip) => {
        const rx = 10 + Math.random() * 15;
        const ry = 8 + Math.random() * 12;

        const animX = gsap.to(chip, {
          x: `+=${rx}`,
          duration: 7 + Math.random() * 5, // 7s to 12s durations!
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const animY = gsap.to(chip, {
          y: `+=${ry}`,
          duration: 6 + Math.random() * 4, // 6s to 10s durations!
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        chipAnimations.push(animX, animY);
      });
    }

    return () => {
      cardDrift.kill();
      textDrift.kill();
      chipAnimations.forEach((anim) => anim.kill());
    };
  }, [isLoaded]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.heroContainer} id="hero-video-intro">
      {/* 5. HIGH-FIDELITY FLICKERING FILM GRAIN TEXTURE */}
      <div className="film-grain" id="global-film-grain" />

      {/* 2. DYNAMIC LIGHT LENS SWEEP REFLECTION */}
      <div className="lightSweep" id="cinematic-light-sweep" />

      {/* 1. Ambient Duplicate Background Video Layer */}
      <div 
        className={`${styles.backgroundVideoContainer} ${
          isLoaded ? styles.backgroundVideoVisible : ""
        }`}
        id="bg-ambient-video-layer"
      >
        <video
          ref={bgVideoRef}
          className={styles.backgroundVideo}
          src="/mp_.mp4"
          loop
          muted
          playsInline
          autoPlay
          preload="metadata"
        />
      </div>

      {/* 2. Cinematic Darkness and Volumetric Fog Vignette */}
      <div 
        className={styles.overlayMask} 
        id="cinematic-gradient-overlay" 
        style={{ opacity: 0.4 + scrollProgress * 0.45 }} /* Darkens progressively on scroll */
      />
      <div className="volumetric-fog" id="cinematic-fog-glow" />
      <div className="cinematic-vignette" id="cinematic-vignette-shadow" />

      {/* 3. Screen overlays container */}
      <div className={styles.contentOverlay} id="cinematic-screen-content-overlay">
        
        {/* Left-Right Column Split Layout */}
        <div className={styles.heroSplitWrapper} id="hero-split-container">
          
          {/* Left Column: Biography content (shifts up and fades on scroll) */}
          <div 
            className={styles.leftContent}
            id="hero-text-content-wrapper"
            style={{
              transform: isMobile ? "none" : `translateY(${-scrollProgress * 50}px)`,
              opacity: isMobile ? 1 : 1 - scrollProgress * 0.9,
            }}
          >
            <HeroContent />
          </div>

          {/* Right Column: Floating vertical video card with controls & floating chips */}
          <div className={styles.rightVideoSide}>
            
            {/* 4. Floating Glassmorphic Metadata Chips surrounding the card */}
            {CHIPS_DATA.map((chip, index) => (
              <div
                key={index}
                className={`${styles.floatingChip} ${chip.className} ${
                  isLoaded ? styles.chipVisible : ""
                }`}
                id={`hero-floating-chip-${index}`}
              >
                {chip.label}
              </div>
            ))}

            {/* Foreground Video Card (scales down and fades out on scroll) */}
            <div 
              className={`${styles.videoCardWrapper} ${
                isLoaded ? styles.videoCardVisible : ""
              }`} 
              id="cinematic-video-card"
              style={{
                transform: isMobile ? "none" : `translateY(0px) scale(${1 - scrollProgress * 0.08})`,
                opacity: isMobile ? 1 : 1 - scrollProgress * 0.8,
              }}
            >
              <video
                ref={fgVideoRef}
                className={styles.fgVideoCard}
                src="/mp_.mp4"
                loop
                muted={isMuted}
                playsInline
                autoPlay
                preload="metadata"
              />

              {/* TAP FOR SOUND Badge inside the card */}
              {showHint && isMuted && (
                <div 
                  className={styles.soundBadge} 
                  id="tap-for-sound-badge"
                  onClick={() => {
                    handleToggleMute();
                    setShowHint(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.pulseDot} />
                  <span>TAP FOR SOUND</span>
                </div>
              )}

              {/* Play/Pause & Mute/Unmute Buttons */}
              <div className={styles.videoCardControls}>
                <button
                  className={styles.cardControlButton}
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? "Pause cinematic intro" : "Play cinematic intro"}
                  id="play-pause-btn-widget"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  className={styles.cardControlButton}
                  onClick={() => {
                    handleToggleMute();
                    setShowHint(false);
                  }}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  id="mute-unmute-btn-widget"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Scroll Indicator */}
        <div 
          className={styles.scrollIndicator} 
          onClick={handleScrollClick}
          aria-label="Scroll to biography details"
          role="button"
          tabIndex={0}
          id="home-scroll-indicator"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleScrollClick();
            }
          }}
        >
          <span className={styles.scrollText}>Enter Experiences</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollPulseLine} />
          </div>
        </div>

      </div>
    </div>
  );
}
