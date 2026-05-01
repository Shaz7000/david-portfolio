import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemEmerges from "./components/SystemEmerges";
import StickyStory from "./components/StickyStory";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SystemEmerges />
      <StickyStory />
      <ClosingCTA />
    </main>
  );
}
