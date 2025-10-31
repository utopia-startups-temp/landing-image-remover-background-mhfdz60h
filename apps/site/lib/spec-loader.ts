import "server-only";

import { promises as fs } from "fs";
import path from "path";
import type { PageSpec } from "../types/page-spec";

const PAGES_DIR = path.join(process.cwd(), "public", "pages");

export async function listSpecSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(PAGES_DIR, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map((entry) => entry.name.replace(/\.json$/i, ""));
  } catch {
    return [];
  }
}

export async function loadPageSpec(slug: string): Promise<PageSpec | null> {
  if (!slug) {
    return null;
  }

  const filePath = path.join(PAGES_DIR, `${slug}.json`);

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as PageSpec;
  } catch {
    return null;
  }
}
