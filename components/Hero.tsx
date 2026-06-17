import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">

        {/* Small Logo */}
        <Image
          src="/mun-logo.png"
          alt="CSMUN"
          width={170}
          height={170}
          className="mx-auto drop-shadow-2xl"
          priority
        />

        {/* Small Text Under Logo */}
        <h3 className="mt-3 text-lg md:text-xl font-bold text-yellow-400 tracking-[0.35em]">
          CSMUN 4.0
        </h3>

        {/* Gold Divider */}
        <div className="w-40 h-[2px] bg-yellow-400 mx-auto my-5" />

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl">
          CSMUN 4.0
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-2xl md:text-4xl text-white leading-relaxed">
          Negotiating Today's Challenges
          <br />
          Designing Tomorrow's Solutions
        </p>

        {/* School Name */}
        <p className="mt-6 text-yellow-400 uppercase tracking-[0.25em] text-sm md:text-lg">
          Cornerstone School Model United Nations
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30">
            Register Now
          </button>

          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Explore Committees
          </button>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-yellow-400 text-4xl animate-bounce">
          ↓
        </div>

      </div>
    </section>
  );
}