# Marvellous Codeworks Website

This repository contains the official website for **Marvellous Codeworks**, built with [Docusaurus](https://docusaurus.io/).

The site is the public home for the group's open-source projects, documentation, download pages, FAQs, changelogs, and blog updates. It currently includes content for projects such as **The Marvellous Suspender** and **The Great-er Tab Discarder**.

## Stack

- Docusaurus 3
- React 19
- Markdown / MDX documentation

## Requirements

- Node.js `>= 20`
- Yarn

## Install

```bash
yarn
```

## Local Development

```bash
yarn start
```

This starts the local Docusaurus development server with live reload.

## Production Build

```bash
yarn build
```

The static output is generated in the `build/` directory.

## Preview The Production Build

```bash
yarn serve
```

## Deploy

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Using HTTPS:

```bash
GIT_USER=<your-github-username> yarn deploy
```

## Repository Structure

- `docs/`: project documentation pages
- `blog/`: blog posts and tags
- `src/pages/`: custom site pages, including the homepage
- `src/components/`: reusable React and MDX components
- `static/`: static assets such as icons and images

## Notes

- The site branding and content are centered on **Marvellous Codeworks** as the umbrella project.
- Individual products such as TMS and TGD are documented inside the site, but the repository itself represents the broader website rather than a single extension.
