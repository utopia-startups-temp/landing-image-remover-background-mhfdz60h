import type { CTA, Branding } from "../../types/page-spec";
import { resolvePrimaryColor, resolveSecondaryColor } from "../../lib/theme";
import clsx from "clsx";

type Props = {
  cta: CTA;
  branding?: Branding;
  className?: string;
};

export default function CtaButton({ cta, branding, className }: Props) {
  if (!cta?.label || !cta.href) {
    return null;
  }

  const primary = resolvePrimaryColor(branding);
  const secondary = resolveSecondaryColor(branding);

  const isSecondary = cta.variant === "secondary";
  const isGhost = cta.variant === "ghost";

  return (
    <a
      href={cta.href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
        isGhost &&
          "border border-white/30 bg-white/5 text-white hover:bg-white/10",
        isSecondary &&
          "bg-white text-slate-950 hover:bg-white/90 shadow-lg shadow-white/10",
        !isSecondary &&
          !isGhost && [
            "text-slate-950 shadow-lg shadow-indigo-500/30 hover:scale-[1.02]",
            "bg-gradient-to-r",
          ],
        className
      )}
      style={
        !isSecondary && !isGhost
          ? {
              backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${secondary} 70%)`,
            }
          : undefined
      }
      target={cta.href.startsWith("http") ? "_blank" : undefined}
      rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
    >
      {cta.label}
    </a>
  );
}
