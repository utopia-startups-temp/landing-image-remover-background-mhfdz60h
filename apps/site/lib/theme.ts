import type { Branding, SectionBackground } from "../types/page-spec";

export function resolvePrimaryColor(branding?: Branding) {
  return branding?.primary || "#6366f1";
}

export function resolveSecondaryColor(branding?: Branding) {
  return branding?.secondary || "#14b8a6";
}

export function resolveBackground(branding?: Branding) {
  return branding?.background || "#050816";
}

export function resolveTextColor(branding?: Branding) {
  return branding?.text || "#f8fafc";
}

export function sectionBackgroundStyles(background?: SectionBackground) {
  if (!background) return {};

  const styles: Record<string, string> = {};
  if (background.color) {
    styles.backgroundColor = background.color;
  }

  if (background.pattern === "gradient") {
    styles.backgroundImage =
      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)";
  } else if (background.pattern === "grid") {
    styles.backgroundImage =
      "linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)";
    styles.backgroundSize = "48px 48px";
  } else if (background.pattern === "noise") {
    styles.backgroundImage =
      "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22a%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23a)%22 opacity=%220.05%22/%3E%3C/svg%3E')";
  }

  return styles;
}
