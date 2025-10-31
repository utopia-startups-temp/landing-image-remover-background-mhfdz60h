"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import type { Branding, Section } from "../../types/page-spec";
import { resolvePrimaryColor, resolveSecondaryColor } from "../../lib/theme";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function CtaSection({ section, branding }: Props) {
  if (!section.cta && !section.secondaryCta) {
    return null;
  }

  const primary = resolvePrimaryColor(branding);
  const secondary = resolveSecondaryColor(branding);

  return (
    <SectionWrapper section={section} branding={branding}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-lg shadow-indigo-500/20 backdrop-blur"
      >
        {section.eyebrow && (
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: secondary }}
          >
            {section.eyebrow}
          </span>
        )}
        {section.headline && (
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {section.headline}
          </h2>
        )}
        {section.subheadline && (
          <p className="text-base text-white/75 sm:text-lg">
            {section.subheadline}
          </p>
        )}
        {section.supportingCopy && (
          <p className="max-w-2xl text-sm text-white/60">
            {section.supportingCopy}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {section.cta && (
            <CtaButton cta={section.cta} branding={branding} />
          )}
          {section.secondaryCta && (
            <CtaButton cta={section.secondaryCta} branding={branding} />
          )}
        </div>
        <div
          className="h-[2px] w-24 rounded-full opacity-70"
          style={{
            backgroundImage: `linear-gradient(135deg, ${primary}, ${secondary})`,
          }}
        />
      </motion.div>
    </SectionWrapper>
  );
}
