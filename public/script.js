/**
 * ICAI Career Advantage Global Directory — Executive Controller
 * High-performance, clean vanilla JS architecture
 */

// Application State
const state = {
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
  wizardSelections: {
    goal: null,
    time: null,
    region: null
  }
};

// Map Hotspot Details
const MAP_HOTSPOTS = {
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
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCounters();
  initWorldMap();
  initMobileHubsCarousel();
  initEventListeners();
  renderCatalog();
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
// 2. COUNTERS ANIMATION
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
          }, 40);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.15 });

  nums.forEach(n => obs.observe(n));
}

// ==========================================================================
// 3. ACCURATE WORLD MAP & MOBILE HUBS
// ==========================================================================
function initWorldMap() {
  const pins = document.querySelectorAll('.geo-pin');
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = pin.dataset.country;
      showMapPopover(code);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-info-popover') && !e.target.closest('.geo-pin')) {
      hideMapPopover();
    }
  });
}

function showMapPopover(code) {
  const data = MAP_HOTSPOTS[code];
  if (!data) return;

  const pop = document.getElementById('mapPopover');
  if (!pop) return;

  pop.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-size:14px;font-weight:700;color:var(--text-primary)">
        ${data.flag} ${data.name}
      </div>
      <button onclick=\"hideMapPopover()\" style=\"background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:14px\">✕</button>
    </div>
    <p style=\"font-size:11.5px;color:var(--text-secondary);line-height:1.45;margin-bottom:8px\">${data.agreements}</p>
    <div style=\"font-size:11px;padding:4px 0;border-top:1px solid var(--border-subtle);display:flex;justify-content:space-between\">
      <span style=\"color:var(--text-muted)\">Expat Comp:</span>
      <span style=\"font-family:var(--font-mono);font-weight:700;color:var(--gold-accent)\">${data.salaryRange}</span>
    </div>
    <button onclick=\"filterByMapRegion('${code}')\" style=\"width:100%;margin-top:8px;padding:6px;background:var(--gold-accent);color:#0F172A;border:none;border-radius:4px;font-size:11px;font-weight:700;cursor:pointer\">
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

  container.innerHTML = Object.entries(MAP_HOTSPOTS).map(([code, h]) => `
    <div class=\"mobile-hub-card\" onclick=\"filterByMapRegion('${code}')\">
      <div class=\"hub-card-title\">${h.flag} ${h.name}</div>
      <div class=\"hub-card-salary\">${h.salaryRange}</div>
      <div style=\"font-size:10px;color:var(--text-muted);margin-top:2px\">Tap to filter →</div>
    </div>
  `).join('');
}

