import Link from "next/link";
import LandingPage from "@/components/LandingPage";
import { listSpecSlugs, loadPageSpec } from "@/lib/spec-loader";

export default async function HomePage() {
  const slugs = await listSpecSlugs();

  if (slugs.length === 1) {
    const spec = await loadPageSpec(slugs[0]);
    if (spec) {
      return <LandingPage spec={spec} />;
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Landing Page Renderer
      </h1>
      <p className="max-w-xl text-base text-white/70 sm:text-lg">
        Provide a PageSpec JSON under <code>public/pages/[slug].json</code> to
        render a startup landing page. Select one of the available specs below
        or visit <code>/your-slug</code> directly.
      </p>
      {slugs.length > 0 ? (
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {slugs.map((slug) => (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:text-white"
              >
                View “{slug}”
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-white/60">
          No specs found. Add a JSON file to <code>public/pages</code> to get
          started.
        </p>
      )}
    </main>
  );
}
