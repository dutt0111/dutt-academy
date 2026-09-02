# Changelog

All notable changes to the Dutt Academy website project are documented here.
Versioning: `MAJOR.MINOR.FEATURE.PATCH`

## [1.0.7.3] - 2026-09-02

### Changed
- Refined the mobile hamburger menu icon size to a clean 25px width with 2px line thickness and 4.5px vertical bar spacing.
- Centered the icon inside a dedicated 44×44px touch target maintaining effortless tap ergonomics and smooth 3-line to X transformation animation.

## [1.0.7.2] - 2026-09-02

### Optimized
- Eliminated tap lag on mobile "View Profile" by applying `touch-action: manipulation` across interactive triggers, removing the 300ms double-tap delay.
- Removed forced synchronous layout reflows (`offsetWidth`) during modal opening, switching to `requestAnimationFrame` for 60fps GPU-composited entry transitions.
- Cached modal DOM elements in `js/script.js` to avoid redundant lookups and prevented repeated image decoding with asynchronous decoding attributes (`decoding="async"`).
- Optimized modal CSS transitions using hardware-accelerated 3D transforms (`translate3d`), `will-change`, and `contain: content` properties.
- Enhanced scroll locking with a clean `modal-open` body state to prevent background scrolling without layout jumping on mobile.

## [1.0.7.1] - 2026-09-02

### Changed
- Redesigned mobile responsive layout for the **Student Success / Student Profiles** section from a single full-screen card to a clean 2-column grid.
- Tailored mobile card typography, paddings, and button dimensions across 390px, 375px, and 360px viewports ensuring two cards sit comfortably side-by-side with 10–12px gutters.
- Preserved all student information (photos, badges, names, stream/courses, scores, highlights, and modal triggers) with no horizontal overflow.

## [1.0.7.0] - 2026-09-02

### Added
- Complete redesign of the **Courses & Streams** section into an extensible, data-driven system.
- Moved all course data into a structured JavaScript model in `js/script.js` supporting title, category, descriptions, "Suitable For", subjects, duration, batch type, teaching mode, key benefits, outcomes, and assessment system.
- Replaced generic placeholder copy with meaningful, practical content across all 5 initial categories: School Classes, Board Preparation, Competitive Exam Preparation, Foundation Courses, and Subject-Specific Coaching.
- Added interactive category filter tabs (`ALL`, `SCHOOL`, `BOARD`, `COMPETITIVE`, `FOUNDATION`, `SUBJECT-SPECIFIC`) with responsive touch-friendly horizontal scrolling on mobile.
- Designed and built a dedicated, accessible **Course Details Modal** (`#courseModalOverlay`) that dynamically renders full course details and automatically hides any unpopulated fields.
- Connected course modal and card CTAs to the enquiry form: clicking "Enquire About This Course" closes the modal, pre-selects the course in `#course`, smoothly scrolls to `#contact`, and focuses the form.
- Enhanced course card visuals with consistent SVGs, academic category labels, suitable-for highlight blocks, 3 key benefits with gold checks, and hover elevations.

## [1.0.6.0] - 2026-09-02

### Added
- Added concise draft copy testimonials to all four Student Success profile modals,
  placed directly below the academic performance & achievement section.
- Designed a clean quotation block consistent with the brand's navy, off-white,
  and gold accent palette, featuring an opening quotation mark and italicised quote body.
- Populated draft testimonials for:
  - Hirdyarth Gupta (Class XII — Science)
  - Satyartha Srivastava (JEE Main 2026 — B.E./B.Tech)
  - Arul Singh (Class X)
  - Satyartha Srivastava (Class XII — Science)
- Preserved all existing marks, course details, passing years, and academic data.

## [1.0.5.1] - 2026-09-01

### Changed
- Swapped in a newly supplied logo mark render across every existing
  placement (navbar, hero, About section, footer, all favicons, og:image) —
  filenames were kept identical so no HTML/CSS changes were needed, just
  the asset files.
- The first version supplied this session had no real alpha transparency
  (every pixel was fully opaque; the "transparent" checkerboard look was
  baked into the image content itself) — flagged that rather than shipping
  it, since it would have shown a visible checkerboard box behind the logo
  everywhere. The second, corrected version had real transparency, but with
  the same kind of faint low-alpha noise halo found on the very first logo
  upload — same fix applied: hard alpha threshold, tight crop, premultiplied
  resize. Verified halo-free by compositing on navy before swapping in.

## [1.0.5.0] - 2026-09-01

### Added
- Student Two is now Satyartha Srivastava's JEE Main 2026 profile — the same
  real photo and NTA percentile data that was previously on Student Four
  before it was swapped to his Class XII result (v1.0.4.1). Reused the
  existing photo file (`student-04.jpg`) rather than duplicating the asset,
  since it's the same real photo.
- All four achiever cards are now real, provided data — none are placeholder
  content anymore. Section subtitle simplified to "All four profiles are
  populated with real, provided academic data." (previous placeholder-count
  disclaimer removed since it's no longer applicable).
- Removed the now-unused `student-02-placeholder.jpg` asset.

