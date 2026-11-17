import React, { useEffect, useRef, useState } from 'react';
import {
  CURRICULO_URL,
  LINKEDIN_URL,
  PROJECTS,
  ProjectCaseData,
  ProjectId,
  ROTATING_WORDS,
} from './data/cases';

// Desktop 1440px stack slot geometries (from Figma node 510:365)
const SLOTS_1440 = [
  { x: 268, y: 232, width: 440, height: 480 }, // Slot 0 (Selected / Front)
  { x: 205, y: 248, width: 408, height: 448 }, // Slot 1
  { x: 153, y: 264, width: 376, height: 416 }, // Slot 2
  { x: 96, y: 280, width: 344, height: 384 },  // Slot 3
  { x: 40, y: 296, width: 312, height: 352 },  // Slot 4
];

// Desktop Reduzido 1280px stack slot geometries (from Figma node 720:2495)
const SLOTS_1280 = [
  { x: 238.22, y: 206.22, width: 391.11, height: 426.67 },
  { x: 182.22, y: 220.44, width: 362.67, height: 398.22 },
  { x: 136.0, y: 234.67, width: 334.22, height: 369.78 },
  { x: 85.33, y: 248.89, width: 305.78, height: 341.33 },
  { x: 35.55, y: 263.11, width: 277.33, height: 312.89 },
];

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

