"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function TextSection({ section, branding }: Props) {
  return (
    <SectionWrapper section={section} branding={branding}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col gap-6 text-center"
      >
        {section.eyebrow && (
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">
            {section.eyebrow}
          </span>
        )}
        {section.headline && (
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {section.headline}
          </h2>
        )}
        {section.subheadline && (
          <p className="text-lg text-white/70">{section.subheadline}</p>
        )}
        {section.body && (
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {section.body}
          </p>
        )}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="mx-auto grid max-w-3xl gap-2 text-left text-sm text-white/70 md:grid-cols-2">
            {section.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5/5 p-3"
              >
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-white/40" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
