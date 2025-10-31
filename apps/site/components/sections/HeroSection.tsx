"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import type { Branding, Section } from "../../types/page-spec";
import {
  resolvePrimaryColor,
  resolveSecondaryColor,
} from "../../lib/theme";

type HeroProps = {
  section: Section;
  branding?: Branding;
  goal?: string;
};

export default function HeroSection({ section, branding, goal }: HeroProps) {
  const primary = resolvePrimaryColor(branding);
  const secondary = resolveSecondaryColor(branding);
  const hasMedia = Boolean(section.media?.url);

  return (
    <SectionWrapper section={section} branding={branding} className="pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {section.eyebrow && (
            <span className="inline-flex max-w-fit items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              {section.eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {section.headline}
          </h1>
          <p className="max-w-2xl text-base text-white/75 sm:text-lg">
            {section.subheadline || section.supportingCopy || goal}
          </p>

          {(section.bullets || []).length > 0 && (
            <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              {section.bullets?.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <span
                    className="mt-1 inline-flex h-2 w-2 flex-none rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${primary}, ${secondary})`,
                    }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {section.cta && (
              <CtaButton
                cta={section.cta}
                branding={branding}
                className="min-w-[160px]"
              />
            )}
            {section.secondaryCta && (
              <CtaButton
                cta={section.secondaryCta}
                branding={branding}
                className="min-w-[160px]"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: hasMedia ? 1 : 0, scale: hasMedia ? 1 : 0.95 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className={clsx(
            "relative hidden h-full min-h-[320px] rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_120px_-20px_rgba(99,102,241,0.3)] lg:block",
            !hasMedia && "bg-gradient-to-br from-white/10 to-white/0"
          )}
        >
          {hasMedia && section.media?.type === "image" && (
            <Image
              src={section.media.url!}
              alt={section.media.alt || section.headline || "Hero media"}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          )}
          {hasMedia && section.media?.type === "video" && (
            <video
              src={section.media.url!}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            />
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
