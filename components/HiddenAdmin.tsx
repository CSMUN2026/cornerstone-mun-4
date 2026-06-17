"use client";

import { useState } from "react";
import Image from "next/image";

export default function HiddenAdmin() {
  const [clicks, setClicks] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogoClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 5) {
      setShowLogin(true);
      setClicks(0);
    }
  };

  const login = () => {
    if (
      username === "admin" &&
      password === "CSMUN4@2026"
    ) {
      window.location.href = "/admin";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {/* Hidden Admin Trigger */}
      <button
        onClick={handleLogoClick}
        className="cursor-pointer"
      >
        <Image
          src="/mun-logo.png"
          alt="CSMUN Logo"
          width={65}
          height={65}
          priority
        />
      </button>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">

          <div className="bg-[#0A0A0A] border border-yellow-500/30 rounded-3xl p-8 w-[420px] shadow-2xl">

            <h2 className="text-3xl text-yellow-400 font-bold text-center mb-6">
              CSMUN Admin Login
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-black border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded-xl bg-black border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <button
              onClick={login}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:scale-105 transition"
            >
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full mt-3 border border-yellow-500 text-yellow-400 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              Cancel
            </button>

          </div>

        </div>
      )}
    </>
  );
}