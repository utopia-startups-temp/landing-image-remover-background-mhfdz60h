"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";
import { resolvePrimaryColor } from "../../lib/theme";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function TimelineSection({ section, branding }: Props) {
  const steps = section.timeline ?? [];

  if (steps.length === 0) {
    return null;
  }

  const accent = resolvePrimaryColor(branding);

  return (
    <SectionWrapper section={section} branding={branding}>
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              {section.eyebrow}
            </span>
          )}
          {section.headline && (
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {section.headline}
            </h2>
          )}
          {section.subheadline && (
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              {section.subheadline}
            </p>
          )}
        </motion.div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative mb-10 last:mb-0"
            >
              <div
                className="absolute -left-[27px] h-3 w-3 rounded-full border-4 border-slate-950"
                style={{ backgroundColor: accent }}
              />
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
                <div className="flex flex-col gap-1 text-sm uppercase tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold text-white">
                    {step.title}
                  </span>
                  {step.duration && (
                    <span className="text-xs text-white/40">
                      {step.duration}
                    </span>
                  )}
                </div>
                {step.description && (
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
