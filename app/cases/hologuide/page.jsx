import CaseLayout from "@/components/cases/CaseLayout";
import { getCase } from "@/lib/cases";

const data = getCase("hologuide");

export const metadata = {
  title: `${data.title} — ${data.subtitle}`,
  description: data.tagline,
};

export default function HologuideCase() {
  return <CaseLayout data={data} />;
}
