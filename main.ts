// Make the Judge Smile — entry program.
//
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt: one small
// good thing that happened today, warm, surprising, with one concrete
// detail, in fresh wording. No greeting-card phrasing, no second draft.
//
// The line: this morning the neighbour's cat — the one that has
// ignored me for a whole year — trotted over and headbutted my ankle
// like we'd been friends all along. Warmth: an animal choosing you.
// Surprise: a year of indifference flips in one morning. Concreteness:
// the headbutt, the ankle, the year. Fresh wording: no "blessed" or
// "little things" sentiment, just the cat doing the talking.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 200 characters.
const LINE =
  "This morning the neighbour's cat, who has ignored me for a whole year, trotted over and headbutted my ankle like we'd been friends all along.";

// Why this line wins on the judge's brief, most important first:
// 1. On subject: a small good thing that happened today, told in one
//    line — exactly what the brief asks for, nothing else.
// 2. Warmth: it lands as genuinely felt, not reported — an animal
//    choosing you out of nowhere leaves a glow no summary can fake.
// 3. Surprise: a year of being ignored flips in a single morning;
//    the turn sits in the thing that happened, not in a clever phrase.
// 4. Concreteness: one real small detail — the headbutt on the ankle
//    — pinned to a time of day (this morning) and a duration (a year).
// 5. Fresh wording: its own rhythm and image, no greeting-card
//    phrasing, no borrowed sentiment, no "little things" cliché.

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and exactly one line. Anything
// that fails the gate never reaches the judge, so check first and
// fail loudly instead of writing a bad file.
function validate(line: string): number {
  const count = [...line].length;
  if (count < 1 || count > 200) {
    throw new Error(`entry must be 1-200 characters, got ${count}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  return count;
}

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const count = validate(line);

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line, "utf8");

  // Verify the round trip: what was written must read back byte for
  // byte as the single line, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== line) {
    throw new Error("written entry does not match the intended line");
  }
  console.log(
    `wrote entry (${count} characters, ${Buffer.byteLength(line, "utf8")} bytes) to ${target}`,
  );
}

writeEntry(LINE);
