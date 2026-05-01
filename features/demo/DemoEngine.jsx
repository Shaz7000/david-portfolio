"use client";
import { useEffect } from "react";
import { useDemo } from "./DemoContext";
import { STORY_BEATS } from "../../lib/systems";

function smoothScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}

// Watches demo state, drives both scroll position and step advancement.
export default function DemoEngine() {
  const { step, setStep, playing, totalSteps } = useDemo();

  useEffect(() => {
    if (!playing) return;
    if (step >= totalSteps) return;
    const beat = STORY_BEATS[step];
    if (beat?.id) smoothScrollToId(beat.id);
    const id = setTimeout(() => {
      if (step >= totalSteps - 1) {
        // End of demo — pause naturally.
        setStep(totalSteps - 1);
      } else {
        setStep(step + 1);
      }
    }, beat?.duration ?? 3000);
    return () => clearTimeout(id);
  }, [step, playing, totalSteps, setStep]);

  return null;
}
