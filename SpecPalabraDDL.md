
Palabra DDL Language Specification

Author: palabra

License: CC-BY 4.0

1. Introduction

The Palabra DDL Language is a hierarchical, level-based, schema-free data definition language.
It is designed to represent tree-structured data in a compact, human-readable, and machine-parseable format, without relying on whitespace indentation.

Key features:

Schema-free: Users can define any key at any depth.

Hierarchical: Structure is determined by numeric levels.

Flexible: Works for configuration, AI models, taxonomies, or any nested data.

Whitespace-safe: Numeric levels replace indentation, avoiding YAML-like ambiguity.

2. Syntax

Each line represents a node in the hierarchy:

[level:key]value


Where:

Component	Description
level	Numeric depth (integer ≥ 1). Must follow a parent at level N-1.
key	Optional identifier. Can be empty ([1:]Value).
value	Optional string value. Can be empty.
Rules

The root node must start at level 1.

Level N nodes must have a parent node at level N-1.

Keys can be empty or repeated.

Values can be empty.

Lines starting with // are treated as comments (optional).
