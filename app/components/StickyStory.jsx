"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { SYSTEM_LAYERS, STORY_BEATS } from "../../lib/systems";
import SystemLoop from "./system/SystemLoop";
import { useDemo } from "../../features/demo/DemoContext";

// Sticky scroll story: 4 panels (one per system layer). The center stays
// fixed; only the side text + diagram active state change.
export default function StickyStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const layerIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 3]
  );

  const [scrollActiveId, setScrollActiveId] = useState(SYSTEM_LAYERS[0].id);
  useMotionValueEvent(layerIndex, "change", (v) => {
    const idx = Math.min(SYSTEM_LAYERS.length - 1, Math.max(0, Math.round(v)));
    const id = SYSTEM_LAYERS[idx].id;
    setScrollActiveId((curr) => (curr === id ? curr : id));
  });

  const { playing, step } = useDemo();
  let demoActiveId = null;
  if (playing) {
    const beat = STORY_BEATS[step];
    if (beat && SYSTEM_LAYERS.some((l) => l.id === beat.id)) {
      demoActiveId = beat.id;
    }
  }

  const activeId = demoActiveId || scrollActiveId;

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${SYSTEM_LAYERS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr,1.1fr] gap-10 items-center">
          {/* Left: layer copy that crossfades */}
          <div className="relative min-h-[320px]">
            {SYSTEM_LAYERS.map((layer) => {
              const isActive = layer.id === activeId;
              return (
                <motion.div
                  key={layer.id}
                  id={layer.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <p className={`text-xs uppercase tracking-[0.4em] ${layer.text}`}>
                    {layer.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-xl">
                    {layer.headline}
                  </h2>
                  <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-lg">
                    {layer.body}
                  </p>
                  <div className="mt-8 flex items-center gap-3 flex-wrap">
                    <Link
                      href={layer.href}
                      className={`px-5 py-2.5 rounded-full border ${layer.border} ${layer.bg} ${layer.text} text-sm hover:scale-[1.03] transition`}
                    >
                      Explore {layer.system} →
                    </Link>
                    <span className="text-xs text-gray-500 tabular-nums">
                      {String(SYSTEM_LAYERS.indexOf(layer) + 1).padStart(2, "0")} /{" "}
                      {String(SYSTEM_LAYERS.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: synchronized loop */}
          <div className="flex justify-center">
            <SystemLoop activeId={activeId} size={460} />
          </div>
        </div>
      </div>
    </section>
  );
}
