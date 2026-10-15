# Dr. Ibrahim Al Mulla — Legal Services Website Concept

Bespoke bilingual Next.js frontend demo. The supplied logos were cropped from the client's uploaded screenshot; replace with original high-resolution transparent artwork if available.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Included
- Responsive English / Arabic RTL homepage
- Practice areas and consultation request flow
- Demonstration client portal and admin dashboard
- Logo assets at public/logo-en.png and public/logo-ar.png
- Original vector architectural placeholder artwork

## Important
This is a frontend prototype only. Form entries remain in the browser and are not sent or stored. No availability is checked, no appointment is booked, and no payment is processed. Client and admin screens contain fictional data and have no authentication. Do not deploy as a live legal intake or client portal without secure backend, privacy controls, authorization, conflict screening, payment integration, firm-approved content, and legal review.

## Suggested backend
FastAPI + PostgreSQL, encrypted storage, role-based permissions, calendar synchronization, atomic slot holds, conflict-review queue, payment webhook verification, and audit trails.

## Dubai Font and logos
Dubai Regular, Medium, Bold and Light are bundled in public/fonts and applied to all Arabic and English UI text. No font installation is required.

Theme-aware SVG alpha masks preserve the supplied logo artwork while removing its white background at render time. Header and footer logos are larger and gently glow once per second, with reduced-motion support.

Validation: npm run build passed. Browser screenshot verification was unavailable in the build environment.
