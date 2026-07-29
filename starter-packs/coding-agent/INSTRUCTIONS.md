# Coding Agent Setup

Use this path when an agent can read and write local files.

## Start

```text
Read AGENTS.md completely. Run skills/expert-intake/SKILL.md.
The private corpus is at <absolute path>.
Do not commit or copy raw private material.
Show proposed expert/ changes before applying them.
```

## Recommended Git practice

- keep the public starter and private corpus in separate locations;
- create a branch for meaningful source-of-truth changes;
- review diffs before committing;
- never stage broadly when private files may be nearby;
- run `npm run validate` before sharing changes.

## Expected behavior

The agent should:

1. create the named `work/` artifact;
2. cite source paths without copying sensitive content;
3. run the skill gate;
4. request human approval for `expert/` promotion;
5. record corrections under `work/learning/`.

An agent should not install dependencies; the validation scripts use Node's standard library.
