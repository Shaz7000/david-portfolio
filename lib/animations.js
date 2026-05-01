import { APPLE_EASE, DURATION } from "./easing";

// Legacy variants kept for back-compat with existing `initial="hidden" animate="show"`
// components. New code should prefer lib/motion.js.
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      ease: APPLE_EASE,
    },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
