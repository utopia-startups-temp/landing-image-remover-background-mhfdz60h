"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";
import { useState } from "react";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function FaqSection({ section, branding }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = section.faqs ?? [];

  if (faqs.length === 0) {
    return null;
  }

  return (
    <SectionWrapper section={section} branding={branding}>
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
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

        <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base text-white/80 transition hover:bg-white/5"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && faq.answer && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-6 text-sm leading-relaxed text-white/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
