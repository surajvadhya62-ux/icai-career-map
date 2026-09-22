# ICAI Career Advantage Map — Global Qualifications & MRA Directory

An executive-tier web portal for Chartered Accountants (ICAI) exploring international practice rights, mutual recognition agreements (MRAs), examination waivers, and statutory career opportunities worldwide.

## Features
- **101 Verified Qualifications**: Global MRA pathways (ICAEW, CPA Australia, CPA Canada, AICPA, etc.), international finance charters (CFA, FRM, CQF), GRC & forensics (DISA, CISA, FAFD), Indian statutory monopolies (SEBI, Insolvency, Registered Valuation), sovereign panels, and executive MBA tracks.
- **14 CA Firm Statutory Empanelment Panels**: Multipurpose Empanelment Form (MEF Bank Branch Audit), CAG PSU panel, IRDAI insurance panel, SFIO/CBI forensics, ECI political party audits, SEBI stock broker audits, Section 142(2A) Special Audits, Carbon & CBAM verifiers, and QRB/FRRB technical reviewers.
- **Single Unified Page Flow**: Seamless anchor navigation (`#empanelmentSection`) ensuring newly qualified CAs navigate both individual qualifications and firm empanelments without confusing tab toggles.
- **Privacy-Preserving Suggestion System**: Interactive submission form relaying visitor credential suggestions securely through a server-side endpoint (`POST /api/suggest-pathway`) with zero email address exposure to the frontend.
- **Geographically Accurate Interactive World Map**: Built with vector cartography and regional hotspot radar pins.
- **Mobile-First Responsive Layout**: Native bottom sheet drawers, swipeable regional hub carousel, touch-optimized filters, and comparison matrix.
- **Bespoke Themes**: Oxford Executive Obsidian (Dark) & Bespoke Executive Slate (Light).
- **Self-Contained Standalone HTML**: Single-file offline bundle (`icai-career-map-standalone.html`) for instant offline use.

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