### Note
- Satyartha Srivastava now appears twice on the achiever wall — once for his
  JEE Main score (Student Two) and once for his Class XII result (Student
  Four) — as requested. Worth a quick gut-check with the academy on whether
  showing the same student twice reads the way you want on the live page,
  or whether one of the two should eventually be swapped for a different
  student.

### Not included (needs input)
- A testimonial for Student Four was requested again but **not** added —
  same reasoning as every other profile so far: no actual quote has been
  supplied by the student, and this build won't put invented words under a
  real person's name. Still happy to draft options for actual sign-off.

## [1.0.4.1] - 2026-09-01

### Changed
- Student Four (Satyartha Srivastava) switched from JEE Main 2026 data to
  his CBSE Class XII (2025) result, sourced from a supplied cbseresults.nic.in
  printout: English Core 94, Mathematics 95, Physics 94, Chemistry 97,
  Physical Education 94 → 94.8% overall, all A1 grades. Course, badge, and
  achievement text updated to match (was "JEE Main 2026 — B.E./B.Tech" /
  "AIR 43456", now "Class XII — Science" / "All A1 Grades").
- Photo unchanged — this result printout is the standard NIC results-page
  format and doesn't embed a candidate photo (unlike the earlier NTA
  scorecard PDF), so his existing verified photo was kept rather than
  removed or left blank.

## [1.0.4.0] - 2026-09-01

### Added
- Student Four is now populated with real data for a JEE Main competitive-exam
  achiever, sourced from a supplied NTA JEE Main 2026 Session 2 scorecard PDF:
  Mathematics 84.83, Physics 99.49, Chemistry 93.34, Final Total 97.25 — all
  **NTA percentile scores**, not raw marks or percentage. AIR (CRL) 43456.
- Candidate photo cropped directly out of the scorecard PDF (rasterized the
  page, located and cropped the embedded photo, trimmed the table-cell
  border) — no other part of the document was used as an image.
- Labeled every score on this profile with "%ile" so it reads correctly as
  a percentile rather than being mistaken for a percentage/mark, since the
  rest of the site's ledger otherwise shows raw marks out of 100. Course
  set to "JEE Main 2026 — B.E./B.Tech"; badge set to "AIR 43456".
- "Next Step" removed for this profile too (existing conditional-facts
  logic), and section subtitle updated to "Three profiles are populated
  with real, provided academic data..." to stay accurate.

### Not included (needs input)
- Testimonial quote left as a placeholder — same reasoning as Student One
  and Student Three: no actual quote was supplied, so none was invented.
- Application number, roll numbers, category, gender, date of birth,
  mother's/father's names, and state of eligibility from the scorecard
  were intentionally left out of the public profile.

## [1.0.3.1] - 2026-09-01

### Fixed
- The `og:image` meta tag (link-preview image) still pointed at
  `dutt-academy-logo-full.png` — a filename removed back in the v1.0.1.0
  logo cleanup — so social/chat link previews were silently broken (404).
  Re-pointed it to `assets/logo/dutt-academy-mark-lg.png`, the actual logo
  asset already used for the hero.

### Verified
- Re-confirmed the logo mark image supplied is pixel-identical to the one
  already processed and in use across navbar, hero, about section, footer,
  and all favicons (same file, re-sent) — no reprocessing needed, and a
  full page-load pass now shows zero broken asset requests anywhere on
  the site.

## [1.0.3.0] - 2026-08-31

### Added
- Student Three is now populated with real academic data (name, photo,
  subject-wise marks, overall percentage) sourced from a supplied CBSE
  Class X result: English Lang. & Lit. 92, Hindi Course B 95, Mathematics
  Standard 95, Science 97, Social Science 96, Computer Application
  (additional subject) 98 → 96.2% overall using CBSE's best-of-5 rule
  (the additional subject replaces the lowest of the five compulsory
  subjects since it scored higher), all A1 grades.
- Real student photo cropped from a framed print (removed the printed
  name/date caption and frame border) to fit the achiever-card format,
  replacing the Student Three placeholder graphic.
- Section subtitle updated to "Two profiles are populated with real,
  provided academic data..." to stay accurate now that both Student One
  and Student Three are real.

### Not included (needs input)
- Same as Student One: no "Next Step" (further education) or testimonial
  quote was invented for Student Three — the result statement doesn't
  state either, and this build won't fabricate a first-person quote or a
  future-plans claim under a real, named student's name. "Next Step" is
  left blank (hidden automatically via the existing conditional-facts
  logic) and the quote stays a placeholder pending real input.
- Mother's/Father's names, roll number, and date of birth from the result
  statement were intentionally left out of the public profile.

## [1.0.2.2] - 2026-08-31

### Changed
- Removed the "Next Step" (academic destination) fact from Student One's
  profile — the modal now shows Passed Out + Achievement in a 2-column
  layout instead of 3, since there was nothing to put in that field.
- The "Next Step" fact box and the testimonial quote block are now both
  optional per-student: `openStudentModal()` hides either one automatically
  when a student's `college` / `quote` value is empty, instead of always
  rendering all three fact boxes and a quote. Other students are
  unaffected — they still show all three placeholder facts as before.

