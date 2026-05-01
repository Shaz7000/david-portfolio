"use client";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { APPLE_EASE, DURATION } from "@/lib/easing";

// Wraps the app with framer-motion's reduced bundle + a default MotionConfig
// so every animation inherits the same easing/duration unless overridden.
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: DURATION.base, ease: APPLE_EASE }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
