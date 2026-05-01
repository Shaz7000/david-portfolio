"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/monitoring", label: "Live Monitoring" },
  { href: "/dashboard/procedures", label: "Procedure Timeline" },
  { href: "/dashboard/insights", label: "Predictive Insights" },
  { href: "/dashboard/alerts", label: "Alerts" },
  { href: "/dashboard/actions", label: "Actions" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-white/5 bg-cg-surface/40 backdrop-blur-md">
      <div className="px-6 py-6 border-b border-white/5">
        <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Product</p>
        <h1 className="text-xl font-semibold text-white mt-1">CliniGuard</h1>
        <p className="text-cg-subtle text-xs mt-1 leading-snug">
          Clinical system health intelligence.
        </p>
      </div>
      <nav className="px-3 py-4 flex-1 overflow-y-auto">
        {NAV.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-lg text-sm transition ${
                active
                  ? "bg-white/10 text-white"
                  : "text-cg-subtle hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-5 border-t border-white/5 space-y-2">
        <Link href="/cliniguard" className="block text-cg-subtle text-xs hover:text-white transition">
          ← CliniGuard
        </Link>
        <Link href="/" className="block text-cg-subtle text-xs hover:text-white transition">
          Back to portfolio
        </Link>
      </div>
    </aside>
  );
}
