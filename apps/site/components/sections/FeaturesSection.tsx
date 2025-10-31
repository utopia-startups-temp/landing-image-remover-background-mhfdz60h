"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";
import { resolvePrimaryColor } from "../../lib/theme";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function FeaturesSection({ section, branding }: Props) {
  const features = section.items ?? [];
  const primary = resolvePrimaryColor(branding);

  return (
    <SectionWrapper section={section} branding={branding}>
      <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center">
        {section.headline && (
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {section.headline}
          </motion.h2>
        )}
        {section.subheadline && (
          <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
            {section.subheadline}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/10 backdrop-blur"
            >
              {feature.icon && (
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <span role="img" aria-hidden className="text-lg">
                    {feature.icon}
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-white/65">
                {feature.description}
              </p>
              {feature.highlight && (
                <div
                  className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${primary}, rgba(99,102,241,0.5))`,
                  }}
                >
                  Highlight
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
