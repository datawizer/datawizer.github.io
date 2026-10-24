# Datawizer — Personal Website

Personal website for Datawizer, built with [Astro](https://astro.build).

## Stack

- **Framework**: [Astro](https://astro.build) v5
- **Content**: Astro Content Collections (Markdown / MDX)
- **Styling**: Vanilla CSS (custom dark design system — zero third-party themes)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── public/               # Static assets (images, favicon)
│   └── images/
│       ├── posts/
│       └── portfolio/
├── src/
│   ├── components/       # Astro UI components
│   │   ├── Navbar.astro
│   │   ├── AuthorSidebar.astro
│   │   └── Footer.astro
│   ├── content/          # Content collections
│   │   ├── config.ts     # Collection schemas
│   │   ├── posts/        # Blog posts (.md / .mdx)
│   │   └── projects/     # Portfolio projects (.md / .mdx)
│   ├── data/
│   │   └── site.ts       # Site-wide config (author, nav, certs)
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Root HTML + global CSS
│   │   ├── PageLayout.astro   # Page with sidebar
│   │   └── PostLayout.astro   # Blog post layout
│   └── pages/
│       ├── index.astro         # Home / About
│       ├── 404.astro
│       ├── certificates.astro
│       ├── teaching.astro
│       ├── software.astro
│       ├── blog/
│       │   ├── index.astro     # Blog listing
│       │   └── [slug].astro    # Individual posts
│       └── portfolio/
│           ├── index.astro     # Portfolio listing
│           └── [slug].astro    # Individual projects
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview built site
```

## Adding Content

### Blog Post
Create `src/content/posts/my-post.md`:
```yaml
---
title: My Post Title
date: 2025-01-01
tags: [Tag1, Tag2]
---
Post content here...
```

### Portfolio Project
Create `src/content/projects/my-project.md`:
```yaml
---
title: My Project
date: 2025-01-01
category: Machine Learning
excerpt: Short description
image: /images/portfolio/my-project.png
github: https://github.com/...
---
Project content here...
```

### Site Config
Edit `src/data/site.ts` to update author info, navigation, and certificates.
