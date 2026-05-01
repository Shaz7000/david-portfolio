import Sparkline from "./Sparkline";

const colours = {
  blue: "#2563EB",
  warning: "#F59E0B",
  healthy: "#22C55E",
  critical: "#EF4444",
};

export default function MetricTile({ label, value, suffix = "%", note, trend = [], tone = "blue" }) {
  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md">
      <div className="flex justify-between items-start">
        <p className="text-xs uppercase tracking-widest text-cg-subtle">{label}</p>
      </div>
      <p className="mt-2 text-3xl font-semibold text-white tabular-nums">
        {value}
        <span className="text-cg-subtle text-base ml-0.5">{suffix}</span>
      </p>
      {note && <p className="text-cg-subtle text-xs mt-1">{note}</p>}
      <div className="mt-3 -mx-1">
        <Sparkline data={trend} colour={colours[tone] || colours.blue} />
      </div>
    </div>
  );
}
