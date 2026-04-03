# Agro Crops – Add More Information

## Current State
All 10 pages are implemented with basic content. The app has:
- Home: hero, why organic (4 cards), crop of season (3), scheme highlights (3), future farming (3)
- About: stats (4), mission/vision, techniques (6), team (4), future scope (3)
- Farm: 35+ crops with category filter, expandable cards, growing calendar
- Shop: 60+ products in 3 tabs with images, add to cart, wishlist
- Cattle: 15+ animals with search/filter, breed/feed/health/benefits
- Equipment: 23+ tools with search/filter, specs, YouTube links
- Crop Suggestions: 25+ states dropdown with seasonal crop recommendations
- Government Schemes: 10+ schemes with description, benefits, eligibility, apply links
- Contact: form, FAQ (4), office hours, contact info
- Footer: logo, links, contact info

## Requested Changes (Diff)

### Add
- Home: Seasonal farming tips section (4 cards with tips for each season), weather impact info block, success story section with 3 farmer testimonials with names/locations/quotes
- About: Certifications/awards section (4 items), detailed company history timeline (5 milestones), expanded mission/vision with sub-points, more organic techniques (up to 9)
- Farm: Pest management section per crop, soil health tips section (6 cards), irrigation methods section (4 methods with details), detailed growing tips inline in cards
- Shop: Product description tooltip/expanded view, nutritional info for vegetables, germination rate for seeds, NPK ratio for fertilizers — shown as extra badge on each card
- Cattle: Vaccination schedule section, disease prevention tips section (5 diseases), feeding chart section with daily requirements, profitability estimation section
- Equipment: Maintenance tips per tool, cost estimation section, comparison table for similar equipment, seasonal usage recommendation badges
- Crop Suggestions: Soil type info per crop recommendation, water requirement badges, best sowing time indicators, intercrop suggestions
- Schemes: Application step-by-step guide per scheme, required documents list, deadline info, helpline numbers
- Contact: Google Maps embed placeholder, business hours more detailed, WhatsApp link, social media links

### Modify
- All pages: Ensure more descriptive text and richer card content
- Data files (crops, cattle, equipment, schemes, cropSuggestions): Add more detailed fields: descriptions, tips, nutritional/economic values

### Remove
- Nothing to remove

## Implementation Plan
1. Enrich data files: crops.ts (add pestControl, soilTips, irrigationMethod, growingTips fields), cattle.ts (add vaccination, diseases, feedingChart, profitability), equipment.ts (add maintenanceTips, costEstimate, seasonalUse), schemes.ts (add steps, documents, deadline, helpline), cropSuggestions.ts (add soilType, waterReq, sowingTime, intercrop)
2. Enrich HomePage: add testimonials section, seasonal tips section
3. Enrich AboutPage: add timeline section, certifications section, expand techniques list
4. Enrich FarmPage: add soil health section, irrigation methods section
5. Enrich ShopPage: add extra badges (nutritional/germination/NPK info) on product cards
6. Enrich CattlePage: add vaccination schedule, disease prevention, feeding chart sections
7. Enrich EquipmentPage: add maintenance tips, cost estimate, seasonal usage badges
8. Enrich CropSuggestionsPage: add soil type, water req, sowing time, intercrop badges
9. Enrich SchemesPage: add step-by-step guide, documents, deadline, helpline per scheme
10. Enrich ContactPage: add WhatsApp link, social media links, more detailed hours
