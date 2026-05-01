import { getSession } from "@/lib/auth";
import { listAssistSessions } from "@/lib/server/session.service";
import { listOrders } from "@/lib/server/order.service";
import { listDevices } from "@/lib/server/device.service";

export default async function AdminPage() {
  const session = await getSession();
  const orgId = session?.user?.orgId;

  const [devices, orders, sessions] = await Promise.all([
    listDevices(orgId),
    listOrders(orgId),
    listAssistSessions(orgId),
  ]);

  return (
    <main className="min-h-screen px-6 md:px-section py-20 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Admin</p>
      <h1 className="text-4xl font-semibold mt-2">Operations overview</h1>
      <p className="text-muted mt-2">
        Signed in as <span className="text-white">{session.user.name}</span> · Org{" "}
        <span className="text-white">{session.user.orgId}</span>
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Stat label="Devices" value={devices.length} />
        <Stat label="Orders" value={orders.length} />
        <Stat label="Active sessions" value={sessions.length} />
      </div>

      <Section title="Devices">
        <Table
          rows={devices}
          cols={[
            ["id", "ID"],
            ["name", "Name"],
            ["status", "Status"],
          ]}
        />
      </Section>

      <Section title="Orders">
        <Table
          rows={orders}
          cols={[
            ["id", "Order"],
            ["moduleId", "Module"],
            ["status", "Status"],
            ["eta", "ETA"],
          ]}
        />
      </Section>

      <Section title="Live Assist Sessions">
        <Table
          rows={sessions}
          cols={[
            ["id", "Session"],
            ["deviceId", "Device"],
            ["fieldEngineerId", "Field"],
            ["expertEngineerId", "Expert"],
            ["status", "Status"],
          ]}
        />
      </Section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]">
      <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Table({ rows, cols }) {
  if (!rows.length) {
    return <p className="text-muted text-sm">— None yet —</p>;
  }
  return (
    <div className="rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-muted text-xs uppercase tracking-widest">
            {cols.map(([k, label]) => (
              <th key={k} className="px-4 py-3">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-white/5">
              {cols.map(([k]) => (
                <td key={k} className="px-4 py-3 text-white">
                  {String(r[k] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
