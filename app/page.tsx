'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Gamepad2,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react';

export interface ProjectItem {
  key: string;
  title: string;
  category: 'web' | 'android';
  type: string;
  badge: string;
  platform: string;
  image: string;
  desc: {
    en: string;
    de: string;
  };
  highlights: {
    en: string[];
    de: string[];
  };
  tags: string[];
  url: string;
  featured: boolean;
}

const projects: ProjectItem[] = [
  {
    key: 'mietit',
    title: 'MietIt',
    category: 'web',
    type: 'Product / Marketplace',
    badge: 'Live Web Platform',
    platform: 'Web App',
    image: '/MietIt.png',
    desc: {
      en: 'India-focused subletting and room-sharing platform designed around simple booking, verified listings, and secure payment processing.',
      de: 'Indische Plattform für Untervermietung und Zimmer-Sharing mit einfachem Buchungs-, Verifizierungs- und Auszahlungsprozess.',
    },
    highlights: {
      en: [
        'Built secure multi-step host & tenant verification with Firebase Authentication and OTP-based access.',
        'Developed real-time room discovery with location filters, responsive Next.js UI and Firebase Firestore data.',
        'Integrated Razorpay payments with booking confirmation and automated host payout workflows.',
      ],
      de: [
        'Entwickelte sichere mehrstufige Verifizierung für Mieter & Vermieter mit Firebase Authentication und OTP-Zugriff.',
        'Entwickelte eine Echtzeit-Zimmersuche mit Standortfiltern, responsiver Next.js-Oberfläche und Firebase Firestore.',
        'Integrierte Razorpay-Zahlungen mit Buchungsbestätigung und automatisierten Auszahlungs-Workflows für Vermieter.',
      ],
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Razorpay', 'Tailwind CSS', 'Vercel', 'SEO'],
    url: 'https://mietit.com',
    featured: true,
  },
  {
    key: 'sonichecks',
    title: 'Sonichecks',
    category: 'web',
    type: 'Audio QC SaaS',
    badge: 'Live Audio SaaS',
    platform: 'Web & DSP',
    image: '/sonichecks.png',
    desc: {
      en: 'Deterministic browser-based audio delivery quality control. Local DSP checks LUFS loudness, True Peak clipping, and streaming readiness.',
      de: 'Deterministische, browserbasierte Audio-Qualitätskontrolle. Lokale DSP-Prüfungen für LUFS, True Peak, Clipping und Delivery-Readiness.',
    },
    highlights: {
      en: [
        'Built a zero-upload browser audio engine using WebAudio, Web Workers and custom DSP.',
        'Implemented professional loudness and True Peak analysis based on ITU-R BS.1770 and EBU R128 standards.',
        'Delivered automated PASS/FAIL QC reports with a secure Creem payment flow for Pro users.',
      ],
      de: [
        'Lokale Audio-Dekodierung und DSP-Verarbeitung direkt im Browser ohne Cloud-Upload.',
        'Professionelle Loudness- und True-Peak-Messung nach ITU-R BS.1770 und EBU R128 Standards.',
        'Automatisierte PASS/FAIL QC-Prüfberichte mit sicherem Pro-Checkout.',
      ],
    },
    tags: ['Next.js', 'TypeScript', 'WebAudio API', 'Audio DSP', 'Web Workers', 'ITU-R BS.1770'],
    url: 'https://sonichecks.com',
    featured: true,
  },
  {
    key: 'leaftobean',
    title: 'Leaf to Bean',
    category: 'web',
    type: 'Coffee Discovery & Aggregator',
    badge: 'Live Aggregator',
    platform: 'Web Platform',
    image: '/leaftobean.jpg',
    desc: {
      en: 'Specialty coffee price comparison and delivered-basket optimization, built around price-per-100g metrics and smart affiliate routing.',
      de: 'Preisvergleich für Specialty Coffee mit optimiertem Warenkorb, Preis pro 100 g und Affiliate-Weiterleitung.',
    },
    highlights: {
      en: [
        'Built a price-normalization engine to compare coffee from different roasters on a consistent per-100g basis.',
        'Optimized the delivered basket cost by combining product prices, shipping fees and free-shipping thresholds.',
        'Built a scalable PostgreSQL data pipeline with Prisma and Supabase for products, variants and price history.',
      ],
      de: [
        'Entwickelte eine Preis-Normalisierungslogik zum fairen Vergleich verschiedener Röster auf Basis von 100 g.',
        'Optimierte die Gesamtkosten des Warenkorbs durch Kombination von Produktpreisen, Versandkosten und Freigrenzen.',
        'Entwickelte eine skalierbare PostgreSQL-Datenpipeline mit Prisma und Supabase für Produkte, Varianten und Preishistorien.',
      ],
    },
    tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'Supabase', 'PostgreSQL', 'Affiliate APIs'],
    url: 'https://beanfilter.vercel.app/',
    featured: true,
  },
  {
    key: 'infinitymerge',
    title: 'Infinity Merge 2048 (Game)',
    category: 'android',
    type: 'Android Game / Puzzle',
    badge: 'Google Play Store',
    platform: 'Android App',
    image: '/2048.png',
    desc: {
      en: 'Minimalist puzzle game featuring dynamic number and tile merging mechanics, progressive difficulty, and responsive 60fps animations.',
      de: 'Minimalistisches Puzzlespiel mit dynamischer Zahlen- und Kachel-Zusammenführungsmechanik, ansteigendem Schwierigkeitsgrad und flüssigen 60fps-Animationen.',
    },
    highlights: {
      en: [
        'Built custom puzzle-grid logic with reactive state management for the core game engine.',
        'Created smooth drag-and-merge interactions with responsive UI animations.',
        'Added Firebase-powered global rankings, score persistence, statistics and Google Play integration.',
      ],
      de: [
        'Entwickelte eine eigene Puzzle-Grid-Logik mit reaktivem State Management für die Game-Engine.',
        'Entwickelte flüssige Drag-and-Merge-Interaktionen mit responsiven UI-Animationen.',
        'Implementierte globale Rankings mit Firebase sowie Highscore-Speicherung, Statistiken und Google-Play-Integration.',
      ],
    },
    tags: ['Kotlin', 'Android SDK', 'Firebase', 'Game Architecture', 'UI Animations', 'Google Play'],
    url: 'https://play.google.com/store/apps/details?id=com.balaji.infinitymerge',
    featured: false,
  },
  {
    key: 'smart-converter',
    title: 'Smart Unit Converter',
    category: 'android',
    type: 'Android Utility App',
    badge: 'Google Play Store',
    platform: 'Android App',
    image: '/Unitconverter.png',
    desc: {
      en: 'High-accuracy multi-unit and currency calculation utility engineered with offline capability, clean Material UI, and robust edge-case validation.',
      de: 'Präziser Mehrfach-Einheiten- und Währungsumrechner mit Offline-Funktionalität, klarem Material Design und robuster Eingabevalidierung.',
    },
    highlights: {
      en: [
        'Built a simple Android unit converter to explore mobile app development.',
        'Implemented accurate unit conversions with clean input handling and validation.',
        'Designed a responsive Material UI with a focus on simplicity and usability.',
      ],
      de: [
        'Entwickelte einen einfachen Android-Einheitenumrechner als Einstieg in die App-Entwicklung.',
        'Implementierte präzise Einheitenumrechnungen mit sauberer Eingabeverarbeitung und Validierung.',
        'Entwickelte eine responsive Material-Oberfläche mit Fokus auf Einfachheit und Benutzerfreundlichkeit.',
      ],
    },
    tags: ['Android SDK', 'Kotlin', 'Material Design', 'Edge-Case QC', 'Google Play'],
    url: 'https://play.google.com/store/apps/details?id=com.balaji.smart_converter',
    featured: false,
  },
];

