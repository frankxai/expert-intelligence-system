---
name: build-evidence-map
description: Classify important expert claims, connect them to sources or cases, and make scope, uncertainty, and counter-evidence visible.
---

# Build Evidence Map

## Load

- `AGENTS.md`
- `expert/EVIDENCE.md`
- `schemas/evidence-record.schema.json`
- `agents/research-librarian.md`
- `agents/evidence-guardian.md`

## Process

1. Extract the important claims from the selected method, offer, course, chapter, or artifact.
2. Assign a stable claim ID.
3. Classify each as `supported`, `contested`, `practitioner-derived`, `anecdotal`, `hypothesis`, or `metaphor`.
4. Record source, date, scope, rights, and retrieval status.
5. Find credible counter-evidence or state that it has not yet been searched.
6. Rewrite over-scoped claims.
7. Mark claims that require qualified or current-domain review.

## Output

- `work/maps/evidence-map-<slug>-<YYYYMMDD>.md`
- optional JSON records under `work/maps/evidence-records/`

## Quality gate

- Every public-facing factual claim has a status.
- A source snippet is not represented as a reviewed source.
- Practitioner experience is not described as general scientific proof.
- Counter-evidence is visible.
- Time-sensitive claims have a review date.
- High-stakes claims have a named accountable reviewer.
