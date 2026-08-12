# ✦ Tiny Quest

**A playful micro-adventure generator that turns ordinary days into small, shareable quests — no login, no pressure, just go.**

Tiny Quest is a tiny web app for the moments when you want to do *something*, but not necessarily something productive. Pick how much time you have, where you are, and how much energy you want to spend. Tiny Quest gives you one small mission that makes the next few minutes a little more memorable.

## What it does

- 🎲 Generates micro-adventures based on **time**, **place**, and **energy**
- ☀️ Includes a deterministic **Today's Quest** mode
- ✨ Comes with **24 handcrafted quests** and bonus twists
- ✅ Lets you mark quests complete with a tiny celebration
- 🧭 Keeps a lightweight **local trail** of recent adventures
- ↗️ Uses the Web Share API when available, with clipboard fallback
- 📱 Works on desktop and mobile
- 📴 Can work offline after the first visit via a small service worker
- 🔒 Has no account, backend, analytics, ads, or dependencies

## Try it locally

Because Tiny Quest is a static site, you can run it with almost any local web server.

### Python

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

### VS Code

Open the folder and use the **Live Server** extension.

> Opening `index.html` directly also works for the main app, but install/offline features require HTTP or HTTPS.

## Project structure

```text
tiny-quest/
├── index.html            # App markup
├── styles.css            # Responsive visual design
├── app.js                # Quest data + generator + local trail + sharing
├── manifest.webmanifest  # Installable web app metadata
├── sw.js                 # Lightweight offline cache
├── favicon.svg           # App icon
├── LICENSE               # MIT License
└── README.md
```

## How the generator works

Each quest declares the places, energy levels, and time budgets it fits. Tiny Quest first looks for an exact match. If an exact pool is empty, it scores the available quests and chooses from the closest matches, so the button always produces something useful.

**Today's Quest** uses the UTC date as a deterministic random seed. People using the same preferences on the same day receive the same quest.

## Privacy

Tiny Quest does not send progress anywhere. Completed quests are stored only in your browser using `localStorage`, and the trail can be cleared from the app at any time.

## Deploy on GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

GitHub will publish the static site from this repository.

## Ideas for future quests

- Optional themed quest packs
- A friend-versus-friend shared quest code
- User-created quest cards stored locally
- Seasonal quest collections
- Printable/shareable quest-card images

## License

MIT — use it, remix it, and make ordinary days slightly more adventurous.
