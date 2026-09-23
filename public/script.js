/**
 * Tri-Institute Matrix — page controller
 * Vanilla JS, no build step. Reads the four data files loaded before it and
 * derives every count on the page from them, so adding a record to a data
 * file is all it takes to update the site.
 */
(() => {
  'use strict';

  // ==========================================================================
  // 1. DATA
  // ==========================================================================
  // Records marked "hidden": true stay in the data files for review but are not shown.
  const visible = list => (list || []).filter(x => !x.hidden);
  const DATA = {
    icai: visible(typeof COURSES_DATA !== 'undefined' ? COURSES_DATA : []),
    icsi: visible(typeof ICSI_COURSES_DATA !== 'undefined' ? ICSI_COURSES_DATA : []),
    icmai: visible(typeof ICMAI_COURSES_DATA !== 'undefined' ? ICMAI_COURSES_DATA : [])
  };
  const PANELS = visible(typeof EMPANELMENTS_DATA !== 'undefined' ? EMPANELMENTS_DATA : [])
    .map(p => ({ ...p, institute: p.institute || 'icai' }));

  const ALL = [];
  Object.entries(DATA).forEach(([inst, list]) => list.forEach(c => { c._inst = inst; ALL.push(c); }));
  const COURSE_BY_ID = new Map(ALL.map(c => [c.id, c]));
  const PANEL_BY_ID = new Map(PANELS.map(p => [p.id, p]));

  const INST = {
    icai: {
      short: 'CA', body: 'ICAI', person: 'Chartered Accountants',
      panelsSub: 'Audit allotments and statutory rosters under RBI, CAG, SEBI, IRDAI and other regulators, with the firm standing, partner strength, peer-review rules and fee scales each one expects.'
    },
    icsi: {
      short: 'CS', body: 'ICSI', person: 'Company Secretaries',
      panelsSub: 'Secretarial audit, governance and compliance panels for practising Company Secretaries under MCA, SEBI, the stock exchanges and IBBI.'
    },
    icmai: {
      short: 'CMA', body: 'ICMAI', person: 'Cost & Management Accountants',
      panelsSub: 'Cost audit, tariff, valuation and banking panels for practising Cost Accountants under the Cost and Works Accountants Act, 1959 and sector regulators.'
    }
  };

  const CATS = [
    { key: 'mra', label: 'Memberships abroad' },
    { key: 'intl', label: 'Global charters' },
    { key: 'niche', label: 'Specialist certifications' },
    { key: 'pqd', label: 'Post-qualification courses' },
    { key: 'india', label: 'Indian statutory courses' },
    { key: 'govt', label: 'Regulatory & statutory roles' },
    { key: 'degree', label: 'Degrees & research' }
  ];
  const CAT_LABEL = Object.fromEntries(CATS.map(c => [c.key, c.label]));
  // The waiver percentage only means "share of the other body's exams you skip"
  // for foreign memberships and charters; elsewhere it is filler, so it is hidden.
  const WAIVER_CATS = new Set(['mra', 'intl']);

  const GOALS = [
    { key: 'abroad', icon: 'globe', label: 'Work abroad', desc: 'Foreign memberships and charters that recognise your qualification' },
    { key: 'industry', icon: 'briefcase', label: 'Industry & CFO track', desc: 'Finance leadership, treasury, investment and FP&A roles' },
    { key: 'niche', icon: 'shield', label: 'Specialise', desc: 'IT audit, forensics, ESG, AML and other specialist credentials' },
    { key: 'regulatory', icon: 'scale', label: 'Statutory roles', desc: 'Insolvency, valuation, tribunals and regulator-appointed work' },
    { key: 'practice', icon: 'building', label: 'Grow your practice', desc: 'Registrations and rights that bring new assignments to a firm' },
    { key: 'academic', icon: 'book', label: 'Teach or research', desc: 'MBA, PhD, NET and academic routes', match: ['academic', 'degree'] }
  ];
  const GOAL_BY_KEY = Object.fromEntries(GOALS.map(g => [g.key, g]));

  // Map regions. x/y are positions in the world-land.path coordinate space.
  const HUBS = [
    { key: 'gb', name: 'UK, Ireland & Europe', short: 'UK & Europe', codes: ['gb', 'ie', 'eu', 'de'], x: 500, y: 107 },
    { key: 'us', name: 'United States', short: 'USA', codes: ['us'], x: 232, y: 142 },
    { key: 'ca', name: 'Canada', short: 'Canada', codes: ['ca'], x: 240, y: 96 },
    { key: 'ae', name: 'UAE & Gulf', short: 'UAE & Gulf', codes: ['ae'], x: 654, y: 180, left: true },
    { key: 'sa', name: 'South Asia', short: 'South Asia', codes: ['pk', 'np', 'lk', 'bd'], x: 721, y: 232, left: true },
    { key: 'sg', name: 'Singapore & Malaysia', short: 'Singapore & Malaysia', codes: ['sg', 'my'], x: 788, y: 246 },
    { key: 'au', name: 'Australia & New Zealand', short: 'Australia & NZ', codes: ['au'], x: 885, y: 345, left: true },
    { key: 'za', name: 'Africa', short: 'Africa', codes: ['za', 'ke'], x: 578, y: 323 }
  ];
  const HOME = { x: 714, y: 189 };

  const WHERE = {
    all: { label: 'Anywhere' },
    in: { label: 'India', codes: ['in'] },
    abroad: { label: 'Outside India', test: c => c.countryCode !== 'in' }
  };
  HUBS.forEach(h => { WHERE[h.key] = { label: h.name, codes: h.codes }; });
  WHERE.west = { label: 'UK, Europe & North America', codes: [...WHERE.gb.codes, 'us', 'ca'] };
  WHERE.apac = { label: 'Asia-Pacific', codes: [...WHERE.sg.codes, 'au'] };

  const TIMES = {
    any: { label: 'Any length' },
    short: { label: 'Under 3 months', test: m => m <= 3 },
    mid: { label: '3 to 12 months', test: m => m > 3 && m <= 12 },
    long: { label: 'Over a year', test: m => m > 12 }
  };

  const EFFORT = ['', 'Light', 'Moderate', 'Substantial', 'Demanding', 'Very demanding'];

  const PANEL_CATS = {
    banking: 'Banking & insurance',
    psu: 'Government & PSU',
    market: 'Capital markets',
    infra: 'Infrastructure & utilities',
    taxation: 'Tax & special audits',
    corporate: 'Corporate & forensic',
    esg: 'ESG & climate',
    quality: 'Quality review'
  };

  // Regional notes shown on the map cards. Pay ranges are indicative.
  const HUB_NOTES = {
    icai: {
      gb: { text: 'ICAEW Pathways (no exams for 5-year PQE), ACCA (9 of 13 papers waived), CIMA Gateway, CPA Ireland.', pay: '£65,000 – £125,000 / yr' },
      us: { text: '150-credit-hour equivalence for CPA USA state boards, CMA USA degree waiver, IRS Enrolled Agent, CFE point waiver.', pay: '$100,000 – $175,000 / yr' },
      ca: { text: 'CPA Canada MOU pathway. PEP modules largely waived; write designated CFE days.', pay: 'CAD 95,000 – 155,000 / yr' },
      au: { text: 'Reciprocal MRAs with CPA Australia and CA ANZ. Pass one capstone paper or attend the IPP workshop.', pay: 'AUD 110,000 – 180,000 / yr' },
      ae: { text: 'Approved Auditor status via SOCPA and UAE AAA. High corporate tax and VAT assurance demand.', pay: 'AED 280,000 – 550,000 / yr (tax-free)' },
      sg: { text: 'ISCA (Singapore) MOU pathway, MICPA (Malaysia) reciprocal conversion.', pay: 'SGD 100,000 – 165,000 / yr' },
      za: { text: 'SAICA reciprocal MRA for the CA(SA) charter. ICPAK MoU for East Africa practice rights.', pay: 'ZAR 850,000 – 1,400,000 / yr' }
    },
    icsi: {
      gb: { text: 'Chartered Governance Institute (CGI UK & Ireland) fast-track MRA, CISI UK MoU.', pay: '£60,000 – £115,000 / yr' },
      us: { text: 'Corporate governance officer, SEC EDGAR filing, SCCE compliance certification, SOX secretarial advisory.', pay: '$95,000 – $160,000 / yr' },
      ca: { text: 'Governance Professionals of Canada pathway, TSX corporate secretary and securities compliance practice.', pay: 'CAD 90,000 – 145,000 / yr' },
      au: { text: 'Governance Institute of Australia pathways, ASX Listing Rule compliance, corporate secretarial advisory.', pay: 'AUD 105,000 – 170,000 / yr' },
      ae: { text: 'DIFC and ADGM corporate service provider roles, UAE Commercial Companies Law governance officer.', pay: 'AED 260,000 – 480,000 / yr (tax-free)' },
      sg: { text: 'Corporate Secretaries International Association network, Singapore Institute of Directors fellow pathway.', pay: 'SGD 95,000 – 155,000 / yr' },
      za: { text: 'Chartered Secretaries Southern Africa governance exchange, King IV GRC roles.', pay: 'ZAR 750,000 – 1,250,000 / yr' }
    },
    icmai: {
      gb: { text: 'CIMA UK (CGMA Strategic Gateway), ACCA Strategic Professional MoU, CIPFA public finance.', pay: '£62,000 – £120,000 / yr' },
      us: { text: 'IMA US CMA with mutual paper exemptions, strategic cost management.', pay: '$95,000 – $165,000 / yr' },
      ca: { text: 'CPA Canada management accounting pathway, mining and natural-resource cost controllership.', pay: 'CAD 90,000 – 150,000 / yr' },
      au: { text: 'CPA Australia MoU (direct senior membership pathway), IPA Australia reciprocal recognition.', pay: 'AUD 105,000 – 175,000 / yr' },
      ae: { text: 'GCC energy and petrochemical cost consulting, transfer-pricing cost audit, project appraisal.', pay: 'AED 270,000 – 500,000 / yr (tax-free)' },
      sg: { text: 'ASEAN Management Accounting Association, APAC supply-chain cost controller roles.', pay: 'SGD 95,000 – 160,000 / yr' },
      za: { text: 'SAIPA MoU, mineral royalty and mining costing roles.', pay: 'ZAR 800,000 – 1,300,000 / yr' }
    }
  };

  const PAGE = 20;

  // ==========================================================================
  // 2. STATE & STORAGE
  // ==========================================================================
  const raw = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) { /* storage blocked */ } }
  };
  const savedIds = (() => {
    try { const v = JSON.parse(raw.get('icai_bm_v2') || '[]'); return Array.isArray(v) ? v : []; } catch (_) { return []; }
  })();

  const state = {
    inst: INST[raw.get('active_institute')] ? raw.get('active_institute') : 'icai',
    q: '',
    cats: new Set(),
    goal: null,
    where: 'all',
    time: 'any',
    savedOnly: false,
    sort: 'recommended',
    limit: PAGE,
    panelCat: 'all',
    panelQ: '',
    saved: new Set(savedIds),
    compare: [],
    wz: { step: 0, goal: null, time: null, where: null }
  };

  // ==========================================================================
  // 3. HELPERS
  // ==========================================================================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const safeUrl = u => (/^https?:\/\//i.test(String(u || '')) ? String(u) : '');
  const icon = (name, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const plural = (n, one, many) => `${n} ${n === 1 ? one : (many || one + 's')}`;
  const hasForeignCost = c => c.costForeign && !/^n\/?a$/i.test(c.costForeign.trim());

  const searchCache = new WeakMap();
  function haystack(c) {
    if (!searchCache.has(c)) {
      searchCache.set(c, [c.name, c.fullName, c.body, c.country, c.exemptionLevel, c.papersRequired,
        c.papersWaived, c.careerImpact, c.prerequisites, c.statutorySource, ...(c.tags || [])]
        .join(' ').toLowerCase());
    }
    return searchCache.get(c);
  }
  function panelHaystack(p) {
    if (!searchCache.has(p)) {
      searchCache.set(p, [p.name, p.fullName, p.authority, p.statute, p.firmStanding, p.minPartners,
        p.technicalPrerequisites, p.summary, ...(p.tags || [])].join(' ').toLowerCase());
    }
    return searchCache.get(p);
  }
  const words = q => q.toLowerCase().split(/\s+/).filter(Boolean);
  const textMatch = (hay, q) => words(q).every(w => hay.includes(w));

  const goalMatch = (c, key) => {
    const g = GOAL_BY_KEY[key];
    const keys = (g && g.match) || [key];
    return (c.goals || []).some(x => keys.includes(x));
  };
  const inWhere = (c, key) => {
    const w = WHERE[key];
    if (!w || key === 'all') return true;
    return w.test ? w.test(c) : w.codes.includes(c.countryCode);
  };
  const inTime = (c, key) => key === 'any' || !TIMES[key] || TIMES[key].test(c.durationMonths || 0);

  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function effortHTML(d) {
    const n = Math.max(0, Math.min(5, d || 0));
    if (!n) return '';
    const dots = [1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('');
    return `<span title="Effort: ${EFFORT[n]}"><span class="effort" aria-hidden="true">${dots}</span>${EFFORT[n]}</span>`;
  }
  function meterHTML(p) {
    const pct = Math.max(0, Math.min(100, p || 0));
    return `<span class="meter" title="${pct}% of the exams waived"><span class="meter-track"><span class="meter-fill" style="width:${pct}%"></span></span><b>${pct}%</b> waived</span>`;
  }

  // ==========================================================================
  // 4. FILTERING
  // ==========================================================================
  function baseSet() {
    return state.savedOnly ? ALL.filter(c => state.saved.has(c.id)) : DATA[state.inst];
  }
  function matches(c, skip) {
    if (skip !== 'cat' && state.cats.size && !state.cats.has(c.category)) return false;
    if (skip !== 'goal' && state.goal && !goalMatch(c, state.goal)) return false;
    if (skip !== 'where' && !inWhere(c, state.where)) return false;
    if (skip !== 'time' && !inTime(c, state.time)) return false;
    if (state.q && !textMatch(haystack(c), state.q)) return false;
    return true;
  }
  const SORTERS = {
    waived: (a, b) => b.exemptionPercent - a.exemptionPercent,
    duration: (a, b) => (a.durationMonths || 0) - (b.durationMonths || 0),
    effort: (a, b) => (a.difficulty || 0) - (b.difficulty || 0),
    name: (a, b) => a.name.localeCompare(b.name)
  };
  function filtered() {
    const list = baseSet().filter(c => matches(c));
    const s = SORTERS[state.sort];
    return s ? list.slice().sort(s) : list;
  }
  function activeFilterCount() {
    return state.cats.size + (state.goal ? 1 : 0) + (state.where !== 'all' ? 1 : 0) +
      (state.time !== 'any' ? 1 : 0) + (state.savedOnly ? 1 : 0);
  }

  // ==========================================================================
  // 5. RENDER: INTRO, GOALS
  // ==========================================================================
  function renderIntro() {
    const I = INST[state.inst];
    const list = DATA[state.inst];
    const panels = PANELS.filter(p => p.institute === state.inst).length;
    const abroad = new Set(list.map(c => c.countryCode).filter(k => k && k !== 'in' && k !== 'global')).size;
    const quick = list.filter(c => (c.durationMonths || 0) <= 3).length;

    $('#introEyebrow').textContent = `For ${I.body} members`;
    $('#introTitle').innerHTML = `Where your <em>${I.short}</em> qualification can take you`;
    $('#introLead').textContent = `${list.length} pathways open to ${I.person}, from foreign memberships with exams waived to specialist certifications, statutory roles and firm panels. Each one lists what is waived, what is left to do, the cost, and the law or agreement it rests on.`;
    $('#browseAllBtn').textContent = `Browse all ${list.length} pathways`;
    $('#introStats').innerHTML = [
      [list.length, 'Pathways'],
      [abroad, 'Countries and regions abroad'],
      [quick, 'Can be done within 3 months'],
      [panels, 'Firm panels']
    ].map(([n, l]) => `<div><dt>${l}</dt><dd>${n}</dd></div>`).join('');
    document.title = `${I.short} career pathways — Tri-Institute Matrix`;
  }

  function renderGoals() {
    const list = DATA[state.inst];
    $('#goalGrid').innerHTML = GOALS.map(g => {
      const n = list.filter(c => goalMatch(c, g.key)).length;
      if (!n) return '';
      return `<button class="goal-card" data-goal="${g.key}" aria-pressed="${state.goal === g.key}">
        <span class="goal-top"><span class="goal-icon">${icon(g.icon)}</span><span class="goal-count">${n}</span></span>
        <b>${esc(g.label)}</b>
        <span class="goal-desc">${esc(g.desc)}</span>
      </button>`;
    }).join('');
  }

  // ==========================================================================
  // 6. RENDER: FILTERS (built once per institute, counts refreshed on change)
  // ==========================================================================
  function buildFilters() {
    const list = DATA[state.inst];
    const opt = (type, name, value, label) => `
      <label class="opt" data-opt="${name}:${value}">
        <input type="${type}" name="${name}" value="${value}">
        <span class="opt-label">${esc(label)}</span>
        <span class="opt-n"></span>
      </label>`;
    const group = (title, body) => `<div class="filter-group"><h3>${title}</h3>${body}</div>`;

    const cats = CATS.filter(c => list.some(x => x.category === c.key));
    const hubs = HUBS.filter(h => list.some(c => h.codes.includes(c.countryCode)));
    const goals = GOALS.filter(g => list.some(c => goalMatch(c, g.key)));

    $('#filtersBody').innerHTML =
      group('Saved', opt('checkbox', 'saved', '1', 'Only my saved pathways')) +
      group('Type', cats.map(c => opt('checkbox', 'cat', c.key, c.label)).join('')) +
      group('Where', [['all', 'Anywhere'], ['in', 'India'], ['abroad', 'Outside India'], ...hubs.map(h => [h.key, h.name])]
        .map(([k, l]) => opt('radio', 'where', k, l)).join('')) +
      group('Time needed', Object.entries(TIMES).map(([k, t]) => opt('radio', 'time', k, t.label)).join('')) +
      group('Goal', [['', 'Any goal'], ...goals.map(g => [g.key, g.label])].map(([k, l]) => opt('radio', 'goal', k, l)).join(''));
  }

  function refreshFilters() {
    const base = baseSet();
    const countFor = (skip, test) => base.filter(c => matches(c, skip) && test(c)).length;
    $$('#filtersBody .opt').forEach(el => {
      const [name, value] = el.dataset.opt.split(':');
      const input = $('input', el);
      let n = null;
      if (name === 'saved') {
        input.checked = state.savedOnly;
        n = state.saved.size;
      } else if (name === 'cat') {
        input.checked = state.cats.has(value);
        n = countFor('cat', c => c.category === value);
      } else if (name === 'where') {
        input.checked = state.where === value;
        n = countFor('where', c => inWhere(c, value));
      } else if (name === 'time') {
        input.checked = state.time === value;
        n = countFor('time', c => inTime(c, value));
      } else if (name === 'goal') {
        input.checked = (state.goal || '') === value;
        n = countFor('goal', c => !value || goalMatch(c, value));
      }
      $('.opt-n', el).textContent = n;
      el.classList.toggle('is-empty', n === 0 && !input.checked);
    });
  }

  // ==========================================================================
  // 7. RENDER: RESULTS
  // ==========================================================================
  function rowHTML(c) {
    const saved = state.saved.has(c.id);
    const cmp = state.compare.includes(c.id);
    const crossInst = state.savedOnly || c._inst !== state.inst;
    return `<li><article class="row">
      <button class="row-main" data-open="${esc(c.id)}">
        <span class="row-flag" aria-hidden="true">${esc(c.flag)}</span>
        <span class="row-body">
          <span class="row-title">${esc(c.name)}${crossInst ? ` <span class="inst-tag">${INST[c._inst].short}</span>` : ''}</span>
          <span class="row-sub">${esc(c.body)} · ${esc(c.country)}</span>
          <span class="row-what">${esc(c.papersWaived || c.papersRequired)}</span>
          <span class="row-meta">
            <span class="tag">${esc(c.exemptionLevel)}</span>
            ${WAIVER_CATS.has(c.category) ? meterHTML(c.exemptionPercent) : ''}
            <span>${icon('clock')}${esc(c.duration)}</span>
            <span>${esc(c.costINR)}</span>
            ${effortHTML(c.difficulty)}
          </span>
        </span>
      </button>
      <div class="row-actions">
        <button class="mini-btn save-btn" data-save="${esc(c.id)}" aria-pressed="${saved}" aria-label="Save ${esc(c.name)}">${icon('star')}<span>${saved ? 'Saved' : 'Save'}</span></button>
        <button class="mini-btn" data-compare="${esc(c.id)}" aria-pressed="${cmp}" aria-label="Compare ${esc(c.name)}">${cmp ? icon('check') : ''}<span>Compare</span></button>
      </div>
    </article></li>`;
  }

  function renderChips() {
    const chips = [];
    const chip = (k, v, label) => chips.push(`<button class="chip" data-action="rm" data-k="${k}" data-v="${esc(v)}" aria-label="Remove filter: ${esc(label)}">${esc(label)}${icon('x')}</button>`);
    if (state.savedOnly) chip('saved', '', 'Saved only');
    state.cats.forEach(k => chip('cat', k, CAT_LABEL[k] || k));
    if (state.where !== 'all') chip('where', '', WHERE[state.where].label);
    if (state.time !== 'any') chip('time', '', TIMES[state.time].label);
    if (state.goal) chip('goal', '', GOAL_BY_KEY[state.goal].label);
    if (state.q) chip('q', '', `“${state.q}”`);
    if (chips.length > 1) chips.push('<button class="link-btn" data-action="reset">Clear all</button>');
    $('#activeChips').innerHTML = chips.join('');
  }

  function renderResults() {
    const list = filtered();
    const shown = list.slice(0, state.limit);
    const total = baseSet().length;
    const I = INST[state.inst];

    $('#dirSub').textContent = state.savedOnly
      ? 'Pathways you have saved on this device, across all three institutes.'
      : `Everything open to ${I.person}, with filters for type, destination and time.`;
    $('#resultCount').innerHTML = list.length === total && !state.q && !activeFilterCount()
      ? `<b>${total}</b> pathways`
      : `<b>${list.length}</b> of ${total} pathways match`;

    const el = $('#resultList');
    if (!list.length) {
      el.innerHTML = state.savedOnly && !state.saved.size
        ? `<li class="empty"><h3>Nothing saved yet</h3><p>Use the Save button on any pathway to keep a shortlist here. It stays on this device.</p><button class="btn" data-action="reset">Show all pathways</button></li>`
        : `<li class="empty"><h3>No pathways match</h3><p>Try removing a filter or searching for a broader term, such as a country or an issuing body.</p><button class="btn btn-primary" data-action="reset">Clear all filters</button></li>`;
    } else {
      el.innerHTML = shown.map(rowHTML).join('');
    }
    const more = $('#showMore');
    more.hidden = list.length <= shown.length;
    more.textContent = `Show ${Math.min(PAGE, list.length - shown.length)} more`;

    const fc = activeFilterCount();
    const badge = $('#filterCount');
    badge.hidden = !fc;
    badge.textContent = fc;
    $('#filtersDoneBtn').textContent = `Show ${plural(list.length, 'result')}`;

    renderChips();
    refreshFilters();
    $$('.goal-card').forEach(b => b.setAttribute('aria-pressed', String(state.goal === b.dataset.goal)));
  }

  function update({ keepLimit = false } = {}) {
    if (!keepLimit) state.limit = PAGE;
    renderResults();
  }

  function resetFilters() {
    state.cats.clear();
    state.goal = null;
    state.where = 'all';
    state.time = 'any';
    state.savedOnly = false;
    state.q = '';
    $('#q').value = '';
  }

  function scrollToDirectory() {
    $('#directory').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ==========================================================================
  // 8. RENDER: MAP
  // ==========================================================================
  function renderMap() {
    const list = DATA[state.inst];
    const I = INST[state.inst];
    const notes = HUB_NOTES[state.inst] || {};
    $('#abroadTitle').textContent = `Where your ${I.short} qualification travels`;

    const hubs = HUBS.map(h => ({ ...h, items: list.filter(c => h.codes.includes(c.countryCode)) }))
      .filter(h => h.items.length);

    const pins = hubs.map(h => {
      const n = h.items.length;
      const r = 6 + Math.sqrt(n) * 2.2;
      const lx = h.left ? -(r + 6) : r + 6;
      return `<g class="pin" data-hub="${h.key}" transform="translate(${h.x} ${h.y})" tabindex="0" role="button" aria-label="${esc(h.name)}: ${plural(n, 'pathway')}">
        <circle class="halo" r="${r + 6}"/>
        <circle class="dot" r="${r}"/>
        <text x="${lx}" y="4.5" text-anchor="${h.left ? 'end' : 'start'}"><tspan class="lbl">${esc(h.short)} </tspan><tspan class="n">${n}</tspan></text>
      </g>`;
    });
    pins.push(`<g class="pin is-home" transform="translate(${HOME.x} ${HOME.y})" aria-hidden="true">
      <circle class="dot" r="5"/><text x="11" y="4.5">India</text></g>`);
    $('#pins').innerHTML = pins.join('');

    hubs.sort((a, b) => b.items.length - a.items.length);
    $('#hubGrid').innerHTML = hubs.map(h => {
      const note = notes[h.key];
      const text = note ? note.text : `Includes ${h.items.slice(0, 4).map(c => c.name).join(', ')}.`;
      return `<button class="hub-card" data-hub="${h.key}">
        <span class="hub-card-top"><b>${esc(h.name)}</b><span class="hub-n">${plural(h.items.length, 'pathway')}</span></span>
        <span class="hub-agree">${esc(text)}</span>
        ${note && note.pay ? `<span class="hub-pay">Indicative pay: <b>${esc(note.pay)}</b></span>` : ''}
        <span class="hub-cta">See pathways ${icon('arrow')}</span>
      </button>`;
    }).join('');
  }

  async function loadLand() {
    const el = $('#land');
    if (window.__LAND_PATH) { el.setAttribute('d', window.__LAND_PATH); return; }
    try {
      const r = await fetch('world-land.path');
      if (r.ok) el.setAttribute('d', (await r.text()).trim());
    } catch (_) { /* map outline is decorative; pins still work */ }
  }

  function pickHub(key) {
    resetFilters();
    state.where = key;
    update();
    scrollToDirectory();
  }

  // ==========================================================================
  // 9. RENDER: FIRM PANELS
  // ==========================================================================
  function renderPanelTabs() {
    const list = PANELS.filter(p => p.institute === state.inst);
    const counts = {};
    list.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    const tabs = [['all', 'All', list.length], ...Object.keys(PANEL_CATS).filter(k => counts[k]).map(k => [k, PANEL_CATS[k], counts[k]])];
    // Categories present in data but missing a label still get a tab.
    Object.keys(counts).filter(k => !PANEL_CATS[k]).forEach(k => tabs.push([k, k, counts[k]]));
    $('#panelTabs').innerHTML = tabs.map(([k, l, n]) =>
      `<button class="seg-tab" role="tab" data-panelcat="${esc(k)}" aria-selected="${state.panelCat === k}">${esc(l)} <span>${n}</span></button>`).join('');
    $('#panelsSub').textContent = INST[state.inst].panelsSub;
  }

  function renderPanels() {
    const list = PANELS.filter(p => p.institute === state.inst);
    const shown = list.filter(p => (state.panelCat === 'all' || p.category === state.panelCat) &&
      (!state.panelQ || textMatch(panelHaystack(p), state.panelQ)));
    $$('#panelTabs .seg-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.panelcat === state.panelCat)));
    $('#panelCount').innerHTML = shown.length === list.length ? `<b>${list.length}</b> panels` : `<b>${shown.length}</b> of ${list.length} panels match`;

    $('#panelGrid').innerHTML = shown.length ? shown.map(p => `
      <article class="panel-card">
        <div class="panel-pills">
          <span class="tag">${esc(p.authority)}</span>
          ${p.peerReviewRequired ? `<span class="peer">${icon('check')}Peer review required</span>` : '<span class="peer optional">Peer review recommended</span>'}
        </div>
        <h3>${esc(p.name)}</h3>
        <p class="panel-full">${esc(p.fullName)}</p>
        <p class="panel-sum">${esc(p.summary)}</p>
        <dl class="facts">
          <div><dt>Firm standing</dt><dd>${esc(p.firmStanding)}</dd></div>
          <div><dt>Partners</dt><dd>${esc(p.minPartners)}</dd></div>
          <div class="wide"><dt>Applications</dt><dd>${esc(p.applicationWindow)}</dd></div>
        </dl>
        <div class="panel-foot">
          <span class="statute">${esc(p.statute)}</span>
          <button class="btn" data-panel="${esc(p.id)}">View rules</button>
        </div>
      </article>`).join('')
      : `<div class="empty"><h3>No panels match</h3><p>Try a different regulator or Act, or show all panels.</p><button class="btn" data-action="reset-panels">Show all panels</button></div>`;
  }

  // ==========================================================================
  // 10. DIALOGS
  // ==========================================================================
  const lastFocus = new Map();
  function openDialog(d) {
    if (!d.open) {
      lastFocus.set(d, document.activeElement);
      d.showModal();
    }
    document.documentElement.classList.add('no-scroll');
  }
  function closeDialog(d) { if (d && d.open) d.close(); }
  function onDialogClosed(d) {
    if (!$('dialog[open]')) document.documentElement.classList.remove('no-scroll');
    const f = lastFocus.get(d);
    if (f && document.contains(f) && typeof f.focus === 'function') f.focus({ preventScroll: true });
    if (d.id === 'detailDialog' || d.id === 'panelDialog') setHash(state.inst);
  }

  function setHash(inst, kind, id) {
    const h = id ? `#/${inst}/${kind === 'panel' ? 'panel/' : ''}${encodeURIComponent(id)}` : `#/${inst}`;
    try { history.replaceState(null, '', h); } catch (_) { /* file:// in some browsers */ }
  }

  // ---- Pathway detail ----
  function openDetail(id) {
    const c = COURSE_BY_ID.get(id);
    if (!c) return;
    const I = INST[c._inst];
    const url = safeUrl(c.officialUrl);
    const saved = state.saved.has(c.id);
    const cmp = state.compare.includes(c.id);
    const sec = (title, html) => html ? `<section class="d-sec"><h3>${title}</h3>${html}</section>` : '';
    const para = t => t ? `<p>${esc(t)}</p>` : '';

    $('#detailBody').innerHTML = `
      <header class="d-head">
        <div class="d-head-text">
          <div class="d-tags">
            <span class="inst-tag">${I.short} · ${I.body}</span>
            <span class="tag tag-neutral">${esc(c.flag)} ${esc(c.country)}</span>
            <span class="tag">${esc(CAT_LABEL[c.category] || c.category)}</span>
          </div>
          <h2 id="detailTitle">${esc(c.name)}</h2>
          <p>${esc(c.fullName)}${c.body && c.body !== c.fullName ? ` · ${esc(c.body)}` : ''}</p>
        </div>
        <button class="icon-close" data-close aria-label="Close">${icon('x')}</button>
      </header>
      <div class="d-body">
        <dl class="keyfacts">
          <div><dt>What you get</dt><dd>${esc(c.exemptionLevel)}</dd></div>
          <div><dt>Time</dt><dd>${esc(c.duration)}</dd></div>
          <div><dt>Estimated cost</dt><dd>${esc(c.costINR)}${hasForeignCost(c) ? `<small>${esc(c.costForeign)}</small>` : ''}</dd></div>
          <div><dt>Effort</dt><dd>${esc(EFFORT[c.difficulty] || '—')}</dd></div>
        </dl>
        ${WAIVER_CATS.has(c.category) ? `<div class="d-meter"><b>${c.exemptionPercent}%</b><span class="meter-track"><span class="meter-fill" style="width:${Math.min(100, c.exemptionPercent)}%"></span></span><span>of the exams waived</span></div>` : ''}
        ${sec('What is waived', para(c.papersWaived))}
        ${sec('What you still need to do', para(c.papersRequired))}
        ${sec('Who can apply', para(c.prerequisites))}
        ${sec('Where it leads', para(c.careerImpact))}
        ${sec('How to apply', (c.steps || []).length ? `<ol class="steps">${c.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : '')}
        ${sec('Legal basis', c.statutorySource ? `<div class="source-box"><p>${esc(c.statutorySource)}</p><p class="fineprint">As recorded in this directory. Confirm the current terms on the official portal before you apply.</p></div>` : '')}
        ${sec('Tags', (c.tags || []).length ? `<div class="tag-row">${c.tags.map(t => `<span class="tag tag-neutral">${esc(t)}</span>`).join('')}</div>` : '')}
      </div>
      <footer class="d-foot">
        <button class="btn save-btn" data-save="${esc(c.id)}" aria-pressed="${saved}">${icon('star')}<span>${saved ? 'Saved' : 'Save'}</span></button>
        <button class="btn" data-compare="${esc(c.id)}" aria-pressed="${cmp}">${cmp ? icon('check') : ''}<span>Compare</span></button>
        <button class="btn" data-action="copy-link">${icon('link')}Copy link</button>
        ${url ? `<a class="btn btn-primary" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Official site ${icon('external')}</a>` : ''}
      </footer>`;
    const d = $('#detailDialog');
    openDialog(d);
    $('.d-body', d).scrollTop = 0;
    setHash(c._inst, 'course', c.id);
  }

  // ---- Panel detail ----
  function openPanel(id) {
    const p = PANEL_BY_ID.get(id);
    if (!p) return;
    const url = safeUrl(p.portalUrl);
    const list = arr => (arr || []).length ? `<ul class="bullets">${arr.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
    const sec = (title, html) => html ? `<section class="d-sec"><h3>${title}</h3>${html}</section>` : '';
    $('#panelBody').innerHTML = `
      <header class="d-head">
        <div class="d-head-text">
          <div class="d-tags">
            <span class="inst-tag">${INST[p.institute].short} · ${INST[p.institute].body}</span>
            <span class="tag">${esc(p.authority)}</span>
            ${p.peerReviewRequired ? `<span class="peer">${icon('check')}Peer review required</span>` : '<span class="peer optional">Peer review recommended</span>'}
          </div>
          <h2 id="panelTitle">${esc(p.name)}</h2>
          <p>${esc(p.fullName)}</p>
        </div>
        <button class="icon-close" data-close aria-label="Close">${icon('x')}</button>
      </header>
      <div class="d-body">
        <p style="color:var(--text-2)">${esc(p.summary)}</p>
        <dl class="keyfacts" style="margin-top:18px">
          <div><dt>Firm standing</dt><dd>${esc(p.firmStanding)}</dd></div>
          <div><dt>Partners</dt><dd>${esc(p.minPartners)}</dd></div>
          <div><dt>Applications</dt><dd>${esc(p.applicationWindow)}</dd></div>
          <div><dt>Fees</dt><dd>${esc(p.remunerationGrade)}</dd></div>
        </dl>
        ${sec('Technical requirements', p.technicalPrerequisites ? `<p>${esc(p.technicalPrerequisites)}</p>` : '')}
        ${sec('How firms are scored', list(p.pointAlgorithm))}
        ${sec('Scope of work', list(p.scopeOfWork))}
        ${sec('How to apply', (p.steps || []).length ? `<ol class="steps">${p.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : '')}
        ${sec('Legal basis', `<div class="source-box"><p>${esc(p.statute)}</p><p class="fineprint">As recorded in this directory. Confirm the current rules on the regulator's portal before you apply.</p></div>`)}
      </div>
      <footer class="d-foot">
        <button class="btn" data-action="copy-link">${icon('link')}Copy link</button>
        ${url ? `<a class="btn btn-primary" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Regulator's portal ${icon('external')}</a>` : ''}
      </footer>`;
    const d = $('#panelDialog');
    openDialog(d);
    $('.d-body', d).scrollTop = 0;
    setHash(p.institute, 'panel', p.id);
  }

  // ==========================================================================
  // 11. SAVE & COMPARE
  // ==========================================================================
  function syncButtons(id) {
    const saved = state.saved.has(id);
    const cmp = state.compare.includes(id);
    $$(`[data-save="${CSS.escape(id)}"]`).forEach(b => {
      b.setAttribute('aria-pressed', String(saved));
      const s = $('span', b); if (s) s.textContent = saved ? 'Saved' : 'Save';
    });
    $$(`[data-compare="${CSS.escape(id)}"]`).forEach(b => {
      b.setAttribute('aria-pressed', String(cmp));
      if (b.closest('.tray-item')) return;
      b.innerHTML = `${cmp ? icon('check') : ''}<span>Compare</span>`;
    });
  }

  function toggleSave(id) {
    if (state.saved.has(id)) state.saved.delete(id); else state.saved.add(id);
    raw.set('icai_bm_v2', JSON.stringify([...state.saved]));
    renderSavedCount();
    syncButtons(id);
    if (state.savedOnly) update({ keepLimit: true }); else refreshFilters();
  }
  function renderSavedCount() {
    $('#savedCount').textContent = state.saved.size;
    $('[data-action="saved"]').classList.toggle('has-saved', state.saved.size > 0);
  }

  function toggleCompare(id) {
    const i = state.compare.indexOf(id);
    if (i > -1) state.compare.splice(i, 1);
    else if (state.compare.length >= 3) { toast('You can compare up to 3 pathways at a time.'); return; }
    else state.compare.push(id);
    syncButtons(id);
    renderTray();
  }

  function renderTray() {
    const tray = $('#compareTray');
    tray.hidden = !state.compare.length;
    document.body.classList.toggle('has-tray', state.compare.length > 0);
    $('#trayItems').innerHTML = state.compare.map(id => {
      const c = COURSE_BY_ID.get(id);
      return `<span class="tray-item">${esc(c.flag)} ${esc(c.name)}<button data-compare="${esc(id)}" aria-label="Remove ${esc(c.name)} from comparison">${icon('x')}</button></span>`;
    }).join('') + (state.compare.length === 1 ? '<span class="tray-hint">Add one or two more</span>' : '');
    $('[data-action="compare"]').disabled = state.compare.length < 2;
  }

  function openCompare() {
    const items = state.compare.map(id => COURSE_BY_ID.get(id)).filter(Boolean);
    if (items.length < 2) return;
    const rows = [
      ['Institute', c => `${INST[c._inst].short} (${INST[c._inst].body})`],
      ['What you get', c => c.exemptionLevel],
      ['Exams waived', c => WAIVER_CATS.has(c.category) ? `${c.exemptionPercent}%` : '—'],
      ['Still to pass', c => c.papersRequired],
      ['Time', c => c.duration],
      ['Cost', c => c.costINR + (hasForeignCost(c) ? ` · ${c.costForeign}` : '')],
      ['Effort', c => EFFORT[c.difficulty] || '—'],
      ['Who can apply', c => c.prerequisites],
      ['Where it leads', c => c.careerImpact],
      ['Legal basis', c => c.statutorySource]
    ];
    $('#compareBody').innerHTML = `<table class="cmp-table">
      <thead><tr><th scope="col"><span class="sr-only">Criterion</span></th>${items.map(c => `<th scope="col">${esc(c.flag)} ${esc(c.name)}<small>${esc(c.body)}</small></th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map(([label, fn]) => `<tr><th scope="row">${label}</th>${items.map(c => `<td>${esc(fn(c))}</td>`).join('')}</tr>`).join('')}
        <tr><th scope="row">Official site</th>${items.map(c => {
          const u = safeUrl(c.officialUrl);
          return `<td>${u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">Visit ↗</a>` : '—'}</td>`;
        }).join('')}</tr>
      </tbody></table>`;
    openDialog($('#compareDialog'));
  }

  // ==========================================================================
  // 12. PATH FINDER
  // ==========================================================================
  const WZ_TIME = [
    { key: 'short', label: 'Under 3 months', desc: 'A quick add-on alongside work' },
    { key: 'mid', label: '3 to 12 months', desc: 'A focused course over a few months' },
    { key: 'long', label: 'A year or more', desc: 'A full second qualification' },
    { key: 'any', label: 'No preference', desc: 'Show me everything that fits' }
  ];
  const WZ_WHERE = [
    { key: 'in', label: 'India', desc: 'Statutory roles, registrations and Indian courses' },
    { key: 'west', label: 'UK, Europe or North America', desc: 'United Kingdom, Ireland, EU, USA, Canada' },
    { key: 'ae', label: 'UAE & Gulf', desc: 'Dubai, Abu Dhabi, Saudi Arabia, Qatar' },
    { key: 'apac', label: 'Asia-Pacific', desc: 'Australia, New Zealand, Singapore, Malaysia' },
    { key: 'all', label: 'Open to anywhere', desc: 'Location is not a deciding factor' }
  ];

  function openWizard() {
    state.wz = { step: 0, goal: null, time: null, where: null };
    renderWizard();
    openDialog($('#wizardDialog'));
  }

  function renderWizard() {
    const wz = state.wz;
    const list = DATA[state.inst];
    const body = $('#wizardBody');
    const foot = $('#wizardFoot');
    $('#wizardProgress').style.width = `${((wz.step + 1) / 4) * 100}%`;
    $('#wizardStepLabel').textContent = wz.step < 3 ? `Question ${wz.step + 1} of 3` : 'Your matches';

    const options = (field, opts) => `<div class="wz-options" role="radiogroup">${opts.map(o => `
      <button class="wz-opt" role="radio" data-wz="${field}" data-v="${o.key}" aria-checked="${wz[field] === o.key}">
        ${o.icon ? `<span class="goal-icon">${icon(o.icon)}</span>` : ''}
        <span><b>${esc(o.label)}</b><small>${esc(o.desc)}</small></span>
      </button>`).join('')}</div>`;

    if (wz.step === 0) {
      body.innerHTML = `<p class="wz-q">What do you want your next step to do for you?</p>` +
        options('goal', GOALS.filter(g => list.some(c => goalMatch(c, g.key))));
    } else if (wz.step === 1) {
      body.innerHTML = `<p class="wz-q">How much time can you give it?</p>` + options('time', WZ_TIME);
    } else if (wz.step === 2) {
      body.innerHTML = `<p class="wz-q">Where do you want to work?</p>` + options('where', WZ_WHERE);
    } else {
      body.innerHTML = wizardResultsHTML();
    }
    foot.innerHTML = wz.step > 0
      ? `<button class="btn" data-action="wz-back">${icon('back')}Back</button><span class="spacer"></span>` +
        (wz.step === 3 ? `<button class="btn btn-primary" data-action="wz-apply">${esc(wizardApplyLabel())}</button>` : '')
      : '';
    body.scrollTop = 0;
  }

  function wizardScored() {
    const { goal, time, where } = state.wz;
    return DATA[state.inst].map(c => {
      const why = [];
      let s = 0;
      if (goalMatch(c, goal)) { s += 3; why.push(GOAL_BY_KEY[goal].label); }
      if (where !== 'all' && inWhere(c, where)) { s += 2; why.push(WHERE[where].label); }
      if (time !== 'any' && inTime(c, time)) { s += 1.5; why.push(c.duration); }
      const full = goalMatch(c, goal) && inWhere(c, where) && inTime(c, time);
      return { c, s, why, full };
    }).filter(x => x.s > 0)
      .sort((a, b) => (b.full - a.full) || (b.s - a.s) || (b.c.exemptionPercent - a.c.exemptionPercent));
  }
  const wizardFullCount = () => wizardScored().filter(x => x.full).length;
  function wizardApplyLabel() {
    const n = wizardFullCount();
    return n ? `See all ${n} in the directory` : `See all ${GOAL_BY_KEY[state.wz.goal].label.toLowerCase()} pathways`;
  }

  function wizardResultsHTML() {
    const { goal, time, where } = state.wz;
    const scored = wizardScored();
    const full = scored.filter(x => x.full).length;
    const top = scored.slice(0, 6);
    const summary = `${GOAL_BY_KEY[goal].label} · ${WZ_TIME.find(t => t.key === time).label} · ${WZ_WHERE.find(w => w.key === where).label}`;
    const lead = full
      ? `${plural(full, 'pathway matches', 'pathways match')} all three answers. The strongest are below.`
      : 'Nothing matches all three answers. These are the closest.';
    return `<p class="wz-summary"><b>${esc(summary)}</b><br>${lead}</p>
      <div class="wz-results">${top.map(x => `
        <button class="wz-result" data-open="${esc(x.c.id)}">
          <span class="row-flag" aria-hidden="true">${esc(x.c.flag)}</span>
          <span class="wz-result-body">
            <b>${esc(x.c.name)}</b>
            <span class="row-sub">${esc(x.c.body)} · ${esc(x.c.duration)}</span>
            <span class="wz-why">${x.why.map(w => `<span>${icon('check')}${esc(w)}</span>`).join('')}</span>
          </span>
          ${icon('arrow')}
        </button>`).join('')}</div>`;
  }

  function wizardApply() {
    const { goal, time, where } = state.wz;
    const full = wizardFullCount();
    resetFilters();
    state.goal = goal;
    if (full) { state.time = time; state.where = where; }
    closeDialog($('#wizardDialog'));
    update();
    scrollToDirectory();
  }

  // ==========================================================================
  // 13. SEARCH PALETTE
  // ==========================================================================
  let paletteItems = [];
  let paletteIndex = 0;

  function openPalette() {
    const input = $('#paletteInput');
    input.value = '';
    renderPalette('');
    openDialog($('#searchDialog'));
    input.focus();
  }

  function renderPalette(q) {
    const courses = q ? ALL.filter(c => textMatch(haystack(c), q)) : DATA[state.inst];
    const panels = q ? PANELS.filter(p => textMatch(panelHaystack(p), q)) : [];
    const cs = courses.slice(0, q ? 12 : 8);
    const ps = panels.slice(0, 5);
    paletteItems = [...cs.map(c => ['course', c.id]), ...ps.map(p => ['panel', p.id])];
    paletteIndex = 0;
    let i = 0;
    const item = (kind, id, flag, title, sub, inst) => `
      <li class="palette-item" role="option" id="pal-${i}" data-kind="${kind}" data-id="${esc(id)}" aria-selected="${i++ === 0}">
        <span class="p-flag" aria-hidden="true">${flag}</span>
        <span class="p-body"><b>${esc(title)}</b><small>${esc(sub)}</small></span>
        <span class="inst-tag">${INST[inst].short}</span>
      </li>`;
    let html = '';
    if (cs.length) {
      html += `<li class="palette-group" role="presentation">${q ? 'Pathways' : `Popular for ${INST[state.inst].short}`}</li>` +
        cs.map(c => item('course', c.id, esc(c.flag), c.name, `${c.body} · ${c.exemptionLevel}`, c._inst)).join('');
    }
    if (ps.length) {
      html += '<li class="palette-group" role="presentation">Firm panels</li>' +
        ps.map(p => item('panel', p.id, '🏛️', p.name, p.authority, p.institute)).join('');
    }
    $('#paletteResults').innerHTML = html || `<li class="palette-empty">No results for “${esc(q)}”. Try a body (ACCA), a country (Canada) or a topic (insolvency).</li>`;
    $('#paletteInput').setAttribute('aria-activedescendant', paletteItems.length ? 'pal-0' : '');
  }

  function movePalette(delta) {
    if (!paletteItems.length) return;
    paletteIndex = (paletteIndex + delta + paletteItems.length) % paletteItems.length;
    $$('#paletteResults .palette-item').forEach((el, i) => el.setAttribute('aria-selected', String(i === paletteIndex)));
    const el = $(`#pal-${paletteIndex}`);
    if (el) el.scrollIntoView({ block: 'nearest' });
    $('#paletteInput').setAttribute('aria-activedescendant', `pal-${paletteIndex}`);
  }

  function choosePalette(kind, id) {
    closeDialog($('#searchDialog'));
    if (kind === 'panel') openPanel(id); else openDetail(id);
  }

  // ==========================================================================
  // 14. SUGGESTION FORM
  // ==========================================================================
  let suggestCloseTimer;
  function openSuggest() {
    const form = $('#suggestForm');
    clearTimeout(suggestCloseTimer);
    form.reset();
    $$('.field', form).forEach(f => f.classList.remove('invalid'));
    $('#suggestAlert').hidden = true;
    $('#sugInstitute').value = state.inst;
    openDialog($('#suggestDialog'));
  }

  async function submitSuggest(e) {
    e.preventDefault();
    const form = e.target;
    const alertEl = $('#suggestAlert');
    const data = Object.fromEntries(new FormData(form).entries());
    Object.keys(data).forEach(k => { data[k] = String(data[k]).trim(); });

    const missing = ['title', 'description'].filter(k => !data[k]);
    $$('.field', form).forEach(f => {
      const input = $('input, textarea', f);
      f.classList.toggle('invalid', !!input && missing.includes(input.name));
    });
    if (missing.length) {
      alertEl.className = 'form-alert err';
      alertEl.textContent = 'Please add the name of the pathway and what it offers members.';
      alertEl.hidden = false;
      form.querySelector(`[name="${missing[0]}"]`).focus();
      return;
    }

    const btn = $('#suggestSubmit');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch('/api/suggest-pathway', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.success) throw new Error(out.error || 'Request failed');
      alertEl.className = 'form-alert ok';
      alertEl.textContent = 'Thank you. Your suggestion has been received and will be checked against its source.';
      alertEl.hidden = false;
      form.reset();
      suggestCloseTimer = setTimeout(() => closeDialog($('#suggestDialog')), 2600);
    } catch (err) {
      alertEl.className = 'form-alert err';
      alertEl.textContent = 'Your suggestion could not be sent just now. Your text is still here, so please try again in a few minutes.';
      alertEl.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send suggestion';
    }
  }

  // ==========================================================================
  // 15. INSTITUTE, THEME, MOBILE FILTERS
  // ==========================================================================
  function switchInstitute(inst, { scroll = false } = {}) {
    if (!INST[inst]) inst = 'icai';
    state.inst = inst;
    raw.set('active_institute', inst);
    document.documentElement.dataset.institute = inst;
    $$('#instSwitch button').forEach(b => b.setAttribute('aria-checked', String(b.dataset.inst === inst)));
    resetFilters();
    state.panelCat = 'all';
    state.panelQ = '';
    $('#pq').value = '';
    renderIntro();
    renderGoals();
    buildFilters();
    update();
    renderMap();
    renderPanelTabs();
    renderPanels();
    setHash(inst);
    if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function effectiveTheme() {
    const t = document.documentElement.dataset.theme;
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paintThemeButton() {
    const dark = effectiveTheme() === 'dark';
    $('#themeIconUse').setAttribute('href', dark ? '#i-sun' : '#i-moon');
    $('#themeBtn').setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  function toggleTheme() {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    raw.set('icai_theme', next);
    paintThemeButton();
  }

  function setFiltersOpen(open) {
    $('#filters').classList.toggle('open', open);
    $('#filtersBackdrop').classList.toggle('open', open);
    document.documentElement.classList.toggle('no-scroll', open);
    if (open) $('#filters .icon-close').focus();
  }

  // ==========================================================================
  // 16. EVENTS
  // ==========================================================================
  function onClick(e) {
    const t = e.target.closest('[data-action],[data-open],[data-save],[data-compare],[data-goal],[data-panel],[data-hub],[data-inst],[data-close],[data-panelcat],[data-wz],.palette-item');
    if (!t) return;
    const ds = t.dataset;

    if (t.classList.contains('palette-item')) return choosePalette(ds.kind, ds.id);
    if ('close' in ds) return closeDialog(t.closest('dialog'));
    if (ds.inst) return switchInstitute(ds.inst);
    if (ds.save) return toggleSave(ds.save);
    if (ds.compare) return toggleCompare(ds.compare);
    if (ds.open) {
      const w = $('#wizardDialog');
      if (t.closest('#wizardDialog')) closeDialog(w);
      return openDetail(ds.open);
    }
    if (ds.panel) return openPanel(ds.panel);
    if (ds.hub) return pickHub(ds.hub);
    if (ds.panelcat) { state.panelCat = ds.panelcat; return renderPanels(); }
    if (ds.wz) {
      state.wz[ds.wz] = ds.v;
      $$(`[data-wz="${ds.wz}"]`).forEach(b => b.setAttribute('aria-checked', String(b === t)));
      const step = state.wz.step;
      setTimeout(() => {
        if (state.wz.step !== step) return;
        state.wz.step += 1;
        renderWizard();
      }, 140);
      return;
    }
    if (ds.goal) {
      const g = ds.goal;
      const was = state.goal === g;
      resetFilters();
      state.goal = was ? null : g;
      update();
      if (!was) scrollToDirectory();
      return;
    }

    switch (ds.action) {
      case 'search': return openPalette();
      case 'saved':
        resetFilters();
        state.savedOnly = true;
        update();
        return scrollToDirectory();
      case 'theme': return toggleTheme();
      case 'wizard': return openWizard();
      case 'wz-back': state.wz.step = Math.max(0, state.wz.step - 1); return renderWizard();
      case 'wz-apply': return wizardApply();
      case 'suggest': return openSuggest();
      case 'compare': return openCompare();
      case 'clear-compare': {
        const ids = state.compare.splice(0);
        ids.forEach(syncButtons);
        return renderTray();
      }
      case 'more': state.limit += PAGE; return update({ keepLimit: true });
      case 'reset': resetFilters(); return update();
      case 'reset-panels':
        state.panelCat = 'all'; state.panelQ = ''; $('#pq').value = '';
        return renderPanels();
      case 'rm': {
        const k = ds.k;
        if (k === 'cat') state.cats.delete(ds.v);
        else if (k === 'where') state.where = 'all';
        else if (k === 'time') state.time = 'any';
        else if (k === 'goal') state.goal = null;
        else if (k === 'saved') state.savedOnly = false;
        else if (k === 'q') { state.q = ''; $('#q').value = ''; }
        return update();
      }
      case 'open-filters': return setFiltersOpen(true);
      case 'close-filters': return setFiltersOpen(false);
      case 'copy-link': {
        const url = location.href;
        const done = () => toast('Link copied.');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, () => toast(url));
        } else toast(url);
        return;
      }
    }
  }

  function onFilterChange(e) {
    const input = e.target;
    const { name, value, checked } = input;
    if (name === 'cat') { if (checked) state.cats.add(value); else state.cats.delete(value); }
    else if (name === 'where') state.where = value;
    else if (name === 'time') state.time = value;
    else if (name === 'goal') state.goal = value || null;
    else if (name === 'saved') state.savedOnly = checked;
    update();
  }

  function onKeydown(e) {
    const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      return openPalette();
    }
    if (e.key === '/' && !inField && !$('dialog[open]')) {
      e.preventDefault();
      $('#q').focus();
      return;
    }
    if (e.key === 'Escape' && $('#filters').classList.contains('open')) return setFiltersOpen(false);

    // Map pins are SVG groups acting as buttons.
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('pin') && e.target.dataset.hub) {
      e.preventDefault();
      pickHub(e.target.dataset.hub);
    }
  }

  function readHash() {
    const m = location.hash.match(/^#\/(icai|icsi|icmai)(?:\/(panel\/)?([^/]+))?$/);
    if (!m) return null;
    return { inst: m[1], kind: m[2] ? 'panel' : 'course', id: m[3] ? decodeURIComponent(m[3]) : null };
  }

  function init() {
    const savedTheme = raw.get('icai_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
    paintThemeButton();
    if (window.matchMedia) {
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintThemeButton);
    }

    const route = readHash();
    switchInstitute(route ? route.inst : state.inst);
    renderSavedCount();
    renderTray();
    loadLand();

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeydown);
    $('#filtersBody').addEventListener('change', onFilterChange);

    let qTimer;
    $('#q').addEventListener('input', e => {
      clearTimeout(qTimer);
      qTimer = setTimeout(() => { state.q = e.target.value.trim().toLowerCase(); update(); }, 120);
    });
    $('#sort').addEventListener('change', e => { state.sort = e.target.value; update(); });
    $('#pq').addEventListener('input', e => { state.panelQ = e.target.value.trim().toLowerCase(); renderPanels(); });

    const pal = $('#paletteInput');
    pal.addEventListener('input', e => renderPalette(e.target.value.trim()));
    pal.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); movePalette(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); movePalette(-1); }
      else if (e.key === 'Enter' && paletteItems[paletteIndex]) { e.preventDefault(); choosePalette(...paletteItems[paletteIndex]); }
    });
    $('#paletteResults').addEventListener('mousemove', e => {
      const li = e.target.closest('.palette-item');
      if (!li) return;
      const i = +li.id.replace('pal-', '');
      if (i !== paletteIndex) movePalette(i - paletteIndex);
    });

    $('#suggestForm').addEventListener('submit', submitSuggest);

    $$('dialog').forEach(d => {
      d.addEventListener('close', () => onDialogClosed(d));
      // A click whose target is the <dialog> itself landed on the backdrop.
      d.addEventListener('click', e => { if (e.target === d) d.close(); });
    });

    if (route && route.id) {
      if (route.kind === 'panel') openPanel(route.id); else openDetail(route.id);
    }
    window.addEventListener('hashchange', () => {
      const r = readHash();
      if (!r) return;
      if (r.inst !== state.inst) switchInstitute(r.inst);
      if (r.id) { if (r.kind === 'panel') openPanel(r.id); else openDetail(r.id); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
