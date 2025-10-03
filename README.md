# MkDocs Practical 2

Professional documentation site with **MkDocs**, **Jinja2 templates**, **React integration**, and automated **GitHub Pages** deployment.

## Project Information

- **Site Name**: MkDocs Practical 2
- **Author**: Mahmod Ahmad
- **Repository**: https://github.com/mahmodahmad003sy/mkdocs-site
- **Live Site**: https://mahmodahmad003sy.github.io/mkdocs-site/

## Features

**Custom Theme**

- Custom header with gradient design
- Custom footer with multi-column layout
- Styled home page with hero section

**Meta Tags**

- Complete SEO metadata (title, description, author)
- Open Graph tags for social media
- Twitter Card support

**React Integration**

- Interactive components via CDN
- Counter and Todo List demos

**GitHub Pages**

- Automated deployment workflow
- One-push deployment

## Requirements Met

| Requirement                            | Status | Location                            |
| -------------------------------------- | ------ | ----------------------------------- |
| Custom Header                          |        | `custom_theme/partials/header.html` |
| Custom Footer                          |        | `custom_theme/partials/footer.html` |
| Styled Home Page                       |        | `docs/index.md`                     |
| Meta Tags (title, description, author) |        | `custom_theme/main.html`            |
| GitHub Pages Deployment                |        | `.github/workflows/actions.yml`     |
| Jinja2 Templates                       |        | `custom_theme/`                     |

## Quick Start

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Development Server

```bash
mkdocs serve
```

Visit: `http://127.0.0.1:8000`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

Or push to GitHub - auto deploys via Actions.

## Configuration

Edit `mkdocs.yml`:

```yaml
site_name: MkDocs Practical 2
site_description: MkDocs practical project with custom Jinja2 templates and modern design
site_author: Mahmod Ahmad
site_url: https://mahmodahmad003sy.github.io/mkdocs-site/

theme:
  name: material
  custom_dir: custom_theme
  palette:
    - primary: indigo
```

## Structure

```
mkdocs-site/
├── .github/workflows/
│   └── actions.yml          # GitHub Actions deployment
├── docs/                    # Markdown pages
│   ├── index.md            # Home page
│   ├── getting-started.md
│   ├── features.md
│   ├── react-demo.md
│   └── about.md
├── custom_theme/            # Custom Jinja2 templates
│   ├── main.html           # Meta tags & React CDN
│   ├── partials/
│   │   ├── header.html     # Custom header
│   │   └── footer.html     # Custom footer
│   └── assets/
│       ├── stylesheets/
│       │   └── extra.css   # Custom styles
│       └── javascripts/
│           └── react-components.js  # React components
├── mkdocs.yml              # Configuration
├── requirements.txt        # Python dependencies
└── README.md              # This file
```

## Deployment Report

### Deployment Method

**GitHub Actions** → **GitHub Pages**

### GitHub Actions Workflow

**File**: `.github/workflows/actions.yml`

```yaml
name: Build and Deploy Documentation

on:
  push:
    branches:
      - main
      - master

permissions:
  contents: write

jobs:
  deploy:
    name: Build and Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: "pip"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Configure Git
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"

      - name: Build and deploy to GitHub Pages
        run: mkdocs gh-deploy --force --clean --verbose
```

### Build Steps

1. **Checkout Code** - Gets repository code with full history
2. **Setup Python** - Installs Python 3.12 and caches dependencies
3. **Install Dependencies** - Runs `pip install -r requirements.txt`
4. **Configure Git** - Sets up Git user for deployment
5. **Build & Deploy** - Runs `mkdocs gh-deploy` to build and push to `gh-pages`

### Deployment Workflow

```
Push to main → GitHub Actions → Build Site → Deploy to gh-pages → Live Site
```

### Build Time

Approximately **1-2 minutes** per deployment.

## Meta Tags Configuration

Located in `custom_theme/main.html`:

```html
<!-- Basic SEO -->
<meta name="description" content="{{ config.site_description }}" />
<meta name="author" content="{{ config.site_author }}" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="{{ config.site_name }}" />
<meta property="og:description" content="{{ config.site_description }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ config.site_url }}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ config.site_name }}" />
<meta name="twitter:description" content="{{ config.site_description }}" />
```

## React Integration

React is loaded via CDN in `custom_theme/main.html`:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

### React Components Included

- **Counter Component**: Interactive counter with +/- buttons
- **Todo List Component**: Full todo app

### Using React in Pages

Add to any markdown file:

```markdown
<div id="react-counter-root"></div>
```

See `docs/react-demo.md` for examples.

## Dependencies

**File**: `requirements.txt`

```txt
mkdocs>=1.5.0           # Static site generator
mkdocs-material>=9.4.0  # Material theme
jinja2>=3.1.0          # Template engine
markdown>=3.4.0         # Markdown processor
```

## Deployment Steps Performed

### 1. Repository Setup

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/mahmodahmad003sy/mkdocs-site.git
git push -u origin main
```

### 2. GitHub Pages Configuration

1. Repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**

### 3. Verify Deployment

Check **Actions** tab for green checkmark ✅

## Pages

- **Home** - Hero section with feature cards
- **Getting Started** - Installation and setup
- **Features** - Site features overview
- **React Demo** - Interactive React components
- **About** - Project information

## Resources

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Jinja2](https://jinja.palletsprojects.com/)
- [React](https://react.dev/)

---

**Status**: Successfully Deployed  
**Build with**: MkDocs, Material Theme, Jinja2, and React
