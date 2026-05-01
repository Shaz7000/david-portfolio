import { redirect } from "next/navigation";

// Spec asks for /hologuide; the cinematic case study lives at /holiguide.
// Keep both URLs valid by redirecting.
export default function HoloGuideAlias() {
  redirect("/holiguide");
}
