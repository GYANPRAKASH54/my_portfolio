"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "@/styles/Navbar.module.css";

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", targetId: "about-section" },
  { label: "Expertise", targetId: "expertise-section" },
  { label: "Projects", targetId: "projects-section" },
  { label: "Journey", targetId: "journey-section" },
  { label: "Credentials", targetId: "credentials-section" },
  { label: "Contact", targetId: "contact-section" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitor scroll height to apply class scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      // Smoothly scroll to the target element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} id="portfolio-navbar-header">
      {/* Brand logo */}
      <div className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} id="navbar-brand-logo">
        <span>Gyan Prakash</span>
        <div className={styles.brandDot} />
      </div>

      {/* Desktop Navigation Links */}
      <nav className={styles.navLinks} id="navbar-desktop-navigation">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={index}
            className={styles.navLink}
            onClick={() => handleNavClick(item.targetId)}
            id={`desktop-nav-link-${item.targetId}`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Toggle Button */}
      <button 
        className={styles.hamburgerBtn} 
        onClick={toggleMenu}
        aria-label="Toggle navigation drawer"
        id="navbar-mobile-toggle-btn"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Slide-Down Drawer Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} id="navbar-mobile-drawer">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={index}
            className={styles.mobileLink}
            onClick={() => handleNavClick(item.targetId)}
            id={`mobile-nav-link-${item.targetId}`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
