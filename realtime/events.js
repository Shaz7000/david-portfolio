// Single source of truth for realtime event names — used by both client + server.
export const Events = {
  // Client → Server
  JoinSession: "join-session",
  Annotation: "ar:annotation",
  RequestHelp: "ar:request-help",
  StepComplete: "ar:step-complete",
  ExpertMessage: "ar:expert-message",

  // Server → Client
  AnnotationBroadcast: "ar:annotation",
  StepUpdate: "ar:step-update",
  ExpertMessageBroadcast: "ar:expert-message",
  SessionStatus: "session-status",
  Presence: "presence",
};
