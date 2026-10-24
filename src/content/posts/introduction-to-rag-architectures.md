---
title: "Understanding Retrieval-Augmented Generation (RAG)"
date: 2026-10-24
excerpt: "A beginner-friendly guide to how RAG connects LLMs to external knowledge bases using vector embeddings and similarity search."
tags:
  - "AI Engineering"
  - "RAG"
  - "LLMs"
  - "Vector DB"
toc: true
---

Large Language Models (LLMs) are exceptionally powerful at reasoning, summarizing, and synthesizing language. However, when deployed in production, they suffer from two critical limitations:

1. **Knowledge Cutoffs**: They cannot know events or publications that occurred after their training date.
2. **Hallucinations**: When asked about proprietary company documents or unfamiliar domains, they often generate plausible-sounding falsehoods.

**Retrieval-Augmented Generation (RAG)** solves both problems by dynamically fetching factual, relevant context from an external database and passing it into the model's prompt.

---

## The 3 Core Stages of a RAG Pipeline

A standard RAG pipeline operates in three distinct phases:

### 1. Ingestion & Chunking
Long documents (PDFs, markdown files, Notion pages, databases) cannot be ingested into a prompt in one giant block. Instead:
- Documents are split into smaller logical chunks (typically 200–800 tokens).
- Small overlaps (e.g., 50 tokens) are maintained between chunks to preserve context across boundaries.

### 2. Embedding & Vector Indexing
Each text chunk is converted into high-dimensional numerical coordinates called **vector embeddings** using an embedding model (such as `text-embedding-3-small` or open-source Hugging Face models):
- Chunks with similar semantic meaning are mapped close to one another in vector space.
- These vectors and their raw text metadata are stored in a specialized **vector database** (e.g., Chroma, Pinecone, or pgvector).

### 3. Query Retrieval & Synthesis
When a user asks a question:
1. The user's query is converted into a vector embedding.
2. The vector database performs a **similarity search** (such as cosine similarity) to find the top $K$ most relevant chunks.
3. The retrieved chunks are inserted into the prompt as verified grounding context:

```markdown
System: You are an expert AI assistant. Answer using ONLY the provided context below.

Context:
[Chunk 1: Return policy lasts 30 days from delivery...]
[Chunk 2: Items must be in original condition with tags...]

User Question:
Can I return a sweater 2 weeks after receiving it?
```

The LLM then generates a factual, hallucination-free response grounded strictly in your documentation.

---

## Why RAG Outperforms Simple Fine-Tuning for Knowledge Access

| Dimension | Fine-Tuning | RAG |
| :--- | :--- | :--- |
| **Updating Knowledge** | Expensive re-training required | Real-time database update |
| **Hallucination Rate** | Higher (parametric memory) | Much lower (grounded in context) |
| **Source Attribution** | Cannot cite exact documents | Returns direct citations and URLs |
| **Implementation Cost** | High (GPU hours, dataset prep) | Low (APIs, vector search) |

---

## Summary

RAG has become the bedrock pattern of modern AI engineering. By decoupling **reasoning capabilities** (handled by the LLM) from **knowledge storage** (handled by your vector database), you can build dependable, verifiable AI applications.
