import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">

        {/* Logo */}
        <Image
          src="/mun-logo.png"
          alt="CSMUN Logo"
          width={180}
          height={180}
          className="mx-auto drop-shadow-[0_0_30px_rgba(255,215,0,0.35)]"
          priority
        />

        {/* Small Title */}
        <h3 className="mt-4 text-lg md:text-xl font-bold tracking-[0.4em] text-yellow-400 uppercase">
          CSMUN 4.0
        </h3>

        {/* Divider */}
        <div className="w-40 h-[2px] bg-yellow-400 mx-auto my-6" />

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight drop-shadow-lg">
          CSMUN 4.0
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-2xl md:text-4xl text-white leading-relaxed font-light">
          Negotiating Today's Challenges
          <br />
          Designing Tomorrow's Solutions
        </p>

        {/* School Name */}
        <p className="mt-8 text-yellow-400 uppercase tracking-[0.25em] text-sm md:text-lg">
          Cornerstone School Model United Nations
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="#register"
            className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Register Now
          </a>

          <a
            href="#committees"
            className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Explore Committees
          </a>

        </div>

        {/* Scroll Arrow */}
        <div className="mt-16 text-yellow-400 text-4xl animate-bounce">
          ↓
        </div>

      </div>
    </section>
  );
}