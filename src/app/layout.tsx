import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gyan Prakash | Full Stack Developer & Backend Engineer",
  description: "Cinematic portfolio of Gyan Prakash, a Full Stack Developer, Backend Engineer, and API Testing & Automation Enthusiast. Specializing in high-performance APIs, auth systems, and robust automation testing.",
  keywords: ["Gyan Prakash", "Full Stack Developer", "Backend Engineer", "API Automation", "MERN Stack", "Next.js Portfolio", "GSAP Portfolio", "Three.js developer"],
  authors: [{ name: "Gyan Prakash" }],
  creator: "Gyan Prakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="portfolio-root">
        {children}
      </body>
    </html>
  );
}

