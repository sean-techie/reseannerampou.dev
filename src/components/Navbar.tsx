"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-20 py-6 fixed top-0 left-0 bg-[#fff1f6]/70 backdrop-blur-md z-50">
      <div className="text-lg font-semibold text-gray-900">
        Reseanne<span className="text-pink-500">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <a href="#home" className="hover:text-pink-500 transition">Home</a>
        <a href="#about" className="hover:text-pink-500 transition">About</a>
        <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
        <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
      </div>

      <button className="hidden md:block px-5 py-2 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition">
        Hire Me
      </button>

      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#fff1f6] shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <button className="px-5 py-2 bg-pink-500 text-white rounded-full">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}