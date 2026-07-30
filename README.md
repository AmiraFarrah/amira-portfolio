# Amira Farrah Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Main content

Most portfolio content is stored in:

```text
src/data/siteData.ts
```

Edit this file to update:

- Profile pillars
- Experience
- Projects
- Skills
- Education
- Milestones

## Project links

The project detail pages currently contain placeholder links for:

- Live demo
- GitHub
- Case study PDF

Replace the `href="#"` values inside:

```text
src/pages/ProjectPage.tsx
```

## CV

The downloadable CV is located at:

```text
public/Amira_Farrah_CV.pdf
```

Replace that file whenever you update your CV, while keeping the same name.

## Project images

Placeholder SVG images are located in:

```text
public/projects/
```

You can replace them with screenshots. Keep the same filenames or update the image paths inside `src/data/siteData.ts`.

## Contact details

Email and LinkedIn links appear in:

- `src/pages/HomePage.tsx`
- `src/components/Footer.tsx`

## Design

The main color palette and typography are defined in:

```text
tailwind.config.js
src/index.css
```
