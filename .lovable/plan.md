

## Plan: Enhance Auraa Craft Studio

### Overview
Add 4 features to the existing site while strictly preserving the current warm kraft/brown design system.

---

### 1. Category Filter System
**File: `src/components/sections/SelectedWork.tsx`** (modify)

- Add a row of pill-shaped filter chips above the project grid
- Categories: Etiquettes, Tags Kraft, Fils personnalises, Packaging
- "Etiquettes" expands sub-filters: Etiquettes en Coton, Etiquettes Cartonnees, Etiquettes Imprimees
- Style: `bg-muted text-foreground rounded-full px-4 py-1.5` with hover using `bg-accent/30`
- Add `category` and `subcategory` fields to each project in the data array
- Filter with `useState`, animate with CSS `transition-opacity` for fade effect
- Active chip gets `bg-accent text-accent-foreground`

### 2. Mockup Configurator Section
**File: `src/components/sections/ConfiguratorTeaser.tsx`** (replace/enhance)

- Title: "Preview your logo on your packaging"
- Left side: product image (reuse existing assets or placeholder)
- Right side: upload button + instructions
- HTML5 Canvas overlay on product image for logo placement
- Upload renders logo onto canvas with:
  - `globalCompositeOperation = "multiply"`, opacity 0.9
  - Slight rotation (~2deg) for realism
  - Drag-to-move and resize handles (pure JS, no libraries)
- Matches existing section spacing (`py-24 px-6 max-w-6xl mx-auto`)
- No borders, same warm color palette

### 3. Contact Section Update
**File: `src/pages/Contact.tsx`** (modify content only)

- Update the info cards to show:
  - 📍 Morocco
  - 📞 0693024775
  - ✨ 2000-4000 satisfied customers
  - 🌿 Eco-friendly branding specialty
  - 🎯 E-commerce & small brands
  - Instagram link: www.instagram.com
- Keep existing layout, font sizes, spacing, card structure
- Add inline icons as emoji (already used in current design)

### 4. Logo in Navbar
**File: `src/components/Navbar.tsx`** (modify)

- Add a small logo/brand mark to the left of the nav
- Use text-based logo "AURAA" or an SVG if available in assets
- Keep navbar height unchanged
- Maintain current spacing and alignment

---

### Technical Details
- All changes use existing Tailwind design tokens (`--kraft`, `--accent`, `--muted`, etc.)
- No new dependencies required
- Canvas interactions use vanilla JS event listeners (mousedown/mousemove/mouseup + touch equivalents)
- Filter state managed with React `useState`, no routing changes
- The existing code needs to be brought into the local project first (it's currently placeholder), so I'll recreate each file based on the GitHub source

### Files to Create/Modify
1. `src/index.css` — restore from GitHub (design tokens)
2. `src/App.tsx` — restore routes and components
3. `src/pages/Index.tsx` — restore with all sections
4. `src/components/Navbar.tsx` — restore + add logo
5. `src/components/sections/SelectedWork.tsx` — restore + add category filters
6. `src/components/sections/ConfiguratorTeaser.tsx` — rebuild as mockup configurator
7. `src/pages/Contact.tsx` — restore + update content
8. All other sections/components — restore from GitHub source
9. `src/hooks/useScrollAnimation.ts` — restore from GitHub
10. Asset imports — handle image references