function useViewportMode(): 'desktop-1440' | 'desktop-1280' | 'tablet' | 'mobile' {
  const getMode = () => {
    if (typeof window === 'undefined') return 'desktop-1440';
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    if (w < 1440) return 'desktop-1280';
    return 'desktop-1440';
  };

  const [mode, setMode] = useState<'desktop-1440' | 'desktop-1280' | 'tablet' | 'mobile'>(getMode);

  useEffect(() => {
    const onResize = () => setMode(getMode());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return mode;
}

interface CardArtworkProps {
  project: ProjectCaseData;
  scale: number;
  isFrontCard: boolean;
  onOpenCase: (projectId: ProjectId, triggerEl: HTMLElement | null) => void;
}

function CardArtwork({ project, scale, isFrontCard, onOpenCase }: CardArtworkProps) {
  const handleOpenClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpenCase(project.id, e.currentTarget);
  };

  if (project.id === 'defensoria-publica') {
    return (
      <div
        className="card-art-canvas card-theme-dpu"
        style={{ transform: `scale(${scale})` }}
        data-node-id="555:511"
      >
        <p className="card-index-badge" data-node-id="555:513">
          {project.indexLabel}
        </p>
        <img
          src="/assets/dpu-cover.png"
          alt="Logo Defensoria Pública da União"
          className="card-dpu-img"
          data-node-id="555:516"
        />
        <button
          type="button"
          className="card-open-case-btn"
          onClick={handleOpenClick}
          tabIndex={isFrontCard ? 0 : -1}
          aria-label={`Ver estudo de caso: ${project.shortTitle}`}
          data-node-id="555:514"
        >
          <span className="open-case-label">Ver estudo de caso</span>
        </button>
      </div>
    );
  }

  if (project.id === 'gui-reinke') {
    return (
      <div
        className="card-art-canvas card-theme-gui"
        style={{ transform: `scale(${scale})` }}
        data-node-id="555:517"
      >
        <p className="card-index-badge" data-node-id="555:519">
          {project.indexLabel}
        </p>
        <img
          src="/assets/gui-reinke-logo-card.svg"
          alt="Logo Gui Reinke Vôlei"
          className="card-gui-img"
          data-node-id="555:522"
        />
        <button
          type="button"
          className="card-open-case-btn"
          onClick={handleOpenClick}
          tabIndex={isFrontCard ? 0 : -1}
          aria-label={`Ver estudo de caso: ${project.shortTitle}`}
          data-node-id="555:520"
        >
          <span className="open-case-label">Ver estudo de caso</span>
        </button>
      </div>
    );
  }

  if (project.id === 'sib-tabuleiro') {
    return (
      <div
        className="card-art-canvas card-theme-sib"
        style={{ transform: `scale(${scale})` }}
        data-node-id="555:536"
      >
        <p className="card-index-badge" data-node-id="555:538">
          {project.indexLabel}
        </p>
        <img
          src="/assets/sib-logo.png"
          alt="Logo SIB Tabuleiro"
          className="card-sib-img"
          data-node-id="555:541"
        />
        <button
          type="button"
          className="card-open-case-btn"
          onClick={handleOpenClick}
          tabIndex={isFrontCard ? 0 : -1}
          aria-label={`Ver estudo de caso: ${project.shortTitle}`}
          data-node-id="555:539"
        >
          <span className="open-case-label">Ver estudo de caso</span>
        </button>
      </div>
    );
  }

  if (project.id === 'nova-cidade') {
    return (
      <div
        className="card-art-canvas card-theme-nc"
        style={{ transform: `scale(${scale})` }}
        data-node-id="555:542"
      >
        <p className="card-index-badge" data-node-id="555:544">
          {project.indexLabel}
        </p>
        <img
          src="/assets/nova-cidade-logo.png"
          alt="Logo Igreja Batista Nova Cidade"
          className="card-nc-img"
          data-node-id="555:547"
        />
        <button
          type="button"
          className="card-open-case-btn"
          onClick={handleOpenClick}
          tabIndex={isFrontCard ? 0 : -1}
          aria-label={`Ver estudo de caso: ${project.shortTitle}`}
          data-node-id="555:545"
        >
          <span className="open-case-label">Ver estudo de caso</span>
        </button>
      </div>
    );
  }

  // Este Portfólio (597:1204)
  return (
    <div
      className="card-art-canvas card-theme-portfolio"
      style={{ transform: `scale(${scale})` }}
      data-node-id="597:1204"
    >
      <p className="card-index-badge" data-node-id="597:1206">
        {project.indexLabel}
      </p>
      <div className="card-portfolio-title" data-node-id="597:1210">
        <p>KRIS</p>
        <p>DESIGN</p>
      </div>
      <p className="card-portfolio-subtitle" data-node-id="597:1211">
        PORTFÓLIO · UX/UI · SISTEMAS
      </p>
      <div className="card-portfolio-motif motif-1" data-node-id="597:1212" />
      <div className="card-portfolio-motif motif-2" data-node-id="597:1213" />
      <div className="card-portfolio-motif motif-3" data-node-id="597:1214" />
      <button
        type="button"
        className="card-open-case-btn"
        onClick={handleOpenClick}
        tabIndex={isFrontCard ? 0 : -1}
        aria-label={`Ver estudo de caso: ${project.shortTitle}`}
        data-node-id="597:1207"
      >
        <span className="open-case-label">Ver estudo de caso</span>
      </button>
    </div>
  );
}

interface CaseModalProps {
  caseData: ProjectCaseData;
  onClose: () => void;
}

function CaseModal({ caseData, onClose }: CaseModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const scrollToSection = (targetId: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const target = container.querySelector<HTMLElement>(`#${targetId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderBanner = () => {
    if (caseData.bannerType === 'dpu') {
      return (
        <div className="case-banner banner-dpu" data-node-id="616:1913">
          <img
            src="/assets/dpu-cover.png"
            alt=""
            className="case-banner-dpu-logo"
            data-node-id="I616:1914;555:550"
          />
          <p className="case-banner-std-title" data-node-id="616:1915">
            {caseData.bannerTitle}
          </p>
          <p className="case-banner-std-subtitle" data-node-id="616:1916">
            {caseData.bannerSubtitle || '\u200B'}
          </p>
        </div>
      );
    }

    if (caseData.bannerType === 'gui-reinke') {
      return (
        <div className="case-banner banner-gui-reinke" data-node-id="569:1219">
          <img
            src="/assets/gui-banner-bola.svg"
            alt=""
            className="case-banner-gui-ball"
            data-node-id="569:1220"
          />
          <div className="case-banner-gui-stripe" data-node-id="569:1221" />
          <p className="case-banner-gui-title" data-node-id="569:1222">
            {caseData.bannerTitle}
          </p>
          <p className="case-banner-gui-subtitle" data-node-id="569:1223">
            {caseData.bannerSubtitle}
          </p>
          <img
            src="/assets/gui-banner-logo.svg"
            alt="Logo Gui Reinke Vôlei"
            className="case-banner-gui-logo"
            data-node-id="569:1224"
          />
        </div>
      );
    }

    if (caseData.bannerType === 'sib') {
      return (
        <div className="case-banner banner-sib" data-node-id="580:1135">
          <img
            src="/assets/sib-banner-foto.png"
            alt=""
            className="case-banner-bg-photo"
            data-node-id="580:1137"
          />
          <div className="case-banner-overlay-sib" data-node-id="580:1138" />
          <img
            src="/assets/sib-logo.png"
            alt="Logo SIB Tabuleiro"
            className="case-banner-sib-logo"
            data-node-id="580:1136"
          />
          <p className="case-banner-std-title" data-node-id="616:2019">
            {caseData.bannerTitle}
          </p>
          <p className="case-banner-std-subtitle" data-node-id="616:2020">
            {caseData.bannerSubtitle}
          </p>
        </div>
      );
    }

    if (caseData.bannerType === 'nova-cidade') {
      return (
        <div className="case-banner banner-nova-cidade" data-node-id="587:1187">
          <img
            src="/assets/nc-ev-1-coordenacao.png"
            alt=""
            className="case-banner-bg-photo"
            data-node-id="587:1189"
          />
          <div className="case-banner-overlay-nc" data-node-id="587:1190" />
          <img
            src="/assets/nova-cidade-logo.png"
            alt="Logo Igreja Batista Nova Cidade"
            className="case-banner-nc-logo"
            data-node-id="587:1188"
          />
          <p className="case-banner-std-title" data-node-id="616:2119">
            {caseData.bannerTitle}
          </p>
          <p className="case-banner-std-subtitle" data-node-id="616:2120">
            {caseData.bannerSubtitle}
          </p>
        </div>
      );
    }

    return (
      <div className="case-banner banner-portfolio" data-node-id="597:1215">
        <div className="case-banner-portfolio-layer layer-1" data-node-id="597:1218" />
        <div className="case-banner-portfolio-layer layer-2" data-node-id="597:1219" />
        <div className="case-banner-portfolio-layer layer-3" data-node-id="597:1220" />
        <div className="case-banner-portfolio-layer layer-4" data-node-id="597:1221" />
        <p className="case-banner-std-title" data-node-id="616:2219">
          {caseData.bannerTitle}
        </p>
        <p className="case-banner-std-subtitle" data-node-id="616:2220">
          {caseData.bannerSubtitle}
        </p>
      </div>
    );
  };

  return (
    <div
      className="case-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <button
        type="button"
        className="case-modal-backdrop"
        aria-label="Fechar estudo de caso"
        onClick={onClose}
      />
      <div className="case-modal-panel">
        <header className="case-modal-header">
          <p className="case-modal-header-tag">ESTUDO DE CASO</p>
          <button
            ref={closeBtnRef}
            type="button"
            className="case-modal-close-btn"
            onClick={onClose}
          >
            Fechar ×
          </button>
        </header>

        <div ref={scrollContainerRef} className="case-modal-scroll">
          <div className="case-modal-body">
            {renderBanner()}

            {/* Case Presentation */}
            <div className="case-presentation">
              <p className="case-category-label">{caseData.categoryTag}</p>
              <h2 id="case-modal-title" className="case-main-title">
                {caseData.title}
              </h2>
              <div className="case-paragraphs">
                {caseData.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Section Index Navigation */}
            <nav className="case-index-nav" aria-label="Navegação de seções do estudo de caso">
              <p className="case-index-heading">NAVEGUE PELO CASE</p>
              <div className="case-index-grid">
                {caseData.navLinks.map((link) => (
                  <button
                    key={link.targetId}
                    type="button"
                    className="case-index-btn"
                    onClick={() => scrollToSection(link.targetId)}
                  >
                    <span className="case-index-num">{link.number}</span>
                    <span className="case-index-text">{link.label}</span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Summary Metadata Grid */}
            <div className="case-summary-block">
              <div className="case-summary-row">
                {caseData.summaryRow1.map((item) => (
                  <div key={item.label} className="case-summary-item">
                    <p className="case-summary-label">{item.label}</p>
                    <p className="case-summary-value">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="case-summary-row">
                {caseData.summaryRow2.map((item) => (
                  <div key={item.label} className="case-summary-item">
                    <p className="case-summary-label">{item.label}</p>
                    <p className="case-summary-value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Sections */}
            {caseData.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="case-narrative-section">
                <h3 className="case-section-heading">{sec.heading}</h3>
                <div className="case-paragraphs">
                  {sec.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {sec.compactGallery && (
                  <div className="compact-evidence-gallery">
                    <div className="compact-evidence-main">
                      <img
                        src={sec.compactGallery.main.src}
                        alt={sec.compactGallery.main.caption}
                        className="compact-evidence-img"
                      />
                      <div className="compact-evidence-caption">
                        <span>{sec.compactGallery.main.caption}</span>
                      </div>
                    </div>
                    <div className="compact-evidence-secondary">
                      <div className="compact-evidence-row">
                        {sec.compactGallery.secondary.slice(0, 2).map((ev) => (
                          <div key={ev.caption} className="compact-evidence-card">
                            <img
                              src={ev.src}
                              alt={ev.caption}
                              className="compact-evidence-img"
                            />
                            <div className="compact-evidence-caption">
                              <span>{ev.caption}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="compact-evidence-row">
                        {sec.compactGallery.secondary.slice(2, 4).map((ev) => (
                          <div key={ev.caption} className="compact-evidence-card">
                            <img
                              src={ev.src}
                              alt={ev.caption}
                              className="compact-evidence-img"
                            />
                            <div className="compact-evidence-caption">
                              <span>{ev.caption}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* 9-item Grid Evidence Gallery (Gui Reinke) */}
            {caseData.gridGallery && (
              <section id="case-sec-evidencias" className="grid-evidence-section">
                <h3 className="case-section-heading">{caseData.gridGallery.title}</h3>
                <p className="case-summary-value">{caseData.gridGallery.subtitle}</p>
                <div className="grid-evidence-rows">
                  {caseData.gridGallery.items.map((ev) => (
                    <div key={ev.caption} className="grid-evidence-item">
                      <div className="grid-evidence-img-box">
                        <img src={ev.src} alt={ev.caption} />
                      </div>
                      <p className="grid-evidence-caption">{ev.caption}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Closing Narrative Section (Gui Reinke section 05) */}
            {caseData.closingSection && (
              <section
                id={caseData.closingSection.id}
                className="case-narrative-section"
              >
                <h3 className="case-section-heading">{caseData.closingSection.heading}</h3>
                <div className="case-paragraphs">
                  {caseData.closingSection.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Case Footer */}
            <footer className="case-footer-block">
              <p className="case-footer-end-label">Fim do estudo de caso</p>
              <button type="button" className="case-back-btn" onClick={onClose}>
                Voltar ao portfólio
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const viewportMode = useViewportMode();

  // Selected project index (0..4)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [prevSelectedIndex, setPrevSelectedIndex] = useState<number>(0);

  // Active Case Study Modal
  const [openProjectId, setOpenProjectId] = useState<ProjectId | null>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  // Rotating word typewriter state (Node 667:2171)
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Touch swipe tracking for tablet/mobile carousel
  const touchStartXRef = useRef<number | null>(null);

  // Cursor-following scroll arrows inside Hero section
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const heroCursorFollowerRef = useRef<HTMLDivElement | null>(null);
  const [heroCursorVisible, setHeroCursorVisible] = useState<boolean>(false);

  // Smart fixed navbar: visible at initial position & when scrolling up; vanishes when scrolling down
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= 10) {
        setIsNavbarVisible(true);
      } else if (delta > 4) {
        // Scrolling down -> vanish
        setIsNavbarVisible(false);
      } else if (delta < -4) {
        // Scrolling up -> appear
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const heroEl = heroSectionRef.current;
    const followerEl = heroCursorFollowerRef.current;
    if (!heroEl || !followerEl) return;

    const rect = heroEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    followerEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    if (!heroCursorVisible) {
      setHeroCursorVisible(true);
    }
  };

  const handleHeroMouseLeave = () => {
    setHeroCursorVisible(false);
  };

  // Typewriter loop for Hero / Palavra rotativa (designer, parceiro, colega, analista)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const currentWord = ROTATING_WORDS[wordIndex];

    let timeoutMs = isDeleting ? 55 : 85;
    if (!isDeleting && charCount === currentWord.length) {
      timeoutMs = 1400; // Dwell on full word
    } else if (isDeleting && charCount === 0) {
      timeoutMs = 260; // Pause on "|" before next word
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (charCount < currentWord.length) {
          setCharCount((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charCount > 0) {
          setCharCount((c) => c - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % ROTATING_WORDS.length);
        }
      }
    }, timeoutMs);

    return () => window.clearTimeout(timer);
  }, [charCount, isDeleting, wordIndex, prefersReducedMotion]);

  const displayedRotatingWord = prefersReducedMotion
    ? 'designer'
    : `${ROTATING_WORDS[wordIndex].slice(0, charCount)}|`;

  const handleSelectProject = (newIndex: number) => {
    if (newIndex === selectedIndex || newIndex < 0 || newIndex >= PROJECTS.length) return;
    setPrevSelectedIndex(selectedIndex);
    setSelectedIndex(newIndex);
  };

  const handleOpenCase = (projectId: ProjectId, triggerEl: HTMLElement | null) => {
    modalTriggerRef.current = triggerEl;
    setOpenProjectId(projectId);
  };

  const handleCloseCase = () => {
    setOpenProjectId(null);
    window.setTimeout(() => {
      modalTriggerRef.current?.focus();
    }, 0);
  };

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const scrollToProjetos = () => {
    document.getElementById('projetos')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // Compute desktop geometry constants based on 1440px vs 1280px breakpoint
  const is1280 = viewportMode === 'desktop-1280';
  const desktopSlots = is1280 ? SLOTS_1280 : SLOTS_1440;
  const selectorLeft = is1280 ? 941.33 : 1059;
  const selectorWidth = is1280 ? 227.56 : 256;
  const selectorHeight = is1280 ? 42.67 : 48;
  const selectorTopBase = is1280 ? 282.67 : 318;
  const selectorStep = is1280 ? 67.56 : 76;
  const indicatorLeft = is1280 ? 727.77 : 845;
  const indicatorTop = (is1280 ? 304.67 : 342.75) + selectedIndex * selectorStep;

  // Render order for stacked cards: bottom of stack (index 4) first, top of stack (index 0) last
  const stackRenderOrder = [4, 3, 2, 1, 0];

  const activeCaseData = openProjectId
    ? PROJECTS.find((p) => p.id === openProjectId) || null
    : null;

  // Scale factor for tablet (360/440) and mobile (280/440) carousel card
  const carouselScale = viewportMode === 'mobile' ? 280 / 440 : 360 / 440;

  return (
    <div className="portfolio-page" data-node-id="755:2964">
      <a href="#projetos" className="skip-link">
        Pular para os projetos
      </a>

      {/* Smart Fixed Top Navbar (Node 637:1955) */}
      <header
        className={`portfolio-navbar-wrapper ${isNavbarVisible ? '' : 'is-hidden'}`}
      >
        <nav
          className="portfolio-navbar"
          aria-label="Navegação principal"
          data-node-id="637:1955"
        >
          <div className="navbar-minilogo-area" data-node-id="I637:1955;637:1942">
            <button
              type="button"
              className="minilogo-btn"
              onClick={scrollToHero}
              aria-label="Kris Design — voltar ao início"
              data-node-id="637:1930"
            >
              <span className="minilogo-kris">Kris</span>
              <span className="minilogo-design">Design</span>
            </button>
          </div>

          <div className="navbar-items" data-node-id="I637:1955;637:1946">
            <button
              type="button"
              className="nav-item-link nav-item-projetos"
              onClick={scrollToProjetos}
              data-node-id="637:1922"
            >
              Projetos
            </button>
            <a
              href={CURRICULO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item-link nav-item-curriculo"
            >
              Currículo
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item-link nav-item-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section (Node 502:8) */}
      <section
        ref={heroSectionRef}
        id="hero"
        className="hero-section"
        aria-label="Apresentação"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className="hero-stage" data-node-id="502:8">
          {/* Hero / Loop dos projetos — sem áudio (Node 677:2168) */}
          <div className="hero-ambient-loop" data-node-id="677:2168" aria-hidden="true">
            <video
              src="/assets/hero-projects-loop.mp4"
              poster="/assets/hero-loop-bg.png"
              className="hero-ambient-video"
              autoPlay
              loop
              muted
              playsInline
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                void e.currentTarget.play();
              }}
            />
          </div>

          {/* Cursor-following downward arrows loop (Hero only) */}
          <div
            ref={heroCursorFollowerRef}
            className={`hero-cursor-scroll-hint ${heroCursorVisible ? 'is-visible' : ''}`}
            aria-hidden="true"
          >
            <div className="hero-cursor-radius">
              <svg
                className="hero-cursor-arrow arrow-1"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L9 8L16 2"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="hero-cursor-arrow arrow-2"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L9 8L16 2"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Left & Right Orange Envelope Corner Triangles (Nodes 502:10 and 502:11) */}
          <div className="hero-corner-left" data-node-id="502:10" aria-hidden="true" />
          <div className="hero-corner-right" data-node-id="502:11" aria-hidden="true" />

          {/* Hero Title & Rotating Word Subtitle */}
          <h1 className="hero-title" data-node-id="502:23">
            OLÁ, EU SOU O KRIS
          </h1>

          <div className="hero-subtitle-container">
            <p className="hero-subtitle-prefix" data-node-id="502:25">
              Eu sou o seu próximo
            </p>
            <div
              className="hero-rotating-box"
              data-node-id="502:26"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="hero-rotating-word">{displayedRotatingWord}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Node 510:442) */}
      <section
        id="projetos"
        className="projects-section"
        aria-labelledby="projects-heading-title"
      >
        <div className="projects-stage" data-node-id="510:442">
          <h2
            id="projects-heading-title"
            className="projects-heading"
            data-node-id="I510:442;502:28"
          >
            Conheça meu trabalho
          </h2>

          {/* Desktop Interactive Stack + Selector List */}
          <div className="desktop-projects-interactive">
            {/* Selection Line Indicator (Node I510:442;502:33) */}
            <div
              className="selection-indicator"
              style={{ left: `${indicatorLeft}px`, top: `${indicatorTop}px` }}
              aria-hidden="true"
              data-node-id="I510:442;502:33"
            >
              <img src="/assets/indicador-selecao.svg" alt="" width={210.029} height={1} />
            </div>

            {/* Project Selector List (Right Side) */}
            <div role=" group" aria-label="Selecionar projeto">
              {PROJECTS.map((proj, idx) => {
                const isSelected = idx === selectedIndex;
                const itemTop = selectorTopBase + idx * selectorStep;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    className={`project-selector-item ${isSelected ? 'is-selected' : ''}`}
                    style={{
                      left: `${selectorLeft}px`,
                      top: `${itemTop}px`,
                      width: `${selectorWidth}px`,
                      height: `${selectorHeight}px`,
                    }}
                    aria-pressed={isSelected}
                    onClick={() => handleSelectProject(idx)}
                  >
                    <span className="selector-label">{proj.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Hierarchical Card Stack (Left Side, Node 510:365) */}
            {stackRenderOrder.map((cardIdx) => {
              const proj = PROJECTS[cardIdx];
              const isHiddenAbove = cardIdx < selectedIndex;
              const isFrontCard = cardIdx === selectedIndex;
              const slotIndex = isHiddenAbove
                ? 0
                : Math.min(cardIdx - selectedIndex, desktopSlots.length - 1);
              const slot = desktopSlots[slotIndex];
              const cardScale = slot.width / 440;

              // Stagger delay calculation per Etapa 3.1 (60ms stagger when advancing, 280ms sequential when returning)
              let transitionDelayMs = 0;
              if (!prefersReducedMotion) {
                if (selectedIndex > prevSelectedIndex && cardIdx >= prevSelectedIndex && cardIdx < selectedIndex) {
                  transitionDelayMs = (cardIdx - prevSelectedIndex) * 60;
                } else if (selectedIndex < prevSelectedIndex && cardIdx >= selectedIndex && cardIdx < prevSelectedIndex) {
                  transitionDelayMs = (prevSelectedIndex - 1 - cardIdx) * 140;
                }
              }

              return (
                <div
                  key={proj.id}
                  className={`card-stack-item ${isHiddenAbove ? 'is-hidden-above' : ''} ${
                    !isFrontCard && !isHiddenAbove ? 'is-background-card' : ''
                  }`}
                  style={{
                    left: `${slot.x}px`,
                    top: `${slot.y}px`,
                    width: `${slot.width}px`,
                    height: `${slot.height}px`,
                    transitionDelay: `${transitionDelayMs}ms`,
                  }}
                  onClick={() => {
                    if (!isFrontCard && !isHiddenAbove) {
                      handleSelectProject(cardIdx);
                    }
                  }}
                  aria-hidden={isHiddenAbove}
                >
                  <CardArtwork
                    project={proj}
                    scale={cardScale}
                    isFrontCard={isFrontCard}
                    onOpenCase={handleOpenCase}
                  />
                </div>
              );
            })}
          </div>

          {/* Tablet & Mobile Carousel (Nodes 720:3155 & 720:3518) */}
          <div
            className="projects-carousel"
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const startX = touchStartXRef.current;
              const endX = e.changedTouches[0]?.clientX ?? null;
              if (startX !== null && endX !== null) {
                const delta = endX - startX;
                if (delta < -40 && selectedIndex < PROJECTS.length - 1) {
                  handleSelectProject(selectedIndex + 1);
                } else if (delta > 40 && selectedIndex > 0) {
                  handleSelectProject(selectedIndex - 1);
                }
              }
              touchStartXRef.current = null;
            }}
          >
            <div className="carousel-card-slot" data-node-id="720:3531">
              <CardArtwork
                project={PROJECTS[selectedIndex]}
                scale={carouselScale}
                isFrontCard={true}
                onOpenCase={handleOpenCase}
              />
            </div>

            <button
              type="button"
              className="carousel-arrow-btn prev"
              disabled={selectedIndex === 0}
              onClick={() => handleSelectProject(selectedIndex - 1)}
              aria-label="Projeto anterior"
              data-node-id="720:3542"
            >
              <img src="/assets/carousel-prev.svg" alt="" width={24} height={24} />
            </button>

            <button
              type="button"
              className="carousel-arrow-btn next"
              disabled={selectedIndex === PROJECTS.length - 1}
              onClick={() => handleSelectProject(selectedIndex + 1)}
              aria-label="Próximo projeto"
              data-node-id="720:3545"
            >
              <img src="/assets/carousel-next.svg" alt="" width={24} height={24} />
            </button>

            <div
              className="carousel-pagination"
              role="tablist"
              aria-label="Paginação de projetos"
              data-node-id="720:3550"
            >
              {PROJECTS.map((proj, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Ir para ${proj.shortTitle}`}
                    className={`carousel-dot-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleSelectProject(idx)}
                  >
                    <img
                      src={isActive ? '/assets/dot-active.svg' : '/assets/dot-inactive.svg'}
                      alt=""
                      width={isActive ? 12 : 8}
                      height={isActive ? 12 : 8}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Section Footer Navigation (Node 654:2067) */}
          <footer
            className="project-footer"
            aria-label="Links finais"
            data-node-id="654:2067"
          >
            <button
              type="button"
              className="minilogo-btn minilogo-footer"
              onClick={scrollToHero}
              aria-label="Kris Design — voltar ao início"
            >
              <span className="minilogo-kris">Kris</span>
              <span className="minilogo-design">Design</span>
            </button>
            <a
              href={CURRICULO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Currículo
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </footer>
        </div>
      </section>

      {/* Case Study Modal (Etapa 4) */}
      {activeCaseData && (
        <CaseModal caseData={activeCaseData} onClose={handleCloseCase} />
      )}
    </div>
  );
}
