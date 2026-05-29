"use client";

import { Layers } from "lucide-react";
import styles from "@/styles/AboutSection.module.css";

interface SkillCategory {
  category: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth2", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Testing & Automation",
    skills: ["Selenium", "Rest Assured", "Postman", "JMeter", "Appium", "Jira"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "CI/CD", "VS Code", "Eclipse"],
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about-section">
      <div className={styles.container}>
        {/* Left Column: Biography Narrative */}
        <div className={styles.leftColumn} id="about-biography-narrative">
          <span className={styles.sectionLabel}>Biography</span>
          
          <h2 className={styles.heading}>
            Crafting Scalable Backends <br />
            <span className={styles.headingHighlight}>With Performance Focus</span>
          </h2>
          
          <div className={styles.biographyText}>
            <p className={styles.descriptionParagraph}>
              Hi, I’m <strong>Gyan Prakash</strong> — a Computer Science undergraduate at 
              Lovely Professional University specializing in <strong>Full Stack Development, Backend Systems Engineering, 
              and API Testing & Automation workflows</strong>.
            </p>
            <p className={styles.descriptionParagraph}>
              I have hands-on experience architecting scalable MERN stack systems, RESTful APIs, 
              and robust JWT/OAuth2 authentication procedures using Node.js, Express, Python, and Java. 
              My backend design focuses on structural data security and latency reduction using SQL and NoSQL targets like PostgreSQL and MongoDB.
            </p>
            <p className={styles.descriptionParagraph}>
              Beyond developer engineering, I have a deep passion for <strong>deterministic API testing and pipelines</strong>. 
              I design full-scale automation frameworks using Rest Assured, Selenium, and Postman to ensure backend APIs operate flawlessly under intense real-world load.
            </p>
            <p className={styles.descriptionParagraph}>
              Currently, I'm pursuing my B.Tech degree and continuously implementing industry-standard CI/CD, 
              API automation testing, and serverless deployment systems to translate complex startup logic into modern digital assets.
            </p>
          </div>
        </div>

        {/* Right Column: Stats & Technical Arsenal */}
        <div className={styles.rightColumn} id="about-skills-arsenal">
          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard} id="stat-card-interns">
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Internship tenures</span>
            </div>
            <div className={styles.statCard} id="stat-card-coverage">
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Automation commitment</span>
            </div>
          </div>

          {/* Technical Arsenal Box */}
          <div className={styles.arsenalCard} id="technical-arsenal-box">
            <h3 className={styles.arsenalTitle}>
              <Layers size={18} style={{ color: "var(--color-blue-glow)" }} />
              Technical Arsenal
            </h3>
            
            {SKILL_CATEGORIES.map((cat, index) => (
              <div key={index} className={styles.skillCategory} id={`skill-category-${index}`}>
                <div className={styles.categoryName}>{cat.category}</div>
                <div className={styles.skillsList}>
                  {cat.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className={styles.skillPill}
                      id={`skill-pill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
