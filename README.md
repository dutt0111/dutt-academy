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

## 2. Running Locally

No install needed. Just open `index.html` in a browser, or for the most accurate experience (so the Google Map `<iframe>` and relative asset paths behave exactly like production), serve the folder:

```bash
cd dutt-academy
python3 -m http.server 8080
# then visit http://localhost:8080
```

## 3. How to Replace the Logo

The brand mark is a transparent PNG at three sizes:

- `assets/logo/dutt-academy-mark-sm.png` — navbar & footer
- `assets/logo/dutt-academy-mark-md.png` — About section art
- `assets/logo/dutt-academy-mark-lg.png` — hero decorative graphic

The **wordmark text** ("Dutt Academy") is real HTML/CSS text (not baked into the image), styled with the `Fraunces` display font — see `.navbar__wordmark-name`, `.footer__wordmark` in `style.css`. To rebrand, swap the three PNGs and edit the wordmark text directly in `index.html`.

Favicons (`favicon-16.png`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png`) are generated from the same mark — regenerate them from a new logo using any favicon generator if the brand changes.

## 4. How to Replace Student Photos

Drop new photos into `assets/students/` using the existing filenames (or update the paths in `js/script.js`):

```
student-01-placeholder.jpg
student-02-placeholder.jpg
student-03-placeholder.jpg
student-04-placeholder.jpg
student-05-placeholder.jpg
```

Recommended: consistent portrait crop, roughly 4:5 ratio — cards use `object-fit: cover` so exact dimensions aren't critical.

**Important:** current photos are clearly-labelled placeholder graphics generated for layout purposes only. Do not publish the site with placeholder data presented as real student results — replace both the photos and the data (see below) with real, consented information first.

## 5. Where Student Data Is Stored

All 4 student profiles are defined as structured data in `js/script.js`, at the top of the file:

```js
const students = [
  {
    id: "student-01",
    name: "Hirdyarth Gupta",
    image: "assets/students/student-01.jpg",
    course: "Class XII — Science",
    year: "2021",
    percentage: "95.6%",
    subjects: { "English Core": "95", ... },
    badge: "All A1 Grades",
    achievement: "Scored 95.6% overall with an A1 grade in every subject (CBSE, 2021)",
    college: "",
    quote: "Dutt Academy helped me strengthen my concepts...", // draft copy — editable pending student/client confirmation
    testimonialTag: "Class XII — Science | 95.6%",
    isPlaceholderPhoto: false
  },
  ...
];
```

Cards on the page and the profile modal are both rendered dynamically from this array (`renderStudents()` and `openStudentModal()`), so editing this object is the **only** place you need to touch to update a student — no HTML duplication. Testimonials are draft copy and can be edited or replaced when confirmed by the students or client.

## 6. Where Colors Are Changed

All brand colors are CSS custom properties at the top of `css/style.css`:

```css
:root {
  --color-primary: #0B1F4D;       /* deep navy */
  --color-primary-dark: #060F29;  /* near-black navy */
  --color-primary-light: #1E3A73;
  --color-accent: #3D63A8;
  --color-gold: #A9824C;          /* achievement accent */
  ...
}
```

Change a value once here and it updates everywhere (buttons, badges, backgrounds, borders).

## 7. Where Course Information Is Changed

All courses are defined as structured data in `js/script.js` under the clearly marked section:

```js
// ==========================================
// DUTT ACADEMY COURSE DATA
// EDIT COURSE INFORMATION HERE
// ==========================================
const courses = [
  {
    id: "school-classes",
    category: "School Classes",
    categorySlug: "school",
    title: "School Classes",
    shortDescription: "...",
    fullDescription: "...",
    targetStudents: "...",
    classes: "Classes 6–10",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    duration: "Full Academic Year",
    batchType: "Small Group Batches",
    teachingMode: "Offline Classroom",
    keyBenefits: ["..."],
    features: ["..."],
    outcomes: ["..."],
    eligibility: "...",
    assessment: "...",
    ctaText: "Enquire About This Course",
    status: "active"
  },
  ...
];
```

The course grid, category filter tabs (`ALL`, `SCHOOL`, `BOARD`, `COMPETITIVE`, `FOUNDATION`, `SUBJECT-SPECIFIC`), and the interactive **Course Details Modal** are all generated dynamically from this data structure. Adding, removing, or editing courses is done directly in `js/script.js` without altering HTML. Empty or unconfirmed fields are automatically hidden in the modal.

## 8. Where the Google Maps URL Is Changed

The client's Maps link (`https://maps.app.goo.gl/11tXSib9P8qB86JJ9`) resolves to a pinned location at coordinates `28.6833308, 77.325514`. Three places reference it:

1. **Embedded map** — `<iframe>` in the "Visit Dutt Academy" section (`src="https://maps.google.com/maps?q=28.6833308,77.325514&z=15&output=embed"`)
2. **"Get Directions" button** in the same section
3. **"Google Maps" contact channel** and **footer link**

No street address is displayed anywhere — only the map pin/coordinates — since a verified address text wasn't supplied. Add the full address to the contact section and footer once confirmed.

## 9. Contact Details Still Needed

Phone number is now live (Call + WhatsApp channels, footer). The following are still intentionally left as placeholders (never invent real-looking contact info):

- Email address (footer)
- Achievement statistics and results figures in the Results strip (marked `[Add ...]` in the UI)

The enquiry form (`#enquiryForm`) is fully validated client-side but has **no backend wired up** — it currently just shows a success message and resets. Connect it to a real endpoint (e.g. an n8n webhook, WATI, or a CRM form handler) inside `initContactForm()` in `js/script.js`.

## 10. JS Architecture

`js/script.js` is a single IIFE with focused functions, matching the brief's required structure:

- `initNavigation()` — sticky navbar background swap on scroll
- `initMobileMenu()` — hamburger open/close
- `initScrollEffects()` — animated stat counters (respects `prefers-reduced-motion`)
- `initRevealAnimations()` — scroll-triggered fade/slide-up via `IntersectionObserver`
- `renderCourses()` — dynamically generates course cards from `courses` data array
- `initCourseFiltering()` — category filter tabs with responsive horizontal scrolling
- `openCourseModal()` / `closeCourseModal()` — course details modal with dynamic field suppression
- `handleCourseEnquiry()` — connects modal CTAs directly to enquiry form with pre-selected course
- `initCourseModal()` — wires course card clicks, close buttons, enquiry buttons, and Escape key
- `renderStudents()` — builds student cards from the `students` data array
- `openStudentModal()` / `closeStudentModal()` — student profile modal with focus handling
- `initStudentModal()` — wires clicks, overlay-click-outside, and Escape key
- `initContactForm()` — inline validation + submit handling
- `initFooterYear()` — keeps the footer copyright year current automatically

## 11. Accessibility & Performance Notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) throughout.
- Modal is keyboard-accessible: focus moves to the close button on open, returns to the trigger on close, and `Escape` / outside-click both close it.
- All interactive elements have visible focus states (`:focus-visible`).
- `prefers-reduced-motion` disables scroll reveals and counter animation.
- Images use `loading="lazy"` except the above-the-fold hero mark.
- No external JS frameworks; total custom JS is a single small file.

---

**Version:** see `VERSION` / `CHANGELOG.md` for release history.
