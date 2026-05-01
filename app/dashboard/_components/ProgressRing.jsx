"use client";
import { animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Animated SVG ring with count-up + status colour interpolation.
export default function ProgressRing({ value, status = "healthy", size = 220, stroke = 14, label, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const c = animate(count, value, { duration: 1.4, ease: "easeOut" });
      return () => c.stop();
    }
  }, [inView, value, count]);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashTarget = circumference - (value / 100) * circumference;

  const colour =
    status === "healthy" ? "#22C55E" : status === "warning" ? "#F59E0B" : "#EF4444";

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colour}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? dashTarget : circumference}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <Counter value={rounded} suffix={suffix} />
        {label && (
          <p className="absolute bottom-6 left-0 right-0 text-center text-cg-subtle text-[10px] uppercase tracking-[0.3em]">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}

// Tiny inline component to render the animated number
function Counter({ value, suffix }) {
  const ref = useRef(null);
  useEffect(() => {
    const unsub = value.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsub;
  }, [value, suffix]);
  return (
    <span
      ref={ref}
      className="text-5xl font-semibold text-white tabular-nums"
    >
      0{suffix}
    </span>
  );
}
