"use client";

import { ExternalLink } from "lucide-react";
import styles from "@/styles/ProjectsSection.module.css";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  badges: string[];
  liveLink?: string;
  codeLink?: string;
  mockupHeader: string;
  mockupElement: React.ReactNode;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "upgrade-skills",
    title: "Upgrade Skills Platform",
    description: "Developed a scalable learning and skill development platform using MERN stack technologies. Integrated custom REST APIs and MongoDB for seamless user authentication and data management. Designed a highly responsive client interface optimized for performance and fluid interaction across multiple screen viewports.",
    badges: ["React.js", "Node.js", "Express.js", "MongoDB", "CI/CD", "Vercel"],
    liveLink: "https://upgrade-skills-three.vercel.app",
    codeLink: "https://github.com/GYANPRAKASH54/Upgrade-Skills",
    mockupHeader: "upgrade-skills-three.vercel.app",
    mockupElement: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
        {/* Learning progress card */}
        <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(96, 165, 250, 0.25)", padding: "12px", borderRadius: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", marginBottom: "6px" }}>
            <span style={{ color: "#EAF4FF", fontWeight: 600 }}>MERN Stack Course</span>
            <span style={{ color: "#7DD3FC" }}>84% Complete</span>
          </div>
          <div style={{ width: "100%", height: "6px", background: "rgba(7, 17, 31, 0.6)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ width: "84%", height: "100%", background: "linear-gradient(to right, #3b82f6, #7dd3fc)" }} />
          </div>
        </div>
        {/* Active lesson stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <div style={{ background: "rgba(11, 30, 53, 0.45)", border: "1px solid rgba(125, 211, 252, 0.1)", padding: "8px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#60A5FA" }}>12+</div>
            <div style={{ fontSize: "0.55rem", color: "#94A3B8" }}>Lessons Complete</div>
          </div>
          <div style={{ background: "rgba(11, 30, 53, 0.45)", border: "1px solid rgba(125, 211, 252, 0.1)", padding: "8px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#7DD3FC" }}>4.8★</div>
            <div style={{ fontSize: "0.55rem", color: "#94A3B8" }}>Course Rating</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hennge-challenge",
    title: "HENNGE Backend Engineering Challenge",
    description: "Successfully implemented recursive engineering algorithms and authenticated API operations for the HENNGE backend challenge. Developed an RFC6238 compliant 10-digit TOTP generator using SHA-512 cryptographic hashing. Performed secured API requests with HTTP Basic Access Authentication and GitHub Secret Gist configurations.",
    badges: ["Python", "RFC6238", "TOTP Auth", "SHA-512", "Basic Auth", "Gist API"],
    mockupHeader: "hennge-challenge.py",
    mockupElement: (
      <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#94A3B8", display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        <div><span style={{ color: "#3B82F6" }}>import</span> hmac, hashlib</div>
        <div><span style={{ color: "#3B82F6" }}>def</span> <span style={{ color: "#7DD3FC" }}>generate_totp</span>(secret):</div>
        <div style={{ paddingLeft: "12px" }}>msg = struct.pack(<span style={{ color: "#60A5FA" }}>"&gt;Q"</span>, time_step)</div>
        <div style={{ paddingLeft: "12px" }}>h = hmac.new(secret, msg, hashlib.sha512)</div>
        <div style={{ paddingLeft: "12px" }}><span style={{ color: "#3B82F6" }}>return</span> base32_digest(h)</div>
        <div style={{ margin: "6px 0", borderTop: "1px dashed rgba(125, 211, 252, 0.15)", paddingTop: "6px", color: "#EAF4FF" }}>
          <span>&gt;_ python totp_gen.py</span><br />
          <span style={{ color: "#22c55e" }}>[SUCCESS]</span> TOTP Code: <span style={{ color: "#7DD3FC", textDecoration: "underline" }}>8210895737</span>
        </div>
      </div>
    ),
  },
  {
    id: "legal-doc",
    title: "Intelligent Legal Document System",
    description: "Architected an AI-powered legal document management and index platform using Python, React, and MongoDB. Structured high-speed secure document uploads and dynamic metadata indexing, allowing lawyers to trigger intelligent doc queries instantly. Implemented robust role-based access control systems ensuring document privacy.",
    badges: ["Python", "React.js", "PostgreSQL", "MongoDB", "REST APIs", "AI Search"],
    codeLink: "https://github.com/GYANPRAKASH54/Smart_Legal_dm",
    mockupHeader: "intelligent-legal-search-db",
    mockupElement: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        {/* Glow documents stack view */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(11, 30, 53, 0.5)", border: "1px solid rgba(125, 211, 252, 0.12)", padding: "10px", borderRadius: "10px" }}>
          <div style={{ width: "28px", height: "34px", background: "rgba(59, 130, 246, 0.2)", border: "1px solid #60A5FA", borderRadius: "4px", display: "flex", alignItems: "center", justifyItems: "center" }}>
            <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#60A5FA", width: "100%", textAlign: "center" }}>PDF</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.7rem", color: "#EAF4FF", fontWeight: 600 }}>contract_rev_v2.pdf</div>
            <div style={{ fontSize: "0.55rem", color: "#94A3B8" }}>Indexed • Role: Admin Access</div>
          </div>
        </div>
        {/* SQL Search node query feedback */}
        <div style={{ background: "rgba(7, 17, 31, 0.65)", padding: "8px", borderRadius: "8px", fontSize: "0.55rem", fontFamily: "monospace", color: "#7DD3FC" }}>
          <span>SELECT * FROM doc_metadata WHERE keywords @@ 'liability';</span><br />
          <span style={{ color: "#94A3B8" }}>-- Index execution time: 0.12ms (PostgreSQL)</span>
        </div>
      </div>
    ),
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow} id="projects-header-row">
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.heading}>
            Featured <span className={styles.headingHighlight}>Projects</span>
          </h2>
        </div>

        {/* Projects Stack */}
        <div className={styles.stack} id="projects-stack-container">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`${styles.projectCard} ${!isEven ? styles.cardAlternate : ""}`}
                id={`project-card-${project.id}`}
              >
                {/* Text Description Side */}
                <div className={styles.textSide} id={`project-text-side-${project.id}`}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {/* Technology badging tags */}
                  <div className={styles.badgeList} id={`project-badges-list-${project.id}`}>
                    {project.badges.map((badge, bIndex) => (
                      <span key={bIndex} className={styles.techBadge}>
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions (Live Link + Github Code) */}
                  <div className={styles.projectActions} id={`project-actions-${project.id}`}>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                        id={`project-live-btn-${project.id}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButtonSecondary}
                        id={`project-github-btn-${project.id}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        </svg>
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive Graphics Side (Mockup Panel) */}
                <div className={styles.imageSide} id={`project-mockup-side-${project.id}`}>
                  <div className={styles.mockupPanel}>
                    <div className={styles.mockupHeader}>
                      <div className={styles.mockupDot} style={{ backgroundColor: "#ef4444" }} />
                      <div className={styles.mockupDot} style={{ backgroundColor: "#eab308" }} />
                      <div className={styles.mockupDot} style={{ backgroundColor: "#22c55e" }} />
                      <span className={styles.mockupTitle}>{project.mockupHeader}</span>
                    </div>
                    <div className={styles.mockupContent}>{project.mockupElement}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
