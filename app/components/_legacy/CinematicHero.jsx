"use client";
import { motion } from "framer-motion";

export default function CinematicHero() {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-5xl md:text-7xl text-center font-bold leading-tight max-w-5xl"
      >
        Systems don&rsquo;t fail
        <br />
        in ideal conditions.
      </motion.h1>
    </section>
  );
}
