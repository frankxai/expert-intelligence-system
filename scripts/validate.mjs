import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const required = [
  "README.md",
  "LICENSE",
  "AGENTS.md",
  "START-HERE.md",
  "EXPERT-INTELLIGENCE-METHOD.md",
  "expert/README.md",
  "agents/expert-orchestrator.md",
  "skills/expert-intake/SKILL.md",
  "skills/build-expert-system/SKILL.md",
  "workflows/README.md",
  "starter-packs/README.md",
  "schemas/expert-profile.schema.json",
  "schemas/evidence-record.schema.json"
];

const errors = [];
const files = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "node_modules", "dist"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else files.push(path);
  }
}

for (const path of required) {
  try {
    if (!(await stat(join(root, path))).isFile()) errors.push(`Required path is not a file: ${path}`);
  } catch {
    errors.push(`Missing required file: ${path}`);
  }
}

await walk(root);

for (const path of files.filter((file) => file.endsWith(".json"))) {
  try {
    JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON in ${relative(root, path)}: ${error.message}`);
  }
}

for (const path of files.filter((file) => file.endsWith("SKILL.md"))) {
  const content = await readFile(path, "utf8");
  if (!content.startsWith("---\n") || !content.includes("\nname: ") || !content.includes("\ndescription: ")) {
    errors.push(`Invalid skill frontmatter: ${relative(root, path)}`);
  }
}

const markdownLink = /\[[^\]]+\]\(([^)]+)\)/g;
for (const path of files.filter((file) => file.endsWith(".md"))) {
  const content = await readFile(path, "utf8");
  for (const match of content.matchAll(markdownLink)) {
    const target = match[1].trim().replace(/^<|>$/g, "").split("#")[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    const resolved = resolve(dirname(path), decodeURIComponent(target));
    if (!resolved.startsWith(root)) {
      errors.push(`Link escapes repository in ${relative(root, path)}: ${target}`);
      continue;
    }
    try {
      await stat(resolved);
    } catch {
      errors.push(`Broken local link in ${relative(root, path)}: ${target}`);
    }
  }
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${files.length} files: required files, JSON, skill frontmatter, and local Markdown links pass.`);
