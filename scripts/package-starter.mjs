import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const target = join(dist, "expert-intelligence-starter");

if (!target.startsWith(`${root}\\`) && !target.startsWith(`${root}/`)) {
  throw new Error("Refusing to package outside the repository.");
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });

const paths = [
  "README.md",
  "LICENSE",
  "AGENTS.md",
  "START-HERE.md",
  "EXPERT-INTELLIGENCE-METHOD.md",
  "ATTRIBUTION.md",
  "expert",
  "agents",
  "skills",
  "workflows",
  "starter-packs",
  "schemas",
  "examples"
];

for (const path of paths) {
  await cp(join(root, path), join(target, path), { recursive: true });
}

const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
await writeFile(
  join(target, "STARTER-MANIFEST.json"),
  `${JSON.stringify(
    {
      name: packageJson.name,
      version: packageJson.version,
      generated_at: new Date().toISOString(),
      source: "https://github.com/frankxai/expert-intelligence-system",
      contents: paths
    },
    null,
    2
  )}\n`
);

console.log(`Starter packaged at ${relative(root, target)}`);
