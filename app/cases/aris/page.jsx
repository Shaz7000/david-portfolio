import CaseLayout from "@/components/cases/CaseLayout";
import { getCase } from "@/lib/cases";

const data = getCase("aris");

export const metadata = {
  title: `${data.title} — ${data.subtitle}`,
  description: data.tagline,
};

export default function ArisCase() {
  return <CaseLayout data={data} />;
}
