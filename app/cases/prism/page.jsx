import CaseLayout from "@/components/cases/CaseLayout";
import { getCase } from "@/lib/cases";

const data = getCase("prism");

export const metadata = {
  title: `${data.title} — ${data.subtitle}`,
  description: data.tagline,
};

export default function PrismCase() {
  return <CaseLayout data={data} />;
}
