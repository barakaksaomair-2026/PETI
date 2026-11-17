# Website Build Specification
### Reference model: universalbaraka.tech (EPC / multi-discipline contracting company site)

**Prepared:** 4 October 2026
**Purpose:** A complete blueprint — structure, content, design system, components, and technical stack — for building a website of the same class and quality as the reference site.

---

## 1. Executive Summary

The reference site is a **corporate credibility site for an industrial EPC contractor**. Its job is not e‑commerce or self-service; it exists to convert procurement managers, EPC main-contractors and plant owners into enquiries ("Send Project Brief").

Three things make it work, and any clone must reproduce all three:

1. **Proof over claims** — live counters (30+ projects, 13+ years, 50+ engineers), named blue-chip clients (Aramco, SABIC, Mawani), 31 real project records with year, scope and discipline tags, and standards badges (NFPA, ISA, NACE, ISO 9001).
2. **Technical visual language** — animated schematic/blueprint motifs (MCC panels, pipeline + anode diagrams, field instrument readouts, structural plans) instead of stock photography. This is the single biggest differentiator.
3. **Single-path conversion** — every section terminates in "Start Your Project" or a direct phone link.

**Estimated build:** 4–6 weeks for one developer + one designer; ~120–160 hours.

---

## 2. Site Architecture

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 1 | Home | `/` | Full narrative in one scroll; funnels to contact |
| 2 | Services | `/services` | Grid of 9 disciplines, each expandable |
| 3 | Service detail | `/services/[slug]` | Scope of work, standards, equipment, sample projects |
| 4 | Projects | `/projects` | Filterable archive (All / Civil / Mechanical / Instrumentation / IT / Electrical) |
| 5 | Project detail | `/projects/[slug]` | Client, year, scope, disciplines, outcome |
| 6 | About | `/about` | Story, mission, vision, leadership, certifications |
| 7 | Contact | `/contact` | Form + full contact block + map |
| 8 | Careers *(optional)* | `/careers` | Useful for a contractor scaling manpower |

**Global navigation:** Logo · Home · About · Services · Projects · Contact · **[Start Your Project]** button (accent-filled, always visible).
**Footer:** logo + one-line positioning, service links, company links, full contact block, CR/VAT number, ISO marks, copyright.

---

## 3. Homepage Section-by-Section Blueprint

Build the homepage as 10 ordered sections. This sequence *is* the sales argument.

### 3.1 Hero
- Eyebrow: `Est. 2013 · Saudi Arabia`
- H1 in three lines with a mixed weight/italic accent:
  **"We Build More / Than Structures — / We Build Legacy."**
- Sub-paragraph, 25–35 words, naming every discipline in one breath.
- Two CTAs: primary `Start Your Project →`, secondary (ghost) `View Our Work`.
- Inline stat strip: `30+ Projects` · `13+ Years` · `50+ Engineers`.
- **Right side:** animated blueprint panel — a structural plan that draws itself through 4 labelled stages (`BLUEPRINT → EXCAVATION & FOUNDATION → STRUCTURAL FRAME → LANDMARK COMPLETE`), with dimension lines (220m × 260m) and tags (PT, FT, MCC).
- Floating badges: `ISO Certified 9001:2019`, `Active Projects — 1 ▲ Live`.
- `Scroll` indicator at the bottom edge.

### 3.2 Marquee ticker
Infinite horizontal scroll of the 10 capabilities separated by a ◆ glyph. Duplicate the list in markup for a seamless loop; pause on hover; respect `prefers-reduced-motion`.

### 3.3 About / Our Story
Two columns: photograph (facility or team, treated with a duotone/overlay) + text.
- Eyebrow `Our Story`, H2 `Engineering *precision* since 2013` (italic accent word).
- Two short paragraphs: who we are, and the "one partner, every discipline" argument.
- Four count-up stats animating from 0 on scroll into view: Projects Delivered, Years of Experience, Client Retention %, Qualified Engineers.

### 3.4 Mission & Vision
Eyebrow `Our Purpose`, H2 `Guided by *principle*`. Two cards with geometric glyphs (◉ / ◈), ~55-word statements each.

### 3.5 Services grid
Eyebrow `What We Do`, H2 `Full-spectrum *engineering* disciplines`.
9 cards. **Each card contains a bespoke mini-animation**, not an icon:

| Service | Card motif | Standards badges |
|---|---|---|
| Electrical Services | XFMR + MCC one-line diagram | IEC · NEC · IEEE |
| Instrumentation | Field panel w/ live PRESS/TEMP/FLOW/LEVEL gauges | ISA · IEC 61511 · SIL |
| IT & Networking | Fiber strands / node topology | TIA · ISO 27001 · BICSI |
| Fire Safety | Detector matrix: SMOKE/CO₂/FM200/HT/ALARM | NFPA · IEC 62305 · SFPE |
| Civil Works | Foundation section / rebar grid | ACI · BS · ASCE |
| Mechanical | Rotating TURBINE schematic | ASME · API · ANSI |
| Cathodic Protection | Pipeline + anodes + T/R rectifier (−/+) | NACE · ISO 15589 · AMPP |
| Trading & Supply Chain | GLOBAL SUPPLY route map | ARAMCO · ISO 9001 · SASO |
| Maintenance | STATUS: NOMINAL + PPM schedule bars | ASHRAE · NFPA · SMACNA |

