# G&K Junk Removal Website Concept

An unofficial, non-affiliated website concept created by Veriq for G&K Junk
Removal in the Des Moines, Iowa area.

This demonstration uses confirmed direct-contact details for Gavin. Its
estimate and contact forms are interface previews only: submission is
intercepted in the browser, no information is transmitted or stored, and no
lead-delivery API is included. The site also disables indexing through page
metadata, `robots.txt`, and a global `X-Robots-Tag` response header.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
