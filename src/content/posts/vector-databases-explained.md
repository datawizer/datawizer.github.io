---
title: "Vector Databases 101: Storing and Searching Embeddings"
date: 2026-10-15
excerpt: "An intuitive introduction to high-dimensional embeddings, cosine similarity, and why specialized vector databases power modern AI applications."
tags:
  - "AI Engineering"
  - "Vector DB"
  - "Embeddings"
  - "Search"
toc: true
---

Traditional relational databases excel at exact queries like:
```sql
SELECT * FROM products WHERE category = 'shoes' AND price < 100;
```

However, human language and unstructured data rarely fit into strict binary filters. When a user searches for *"comfortable footwear for rainy weather,"* a keyword match might miss waterproof sneakers or leather boots entirely.

This is where **vector embeddings** and **vector databases** become essential.

---

## What is a Vector Embedding?

An embedding model converts a piece of text (or an image) into a dense array of numbers (e.g., 1,536 floating-point values). 

These numbers represent mathematical coordinates in a high-dimensional concept space:
- Words and passages with similar semantic meanings are placed close together.
- Concepts with differing meanings are placed far apart.

```
"King" - "Man" + "Woman" ≈ "Queen"
"Golden Retriever" is mathematically closer to "Labrador" than to "Sports Car"
```

---

## How Vector Search Works: Cosine Similarity

To determine how related two text passages are, vector databases measure the angle between their respective coordinate vectors using **Cosine Similarity**:

$$\text{Cosine Similarity}(\mathbf{A}, \mathbf{B}) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|}$$

- **1.0**: Identical semantic direction
- **0.0**: Orthogonal / unrelated
- **-1.0**: Diametrically opposed

Because comparing a query against millions of vectors sequentially (Brute Force / KNN) would take seconds, vector databases use **Approximate Nearest Neighbor (ANN)** indexing algorithms such as **HNSW (Hierarchical Navigable Small World)** to perform lookups in sub-millisecond speeds.

---

## Popular Vector Databases Compared

| Database | Architecture | Best Used For |
| :--- | :--- | :--- |
| **Pinecone** | Managed Cloud Serverless | Production SaaS requiring zero ops management |
| **Chroma** | Open Source / In-memory & Local | Fast local prototyping, Python scripts, testing |
| **Qdrant** | Rust-based High Performance | Self-hosted deployments with rich payload filtering |
| **pgvector** | PostgreSQL Extension | Adding vector capabilities directly to existing Postgres DBs |

---

## Practical Example: Storing and Querying with Chroma

```python
import chromadb

# 1. Initialize client and collection
client = chromadb.Client()
collection = client.create_collection(name="engineering_docs")

# 2. Add documents (Chroma generates embeddings automatically)
collection.add(
    documents=[
        "Next.js App Router utilizes React Server Components for zero-bundle footprint.",
        "PyTorch offers dynamic computational graphs suitable for research.",
        "Tailwind CSS uses utility-first classes to compose responsive layouts."
    ],
    ids=["doc1", "doc2", "doc3"]
)

# 3. Query semantically
results = collection.query(
    query_texts=["How does Next.js handle server rendering?"],
    n_results=1
)

print(results["documents"][0][0])
# Output: "Next.js App Router utilizes React Server Components for zero-bundle footprint."
```

---

## Summary

Vector databases provide the memory backbone for RAG, recommendation systems, semantic search engines, and autonomous AI agents. Choosing the right tool depends on whether you prefer a managed SaaS solution like Pinecone or native extension tooling like pgvector.
