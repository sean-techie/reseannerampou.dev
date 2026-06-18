"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects"];

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
    `transition ${
      active === section
        ? "text-pink-500 font-semibold"
        : "text-gray-600"
    } hover:text-pink-500`;

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-20 py-6 fixed top-0 left-0 bg-[#fff1f6]/70 backdrop-blur-md z-50">
      <div className="text-lg font-semibold text-gray-900">
        Reseanne<span className="text-pink-500">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="#home" className={linkClass("home")}>
          Home
        </a>
        <a href="#about" className={linkClass("about")}>
          About
        </a>
        <a href="#projects" className={linkClass("projects")}>
          Projects
        </a>
      </div>

      <button className="hidden md:block px-5 py-2 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition">
        Hire Me
      </button>
    </nav>
  );
}