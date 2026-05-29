"use client";

import { Calendar } from "lucide-react";
import styles from "@/styles/JourneySection.module.css";

interface TimelineItem {
  role: string;
  company: string;
  date: string;
  bullets: string[];
  id: string;
}

const JOURNEY_DATA: TimelineItem[] = [
  {
    id: "code-alpha",
    role: "Full Stack Development Intern",
    company: "Code Alpha",
    date: "Feb 2025 – Mar 2025",
    bullets: [
      "Developed responsive, high-performance frontend modules using HTML, CSS, JavaScript, and React.js.",
      "Integrated MongoDB, PostgreSQL, and MySQL databases with Express.js backend systems.",
      "Implemented secure JWT Authentication and OAuth2 authorization systems for API route protection.",
      "Collaborated on comprehensive backend debugging and automated testing workflows to improve application reliability.",
    ],
  },
  {
    id: "cipher-schools",
    role: "MERN Stack Development Intern",
    company: "Cipher Schools",
    date: "Jun 2024 – Jul 2024",
    bullets: [
      "Built scalable full-stack applications using React.js, Node.js, Express.js, and MongoDB (MERN).",
      "Designed highly responsive user interfaces utilizing React Hooks and reusable frontend components.",
      "Implemented JWT-based secure user sessions and authenticated REST API communications.",
      "Successfully deployed staging and production builds on Vercel utilizing integrated GitHub CI/CD workflows.",
    ],
  },
];

export default function JourneySection() {
  return (
    <section className={styles.journeySection} id="journey-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow} id="journey-header-row">
          <span className={styles.sectionLabel}>My Journey</span>
          <h2 className={styles.heading}>
            Internships &amp; <span className={styles.headingHighlight}>Tenures</span>
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className={styles.timeline} id="journey-timeline-stack">
          {JOURNEY_DATA.map((item, index) => (
            <div key={index} className={styles.timelineItem} id={`journey-item-${item.id}`}>
              {/* Vertical timeline node dot */}
              <div className={styles.timelineNode} id={`journey-node-${item.id}`} />
              
              {/* Glassmorphic timeline card */}
              <div className={styles.timelineContent} id={`journey-content-card-${item.id}`}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <span className={styles.companyName}>{item.company}</span>
                  </div>
                  
                  {/* Calendar Date Badge */}
                  <div className={styles.itemDate}>
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Bulleted task contributions */}
                <ul className={styles.bulletList} id={`journey-bullets-${item.id}`}>
                  {item.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className={styles.bulletItem}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
