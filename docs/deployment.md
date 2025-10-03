# Deployment Guide

## Overview

This site uses **GitHub Actions** for automated deployment to **GitHub Pages**.

## Workflow File

Location: `.github/workflows/actions.yml`

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

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Configure Git
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"

      - name: Build and deploy
        run: mkdocs gh-deploy --force --clean --verbose
```

## Build Steps

### 1. Checkout Code

Gets repository files

### 2. Setup Python

Installs Python 3.12

### 3. Install Dependencies

Installs MkDocs and plugins from `requirements.txt`

### 4. Configure Git

Sets up Git for deployment

### 5. Build & Deploy

- Builds site from markdown
- Deploys to `gh-pages` branch
- Site goes live

## How to Deploy

Push to main branch:

```bash
git add .
git commit -m "Update"
git push
```

Deployment happens automatically in 1-2 minutes.

## Site URL

https://mahmodahmad003sy.github.io/mkdocs-site/

## Requirements

```txt
mkdocs>=1.5.0
mkdocs-material>=9.4.0
jinja2>=3.1.0
markdown>=3.4.0
```

## Status

Check deployment: [Actions Tab](https://github.com/mahmodahmad003sy/mkdocs-site/actions)
