"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target;
      const interactive =
        el?.closest?.("a, button, [data-cursor='hover']") != null;
      setHovering(interactive);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      animate={{
        x: pos.x - (hovering ? 24 : 8),
        y: pos.y - (hovering ? 24 : 8),
        scale: hovering ? 3 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.4 }}
      style={{ mixBlendMode: "difference" }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-white"
    />
  );
}