Card body = 20–30 word scope summary + badge row + `→` link.

### 3.6 Featured projects
Eyebrow `Our Work`, H2 `Landmark *projects*`, `All Projects →` link top-right.
Six cards, each: discipline line + year · title · `View →`. Image or schematic fill, zoom-on-hover.

### 3.7 Why Choose Us
Eyebrow `Why Choose Us`, H2 `The *difference* you can measure` + intro + CTA on the left; four numbered items (01–04) on the right:
1. Multi-Discipline Integration
2. ARAMCO-Approved Vendor (ISO 9001 / ISO 45001)
3. 30+ Projects Delivered
4. Zero-Harm Safety Record

### 3.8 Clients
Eyebrow `Our Clients`, H2 `Trusted by *industry leaders*`. 15 client names/logos in a grid or slow marquee; greyscale, colour on hover.

### 3.9 Testimonial
Oversized `"` glyph, quote (≤35 words), name + title + company.

### 3.10 Final CTA + Contact
- CTA band: `Ready to Begin?` / `Let's build something *extraordinary*` / 24-hour response promise / two CTAs including `tel:` link.
- Contact block: Email ×2, Phone ×2, Address, Hours, Website — paired with the form: Full Name, Email Address, Service Required (select), Project Brief (textarea), `Send Project Brief →`.

---

## 4. Design System

### 4.1 Colour
Dark, industrial, one hot accent.

| Token | Suggested value | Use |
|---|---|---|
| `--bg` | `#0A0B0D` | Page background |
| `--surface` | `#121418` | Cards, panels |
| `--border` | `#23262C` | Hairlines, card edges |
| `--text` | `#F2F3F5` | Headings |
| `--muted` | `#8A8F98` | Body, eyebrows |
| `--accent` | `#D4A24C` (brass) or `#1FB6A8` (technical teal) | CTAs, italic accent words, diagram highlights |
| `--grid` | `rgba(255,255,255,.05)` | Blueprint grid overlays |

Pick **one** accent and use it nowhere except CTAs, accent words, and live-data highlights.

### 4.2 Typography
- **Display:** a tight-tracking grotesk or editorial serif-mix — e.g. `Satoshi`, `General Sans`, or `Neue Haas Grotesk`. H1 clamp(2.75rem, 7vw, 6rem), line-height 0.95, letter-spacing −0.03em.
- **Accent word:** italic (ideally a contrasting serif italic, e.g. `Instrument Serif`) in `--accent`.
- **Body:** `Inter` / `Geist`, 16–18px, line-height 1.65, `--muted`.
- **Eyebrows & technical labels:** mono (`JetBrains Mono` / `IBM Plex Mono`), 11–12px, uppercase, letter-spacing 0.18em.
- Arabic support: `IBM Plex Sans Arabic` if an `/ar` locale is added.

### 4.3 Layout & spacing
Max container 1280–1440px, 24px gutters (16px mobile). 8px spacing scale. Section vertical padding 120–160px desktop / 72px mobile. 12-column grid. Breakpoints 640 / 768 / 1024 / 1280.

### 4.4 Motion
| Element | Behaviour |
|---|---|
| Section entrance | fade + 24px rise, 600ms, `cubic-bezier(.16,1,.3,1)`, once |
| Counters | count-up over 1.6s on 40% viewport intersection |
| Hero blueprint | 4-stage SVG stroke-dashoffset draw, ~8s loop |
| Marquee | linear infinite translateX, 35s, pause on hover |
| Cards | 1.02 scale + border brightening, 250ms |
| Buttons | accent fill wipe + arrow nudge 4px |
| Cursor *(optional)* | custom dot/ring on desktop pointer devices |

**Mandatory:** full `@media (prefers-reduced-motion: reduce)` fallback that disables loops and reveals content statically.

---

## 5. Content Model (CMS schemas)

```
Service
  title, slug, order, shortDescription, longDescription,
  scopeItems[], standards[] (code + body), equipment[],
  motifKey (which animated card graphic), heroImage, seo{}

Project
  title, slug, client, year, discipline (enum: Electrical |
  Instrumentation | IT | Civil | Mechanical), tags[],
  summary, scopeOfWork (rich text), location, value (optional),
  images[], featured (bool), order, seo{}

Client        name, logo, website, sector
Testimonial   quote, author, role, company, avatar
SiteSettings  emails[], phones[], address, hours, socials[],
              stats{projects, years, engineers, retention},
              certifications[]
Enquiry       name, email, phone, service, message, createdAt, source
```

Recommended CMS: **Sanity** or **Payload** (both handle the repeatable schemas above and give the client a clean editor). Static JSON/MDX is acceptable for v1 if the client will not self-edit.

---

## 6. Technical Stack

