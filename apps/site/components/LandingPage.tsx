import SectionRenderer from "./SectionRenderer";
import type { PageSpec } from "../types/page-spec";
import {
  resolveBackground,
  resolveTextColor,
} from "../lib/theme";

type LandingPageProps = {
  spec: PageSpec;
};

export default function LandingPage({ spec }: LandingPageProps) {
  const backgroundColor = resolveBackground(spec.branding);
  const textColor = resolveTextColor(spec.branding);

  return (
    <div
      className="min-h-screen w-full bg-slate-950"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative">
        <SectionRenderer
          sections={spec.sections ?? []}
          branding={spec.branding}
          goal={spec.goal}
        />
      </div>
    </div>
  );
}
