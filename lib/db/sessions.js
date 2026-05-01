// In-memory assist sessions (resets on server restart — fine for demo).
export const sessionsDB = new Map();

export function nextSessionId() {
  return `AS-${Date.now().toString(36)}`;
}