// ==========================================================================
// 4. FILTERING, SEARCH & SORT LOGIC
// ==========================================================================
function getFilteredCourses() {
  return COURSES_DATA.filter(c => {
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
// 5. RENDERING CATALOG
// ==========================================================================
function renderCatalog() {
  const filtered = getFilteredCourses();
  const container = document.getElementById('catalogResultsContainer');
  const countEl = document.getElementById('resultsCountDisplay');

  if (countEl) {
    countEl.innerHTML = `Showing <b>${filtered.length}</b> of <b>${COURSES_DATA.length}</b> qualifications`;
  }

  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style=\"text-align:center;padding:48px 16px;background:var(--bg-surface);border:1px solid var(--border-subtle);border-radius:var(--radius-md)\">
        <h3 style=\"font-size:16px;font-weight:700;color:var(--text-primary);margin-bottom:6px\">No qualifications found</h3>
        <p style=\"font-size:13px;color:var(--text-muted);max-width:380px;margin:0 auto 16px\">
          No qualifications match your active combination of filters and search keywords.
        </p>
        <button class=\"btn-solid\" onclick=\"resetAllFilters()\">Reset All Filters</button>
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
    <div class=\"cards-grid\">
      ${courses.map(c => {
        const isBookmarked = state.bookmarks.includes(c.id);
        const isCompared = state.selectedForCompare.has(c.id);

        return `
          <div class=\"course-card\" onclick=\"openCourseModal('${c.id}')\">
            <div class=\"card-top-row\">
              <div class=\"card-title-group\">
                <h3>${c.flag} ${c.name}</h3>
                <div class=\"card-org-name\">${c.body} · ${c.country}</div>
              </div>
              <span class=\"card-badge-pill\">${c.exemptionLevel}</span>
            </div>

            <div class=\"ex-row\">
              <div class=\"ex-row-header\">
                <span class=\"ex-row-title\">Exemption / Waiver</span>
                <span class=\"ex-row-score\">${c.exemptionPercent}%</span>
              </div>
              <div class=\"ex-track\">
                <div class=\"ex-fill\" style=\"width:${c.exemptionPercent}%\"></div>
              </div>
            </div>

            <div class=\"card-desc-snippet\">
              ${c.papersWaived || c.papersRequired}
            </div>

            <div class=\"card-metrics-grid\">
              <div>
                <div class=\"m-cell-lbl\">Duration</div>
                <div class=\"m-cell-val\">${c.duration}</div>
              </div>
              <div>
                <div class=\"m-cell-lbl\">Est. Cost</div>
                <div class=\"m-cell-val\">${c.costINR}</div>
              </div>
            </div>

            <div class=\"card-footer-actions\" onclick=\"event.stopPropagation()\">
              <button class=\"btn-open-detail\" onclick=\"openCourseModal('${c.id}')\">
                Details →
              </button>

              <div class=\"card-right-toggles\">
                <label class=\"compare-toggle-label\">
                  <input type=\"checkbox\" ${isCompared ? 'checked' : ''} onchange=\"toggleCompare('${c.id}', this)\">
                  <span>Compare</span>
                </label>
                <button class=\"star-btn ${isBookmarked ? 'active' : ''}\" onclick=\"toggleBookmark('${c.id}')\" title=\"Save Bookmark\">
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
    <div class=\"table-view-container\">
      <table class=\"executive-table\">
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
              <tr onclick=\"openCourseModal('${c.id}')\" style=\"cursor:pointer\">
                <td>
                  <div style=\"font-weight:700;color:var(--text-primary)\">${c.flag} ${c.name}</div>
                  <div style=\"font-size:10px;color:var(--text-muted)\">${c.country}</div>
                </td>
                <td style=\"font-size:11.5px\">${c.body}</td>
                <td><span class=\"card-badge-pill\">${c.category.toUpperCase()}</span></td>
                <td>
                  <span style=\"font-family:var(--font-mono);font-weight:700;color:#10B981\">${c.exemptionPercent}%</span>
                </td>
                <td style=\"font-family:var(--font-mono);font-size:11.5px\">${c.duration}</td>
                <td style=\"font-family:var(--font-mono);font-size:11.5px;color:var(--gold-accent)\">${c.costINR}</td>
                <td onclick=\"event.stopPropagation()\">
                  <div style=\"display:flex;align-items:center;gap:6px\">
                    <button class=\"btn-open-detail\" style=\"padding:3px 7px;font-size:11px\" onclick=\"openCourseModal('${c.id}')\">View</button>
                    <label class=\"compare-toggle-label\">
                      <input type=\"checkbox\" ${isCompared ? 'checked' : ''} onchange=\"toggleCompare('${c.id}', this)\">
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
// 6. DEEP-DIVE MODAL / BOTTOM SHEET
// ==========================================================================
function openCourseModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
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

  // Tab 1: Exemptions
  document.getElementById('modalTabExemptions').innerHTML = `
    <div class=\"modal-section\">
      <h4>Exemption Status</h4>
      <div class=\"info-box-highlight\" style=\"display:flex;align-items:center;justify-content:space-between\">
        <div>
          <div style=\"font-size:15px;font-weight:700;color:var(--text-primary)\">${c.exemptionLevel}</div>
          <div style=\"font-size:11px;color:var(--text-muted);margin-top:2px\">Official bilateral recognition</div>
        </div>
        <div style=\"font-size:22px;font-weight:800;font-family:var(--font-mono);color:#10B981\">
          ${c.exemptionPercent}%
        </div>
      </div>
    </div>
    
    <div class=\"modal-section\">
      <h4>Papers &amp; Modules Waived</h4>
      <div class=\"info-box-highlight\" style=\"border-left:3px solid #10B981\">
        <p style=\"font-size:12.5px;color:var(--text-secondary)\">${c.papersWaived}</p>
      </div>
    </div>

    <div class=\"modal-section\">
      <h4>Papers Required to Appear</h4>
      <div class=\"info-box-highlight\" style=\"border-left:3px solid var(--gold-accent)\">
        <p style=\"font-size:12.5px;color:var(--text-secondary)\">${c.papersRequired}</p>
      </div>
    </div>
  `;

  // Tab 2: Prerequisites
  document.getElementById('modalTabEligibility').innerHTML = `
    <div class=\"modal-section\">
      <h4>ICAI Eligibility Criteria</h4>
      <div class=\"info-box-highlight\">
        <p style=\"font-size:13px;color:var(--text-secondary);line-height:1.5\">${c.prerequisites}</p>
      </div>
      <div style=\"margin-top:12px;font-size:11.5px;color:var(--text-muted)\">
        Note: Certificate of Good Standing must be requested via the ICAI Self Service Portal (SSP).
      </div>
    </div>
  `;

  // Tab 3: Cost & Duration
  document.getElementById('modalTabCost').innerHTML = `
    <div class=\"modal-section\">
      <h4>Financial Outlay</h4>
      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px\">
        <div class=\"info-box-highlight\">
          <div style=\"font-size:10px;text-transform:uppercase;color:var(--text-muted);font-weight:600\">INR Equivalent</div>
          <div style=\"font-size:17px;font-weight:800;color:var(--text-primary);font-family:var(--font-mono);margin-top:2px\">${c.costINR}</div>
        </div>
        <div class=\"info-box-highlight\">
          <div style=\"font-size:10px;text-transform:uppercase;color:var(--text-muted);font-weight:600\">Foreign Currency</div>
          <div style=\"font-size:17px;font-weight:800;color:var(--gold-accent);font-family:var(--font-mono);margin-top:2px\">${c.costForeign}</div>
        </div>
      </div>
    </div>

    <div class=\"modal-section\">
      <h4>Duration to Complete</h4>
      <div class=\"info-box-highlight\">
        <div style=\"font-size:14px;font-weight:700;color:var(--text-primary)\">${c.duration}</div>
        <p style=\"font-size:12px;color:var(--text-muted);margin-top:2px\">Estimated based on standard self-paced study alongside active employment.</p>
      </div>
    </div>
  `;

  // Tab 4: Career Horizons
  document.getElementById('modalTabCareer').innerHTML = `
    <div class=\"modal-section\">
      <h4>Career Impact &amp; Target Roles</h4>
      <div class=\"info-box-highlight\">
        <p style=\"font-size:13px;color:var(--text-secondary);line-height:1.5\">${c.careerImpact}</p>
      </div>
    </div>
  `;

  // Tab 5: Roadmap
  document.getElementById('modalTabRoadmap').innerHTML = `
    <div class=\"modal-section\">
      <h4>Step-by-Step Application Roadmap</h4>
      <div style=\"margin-top:10px\">
        ${(c.steps || []).map((step, idx) => `
          <div class=\"roadmap-step\">
            <div class=\"step-num\">${idx + 1}</div>
            <div class=\"step-text\">${step}</div>
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
// 7. SIDE-BY-SIDE COMPARISON
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
  const countEl = document.getElementById('compareDockCount');
  if (!dock) return;

  if (state.selectedForCompare.size > 0) {
    dock.classList.add('visible');
    countEl.textContent = state.selectedForCompare.size;
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

  const courses = Array.from(state.selectedForCompare)
    .map(id => COURSES_DATA.find(c => c.id === id))
    .filter(Boolean);

  if (courses.length === 0) return;

  const table = document.getElementById('compareMatrixTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th style=\"width:150px\">Criteria</th>
        ${courses.map(c => `<th><b>${c.flag} ${c.name}</b><div style=\"font-size:10.5px;color:var(--text-muted)\">${c.body}</div></th>`).join('')}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Exemption %</b></td>
        ${courses.map(c => `<td><span style=\"font-weight:700;color:#10B981;font-size:15px\">${c.exemptionPercent}%</span><br><span style=\"font-size:10.5px;color:var(--text-muted)\">${c.exemptionLevel}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Papers to Pass</b></td>
        ${courses.map(c => `<td><span style=\"font-size:11.5px\">${c.papersRequired}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Duration</b></td>
        ${courses.map(c => `<td><span style=\"font-family:var(--font-mono);font-size:12px\">${c.duration}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Est. Fees (INR)</b></td>
        ${courses.map(c => `<td><span style=\"font-family:var(--font-mono);font-weight:700;color:var(--gold-accent)\">${c.costINR}</span><br><span style=\"font-size:10.5px;color:var(--text-muted)\">${c.costForeign}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Career Roles</b></td>
        ${courses.map(c => `<td><span style=\"font-size:11.5px\">${c.careerImpact}</span></td>`).join('')}
      </tr>
      <tr>
        <td><b>Official Portal</b></td>
        ${courses.map(c => `<td><a href=\"${c.officialUrl}\" target=\"_blank\" rel=\"noopener\" class=\"btn-open-detail\" style=\"display:inline-block;padding:3px 8px;text-decoration:none\">Visit ↗</a></td>`).join('')}
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
// 8. BOOKMARKING & SAVED FILTER
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
}

// ==========================================================================
// 9. CAREER PATHWAY FINDER WIZARD
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

  const matches = COURSES_DATA.map(c => {
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
    <h3 style=\"font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px\">Top Recommended Pathways</h3>
    <p style=\"font-size:12px;color:var(--text-muted);margin-bottom:14px\">Curated based on your strategic objectives:</p>
    
    <div style=\"display:flex;flex-direction:column;gap:10px\">
      ${matches.map(m => `
        <div class=\"info-box-highlight\" style=\"display:flex;align-items:center;justify-content:space-between;cursor:pointer\" onclick=\"closeWizard();openCourseModal('${m.course.id}')\">
          <div style=\"display:flex;align-items:center;gap:10px\">
            <span style=\"font-size:20px\">${m.course.flag}</span>
            <div>
              <div style=\"font-size:14px;font-weight:700;color:var(--text-primary)\">${m.course.name}</div>
              <div style=\"font-size:11px;color:var(--text-muted)\">${m.course.body} · ⏱️ ${m.course.duration}</div>
            </div>
          </div>
          <div style=\"text-align:right\">
            <div style=\"font-size:15px;font-weight:800;color:#10B981;font-family:var(--font-mono)\">${m.score}%</div>
            <span style=\"font-size:10px;color:var(--gold-accent);font-weight:600\">View →</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.wizard-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('wizardResultsStep').classList.add('active');
}

// ==========================================================================
// 10. COMMAND PALETTE (⌘K)
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
  const results = COURSES_DATA.filter(c => {
    if (!q) return true;
    return c.name.toLowerCase().includes(q) || 
           c.body.toLowerCase().includes(q) || 
           c.country.toLowerCase().includes(q) ||
           (c.tags || []).some(t => t.toLowerCase().includes(q));
  }).slice(0, 8);

  list.innerHTML = results.map(c => `
    <div class=\"info-box-highlight\" style=\"display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:8px 12px;margin-bottom:6px\" onclick=\"closeCommandPalette();openCourseModal('${c.id}')\">
      <div>
        <span style=\"font-weight:700;font-size:13px;color:var(--text-primary)\">${c.flag} ${c.name}</span>
        <span style=\"font-size:11px;color:var(--text-muted);margin-left:6px\">${c.body}</span>
      </div>
      <span class=\"card-badge-pill\" style=\"font-size:9.5px\">${c.exemptionPercent}% Waiver</span>
    </div>
  `).join('');
}

// ==========================================================================
// 11. EVENT LISTENERS
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
}
