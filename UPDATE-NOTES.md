Premium website update

- All English and Arabic text is upright, using bundled Dubai fonts.
- Four bundled background photographs crossfade every 3 seconds; dots and pause control included.
- Expertise carousel displays 3 cards on desktop, 2 on tablet, and 1 on mobile. Supports swiping, arrows, dots and pause. Auto-advances every 4.5 seconds while visible, and pauses on hover or keyboard focus.
- Individual/business enquiry guide, expandable document checklists, and service-specific consultation links.
- Official Dubai Legal Affairs portal external link. No authentication integration is implied.
- Dark/light theme, transparent logos and 1-second logo glow retained.
- Reduced-motion preferences disable automatic slides and animation.

Reference inspiration: https://premiumservices.ae/services/legal-services/ (service discovery and document preparation). Original structure, wording and styling created for this project. The auth-selector page returned no readable content; only an external official portal link is included.

Photographs: Unsplash image IDs photo-1512453979798-5ea266f8880c, photo-1497366754035-f200968a6e72, photo-1486406146926-c627a92ad1ab, photo-1497366811353-6870744d04b2. These are illustrative stock photographs, not photographs of the firm.

Verification: npm run build passed, including TypeScript checks. Browser visual verification was unavailable.

Run npm install then npm run dev.

Branded loader update: full-screen theme-aware supplied logo, animated gold ring, asset-driven 0–100% counter, progress bar and fade-out. Waits for essential images/logo masks and Dubai fonts, with a bounded wait for failed or slow assets. Reduced-motion and no-JavaScript fallback included. Runs on first page load or refresh; internal navigation does not replay it.

Loader visibility fix: minimum four-second introduction, animated logo reveal and soft glow, paced percentage counter, and a footer Replay logo animation control. Replace the app folder and restart npm run dev to review the new code; use a full browser refresh to replay on initial load.

Minimal loader: only the existing scales/tower symbol (text excluded using SVG viewport), a running gold ring and percentage. All visible captions and the progress bar are removed. Header/footer wordmarks remain unchanged.