### Not included (needs input)
- A short testimonial for Student One was requested but **not** added. The
  marks statement gives no quote from him, and writing first-person words
  and publishing them under his real name as something he said would be a
  fabricated endorsement, not a testimonial. Happy to draft a couple of
  suggested lines for you to run past him for actual approval — just say
  the word — and the confirmed wording drops straight into the `quote`
  field for `student-01` in `js/script.js`.

## [1.0.2.1] - 2026-08-31

### Removed
- Student Five card/profile removed from the Student Success section per
  request — down to 4 featured students.

### Changed
- `.students__grid` now lays out 4 columns (was 5) at desktop/laptop widths
  so the remaining cards stay evenly sized; tablet/mobile wrap behaviour
  (3 → 2 → 1 columns) is unchanged.
- Trust strip stat updated from "5+ Featured Students" to "4+" to match.
- Removed the now-unused `student-05-placeholder.jpg` asset.

## [1.0.2.0] - 2026-08-31

### Added
- Student One is now populated with real academic data (name, photo, subject-wise
  marks, overall percentage) sourced from a supplied CBSE Class XII marks
  statement: English Core 95, Mathematics 95, Physics 95, Chemistry 95,
  Computer Science 98 → 95.6% overall, all A1 grades.
- Real student photo processed and cropped to fit the achiever-card format,
  replacing the Student One placeholder graphic.
- Added an `isPlaceholderPhoto` flag per student so alt text and the section
  disclaimer accurately reflect which profiles are real vs. placeholder.

### Not included (needs input)
- "Next Step" (college/further destination) and the testimonial quote for
  Student One were **not** invented — the marks statement doesn't state
  either, and fabricating a quote or future-plans claim for a real, named
  individual isn't something this build will do. Both fields are left as
  clearly marked placeholders; supply the real values (from the student or
  the academy) and they drop straight into the `students` array in
  `js/script.js`.
- Parents' names and roll number from the certificate were intentionally
  left out of the public card/profile — not needed for the public site and
  more personal information than the "educationally relevant only" brief
  calls for.

## [1.0.1.1] - 2026-08-30

### Fixed
- Real horizontal-overflow bug on narrow phones (~320–360px, e.g. many
  Android devices): CSS Grid tracks written as `1fr` (bare, or via
  `repeat()`) default to `min-width: auto`, which floors a track at its
  content's min-content size — so a card's padding + text could force the
  track wider than the available viewport instead of shrinking. Worst
  offender was the 2-column Results strip, overflowing by up to 48px at
  320px wide.
- Fix: every grid track across `style.css` and `responsive.css` (results,
  stats, courses, students, approach, feature list, hero, about, contact,
  map, footer, modal facts) now uses `minmax(0, 1fr)` in place of bare
  `1fr`, so tracks can shrink to fit and content wraps instead of
  overflowing.
- Re-verified with a full breakpoint sweep from 320px up to 1920px,
  including with the mobile menu open and the student modal open at each
  width — zero overflow in every state.

## [1.0.1.0] - 2026-08-30

### Fixed
- Removed a faint rectangular "ghost box" artifact around the brand mark
  (`assets/logo/dutt-academy-mark-*.png`, favicons). Root cause: the crop
  bounding box was computed from the raw alpha channel, which included a
  near-invisible low-alpha noise halo from the source PNG's soft glow —
  stretching the true crop area out to a much larger box than the visible
  shape. Fixed by hard-thresholding alpha (<40 → fully transparent) before
  computing the crop, and switching to premultiplied-alpha resizing to avoid
  any dark/light fringing at the cut edges. Verified by compositing the new
  assets over a dark navy backdrop before and after.

### Added
- Real phone number wired into the "Call Us" and "WhatsApp" contact channels
  (`tel:` and `wa.me` links) and the footer contact block, replacing the
  `[Add phone number]` / `[Add WhatsApp number]` placeholders.

## [1.0.0.0] - 2026-08-30

### Added
- Initial production build of the Dutt Academy marketing site.
- Sticky navbar with scroll-based style swap, mobile hamburger menu.
- Hero section with layered "book pages" brand mark and floating achievement cards.
- Trust/achievement stats strip with animated counters (placeholder figures, clearly marked).
- About section with "Why Students Choose Dutt Academy" feature list.
- Courses section (5 editable course card placeholders).
- Three-step "How We Teach" learning approach band.
- Student Success section: 5 dynamically-rendered student cards driven by a single
  JS data array, each opening a full academic-ledger-style profile modal
  (keyboard accessible, closes on Escape / outside click / close button).
- Results/achievements placeholder strip.
- Enquiry CTA banner.
- Contact section with validated enquiry form (Student Name, Parent/Guardian,
  Phone, Class, Course, Message) plus Call / WhatsApp / Maps channels.
- Compact Google Maps section using the client-supplied Maps link, resolved to
  a coordinate-based embed (no address invented).
- Footer with brand, quick links, and contact/location.
- Brand mark and favicon set generated from the client-supplied logo artwork.
- Full responsive pass across 1920 / 1440 / 1280 / 1024 / 768 / 480 / 390 / 375px.
- README.md covering structure, asset replacement, data locations and setup.
