# Tri-Institute Matrix — Career Pathways for CA · CS · CMA

An independent directory of what India's CA (ICAI), CS (ICSI) and CMA (ICMAI) qualifications open up: foreign memberships with exams waived, global charters, specialist certifications, statutory roles and firm empanelments. Each entry records what is waived, what is left to do, time, cost, and the law or agreement it rests on, with a link to the official portal. Not affiliated with or endorsed by any of the three institutes.

## What's on the page
- **Goal-first entry**: pick a goal (work abroad, CFO track, specialise, statutory roles, grow your practice, teach) or answer three questions in **Find my path**.
- **Pathway directory**: filter by type, destination, time needed and goal, with live counts. Every count on the page is computed from the data files.
- **Detail panel**: one scrollable view per pathway (what's waived, what's left, eligibility, steps, legal basis) with a shareable link (`#/icai/cpa-aus`).
- **Compare** up to three pathways side by side, and **save** a shortlist on your device.
- **Abroad map**: markers sized by how many pathways lead to each region.
- **Firm panels**: empanelments grouped by the categories in the data, with scoring rules, scope and application steps.
- **Search everything** (⌘K) across all three institutes and the firm panels.
- **Suggestions** go through `POST /api/suggest-pathway`, so the recipient email is never exposed to the browser.
- Light and dark themes (follows the device by default), keyboard accessible, works at phone width.

## Data
Content lives in `public/courses-data.js` (CA), `public/icsi-courses-data.js` (CS), `public/icmai-courses-data.js` (CMA) and `public/empanelments-data.js` (firm panels). Add or edit a record there; the page picks it up with no other change.

## Quick Start
```bash
npm install
npm start
```
Server runs on port `3000` (or `PORT` environment variable).

## Offline single file
`icai-career-map-standalone.html` is the whole site in one file. Rebuild it after any change in `public/`:
```bash
npm run build:standalone
```
The suggestion form needs the server, so it only works on the hosted site.

## Deploy to Render
This repository includes a `render.yaml` specification file for zero-configuration 1-click deployment:
1. Log in to [Render.com](https://dashboard.render.com/).
2. Click **New +** → **Web Service** (or **Blueprint**).
3. Connect your GitHub repository `icai-career-map`.
4. Render will automatically detect the settings:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/healthz`
5. Click **Deploy Web Service**.
