"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function GenericSection({ section, branding }: Props) {
  const items = section.items ?? [];
  const bullets = section.bullets ?? [];

  return (
    <SectionWrapper section={section} branding={branding}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
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
          <p className="text-base text-white/70 sm:text-lg">
            {section.subheadline}
          </p>
        )}
        {section.body && (
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            {section.body}
          </p>
        )}

        {bullets.length > 0 && (
          <ul className="mx-auto max-w-3xl space-y-3 text-left text-sm text-white/70">
            {bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
              >
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-white/40" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-lg shadow-black/10 backdrop-blur"
              >
                {item.title && (
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="mt-2 text-sm text-white/70">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
