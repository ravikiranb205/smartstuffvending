# SmartStuff vending landing page

A simple static, mobile-first site to introduce the SmartStuff local vending pilot to prospective host locations. No framework, build tools or backend required.

## Publish with GitHub Pages

1. On GitHub, open **Settings → Pages**.
2. Select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
3. Once deployed, GitHub Pages will use `https://ravikiranb205.github.io/smartstuffvending/`.

## IMPORTANT: Enable the contact form

The page intentionally **does not collect or transmit leads until you set an inbox**. In `script.js`, set `CONTACT_EMAIL` to an address you control. The form then opens visitors' email apps with a prefilled inquiry. This is not a backend lead-capture service; users must press Send in their email app. For a more seamless form, connect a trusted form service later and update the copy/privacy notice accordingly.

## Before offering pilots

- Confirm the name is clear to use (early web screening is not trademark clearance).
- Replace the CSS machine illustration with a real photo when the machine is ready.
- Verify that $0 standard equipment/installation/maintenance promises match your real host agreement and economics.
- Keep a simple written pilot agreement covering power, placement, access, restocking, insurance, removal and duration.
- Confirm card/tap functionality and refrigeration before claiming those are live operational capabilities.

## Local preview

Open `index.html` directly in a browser, or run `python3 -m http.server` in this folder.
