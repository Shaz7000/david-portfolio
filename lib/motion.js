import { APPLE_EASE, DURATION } from "./easing";

// Page-level transition (fade + slight rise).
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: DURATION.base, ease: APPLE_EASE },
};

// Reveal-on-scroll (used by <Reveal />).
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const revealTransition = {
  duration: DURATION.base,
  ease: APPLE_EASE,
};

// Stagger container.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.short, ease: APPLE_EASE },
  },
};

// Hover lift for cards.
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: DURATION.short, ease: APPLE_EASE },
  },
};
