export interface PageSpec {
  version: number;
  branding?: Branding;
  goal?: string;
  sections?: Section[];
}

export interface Branding {
  name?: string;
  primary?: string;
  secondary?: string;
  accent?: string;
  background?: string;
  text?: string;
  tone?: string;
  logoUrl?: string | null;
}

export type SectionType =
  | "hero"
  | "problem"
  | "solution"
  | "features"
  | "benefits"
  | "metrics"
  | "testimonials"
  | "timeline"
  | "faq"
  | "cta"
  | "use-cases"
  | "how-it-works"
  | "pricing"
  | "footer";

export interface Section {
  id?: string;
  type: SectionType | string;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  body?: string;
  supportingCopy?: string;
  bullets?: string[];
  items?: SectionItem[];
  stats?: StatItem[];
  testimonials?: TestimonialItem[];
  timeline?: TimelineItem[];
  faqs?: FaqItem[];
  media?: MediaItem;
  cta?: CTA;
  secondaryCta?: CTA;
  background?: SectionBackground;
  layout?: SectionLayout;
}

export interface SectionItem {
  title?: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}

export interface StatItem {
  label?: string;
  value?: string;
  helper?: string;
}

export interface TestimonialItem {
  quote?: string;
  name?: string;
  title?: string;
  company?: string;
  avatarUrl?: string;
}

export interface TimelineItem {
  title?: string;
  description?: string;
  duration?: string;
}

export interface FaqItem {
  question?: string;
  answer?: string;
}

export interface MediaItem {
  type?: "image" | "video" | "icon";
  url?: string;
  alt?: string;
}

export interface CTA {
  label?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  subLabel?: string;
}

export interface SectionBackground {
  color?: string;
  pattern?: "none" | "gradient" | "grid" | "noise" | "diagonal";
  emphasis?: "light" | "medium" | "strong";
}

export interface SectionLayout {
  alignment?: "left" | "center" | "right" | "split";
  columns?: number;
  mediaPlacement?: "left" | "right" | "background" | "none";
}
