---
name: build-expert-system
description: Orchestrate the six-stage Expert Intelligence Method after intake. Use for end-to-end planning and staged execution, never to skip an individual skill gate.
---

# Build Expert System

## Load

- `AGENTS.md`
- `EXPERT-INTELLIGENCE-METHOD.md`
- `workflows/README.md`
- `agents/expert-orchestrator.md`

## Rule

Only one stage may be `in progress`. Complete or explicitly halt its artifact before starting the next.

## Sequence

1. **Listen:** run `expert-intake`.
2. **Reclaim:** run `reclaim-knowledge` when sources are scattered or rights are unclear.
3. **Distill:** run `discover-genius`, then `distill-method`.
4. **Encode:** run `build-evidence-map` and prepare human-reviewed expert files.
5. **Activate:** run `create-first-asset`.
6. **Compound:** review the learning ledger and propose source-of-truth updates.

For an Emerging Founder, run `customer-discovery` after intake and before offer design.

## Output

Write `work/decisions/system-build-<YYYYMMDD>.md`:

```markdown
# Expert System Build
| Stage | Artifact | Status | Gate | Human decision |
| --- | --- | --- | --- | --- |
| Listen | | pending | | |
| Reclaim | | pending | | |
| Distill | | pending | | |
| Encode | | pending | | |
| Activate | | pending | | |
| Compound | | pending | | |
```

## Completion definition

The system is not complete because files exist. The first cycle completes when:

- reviewed source-of-truth files exist;
- one real artifact has passed review;
- corrections are captured;
- one next commitment is dated;
- the owner can move the files to another tool.
