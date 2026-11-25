import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast: one line roasting a smart fridge that refuses
// to open after midnight. Deterministic, stdlib only, no network, no input.
const LINE =
  "My fridge locks at midnight like the leftovers took out a restraining order — calm down, you're a box, not a bouncer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
