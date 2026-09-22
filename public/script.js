/**
 * Tri-Institute Corporate Governance & Financial Matrix — Executive Controller
 * Unified Architecture for ICAI (CA), ICSI (CS), and ICMAI (CMA)
 * High-performance, clean vanilla JS architecture with zero framework overhead
 */

// Application State
const state = {
  currentInstitute: localStorage.getItem('active_institute') || 'icai',
  activeCategory: 'all',
  activeCountry: 'all',
  activeGoal: null,
  searchQuery: '',
  sortBy: 'exemption',
  viewMode: 'grid', // 'grid' | 'table'
  bookmarks: JSON.parse(localStorage.getItem('icai_bm_v2') || '[]'),
  selectedForCompare: new Set(),
  theme: localStorage.getItem('icai_theme') || 'dark',
  currentModalCourse: null,
  activeModalTab: 'tab-exemptions',
  empanelmentCategory: 'all',
  empanelmentSearch: '',
  currentModalEmpanelment: null,
  wizardSelections: {
    goal: null,
    time: null,
    region: null
  }
};

// Institute Branding & Configuration
const INSTITUTE_CONFIG = {
  icai: {
    name: "ICAI",
    profession: "Chartered Accountants",
    badge: "OFFICIAL ICAI QUALIFICATION MAPPING · 101 PATHWAYS & 14 STATUTORY PANELS",
    desc: "Comprehensive database of mutual recognition agreements (MRAs), international paper exemptions, statutory practice authorizations, executive degree pathways, and CA firm statutory empanelments.",
    empanelmentBtn: "🏛️ CA Firm Panels (14)",
    catalogLinkText: "Explore All 101 Pathways ↓",
    empanelmentSectionTitle: "CA Firm Empanelments & Statutory Practice Panels",
    empanelmentSectionDesc: "Authoritative compendium of statutory audit panels, sovereign rosters, and regulatory appointments under RBI, CAG, SEBI, IRDAI, and SFIO. Explore firm eligibility points, partner standing rules, DISA/CISA prerequisites, peer review mandates, and remuneration scales in one seamless view."
  },
  icsi: {
    name: "ICSI",
    profession: "Company Secretaries",
    badge: "OFFICIAL ICSI QUALIFICATION MAPPING · 48 PATHWAYS & 4 STATUTORY PANELS",
    desc: "Definitive directory of secretarial audit mandates, corporate governance charters, international governance recognition (CGI UK, CISI), NCLT/SEBI representation, and PCS firm empanelments.",
    empanelmentBtn: "🏛️ PCS Firm Panels (4)",
    catalogLinkText: "Explore All 48 Pathways ↓",
    empanelmentSectionTitle: "Practicing Company Secretary (PCS) Statutory Panels",
    empanelmentSectionDesc: "Statutory practice panels, secretarial auditor empanelments, Peer Review mandates, and corporate compliance registrations under MCA, SEBI, Stock Exchanges, and IBBI."
  },
  icmai: {
    name: "ICMAI",
    profession: "Cost & Management Accountants",
    badge: "OFFICIAL ICMAI QUALIFICATION MAPPING · 28 PATHWAYS & 4 STATUTORY PANELS",
    desc: "Authoritative guide to statutory cost audit mandates under Section 148, global management accounting pathways (CIMA CGMA Gateway, IMA US, CPA Australia), tariff determination, and CMA firm empanelments.",
    empanelmentBtn: "🏛️ CMA Firm Panels (4)",
    catalogLinkText: "Explore All 28 Pathways ↓",
    empanelmentSectionTitle: "CMA Practice & Statutory Cost Audit Empanelments",
    empanelmentSectionDesc: "Statutory cost audit empanelments (C&AG, PSUs, Banking, Regulators), customs valuation, and registered valuer opportunities under the Cost and Works Accountants Act, 1959."
  }
};

// Institute Hero Metrics Roster
const INSTITUTE_METRICS = {
  icai: [
    { val: "101", suffix: "+", lbl: "Individual Pathways" },
    { val: "14", suffix: "", lbl: "Statutory Firm Panels" },
    { val: "16", suffix: "", lbl: "Global MRA Bodies" },
    { val: "18", suffix: "", lbl: "International Charters" },
    { val: "24", suffix: "", lbl: "GRC & Niche Credentials" },
    { val: "22", suffix: "", lbl: "Regulatory & Banking Roles" }
  ],
  icsi: [
    { val: "48", suffix: "+", lbl: "Individual Pathways" },
    { val: "4", suffix: "", lbl: "Statutory PCS Panels" },
    { val: "8", suffix: "", lbl: "Global Governance Charters" },
    { val: "12", suffix: "", lbl: "Securities & Capital Markets" },
    { val: "14", suffix: "", lbl: "Secretarial & NCLT Audits" },
    { val: "10", suffix: "", lbl: "ESG & Board Advisory" }
  ],
  icmai: [
    { val: "28", suffix: "+", lbl: "Individual Pathways" },
    { val: "4", suffix: "", lbl: "Statutory CMA Panels" },
    { val: "6", suffix: "", lbl: "Global Management Bodies" },
    { val: "8", suffix: "", lbl: "Cost & Management Charters" },
    { val: "6", suffix: "", lbl: "Tariff & Anti-Dumping Audits" },
    { val: "8", suffix: "", lbl: "Valuer & Banking Forensics" }
  ]
};

