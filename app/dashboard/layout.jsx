import "../globals.css";
import Link from "next/link";
import SidebarNav from "./_components/SidebarNav";

export const metadata = {
  title: "CliniGuard — System Health Dashboard",
  description: "Proactive system intelligence for clinical reliability.",
};

// Override the cinematic gradient body — CliniGuard uses calm clinical dark.
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-cg-bg text-cg-text">
      {/* Mobile header — visible only when sidebar is hidden */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-cg-surface/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/cliniguard"
            className="text-cg-subtle text-xs hover:text-white transition"
          >
            ← CliniGuard
          </Link>
          <span className="text-white/10">|</span>
          <p className="text-sm font-semibold text-white">Dashboard</p>
        </div>
        <Link
          href="/"
          className="text-cg-subtle text-xs hover:text-white transition"
        >
          Home
        </Link>
      </header>
      <SidebarNav />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
