"use client";

import Image from "next/image";
import HiddenAdmin from "./HiddenAdmin";

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
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        
        {/* Hidden Admin Logo */}
        <HiddenAdmin>
          <Image
            src="/mun-logo.png"
            alt="CSMUN Logo"
            width={180}
            height={180}
            className="mx-auto cursor-pointer"
            priority
          />
        </HiddenAdmin>

        {/* Small Title */}
        <h3 className="mt-4 text-lg md:text-xl font-bold tracking-[0.4em] text-yellow-400 uppercase">
          CSMUN 4.0
        </h3>

        {/* Divider */}
        <div className="w-48 h-[2px] bg-yellow-400 mx-auto my-6" />

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold text-white leading-none">
          CSMUN 4.0
        </h1>

        {/* Tagline */}
        <div className="mt-8 space-y-4">
          <p className="text-2xl md:text-4xl text-white">
            Negotiating Today's Challenges
          </p>

          <p className="text-2xl md:text-4xl text-white">
            Designing Tomorrow's Solutions
          </p>
        </div>

        {/* School Name */}
        <p className="mt-8 text-yellow-400 uppercase tracking-[0.3em] text-sm md:text-lg">
          Cornerstone School Model United Nations
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="#register"
            className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Register Now
          </a>

          <a
            href="#committees"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >
            Explore Committees
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-yellow-400 text-4xl animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
}