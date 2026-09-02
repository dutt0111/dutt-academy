# Dutt Academy — Website

Production-ready marketing site for **Dutt Academy** ("Let's Aim For Success"), built as static HTML/CSS/JS — no build step, no framework, works by opening `index.html` directly or serving the folder from any static host.

---

## 1. Project Structure

```
dutt-academy/
├── index.html
├── VERSION
├── CHANGELOG.md
├── README.md
├── css/
│   ├── style.css          → design tokens + all component styles
│   └── responsive.css     → breakpoint overrides (1920 → 375px)
├── js/
│   └── script.js          → all site behaviour (see "JS architecture" below)
└── assets/
    ├── logo/               → brand mark, favicons, wordmark art
    ├── images/              → (empty — add any extra marketing images here)
    ├── icons/                → (empty — inline SVG icons are currently used instead)
    └── students/            → 5 placeholder student photos
```



## 2. How to Replace the Logo

The brand mark is a transparent PNG at three sizes:

- `assets/logo/dutt-academy-mark-sm.png` — navbar & footer
- `assets/logo/dutt-academy-mark-md.png` — About section art
- `assets/logo/dutt-academy-mark-lg.png` — hero decorative graphic

The **wordmark text** ("Dutt Academy") is real HTML/CSS text (not baked into the image), styled with the `Fraunces` display font — see `.navbar__wordmark-name`, `.footer__wordmark` in `style.css`. To rebrand, swap the three PNGs and edit the wordmark text directly in `index.html`.

Favicons (`favicon-16.png`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png`) are generated from the same mark — regenerate them from a new logo using any favicon generator if the brand changes.

## 3. How to Replace Student Photos

Drop new photos into `assets/students/` using the existing filenames (or update the paths in `js/script.js`):

```
student-01-placeholder.jpg
student-02-placeholder.jpg
student-03-placeholder.jpg
student-04-placeholder.jpg
```

Recommended: consistent portrait crop, roughly 4:5 ratio — cards use `object-fit: cover` so exact dimensions aren't critical.

**Important:** current photos are clearly-labelled placeholder graphics generated for layout purposes only. Do not publish the site with placeholder data presented as real student results — replace both the photos and the data (see below) with real, consented information first.



**Version:** see `VERSION` / `CHANGELOG.md` for release history.