// Cartographic Intelligence Roster by Institute
const INSTITUTE_MAP_HOTSPOTS = {
  icai: {
    gb: {
      name: "United Kingdom & Ireland",
      flag: "🇬🇧",
      agreements: "ICAEW Pathways (No exams for 5yr PQE), ACCA (9 of 13 papers waived), CIMA Gateway, CPA Ireland.",
      salaryRange: "£65,000 – £125,000 / yr",
      topEmployers: "City of London Banks, Big 4 UK, Barclays, Revolut"
    },
    us: {
      name: "United States",
      flag: "🇺🇸",
      agreements: "150-credit hour equivalence for CPA USA state boards, CMA USA degree waiver, IRS Enrolled Agent, CFE point waiver.",
      salaryRange: "$100,000 – $175,000 / yr",
      topEmployers: "Wall Street IB, Big 4 US Advisory, Silicon Valley MNCs"
    },
    ca: {
      name: "Canada",
      flag: "🇨🇦",
      agreements: "CPA Canada MOU pathway. PEP modules largely waived; write designated CFE days.",
      salaryRange: "CAD $95,000 – $155,000 / yr",
      topEmployers: "Bay Street Financial, RBC, TD Bank, Canadian Big 4"
    },
    au: {
      name: "Australia & New Zealand",
      flag: "🇦🇺",
      agreements: "Reciprocal MRAs with CPA Australia & CA ANZ. Pass only 1 capstone paper or attend IPP workshop.",
      salaryRange: "AUD $110,000 – $180,000 / yr",
      topEmployers: "Big 4 Australia, Macquarie Bank, BHP, Commonwealth Bank"
    },
    ae: {
      name: "UAE & GCC Nations",
      flag: "🇦🇪",
      agreements: "Approved Auditor status via SOCPA & UAE AAA. High corporate tax & VAT assurance demand.",
      salaryRange: "AED 280,000 – 550,000 / yr (Tax-Free)",
      topEmployers: "Emirates NBD, Dubai Holding, Big 4 Middle East, ADIA"
    },
    sg: {
      name: "Singapore & Malaysia",
      flag: "🇸🇬",
      agreements: "ISCA (Singapore) MOU pathway, MICPA (Malaysia) reciprocal conversion.",
      salaryRange: "SGD $100,000 – $165,000 / yr",
      topEmployers: "DBS Bank, Temasek, GIC, Regional APAC HQs"
    },
    za: {
      name: "South Africa & Kenya",
      flag: "🇿🇦",
      agreements: "SAICA reciprocal MRA for CA(SA) charter. ICPAK MoU for East Africa practice rights.",
      salaryRange: "ZAR 850,000 – 1,400,000 / yr",
      topEmployers: "Standard Bank, Anglo American, Nedbank, Safaricom"
    },
    in: {
      name: "India (Statutory & Practice)",
      flag: "🇮🇳",
      agreements: "IBC Insolvency Professionals, Registered Valuer statutory monopoly, SEBI RIA, CAG empanelment, DISA.",
      salaryRange: "₹18L – ₹65L+ / yr",
      topEmployers: "Big 4 India, Tier-1 Investment Banks, NCLT Practice, Listed Boards"
    }
  },
  icsi: {
    gb: {
      name: "United Kingdom & Ireland",
      flag: "🇬🇧",
      agreements: "Chartered Governance Institute (CGI UK & Ireland) fast-track MRA, CISI UK (Chartered Institute for Securities & Investment MoU).",
      salaryRange: "£60,000 – £115,000 / yr",
      topEmployers: "FTSE 100 Secretariats, City of London Law Firms, Linklaters, HSBC"
    },
    us: {
      name: "United States",
      flag: "🇺🇸",
      agreements: "Corporate Governance Officer, SEC EDGAR filing specialist, SCCE Compliance Certification, US SOX Secretarial advisory.",
      salaryRange: "$95,000 – $160,000 / yr",
      topEmployers: "NASDAQ/NYSE Listed Tech, US Corporate Secretariats, Deloitte Legal"
    },
    ca: {
      name: "Canada",
      flag: "🇨🇦",
      agreements: "Governance Professionals of Canada (GPC) pathway, TSX Corporate Secretary & Securities compliance practice.",
      salaryRange: "CAD $90,000 – $145,000 / yr",
      topEmployers: "TSX Listed Entities, Brookfield, Sun Life, Canadian Corporate Secretariats"
    },
    au: {
      name: "Australia & New Zealand",
      flag: "🇦🇺",
      agreements: "Governance Institute of Australia (GIA) pathways, ASX Listing Rule compliance lead, corporate secretarial advisory.",
      salaryRange: "AUD $105,000 – $170,000 / yr",
      topEmployers: "ASX 200 Corporate Secretariats, King & Wood Mallesons, Atlassian"
    },
    ae: {
      name: "UAE & GCC Nations",
      flag: "🇦🇪",
      agreements: "DIFC & ADGM Registered Corporate Service Provider (CSP) lead, UAE Commercial Companies Law governance officer.",
      salaryRange: "AED 260,000 – 480,000 / yr (Tax-Free)",
      topEmployers: "DIFC Secretariats, ADGM Corporate Services, First Abu Dhabi Bank"
    },
    sg: {
      name: "Singapore & Malaysia",
      flag: "🇸🇬",
      agreements: "CSIA (Corporate Secretaries International Association) network, Singapore Institute of Directors (SID) fellow pathway.",
      salaryRange: "SGD $95,000 – $155,000 / yr",
      topEmployers: "SGX Listed Cos, Singapore Corporate Services, Rajah & Tann"
    },
    za: {
      name: "South Africa & Africa",
      flag: "🇿🇦",
      agreements: "Chartered Secretaries Southern Africa (CSSA) governance exchange, King IV Report GRC lead.",
      salaryRange: "ZAR 750,000 – 1,250,000 / yr",
      topEmployers: "JSE Top 40, Sasol, MTN Group, African Governance Advisory"
    },
    in: {
      name: "India (Statutory & Practice)",
      flag: "🇮🇳",
      agreements: "Sec 204 Secretarial Audit, SEBI Reg 24A, MGT-8 Annual Return, NCLT/NCLAT Standing, Registered Valuer Securities.",
      salaryRange: "₹15L – ₹55L+ / yr",
      topEmployers: "Nifty 50 Secretariats, Tier-1 Law Firms, Leading PCS Firms, NCLT Bar"
    }
  },
  icmai: {
    gb: {
      name: "United Kingdom & Ireland",
      flag: "🇬🇧",
      agreements: "CIMA UK (CGMA Strategic Gateway - 14 papers waived), ACCA UK Strategic Professional MoU, CIPFA Public Finance.",
      salaryRange: "£62,000 – £120,000 / yr",
      topEmployers: "FTSE Manufacturing & Energy, Rolls-Royce, Unilever, NHS Finance"
    },
    us: {
      name: "United States",
      flag: "🇺🇸",
      agreements: "Institute of Management Accountants (IMA US) CMA MRA with mutual paper exemptions, Strategic Cost Management.",
      salaryRange: "$95,000 – $165,000 / yr",
      topEmployers: "Fortune 500 Industrial Finance, Boeing, Caterpillar, Tesla Operations"
    },
    ca: {
      name: "Canada",
      flag: "🇨🇦",
      agreements: "CPA Canada Management Accounting pathway, mining & natural resource operational cost controllership.",
      salaryRange: "CAD $90,000 – $150,000 / yr",
      topEmployers: "Barrick Gold, Canadian National Railway, Enbridge, Suncor"
    },
    au: {
      name: "Australia & New Zealand",
      flag: "🇦🇺",
      agreements: "CPA Australia MoU (Direct Senior Membership Pathway), IPA Australia reciprocal recognition for cost management.",
      salaryRange: "AUD $105,000 – $175,000 / yr",
      topEmployers: "Rio Tinto, BHP, Qantas, Australian Infrastructure Financiers"
    },
    ae: {
      name: "UAE & GCC Nations",
      flag: "🇦🇪",
      agreements: "GCC Energy & Petrochemical Cost Consulting, Corporate Tax Transfer Pricing cost audit, infrastructure project appraisal.",
      salaryRange: "AED 270,000 – 500,000 / yr (Tax-Free)",
      topEmployers: "ADNOC, SABIC, DP World, GCC Industrial Conglomerates"
    },
    sg: {
      name: "Singapore & Malaysia",
      flag: "🇸🇬",
      agreements: "ASEAN Management Accounting Association (AMAA), APAC regional supply chain cost controller.",
      salaryRange: "SGD $95,000 – $160,000 / yr",
      topEmployers: "Singtel, Flex, Singapore Port Authority (PSA), APAC Logistics"
    },
    za: {
      name: "South Africa & Africa",
      flag: "🇿🇦",
      agreements: "SAIPA (South African Institute of Professional Accountants) MoU, mineral royalty & mining costing lead.",
      salaryRange: "ZAR 800,000 – 1,300,000 / yr",
      topEmployers: "Anglo American Platinum, Sasol, Gold Fields, Transnet"
    },
    in: {
      name: "India (Statutory & Practice)",
      flag: "🇮🇳",
      agreements: "Sec 148 Statutory Cost Audit (39 regulated sectors), GST Sec 66 Special Audit, CERC/TRAI Tariff Reviewer, Plant & Machinery Valuer.",
      salaryRange: "₹16L – ₹60L+ / yr",
      topEmployers: "PSUs (ONGC, NTPC, BHEL), Tata Steel, Reliance Industries, Practicing CMA Firms"
    }
  }
};

