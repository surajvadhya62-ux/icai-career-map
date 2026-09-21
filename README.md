# ICAI Career Advantage Map — Global Qualifications & MRA Directory

An executive-tier web portal for Chartered Accountants (ICAI) exploring international practice rights, mutual recognition agreements (MRAs), examination waivers, and statutory career opportunities worldwide.

## Features
- **70+ Verified Qualifications**: MRA pathways (ICAEW, CPA Australia, CPA Canada, AICPA, etc.), global finance charters (CFA, FRM, CQF), GRC & forensics (DISA, CISA, FAFD), Indian statutory monopolies (SEBI, Insolvency, Valuation), and executive MBA tracks.
- **Geographically Accurate Interactive World Map**: Built with vector cartography and regional hotspot radar pins.
- **Mobile-First Responsive Layout**: Native mobile sheet drawers, swipeable regional hub carousel, touch-optimized filters, and comparison matrix.
- **Bespoke Themes**: Oxford Obsidian (Dark) & Bespoke Slate (Light).
- **Search & Multi-Dimensional Filters**: Live search across 70+ bodies, waiver percentage sorting, and career goal targeting.

## Quick Start
```bash
npm install
npm start
```
Server runs on port `3000` (or `PORT` environment variable).

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
