# Deploying to Cloudflare Pages

Static site — no build step, no dependencies. Everything in this folder is the deployable output.

```
index.html      the page
styles.css      styles
script.js       interactions
_headers        security + cache headers (Cloudflare Pages)
_redirects      apex → www, friendly URLs (Cloudflare Pages)
robots.txt
sitemap.xml
```

---

## Option A — Direct upload (fastest, no Git)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Project name: `baraka-universal`.
3. Drag the **contents** of this folder in (the files themselves, not the parent folder).
4. **Deploy**. You get `baraka-universal.pages.dev` immediately.

## Option B — Git (recommended, auto-deploys on push)

1. Push this folder to a GitHub/GitLab repo.
2. Workers & Pages → **Create** → **Pages** → **Connect to Git** → select the repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. **Save and Deploy**.

## Option C — Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=baraka-universal
```

---

## Custom domain: www.baraka-ksa.com

1. Pages project → **Custom domains** → **Set up a custom domain** → `www.baraka-ksa.com`.
2. If `baraka-ksa.com` is already on Cloudflare DNS, the CNAME is created automatically.
   If not, add the nameservers Cloudflare gives you at your registrar first.
3. Add `baraka-ksa.com` (apex) as a second custom domain — `_redirects` then forwards it to `www`.
4. SSL/TLS → mode **Full (strict)**; turn on **Always Use HTTPS** and **Automatic HTTPS Rewrites**.

Certificates issue in a few minutes.

## Recommended Cloudflare settings

| Setting | Where | Value |
|---|---|---|
| Always Use HTTPS | SSL/TLS → Edge Certificates | On |
| HSTS | SSL/TLS → Edge Certificates | On (6 months) |
| Brotli | Speed → Optimization | On |
| Early Hints | Speed → Optimization | On |
| Bot Fight Mode | Security → Bots | On |

---

## Wiring the contact form

The form currently validates and shows a success message but **does not send** — see the
`DEMO SUBMIT` block in `script.js`. Three options, easiest first:

### 1. Web3Forms (no backend, free)
Get an access key at web3forms.com, then replace the demo block with:

```js
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR-ACCESS-KEY',
    subject: 'New project brief — baraka-ksa.com',
    ...Object.fromEntries(new FormData(form))
  })
});
```
Add `https://api.web3forms.com` to `connect-src` in the `_headers` CSP.

### 2. Cloudflare Pages Function + MailChannels / Resend
Create `functions/api/enquiry.js` in this folder and POST to `/api/enquiry`.
Stays same-origin, so the CSP above needs no change.

### 3. Formspree
Point the `<form>` at your Formspree endpoint and remove the JS submit handler.

Whichever you pick, briefs should land in **info@baraka-ksa.com**.

## Before launch

- [ ] Replace the placeholder testimonial with an attributed, approved quote
- [ ] Confirm written permission for every client name listed
- [ ] Add a physical address to the contact list and the JSON-LD block
- [ ] Wire the form and send a live test
- [ ] Submit `sitemap.xml` in Google Search Console
- [ ] Claim the Google Business Profile with matching name/phone
