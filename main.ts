import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "The sun: one star. Shows up uninvited every morning, blinds me before coffee, and sets without asking. Would not recommend.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, review, "utf8");

// Re-read and verify the gate: 1-160 UTF-8 chars, a single line.
const written = readFileSync(outPath, "utf8");
if (written !== review) throw new Error("entry.txt does not match the review");
if (written.length < 1 || written.length > 160) {
  throw new Error(`entry.txt is ${written.length} chars, gate is 1-160`);
}
if (written.includes("\n")) throw new Error("entry.txt must be a single line");
