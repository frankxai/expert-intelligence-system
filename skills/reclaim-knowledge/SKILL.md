---
name: reclaim-knowledge
description: Map scattered knowledge into functional domains with ownership, sensitivity, freshness, and source-to-domain traceability.
---

# Reclaim Knowledge

## Load

- `AGENTS.md`
- `agents/deep-listener.md`
- `agents/research-librarian.md`
- `expert/BOUNDARIES.md`

## Process

1. Inventory every named source.
2. Record owner, permission, sensitivity, format, date range, and rough volume.
3. Group material by the function it serves, not the application, employer, client, or file type it came from.
4. Classify each meaningful item:
   - current;
   - outdated but adaptable;
   - obsolete;
   - rights unclear;
   - confidential/do not ingest.
5. Propose a domain-first folder tree with an `_inbox`.
6. Map each source to a new domain or an explicit quarantine.
7. Flag former-employer, client, licensed, and personal material.

## Output

Write `work/maps/reclamation-map-<slug>-<YYYYMMDD>.md` containing:

- source inventory;
- functional domains;
- folder tree;
- source-to-domain table;
- freshness and rights audit;
- safe migration sequence.

## Quality gate

- Every named source appears in the inventory.
- Rights-unclear material is not ingested.
- The structure is domain-first.
- Sensitive material has an explicit location and access rule.
- The map can be followed without a terminal.

## Human gate

The human approves the map before any bulk move, upload, deletion, or ingestion.
