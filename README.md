# 📂 Portfolio & Resume Architecture Guide

This document serves as the central map for updating personal information, adding new projects, styling the web portfolio, and managing ATS-friendly LaTeX resumes.

---

## 🗺️ Directory Tree
```text
/portfolio-root
│
├── index.html                 # Main website structure & UI
├── style.css                  # Custom CSS (animations, neon effects)
├── script.js                  # Core logic (Language toggle, GitHub API handshake)
├── data-profile.js            # Profile text, hobbies, and static UI content
├── data-projects.js           # Project arrays (LLM, Models, GenAI)
│
├── /assets
│   ├── profile.jpeg           # Profile picture
│   ├── resume_en.pdf          # 1-Page English Resume (ATS Tailored)
│   ├── resume_de.pdf          # 1-Page German Resume (ATS Tailored)
│   └── master_resume.pdf      # 2-Page Master Resume (All Projects)
│
└── /latex_source
    ├── resume_en.tex          # Source code for English Resume
    ├── resume_de.tex          # Source code for German Resume
    └── master_resume.tex      # Source code for Master Resume
