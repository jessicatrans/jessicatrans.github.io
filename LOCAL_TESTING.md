# Local Testing Guide

## The Problem
This project uses a `_redirects` file for clean URLs (e.g. `/about` instead of `/about.html`).
This only works on Netlify — **Live Server does not support it**, so clean URLs will 404 locally.

---

## Option 1: Use Netlify CLI (Recommended)
This runs a local server that reads your `_redirects` file, matching production exactly.

### Setup (one time only)
```bash
# Install Netlify CLI
sudo npm install -g netlify-cli

# Fix permissions if needed
sudo chown -R $USER /Users/<your-username>/Library/Preferences/netlify
```

### Running locally
```bash
# Inside your project folder
netlify dev
```

Then open **http://localhost:8888** in your browser. Clean URLs will work just like on Netlify.

---

## Option 2: Use Live Server (Limited)
You can still use Live Server for styling and layout changes, but:
- Clean URLs like `/about` will **404**
- Navigate directly using `.html` extensions instead: `/about.html`, `/contact.html`, etc.
- This is fine for quick visual checks, just don't rely on it for link testing

---

## Option 3: Test on Netlify Directly
Push your changes to GitHub and Netlify will auto-redeploy in ~30 seconds.
Then test on your custom domain where everything works correctly.

```bash
git add .
git commit -m "your message"
git push
```

---

## Current `_redirects` Rules
```
/about                    /about.html                    200
/contact                  /contact.html                  200
/digitalart               /digitalart.html               200
/pixelart                 /pixelart.html                 200
/traditionalart           /traditionalart.html           200

/*.html                   /:splat                        301!
```

The `200` rules silently serve the correct file for clean URLs.
The `301!` rule redirects anyone who visits a `.html` URL to the clean version.

---

## Tips
- Always test final links on your **jessicatrans.com**, not `jessicatrans.github.io`
- `jessicatrans.github.io` points to GitHub Pages which ignores `_redirects`
- If a page 404s on Netlify, make sure the route is listed in `_redirects`
