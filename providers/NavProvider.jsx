"use client";
import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";

// Tells the navbar which "mode" it should render:
//   - "case"    : on /cases/* — show ← Back / Next case style
//   - "global"  : everywhere else — Home | Cases | About | Connect
//
// We deliberately do NOT depend on scroll or animation state.
const NavContext = createContext(null);

export default function NavProvider({ children }) {
  const pathname = usePathname() || "/";

  const value = useMemo(() => {
    const inCase =
      pathname.startsWith("/cases/") && pathname !== "/cases";
    return {
      pathname,
      mode: inCase ? "case" : "global",
      isHome: pathname === "/",
    };
  }, [pathname]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used inside <NavProvider>");
  return ctx;
}
