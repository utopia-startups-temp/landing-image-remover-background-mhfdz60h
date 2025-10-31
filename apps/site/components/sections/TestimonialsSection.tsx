"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import type { Branding, Section } from "../../types/page-spec";
import { resolvePrimaryColor } from "../../lib/theme";
import clsx from "clsx";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function TestimonialsSection({ section, branding }: Props) {
  const testimonials = section.testimonials ?? [];

  if (testimonials.length === 0) {
    return null;
  }

  const accent = resolvePrimaryColor(branding);

  return (
    <SectionWrapper section={section} branding={branding}>
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
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

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, idx) => {
            const hasAvatar = Boolean(testimonial.avatarUrl);
            return (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur"
              >
                <blockquote className="text-base leading-relaxed text-white/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm text-white/70">
                  <div
                    className={clsx(
                      "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10",
                      hasAvatar ? "" : "text-sm font-semibold text-white/60"
                    )}
                    aria-hidden={!hasAvatar}
                  >
                    {hasAvatar ? (
                      <Image
                        src={testimonial.avatarUrl!}
                        alt={testimonial.name || "Customer"}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      testimonial.name?.charAt(0) || "★"
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-white/50">
                      {[testimonial.title, testimonial.company]
                        .filter(Boolean)
                        .join(" · ")}
                    </div>
                  </div>
                </figcaption>
                <span
                  className="mt-6 h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: accent }}
                />
              </motion.figure>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
