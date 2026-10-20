/**
 * Application Logic for Elon Musk Entrepreneur Showcase
 * 
 * Features:
 * - Structured dynamic rendering from SHOWCASE_DATA
 * - Real-time search & filter for Ventures
 * - Interactive Chronological Timeline with sector filters & accordion expander
 * - Accessible Modal Dialog inspector with keyboard & backdrop controls
 * - Dark / Light theme toggle with LocalStorage persistence
 * - Intersection Observer for smooth navigation tracking
 */

(function () {
  "use strict";

  // State Management
  const state = {
    timelineFilter: "all",
    allTimelineExpanded: false,
    ventureCategory: "all",
    searchQuery: "",
    selectedVenture: null,
    previousFocusedElement: null
  };

  // DOM Elements
  const DOM = {
    // Theme
    html: document.documentElement,
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    themeIcon: document.getElementById("theme-icon"),
    
    // Navigation
    mobileMenuBtn: document.getElementById("mobile-menu-btn"),
    navLinks: document.getElementById("nav-links"),
    navAnchors: document.querySelectorAll(".nav-links a"),

    // Hero Stats
    heroStatsContainer: document.getElementById("hero-stats-container"),

    // Journey
    timelineFilters: document.getElementById("timeline-filters"),
    timelineTrack: document.getElementById("timeline-track"),
    timelineToggleAllBtn: document.getElementById("timeline-toggle-all-btn"),
    toggleAllText: document.getElementById("toggle-all-text"),

    // Ventures
    ventureSearch: document.getElementById("venture-search"),
    searchClearBtn: document.getElementById("search-clear-btn"),
    ventureFilters: document.getElementById("venture-filters"),
    venturesGrid: document.getElementById("ventures-grid"),

    // Impact & Takeaways
    achievementsContainer: document.getElementById("achievements-container"),
    takeawaysContainer: document.getElementById("takeaways-container"),

    // Sources
    sourcesContainer: document.getElementById("sources-container"),

    // Modal
    modalOverlay: document.getElementById("venture-modal"),
    modalCloseBtn: document.getElementById("modal-close-btn"),
    modalCloseFooterBtn: document.getElementById("modal-close-footer-btn"),
    modalBannerWrapper: document.getElementById("modal-banner-wrapper"),
    modalBannerImg: document.getElementById("modal-banner-img"),
    modalLogoBadge: document.getElementById("modal-logo-badge"),
    modalCompanyName: document.getElementById("modal-company-name"),
    modalCompanyTagline: document.getElementById("modal-company-tagline"),
    modalMetaGrid: document.getElementById("modal-meta-grid"),
    modalConnectionText: document.getElementById("modal-connection-text"),
    modalDescriptionText: document.getElementById("modal-description-text"),
    modalInnovationsList: document.getElementById("modal-innovations-list"),
    modalOfficialLink: document.getElementById("modal-official-link")
  };

  // =========================================================================
  // Theme Management
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem("musk_showcase_theme") || "dark";
    applyTheme(savedTheme);

    DOM.themeToggleBtn.addEventListener("click", () => {
      const currentTheme = DOM.html.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("musk_showcase_theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    DOM.html.setAttribute("data-theme", theme);
    if (theme === "dark") {
      DOM.themeIcon.textContent = "☀️";
      DOM.themeToggleBtn.setAttribute("title", "Switch to Light Mode");
    } else {
      DOM.themeIcon.textContent = "🌙";
      DOM.themeToggleBtn.setAttribute("title", "Switch to Dark Mode");
    }
  }

  // =========================================================================
  // Dynamic Data Renderers
  // =========================================================================

  // 1. Render Hero Stats
  function renderHeroStats() {
    if (!DOM.heroStatsContainer || !SHOWCASE_DATA.profile.stats) return;

    DOM.heroStatsContainer.innerHTML = SHOWCASE_DATA.profile.stats
      .map(
        (s) => `
        <div class="stat-card">
          <div class="stat-value">${escapeHTML(s.value)}</div>
          <div class="stat-label">${escapeHTML(s.label)}</div>
        </div>
      `
      )
      .join("");
  }

  // 2. Render Timeline Milestones
  function renderTimeline() {
    if (!DOM.timelineTrack || !SHOWCASE_DATA.milestones) return;

    const filtered = SHOWCASE_DATA.milestones.filter((m) => {
      if (state.timelineFilter === "all") return true;
      if (state.timelineFilter === "Artificial Intelligence") {
        return m.category.includes("AI") || m.category.includes("Artificial Intelligence") || m.category.includes("Neuro");
      }
      return m.category.toLowerCase().includes(state.timelineFilter.toLowerCase());
    });

    if (filtered.length === 0) {
      DOM.timelineTrack.innerHTML = `
        <div class="no-results-msg">
          <p>No career milestones found for category "<strong>${escapeHTML(state.timelineFilter)}</strong>".</p>
        </div>
      `;
      return;
    }

    DOM.timelineTrack.innerHTML = filtered
      .map(
        (m) => `
        <article class="timeline-item" data-id="${m.id}" data-category="${escapeHTML(m.category)}">
          <div class="timeline-node" aria-hidden="true"></div>
          <div class="timeline-card ${state.allTimelineExpanded ? "expanded" : ""}" tabindex="0" role="button" aria-expanded="${state.allTimelineExpanded}">
            <div class="timeline-card-header">
              <div class="timeline-meta">
                <span class="timeline-year">${escapeHTML(m.year)}</span>
                <span class="timeline-badge">${escapeHTML(m.category)}</span>
              </div>
              <span class="timeline-badge" style="background: rgba(255,255,255,0.04);">${escapeHTML(m.company)}</span>
            </div>
            <h3 class="timeline-card-title">${escapeHTML(m.title)}</h3>
            <p class="timeline-summary">${escapeHTML(m.summary)}</p>
            
            <div class="timeline-expand-btn">
              <span class="expand-label">${state.allTimelineExpanded ? "Show Less" : "Read Full Story"}</span>
              <span class="expand-arrow" aria-hidden="true">${state.allTimelineExpanded ? "▲" : "▼"}</span>
            </div>

            <div class="timeline-details" aria-hidden="${!state.allTimelineExpanded}">
              <p class="timeline-details-text">${escapeHTML(m.details)}</p>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // Attach card accordion toggle listeners
    DOM.timelineTrack.querySelectorAll(".timeline-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        toggleMilestoneCard(card);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleMilestoneCard(card);
        }
      });
    });
  }

  function toggleMilestoneCard(card) {
    const isExpanded = card.classList.contains("expanded");
    if (isExpanded) {
      card.classList.remove("expanded");
      card.setAttribute("aria-expanded", "false");
      const label = card.querySelector(".expand-label");
      const arrow = card.querySelector(".expand-arrow");
      if (label) label.textContent = "Read Full Story";
      if (arrow) arrow.textContent = "▼";
    } else {
      card.classList.add("expanded");
      card.setAttribute("aria-expanded", "true");
      const label = card.querySelector(".expand-label");
      const arrow = card.querySelector(".expand-arrow");
      if (label) label.textContent = "Show Less";
      if (arrow) arrow.textContent = "▲";
    }
  }

  // 3. Render Ventures Grid
  function renderVentures() {
    if (!DOM.venturesGrid || !SHOWCASE_DATA.ventures) return;

    const query = state.searchQuery.toLowerCase().trim();

    const filtered = SHOWCASE_DATA.ventures.filter((v) => {
      // Category match
      const categoryMatch =
        state.ventureCategory === "all" || v.category === state.ventureCategory;

      if (!categoryMatch) return false;

      // Search query match
      if (!query) return true;

      const searchableText = [
        v.name,
        v.tagline,
        v.summary,
        v.description,
        v.industry,
        v.role,
        v.connection,
        ...(v.keyInnovations || [])
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });

    if (filtered.length === 0) {
      DOM.venturesGrid.innerHTML = `
        <div class="no-results-msg">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">No matching ventures found.</p>
          <p>Try searching for terms like <strong>"Falcon"</strong>, <strong>"Supercharger"</strong>, <strong>"Neural"</strong>, or <strong>"AI"</strong>.</p>
          <button id="reset-search-btn" class="btn btn-secondary" style="margin-top: 16px;">Clear Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.searchQuery = "";
          state.ventureCategory = "all";
          if (DOM.ventureSearch) DOM.ventureSearch.value = "";
          if (DOM.searchClearBtn) DOM.searchClearBtn.classList.remove("visible");
          updateVentureFilterChips("all");
          renderVentures();
        });
      }
      return;
    }

    DOM.venturesGrid.innerHTML = filtered
      .map((v) => {
        const primaryStat1 = v.stats && v.stats[0] ? v.stats[0] : null;
        const primaryStat2 = v.stats && v.stats[1] ? v.stats[1] : null;

        return `
        <div class="venture-card" style="--card-color: ${v.badgeColor};" data-id="${v.id}">
          ${
            v.image
              ? `
            <div class="venture-image-wrapper">
              <img src="${escapeHTML(v.image)}" alt="${escapeHTML(v.name)}" loading="lazy" class="venture-card-img">
              <div class="venture-image-overlay"></div>
            </div>
          `
              : ""
          }
          <div class="venture-card-body">
            <div class="venture-header">
              <div class="venture-title-area">
                <h3 class="venture-name">${escapeHTML(v.name)}</h3>
                <p class="venture-tagline">${escapeHTML(v.tagline)}</p>
              </div>
              <span class="venture-status-pill">${escapeHTML(v.status)}</span>
            </div>

            <div class="venture-role-meta">
              <span class="venture-role-tag">${escapeHTML(v.role)}</span>
              <span class="venture-year-tag">Est. ${escapeHTML(v.yearFounded)}</span>
            </div>

            <p class="venture-summary">${escapeHTML(v.summary)}</p>

            ${
              primaryStat1 && primaryStat2
                ? `
              <div class="venture-stats-mini">
                <div class="mini-stat-item">
                  <span class="mini-stat-val">${escapeHTML(primaryStat1.value)}</span>
                  <span class="mini-stat-lbl">${escapeHTML(primaryStat1.label)}</span>
                </div>
                <div class="mini-stat-item">
                  <span class="mini-stat-val">${escapeHTML(primaryStat2.value)}</span>
                  <span class="mini-stat-lbl">${escapeHTML(primaryStat2.label)}</span>
                </div>
              </div>
            `
                : ""
            }
          </div>

          <div class="venture-footer">
            <button class="venture-inspect-btn" data-action="inspect" data-venture-id="${v.id}" aria-haspopup="dialog">
              <span>Inspect Venture</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="${escapeHTML(v.officialUrl)}" class="venture-ext-link" target="_blank" rel="noopener noreferrer" title="Visit official ${escapeHTML(v.name)} website">
              <span>Official Site</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      `;
      })
      .join("");

    // Attach inspect click handlers
    DOM.venturesGrid.querySelectorAll("[data-action='inspect']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ventureId = btn.getAttribute("data-venture-id");
        openVentureModal(ventureId);
      });
    });
  }

  // 4. Render Impact & Takeaways
  function renderImpactAndTakeaways() {
    if (!SHOWCASE_DATA.impact) return;

    // Achievements
    if (DOM.achievementsContainer && SHOWCASE_DATA.impact.achievements) {
      DOM.achievementsContainer.innerHTML = SHOWCASE_DATA.impact.achievements
        .map(
          (a) => `
          <div class="achievement-card">
            ${
              a.image
                ? `
              <div class="achievement-image-wrapper">
                <img src="${escapeHTML(a.image)}" alt="${escapeHTML(a.title)}" loading="lazy" class="achievement-card-img">
                <div class="achievement-image-overlay"></div>
              </div>
            `
                : ""
            }
            <div class="achievement-card-body">
              <div class="achievement-domain-badge">${escapeHTML(a.domain)}</div>
              <h3 class="achievement-title">${escapeHTML(a.title)}</h3>
              
              <div class="achievement-metric-banner">
                <div class="metric-big">${escapeHTML(a.metric)}</div>
                <div class="metric-caption">${escapeHTML(a.metricDetail)}</div>
              </div>

              <p class="achievement-desc">${escapeHTML(a.details)}</p>

              <div class="achievement-evidence">
                <strong>Source Verification:</strong> ${escapeHTML(a.verification)}
              </div>
            </div>
          </div>
        `
        )
        .join("");
    }

    // Takeaways
    if (DOM.takeawaysContainer && SHOWCASE_DATA.impact.takeaways) {
      DOM.takeawaysContainer.innerHTML = SHOWCASE_DATA.impact.takeaways
        .map(
          (t) => `
          <div class="takeaway-card">
            <h4 class="takeaway-title">${escapeHTML(t.title)}</h4>
            <div class="takeaway-subtitle">${escapeHTML(t.subtitle)}</div>
            <p class="takeaway-concept">${escapeHTML(t.concept)}</p>

            <div class="takeaway-steps-title">Actionable Implementation:</div>
            <ul class="takeaway-steps">
              ${t.actionableSteps
                .map((step) => `<li>${escapeHTML(step)}</li>`)
                .join("")}
            </ul>

            <div class="takeaway-quote-box">
              "${escapeHTML(t.quote)}"
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  // 5. Render Sources & References
  function renderSources() {
    if (!DOM.sourcesContainer || !SHOWCASE_DATA.sources) return;

    DOM.sourcesContainer.innerHTML = SHOWCASE_DATA.sources
      .map(
        (src) => `
        <div class="source-card">
          <div>
            <div class="source-type-pill">${escapeHTML(src.category)}</div>
            <h4 class="source-title">${escapeHTML(src.name)}</h4>
            <div class="source-org">${escapeHTML(src.organization)}</div>
            <p class="source-notes">${escapeHTML(src.notes)}</p>
          </div>
          <div>
            <a href="${escapeHTML(src.url)}" class="source-link-btn" target="_blank" rel="noopener noreferrer">
              <span>View Source Record</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      `
      )
      .join("");
  }

  // =========================================================================
  // Modal Management
  // =========================================================================
  function openVentureModal(ventureId) {
    const venture = SHOWCASE_DATA.ventures.find((v) => v.id === ventureId);
    if (!venture) return;

    state.selectedVenture = venture;
    state.previousFocusedElement = document.activeElement;

    // Populate modal content
    if (DOM.modalBannerWrapper && DOM.modalBannerImg) {
      if (venture.image) {
        DOM.modalBannerImg.src = venture.image;
        DOM.modalBannerImg.alt = venture.name;
        DOM.modalBannerWrapper.style.display = "block";
      } else {
        DOM.modalBannerWrapper.style.display = "none";
      }
    }

    DOM.modalLogoBadge.style.backgroundColor = venture.badgeColor || "#0284c7";
    DOM.modalLogoBadge.textContent = venture.name.substring(0, 2).toUpperCase();
    DOM.modalCompanyName.textContent = venture.name;
    DOM.modalCompanyTagline.textContent = venture.tagline;

    // Meta Grid
    DOM.modalMetaGrid.innerHTML = `
      <div class="modal-meta-item">
        <span class="modal-meta-label">Role</span>
        <span class="modal-meta-value">${escapeHTML(venture.role)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Year Founded</span>
        <span class="modal-meta-value">${escapeHTML(venture.yearFounded)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Industry</span>
        <span class="modal-meta-value">${escapeHTML(venture.industry)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Status</span>
        <span class="modal-meta-value">${escapeHTML(venture.status)}</span>
      </div>
    `;

    DOM.modalConnectionText.textContent = venture.connection;
    DOM.modalDescriptionText.textContent = venture.description;

    // Innovations
    if (venture.keyInnovations && venture.keyInnovations.length > 0) {
      DOM.modalInnovationsList.innerHTML = venture.keyInnovations
        .map((inn) => `<li>${escapeHTML(inn)}</li>`)
        .join("");
    } else {
      DOM.modalInnovationsList.innerHTML = "<li>Proprietary hardware & software developments</li>";
    }

    // Official Link
    DOM.modalOfficialLink.href = venture.officialUrl;
    DOM.modalOfficialLink.setAttribute("title", `Open official ${venture.name} portal in a new tab`);

    // Show modal & prevent background scrolling
    DOM.modalOverlay.classList.add("active");
    DOM.modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus close button for accessibility
    setTimeout(() => {
      DOM.modalCloseBtn.focus();
    }, 50);
  }

  function closeVentureModal() {
    DOM.modalOverlay.classList.remove("active");
    DOM.modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (state.previousFocusedElement) {
      state.previousFocusedElement.focus();
    }
  }

  // =========================================================================
  // Event Listeners & Interactive Handlers
  // =========================================================================
  function initEventListeners() {
    // 1. Mobile Menu Toggle
    if (DOM.mobileMenuBtn && DOM.navLinks) {
      DOM.mobileMenuBtn.addEventListener("click", () => {
        const isOpen = DOM.navLinks.classList.toggle("mobile-open");
        DOM.mobileMenuBtn.setAttribute("aria-expanded", isOpen);
      });

      DOM.navAnchors.forEach((link) => {
        link.addEventListener("click", () => {
          DOM.navLinks.classList.remove("mobile-open");
          DOM.mobileMenuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // 2. Timeline Filters
    if (DOM.timelineFilters) {
      DOM.timelineFilters.addEventListener("click", (e) => {
        const chip = e.target.closest(".filter-chip");
        if (!chip) return;

        DOM.timelineFilters.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        state.timelineFilter = chip.getAttribute("data-filter");
        renderTimeline();
      });
    }

    // 3. Timeline Toggle All
    if (DOM.timelineToggleAllBtn) {
      DOM.timelineToggleAllBtn.addEventListener("click", () => {
        state.allTimelineExpanded = !state.allTimelineExpanded;
        DOM.timelineToggleAllBtn.setAttribute("aria-expanded", state.allTimelineExpanded);
        DOM.toggleAllText.textContent = state.allTimelineExpanded ? "Collapse All Details" : "Expand All Details";

        const cards = DOM.timelineTrack.querySelectorAll(".timeline-card");
        cards.forEach((card) => {
          if (state.allTimelineExpanded) {
            card.classList.add("expanded");
            card.setAttribute("aria-expanded", "true");
            const label = card.querySelector(".expand-label");
            const arrow = card.querySelector(".expand-arrow");
            if (label) label.textContent = "Show Less";
            if (arrow) arrow.textContent = "▲";
          } else {
            card.classList.remove("expanded");
            card.setAttribute("aria-expanded", "false");
            const label = card.querySelector(".expand-label");
            const arrow = card.querySelector(".expand-arrow");
            if (label) label.textContent = "Read Full Story";
            if (arrow) arrow.textContent = "▼";
          }
        });
      });
    }

    // 4. Venture Search Input
    if (DOM.ventureSearch) {
      DOM.ventureSearch.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.length > 0) {
          DOM.searchClearBtn.classList.add("visible");
        } else {
          DOM.searchClearBtn.classList.remove("visible");
        }
        renderVentures();
      });

      // Clear search button
      DOM.searchClearBtn.addEventListener("click", () => {
        DOM.ventureSearch.value = "";
        state.searchQuery = "";
        DOM.searchClearBtn.classList.remove("visible");
        DOM.ventureSearch.focus();
        renderVentures();
      });
    }

    // 5. Venture Industry Filters
    if (DOM.ventureFilters) {
      DOM.ventureFilters.addEventListener("click", (e) => {
        const chip = e.target.closest(".filter-chip");
        if (!chip) return;

        DOM.ventureFilters.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        state.ventureCategory = chip.getAttribute("data-category");
        renderVentures();
      });
    }

    // 6. Modal Close Handlers
    if (DOM.modalCloseBtn) {
      DOM.modalCloseBtn.addEventListener("click", closeVentureModal);
    }
    if (DOM.modalCloseFooterBtn) {
      DOM.modalCloseFooterBtn.addEventListener("click", closeVentureModal);
    }

    if (DOM.modalOverlay) {
      DOM.modalOverlay.addEventListener("click", (e) => {
        if (e.target === DOM.modalOverlay) {
          closeVentureModal();
        }
      });
    }

    // Keyboard Shortcuts (Esc for modal, / or Ctrl+K for search)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && DOM.modalOverlay.classList.contains("active")) {
        closeVentureModal();
      }

      if ((e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) && document.activeElement !== DOM.ventureSearch) {
        if (!DOM.modalOverlay.classList.contains("active")) {
          e.preventDefault();
          DOM.ventureSearch.focus();
          DOM.ventureSearch.select();
        }
      }
    });

    // 7. Active Nav Tracker (Intersection Observer)
    initScrollSpy();
  }

  function updateVentureFilterChips(category) {
    if (!DOM.ventureFilters) return;
    DOM.ventureFilters.querySelectorAll(".filter-chip").forEach((chip) => {
      if (chip.getAttribute("data-category") === category) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            DOM.navAnchors.forEach((link) => {
              if (link.getAttribute("href") === `#${currentId}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // =========================================================================
  // Utility Functions
  // =========================================================================
  function escapeHTML(str) {
    if (typeof str !== "string") return str;
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================================================================
  // App Entry Point
  // =========================================================================
  function init() {
    initTheme();
    renderHeroStats();
    renderTimeline();
    renderVentures();
    renderImpactAndTakeaways();
    renderSources();
    initEventListeners();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
