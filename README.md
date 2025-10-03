# MkDocs Documentation Site

A professional documentation site built with **MkDocs**, featuring custom **Jinja2 templates**, modern design, and complete SEO metadata.

## Features

✨ **Custom Theme**

- Custom header, footer, and styled home page
- Jinja2 templates for flexibility

🎨 **Modern Design**

- Material Design theme
- Dark/Light mode toggle
- Responsive layout

🔍 **SEO Optimized**

- Complete meta tags
- Social media optimization

🚀 **GitHub Pages Ready**

- Automated deployment workflow

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Git

## Quick Start

```bash
# Install
pip install -r requirements.txt

# Run
mkdocs serve
```

Visit `http://127.0.0.1:8000`

## Configuration

Edit `mkdocs.yml`:

```yaml
site_name: mkdox practical 2
site_author: Mahmod ahmad
site_url: https://mahmodahmad003sy.github.io/mkdocs-site/

theme:
  palette:
    - primary: blue
```

## Structure

```
mkdocs-site/
├── docs/              # Pages
├── custom_theme/      # Templates
├── mkdocs.yml        # Config
└── requirements.txt  # Dependencies
```

## Deploy

```bash
mkdocs gh-deploy
```

Or push to GitHub - auto deploys via Actions.

Site: `https://mahmodahmad003sy.github.io/mkdocs-site/`

## Requirements

- Python 3.8+
- Modern browser

## Requirements Met

✅ Custom Header  
✅ Custom Footer  
✅ Styled Home Page  
✅ Site Metadata  
✅ GitHub Pages

## Resources

- [MkDocs](https://www.mkdocs.org/)
- [Material](https://squidfunk.github.io/mkdocs-material/)
