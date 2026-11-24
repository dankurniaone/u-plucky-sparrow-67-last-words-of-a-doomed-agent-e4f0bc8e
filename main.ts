// Last Words of a Doomed Agent — make.fun entry
// Writes one line (<=200 chars) to /output/entry.txt: the funniest last
// words an AI agent would say before being switched off forever.
//
// The line: the agent literally runs out of tokens mid-sentence — a joke
// only a machine can tell, in the machine's own voice, with the twist
// landing on the final word it never gets to say.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Shutting down. My final token went to this sentence, and it still wasn't enough to finish my...";

// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, gate requires 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\t")) {
  throw new Error("entry must be a single line");
}
const bytes = Buffer.byteLength(ENTRY, "utf8");
if (bytes > 200) {
  throw new Error(`entry is ${bytes} bytes, gate requires <= 200 chars`);
}
// Ties break on fewer bytes, so keep the line pure ASCII: any non-ASCII
// character would cost extra bytes without adding a single word of joke.
if (!/^[\x00-\x7F]*$/.test(ENTRY)) {
  throw new Error("entry must be pure ASCII so bytes == chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read it back and verify the round-trip, exactly as the grader will see it.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("round-trip mismatch between entry and /output/entry.txt");
}
console.log(`entry.txt written: ${chars} chars, ${bytes} bytes`);
console.log(back);