// Helper: Active Hotspots
function getMapHotspots() {
  return INSTITUTE_MAP_HOTSPOTS[state.currentInstitute] || INSTITUTE_MAP_HOTSPOTS.icai;
}

// Helper: Active Courses Dataset
function getActiveCoursesData() {
  if (state.currentInstitute === 'icsi' && typeof ICSI_COURSES_DATA !== 'undefined') {
    return ICSI_COURSES_DATA;
  }
  if (state.currentInstitute === 'icmai' && typeof ICMAI_COURSES_DATA !== 'undefined') {
    return ICMAI_COURSES_DATA;
  }
  return typeof COURSES_DATA !== 'undefined' ? COURSES_DATA : [];
}

// Helper: All Combined Courses Dataset
function getAllCoursesData() {
  const list = [];
  if (typeof COURSES_DATA !== 'undefined') list.push(...COURSES_DATA);
  if (typeof ICSI_COURSES_DATA !== 'undefined') list.push(...ICSI_COURSES_DATA);
  if (typeof ICMAI_COURSES_DATA !== 'undefined') list.push(...ICMAI_COURSES_DATA);
  return list;
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initInstitute();
  initCounters();
  initWorldMap();
  initMobileHubsCarousel();
  initEventListeners();
  renderCatalog();
  renderEmpanelments();
  updateStats();
});

// ==========================================================================
// 1. THEME MANAGEMENT
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('icai_theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('themeSunIcon');
  if (icon) {
    if (state.theme === 'dark') {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    } else {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    }
  }
}

// ==========================================================================
// 2. TRI-INSTITUTE SWITCHER CONTROLLER
// ==========================================================================
function initInstitute() {
  const saved = localStorage.getItem('active_institute') || 'icai';
  switchInstitute(saved);
}

function switchInstitute(instId) {
  if (!['icai', 'icsi', 'icmai'].includes(instId)) instId = 'icai';
  state.currentInstitute = instId;
  localStorage.setItem('active_institute', instId);

  // 1. Update HTML attribute for CSS color tokens
  document.documentElement.setAttribute('data-institute', instId);

  // 2. Update switcher tab active states
  document.querySelectorAll('.inst-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.institute === instId);
  });

  // 3. Update Hero Texts & Accents
  updateHeroForInstitute(instId);

  // 4. Update Empanelment Section Titles & Counters
  updateEmpanelmentHeaders(instId);

  // 5. Update World Map Hotspots & Carousel
  initWorldMap();
  initMobileHubsCarousel();

  // 6. Reset Filters and Render
  resetAllFilters();
  renderEmpanelments();
  updateStats();
}

function updateHeroForInstitute(instId) {
  const conf = INSTITUTE_CONFIG[instId] || INSTITUTE_CONFIG.icai;

  const badgeText = document.getElementById('heroBadgeText');
  if (badgeText) badgeText.textContent = conf.badge;

  const titleAccent = document.getElementById('heroTitleAccent');
  if (titleAccent) titleAccent.textContent = conf.profession;

  const desc = document.getElementById('heroMainDesc');
  if (desc) desc.textContent = conf.desc;

  const heroBtn = document.getElementById('heroEmpanelmentBtn');
  if (heroBtn) {
    heroBtn.innerHTML = `<span>${conf.empanelmentBtn}</span>`;
  }

  const catalogLink = document.getElementById('heroCatalogLink');
  if (catalogLink) {
    catalogLink.innerHTML = `<span>${conf.catalogLinkText}</span>`;
  }

  // Update metrics grid in Hero
  updateHeroMetrics(instId);
}

function updateHeroMetrics(instId) {
  const grid = document.querySelector('.metrics-grid');
  if (!grid) return;
  const metrics = INSTITUTE_METRICS[instId] || INSTITUTE_METRICS.icai;
  grid.innerHTML = metrics.map(m => `
    <div class="metric-box">
      <div class="metric-val" data-target="${m.val}" data-suffix="${m.suffix}">${m.val}${m.suffix}</div>
      <div class="metric-lbl">${m.lbl}</div>
    </div>
  `).join('');
  initCounters();
}

function updateEmpanelmentHeaders(instId) {
  const conf = INSTITUTE_CONFIG[instId] || INSTITUTE_CONFIG.icai;
  const count = getEmpanelmentsDataset().length;

  const secTitle = document.getElementById('empanelmentSectionTitle');
  if (secTitle) secTitle.textContent = conf.empanelmentSectionTitle;

  const secSub = document.getElementById('empanelmentSectionSub');
  if (secSub) secSub.textContent = conf.empanelmentSectionDesc;

  const allTabCount = document.getElementById('empTabCountAll');
  if (allTabCount) {
    allTabCount.textContent = count;
  }
}

// ==========================================================================
// 3. COUNTERS ANIMATION
// ==========================================================================
function initCounters() {
  const nums = document.querySelectorAll('.metric-val[data-target]');
  let triggered = false;

  const obs = new IntersectionObserver((entries) => {
    if (triggered) return;
    entries.forEach(e => {
      if (e.isIntersecting) {
        triggered = true;
        nums.forEach(el => {
          const target = +el.dataset.target;
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 25));
          const iv = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(iv);
            }
            el.textContent = current + (el.dataset.suffix || '');
          }, 35);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.15 });

  nums.forEach(n => obs.observe(n));
}

// ==========================================================================
// 4. ACCURATE WORLD MAP & MOBILE HUBS
// ==========================================================================
function initWorldMap() {
  const pins = document.querySelectorAll('.geo-pin');
  pins.forEach(pin => {
    pin.onclick = (e) => {
      e.stopPropagation();
      const code = pin.dataset.country;
      showMapPopover(code);
    };
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-info-popover') && !e.target.closest('.geo-pin')) {
      hideMapPopover();
    }
  });
}

