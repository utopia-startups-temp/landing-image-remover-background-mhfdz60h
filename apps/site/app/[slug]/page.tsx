import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { listSpecSlugs, loadPageSpec } from "@/lib/spec-loader";
import type { PageSpec } from "@/types/page-spec";

type Params = {
  slug: string;
};

function resolveMetadata(spec: PageSpec | null) {
  if (!spec) {
    return {
      title: "Landing page not found",
      description: "The requested landing page specification could not be located.",
    };
  }

  const name = spec.branding?.name || spec.sections?.[0]?.headline || "Landing Page";
  const description =
    spec.sections?.find((section) => section.subheadline || section.body)?.subheadline ||
    spec.sections?.find((section) => section.body)?.body ||
    "Generated landing page";

  return {
    title: name,
    description,
  };
}

export async function generateStaticParams() {
  const slugs = await listSpecSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const spec = await loadPageSpec(params.slug);
  const meta = resolveMetadata(spec);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function StartupPage({ params }: { params: Params }) {
  const spec = await loadPageSpec(params.slug);

  if (!spec) {
    notFound();
  }

  return <LandingPage spec={spec} />;
}
