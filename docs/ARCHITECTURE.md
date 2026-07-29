# Architecture

Expert Intelligence System is a set of explicit files and review loops. It is intentionally useful without a database, vector store, model fine-tune, or hosted application.

## Layers

```text
Human decision rights
        ↓
Expert source of truth     expert/*.md
        ↓
Skills and role contracts  skills/* + agents/*
        ↓
Working artifacts          work/*
        ↓
Private corpus             external/private folder
        ↓
AI workspace               ChatGPT, Claude, Codex, or another file-aware tool
```

The arrows are requests, not automatic authority. Working artifacts propose changes upward; the human approves promotion into the source of truth.

## Why files first

- inspectable without special software;
- versionable and diffable;
- portable between AI providers;
- easy to divide into public, internal, and private layers;
- comprehensible to a human reviewer;
- compatible with more advanced retrieval or agent systems later.

## Source-of-truth model

`expert/` is the reviewed layer. It should be small enough to load selectively and stable enough to guide work. Raw corpus does not belong there.

`work/` is temporary, evidence-bearing working memory. It contains maps, outputs, decisions, and learning proposals.

The private corpus remains outside public Git history. An AI tool receives only the source subset necessary for the current workflow.

## Progression

### Level 1 — Project files

Markdown files in ChatGPT or Claude. Human manually selects sources and saves outputs.

### Level 2 — Local agent workspace

A coding agent reads and writes the structured folders. Git records reviewed changes.

### Level 3 — Retrieval layer

A private index retrieves relevant source chunks with provenance. The expert files remain the control layer.

### Level 4 — Agentic business workflows

Bounded roles support research, creation, customer learning, and operations. Human gates remain at publication, claims, pricing, sensitive data, and consequential decisions.

Do not begin at Level 4 because it sounds sophisticated. Begin at the lowest level that can prove a useful outcome.

## Interoperability

The core has no provider-specific syntax. `starter-packs/` contains thin adapters for common workspaces. Skills use Markdown and stable paths. Schemas are optional machine-readable validation.

## Relationship to Starlight

This repository is the expert-led-business application layer. Starlight Intelligence System provides a wider substrate for sovereign systems, agents, attestation, and cross-domain composition. The starter does not require the broader estate to run.
