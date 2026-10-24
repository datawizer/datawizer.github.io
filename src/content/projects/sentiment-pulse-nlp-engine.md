---
title: "SentimentPulse: Transformer-based NLP & Market Intelligence"
date: 2026-07-02
category: "Machine Learning"
excerpt: "Fine-tuned RoBERTa Transformer classification model streaming real-time sentiment classification and thematic clustering over financial news feeds."
github: "https://github.com/datawizer"
demo: ""
---

## Overview

**SentimentPulse** is an end-to-end natural language processing (NLP) and machine learning platform that ingests unstructured financial and tech news feeds to predict sentiment signals, topic categories, and emerging entity trends in real time.

---

## Machine Learning Pipeline

- **Model Architecture**: Pretrained RoBERTa-large fine-tuned with custom classification heads for multi-class sentiment detection (Bullish, Neutral, Bearish).
- **Data Engineering**: Automated ingestion pipeline processing thousands of RSS feeds and earnings call transcripts with automated deduplication and cleaning.
- **Unsupervised Thematic Clustering**: Uses UMAP dimensionality reduction and HDBSCAN clustering over sentence embeddings to group news stories into cohesive topics dynamically.
- **Model Evaluation**: Tracked experiments using MLflow, achieving 94.2% weighted F1-score across out-of-domain evaluation splits.

---

## Tech Stack

- **ML & Data Science**: Python, PyTorch, Hugging Face Transformers, Scikit-Learn, Pandas, NumPy
- **Serving & Pipeline**: FastAPI, Redis Pub/Sub, Docker
- **Dashboard Interface**: Next.js, TypeScript, Tailwind CSS, shadcn/ui
