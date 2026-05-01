"use client";
import { DemoProvider } from "../features/demo/DemoContext";
import DemoEngine from "../features/demo/DemoEngine";
import { DemoNarration, DemoControls, DemoProgressBar } from "../features/demo/DemoUI";
import { STORY_BEATS } from "../lib/systems";

// Wraps the app with the demo state machine + the floating UI.
// Keeps RootLayout a server component.
export default function DemoShell({ children }) {
  return (
    <DemoProvider totalSteps={STORY_BEATS.length}>
      {children}
      <DemoEngine />
      <DemoProgressBar />
      <DemoNarration />
      <DemoControls />
    </DemoProvider>
  );
}
