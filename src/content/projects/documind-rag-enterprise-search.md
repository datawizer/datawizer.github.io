---
title: "DocuMind: Enterprise RAG Knowledge Search"
date: 2026-10-18
category: "AI Engineering"
excerpt: "High-throughput contextual RAG search engine with hybrid dense-sparse retrieval, reranking, and sub-second answer synthesis over enterprise documents."
github: "https://github.com/datawizer"
demo: ""
---

## Overview

**DocuMind** is a production-grade Retrieval-Augmented Generation (RAG) platform designed to eliminate knowledge silos and hallucinations. It indexes thousands of unstructured enterprise documents (PDFs, Markdown, Notion, and Confluence pages) and empowers teams to perform semantic search with instant, grounded citations.

---

## Architectural Highlights

- **Hybrid Retrieval (Dense + Sparse)**: Combines semantic vector embeddings (ChromaDB / Pinecone) with lexical BM25 search for precise keyword and conceptual matching.
- **Cross-Encoder Reranking**: Re-orders retrieved candidate chunks with a lightweight cross-encoder model to optimize context signal-to-noise ratio before passing to the generator.
- **Grounded Verification**: Implements strict quotation extraction so every assertion links directly to its source document and page number.
- **Streaming Response Generation**: Real-time token streaming using Server-Sent Events (SSE) for low latency.

---

## Tech Stack

- **AI Framework**: LangChain, OpenAI API (`gpt-4o`, `text-embedding-3-small`)
- **Vector Database**: ChromaDB & Pinecone
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Python, FastAPI, Pydantic, Celery, Redis

---

## Key Results

- **94.8% Groundedness Score**: Verified using the Ragas evaluation framework on a curated golden dataset.
- **Sub-800ms Time-to-First-Token**: Optimized through asynchronous parallel vector queries and caching.
- **Zero Hallucination Tolerance**: Strict fallback guardrails when query confidence falls below calibrated cosine thresholds.
