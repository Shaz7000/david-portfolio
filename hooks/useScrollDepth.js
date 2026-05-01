"use client";
import { useEffect, useState } from "react";

// Returns scrollY normalized to [0..1] over `max` pixels.
// Used by ambient depth/parallax effects, NOT by routing.
export default function useScrollDepth(max = 800) {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setDepth(Math.min(1, Math.max(0, y / max)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [max]);

  return depth;
}
