"use client";
import { motion } from "framer-motion";

const VARIANTS = {
  primary: "bg-cg-blue text-white hover:bg-cg-blue/85",
  ghost: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  danger: "border border-cg-critical/40 text-cg-critical hover:bg-cg-critical/10",
};

export default function ActionButton({ children, onClick, variant = "ghost", disabled, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-3 rounded-xl text-sm font-medium transition disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
