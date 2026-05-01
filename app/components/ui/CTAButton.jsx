"use client";
import { motion } from "framer-motion";

export default function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-full text-sm font-semibold transition";
  const styles = {
    primary: "bg-white text-black hover:bg-gray-100",
    ghost:
      "border border-white/15 text-white backdrop-blur-md bg-white/5 hover:border-white/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