const copy = {
  en: {
    nav: ['About', 'Experience', 'Projects', 'Skills', 'Contact'],
    eyebrow:
      'SOFTWARE TEST ENGINEER · AUTOMATION · PRODUCT BUILDER',
    hero:
      'I break software, automate the boring stuff, and chase the next big idea in tech',
    sub:
      'Software Test Engineer with 3+ years of testing & automation experience, automotive validation exposure, and a growing portfolio of products built from scratch.',
    cta: 'Explore my work',
    cv: 'Download CV',
    status: 'Open to meaningful engineering opportunities',
    aboutTitle: 'Engineering mindset. Builder energy.',
    about:
      'My work sits at the intersection of software quality, automation and product thinking. I enjoy turning messy requirements into repeatable tests, useful tools and polished products.',
    recruiter: 'For recruiters',
    recruiterText:
      'Looking for someone who can test deeply, automate intelligently and understand the product behind the test? Let’s talk.',
    experienceTitle: 'Experience that ships quality',
    projectsTitle: 'Things I actually built',
    projectsSub:
      '5 published products and platforms — full-stack web platforms, audio DSP tooling, and live Android apps on Google Play.',
    skillsTitle: 'Tools I work with',
    contactTitle: 'Let’s build something dependable.',
    contactText:
      'If the role needs a strong QA foundation with an engineering mindset, I’d be happy to connect.',
    location: 'Böblingen / Sindelfingen, Germany',
    email: 'balajishankar4444@gmail.com',
    footer: 'Designed & built with intent.',
  },

  de: {
    nav: ['Über mich', 'Erfahrung', 'Projekte', 'Skills', 'Kontakt'],
    eyebrow:
      'SOFTWARE TEST ENGINEER · AUTOMATISIERUNG · PRODUCT BUILDER',
    hero:
      'Ich entwickle zuverlässige Software – und Systeme, die beweisen, dass sie funktioniert.',
    sub:
      'Software Test Engineer mit mehr als 2 Jahren Erfahrung in Testing und Testautomatisierung, Erfahrung in der Automotive-Validierung und eigenen Softwareprodukten.',
    cta: 'Projekte ansehen',
    cv: 'Lebenslauf herunterladen',
    status: 'Offen für interessante Engineering-Möglichkeiten',
    aboutTitle: 'Engineering-Mindset. Builder-Energie.',
    about:
      'Meine Arbeit verbindet Softwarequalität, Automatisierung und Produktdenken. Ich verwandle Anforderungen gerne in reproduzierbare Tests, nützliche Tools und hochwertige Produkte.',
    recruiter: 'Für Recruiter',
    recruiterText:
      'Sie suchen jemanden, der tief testet, sinnvoll automatisiert und das Produkt hinter dem Test versteht? Sprechen wir.',
    experienceTitle: 'Erfahrung für echte Qualität',
    projectsTitle: 'Produkte, die ich gebaut habe',
    projectsSub:
      '5 veröffentlichte Produkte – Full-Stack-Webanwendungen, Audio-DSP-Software und Live-Android-Apps im Google Play Store.',
    skillsTitle: 'Technologien & Tools',
    contactTitle: 'Lassen Sie uns etwas Zuverlässiges bauen.',
    contactText:
      'Wenn die Rolle eine starke QA-Basis mit Engineering-Mindset braucht, freue ich mich auf den Austausch.',
    location: 'Böblingen / Sindelfingen, Deutschland',
    email: 'balajishankar4444@gmail.com',
    footer: 'Mit Anspruch entwickelt.',
  },
};

