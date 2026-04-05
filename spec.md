# Agro Crops – Farming Techniques Page

## Current State
The app has the following navigation tabs: Home, About, Farm, Shop, Cattle, Equipment, Crop Suggestions, Schemes, Contact. There is no dedicated "Farming Techniques" section as a standalone page.

## Requested Changes (Diff)

### Add
- New page type: `farmingTechniques`
- New nav item: `🌱 Techniques` linking to the page
- `FarmingTechniquesPage.tsx`: Full page showing various farming techniques with detailed info cards, categories, step-by-step guides, and tips
- New translation keys for all text content (en/hi/mr)

### Modify
- `App.tsx`: Add `farmingTechniques` to Page type union, add import and render case
- `Navbar.tsx`: Add nav item for farmingTechniques
- `src/frontend/src/data/translations.ts`: Add translation keys for the new page

### Remove
- Nothing removed

## Implementation Plan
1. Add translation keys for the new page (nav.techniques + page content) in translations.ts
2. Create FarmingTechniquesPage.tsx with: hero section, technique categories filter, detailed technique cards (Organic, Drip Irrigation, Crop Rotation, Intercropping, Mulching, Vermicomposting, Natural Pest Management, Polyhouse/Greenhouse, Zero Budget Natural Farming, Precision Farming), each card with description, steps, benefits, best crops/states
3. Update App.tsx Page type, import, and switch case
4. Update Navbar navItems array to include farmingTechniques
