"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-11-15T09:00:00");
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(daysLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto">
        <div className="glass rounded-3xl p-10 text-center">
          <h2 className="text-yellow-400 text-3xl mb-4">
            Countdown To CSMUN 4.0
          </h2>

          <p className="text-7xl font-bold">{days}</p>

          <p className="text-gray-300 mt-2">
            Days Remaining
          </p>
        </div>
      </div>
    </section>
  );
}