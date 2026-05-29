"use client";

import Navbar from "@/components/Navbar/Navbar";
import VideoIntro from "@/components/VideoIntro/VideoIntro";
import CinematicLayer from "@/components/CinematicLayer/CinematicLayer";
import HeroContent from "@/components/HeroContent/HeroContent";

import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import JourneySection from "@/components/JourneySection/JourneySection";
import CredentialsSection from "@/components/CredentialsSection/CredentialsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", overflowX: "hidden" }} id="portfolio-main-viewport">
      {/* Floating Sticky Glass Navigation Header */}
      <Navbar />

      {/* ============================================================
          SECTION 1: FULLSCREEN CINEMATIC HERO SECTION
          ============================================================ */}
      <section 
        style={{ 
          position: "relative", 
          width: "100vw", 
          height: "100vh", 
          overflow: "hidden" 
        }} 
        id="hero-cinematic-section"
      >
        {/* Double-layered synchronized video backgrounds with integrated split layouts */}
        <VideoIntro />

        {/* Transparent Three.js WebGL Particle System Overlay */}
        <CinematicLayer />
      </section>

      {/* ============================================================
          PROGRESSIVE PORTFOLIO SECTION STACK
          ============================================================ */}
      
      {/* SECTION 2: BIOGRAPHY & TECHNICAL SKILLS */}
      <AboutSection />

      {/* SECTION 3: SERVICES EXPERTISE */}
      <ServicesSection />

      {/* SECTION 4: FEATURED ALTERNATING PROJECTS */}
      <ProjectsSection />

      {/* SECTION 5: INTERNSHIP JOURNEY TIMELINE */}
      <JourneySection />

      {/* SECTION 6: ACADEMIC PATH & INDUSTRY CERTIFICATIONS */}
      <CredentialsSection />

      {/* SECTION 7: DIRECT CONNECTION & MESSAGING FORM */}
      <ContactSection />
    </main>
  );
}
