import CaseLayout from "@/components/cases/CaseLayout";
import { getCase } from "@/lib/cases";

const data = getCase("cliniguard");

export const metadata = {
  title: `${data.title} — ${data.subtitle}`,
  description: data.tagline,
};

export default function CliniguardCase() {
  return <CaseLayout data={data} />;
}
