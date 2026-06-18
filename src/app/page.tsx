import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="min-h-screen bg-[#fff1f6] flex items-center px-6 md:px-20 pt-28 fade-in"
      >
        <div className="grid md:grid-cols-2 w-full items-center gap-10 text-center md:text-left">
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase">
              Frontend Developer · Data Science
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mt-3">
              <span className="text-pink-600">Reseanne Rampou</span>
            </h1>

            <div className="mt-2 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-10 h-[1px] bg-pink-300"></span>
              <p className="text-xs text-gray-500 tracking-widest">
                フロントエンド ・ データサイエンス
              </p>
            </div>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I build clean, scalable digital systems that blend frontend engineering with data intelligence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
                View Work
              </button>

              <button className="px-6 py-3 border border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition">
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center relative">
            <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-pink-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </main>

      <section
        id="about"
        className="px-6 md:px-20 py-24 md:py-32 fade-in"
      >
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <p className="text-pink-500 text-sm tracking-widest uppercase">
            About
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-3">
            Building clean systems with design and data in mind.
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            I focus on frontend development and data science, creating structured digital experiences that are functional, scalable, and performance-driven.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 md:px-20 py-24 md:py-32 bg-[#fff1f6] fade-in"
      >
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <p className="text-pink-500 text-sm tracking-widest uppercase">
            Projects
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-3">
            Selected work
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            A collection of projects showcasing frontend engineering and data-driven applications.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://role-radar-plum.vercel.app/"
            target="_blank"
            className="p-6 rounded-2xl bg-white border border-pink-100 hover:shadow-md transition block"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              RoleRadar
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Job market analytics platform using NLP and dashboards.
            </p>
          </a>

          <a
            href="https://alx-project-nexus-sigma-nine.vercel.app/"
            target="_blank"
            className="p-6 rounded-2xl bg-white border border-pink-100 hover:shadow-md transition block"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Lite-Link
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              URL shortener built with Next.js and TypeScript.
            </p>
          </a>

          <div className="p-6 rounded-2xl bg-white border border-pink-100">
            <h3 className="text-lg font-semibold text-gray-900">
              Movie App
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Movie discovery app with API integration and search features.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}