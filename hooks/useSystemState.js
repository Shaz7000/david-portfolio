// Re-exports the demo state machine under the spec's preferred name.
// The actual implementation lives in features/demo/ so it stays cohesive.
export { useDemo as useSystemState } from "@/features/demo/DemoContext";
