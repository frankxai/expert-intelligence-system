# Claude Project or Cowork Setup

1. Download or clone the repository.
2. For a Project, add `AGENTS.md`, the method, `expert/`, and the selected skill to Project Knowledge.
3. For Cowork, point Claude to the local repository and a separate private corpus folder.
4. Add:

```text
Read AGENTS.md before acting.
Run one named skill at a time and respect its stop conditions.
Keep private corpus outside public repository paths.
Use exact source references for quotations and recurring patterns.
Propose changes to expert/; do not silently overwrite the source of truth.
Ask before external actions or consequential claims.
```

5. Start with:

```text
Read AGENTS.md and run skills/expert-intake/SKILL.md.
My private corpus is at <path or uploaded files>.
Do not copy raw private sources into the repository.
```

If the environment cannot save files, ask for each artifact as Markdown and save it manually.
