# How to Check Meta Tags

Your site has the following meta tags configured:

## Meta Tags Included

### Basic SEO Meta Tags

```html
<meta
  name="description"
  content="MkDocs practical project with custom Jinja2 templates and modern design"
/>
<meta name="author" content="Mahmod Ahmad" />
```

### Open Graph Tags (Facebook, LinkedIn)

```html
<meta property="og:title" content="MkDocs Practical 2" />
<meta
  property="og:description"
  content="MkDocs practical project with custom Jinja2 templates and modern design"
/>
<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://mahmodahmad003sy.github.io/mkdocs-site/"
/>
```

### Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="MkDocs Practical 2" />
<meta
  name="twitter:description"
  content="MkDocs practical project with custom Jinja2 templates and modern design"
/>
```

## How to Verify Meta Tags

### Method 1: View Page Source (Browser)

1. Run your site:

   ```bash
   mkdocs serve
   ```

2. Open browser: `http://127.0.0.1:8000`

3. Right-click on page → **View Page Source** (or press `Ctrl+U`)

4. Look in the `<head>` section for:
   - `<meta name="description"`
   - `<meta name="author"`
   - `<meta property="og:title"`
   - etc.

### Method 2: Browser Developer Tools

1. Open site in browser

2. Press `F12` or `Ctrl+Shift+I`

3. Go to **Elements** tab (Chrome) or **Inspector** tab (Firefox)

4. Expand `<head>` section

5. Find all `<meta>` tags

### Method 3: Build and Check HTML

1. Build the site:

   ```bash
   mkdocs build
   ```

2. Open `site/index.html` in a text editor

3. Search for `<meta` tags in the `<head>` section

### Method 4: Online Meta Tag Checker

1. Deploy your site to GitHub Pages

2. Visit: https://metatags.io/

3. Enter your URL: `https://mahmodahmad003sy.github.io/mkdocs-site/`

4. See preview of how it appears on social media

## What Each Meta Tag Does

| Meta Tag                    | Purpose                                |
| --------------------------- | -------------------------------------- |
| `name="description"`        | Shows in Google search results         |
| `name="author"`             | Credits the page author                |
| `property="og:title"`       | Title when shared on Facebook/LinkedIn |
| `property="og:description"` | Description on social media            |
| `property="og:url"`         | Canonical URL of the page              |
| `name="twitter:card"`       | How it displays on Twitter             |

## Your Current Configuration

Located in `mkdocs.yml`:

```yaml
site_name: MkDocs Practical 2
site_description: MkDocs practical project with custom Jinja2 templates and modern design
site_author: Mahmod Ahmad
site_url: https://mahmodahmad003sy.github.io/mkdocs-site/
```

These values are automatically used in `custom_theme/main.html` via Jinja2 templates:

```jinja2
<meta name="description" content="{{ config.site_description }}">
<meta name="author" content="{{ config.site_author }}">
<meta property="og:title" content="{{ config.site_name }}">
```

✅ **All meta tags are properly configured!**
