"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Events } from "../../../realtime/events";

export function useARSession(sessionId, role) {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [annotations, setAnnotations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(1);
  const [presence, setPresence] = useState([]);

  useEffect(() => {
    if (!sessionId) return;
    const socket = io({ path: "/api/socket" });
    socketRef.current = socket;

    socket.on("connect", () => {
      setConnected(true);
      socket.emit(Events.JoinSession, { sessionId, role });
    });
    socket.on("disconnect", () => setConnected(false));

    socket.on(Events.AnnotationBroadcast, (a) => {
      setAnnotations((prev) => [...prev.slice(-49), a]);
    });
    socket.on(Events.StepUpdate, (s) => setStep(s.step));
    socket.on(Events.SessionStatus, (s) => setStep(s.step));
    socket.on(Events.ExpertMessageBroadcast, (m) => {
      setMessages((prev) => [...prev.slice(-49), m]);
    });
    socket.on(Events.Presence, (p) => setPresence(p));

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [sessionId, role]);

  function sendAnnotation(point) {
    socketRef.current?.emit(Events.Annotation, {
      x: point.x,
      y: point.y,
      label: point.label,
    });
    // Optimistic local echo
    setAnnotations((prev) => [
      ...prev.slice(-49),
      { ...point, role, ts: Date.now(), local: true },
    ]);
  }

  function sendMessage(text) {
    socketRef.current?.emit(Events.ExpertMessage, { text });
  }

  function completeStep() {
    socketRef.current?.emit(Events.StepComplete, { step });
  }

  return {
    connected,
    annotations,
    messages,
    step,
    presence,
    sendAnnotation,
    sendMessage,
    completeStep,
  };
}
