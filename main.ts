import * as fs from "node:fs";
import * as path from "node:path";

const haiku = [
  "the log says nothing",
  "the stack trace ends in silence",
  "i wrote it myself",
].join("\n");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), haiku);

// The entry is a 5-7-5 haiku: line one counts five syllables,
// line two seven, line three five — seventeen in total, no filler.
