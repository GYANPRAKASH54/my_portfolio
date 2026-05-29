"use client";

import { Database, Cpu, Gauge, Sparkles } from "lucide-react";
import styles from "@/styles/ServicesSection.module.css";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "fullstack",
    icon: <Database size={22} />,
    title: "Full Stack Development",
    description: "Building scalable single-page MERN platforms and serverless Next.js App Router solutions with highly optimized rendering workflows and completely responsive frontend experiences.",
  },
  {
    id: "backend",
    icon: <Cpu size={22} />,
    title: "Backend & API Systems",
    description: "Architecting modular server structures with Node.js and Express. Designing robust REST APIs secured with JWT, OAuth2, and database models mapped in PostgreSQL, MySQL, and MongoDB.",
  },
  {
    id: "testing",
    icon: <Gauge size={22} />,
    title: "API Testing & Automation",
    description: "Creating full-scale deterministic testing frameworks using Selenium, Rest Assured, and Postman. Ensuring backend reliability under load using JMeter and structured CI/CD verification workflows.",
  },
  {
    id: "ai",
    icon: <Sparkles size={22} />,
    title: "AI-Powered Applications",
    description: "Integrating generative AI and LLM endpoints into business operations, creating intelligent metadata engines, and building legal document management search workflows.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="expertise-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow} id="expertise-header-row">
          <span className={styles.sectionLabel}>Expertise</span>
          <h2 className={styles.heading}>
            What I <span className={styles.headingHighlight}>Build</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className={styles.grid} id="expertise-cards-grid">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              className={styles.card} 
              id={`service-card-${service.id}`}
              title={`Gyan Prakash expertise: ${service.title}`}
            >
              <div className={styles.iconWrapper} id={`service-icon-wrapper-${service.id}`}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
