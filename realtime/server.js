// Realtime gateway: bound onto the same HTTP server as Next.js (see ../server.js).
const { Server } = require("socket.io");
const { Events } = require("./events");
const {
  addPresence,
  removePresence,
  setStep,
  getStep,
  getPresence,
} = require("./sessions");

function initRealtimeServer(httpServer) {
  const io = new Server(httpServer, {
    path: "/api/socket",
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    let joinedSession = null;
    let role = null;

    socket.on(Events.JoinSession, ({ sessionId, role: r }) => {
      if (!sessionId) return;
      joinedSession = sessionId;
      role = r || "field_engineer";
      socket.join(sessionId);
      socket.data = { sessionId, role };

      const presence = addPresence(sessionId, socket.id, role);
      io.to(sessionId).emit(Events.Presence, presence);
      io.to(sessionId).emit(Events.SessionStatus, {
        sessionId,
        step: getStep(sessionId),
      });
    });

    socket.on(Events.Annotation, (data) => {
      if (!joinedSession) return;
      socket.to(joinedSession).emit(Events.AnnotationBroadcast, {
        ...data,
        author: socket.id,
        role,
        ts: Date.now(),
      });
    });

    socket.on(Events.ExpertMessage, (data) => {
      if (!joinedSession) return;
      io.to(joinedSession).emit(Events.ExpertMessageBroadcast, {
        text: data.text,
        author: role,
        ts: Date.now(),
      });
    });

    socket.on(Events.StepComplete, (data) => {
      if (!joinedSession) return;
      const next = setStep(joinedSession, (data.step ?? getStep(joinedSession)) + 1);
      io.to(joinedSession).emit(Events.StepUpdate, {
        step: next,
        completedBy: role,
        ts: Date.now(),
      });
    });

    socket.on("disconnect", () => {
      if (!joinedSession) return;
      const presence = removePresence(joinedSession, socket.id);
      io.to(joinedSession).emit(Events.Presence, presence);
    });
  });

  return io;
}

module.exports = { initRealtimeServer };
