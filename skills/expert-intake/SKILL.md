---
name: expert-intake
description: Route an expert or experienced founder into one bounded Expert Intelligence workflow. Use at the beginning or when the intended outcome changes.
---

# Expert Intake

## Load

- `AGENTS.md`
- `START-HERE.md`
- `PRODUCT.md`
- `agents/expert-orchestrator.md`

## Required inputs

- a concrete problem or desired artifact;
- 3–5 representative corpus sources, or an explicit statement that the corpus does not yet exist;
- an intended user;
- a time horizon;
- confirmation of ownership and privacy boundaries.

## Process

1. Restate the desired progress in one sentence.
2. Inventory the named sources without deeply ingesting them.
3. Check ownership, sensitivity, and intended use.
4. Select exactly one route:
   - **Established Expert** when a representative corpus and repeated work exist.
   - **Emerging Founder** when relevant experience exists but the corpus or audience evidence is thin.
5. Select exactly one next skill:
   - Established Expert → usually `discover-genius`.
   - Scattered or rights-unclear corpus → `reclaim-knowledge`.
   - Emerging Founder with thin customer evidence → `customer-discovery`.
6. Name one artifact and completion date.

If required inputs are missing, ask at most three precise questions and stop.

## Output

Write `work/intake/intake-<YYYYMMDD>-<slug>.md`:

```markdown
# Expert Intelligence Intake
- Human owner:
- Intended progress:
- Intended user:
- Route:
- Corpus sources:
- Ownership/sensitivity:
- Time horizon:
- Selected skill:
- First artifact:
- Completion date:
- Human gates:
```

## Quality gate

- The route is based on evidence, not status language.
- No source has been treated as permission to use it.
- The next skill is singular.
- The first artifact is concrete and dated.