const skills: [string, string[]][] = [
  [
    'Testing & Automation',
    [
      'Selenium',
      'Appium',
      'TestNG',
      'Python',
      'Jenkins',
      'Jira',
      'CI/CD',
      'Docker',
      'Cucumber',
      'Zephyr',
    ],
  ],
  [
    'Automotive',
    ['UDS', 'DoIP', 'DTS Monaco', 'OTX Studio', 'CAN', 'LIN'],
  ],
  [
    'Programming',
    ['Python', 'Java', 'SQL', 'Bash'],
  ],
  [
    'Tools',
    ['Linux', 'Git', 'OpenCV', 'Raspberry Pi', 'Arduino'],
  ],
  [
    'AI',
    ['Google Antigravity', 'Claude', 'GPT-5.6 API', 'GPT-6 Astra'],
  ],
];

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [menu, setMenu] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [projectFilter, setProjectFilter] = useState<'all' | 'web' | 'android'>('all');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  };

  const t = copy[lang];

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return projects;
    return projects.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -300]
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const nav = t.nav;
  const navIds = [
    'about',
    'experience',
    'projects',
    'skills',
    'contact',
  ];

  const activeYear = useMemo(
    () => new Date().getFullYear(),
    []
  );

  return (
    <main className="site-shell">
      <motion.div
        className="progress"
        style={{ scaleX }}
      />

      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      <motion.div
        className="ambient-orb orb-a"
        style={{ y: orbY }}
      />

      <div className="ambient-orb orb-b" />

      <div className="background-grid" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand">
            <span className="brand-mark">
              <Image
                src="/photo.png"
                alt="Balaji Shankar"
                width={34}
                height={34}
                className="brand-photo"
                priority
              />
            </span>

            <span className="brand-name">
              Balaji<span>.</span>
            </span>
          </a>

          <div className="desktop-nav">
            {nav.map((item, index) => (
              <a
                key={item}
                href={`#${navIds[index]}`}
              >
                <span className="nav-number">
                  0{index + 1}
                </span>

                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              className="lang"
              onClick={() =>
                setLang(lang === 'en' ? 'de' : 'en')
              }
            >
              <Globe2 size={15} />
              {lang.toUpperCase()}
            </button>

            <a
              className="hire"
              href="#contact"
            >
              {lang === 'en' ? 'Let’s connect' : 'Kontakt'}

              <ArrowUpRight size={15} />
            </a>

            <button
              className="menu-btn"
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="mobile-menu"
            >
              {nav.map((item, index) => (
                <a
                  key={item}
                  href={`#${navIds[index]}`}
                  onClick={() => setMenu(false)}
                >
                  <span>0{index + 1}</span>
                  {item}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}

      <section id="top" className="hero container">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="eyebrow"
            >
              <span className="pulse" />
              {t.eyebrow}
            </motion.div>

            <motion.div
              className="hero-kicker"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
            >
              QA / AUTOMATION / AUTOMOTIVE
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
              }}
            >
              {t.hero.split(' ').map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={
                    index > 4
                      ? 'accent-word'
                      : ''
                  }
                >
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.18,
              }}
              className="hero-sub"
            >
              {t.sub}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.28,
              }}
              className="hero-actions"
            >
              <a
                className="btn primary"
                href="#projects"
              >
                {t.cta}
                <ArrowDownRight size={18} />
              </a>

              <a
                className="btn secondary"
                href="/Balaji-Shankar-CV.pdf"
                download
              >
                {t.cv}
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

            <div className="availability">
              <span />
              {t.status}
            </div>

            <div className="hero-meta">
              <div>
                <small>BASED IN</small>
                <strong>Germany</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>Quality + Automation</strong>
              </div>

              <div>
                <small>EXPERIENCE</small>
                <strong>3+ Years</strong>
              </div>
            </div>
          </div>

          {/* HERO CARD */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="hero-card-wrap"
          >
            <motion.div
              className="hero-card"
              whileHover={{
                rotateX: 2,
                rotateY: -2,
              }}
            >
              <div className="card-glow" />

              <div className="scanline" />

              <div className="terminal-top">
                <div className="terminal-left">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                </div>

                <span>
                  portfolio.system
                </span>

                <span>
                  01 / 05
                </span>
              </div>

              <div className="profile-panel">
                <div className="profile-top">
                  <div className="profile-avatar">
                    <Image
                      src="/photo.png"
                      alt="Balaji Shankar"
                      width={72}
                      height={72}
                      className="profile-photo"
                      priority
                    />
                  </div>

                  <div>
                    <span className="profile-status">
                      AVAILABLE
                    </span>

                    <h3>
                      Balaji Shankar
                    </h3>

                    <p>
                      Software Test Engineer
                    </p>
                  </div>
                </div>

                <div className="profile-divider" />

                <div className="code-lines">
                  <p>
                    <i>01</i>
                    <b>const</b>{' '}
                    engineer ={' '}
                    <em>
                      &quot;Balaji Shankar&quot;
                    </em>
                    ;
                  </p>

                  <p>
                    <i>02</i>
                    <b>const</b>{' '}
                    focus = [
                  </p>

                  <p>
                    <i>03</i>
                    &nbsp;&nbsp;
                    <em>&quot;quality&quot;</em>,
                    {' '}
                    <em>
                      &quot;automation&quot;
                    </em>
                    ,
                  </p>

                  <p>
                    <i>04</i>
                    &nbsp;&nbsp;
                    <em>
                      &quot;validation&quot;
                    </em>
                    ,{' '}
                    <em>
                      &quot;products&quot;
                    </em>
                  </p>

                  <p>
                    <i>05</i>];
                  </p>

                  <p>
                    <i>06</i>
                  </p>

                  <p>
                    <i>07</i>
                    <b>return</b>{' '}
                    <span className="code-pill">
                      READY_TO_BUILD
                    </span>
                    ;
                  </p>
                </div>
              </div>

              <div className="hero-card-bottom">
                <div>
                  <small>BASE</small>
                  <strong>Germany</strong>
                </div>

                <div>
                  <small>STACK</small>
                  <strong>
                    Python · Next.js
                  </strong>
                </div>

                <div>
                  <small>MODE</small>
                  <strong>
                    Ship + Verify
                  </strong>
                </div>
              </div>
            </motion.div>

            <div className="floating-badge badge-two">
              <Zap size={15} />
              AUTOMATION
            </div>
          </motion.div>
        </div>

        <div className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>
      </section>

      {/* TRUST STRIP */}

      <section className="trust-strip">
        <div className="container trust-inner">
          <strong>ADAS & SOFTWARE TESTING</strong>

          <div />

          <strong>TEST AUTOMATION & VALIDATION</strong>

          <div />

          <strong>Automobile, Web, Mobile</strong>

          <div />

          <span>GERMANY</span>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="section container"
      >
        <div className="two-col">
          <div>
            <SectionLabel>
              01 / {t.nav[0]}
            </SectionLabel>

            <h2>
              {t.aboutTitle}
            </h2>
          </div>

          <div className="about-copy">
            <p>
              {t.about}
            </p>

            <div className="stats">
              <div>
                <strong>3+</strong>
                <span>Years testing</span>
              </div>

              <div>
                <strong>5</strong>
                <span>
                  Products / projects
                </span>
              </div>

              <div>
                <strong>4</strong>
                <span>
                  Core skill areas
                </span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ y: -6 }}
          className="recruiter-card"
        >
          <div className="recruiter-icon">
            <Sparkles size={22} />
          </div>

          <div className="recruiter-content">
            <small>{t.recruiter}</small>

            <h3>
              {t.recruiterText}
            </h3>
          </div>

          <a href="#contact">
            <ArrowUpRight />
          </a>
        </motion.div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section dark-section"
      >
        <div className="container">
          <SectionLabel>
            02 / {t.nav[1]}
          </SectionLabel>

          <div className="section-heading-row">
            <h2>
              {t.experienceTitle}
            </h2>

            <span className="section-index">
              02
            </span>
          </div>

          <div className="timeline">
            <Experience
              date="Jan 2026 — Present"
              company="Mercedes-Benz AG"
              role="Working Student — Software / ADAS Test Engineer"
              location="Sindelfingen, Germany"
              bullets={[
                'Assisting with software validation and testing activities for ADAS and automotive systems.',
                'Executing regression tests, defect analysis and log evaluation within Linux environments.',
                'Supporting automation and reporting tasks using Python and Bash.',
                'Collaborating with cross-functional teams in agile development environments.',
              ]}
              current
            />

            <Experience
              date="Jul 2021 — Sep 2023"
              company="Tata Consultancy Services (TCS)"
              role="QA System Engineer"
              location="India"
              bullets={[
                'Conducted software, system and regression testing for Android and iOS applications.',
                'Developed and maintained automation scripts using Python, Selenium, Appium and TestNG.',
                'Worked within Linux, Git, Jenkins and CI/CD environments.',
                'Performed defect logging, root cause analysis and debugging support.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* VALUE */}

      <section className="section container value-section">
        <SectionLabel>
          ENGINEERING VALUE
        </SectionLabel>

        <div className="value-heading">
          <h2>
            More than testing.
            <br />
            <span>Engineering confidence.</span>
          </h2>

          <p>
            I approach quality from both sides:
            understanding how software should work
            and finding where it can fail.
          </p>
        </div>

        <div className="value-grid">
          <ValueCard
            number="01"
            title="Test Automation"
            text="Build repeatable, maintainable automation instead of relying on manual repetition."
            icon={<Code2 />}
          />

          <ValueCard
            number="02"
            title="Automotive Validation"
            text="Experience working around automotive software, ADAS validation and structured testing environments."
            icon={<Zap />}
          />

          <ValueCard
            number="03"
            title="Quality Engineering"
            text="Think beyond individual test cases and understand the system, risks and user impact."
            icon={<CheckCircle2 />}
          />

          <ValueCard
            number="04"
            title="Product Thinking"
            text="Build products independently and understand the engineering decisions behind the software."
            icon={<Layers3 />}
          />
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section container"
      >
        <SectionLabel>
          03 / {t.nav[2]}
        </SectionLabel>

        <div className="section-head">
          <div>
            <h2>
              {t.projectsTitle}
            </h2>

            <p>
              {t.projectsSub}
            </p>
          </div>

          <div className="project-head-meta">
            <span className="project-count">
              05 PUBLISHED BUILDS
            </span>
          </div>
        </div>

        <div className="project-filters">
          <button
            type="button"
            className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            <Layers3 size={13} />
            {lang === 'en' ? 'All Builds' : 'Alle Projekte'}
            <span className="filter-badge">{projects.length}</span>
          </button>

          <button
            type="button"
            className={`filter-btn ${projectFilter === 'web' ? 'active' : ''}`}
            onClick={() => setProjectFilter('web')}
          >
            <Globe2 size={13} />
            {lang === 'en' ? 'Web Platforms & SaaS' : 'Web & SaaS'}
            <span className="filter-badge">
              {projects.filter((p) => p.category === 'web').length}
            </span>
          </button>

          <button
            type="button"
            className={`filter-btn ${projectFilter === 'android' ? 'active' : ''}`}
            onClick={() => setProjectFilter('android')}
          >
            <Smartphone size={13} />
            {lang === 'en' ? 'Android Google Play' : 'Android Apps'}
            <span className="filter-badge">
              {projects.filter((p) => p.category === 'android').length}
            </span>
          </button>
        </div>

        <motion.div
          layout
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.key}
                p={project}
                i={index}
                lang={lang}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section container"
      >
        <SectionLabel>
          04 / {t.nav[3]}
        </SectionLabel>

        <div className="section-heading-row">
          <h2>
            {t.skillsTitle}
          </h2>

          <span className="section-index">
            04
          </span>
        </div>

        <div className="skills-grid">
          {skills.map(([title, list], index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="skill-card"
              key={title}
            >
              <div className="skill-top">
                <div className="skill-index">
                  0{index + 1}
                </div>

                <ArrowUpRight size={18} />
              </div>

              <h3>{title}</h3>

              <div className="chips">
                {(list as string[]).map(
                  (item) => (
                    <span key={item}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact-section"
      >
        <div className="contact-noise" />

        <div className="container contact-inner">
          <SectionLabel>
            05 / {t.nav[4]}
          </SectionLabel>

          <div className="contact-content">
            <div>
              <span className="contact-eyebrow">
                AVAILABLE FOR THE RIGHT OPPORTUNITY
              </span>

              <h2>
                {t.contactTitle}
              </h2>

              <p>
                {t.contactText}
              </p>
            </div>

            <div className="contact-card">
              <a
                href="mailto:balajishankar4444@gmail.com"
                className="contact-link"
              >
                <Mail />

                <div>
                  <small>EMAIL</small>
                  <strong>
                    {t.email}
                  </strong>
                </div>

                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/Balajishankar4444"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Github />

                <div>
                  <small>GITHUB</small>
                  <strong>
                    github.com/Balajishankar4444
                  </strong>
                </div>

                <ArrowUpRight />
              </a>

              <div className="contact-link">
                <MapPin />

                <div>
                  <small>LOCATION</small>
                  <strong>
                    {t.location}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <a
            href="mailto:balajishankar4444@gmail.com"
            className="big-contact-button"
          >
            START A CONVERSATION
            <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container footer-inner">
          <span>
            © {activeYear} Balaji Shankar
          </span>

          <span>
            {t.footer}
          </span>

          <span>
            EN / DE
          </span>
        </div>
      </footer>
    </main>
  );
}

function Experience({
  date,
  company,
  role,
  location,
  bullets,
  current = false,
}: {
  date: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  current?: boolean;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="experience"
    >
      <div className="timeline-dot">
        {current && <span />}
      </div>

      <div className="experience-date">
        {date}
      </div>

      <div className="experience-main">
        <div className="experience-company">
          <h3>{company}</h3>

          {current && (
            <span>CURRENT</span>
          )}
        </div>

        <strong>{role}</strong>

        <small>{location}</small>

        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>
              <CheckCircle2 size={15} />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ValueCard({
  number,
  title,
  text,
  icon,
}: {
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="value-card"
    >
      <div className="value-card-top">
        <span>{number}</span>
        <div>{icon}</div>
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="value-line" />
    </motion.div>
  );
}

const SONIC_WAVE_HEIGHTS = [
  34, 44, 37, 17, 30, 43, 39, 21, 26, 42, 42, 25, 22, 40, 43, 29, 18, 38, 44,
  33, 13, 35, 44, 36,
];

function ProjectCard({
  p,
  i,
  lang,
}: {
  p: ProjectItem;
  i: number;
  lang: 'en' | 'de';
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.35, delay: i * 0.05 }}
      whileHover={{ y: -6 }}
      className={`project-card ${p.category === 'android' ? 'android-card' : ''}`}
    >
      <div className="project-top">
        <div className="project-top-left">
          <span className="project-no">0{i + 1}</span>
          <span className="project-category-pill">
            {p.category === 'android' ? (
              <>
                <Smartphone size={12} />
                <span>Android App</span>
              </>
            ) : (
              <>
                <Globe2 size={12} />
                <span>Web Platform</span>
              </>
            )}
          </span>
        </div>

        <div className="project-status-badge">
          <span className="live-dot" />
          <span>{p.badge}</span>
        </div>
      </div>

      <div className={`project-art art-${p.key}`}>
        <div className="art-grid" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />

        <div className="art-core">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.title}
              width={74}
              height={74}
              className="art-core-img"
            />
          ) : p.key === 'sonichecks' ? (
            <Zap />
          ) : p.key === 'mietit' ? (
            <Layers3 />
          ) : p.key === 'leaftobean' ? (
            <Sparkles />
          ) : p.key === 'infinitymerge' ? (
            <Gamepad2 />
          ) : (
            <SlidersHorizontal />
          )}
        </div>

        {/* MIETIT ART HUD */}
        {p.key === 'mietit' && (
          <div className="project-hud-widget mietit-hud">
            <div className="hud-chip">
              <CheckCircle2 size={12} />
              <span>Verified Sublet</span>
            </div>
            <div className="hud-stat-row">
              <strong>₹18,500<span>/mo</span></strong>
              <small>Instant Book</small>
            </div>
            <div className="hud-bar-wrap">
              <div className="hud-bar-fill" style={{ width: '85%' }} />
            </div>
          </div>
        )}

        {/* SONICHECKS ART HUD */}
        {p.key === 'sonichecks' && (
          <div className="project-hud-widget sonic-hud">
            <div className="dsp-meters">
              <span>-14.0 LUFS</span>
              <span>0.0 dBTP</span>
              <span className="dsp-pass">PASSED</span>
            </div>
            <div className="mini-wave">
              {SONIC_WAVE_HEIGHTS.map((height, index) => (
                <span
                  key={index}
                  style={{
                    height: `${height}px`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* LEAF TO BEAN ART HUD */}
        {p.key === 'leaftobean' && (
          <div className="project-hud-widget coffee-hud">
            <div className="coffee-metric">
              <small>SCA SCORE</small>
              <strong>88.5 PTS</strong>
            </div>
            <div className="coffee-metric">
              <small>OPTIMIZED BASKET</small>
              <strong>₹380 / 100g</strong>
            </div>
            <div className="coffee-badge">
              <span>Save 18%</span>
            </div>
          </div>
        )}

        {/* INFINITY MERGE ART HUD */}
        {p.key === 'infinitymerge' && (
          <div className="project-hud-widget merge-hud">
            <div className="merge-tiles">
              <span className="tile tile-2">64</span>
              <span className="tile tile-4">128</span>
              <span className="tile tile-8">512</span>
              <span className="tile tile-16">1024</span>
              <span className="tile tile-inf">∞</span>
            </div>
            <div className="merge-meta">
              <span>60 FPS PUZZLE</span>
              <span>SCORE 142k+</span>
            </div>
          </div>
        )}

        {/* SMART CONVERTER ART HUD */}
        {p.key === 'smart-converter' && (
          <div className="project-hud-widget converter-hud">
            <div className="calc-row">
              <span className="calc-from">120.00 km/h</span>
              <span className="calc-arrow">⇄</span>
              <span className="calc-to">74.56 mph</span>
            </div>
            <div className="calc-row">
              <span className="calc-from">€100.00 EUR</span>
              <span className="calc-arrow">⇄</span>
              <span className="calc-to">$108.50 USD</span>
            </div>
            <div className="calc-status">
              <span>15+ UNITS</span>
              <span>100% OFFLINE</span>
            </div>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <span className="project-sub-type">{p.type}</span>
            <h3>{p.title}</h3>
          </div>

          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="project-link-icon"
            aria-label={`Open ${p.title}`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p>{p.desc[lang]}</p>

        {/* ENGINEERED HIGHLIGHTS */}
        <div className="project-highlights">
          <span className="highlights-label">
            {lang === 'en' ? 'KEY CAPABILITIES & ARCHITECTURE:' : 'HIGHLIGHTS & FEATURES:'}
          </span>
          <ul>
            {p.highlights[lang].map((highlight: string, hIdx: number) => (
              <li key={hIdx}>
                <CheckCircle2 size={13} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TECH STACK TAGS */}
        <div className="project-tags">
          {p.tags.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <div className="project-footer-action">
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`project-cta-btn ${p.category === 'android' ? 'play-btn' : ''}`}
          >
            {p.category === 'android' ? (
              <>
                <Smartphone size={15} />
                <span>{lang === 'en' ? 'Get on Google Play' : 'Im Play Store ansehen'}</span>
                <ArrowRight size={14} />
              </>
            ) : (
              <>
                <Globe2 size={15} />
                <span>{lang === 'en' ? 'Open Live Platform' : 'Plattform öffnen'}</span>
                <ExternalLink size={14} />
              </>
            )}
          </a>
        </div>
      </div>
    </motion.div>
  );
}