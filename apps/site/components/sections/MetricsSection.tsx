"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";
import {
  resolvePrimaryColor,
  resolveSecondaryColor,
} from "../../lib/theme";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function MetricsSection({ section, branding }: Props) {
  const metrics = section.stats ?? [];

  if (metrics.length === 0) {
    return (
      <SectionWrapper section={section} branding={branding}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {section.headline && (
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {section.headline}
            </h2>
          )}
          {section.body && (
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              {section.body}
            </p>
          )}
        </motion.div>
      </SectionWrapper>
    );
  }

  const primary = resolvePrimaryColor(branding);
  const secondary = resolveSecondaryColor(branding);

  return (
    <SectionWrapper section={section} branding={branding}>
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              {section.eyebrow}
            </span>
          )}
          {section.headline && (
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {section.headline}
            </h2>
          )}
          {section.subheadline && (
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              {section.subheadline}
            </p>
          )}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-indigo-500/10 backdrop-blur"
            >
              <span
                className="text-4xl font-bold tracking-tight"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${primary}, ${secondary})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {metric.value}
              </span>
              {metric.label && (
                <p className="mt-2 text-sm uppercase tracking-wider text-white/60">
                  {metric.label}
                </p>
              )}
              {metric.helper && (
                <p className="mt-2 text-xs text-white/50">{metric.helper}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
