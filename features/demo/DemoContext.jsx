"use client";
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

const DemoContext = createContext(null);

export function DemoProvider({ children, totalSteps }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const start = useCallback(() => {
    setStep(0);
    setPlaying(true);
  }, []);
  const pause = useCallback(() => setPlaying(false), []);
  const resume = useCallback(() => setPlaying(true), []);
  const skip = useCallback(
    () => setStep((s) => Math.min(s + 1, totalSteps - 1)),
    [totalSteps]
  );
  const exit = useCallback(() => {
    setPlaying(false);
    setStep(0);
  }, []);

  // Mark <body> so global styles can react (background dim, focus mode).
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("demo-active", playing);
    return () => document.body.classList.remove("demo-active");
  }, [playing]);

  const value = useMemo(
    () => ({ step, setStep, playing, totalSteps, start, pause, resume, skip, exit }),
    [step, playing, totalSteps, start, pause, resume, skip, exit]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used inside <DemoProvider>");
  return ctx;
}
