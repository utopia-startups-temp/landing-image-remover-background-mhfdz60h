import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        PageSpec not found
      </h1>
      <p className="max-w-xl text-base text-white/70">
        We couldn&apos;t locate the requested landing page spec. Ensure the JSON
        file exists under <code>public/pages/[slug].json</code> and try again.
      </p>
      <Link
        href="/"
        className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
      >
        Back to overview
      </Link>
    </main>
  );
}
