import type { ReactNode } from "react";
import type { Section, Branding } from "../../types/page-spec";
import { sectionBackgroundStyles } from "../../lib/theme";
import clsx from "clsx";

type Props = {
  section: Section;
  branding?: Branding;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  section,
  branding,
  children,
  className,
}: Props) {
  const styles = sectionBackgroundStyles(section.background);

  return (
    <section
      id={section.id}
      className={clsx(
        "relative overflow-hidden",
        className,
        section.background?.pattern === "grid" && "bg-grid"
      )}
      style={styles}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-24 lg:py-28">
        {children}
      </div>
    </section>
  );
}
