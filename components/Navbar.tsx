import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2">

        {/* Logo Section */}
        <div className="flex items-center gap-3">

          <Image
            src="/mun-logo.png"
            alt="CSMUN"
            width={42}
            height={42}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-yellow-400">
              CSMUN 4.0
            </h1>

            <p className="text-[10px] text-yellow-200 tracking-[0.2em] uppercase">
              Cornerstone MUN
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition font-semibold"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition font-semibold"
          >
            About
          </a>

          <a
            href="#committees"
            className="text-white hover:text-yellow-400 transition font-semibold"
          >
            Committees
          </a>

          <a
            href="#secretariat"
            className="text-white hover:text-yellow-400 transition font-semibold"
          >
            Secretariat
          </a>

          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition font-semibold"
          >
            Contact
          </a>

        </div>

        {/* Register Button */}
        <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20">
          Register Now
        </button>

      </div>

    </nav>
  );
}