import type { Branding, Section } from "../types/page-spec";
import HeroSection from "./sections/HeroSection";
import TextSection from "./sections/TextSection";
import FeaturesSection from "./sections/FeaturesSection";
import MetricsSection from "./sections/MetricsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TimelineSection from "./sections/TimelineSection";
import FaqSection from "./sections/FaqSection";
import CtaSection from "./sections/CtaSection";
import FooterSection from "./sections/FooterSection";
import GenericSection from "./sections/GenericSection";

type Props = {
  sections: Section[];
  branding?: Branding;
  goal?: string;
};

export default function SectionRenderer({ sections, branding, goal }: Props) {
  return (
    <div className="flex flex-col gap-24 md:gap-28 lg:gap-32">
      {sections.map((section, index) => {
        const safeType = section.type || "generic";
        const key = section.id || `${safeType}-${index}`;
        const type = safeType.toLowerCase();

        switch (type) {
          case "hero":
            return (
              <HeroSection
                key={key}
                section={section}
                branding={branding}
                goal={goal}
              />
            );
          case "problem":
          case "solution":
          case "use-cases":
          case "how-it-works":
          case "benefits":
            return (
              <TextSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "features":
          case "pricing":
            return (
              <FeaturesSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "metrics":
            return (
              <MetricsSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "testimonials":
            return (
              <TestimonialsSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "timeline":
            return (
              <TimelineSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "faq":
            return (
              <FaqSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "cta":
            return (
              <CtaSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          case "footer":
            return (
              <FooterSection
                key={key}
                section={section}
                branding={branding}
              />
            );
          default:
            return (
              <GenericSection
                key={key}
                section={section}
                branding={branding}
              />
            );
        }
      })}
    </div>
  );
}
