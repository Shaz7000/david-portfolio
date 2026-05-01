"use client";
import { useCallback, useEffect, useState } from "react";

export function useSystemHealth({ pollMs = 0 } = {}) {
  const [health, setHealth] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      const [h, a] = await Promise.all([
        fetch("/api/cliniguard/health").then((r) => r.json()),
        fetch("/api/cliniguard/alerts").then((r) => r.json()),
      ]);
      setHealth(h.health);
      setAlerts(a.alerts || []);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    if (pollMs > 0) {
      const id = setInterval(refresh, pollMs);
      return () => clearInterval(id);
    }
  }, [refresh, pollMs]);

  const runAction = useCallback(
    async (actionId) => {
      const res = await fetch("/api/cliniguard/actions/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actionId }),
      });
      const data = await res.json();
      await refresh();
      return data.result;
    },
    [refresh]
  );

  return { health, alerts, loading, error, refresh, runAction };
}
