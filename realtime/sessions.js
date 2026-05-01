// In-memory presence + step state per assist session (server-side only).
const rooms = new Map();

function ensureRoom(sessionId) {
  if (!rooms.has(sessionId)) {
    rooms.set(sessionId, { presence: new Map(), step: 1 });
  }
  return rooms.get(sessionId);
}

export function addPresence(sessionId, socketId, role) {
  const room = ensureRoom(sessionId);
  room.presence.set(socketId, { role, joinedAt: Date.now() });
  return getPresence(sessionId);
}

export function removePresence(sessionId, socketId) {
  const room = rooms.get(sessionId);
  if (!room) return [];
  room.presence.delete(socketId);
  if (room.presence.size === 0) rooms.delete(sessionId);
  return getPresence(sessionId);
}

export function getPresence(sessionId) {
  const room = rooms.get(sessionId);
  if (!room) return [];
  return Array.from(room.presence.entries()).map(([id, v]) => ({ id, ...v }));
}

export function setStep(sessionId, step) {
  const room = ensureRoom(sessionId);
  room.step = step;
  return room.step;
}

export function getStep(sessionId) {
  return rooms.get(sessionId)?.step ?? 1;
}
