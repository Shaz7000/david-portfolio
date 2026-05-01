export default function StatusBadge({ status }) {
  const map = {
    healthy: { label: "Healthy", cls: "border-cg-healthy/40 text-cg-healthy bg-cg-healthy/10" },
    warning: { label: "Warning", cls: "border-cg-warning/40 text-cg-warning bg-cg-warning/10" },
    critical: { label: "Critical", cls: "border-cg-critical/40 text-cg-critical bg-cg-critical/10" },
    ok: { label: "OK", cls: "border-cg-healthy/40 text-cg-healthy bg-cg-healthy/10" },
    elevated: { label: "Elevated", cls: "border-cg-warning/40 text-cg-warning bg-cg-warning/10" },
    high: { label: "High", cls: "border-cg-critical/40 text-cg-critical bg-cg-critical/10" },
    medium: { label: "Medium", cls: "border-cg-warning/40 text-cg-warning bg-cg-warning/10" },
    low: { label: "Low", cls: "border-cg-blue/40 text-cg-blue bg-cg-blue/10" },
  };
  const v = map[status] || { label: status, cls: "border-white/10 text-cg-subtle bg-white/5" };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border tracking-wider uppercase ${v.cls}`}>
      {v.label}
    </span>
  );
}
