# About

Documentation site with MkDocs and Jinja2 templates.

## Components

**Custom Header**

- Gradient background
- Navigation
- Theme toggle

**Custom Footer**

- Multi-column layout
- Quick links
- Social icons

**Styled Home**

- Hero section
- Feature cards

## Stack

| Tool                | Purpose   |
| ------------------- | --------- |
| MkDocs              | Generator |
| Material for MkDocs | Theme     |
| Jinja2              | Templates |

## Structure

```
mkdocs-site/
├── docs/
├── custom_theme/
├── mkdocs.yml
└── requirements.txt
```

## Customize

**Colors** - Edit `mkdocs.yml`:

```yaml
theme:
  palette:
    - primary: blue
```

**Templates** - Edit `custom_theme/`:

- `main.html`
- `partials/header.html`
- `partials/footer.html`
- `assets/stylesheets/extra.css`

## Resources

- [MkDocs](https://www.mkdocs.org/)
- [Material](https://squidfunk.github.io/mkdocs-material/)
- [Jinja2](https://jinja.palletsprojects.com/)
