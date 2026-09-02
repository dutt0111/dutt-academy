/* ==========================================================================
   Dutt Academy — Site Scripts
   Modular structure: each init function owns one piece of behaviour.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     escapeHtml — utility helper for safe dynamic markup
     ------------------------------------------------------------------ */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // DUTT ACADEMY COURSE DATA
  // EDIT COURSE INFORMATION HERE
  // ==========================================================================
  const courses = [
    {
      id: 'school-classes',
      category: 'School Classes',
      categorySlug: 'school',
      title: 'School Classes',
      shortDescription: 'Structured academic support aligned with the school curriculum, built to reinforce core concepts and ensure steady, consistent progress.',
      fullDescription: 'Our School Classes programme provides consistent, curriculum-aligned academic coaching throughout the academic year. Designed to strengthen fundamental concepts and assist with day-to-day school coursework, this programme builds confidence and steady study habits through structured revision and personalized doubt resolution.',
      targetStudents: 'Students seeking regular curriculum reinforcement and steady academic growth throughout the year.',
      classes: 'Classes 6–10',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
      duration: 'Full Academic Year',
      batchType: 'Small Group Batches (10–15 students)',
      teachingMode: 'Offline Classroom',
      keyBenefits: [
        'Strong understanding of school curriculum',
        'Regular concept revision & practice',
        'Homework and doubt-solving support',
        'Continuous academic assessment',
        'Consistent preparation throughout the academic year'
      ],
      features: [
        'Curriculum-aligned chapter notes',
        'Interactive doubt-clearing sessions',
        'Regular parent-teacher updates'
      ],
      outcomes: [
        'Solid conceptual clarity across foundational subjects',
        'Improved classroom performance and exam readiness',
        'Disciplined daily study and revision routine'
      ],
      eligibility: 'Open to school students aiming for academic consistency',
      assessment: 'Weekly chapter-wise tests, monthly revision assessments, and comprehensive term progress reports.',
      ctaText: 'Enquire About This Course',
      status: 'active'
    },
    {
      id: 'board-preparation',
      category: 'Board Preparation',
      categorySlug: 'board',
      title: 'Board Preparation',
      shortDescription: 'Rigorous, syllabus-focused preparation for Class 10 & 12 board examinations with structured revision and past-year practice.',
      fullDescription: 'A dedicated preparation programme designed specifically for board examinees. We focus on complete syllabus mastery, answer-writing techniques, time management, and in-depth analysis of previous years’ question papers to ensure top-tier performance in board examinations.',
      targetStudents: 'Students preparing for Class 10 or Class 12 board examinations.',
      classes: 'Class 10 & Class 12',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'],
      duration: 'Targeted Board Session / 10–12 Months',
      batchType: 'Focused Board Batches',
      teachingMode: 'Offline Classroom',
      keyBenefits: [
        'Complete syllabus-focused preparation',
        'Chapter-wise revision and practice',
        'Previous-year question practice',
        'Exam-oriented mock tests',
        'Structured revision before examinations'
      ],
      features: [
        'Model answer writing practice',
        'Timed full-syllabus mock exams',
        'Individual performance diagnostics'
      ],
      outcomes: [
        'Mastery over high-weightage topics and formulas',
        'Proven exam time management and presentation skills',
        'Reduced exam anxiety with high-scoring confidence'
      ],
      eligibility: 'Students enrolled in Class 10 or Class 12',
      assessment: 'Pattern-based mock board exams, answer sheet evaluations, and targeted weak-area remediation.',
      ctaText: 'Enquire About This Course',
      status: 'active'
    },
    {
      id: 'competitive-prep',
      category: 'Competitive Exam Preparation',
      categorySlug: 'competitive',
      title: 'Competitive Exam Preparation',
      shortDescription: 'Advanced problem-solving and conceptual coaching for engineering and science entrance examinations like JEE Main.',
      fullDescription: 'Comprehensive entrance exam coaching tailored for ambitious science students. The course emphasizes deep conceptual understanding, analytical thinking, speed, accuracy, and rigorous problem-solving under real exam conditions.',
      targetStudents: 'Students preparing for competitive entrance examinations.',
      classes: 'Classes 11–12 & Target Aspirants',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '1-Year & 2-Year Integrated Programmes',
      batchType: 'Competitive Fast-Track Batches',
      teachingMode: 'Offline Classroom',
      keyBenefits: [
        'Strong conceptual foundation',
        'Exam-pattern focused practice',
        'Regular mock tests & rank benchmarking',
        'Time-management and problem-solving practice',
        'Detailed performance tracking'
      ],
      features: [
        'Advanced multi-concept problem sets',
        'Simulated timed exam sessions',
        'Formula booklets and shortcut workshops'
      ],
      outcomes: [
        'High-level analytical and critical problem-solving skills',
        'Familiarity with complex, timed competitive formats',
        'Continuous percentile improvement tracking'
      ],
      eligibility: 'Class 11, Class 12, or passed-out students targeting entrance exams',
      assessment: 'Full-length pattern mock tests with detailed question-wise difficulty and time analysis.',
      ctaText: 'Enquire About This Course',
      status: 'active'
    },
    {
      id: 'foundation-courses',
      category: 'Foundation Courses',
      categorySlug: 'foundation',
      title: 'Foundation Courses',
      shortDescription: 'Early-stage concept building designed to develop logical thinking and prepare younger students for future academic demands.',
      fullDescription: 'Our Foundation Courses are crafted for early-stage learners to develop strong mental faculties, logical reasoning, and a genuine interest in core sciences and mathematics. This early groundwork creates a seamless bridge to higher secondary and competitive curricula.',
      targetStudents: 'Students building fundamentals for higher-level academic study.',
      classes: 'Classes 8–10',
      subjects: ['Foundational Mathematics', 'Basic Science', 'Logical Reasoning'],
      duration: 'Academic Year Foundation',
      batchType: 'Interactive Learning Batches',
      teachingMode: 'Offline Classroom',
      keyBenefits: [
        'Strong fundamentals in core subjects',
        'Early concept development & intuition',
        'Logical and analytical thinking practice',
        'Progressive difficulty problem-solving',
        'Preparation for future academic demands'
      ],
      features: [
        'Real-world problem applications',
        'Olympiad and talent search orientation',
        'Interactive visual learning aids'
      ],
      outcomes: [
        'Intuitive grasp of scientific and mathematical principles',
        'Sharpened mental aptitude and reasoning ability',
        'Seamless transition into senior secondary coursework'
      ],
      eligibility: 'Curious students in Classes 8, 9, or 10',
      assessment: 'Concept checkpoint quizzes, monthly diagnostic assessments, and developmental milestone reports.',
      ctaText: 'Enquire About This Course',
      status: 'active'
    },
    {
      id: 'subject-specific',
      category: 'Subject-Specific Coaching',
      categorySlug: 'subject',
      title: 'Subject-Specific Coaching',
      shortDescription: 'Targeted coaching for students needing deep concept clarity, personalized attention, and mastery in a specific subject.',
      fullDescription: 'Focused single-subject modules for students who want to master a specific subject such as Mathematics, Physics, or Chemistry. Designed to address individual learning bottlenecks, eliminate doubts, and boost subject confidence through customized problem practice.',
      targetStudents: 'Students who need focused support in a particular subject.',
      classes: 'Classes 9–12',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
      duration: 'Modular / Flexible Terms',
      batchType: 'Small Group & Individual Focus',
      teachingMode: 'Offline Classroom',
      keyBenefits: [
        'Focused attention on individual subjects',
        'Targeted concept clarification',
        'Personalized doubt-solving support',
        'Topic-wise practice & graded sheets',
        'Performance improvement tracking'
      ],
      features: [
        'Customized pace matching student needs',
        'One-on-one doubt clearing sessions',
        'Topic-wise mastery evaluation'
      ],
      outcomes: [
        'Complete elimination of subject-specific doubts and fear',
        'Significant score enhancement in targeted areas',
        'Independent problem-solving confidence'
      ],
      eligibility: 'Any student seeking focused acceleration in specific subjects',
      assessment: 'Unit-level mastery checks, speed tests, and personalized feedback sessions.',
      ctaText: 'Enquire About This Course',
      status: 'active'
    }
  ];

  /* ------------------------------------------------------------------
     Student data model
     Replace every value below with real, consented student information
     before publishing. See README.md → "Where student data is stored".
     ------------------------------------------------------------------ */
  const students = [
    {
      id: 'student-01',
      name: 'Hirdyarth Gupta',
      image: 'assets/students/student-01.jpg',
      course: 'Class XII — Science',
      year: '2021',
      percentage: '95.6%',
      subjects: {
        'English Core': '95',
        'Mathematics': '95',
        'Physics': '95',
        'Chemistry': '95',
        'Computer Science': '98'
      },
      badge: 'All A1 Grades',
      achievement: 'Scored 95.6% overall with an A1 grade in every subject (CBSE, 2021)',
      college: '',
      quote: 'Dutt Academy helped me strengthen my concepts and stay consistent throughout my Class XII preparation. The regular guidance and practice made a real difference.',
      testimonialTag: 'Class XII — Science | 95.6%',
      isPlaceholderPhoto: false
    },
    {
      id: 'student-02',
      name: 'Satyartha Srivastava',
      image: 'assets/students/student-04.jpg',
      course: 'JEE Main 2026 — B.E./B.Tech',
      year: '2026',
      percentage: '97.25 %ile',
      subjects: {
        'Mathematics': '84.83 %ile',
        'Physics': '99.49 %ile',
        'Chemistry': '93.34 %ile'
      },
      badge: 'AIR 43456',
      achievement: 'AIR 43456 (CRL) with a 97.25 percentile Final NTA Score in JEE Main 2026 Session 2',
      college: '',
      quote: 'The focused preparation and regular practice at Dutt Academy helped me build confidence for JEE Main. The guidance kept me focused on improving every step.',
      testimonialTag: 'JEE Main 2026 — B.E./B.Tech | 97.25 Percentile',
      isPlaceholderPhoto: false
    },
    {
      id: 'student-03',
      name: 'Arul Singh',
      image: 'assets/students/student-03.jpg',
      course: 'Class X',
      year: '2024',
      percentage: '96.2%',
      subjects: {
        'English Lang. & Lit.': '92',
        'Hindi Course B': '95',
        'Mathematics Standard': '95',
        'Science': '97',
        'Social Science': '96',
        'Computer Application': '98'
      },
      badge: 'All A1 Grades',
      achievement: 'Scored 96.2% overall (best of 5) with an A1 grade in every subject (CBSE, 2024)',
      college: '',
      quote: 'Dutt Academy made my Class X preparation more structured and helped me understand difficult concepts clearly. The consistent support gave me confidence in my exams.',
      testimonialTag: 'Class X | 96.2%',
      isPlaceholderPhoto: false
    },
    {
      id: 'student-04',
      name: 'Satyartha Srivastava',
      image: 'assets/students/student-04.jpg',
      course: 'Class XII — Science',
      year: '2025',
      percentage: '94.8%',
      subjects: {
        'English Core': '94',
        'Mathematics': '95',
        'Physics': '94',
        'Chemistry': '97',
        'Physical Education': '94'
      },
      badge: 'All A1 Grades',
      achievement: 'Scored 94.8% overall with an A1 grade in every subject (CBSE Class XII, 2025)',
      college: '',
      quote: 'The guidance and disciplined preparation at Dutt Academy helped me stay focused throughout Class XII. Regular revision and support made my preparation much more confident.',
      testimonialTag: 'Class XII — Science | 94.8%',
      isPlaceholderPhoto: false
    }
  ];

  /* ------------------------------------------------------------------
     initNavigation — sticky navbar background swap on scroll
     ------------------------------------------------------------------ */
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function updateNavbarState() {
      if (window.scrollY > 50) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });
  }

  /* ------------------------------------------------------------------
     initMobileMenu — hamburger toggle + close on link click
     ------------------------------------------------------------------ */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-active');
    }

    function toggleMenu() {
      const isOpen = menu.classList.toggle('is-open');
      menu.setAttribute('aria-hidden', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.classList.toggle('is-active', isOpen);
    }

    toggle.addEventListener('click', toggleMenu);
    menu.querySelectorAll('.mobile-menu__link, .mobile-menu__cta').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ------------------------------------------------------------------
     initScrollEffects — animated counters for the trust strip
     ------------------------------------------------------------------ */
  function initScrollEffects() {
    const counters = document.querySelectorAll('.stats__number[data-count]');
    if (!counters.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';

      if (prefersReducedMotion) {
        el.textContent = target + suffix;
        return;
      }

      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     initRevealAnimations — fade/slide-up on scroll into view
     ------------------------------------------------------------------ */
  function initRevealAnimations() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     getCourseIcon — clean, consistent SVG iconography for courses
     ------------------------------------------------------------------ */
  function getCourseIcon(slug) {
    switch (slug) {
      case 'school':
      case 'school-classes':
        return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';
      case 'board':
      case 'board-preparation':
        return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
      case 'competitive':
      case 'competitive-prep':
        return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>';
      case 'foundation':
      case 'foundation-courses':
        return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>';
      case 'subject':
      case 'subject-specific':
      default:
        return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';
    }
  }

  /* ------------------------------------------------------------------
     renderCourses — build course cards dynamically from courses array
     ------------------------------------------------------------------ */
  let activeCourseFilter = 'all';

  function renderCourses(filter) {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;

    const filtered = (filter && filter !== 'all')
      ? courses.filter(function (c) {
          return c.categorySlug === filter || c.id === filter || c.category.toLowerCase().includes(filter.toLowerCase());
        })
      : courses;

    const markup = filtered.map(function (course) {
      const icon = getCourseIcon(course.categorySlug || course.id);
      const benefits = (course.keyBenefits && course.keyBenefits.length)
        ? course.keyBenefits.slice(0, 3).map(function (b) {
            return '<li><span class="course-card__benefit-check" aria-hidden="true">✓</span><span>' + escapeHtml(b) + '</span></li>';
          }).join('')
        : '';

      const suitableText = course.classes || course.targetStudents || '';
      const suitableMarkup = suitableText
        ? '<div class="course-card__suitable"><span class="course-card__suitable-label">Suitable For</span><span class="course-card__suitable-value">' + escapeHtml(suitableText) + '</span></div>'
        : '';

      return (
        '<article class="course-card reveal is-visible" data-course-id="' + course.id + '">' +
          '<div class="course-card__top">' +
            '<div class="course-card__icon" aria-hidden="true">' + icon + '</div>' +
            '<span class="course-card__category">' + escapeHtml(course.category) + '</span>' +
          '</div>' +
          '<h3 class="course-card__title">' + escapeHtml(course.title) + '</h3>' +
          '<p class="course-card__desc">' + escapeHtml(course.shortDescription) + '</p>' +
          suitableMarkup +
          (benefits ? '<div class="course-card__benefits-wrap"><span class="course-card__benefits-title">Key Benefits</span><ul class="course-card__benefits">' + benefits + '</ul></div>' : '') +
          '<div class="course-card__actions">' +
            '<button type="button" class="course-card__cta" data-open-course-modal="' + course.id + '">View Course &rarr;</button>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    grid.innerHTML = markup;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      grid.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ------------------------------------------------------------------
     initCourseFiltering — category filter bar tabs
     ------------------------------------------------------------------ */
  function initCourseFiltering() {
    const filterBar = document.querySelector('.courses__filter-bar');
    if (!filterBar) return;

    filterBar.addEventListener('click', function (event) {
      const btn = event.target.closest('.course-filter-btn');
      if (!btn) return;

      const filter = btn.getAttribute('data-filter');
      if (filter === activeCourseFilter) return;

      activeCourseFilter = filter;
      filterBar.querySelectorAll('.course-filter-btn').forEach(function (b) {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });

      renderCourses(activeCourseFilter);
    });
  }

  /* ------------------------------------------------------------------
     Course details modal — open / close / populate / enquire (Performance Optimized)
     ------------------------------------------------------------------ */
  let courseModalEls = null;
  let currentOpenCourseId = null;

  function getCourseModalEls() {
    if (!courseModalEls) {
      courseModalEls = {
        overlay: document.getElementById('courseModalOverlay'),
        category: document.getElementById('modalCourseCategory'),
        title: document.getElementById('modalCourseTitle'),
        desc: document.getElementById('modalCourseDesc'),
        facts: document.getElementById('modalCourseFacts'),
        benefitsWrap: document.getElementById('modalCourseBenefitsWrap'),
        benefitsList: document.getElementById('modalCourseBenefits'),
        outcomesWrap: document.getElementById('modalCourseOutcomesWrap'),
        outcomesList: document.getElementById('modalCourseOutcomes'),
        assessmentWrap: document.getElementById('modalCourseAssessmentWrap'),
        assessmentText: document.getElementById('modalCourseAssessment'),
        enquireBtn: document.getElementById('modalCourseEnquireBtn'),
        closeBtn: document.getElementById('courseModalClose')
      };
    }
    return courseModalEls;
  }

  function openCourseModal(courseId) {
    const course = courses.find(function (c) { return c.id === courseId; });
    if (!course) return;

    const els = getCourseModalEls();
    if (!els.overlay) return;

    if (currentOpenCourseId !== courseId) {
      currentOpenCourseId = courseId;

      if (els.category) els.category.textContent = course.category || '';
      if (els.title) els.title.textContent = course.title || '';
      if (els.desc) els.desc.textContent = course.fullDescription || course.shortDescription || '';

      const factItems = [];
      if (course.classes) {
        factItems.push('<div><dt>Suitable For</dt><dd>' + escapeHtml(course.classes) + '</dd></div>');
      } else if (course.targetStudents) {
        factItems.push('<div><dt>Suitable For</dt><dd>' + escapeHtml(course.targetStudents) + '</dd></div>');
      }
      if (course.subjects && course.subjects.length) {
        factItems.push('<div><dt>Subjects</dt><dd>' + escapeHtml(course.subjects.join(', ')) + '</dd></div>');
      }
      if (course.duration) {
        factItems.push('<div><dt>Duration</dt><dd>' + escapeHtml(course.duration) + '</dd></div>');
      }
      if (course.batchType) {
        factItems.push('<div><dt>Batch Type</dt><dd>' + escapeHtml(course.batchType) + '</dd></div>');
      }
      if (course.teachingMode) {
        factItems.push('<div><dt>Teaching Mode</dt><dd>' + escapeHtml(course.teachingMode) + '</dd></div>');
      }
      if (course.eligibility) {
        factItems.push('<div><dt>Eligibility</dt><dd>' + escapeHtml(course.eligibility) + '</dd></div>');
      }

      if (els.facts) {
        if (factItems.length) {
          els.facts.innerHTML = factItems.join('');
          els.facts.hidden = false;
        } else {
          els.facts.innerHTML = '';
          els.facts.hidden = true;
        }
      }

      if (els.benefitsWrap && els.benefitsList) {
        if (course.keyBenefits && course.keyBenefits.length) {
          els.benefitsList.innerHTML = course.keyBenefits.map(function (b) {
            return '<li><span class="course-modal__check" aria-hidden="true">✓</span><span>' + escapeHtml(b) + '</span></li>';
          }).join('');
          els.benefitsWrap.hidden = false;
        } else {
          els.benefitsWrap.hidden = true;
        }
      }

      if (els.outcomesWrap && els.outcomesList) {
        const items = (course.outcomes && course.outcomes.length) ? course.outcomes : (course.features || []);
        if (items.length) {
          els.outcomesList.innerHTML = items.map(function (o) {
            return '<li><span>' + escapeHtml(o) + '</span></li>';
          }).join('');
          els.outcomesWrap.hidden = false;
        } else {
          els.outcomesWrap.hidden = true;
        }
      }

      if (els.assessmentWrap && els.assessmentText) {
        if (course.assessment) {
          els.assessmentText.textContent = course.assessment;
          els.assessmentWrap.hidden = false;
        } else {
          els.assessmentWrap.hidden = true;
        }
      }

      if (els.enquireBtn) {
        els.enquireBtn.setAttribute('data-course-category', course.category || course.title);
      }
    }

    lastFocusedElement = document.activeElement;

    els.overlay.hidden = false;
    document.body.classList.add('modal-open');

    requestAnimationFrame(function () {
      els.overlay.classList.add('is-visible');
      if (els.closeBtn) els.closeBtn.focus();
    });
  }

  function closeCourseModal() {
    const els = getCourseModalEls();
    if (!els.overlay || els.overlay.hidden) return;

    els.overlay.classList.remove('is-visible');
    document.body.classList.remove('modal-open');

    window.setTimeout(function () {
      if (!els.overlay.classList.contains('is-visible')) {
        els.overlay.hidden = true;
      }
    }, 280);

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function handleCourseEnquiry(courseName) {
    closeCourseModal();

    const courseSelect = document.getElementById('course');
    if (courseSelect && courseName) {
      let matched = false;
      for (let i = 0; i < courseSelect.options.length; i++) {
        if (courseSelect.options[i].text.trim().toLowerCase() === courseName.trim().toLowerCase()) {
          courseSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched) {
        for (let i = 0; i < courseSelect.options.length; i++) {
          const opt = courseSelect.options[i].text.toLowerCase();
          const target = courseName.toLowerCase();
          if (opt.includes(target) || target.includes(opt)) {
            courseSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
      }
      courseSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    const studentNameInput = document.getElementById('studentName');
    if (studentNameInput) {
      setTimeout(function () {
        studentNameInput.focus();
      }, 500);
    }
  }

  function initCourseModal() {
    const grid = document.getElementById('coursesGrid');
    const overlay = document.getElementById('courseModalOverlay');
    const closeBtn = document.getElementById('courseModalClose');
    const enquireBtn = document.getElementById('modalCourseEnquireBtn');
    if (!overlay) return;

    if (grid) {
      grid.addEventListener('click', function (event) {
        const trigger = event.target.closest('[data-open-course-modal]');
        if (!trigger) return;
        const courseId = trigger.getAttribute('data-open-course-modal');
        openCourseModal(courseId);
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeCourseModal);

    if (enquireBtn) {
      enquireBtn.addEventListener('click', function () {
        const category = enquireBtn.getAttribute('data-course-category') || '';
        handleCourseEnquiry(category);
      });
    }

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeCourseModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !overlay.hidden) closeCourseModal();
    });
  }

  /* ------------------------------------------------------------------
     renderStudents — build the 5 student cards from the data array
     ------------------------------------------------------------------ */
  function renderStudents() {
    const grid = document.getElementById('studentsGrid');
    if (!grid) return;

    const markup = students.map(function (student, index) {
      return (
        '<article class="student-card reveal" data-student-index="' + index + '">' +
          '<div class="student-card__photo-wrap">' +
            '<span class="student-card__badge">' + student.badge + '</span>' +
            '<img class="student-card__photo" src="' + student.image + '" alt="' + (student.isPlaceholderPhoto ? 'Placeholder photo for ' + student.name : 'Photo of ' + student.name) + '" loading="lazy" width="400" height="500">' +
          '</div>' +
          '<div class="student-card__body">' +
            '<p class="student-card__name">' + student.name + '</p>' +
            '<p class="student-card__stream">' + student.course + '</p>' +
            '<div class="student-card__score-row">' +
              '<span class="student-card__score">' + student.percentage + '</span>' +
              '<span class="student-card__year">Passed Out: ' + student.year + '</span>' +
            '</div>' +
            '<p class="student-card__highlight">' + student.achievement + '</p>' +
            '<button type="button" class="student-card__cta" data-open-modal="' + index + '">View Profile</button>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    grid.innerHTML = markup;

    // Newly injected .reveal cards need to be observed too.
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    grid.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     Student profile modal — open / close / populate (Performance Optimized)
     ------------------------------------------------------------------ */
  let lastFocusedElement = null;
  let studentModalEls = null;
  let currentOpenStudentIndex = -1;

  function getStudentModalEls() {
    if (!studentModalEls) {
      studentModalEls = {
        overlay: document.getElementById('studentModalOverlay'),
        photo: document.getElementById('modalPhoto'),
        name: document.getElementById('modalStudentName'),
        course: document.getElementById('modalCourse'),
        subjectsBody: document.querySelector('#modalSubjects tbody'),
        percentage: document.getElementById('modalPercentage'),
        year: document.getElementById('modalYear'),
        college: document.getElementById('modalCollege'),
        collegeWrap: document.getElementById('modalCollege') ? document.getElementById('modalCollege').closest('div') : null,
        achievement: document.getElementById('modalAchievement'),
        quote: document.getElementById('modalQuote'),
        quoteText: document.getElementById('modalQuoteText'),
        factsList: document.querySelector('.student-modal__facts'),
        closeBtn: document.getElementById('modalClose')
      };
    }
    return studentModalEls;
  }

  function openStudentModal(index) {
    const student = students[index];
    if (!student) return;

    const els = getStudentModalEls();
    if (!els.overlay) return;

    // Only update modal DOM if switching to a different student
    if (currentOpenStudentIndex !== index) {
      currentOpenStudentIndex = index;

      if (els.photo) {
        if (els.photo.getAttribute('src') !== student.image) {
          els.photo.src = student.image;
        }
        els.photo.alt = student.isPlaceholderPhoto
          ? 'Placeholder photo for ' + student.name
          : 'Photo of ' + student.name;
      }
      if (els.name) els.name.textContent = student.name;
      if (els.course) els.course.textContent = student.course;
      if (els.percentage) els.percentage.textContent = student.percentage;
      if (els.year) els.year.textContent = student.year;
      if (els.achievement) els.achievement.textContent = student.achievement;

      if (student.college && els.college) {
        els.college.textContent = student.college;
        if (els.collegeWrap) els.collegeWrap.hidden = false;
      } else if (els.collegeWrap) {
        els.collegeWrap.hidden = true;
      }
      if (els.factsList) {
        els.factsList.classList.toggle('student-modal__facts--two-col', !student.college);
      }

      if (student.quote && els.quote) {
        els.quote.hidden = false;
        if (els.quoteText) els.quoteText.textContent = student.quote;
      } else if (els.quote) {
        els.quote.hidden = true;
      }

      if (els.subjectsBody) {
        let subjectRows = '';
        const keys = Object.keys(student.subjects);
        for (let i = 0; i < keys.length; i++) {
          const sub = keys[i];
          subjectRows += '<tr><td>' + escapeHtml(sub) + '</td><td>' + escapeHtml(student.subjects[sub]) + '</td></tr>';
        }
        els.subjectsBody.innerHTML = subjectRows;
      }
    }

    lastFocusedElement = document.activeElement;

    els.overlay.hidden = false;
    document.body.classList.add('modal-open');

    // Trigger transition on next animation frame without forced synchronous reflow
    requestAnimationFrame(function () {
      els.overlay.classList.add('is-visible');
      if (els.closeBtn) els.closeBtn.focus();
    });
  }

  function closeStudentModal() {
    const els = getStudentModalEls();
    if (!els.overlay || els.overlay.hidden) return;

    els.overlay.classList.remove('is-visible');
    document.body.classList.remove('modal-open');

    window.setTimeout(function () {
      if (!els.overlay.classList.contains('is-visible')) {
        els.overlay.hidden = true;
      }
    }, 280);

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function initStudentModal() {
    const grid = document.getElementById('studentsGrid');
    const overlay = document.getElementById('studentModalOverlay');
    const closeBtn = document.getElementById('modalClose');
    if (!grid || !overlay) return;

    grid.addEventListener('click', function (event) {
      const trigger = event.target.closest('[data-open-modal]');
      if (!trigger) return;
      const index = parseInt(trigger.getAttribute('data-open-modal'), 10);
      openStudentModal(index);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeStudentModal);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeStudentModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !overlay.hidden) closeStudentModal();
    });
  }

  /* ------------------------------------------------------------------
     initContactForm — client-side validation with inline messages
     ------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById('enquiryForm');
    if (!form) return;

    const successMessage = document.getElementById('formSuccess');
    const submitButton = form.querySelector('button[type="submit"]');
    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbyVJwqxWvpvezPArwkoHlNAHKrHg7nyoRa_CYT2aslJJ0hs2o-z-wW3W-VnuFPXKyuPpQ/exec';

    const validators = {
      studentName: function (value) {
        return value.trim().length >= 2 ? '' : 'Please enter the student\u2019s name.';
      },
      phone: function (value) {
        const digits = value.replace(/\D/g, '');
        return digits.length >= 10 ? '' : 'Please enter a valid phone number.';
      },
      studentClass: function (value) {
        return value ? '' : 'Please select a class.';
      },
      course: function (value) {
        return value ? '' : 'Please select a course.';
      }
    };

    function showError(fieldName, message) {
      const field = form.elements[fieldName];
      const errorEl = document.getElementById('err-' + fieldName);
      if (field) field.classList.toggle('is-invalid', Boolean(message));
      if (errorEl) errorEl.textContent = message;
    }

    function validateField(fieldName) {
      const field = form.elements[fieldName];
      if (!field || !validators[fieldName]) return true;
      const message = validators[fieldName](field.value);
      showError(fieldName, message);
      return !message;
    }

    Object.keys(validators).forEach(function (fieldName) {
      const field = form.elements[fieldName];
      if (!field) return;
      field.addEventListener('blur', function () { validateField(fieldName); });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const fieldsToCheck = Object.keys(validators);
      const results = fieldsToCheck.map(validateField);
      const isValid = results.every(Boolean);

      if (!isValid) {
        if (successMessage) successMessage.hidden = true;
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (successMessage) {
        successMessage.hidden = true;
        successMessage.classList.remove('is-error');
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
      }

      const formData = new URLSearchParams();
      ['studentName', 'parentName', 'phone', 'studentClass', 'course', 'message'].forEach(function (fieldName) {
        formData.append(fieldName, form.elements[fieldName].value);
      });

      fetch(appsScriptUrl, {
        method: 'POST',
        body: formData
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Submission failed');
          form.reset();
          fieldsToCheck.forEach(function (fieldName) { showError(fieldName, ''); });
          if (successMessage) {
            successMessage.textContent = 'Thank you — your enquiry has been noted. Our team will reach out shortly.';
            successMessage.hidden = false;
          }
        })
        .catch(function () {
          if (successMessage) {
            successMessage.textContent = 'Something went wrong. Please try again.';
            successMessage.classList.add('is-error');
            successMessage.hidden = false;
          }
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Enquiry';
          }
        });
    });
  }

  /* ------------------------------------------------------------------
     Misc small helpers
     ------------------------------------------------------------------ */
  function initFooterYear() {
    const el = document.getElementById('footerYear');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initMobileMenu();
    initScrollEffects();
    renderCourses('all');
    initCourseFiltering();
    initCourseModal();
    renderStudents();
    initStudentModal();
    initRevealAnimations();
    initContactForm();
    initFooterYear();
  });
})();
