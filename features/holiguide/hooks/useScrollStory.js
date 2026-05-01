"use client";
import { useScroll } from "framer-motion";

// Standard "as you scroll past me" progress hook.
// Returns 0 when the section enters bottom of viewport, 1 when it exits the top.
export function useScrollStory(ref) {
  return useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
}
