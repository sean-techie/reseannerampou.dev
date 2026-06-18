export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 md:px-20 py-6 fixed top-0 left-0 bg-[#fff1f6]/70 backdrop-blur-md z-50">
      
      <div className="text-lg font-semibold text-gray-900">
        Reseanne<span className="text-pink-500">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <a href="#home" className="hover:text-pink-500 transition">
          Home
        </a>
        <a href="#about" className="hover:text-pink-500 transition">
          About
        </a>
        <a href="#projects" className="hover:text-pink-500 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-pink-500 transition">
          Contact
        </a>
      </div>

      <button className="px-5 py-2 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition">
        Hire Me
      </button>

    </nav>
  );
}