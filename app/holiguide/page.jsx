import Cover from "../components/Cover";
import PainNarrative from "../components/PainNarrative";
import InsightReveal from "../components/InsightReveal";
import ProductOverview from "../components/ProductOverview";
import ScreenShowcase from "../components/ScreenShowcase";
import ScanMock from "../components/mocks/ScanMock";
import ARRecognitionMock from "../components/mocks/ARRecognitionMock";
import GuidanceMock from "../components/mocks/GuidanceMock";
import OrderMock from "../components/mocks/OrderMock";
import Tradeoffs from "../components/Tradeoffs";
import ImpactStats from "../components/ImpactStats";
import ValidateNext from "../components/ValidateNext";
import FutureVision from "../components/FutureVision";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function HoloGuide() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main className="relative">
        {/* 01 Cover */}
        <Cover />

        {/* 02 Problem Narrative */}
        <PainNarrative />

        {/* 03 Insight (turning point) */}
        <InsightReveal />

        {/* 04 Product Overview */}
        <ProductOverview />

        {/* 05 Core Flows + AR Experience + Ordering */}
        <div id="flows">
          <ScreenShowcase
            eyebrow="Home / Scan"
            title="Scanning is the entry point."
            body="A single, unmissable CTA. The engineer points and taps — no menus, no setup, no decisions to make under stress."
            insight="Big CTA, minimal cognitive load, clear hierarchy."
            mock={<ScanMock />}
          />

          <ScreenShowcase
            eyebrow="AR Device Recognition"
            title="Recognise components in real time."
            body="The system identifies the exact unit and surfaces the right context. The bounding box stays anchored — overlays only work if they don't drift."
            insight="AR overlays must remain anchored to objects to be usable in the field."
            mock={<ARRecognitionMock />}
            reverse
          />

          <ScreenShowcase
            eyebrow="Contextual Guidance"
            title="Replace manuals with steps that point."
            body="Progress, instruction, and demonstration in one frame. The engineer sees what to do — and where to do it — without flipping between artefacts."
            insight="Visual + text + progress beats any PDF."
            mock={<GuidanceMock />}
          />

          <ScreenShowcase
            eyebrow="Module Ordering"
            title="The fix shouldn't require a second app."
            body="Detected issue → pre-filled part ID → live availability → one tap to order. Every removed field is a removed source of error."
            insight="Pre-fill everything. Manual entry is where downtime hides."
            mock={<OrderMock />}
            reverse
          />
        </div>

        {/* 07 Tradeoffs */}
        <Tradeoffs />

        {/* 08 Impact */}
        <ImpactStats />

        {/* Validate next */}
        <ValidateNext />

        {/* 09 Future Vision */}
        <FutureVision />

        {/* Exit navigation */}
        <section className="px-6 max-w-3xl mx-auto py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
            Continue exploring
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/cases/hologuide"
              className="px-5 py-2.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm hover:scale-[1.03] transition"
            >
              Read the HoloGuide case study →
            </Link>
            <Link
              href="/cases"
              className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
            >
              All work
            </Link>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
            >
              Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
