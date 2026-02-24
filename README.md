# 0xResearcher — Dark Mode Cybersecurity Blog

Jekyll blog using [ankitsultana/researcher](https://github.com/ankitsultana/researcher) with full dark mode, sidebar navigation, and a posts-first homepage.

**Live:** `https://YOUR-USERNAME.github.io/YOUR-REPO`

---

## Deploy to GitHub Pages

```bash
# Option A — via git
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
# Then: Settings → Pages → Source: main / root → Save
```

Option B — upload files directly in the GitHub web UI, then enable Pages in Settings.

> **Subfolder URL?** Uncomment `baseurl: "/your-repo-name"` in `_config.yml`

---

## File Structure

```
/
├── _config.yml              ← Site title, nav, theme
├── _layouts/
│   ├── default.html         ← Sidebar + dark layout override
│   └── post.html            ← Individual post layout
├── _posts/
│   └── YYYY-MM-DD-title.md  ← Your blog posts
├── assets/
│   └── main.scss            ← Full dark mode CSS
├── index.html               ← Homepage (posts list)
├── about.md
├── cves.md
├── tools.md
├── contact.md
└── Gemfile                  ← Local dev only
```

---

## Writing Posts

Create `_posts/YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-03-01
tags: [CVE, Research, CTF]   ← controls tag color
cvss: "9.8 CRITICAL"         ← optional, shows red badge
excerpt: "One line summary shown on homepage."
---

Your content here...
```

**Tag colors:** `CVE` / `Critical` / `RCE` → red · `Research` / `Writeup` → green · `Tool` → blue · `CTF` → yellow

---

## Customization

| What | Where |
|------|-------|
| Site name & tagline | `_config.yml` → `title`, `tagline` |
| Nav links | `_config.yml` → `nav:` |
| Accent color | `assets/main.scss` → `--accent` |
| Social links | `_config.yml` → `github_username`, `twitter_username` |
| Add a page | Create `pagename.md` with `layout: default`, wrap content in `<div class="page-body">` |

---

## Local Development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```
