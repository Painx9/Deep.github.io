# 📂 Portfolio & Resume Architecture Guide

This document serves as the central map for updating personal information, adding new projects, styling the web portfolio, and managing ATS-friendly LaTeX resumes.

---

## 🗺️ Directory Tree
```text
/portfolio-root
├── index.html            # Main website structure & UI
├── style.css             # Custom CSS (animations, neon effects, themes)
├── /js
│   ├── script.js         # Core logic (Language toggle, theme engine, GitHub API)
│   ├── data-profile.js   # Profile text, hobbies, and static UI content
│   └── data-projects.js  # Project arrays (LLM, Models, GenAI)
├── /components
│   ├── about.html        # About section
│   ├── contact.html      # Contact section & form
│   ├── education.html    # Academic history section
│   ├── hobbies.html      # Hobbies & gaming section
│   ├── navbar.html       # Navigation bar, language & theme toggles
│   ├── projects.html     # Projects workspace section
│   └── skills.html       # Skills matrix section
├── /assets
│   ├── profile.jpeg      # Profile picture
│   ├── resume_en.pdf     # 1-Page English Resume (ATS Tailored)
│   ├── resume_de.pdf     # 1-Page German Resume (ATS Tailored)
│   └── master_resume.pdf # 2-Page Master Resume (All Projects)
