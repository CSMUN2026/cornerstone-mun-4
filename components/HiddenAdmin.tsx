"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function HiddenAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Reset clicks after 3 seconds
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setClickCount(0);
    }, 3000);

    // Redirect after 5 clicks
    if (newCount >= 5) {
      setClickCount(0);
      router.push("/admin");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="inline-block cursor-pointer"
      title="Click 5 times for Admin Access"
    >
      {children}
    </div>
  );
}