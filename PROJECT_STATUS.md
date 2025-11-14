# FlexiGenAI Release 6 - Scrollytelling Microsite

## Project Location
`/Users/williamfussell/flexigen-release6/`

## Current Status

### Completed Pages:
1. **index.html** - Overview/Homepage with navigation cards
2. **quality.html** - Product Quality (FULLY COMPLETE with all content)
3. **agentic.html** - Agentic AI (FULLY COMPLETE with all content)

### Remaining Pages to Build:
4. **ingestion.html** - Ingestion & Tax Navigator
5. **uiux.html** - UI/UX
6. **admin.html** - Admin
7. **licensing.html** - Licensing

## Content Sources
All demo content is located at:
- `/Users/williamfussell/Downloads/Demos/`
- Files: `Admin Demo.docx`, `Agentic Demo.docx`, `Ingestion demo.docx`, `UI Demo.docx`
- Product Stability: `/Users/williamfussell/Downloads/Prod Stability Demo .docx`

## Design System
- **CSS File**: `styles.css` - Contains all styling, including:
  - Quality section styles (intro-section, objectives-grid, problem-grid, deliverables-grid, impact-grid, next-steps-grid)
  - Agentic section styles (journey-timeline, feature-showcase, blockers-grid, impact-flow, next-steps-flow)
  - Shared components (nav, footer, section headers, etc.)
- **JavaScript**: `script.js` - Parallax effects, scroll animations, navigation

## Key Requirements
1. Each section should fit on one screen/viewport
2. No overlapping sections - use proper spacing (3-3.5rem margins)
3. Keep content condensed but comprehensive
4. Maintain parallax backgrounds (but NOT on content sections)
5. Use different visual layouts for each page to keep them unique

## Next Steps
To continue in a new conversation:
1. Open the project folder: `/Users/williamfussell/flexigen-release6/`
2. Read the content from `/Users/williamfussell/Downloads/Demos/` for the next page
3. Follow the same structure as quality.html or agentic.html
4. Use different visual layouts (grid, timeline, flow, cards) to keep pages unique
5. Ensure all sections fit on one screen with proper spacing

## Page Structure Pattern
Each page should have:
- Navigation (same across all pages)
- Section header with number and title
- Overview/Intro section
- Main content sections (varies by page)
- Business Impact section
- Next Steps section
- Back to Overview link
- Footer

## Styling Notes
- Use `margin-bottom: 3.5rem` and `margin-top: 3.5rem` for sections
- Add `transform: none !important` to prevent parallax overlap
- Use `z-index: 1` on content containers
- Keep fonts compact (0.75rem - 1rem for body text)
- Use grid layouts for efficiency

