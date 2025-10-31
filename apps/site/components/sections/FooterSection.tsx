import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import type { Branding, Section } from "../../types/page-spec";
import { resolveSecondaryColor } from "../../lib/theme";

type Props = {
  section: Section;
  branding?: Branding;
};

export default function FooterSection({ section, branding }: Props) {
  const links = section.items ?? [];
  const accent = resolveSecondaryColor(branding);

  return (
    <SectionWrapper
      section={section}
      branding={branding}
      className="pb-16 pt-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center text-sm text-white/60">
        {section.headline && (
          <h2 className="text-2xl font-semibold text-white">
            {section.headline}
          </h2>
        )}

        {section.supportingCopy && (
          <p className="mx-auto max-w-2xl text-sm text-white/65">
            {section.supportingCopy}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-white/50">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.description || "#"}
                className="transition hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          {section.cta && (
            <CtaButton cta={section.cta} branding={branding} />
          )}
          {section.secondaryCta && (
            <CtaButton cta={section.secondaryCta} branding={branding} />
          )}
        </div>

        {section.body && (
          <p className="mx-auto max-w-2xl text-xs text-white/50">
            {section.body}
          </p>
        )}

        <div
          className="mx-auto h-[1px] w-32 rounded-full opacity-60"
          style={{ backgroundColor: accent }}
        />
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {branding?.name || "Your company"}. All
          rights reserved.
        </p>
      </div>
    </SectionWrapper>
  );
}
