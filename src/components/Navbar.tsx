"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (section: string) =>
    active === section
      ? "text-[#C08A5D] font-medium"
      : "text-[#6B7280] hover:text-[#2C3E50] transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F2]/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold text-[#2C3E50]">
          Reseanne<span className="text-[#C08A5D]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-[#2C3E50] text-white hover:opacity-90 transition"
        >
          Let's Connect
        </a>
      </div>
    </nav>
  );
}