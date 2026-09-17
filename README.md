# Connecticut Real Estate Center

A rebuild of connecticutrealestate.online as a modern Next.js application — twelve routes, coordinated-network messaging intact, built for speed, SEO and lead capture.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript, no emit
```

Node 18.17 or newer is required.

## Why Next.js (App Router) rather than Vite

Twelve marketing routes whose main job is ranking and converting. The App Router gives per-route `metadata` (title, description, Open Graph) as a first-class export, automatic route-level code splitting, `next/image`, and server components that keep the marketing pages nearly JS-free — only the navbar, property search, path selector and forms ship as client bundles. A Vite SPA would have needed a separate solution for each of those. The trade-off is a heavier toolchain, which is worth it here.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, Four Pillars, Coordinated Execution Model, featured homes, Select Your Path, From Screen to Steel, local expertise |
| `/about` | Story, pillars in practice, leadership, licence details |
| `/buy` `/rent` `/sell` `/lease` | Intent pages — filterable listings + tailored lead form |
| `/agents` | Agent grid with regions and direct contact |
| `/career` | Why join, roles, application form |
| `/commercial` | Services, asset types, listings, case studies |
| `/resources` | Hyperlinked directory incl. official state sources |
| `/relocation` | Regional starting points, relocation checklist |
| `/contact` | Contact methods, map placeholder, enquiry form |
| `*` | 404 |

## Where to edit content

Everything lives in `lib/` — components handle layout only.

| What | File |
| --- | --- |
| Company name, phones, address, licence, navigation, socials | `lib/site.ts` |
| Home page: hero, pillars, process, service paths, evolution | `lib/content/home.ts` |
| About / Careers / Commercial / Relocation / intent copy | `lib/content/pages.ts` |
| Listings | `lib/content/properties.ts` |
| Agents | `lib/content/agents.ts` |
| Resource directory | `lib/content/resources.ts` |
| Colours, fonts, shadows | `tailwind.config.ts` |
| Buttons, cards, fields, section rhythm | `app/globals.css` |
| Font families | `app/layout.tsx` (`next/font`) |

### Adding a listing

Append to the `properties` array in `lib/content/properties.ts`, matching the `Property` type in `lib/types.ts`. Set `featured: true` to surface it on the home page. Leave `image` empty and the card renders a branded placeholder instead of a broken tile.

To connect a real MLS/IDX feed, fetch in the server component and map the response onto `Property` — `PropertySearch` takes the array as a prop, so no UI changes are needed.

### Adding an agent

Append to `agents` in `lib/content/agents.ts`. Drop a headshot at `public/images/agents/<slug>.jpg` and set `photo`; without one the card shows a monogram tile.

### Adding a resource

Append to any group's `links` array in `lib/content/resources.ts`, or add a whole new group with its own `icon`.

## Client TODOs before launch

1. **Email addresses** in `lib/site.ts` are placeholders — the live site masks them. Replace all three.
2. **Social links** in `lib/site.ts` are `#` and are hidden until set to real URLs.
3. **Listings** are placeholders — swap in real inventory or an IDX feed.
4. **Agent photos and direct contact details.**
5. **Commercial case studies** in `lib/content/pages.ts` are placeholders.
6. **Relocation figures** — school, tax and cost-of-living data must be verified before publishing.
7. **Map embed** on `/contact` — a commented snippet marks the spot.
8. **Form delivery** — see below.

## Forms

`components/forms/ContactForm.tsx` uses React Hook Form + Zod. Validation and accessible error handling are complete; submission is a stub that opens the visitor's mail client with the enquiry pre-filled, so no lead is lost before a backend exists. Replace the block marked `── Submission stub ──` with a POST to your CRM or a service like Formspree, then set the status from the response.

## Design notes

- **Palette**: deep navy (`navy-900`) with a warm bronze accent on a near-white base. `bronze-600` is the lightest bronze used for text or button fills — lighter steps fail WCAG AA on white and are decorative only.
- **Type**: Plus Jakarta Sans for headings, Inter for body, both via `next/font` (self-hosted, no layout shift).
- **Motion**: `components/ui/Reveal.tsx` holds the shared easing and the `Reveal` / `RevealGroup` / `RevealItem` primitives. To change the feel globally, edit `ease` and the duration there. All animation respects `prefers-reduced-motion` via `MotionConfig` in `components/providers.tsx`.
- **Mobile**: a sticky bottom bar keeps Call and Enquire within thumb reach; the layout reserves matching bottom padding so it never covers content.

## Deploy

- **Vercel**: import the repo; zero configuration.
- **Static hosts (GitHub Pages, Netlify, S3)**: build with `NEXT_EXPORT=1 npm run build` to emit `out/`. Serving from a sub-path also needs `NEXT_BASE_PATH=/repo-name`. Image optimization is disabled in export mode because it needs a server.
