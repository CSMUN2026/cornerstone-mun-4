"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HiddenAdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "CSMUN2026@Admin"
    ) {
      localStorage.setItem("csmun-admin", "true");
      router.push("/admin");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="w-full max-w-md bg-zinc-900 border border-yellow-500/20 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-yellow-400 text-center">
          Admin Login
        </h1>

        <p className="text-gray-400 text-center mt-2">
          CSMUN 4.0 Control Panel
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-8 p-4 rounded-lg bg-black text-white border border-yellow-500/20"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 p-4 rounded-lg bg-black text-white border border-yellow-500/20"
        />

        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-yellow-400 text-black font-bold py-4 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}