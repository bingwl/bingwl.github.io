# Bingbing Wang — Personal Academic Homepage

A clean, modern, fully responsive academic personal homepage built with
**Jekyll** and designed to be hosted on **GitHub Pages** (github.io).

> **Author:** Bingbing Wang
> **Affiliation:** School of Computer Science and Artificial Intelligence, Zhengzhou University
> **Email:** wangbingbing@zzu.edu.cn

---

## ✨ Features

- 📱 Responsive layout (mobile / tablet / desktop)
- 🖼️ Hero section with profile photo
- 📚 Structured sections: About, Research, Publications, Patents, Awards, Service
- 🏷️ CCF-A / CCF-B / Q1 Top publication tags
- 📰 News ticker with dates
- 🎓 Sticky navigation with active-section highlight
- 🔍 SEO-ready (jekyll-seo-tag, sitemap, RSS feed)
- ⚡ Zero external theme dependency — works out of the box on GitHub Pages

---

## 🚀 Quick start

### Option 1: Deploy to GitHub Pages (recommended)

1. **Create a new GitHub repository** named `<your-username>.github.io`
   (so the final URL is `https://<your-username>.github.io`).
2. **Push this project** to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: academic homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Wait ~1 minute. GitHub will automatically build and deploy the site using
   the `main` branch. Visit `https://<your-username>.github.io`.

> 💡 If you prefer to host the site under a **project repository** (e.g.
> `https://<your-username>.github.io/research/`), name the repo `research`
> and set `baseurl: "/research"` in `_config.yml`. Then choose
> **Settings → Pages → Source: main / root** in the GitHub repo.

### Option 2: Preview locally

```bash
# 1. Install Ruby (>= 2.7) and Bundler
# 2. Install dependencies
bundle install
# 3. Run a local dev server
bundle exec jekyll serve --livereload
# 4. Open http://127.0.0.1:4000
```

---

## ✏️ Customization

### Personal information
All profile data lives in [index.md](index.md) — edit the hero block (name,
title, affiliation, bio, contact, social links) and the section content
directly in Markdown.

### Site-wide settings
Edit [_config.yml](_config.yml):

| Field         | What to change                                         |
|---------------|--------------------------------------------------------|
| `title`       | Your name                                              |
| `tagline`     | One-line description (shown in header)                 |
| `author`      | Your full name (used in footer)                        |
| `email`       | Your contact email                                     |
| `url`         | Your final deployed URL (e.g. `https://abc.github.io`) |
| `baseurl`     | Leave `""` for a user-site; set to `/<repo>` otherwise |

### Replace the profile photo
Drop your photo into `assets/images/` (e.g. `MyPhoto2.png`) and update the
`<img src="…">` reference in [index.md](index.md).

### Add a CV PDF
1. Place the PDF in `assets/files/BingbingWang-CV.pdf`.
2. The "Download CV" button on the CV page will pick it up automatically.

### Add new publications
Either edit [index.md](index.md) (in the "Selected Publications" section) or
use the dedicated [publications.md](publications.md) page. The CSS classes
`pub-tag`, `pub-tag--a`, `pub-tag--b`, `pub-tag--top` style the venue
badges — see existing entries for examples.

### Custom colors / typography
All design tokens (colors, fonts, radii, shadows) are CSS variables in
[assets/css/main.css](assets/css/main.css) at the top of the file. Change
`--color-primary` etc. to restyle the entire site.

---

## 📁 Project structure

```
.
├── _config.yml              # Jekyll site configuration
├── _includes/
│   ├── head.html            # Custom <head> content (favicon, etc.)
│   ├── header.html          # Top navigation bar
│   └── footer.html          # Footer with copyright
├── _layouts/
│   └── default.html         # Base layout
├── assets/
│   ├── css/
│   │   ├── main.css         # Main stylesheet
│   │   └── academicons.css  # Academic icon font fallback
│   ├── images/
│   │   ├── MyPhoto2.png     # Profile photo
│   │   └── favicon.svg
│   └── js/
│       └── main.js          # Smooth scroll, nav active state
├── index.md                 # Homepage (hero + all sections)
├── cv.md                    # CV page
├── publications.md          # Full publications list
├── 404.html                 # 404 page
├── robots.txt               # SEO crawler config
├── Gemfile                  # Ruby dependencies
├── .gitignore
└── README.md
```

---

## 🔧 Tech stack

- **[Jekyll](https://jekyllrb.com/)** 3.9 — static site generator
- **Plain HTML / CSS / JS** — no framework, no build step for assets
- **[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)**,
  **[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)**,
  **[jekyll-feed](https://github.com/jekyll/jekyll-feed)** — all
  GitHub-Pages-friendly plugins

---

## 📄 License

Content © Bingbing Wang. Code released under the [MIT License](LICENSE) — feel
free to fork this template for your own academic page.

---

*Last updated: 2026-06-10*