| Layer | Recommendation | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | SSG/ISR for SEO, route-based code splitting |
| Styling | **Tailwind CSS** + CSS custom properties for tokens | Fast, consistent with the token table above |
| Animation | **Framer Motion** (scroll reveals, counters) + hand-authored **SVG/CSS** for schematics | GSAP + ScrollTrigger is the alternative if timelines get complex |
| Lenis | smooth scroll (optional, keep subtle) | Matches the reference's feel |
| Forms | React Hook Form + Zod → API route → **Resend** email + CMS record | Validated, logged, no lost leads |
| Spam | Honeypot + Cloudflare Turnstile | Silent, no friction |
| Hosting | Vercel (or Cloudflare Pages) | Preview deploys, edge CDN |
| Analytics | Vercel Analytics or Plausible + GA4 | Track CTA clicks and form completion |

---

## 7. Performance, SEO & Accessibility

**Performance targets:** Lighthouse ≥ 90 across the board; LCP < 2.5s; CLS < 0.1; initial JS < 200KB gzip.
- Serve all photography as WebP/AVIF via `next/image`; build schematics as inline SVG (they cost almost nothing).
- `font-display: swap`, self-hosted, subset fonts.
- Lazy-load everything below the fold; defer the marquee and card animations until intersection.

**SEO:**
- Title pattern `{Page} | {Company}`; one H1 per page.
- Target localised commercial intent: *"EPC contractor in Saudi Arabia"*, *"electrical and instrumentation contractor Jubail"*, *"cathodic protection company KSA"*, *"ARAMCO approved contractor"*.
- JSON-LD: `Organization`, `LocalBusiness` (address + geo + openingHours), `Service` per discipline, `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, canonicals, OG/Twitter cards per page.
- Google Business Profile claimed with the same NAP as the footer.

**Accessibility (WCAG 2.1 AA):**
- Verify accent-on-dark contrast ≥ 4.5:1 for body text — dark industrial palettes commonly fail here.
- Keyboard focus rings on every interactive element; skip-to-content link.
- `aria-hidden` on decorative schematics; `aria-live="polite"` for form status; labelled (not placeholder-only) form fields.
- Reduced-motion support as specified in §4.4.

---

## 8. Component Inventory

`Header` (sticky, blurred, shrink-on-scroll) · `MobileNav` (full-screen overlay) · `Hero` · `BlueprintAnimation` · `StatCounter` · `Marquee` · `SectionHeading` (eyebrow + H2 with italic accent) · `ServiceCard` + 9 `Motif` SVG components · `ProjectCard` · `ProjectFilter` (with count display "31 / 31 projects") · `FeatureList` (numbered 01–04) · `ClientGrid` · `TestimonialCard` · `CTABand` · `ContactInfo` · `ContactForm` · `Footer` · `RevealOnScroll` wrapper · `Button` (primary / ghost variants).

---

## 9. Build Plan

| Phase | Duration | Deliverable |
|---|---|---|
| 1. Discovery & content | Week 1 | Final copy, project list w/ client approvals, logos, photography, certificates |
| 2. Design system | Week 1–2 | Tokens, type scale, component states; hi-fi Home + Projects in Figma |
| 3. Core build | Week 2–4 | Next.js scaffold, global layout, all pages statically, CMS schemas wired |
| 4. Motion layer | Week 4–5 | Blueprint animation, 9 card motifs, counters, marquee, reveals, reduced-motion |
| 5. Integration & QA | Week 5 | Form → email + CMS, analytics, SEO/schema, cross-browser, Lighthouse, a11y audit |
| 6. Launch | Week 6 | DNS, SSL, Search Console, GBP, redirects, client CMS training |

**Content the client must supply before Phase 3:** company profile PDF, CR & VAT numbers, ISO certificates, a vetted project register (title, client, year, scope, discipline), client logo permissions, 10–20 site photographs, 1–3 testimonials with sign-off, and the official contact block.

---

## 10. Quality Checklist (pre-launch)

- [ ] All 9 services + every project have unique title/meta description
- [ ] Phone numbers are `tel:` links; emails are `mailto:` links
- [ ] Form tested: success, validation error, server error, spam block
- [ ] Enquiry email reaches both company addresses; auto-reply sent
- [ ] 404 and thank-you pages designed
- [ ] Tested on iOS Safari, Android Chrome, Chrome, Firefox, Edge, Safari macOS
- [ ] Reduced-motion and keyboard-only passes
- [ ] Lighthouse mobile ≥ 90 on Home, Services, Projects
- [ ] No client logo used without written permission
- [ ] Privacy policy published (form collects personal data)

---

## 11. Notes on Differentiation

If this site is for a competitor in the same market, do **not** copy the reference's copy lines, project list, or exact hero wording — reproduce the *system*, not the artefacts. Recommended points of departure:

- Swap the italic-serif accent for a different typographic device (e.g. outlined display text or a highlighted underline).
- Choose a different accent hue from the brass/teal the reference occupies.
- Lead with a distinct proof metric (safety man-hours without LTI, kilometres of pipeline commissioned, MW energised) rather than project count.
- Add what the reference lacks: downloadable company profile PDF, an HSE statistics page, an Arabic locale, and per-project result metrics.