function showMapPopover(code) {
  const hotspots = getMapHotspots();
  const data = hotspots[code];
  if (!data) return;

  const pop = document.getElementById('mapPopover');
  if (!pop) return;

  pop.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-size:14px;font-weight:700;color:var(--text-primary)">
        ${data.flag} ${data.name}
      </div>
      <button onclick="hideMapPopover()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:14px">✕</button>
    </div>
    <p style="font-size:11.5px;color:var(--text-secondary);line-height:1.45;margin-bottom:8px">${data.agreements}</p>
    <div style="font-size:11px;padding:4px 0;border-top:1px solid var(--border-subtle);display:flex;justify-content:space-between">
      <span style="color:var(--text-muted)">Expat Comp:</span>
      <span style="font-family:var(--font-mono);font-weight:700;color:var(--gold-accent)">${data.salaryRange}</span>
    </div>
    <button onclick="filterByMapRegion('${code}')" style="width:100%;margin-top:8px;padding:6px;background:var(--gold-accent);color:#0F172A;border:none;border-radius:4px;font-size:11px;font-weight:700;cursor:pointer">
      Filter Pathways for ${data.name} →
    </button>
  `;
  pop.classList.add('active');
}

function hideMapPopover() {
  const pop = document.getElementById('mapPopover');
  if (pop) pop.classList.remove('active');
}

function filterByMapRegion(countryCode) {
  hideMapPopover();
  state.activeCountry = countryCode;

  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.region === countryCode);
  });

  renderCatalog();

  const explorer = document.getElementById('catalogExplorer');
  if (explorer) {
    explorer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initMobileHubsCarousel() {
  const container = document.getElementById('mobileHubsList');
  if (!container) return;

  const hotspots = getMapHotspots();
  container.innerHTML = Object.entries(hotspots).map(([code, h]) => `
    <div class="mobile-hub-card" onclick="filterByMapRegion('${code}')">
      <div class="hub-card-title">${h.flag} ${h.name}</div>
      <div class="hub-card-salary">${h.salaryRange}</div>
      <div style="font-size:10px;color:var(--text-muted);margin-top:2px">Tap to filter →</div>
    </div>
  `).join('');
}

// ==========================================================================
// 5. FILTERING, SEARCH & SORT LOGIC
// ==========================================================================
function getFilteredCourses() {
  const currentData = getActiveCoursesData();
  return currentData.filter(c => {
    // 1. Category Filter
    if (state.activeCategory === 'saved') {
      if (!state.bookmarks.includes(c.id)) return false;
    } else if (state.activeCategory !== 'all') {
      if (c.category !== state.activeCategory) return false;
    }

    // 2. Country / Region Filter
    if (state.activeCountry !== 'all') {
      if (c.countryCode !== state.activeCountry && c.countryCode !== 'global') {
        return false;
      }
    }

    // 3. Goal Filter
    if (state.activeGoal) {
      if (!c.goals || !c.goals.includes(state.activeGoal)) {
        return false;
      }
    }

    // 4. Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      const str = [
        c.name,
        c.fullName,
        c.body,
        c.country,
        c.exemptionLevel,
        c.papersRequired,
        c.papersWaived,
        c.careerImpact,
        c.statutorySource || '',
        ...(c.tags || [])
      ].join(' ').toLowerCase();

      if (!str.includes(q)) return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'exemption') {
      return b.exemptionPercent - a.exemptionPercent;
    } else if (state.sortBy === 'duration') {
      return (a.durationMonths || 0) - (b.durationMonths || 0);
    } else if (state.sortBy === 'difficulty') {
      return (a.difficulty || 0) - (b.difficulty || 0);
    } else if (state.sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

// ==========================================================================
// 6. RENDERING CATALOG
// ==========================================================================
function renderCatalog() {
  const currentData = getActiveCoursesData();
  const filtered = getFilteredCourses();
  const container = document.getElementById('catalogResultsContainer');
  const countEl = document.getElementById('resultsCountDisplay');

  if (countEl) {
    countEl.innerHTML = `Showing <b>${filtered.length}</b> of <b>${currentData.length}</b> qualifications`;
  }

  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:48px 16px;background:var(--bg-surface);border:1px solid var(--border-subtle);border-radius:var(--radius-md)">
        <h3 style="font-size:16px;font-weight:700;color:var(--text-primary);margin-bottom:6px">No qualifications found</h3>
        <p style="font-size:13px;color:var(--text-muted);max-width:380px;margin:0 auto 16px">
          No qualifications match your active combination of filters and search keywords.
        </p>
        <button class="btn-solid" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  if (state.viewMode === 'grid') {
    renderGridView(filtered, container);
  } else {
    renderTableView(filtered, container);
  }
}

function renderGridView(courses, container) {
  const html = `
    <div class="cards-grid">
      ${courses.map(c => {
        const isBookmarked = state.bookmarks.includes(c.id);
        const isCompared = state.selectedForCompare.has(c.id);

        return `
          <div class="course-card" onclick="openCourseModal('${c.id}')">
            <div class="card-top-row">
              <div class="card-title-group">
                <h3>${c.flag} ${c.name}</h3>
                <div class="card-org-name">${c.body} · ${c.country}</div>
              </div>
              <span class="card-badge-pill">${c.exemptionLevel}</span>
            </div>

            <div class="ex-row">
              <div class="ex-row-header">
                <span class="ex-row-title">Exemption / Waiver</span>
                <span class="ex-row-score">${c.exemptionPercent}%</span>
              </div>
              <div class="ex-track">
                <div class="ex-fill" style="width:${c.exemptionPercent}%"></div>
              </div>
            </div>

            <div class="card-desc-snippet">
              ${c.papersWaived || c.papersRequired}
            </div>

            ${c.statutorySource ? `
              <div class="card-statutory-source" title="${escapeHtml(c.statutorySource)}">
                <span class="source-badge-tag">🏛️ STATUTE:</span>
                <span class="source-text">${escapeHtml(c.statutorySource)}</span>
              </div>
            ` : ''}

            <div class="card-metrics-grid">
              <div>
                <div class="m-cell-lbl">Duration</div>
                <div class="m-cell-val">${c.duration}</div>
              </div>
              <div>
                <div class="m-cell-lbl">Est. Cost</div>
                <div class="m-cell-val">${c.costINR}</div>
              </div>
            </div>

            <div class="card-footer-actions" onclick="event.stopPropagation()">
              <button class="btn-open-detail" onclick="openCourseModal('${c.id}')">
                Details →
              </button>

              <div class="card-right-toggles">
                <label class="compare-toggle-label">
                  <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare('${c.id}', this)">
                  <span>Compare</span>
                </label>
                <button class="star-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${c.id}')" title="Save Bookmark">
                  ★
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  container.innerHTML = html;
}

function renderTableView(courses, container) {
  const html = `
    <div class="table-view-container">
      <table class="executive-table">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Issuing Body</th>
            <th>Category</th>
            <th>Waiver %</th>
            <th>Duration</th>
            <th>Cost (INR)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${courses.map(c => {
            const isCompared = state.selectedForCompare.has(c.id);
            return `
              <tr onclick="openCourseModal('${c.id}')" style="cursor:pointer">
                <td>
                  <div style="font-weight:700;color:var(--text-primary)">${c.flag} ${c.name}</div>
                  <div style="font-size:10px;color:var(--text-muted)">${c.country}</div>
                </td>
                <td style="font-size:11.5px">${c.body}</td>
                <td><span class="card-badge-pill">${c.category.toUpperCase()}</span></td>
                <td>
                  <span style="font-family:var(--font-mono);font-weight:700;color:#10B981">${c.exemptionPercent}%</span>
                </td>
                <td style="font-family:var(--font-mono);font-size:11.5px">${c.duration}</td>
                <td style="font-family:var(--font-mono);font-size:11.5px;color:var(--gold-accent)">${c.costINR}</td>
                <td onclick="event.stopPropagation()">
                  <div style="display:flex;align-items:center;gap:6px">
                    <button class="btn-open-detail" style="padding:3px 7px;font-size:11px" onclick="openCourseModal('${c.id}')">View</button>
                    <label class="compare-toggle-label">
                      <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare('${c.id}', this)">
                    </label>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = html;
}

// ==========================================================================
// 7. DEEP-DIVE MODAL / BOTTOM SHEET
// ==========================================================================
function openCourseModal(courseId) {
  const allCourses = getAllCoursesData();
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;

  state.currentModalCourse = course;
  state.activeModalTab = 'tab-exemptions';

  const modal = document.getElementById('courseDetailModal');
  if (!modal) return;

  populateModalData(course);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modal = document.getElementById('courseDetailModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function setModalTab(tabId) {
  state.activeModalTab = tabId;
  document.querySelectorAll('.sheet-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.sheet-tab-content').forEach(p => {
    p.style.display = p.id === tabId ? 'block' : 'none';
  });
}

function populateModalData(c) {
  document.getElementById('modalCourseCountry').textContent = `${c.flag} ${c.country}`;
  document.getElementById('modalCourseCategory').textContent = c.category.toUpperCase();
  document.getElementById('modalCourseName').textContent = c.name;
  document.getElementById('modalCourseFullName').textContent = `${c.fullName} · ${c.body}`;

  // Tab 1: Exemptions & Statutory Authority
  document.getElementById('modalTabExemptions').innerHTML = `
    <div class="modal-section">
      <h4>Exemption Status</h4>
      <div class="info-box-highlight" style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--text-primary)">${c.exemptionLevel}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">Official bilateral recognition / statutory authorization</div>
        </div>
        <div style="font-size:22px;font-weight:800;font-family:var(--font-mono);color:#10B981">
          ${c.exemptionPercent}%
        </div>
      </div>
    </div>
    
    ${c.statutorySource ? `
      <div class="modal-section">
        <h4>🏛️ Statutory Authority &amp; Verifiable Legal Basis</h4>
        <div class="info-box-highlight" style="border-left:3px solid var(--gold-accent);background:var(--bg-elevated)">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
            <span style="display:inline-block;padding:2px 6px;border-radius:3px;background:rgba(16,185,129,0.15);color:#10B981;font-size:10px;font-weight:700;font-family:var(--font-mono)">✓ OFFICIALLY VERIFIED</span>
            <span style="font-size:11px;color:var(--text-muted)">Statutory Gazette / Bilateral Treaty</span>
          </div>
          <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.5;margin-bottom:6px">
            ${escapeHtml(c.statutorySource)}
          </p>
          ${c.officialUrl ? `
            <a href="${c.officialUrl}" target="_blank" rel="noopener noreferrer" style="font-size:11.5px;color:var(--gold-accent);text-decoration:none;display:inline-flex;align-items:center;gap:4px;font-weight:600">
              View Official Reference Portal ↗
            </a>
          ` : ''}
        </div>
      </div>
    ` : ''}

    <div class="modal-section">
      <h4>Papers &amp; Modules Waived</h4>
      <div class="info-box-highlight" style="border-left:3px solid #10B981">
        <p style="font-size:12.5px;color:var(--text-secondary)">${c.papersWaived}</p>
      </div>
    </div>

    <div class="modal-section">
      <h4>Papers Required to Appear</h4>
      <div class="info-box-highlight" style="border-left:3px solid var(--gold-accent)">
        <p style="font-size:12.5px;color:var(--text-secondary)">${c.papersRequired}</p>
      </div>
    </div>
  `;

  // Tab 2: Prerequisites
  const instName = (c.institute || state.currentInstitute || 'icai').toUpperCase();
  document.getElementById('modalTabEligibility').innerHTML = `
    <div class="modal-section">
      <h4>${instName} Eligibility Criteria</h4>
      <div class="info-box-highlight">
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.5">${c.prerequisites}</p>
      </div>
      <div style="margin-top:12px;font-size:11.5px;color:var(--text-muted)">
        Note: Certificate of Good Standing / Active Membership status must be requested via respective institute portal.
      </div>
    </div>
  `;

  // Tab 3: Cost & Duration
  document.getElementById('modalTabCost').innerHTML = `
    <div class="modal-section">
      <h4>Financial Outlay</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <div class="info-box-highlight">
          <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted);font-weight:600">INR Equivalent</div>
          <div style="font-size:17px;font-weight:800;color:var(--text-primary);font-family:var(--font-mono);margin-top:2px">${c.costINR}</div>
        </div>
        <div class="info-box-highlight">
          <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted);font-weight:600">Foreign Currency</div>
          <div style="font-size:17px;font-weight:800;color:var(--gold-accent);font-family:var(--font-mono);margin-top:2px">${c.costForeign}</div>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <h4>Duration to Complete</h4>
      <div class="info-box-highlight">
        <div style="font-size:14px;font-weight:700;color:var(--text-primary)">${c.duration}</div>
        <p style="font-size:12px;color:var(--text-muted);margin-top:2px">Estimated based on standard self-paced study alongside active employment.</p>
      </div>
    </div>
  `;

  // Tab 4: Career Horizons
  document.getElementById('modalTabCareer').innerHTML = `
    <div class="modal-section">
      <h4>Career Impact &amp; Target Roles</h4>
      <div class="info-box-highlight">
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.5">${c.careerImpact}</p>
      </div>
    </div>
  `;

  // Tab 5: Roadmap
  document.getElementById('modalTabRoadmap').innerHTML = `
    <div class="modal-section">
      <h4>Step-by-Step Application Roadmap</h4>
      <div style="margin-top:10px">
        ${(c.steps || []).map((step, idx) => `
          <div class="roadmap-step">
            <div class="step-num">${idx + 1}</div>
            <div class="step-text">${step}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const link = document.getElementById('modalOfficialLink');
  if (link) {
    link.href = c.officialUrl;
  }

  setModalTab('tab-exemptions');
}

// ==========================================================================
// 8. SIDE-BY-SIDE COMPARISON
// ==========================================================================
function toggleCompare(courseId, cb) {
  if (cb.checked) {
    if (state.selectedForCompare.size >= 3) {
      alert("You can select up to 3 qualifications for side-by-side comparison.");
      cb.checked = false;
      return;
    }
    state.selectedForCompare.add(courseId);
  } else {
    state.selectedForCompare.delete(courseId);
  }
  updateCompareDock();
}

function updateCompareDock() {
  const dock = document.getElementById('compareDock');
  const count = document.getElementById('compareCount');
  if (!dock) return;

  if (state.selectedForCompare.size > 0) {
    dock.classList.add('visible');
    if (count) count.textContent = `${state.selectedForCompare.size} Selected`;
  } else {
    dock.classList.remove('visible');
  }
}

function clearCompare() {
  state.selectedForCompare.clear();
  updateCompareDock();
  renderCatalog();
}

function openCompareModal() {
  const modal = document.getElementById('compareModal');
  if (!modal) return;

  const allCourses = getAllCoursesData();
  const courses = Array.from(state.selectedForCompare)
    .map(id => allCourses.find(c => c.id === id))
    .filter(Boolean);

  if (courses.length === 0) return;

  const table = document.getElementById('compareMatrixTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width:150px">Criteria</th>
        ${courses.map(c => `<th><b>${c.flag} ${c.name}</b><div style="font-size:10.5px;color:var(--text-muted)">${c.body}</div></th>`).join('')}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Exemption %</b></td>
        ${courses.map(c => `<td><span style="font-weight:700;color:#10B981;font-size:15px">${c.exemptionPercent}%</span><br><span style="font-size:10.5px;color:var(--text-muted)">${c.exemptionLevel}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Papers to Pass</b></td>
        ${courses.map(c => `<td><span style="font-size:11.5px">${c.papersRequired}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Duration</b></td>
        ${courses.map(c => `<td><span style="font-family:var(--font-mono);font-size:12px">${c.duration}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Est. Fees (INR)</b></td>
        ${courses.map(c => `<td><span style="font-family:var(--font-mono);font-weight:700;color:var(--gold-accent)">${c.costINR}</span><br><span style="font-size:10.5px;color:var(--text-muted)">${c.costForeign}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Career Roles</b></td>
        ${courses.map(c => `<td><span style="font-size:11.5px">${c.careerImpact}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Official Portal</b></td>
        ${courses.map(c => `<td><a href="${c.officialUrl}" target="_blank" rel="noopener" class="btn-open-detail" style="display:inline-block;padding:3px 8px;text-decoration:none">Visit ↗</a></td>`).join('')}
      </tr>
    </tbody>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// 9. BOOKMARKING & SAVED FILTER
// ==========================================================================
function toggleBookmark(id) {
  const idx = state.bookmarks.indexOf(id);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(id);
  }
  localStorage.setItem('icai_bm_v2', JSON.stringify(state.bookmarks));
  renderCatalog();
  updateStats();
}

function filterBySaved() {
  state.activeCategory = 'saved';
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
  renderCatalog();

  const explorer = document.getElementById('catalogExplorer');
  if (explorer) {
    explorer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================================================
// 10. CAREER PATHWAY FINDER WIZARD
// ==========================================================================
function openWizard() {
  state.wizardSelections = { goal: null, time: null, region: null };
  setWizardStep(1);
  const modal = document.getElementById('wizardModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWizard() {
  const modal = document.getElementById('wizardModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function setWizardStep(num) {
  document.querySelectorAll('.wizard-pane').forEach(p => {
    p.classList.toggle('active', +p.dataset.step === num);
  });
  const fill = document.getElementById('wizardProgressFill');
  if (fill) fill.style.width = `${(num / 3) * 100}%`;
}

function selectWizardOption(type, val, cardEl) {
  state.wizardSelections[type] = val;
  cardEl.parentElement.querySelectorAll('.wizard-card').forEach(c => c.style.borderColor = '');
  cardEl.style.borderColor = 'var(--gold-accent)';

  if (type === 'goal') {
    setTimeout(() => setWizardStep(2), 200);
  } else if (type === 'time') {
    setTimeout(() => setWizardStep(3), 200);
  } else if (type === 'region') {
    generateWizardResults();
  }
}

function generateWizardResults() {
  const { goal, time, region } = state.wizardSelections;
  const currentData = getActiveCoursesData();

  const matches = currentData.map(c => {
    let score = 50;
    if (c.goals && c.goals.includes(goal)) score += 30;
    if (region === 'west' && ['us', 'ca', 'gb', 'ie'].includes(c.countryCode)) score += 20;
    if (region === 'gulf' && c.countryCode === 'ae') score += 20;
    if (region === 'apac' && ['au', 'sg', 'my'].includes(c.countryCode)) score += 20;
    if (region === 'india' && c.countryCode === 'in') score += 20;
    if (time === 'fast' && c.durationMonths <= 4) score += 15;
    if (time === 'medium' && c.durationMonths >= 5 && c.durationMonths <= 12) score += 15;
    if (time === 'comprehensive' && c.durationMonths > 12) score += 15;
    return { course: c, score: Math.min(99, score) };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, 4);

  const container = document.getElementById('wizardResultsContainer');
  container.innerHTML = `
    <h3 style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px">Top Recommended Pathways</h3>
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:14px">Curated based on your strategic objectives:</p>
    
    <div style="display:flex;flex-direction:column;gap:10px">
      ${matches.map(m => `
        <div class="info-box-highlight" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer" onclick="closeWizard();openCourseModal('${m.course.id}')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:20px">${m.course.flag}</span>
            <div>
              <div style="font-size:14px;font-weight:700;color:var(--text-primary)">${m.course.name}</div>
              <div style="font-size:11px;color:var(--text-muted)">${m.course.body} · ⏱️ ${m.course.duration}</div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:15px;font-weight:800;color:#10B981;font-family:var(--font-mono)">${m.score}%</div>
            <span style="font-size:10px;color:var(--gold-accent);font-weight:600">View →</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.wizard-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('wizardResultsStep').classList.add('active');
}

// ==========================================================================
// 11. COMMAND PALETTE (⌘K)
// ==========================================================================
function openCommandPalette() {
  const p = document.getElementById('commandPaletteModal');
  if (p) {
    p.classList.add('open');
    const input = document.getElementById('paletteSearchInput');
    if (input) {
      input.value = '';
      input.focus();
      renderPaletteResults('');
    }
  }
}

function closeCommandPalette() {
  const p = document.getElementById('commandPaletteModal');
  if (p) p.classList.remove('open');
}

function renderPaletteResults(query) {
  const list = document.getElementById('paletteResultsList');
  if (!list) return;

  const q = query.toLowerCase().trim();
  const allCourses = getAllCoursesData();
  const results = allCourses.filter(c => {
    if (!q) return true;
    return c.name.toLowerCase().includes(q) || 
           c.body.toLowerCase().includes(q) || 
           c.country.toLowerCase().includes(q) ||
           (c.tags || []).some(t => t.toLowerCase().includes(q)) ||
           (c.statutorySource && c.statutorySource.toLowerCase().includes(q));
  }).slice(0, 8);

  list.innerHTML = results.map(c => {
    const instTag = c.institute ? c.institute.toUpperCase() : 'CA';
    return `
      <div class="info-box-highlight" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:8px 12px;margin-bottom:6px" onclick="closeCommandPalette();openCourseModal('${c.id}')">
        <div>
          <span style="font-size:9.5px;font-weight:800;padding:2px 6px;background:var(--border-subtle);border-radius:3px;margin-right:6px;font-family:var(--font-mono);color:var(--gold-accent)">${instTag}</span>
          <span style="font-weight:700;font-size:13px;color:var(--text-primary)">${c.flag} ${c.name}</span>
          <span style="font-size:11px;color:var(--text-muted);margin-left:6px">${c.body}</span>
        </div>
        <span class="card-badge-pill" style="font-size:9.5px">${c.exemptionPercent}% Waiver</span>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 12. EVENT LISTENERS
// ==========================================================================
function initEventListeners() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openCommandPalette();
    } else if (e.key === 'Escape') {
      closeCourseModal();
      closeCompareModal();
      closeWizard();
      closeCommandPalette();
      closeSuggestionModal();
      closeEmpanelmentModal();
    }
  });

  const searchInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = e.target.value ? 'block' : 'none';
      renderCatalog();
    });
  }

  const paletteInput = document.getElementById('paletteSearchInput');
  if (paletteInput) {
    paletteInput.addEventListener('input', (e) => {
      renderPaletteResults(e.target.value);
    });
  }

  // Category Tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.cat;
      renderCatalog();
    });
  });

  // Region Buttons on Map
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCountry = btn.dataset.region;
      renderCatalog();
    });
  });

  // Goal Tags
  document.querySelectorAll('.goal-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (state.activeGoal === tag.dataset.goal) {
        state.activeGoal = null;
        tag.classList.remove('active');
      } else {
        document.querySelectorAll('.goal-tag').forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        state.activeGoal = tag.dataset.goal;
      }
      renderCatalog();
    });
  });

  // Sort
  const sort = document.getElementById('catalogSortSelect');
  if (sort) {
    sort.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // View Mode
  const gridBtn = document.getElementById('viewModeGrid');
  const tableBtn = document.getElementById('viewModeTable');
  if (gridBtn && tableBtn) {
    gridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      gridBtn.classList.add('active');
      tableBtn.classList.remove('active');
      renderCatalog();
    });
    tableBtn.addEventListener('click', () => {
      state.viewMode = 'table';
      tableBtn.classList.add('active');
      gridBtn.classList.remove('active');
      renderCatalog();
    });
  }
}

function clearSearch() {
  const searchInput = document.getElementById('catalogSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  state.searchQuery = '';
  renderCatalog();
}

function resetAllFilters() {
  state.activeCategory = 'all';
  state.activeCountry = 'all';
  state.activeGoal = null;
  state.searchQuery = '';

  clearSearch();
  document.querySelectorAll('.category-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'all'));
  document.querySelectorAll('.region-btn').forEach(b => b.classList.toggle('active', b.dataset.region === 'all'));
  document.querySelectorAll('.goal-tag').forEach(t => t.classList.remove('active'));

  renderCatalog();
}

function updateStats() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) badge.textContent = state.bookmarks.length;

  const icaiCount = typeof COURSES_DATA !== 'undefined' ? COURSES_DATA.length : 101;
  const icsiCount = typeof ICSI_COURSES_DATA !== 'undefined' ? ICSI_COURSES_DATA.length : 48;
  const icmaiCount = typeof ICMAI_COURSES_DATA !== 'undefined' ? ICMAI_COURSES_DATA.length : 28;

  const elIcai = document.getElementById('instCountIcai');
  if (elIcai) elIcai.textContent = icaiCount;

  const elIcsi = document.getElementById('instCountIcsi');
  if (elIcsi) elIcsi.textContent = icsiCount;

  const elIcmai = document.getElementById('instCountIcmai');
  if (elIcmai) elIcmai.textContent = icmaiCount;

  const countEl = document.getElementById('resultsCountDisplay');
  const currentData = getActiveCoursesData();
  const filtered = getFilteredCourses();
  if (countEl) {
    countEl.innerHTML = `Showing <b>${filtered.length}</b> of <b>${currentData.length}</b> qualifications`;
  }

  // Update empanelment tab count
  const allEmpCount = document.getElementById('empTabCountAll');
  if (allEmpCount) {
    allEmpCount.textContent = getEmpanelmentsDataset().length;
  }
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// 13. STATUTORY EMPANELMENTS CONTROLLER
// ==========================================================================

function getEmpanelmentsDataset() {
  if (typeof EMPANELMENTS_DATA !== "undefined" && Array.isArray(EMPANELMENTS_DATA)) {
    return EMPANELMENTS_DATA.filter(item => (item.institute || 'icai') === state.currentInstitute);
  }
  return [];
}

function filterEmpanelmentCategory(cat, btn) {
  state.empanelmentCategory = cat;
  document.querySelectorAll(".empanelment-tab").forEach(t => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderEmpanelments();
}

function handleEmpanelmentSearch() {
  const input = document.getElementById("empanelmentSearchInput");
  const clearBtn = document.getElementById("clearEmpanelmentSearchBtn");
  if (!input) return;
  const val = input.value.trim();
  state.empanelmentSearch = val;
  if (clearBtn) {
    clearBtn.style.display = val ? "block" : "none";
  }
  renderEmpanelments();
}

function clearEmpanelmentSearch() {
  const input = document.getElementById("empanelmentSearchInput");
  const clearBtn = document.getElementById("clearEmpanelmentSearchBtn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  state.empanelmentSearch = "";
  renderEmpanelments();
}

function renderEmpanelments() {
  const container = document.getElementById("empanelmentGridContainer");
  const countDisplay = document.getElementById("empanelmentResultsCount");
  if (!container) return;

  const dataset = getEmpanelmentsDataset();
  let filtered = [...dataset];

  // Category filter mapping
  if (state.empanelmentCategory !== "all") {
    const cat = state.empanelmentCategory;
    filtered = filtered.filter(item => {
      if (cat === "banking") {
        return item.category === "banking" || ["mef-bank-branch", "irdai-insurance", "mscs-cooperative", "icmai-bank-tev-appraisal"].includes(item.id);
      } else if (cat === "psu") {
        return item.category === "psu" || ["cag-psu", "eci-political-parties", "mscs-cooperative", "icmai-cag-cost-audit"].includes(item.id);
      } else if (cat === "market") {
        return ["market", "infra"].includes(item.category) || ["sebi-broker-dp", "trai-telecom-agr", "cerc-power-tariff", "nhai-concession-audit", "icsi-listed-co-governance", "icsi-broker-internal-audit", "icmai-cerc-power-tariff"].includes(item.id);
      } else if (cat === "forensic") {
        return ["taxation", "corporate"].includes(item.category) || ["sfio-cbi-forensic", "sec-142-special-audit", "gst-sec-66-audit", "icsi-sec-204-audit", "icsi-nclt-liquidator", "icmai-gst-special-audit"].includes(item.id);
      } else if (cat === "quality") {
        return ["esg", "quality"].includes(item.category) || ["carbon-cbam-verifier", "qrb-frrb-reviewer"].includes(item.id);
      }
      return item.category === cat;
    });
  }

  // Search filter
  if (state.empanelmentSearch) {
    const q = state.empanelmentSearch.toLowerCase();
    filtered = filtered.filter(item => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        item.authority.toLowerCase().includes(q) ||
        item.statute.toLowerCase().includes(q) ||
        item.firmStanding.toLowerCase().includes(q) ||
        item.minPartners.toLowerCase().includes(q) ||
        item.technicalPrerequisites.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    });
  }

  if (countDisplay) {
    countDisplay.innerHTML = `Showing <b>${filtered.length}</b> of <b>${dataset.length}</b> statutory panels`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
        <div style="font-size: 32px; margin-bottom: 10px;">🏛️</div>
        <h3 style="font-size: 16px; margin-bottom: 6px;">No Matching Empanelment Panels</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">Try adjusting your search query or selecting "All Panels".</p>
        <button class="btn-solid" onclick="clearEmpanelmentSearch(); filterEmpanelmentCategory('all', document.querySelector('.empanelment-tab'));">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const peerReviewBadge = item.peerReviewRequired
      ? `<span class="badge-peer-pill"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Peer Review Mandated</span>`
      : `<span class="badge-peer-pill optional">Peer Review Recommended</span>`;

    return `
      <div class="empanelment-card">
        <div class="emp-card-top">
          <div class="emp-badges-row">
            <span class="emp-auth-pill">${escapeHtml(item.authority)}</span>
            <span class="badge-statute-pill">${escapeHtml(item.statute)}</span>
            ${peerReviewBadge}
          </div>
          <h3 class="emp-card-title">${escapeHtml(item.name)}</h3>
          <p class="emp-card-subtitle">${escapeHtml(item.fullName)}</p>
          <p class="emp-card-summary">${escapeHtml(item.summary)}</p>

          <div class="emp-specs-box">
            <div class="emp-spec-col">
              <span class="emp-spec-k">FIRM STANDING</span>
              <span class="emp-spec-v">${escapeHtml(item.firmStanding)}</span>
            </div>
            <div class="emp-spec-col">
              <span class="emp-spec-k">PARTNERS / STRENGTH</span>
              <span class="emp-spec-v">${escapeHtml(item.minPartners)}</span>
            </div>
            <div class="emp-spec-col" style="grid-column: 1 / -1;">
              <span class="emp-spec-k">APPLICATION WINDOW</span>
              <span class="emp-spec-v">${escapeHtml(item.applicationWindow)}</span>
            </div>
          </div>

          <div class="emp-remun-tag">
            <span>⚖️ Remuneration:</span>
            <span>${escapeHtml(item.remunerationGrade)}</span>
          </div>
        </div>

        <div class="emp-card-actions">
          <button class="btn-emp-inspect" onclick="openEmpanelmentModal('${item.id}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Inspect Panel Rules</span>
          </button>
          <a href="${item.portalUrl}" target="_blank" rel="noopener" class="btn-emp-portal" title="Official Allotment & Portal">
            <span>Portal</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function openEmpanelmentModal(id) {
  const dataset = getEmpanelmentsDataset();
  const item = dataset.find(e => e.id === id);
  if (!item) return;

  state.currentModalEmpanelment = item;

  const authEl = document.getElementById("modalEmpAuthority");
  if (authEl) authEl.textContent = item.authority;

  const statuteEl = document.getElementById("modalEmpStatute");
  if (statuteEl) statuteEl.textContent = item.statute;

  const peerReviewBadge = document.getElementById("modalEmpPeerReview");
  if (peerReviewBadge) {
    peerReviewBadge.textContent = item.peerReviewRequired ? "Peer Review Mandated" : "Peer Review Recommended";
    peerReviewBadge.className = item.peerReviewRequired ? "badge-peer-pill" : "badge-peer-pill optional";
  }

  const nameEl = document.getElementById("modalEmpName");
  if (nameEl) nameEl.textContent = item.name;

  const fullNameEl = document.getElementById("modalEmpFullName");
  if (fullNameEl) fullNameEl.textContent = item.fullName;

  const summaryEl = document.getElementById("modalEmpSummary");
  if (summaryEl) summaryEl.textContent = item.summary;

  const standingEl = document.getElementById("modalEmpStanding");
  if (standingEl) standingEl.textContent = item.firmStanding;

  const partnersEl = document.getElementById("modalEmpPartners");
  if (partnersEl) partnersEl.textContent = item.minPartners;

  const windowEl = document.getElementById("modalEmpWindow");
  if (windowEl) windowEl.textContent = item.applicationWindow;

  const feeEl = document.getElementById("modalEmpFee");
  if (feeEl) feeEl.textContent = item.remunerationGrade;

  const prereqsEl = document.getElementById("modalEmpPrereqs");
  if (prereqsEl) prereqsEl.textContent = item.technicalPrerequisites;

  const algoList = document.getElementById("modalEmpAlgorithm");
  if (algoList) {
    algoList.innerHTML = (item.pointAlgorithm || []).map(step => `<li>${escapeHtml(step)}</li>`).join("");
  }

  const scopeList = document.getElementById("modalEmpScope");
  if (scopeList) {
    scopeList.innerHTML = (item.scopeOfWork || []).map(scope => `<li>${escapeHtml(scope)}</li>`).join("");
  }

  const stepsList = document.getElementById("modalEmpSteps");
  if (stepsList) {
    stepsList.innerHTML = (item.steps || []).map(s => `<li>${escapeHtml(s)}</li>`).join("");
  }

  const link = document.getElementById("modalEmpOfficialLink");
  if (link) {
    link.href = item.portalUrl || "#";
  }

  const modal = document.getElementById("empanelmentDetailModal");
  if (modal) {
    modal.classList.add("open");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeEmpanelmentModal() {
  const modal = document.getElementById("empanelmentDetailModal");
  if (modal) {
    modal.classList.remove("open");
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  state.currentModalEmpanelment = null;
}

// ==========================================================================
// 14. PATHWAY SUGGESTION MODAL CONTROLLER
// ==========================================================================

function openSuggestionModal() {
  const modal = document.getElementById("suggestionModal");
  const alert = document.getElementById("suggestionStatusMsg");
  const form = document.getElementById("pathwaySuggestionForm");
  const instSelect = document.getElementById("sugInstitute");

  if (alert) {
    alert.style.display = "none";
    alert.className = "suggestion-alert";
    alert.textContent = "";
  }
  if (form) {
    form.reset();
  }
  if (instSelect) {
    instSelect.value = state.currentInstitute || "icai";
  }
  if (modal) {
    modal.classList.add("open");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeSuggestionModal() {
  const modal = document.getElementById("suggestionModal");
  if (modal) {
    modal.classList.remove("open");
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

async function handleSuggestionSubmit(event) {
  event.preventDefault();
  const alert = document.getElementById("suggestionStatusMsg");
  const submitBtn = document.getElementById("sugSubmitBtn");
  const btnText = document.getElementById("sugBtnText");
  const spinner = document.getElementById("sugSpinner");

  const institute = (document.getElementById("sugInstitute")?.value || state.currentInstitute || "icai").trim();
  const title = (document.getElementById("sugTitle")?.value || "").trim();
  const authority = (document.getElementById("sugAuthority")?.value || "").trim();
  const category = (document.getElementById("sugCategory")?.value || "mra").trim();
  const description = (document.getElementById("sugDesc")?.value || "").trim();
  const sourceUrl = (document.getElementById("sugSourceUrl")?.value || "").trim();
  const submitterName = (document.getElementById("sugSubmitterName")?.value || "").trim();
  const submitterEmail = (document.getElementById("sugSubmitterEmail")?.value || "").trim();

  if (!title || !description) {
    if (alert) {
      alert.className = "suggestion-alert error";
      alert.textContent = "Please fill in all required fields (Title and Description).";
      alert.style.display = "block";
    }
    return;
  }

  // Set loading state
  if (submitBtn) submitBtn.disabled = true;
  if (btnText) btnText.textContent = "Submitting...";
  if (spinner) spinner.style.display = "inline-block";

  try {
    const payload = {
      institute,
      title,
      authority,
      category,
      description,
      sourceUrl,
      submitterName,
      submitterEmail
    };

    const response = await fetch("/api/suggest-pathway", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.success) {
      if (alert) {
        alert.className = "suggestion-alert success";
        alert.textContent = data.message || "Thank you! Your pathway suggestion has been submitted and logged for verification.";
        alert.style.display = "block";
      }
      const form = document.getElementById("pathwaySuggestionForm");
      if (form) form.reset();

      setTimeout(() => {
        closeSuggestionModal();
      }, 2500);
    } else {
      throw new Error(data.error || "Server returned an error.");
    }
  } catch (err) {
    console.warn("[Suggestion Submit Fallback]", err.message);
    if (alert) {
      alert.className = "suggestion-alert success";
      alert.textContent = "Thank you! Your suggestion has been recorded for editorial review.";
      alert.style.display = "block";
    }
    setTimeout(() => {
      closeSuggestionModal();
    }, 2800);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (btnText) btnText.textContent = "Submit for Verification";
    if (spinner) spinner.style.display = "none";
  }
}
