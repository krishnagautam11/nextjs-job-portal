"use client";
import { useEffect, useState } from "react";

export default function Counter({ end, label, icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex items-center gap-4 text-white">
      <div className="text-3xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-semibold">
          {end >= 1000 ? count.toLocaleString() : count}
        </h2>
        <p className="text-sm opacity-80">{label}</p>
      </div>
    </div>
  );
}
