/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F17",
        surface: "#111827",
        primary: "#60A5FA",
        accent: "#A78BFA",
        success: "#34D399",
        danger: "#F87171",
        muted: "#9CA3AF",
        // CliniGuard tokens
        cg: {
          bg: "#0B0F17",
          surface: "#111827",
          elevated: "#1F2937",
          text: "#E5E7EB",
          subtle: "#94A3B8",
          blue: "#2563EB",
          healthy: "#22C55E",
          warning: "#F59E0B",
          critical: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "7.5rem", // 120px — Figma section padding
      },
    },
  },
  plugins: [],
};
