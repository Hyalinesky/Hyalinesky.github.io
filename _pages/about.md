---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a second-year Master's student in **Software Engineering** at **Peking University**. Prior to this, I obtained my Bachelor's degree from **Wuhan University**.

My research interests include **Large Language Models (LLMs)** and **Vision-Language Models (VLMs)**. I enjoy identifying issues in models and improving them through post-training, reinforcement learning, and other methods. Recently, I have been focusing on enhancing the reasoning capabilities of LLMs and VLMs while mitigating hallucination.

# 🔥 News
- *2025.5*: &nbsp;🎉🎉 Our paper *"Domain$o1$s: Guiding LLM Reasoning for Explainable Answers in High-Stakes Domains"* was accepted to **ACL 2025 Findings**! 
- *2024.12*: &nbsp;🎉🎉 Our paper *"Adaptive Spatiotemporal Augmentation for Improving Dynamic Graph Learning"* was accepted to **ICASSP 2025**!
- *2024.12*: &nbsp;🎉🎉 Our paper *"Mitigating Hallucinations on Object Attributes using Multiview Images and Negative Instructions"* was accepted to **ICASSP 2025**!

# 📝 Selected Publications 
- [Domain$o1$s: Guiding LLM Reasoning for Explainable Answers in High-Stakes Domains](https://arxiv.org/abs/2501.14431) ![CCF A](https://img.shields.io/badge/CCF-A-red?style=flat-square) ![ACL](https://img.shields.io/badge/ACL-2025-blue?style=flat-square)  

  **Xu Chu**\*, Zhijie Tan\*, Hanlin Xue, Guanyu Wang, Tong Mo, Weiping Li

  *In Proc. of The 63rd Annual Meeting of the Association for Computational Linguistics (ACL).*

- [Adaptive Spatiotemporal Augmentation for Improving Dynamic Graph Learning](https://arxiv.org/abs/2501.10010) ![CCF B](https://img.shields.io/badge/CCF-B-green?style=flat-square) ![ICASSP](https://img.shields.io/badge/ICASSP-2025-blue?style=flat-square)  

  **Xu Chu**\*, Hanlin Xue\*, Bingce Wang, Xiaoyang Liu, Weiping Li, Tong Mo, Tuoyu Feng, Zhijie Tan

  *In Proc. of ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP).*

  

# 📖 Educations
- *2023.09 – Present*: Master's student in Software Engineering under the supervision of Prof. Weiping Li at **Peking University**.
- *2019.09 – 2023.07*: Bachelor of Engineering, School of Electronic Information, **Wuhan University**.

# 💻 Internships
### 💻 Internships  
- *2024.01 – 2024.05*, [NIO Shanghai](https://www.nio.cn/), China.  
  Contributed to the development of the LLM framework **BI Agent**, primarily responsible for intent understanding, task routing, and reasoning using LLMs.  

- *2024.01 – Present*, [Baidu](https://ir.baidu.com/company-overview), China.  
  Participated in pre-training of **search LLM** and post-training with reinforcement learning for **query rewriting LLM**. Primarily focused on *compressing LLM chains of thought* to reduce inference time for query rewriting LLM.
