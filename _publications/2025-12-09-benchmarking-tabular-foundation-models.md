---
title: "Benchmarking Tabular Foundation Models for Agricultural Yield Prediction"
collection: publications
category: conferences
permalink: /publication/2025-12-09-benchmarking-tabular-foundation-models
excerpt: 'We benchmark TabPFNv2 against AutoGluon and PyCaret across three agricultural datasets and show that foundation models excel with missing or limited data, while AutoML dominates large clean datasets.'
date: 2025-12-09
venue: 'AgriAI 2026 Workshop (co-located with AAAI 2026)'
paperurl: 'https://openreview.net/forum?id=f5XUPRARlG'
pdfurl: 'https://openreview.net/pdf?id=f5XUPRARlG'
share: false
---

Accurate crop yield prediction is crucial for global food security and agricultural planning. This study benchmarks modern tabular foundation models and automated machine learning frameworks across three diverse agricultural datasets: (1) soybean yields with 86,101 temporal sequences, (2) global multi-crop data with 28,242 samples across 101 countries, and (3) EU-27 regional crops with 8,656 samples and significant missing data. We evaluate TabPFNv2 (an improved implementation of the TabPFN architecture), AutoGluon, and PyCaret to determine which approach works best under different data conditions. Our results show that model performance is highly context-dependent. AutoGluon performs best on large-scale complete data, PyCaret performs well on diverse multi-crop scenarios, while TabPFNv2 demonstrates distinct advantages on datasets with missing values (about a two percentage point gain in R² on EU-27). These findings show that none of the tested methods are universally superior. Furthermore, foundation models provide robust zero-shot predictions, particularly while handling incomplete data, which is essential for practical agricultural AI deployment.

**Keywords:** Tabular Foundation Models, Agricultural Yield Prediction, TabPFN, Ensemble Methods, Machine Learning
