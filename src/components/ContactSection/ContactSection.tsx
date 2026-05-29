"use client";

import React from "react";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import styles from "@/styles/ContactSection.module.css";

interface ContactCardItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const CONTACT_CARDS: ContactCardItem[] = [
  {
    id: "email",
    icon: <Mail size={18} />,
    label: "Email",
    value: "gyanp2552@gmail.com",
    href: "mailto:gyanp2552@gmail.com",
  },
  {
    id: "whatsapp",
    icon: <MessageSquare size={18} />,
    label: "Whatsapp",
    value: "+91 8210895737",
    href: "https://wa.me/918210895737",
  },
  {
    id: "linkedin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "Linkedin",
    value: "in/gyanprakash27",
    href: "https://linkedin.com/in/gyanprakash27",
  },
  {
    id: "github",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      </svg>
    ),
    label: "Github",
    value: "@GYANPRAKASH54",
    href: "https://github.com/GYANPRAKASH54",
  },
];

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact-section">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerRow} id="contact-header-row">
          <h2 className={styles.heading} id="contact-main-heading">
            Get In Touch
          </h2>
          <span className={styles.subtitle} id="contact-subtitle">
            Pick Whichever Channel Suits You
          </span>
        </div>

        {/* 4-Column Horizontal Glass Grid */}
        <div className={styles.grid} id="contact-cards-grid">
          {CONTACT_CARDS.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCard}
              id={`contact-card-${card.id}`}
              title={`Connect with Gyan Prakash via ${card.label}`}
            >
              {/* Card Top Row: Circular Icon left, Arrow right */}
              <div className={styles.cardTop}>
                <div className={styles.iconWrapper} id={`contact-icon-${card.id}`}>
                  {card.icon}
                </div>
                <div className={styles.arrowWrapper}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Bottom: Muted channel label and giant value string */}
              <div className={styles.infoDetails}>
                <span className={styles.infoLabel}>{card.label}</span>
                <span className={styles.infoValue}>{card.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Identity Copyright */}
        <footer className={styles.footerText} id="portfolio-copyright-footer">
          <p>© 2026 Gyan Prakash. All rights reserved. Built with Next.js App Router, Three.js, and GSAP.</p>
        </footer>

      </div>
    </section>
  );
}
