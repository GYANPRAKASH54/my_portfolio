"use client";

import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import styles from "@/styles/CredentialsSection.module.css";

interface EduItem {
  degree: string;
  institution: string;
  date: string;
  location: string;
  scoreLabel: string;
  score: string;
  id: string;
}

interface CertItem {
  name: string;
  provider: string;
  id: string;
}

const EDUCATION_DATA: EduItem[] = [
  {
    id: "lpu",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    date: "Since Aug 2022",
    location: "Punjab, India",
    scoreLabel: "Status",
    score: "Active Undergrad",
  },
  {
    id: "gyan-niketan",
    degree: "Intermediate (PCM)",
    institution: "Gyan Niketan School",
    date: "2021 – 2022",
    location: "Patna, Bihar",
    scoreLabel: "Performance",
    score: "81.8%",
  },
  {
    id: "loyola",
    degree: "Matriculation",
    institution: "Loyola High School",
    date: "2019 – 2020",
    location: "Patna, Bihar",
    scoreLabel: "Performance",
    score: "85.2%",
  },
];

const CERTIFICATIONS_DATA: CertItem[] = [
  {
    id: "gen-ai",
    name: "Principles of Generative AI Certification",
    provider: "Infosys Springboard",
  },
  {
    id: "frontend",
    name: "Front End Web Developer Certification",
    provider: "Infosys Springboard",
  },
  {
    id: "cloud",
    name: "Cloud Computing Certification",
    provider: "NPTEL",
  },
  {
    id: "mern",
    name: "Full Stack MERN Development Certification",
    provider: "Cipher Schools",
  },
];

export default function CredentialsSection() {
  return (
    <section className={styles.credentialsSection} id="credentials-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow} id="credentials-header-row">
          <span className={styles.sectionLabel}>Credentials</span>
          <h2 className={styles.heading}>
            Education &amp; <span className={styles.headingHighlight}>Certifications</span>
          </h2>
        </div>

        {/* Split Column Layout */}
        <div className={styles.splitLayout} id="credentials-split-view">
          {/* Left Column: Education cards grid */}
          <div className={styles.column} id="education-column">
            <h3 className={styles.columnTitle}>
              <GraduationCap size={22} style={{ color: "var(--color-blue-glow)" }} />
              Academic Path
            </h3>

            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className={styles.eduCard} id={`edu-card-${edu.id}`}>
                <div className={styles.eduHeader}>
                  <h4 className={styles.eduTitle}>{edu.degree}</h4>
                  <div className={styles.eduMeta} style={{ borderTop: "none", padding: 0 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={10} />
                      {edu.date}
                    </span>
                  </div>
                </div>
                
                <div className={styles.eduInstitution}>{edu.institution}</div>
                
                <div className={styles.eduMeta}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={10} />
                    {edu.location}
                  </span>
                  <span>
                    {edu.scoreLabel}: <strong className={styles.eduScore}>{edu.score}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications award checklist */}
          <div className={styles.column} id="certifications-column">
            <h3 className={styles.columnTitle}>
              <Award size={22} style={{ color: "var(--color-blue-glow)" }} />
              Professional Badges
            </h3>

            <div className={styles.certCard} id="certifications-checklist-panel">
              <div className={styles.certList}>
                {CERTIFICATIONS_DATA.map((cert, index) => (
                  <div key={index} className={styles.certItem} id={`cert-item-${cert.id}`}>
                    <div className={styles.certBadge} id={`cert-badge-${cert.id}`}>
                      <Award size={16} />
                    </div>
                    <div className={styles.certDetails}>
                      <span className={styles.certName}>{cert.name}</span>
                      <span className={styles.certProvider}>{cert.provider}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
