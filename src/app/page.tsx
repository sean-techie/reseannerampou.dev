import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="min-h-screen bg-[#F8F5F2] flex items-center px-6 md:px-20 pt-20 md:pt-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10 md:gap-16">
          <div className="text-center md:text-left">
            <p className="text-[#C08A5D] text-sm tracking-[0.25em] uppercase"></p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#2C3E50] leading-tight mt-4">
              Reseanne Rampou
            </h1>

            <div className="mt-3 h-6 overflow-hidden relative">
              <div className="animate-slide text-[#6B7280] text-sm sm:text-base">
                Frontend Developer · Data Science
              </div>
              <div className="animate-slide text-[#6B7280] text-sm sm:text-base">
                Data Science Enthusiast
              </div>
              <div className="animate-slide text-[#6B7280] text-sm sm:text-base">
                UI Engineer
              </div>
            </div>

            <p className="mt-5 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Building thoughtful digital experiences through frontend engineering and data-driven problem solving.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#2C3E50] text-white rounded-full hover:opacity-90 transition"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-[#C08A5D] text-[#C08A5D] rounded-full hover:bg-[#C08A5D] hover:text-white transition"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
              <div className="absolute inset-0 bg-[#C08A5D]/10 rounded-full blur-3xl" />

              <Image
                src="/images/reseanne.png"
                alt="Reseanne Rampou"
                width={380}
                height={380}
                priority
                className="relative z-10 rounded-[28px] object-cover shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="px-6 md:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-4xl">
          <p className="text-[#C08A5D] text-sm tracking-[0.25em] uppercase">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E50] mt-4">
            Building clean systems with design and data in mind.
          </h2>

          <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
            I am a Frontend Developer with growing expertise in Data Science, focused on building scalable systems and meaningful digital experiences.
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 md:px-20 py-24 md:py-32 bg-[#F8F5F2]">
        <div className="max-w-4xl">
          <p className="text-[#C08A5D] text-sm tracking-[0.25em] uppercase">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E50] mt-4">
            Selected Work
          </h2>

          <p className="mt-6 text-[#6B7280] text-lg">
            Frontend engineering and data-driven applications.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

          <a
            href="https://role-radar-plum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-xl transition"
          >
            <Image
              src="/projects/roleradar.png"
              alt="RoleRadar"
              width={800}
              height={500}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2C3E50]">
                RoleRadar
              </h3>
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                AI-powered job market analytics platform using NLP to extract in-demand skills and visualize trends.
              </p>
            </div>
          </a>

          <a
            href="https://alx-project-nexus-sigma-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-xl transition"
          >
            <Image
              src="/projects/litelink.png"
              alt="Lite-Link"
              width={800}
              height={500}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Lite-Link
              </h3>
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                Modern URL shortener built with Next.js and TypeScript.
              </p>
            </div>
          </a>

          <a
            href="https://alx-pwa-0x01-4lmq.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-xl transition"
          >
            <Image
              src="/projects/cineseek.png"
              alt="Cineseek Movie App"
              width={1200}
              height={600}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Cineseek Movie App
              </h3>
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                Movie discovery PWA with API integration, search, and responsive UI experience.
              </p>
            </div>
          </a>

          <a
            href="https://data-skill-tracker-wcbdlhb3wy9ac242fchvbi.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-xl transition"
          >
            <Image
              src="/projects/workforce-dashboard.png"
              alt="Workforce Skills Analytics Dashboard"
              width={800}
              height={500}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Workforce Skills Analytics Dashboard
              </h3>
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                Interactive workforce intelligence dashboard that analyzes skill demand across industries using Python, Pandas, Streamlit, and Plotly.
              </p>
            </div>
          </a>

        </div>
      </section>

      <section id="contact" className="px-6 md:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-3xl">
          <p className="text-[#C08A5D] text-sm tracking-[0.25em] uppercase">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E50] mt-4">
            Let's Connect
          </h2>

          <p className="mt-6 text-[#6B7280] text-lg">
            Interested in collaborating or opportunities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:reseanner@gmail.com"
              className="inline-flex px-7 py-3 bg-[#2C3E50] text-white rounded-full hover:opacity-90 transition"
            >
              Send Email
            </a>

            <a
              href="https://github.com/sean-techie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3 border border-[#2C3E50] text-[#2C3E50] rounded-full hover:bg-[#2C3E50] hover:text-white transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}