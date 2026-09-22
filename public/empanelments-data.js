/**
 * ICAI Career Advantage Map — CA Firm Empanelment & Statutory Practice Panels
 * Authoritative roster of statutory audit rosters, government tenders, and firm selection algorithms
 */

const EMPANELMENTS_DATA = [
  {
    id: "mef-bank-branch",
    name: "Statutory Bank Branch Audit (SBA)",
    fullName: "RBI & ICAI Multipurpose Empanelment Form (MEF) — Bank Branch Auditor Panel",
    authority: "Reserve Bank of India (RBI) & ICAI PDC",
    category: "banking",
    statute: "Banking Regulation Act, 1949 (Section 30)",
    firmStanding: "Category I (15+ yrs), Category II (10+ yrs), Category III (5+ yrs), Category IV (3+ yrs)",
    minPartners: "Proprietorship (Cat IV) to 5+ Full-Time FCA Partners (Cat I)",
    technicalPrerequisites: "DISA (ICAI) / CISA qualification of partners yields essential IT-audit eligibility points.",
    peerReviewRequired: true,
    applicationWindow: "Annual: August – September (via meficai.org)",
    remunerationGrade: "RBI Prescribed Scale: ₹65,000 to ₹3,50,000+ per branch based on advances + TA/DA",
    portalUrl: "https://meficai.org/",
    summary: "The premier nationwide statutory audit allotment for commercial banks (SBI, PNB, BoB, Canara, etc.). Firms audit financial year-end accounts, verify NPA classification, and issue Long Form Audit Reports (LFAR).",
    pointAlgorithm: [
      "Partner Standing: 1 point per year of FCA standing; 0.5 point per year of ACA standing.",
      "Partner Continuity: Heavy bonus for partners with 3+ to 5+ years of continuous association with the firm.",
      "Technical Weightage: Additional marks for partners holding DISA / CISA certification.",
      "Staff Strength: Points for qualified CA employees and experienced semi-qualified audit assistants."
    ],
    scopeOfWork: [
      "Statutory Audit of balance sheet and profit & loss account of bank branches.",
      "Certification of Long Form Audit Report (LFAR) covering credit appraisal, internal controls, and cash management.",
      "Validation of Asset Classification, Provisioning norms, and Non-Performing Assets (NPAs) under RBI Master Directions.",
      "Tax Audit under Section 44AB and verification of Ghosh and Jilani Committee recommendations."
    ],
    steps: [
      "Submit online Multipurpose Empanelment Form (MEF) on meficai.org during August–September.",
      "Upload financial statements, partner declarations, and UIN (Unique Identifier Number).",
      "Verify Draft Panel published by PDC and raise queries on complaints portal if points mismatch.",
      "RBI transmits finalized panel to respective Public Sector Banks for allotment in March/April."
    ],
    tags: ["RBI Master Circular", "LFAR Certification", "Annual MEF Cycle", "NPA Audit"]
  },
  {
    id: "cag-psu",
    name: "CAG Statutory PSU Auditor",
    fullName: "Comptroller and Auditor General of India — Central & State PSU Audit Panel",
    authority: "Office of the Comptroller & Auditor General of India (C&AG)",
    category: "psu",
    statute: "Companies Act, 2013 (Section 139(5) & Section 143(5))",
    firmStanding: "Minimum 3 years (Minor Audits) to 15+ years (Major Navratna/Maharatna CPSEs)",
    minPartners: "Minimum 2 full-time partners; 5+ partners for major CPSEs",
    technicalPrerequisites: "Points awarded for FCA partners, DISA/CISA certifications, and corporate audit experience.",
    peerReviewRequired: true,
    applicationWindow: "Annual: January – February (via cag.gov.in)",
    remunerationGrade: "CAG Scale: ₹1,50,000 to ₹50,00,000+ depending on company capital and turnover",
    portalUrl: "https://www.cag.gov.in/",
    summary: "Exclusive statutory appointment to conduct the statutory audit of Central Public Sector Enterprises (CPSEs), State PSUs, government autonomous bodies, and statutory corporations.",
    pointAlgorithm: [
      "Partner Score (Max 60 points): Based on full-time partner seniority, FCA standing, and continuous association.",
      "Chartered Accountant Employees: Points for paid CA staff employed with the firm for over 1 year.",
      "Audit Experience Score: Verified statutory audit experience in corporate entities with turnover > ₹50 Cr.",
      "Tech Specialization: Dedicated points for partners qualified in DISA or CISA."
    ],
    scopeOfWork: [
      "Statutory audit of financial statements under Section 139 of the Companies Act, 2013.",
      "Reporting under directions issued by the CAG under Section 143(5) (sub-directions on government subsidies, procurement compliance, and fund utilization).",
      "Coordination with Principal Director of Audit during Supplementary Audit under Section 143(6)."
    ],
    steps: [
      "File online empanelment on CAG portal between January and mid-February.",
      "Submit hard copy documentation and online MEF cross-verification.",
      "Review provisional point score and seniority rank published in April/May.",
      "Receive statutory appointment letters directly from CAG during AGM season."
    ],
    tags: ["CPSE Audits", "Maharatna & Navratna", "Section 139(5)", "Government Accounts"]
  },
  {
    id: "irdai-insurance",
    name: "IRDAI Statutory Insurance Auditor",
    fullName: "Insurance Regulatory and Development Authority of India — Joint Statutory Auditor Panel",
    authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
    category: "banking",
    statute: "Insurance Act, 1938 (Section 12) & IRDAI Audit Guidelines",
    firmStanding: "Minimum 15 years firm standing with significant financial sector experience",
    minPartners: "Minimum 5 full-time FCA partners (at least 2 with 10+ years tenure)",
    technicalPrerequisites: "Mandatory DISA/CISA qualified partners; DIRM (Diploma in Insurance) preferred.",
    peerReviewRequired: true,
    applicationWindow: "As per IRDAI rotational guidelines (Max 5-year tenure per insurer)",
    remunerationGrade: "High-Value Institutional Scale: ₹15,00,000 to ₹1,20,00,000+ per insurer",
    portalUrl: "https://irdai.gov.in/",
    summary: "Statutory joint audit of Life, General, Reinsurance (GIC Re), and Standalone Health Insurance companies. By law, every insurance company must be audited jointly by two independent CA firms.",
    pointAlgorithm: [
      "Firm Category: Must meet IRDAI Category A/B threshold for large insurers.",
      "Insurance Audit Track Record: Past experience as statutory branch or concurrent auditor of insurance companies.",
      "Independence Norms: Cooling-off period of 3 years between consecutive audit tenures.",
      "Actuarial & Solvency Expertise: Knowledge of IFRS 17 / Ind AS 117 insurance contracts."
    ],
    scopeOfWork: [
      "Statutory joint audit of revenue accounts, policyholders' funds, and shareholders' funds.",
      "Certification of Solvency Margin (Available Solvency Margin vs Required Solvency Margin).",
      "Audit of investment portfolios under IRDAI (Investment) Regulations.",
      "Verification of claims settlement ratios, incurred but not reported (IBNR) reserves, and reinsurance ceded."
    ],
    steps: [
      "Ensure firm profile meets IRDAI empanelment eligibility criteria.",
      "Submit expression of interest (EOI) when insurance companies issue joint statutory audit tenders.",
      "Board Audit Committee evaluates firm credentials and forwards recommendation to IRDAI.",
      "IRDAI grants formal statutory approval for appointment."
    ],
    tags: ["Joint Audit Mandate", "Solvency Margin Audit", "IFRS 17 / Ind AS 117", "High-Remuneration"]
  },
  {
    id: "sfio-cbi-forensic",
    name: "SFIO & CBI Corporate Crime Forensic Panel",
    fullName: "Serious Fraud Investigation Office & CBI — Empanelled Forensic Accounting Experts",
    authority: "Serious Fraud Investigation Office (SFIO) & Ministry of Corporate Affairs",
    category: "corporate",
    statute: "Companies Act, 2013 (Section 212) & CrPC / Bharatiya Nagarik Suraksha Sanhita",
    firmStanding: "Minimum 5 to 10 years experience with established forensic investigation track record",
    minPartners: "Minimum 2 to 3 partners with specialized forensic credentials",
    technicalPrerequisites: "FAFD (ICAI) / CFE (ACFE) / DISA / Cyber Forensic certification mandatory.",
    peerReviewRequired: false,
    applicationWindow: "Periodic notifications via sfio.nic.in & mca.gov.in",
    remunerationGrade: "Government Investigation Scale: ₹5,00,000 to ₹50,00,000+ per forensic case",
    portalUrl: "https://sfio.nic.in/",
    summary: "Court-directed investigations into multi-crore corporate white-collar crimes, fund siphoning, money laundering, and shell company webs under Section 212 of the Companies Act.",
    pointAlgorithm: [
      "Forensic Casework: Verified prior experience in digital forensics, bank fraud investigation, or IBC avoidance transaction audits.",
      "Credential Density: Number of partners holding FAFD, CFE, or international fraud examiner credentials.",
      "Litigation Support: Experience in presenting expert witness testimony before Special Courts and NCLT.",
      "Confidentiality Protocols: Vetted infrastructure adhering to the Official Secrets Act."
    ],
    scopeOfWork: [
      "In-depth forensic audit of corporate debtors, promoter entities, and related party networks.",
      "Tracing fund round-tripping through hawala channels, layering, and overseas tax havens.",
      "Extraction and analysis of digital evidence from enterprise ERPs and cloud backups.",
      "Formulation of comprehensive Investigation Reports submitted to Ministry of Corporate Affairs and Special Courts."
    ],
    steps: [
      "Apply during SFIO / CBI Notice for Empanelment of Professional CA Firms.",
      "Submit forensic casework dossier, partner certifications (FAFD/CFE), and security clearances.",
      "Undergo technical evaluation and interview by SFIO Director Committee.",
      "Empanelled firms are allocated investigation assignments on a case-to-case basis."
    ],
    tags: ["Section 212 MCA", "White-Collar Crime", "Shell Company Unmasking", "Digital Forensics"]
  },
  {
    id: "eci-political-parties",
    name: "ECI Political Party Statutory Auditor",
    fullName: "Election Commission of India — Statutory Auditor for Registered Political Parties",
    authority: "Election Commission of India (ECI)",
    category: "psu",
    statute: "Representation of the People Act, 1951 (Section 29C) & ECI Transparency Guidelines",
    firmStanding: "Practicing Chartered Accountant firm in active standing",
    minPartners: "Minimum 1 practicing FCA partner",
    technicalPrerequisites: "Compliance with ICAI Guidance Note on Accounting & Auditing of Political Parties.",
    peerReviewRequired: true,
    applicationWindow: "Annual filing cycle following statutory financial year close",
    remunerationGrade: "Determined by political party governance committee (₹2,00,000 to ₹25,00,000+)",
    portalUrl: "https://eci.gov.in/",
    summary: "Mandatory statutory audit of annual financial statements, contribution reports, and election campaign expenditures for all National and State recognized political parties in India.",
    pointAlgorithm: [
      "Statutory Standing: Valid Certificate of Practice (COP) and Peer Review compliance.",
      "Independence Norm: Strict prohibition against holding political office or conflicts of interest.",
      "Electoral Framework Knowledge: Mastery of Section 13A of Income-tax Act and ECI transparency directives."
    ],
    scopeOfWork: [
      "Statutory audit of balance sheet, income & expenditure account, and contribution ledgers of political parties.",
      "Audit of individual contributions exceeding ₹20,000 and compliance with banking mode donation norms.",
      "Verification of election expenditure statements submitted to ECI within 75 days (Assembly) or 90 days (Lok Sabha).",
      "Certification under Section 13A of Income-tax Act to preserve 100% tax exemption on party income."
    ],
    steps: [
      "Empanelment / appointment by political party national treasurer / governing committee.",
      "Conduct statutory audit adhering to ICAI Guidance Note on Political Parties.",
      "Issue formal Auditor's Report with Annexures on contribution statements.",
      "Submission of audited reports directly to the Chief Electoral Officer / ECI New Delhi."
    ],
    tags: ["ECI Transparency", "Section 13A IT Act", "Electoral Expenditure", "Democratic Accountability"]
  },
  {
    id: "sebi-broker-dp",
    name: "SEBI Stock Broker & Depository Participant Auditor",
    fullName: "SEBI Intermediary Statutory Internal Audit Panel (NSE / BSE / CDSL / NSDL)",
    authority: "Securities and Exchange Board of India (SEBI)",
    category: "market",
    statute: "SEBI (Stock Brokers) Regulations & SEBI (Depositories & Participants) Regulations",
    firmStanding: "Minimum 3 to 5 years standing in securities market auditing",
    minPartners: "Minimum 2 full-time partners",
    technicalPrerequisites: "DISA / CISA certification strongly recommended for algorithmic trading systems.",
    peerReviewRequired: true,
    applicationWindow: "Half-Yearly audit cycles (Due: September & March)",
    remunerationGrade: "₹1,00,000 to ₹15,00,000+ per broker / DP based on active client base",
    portalUrl: "https://www.sebi.gov.in/",
    summary: "Mandatory statutory internal audit of trading members, clearing members, and depository participants to verify margin compliance, client collateral segregation, and algorithmic risk controls.",
    pointAlgorithm: [
      "Securities Expertise: Past record in stock exchange inspection or broking entity audits.",
      "System Audit Readiness: Capability to audit high-frequency trading (HFT) risk management servers.",
      "Peer Review Status: Active Peer Review Board certificate mandatory under SEBI circulars."
    ],
    scopeOfWork: [
      "Half-yearly internal audit of stock brokers covering KYC verification, account handling, and ledger reconciliation.",
      "Inspection of client fund segregation to prevent unauthorized pledging or co-mingling of client securities.",
      "Audit of Depository Participants (DPs) covering demat requests (DRF), delivery instructions (DIS), and pledge releases.",
      "Submission of compliance audit reports electronically on NSE ENIT and BSE Portal."
    ],
    steps: [
      "Empanel directly with brokerage firms and depository participants.",
      "Perform half-yearly audits according to terms of reference prescribed by SEBI and stock exchanges.",
      "Issue formal Internal Audit Report and Risk Rating score.",
      "File online verification certificates on exchange compliance portals."
    ],
    tags: ["SEBI Master Circular", "NSE & BSE Brokers", "CDSL & NSDL Demat", "Client Fund Segregation"]
  },
  {
    id: "sec-142-special-audit",
    name: "Section 142(2A) Special Tax Auditor",
    fullName: "CBDT Nominated Special Auditor — Income Tax Department",
    authority: "Central Board of Direct Taxes (CBDT)",
    category: "taxation",
    statute: "Income-tax Act, 1961 / 2025 (Section 142(2A))",
    firmStanding: "Minimum 7 to 10 years standing in complex tax litigation and corporate audit",
    minPartners: "Minimum 2 full-time FCA partners",
    technicalPrerequisites: "Advanced expertise in transfer pricing, forensic tax reconstruction, and valuation.",
    peerReviewRequired: true,
    applicationWindow: "Empanelment notification issued by Principal Chief Commissioner of Income Tax (PCCIT)",
    remunerationGrade: "Central Government Scale: ₹2,00,000 to ₹30,00,000+ paid directly by Ministry of Finance",
    portalUrl: "https://www.incometax.gov.in/",
    summary: "Judicial appointment by the Income Tax Department to conduct an intensive statutory audit of assessees with complex accounts, suspected multi-layered transactions, or specialized industry operations.",
    pointAlgorithm: [
      "Taxation Standing: Seniority and track record in handling search & seizure assessments and ITAT appeals.",
      "Complex Industry Exposure: Exposure to real estate, infrastructure, derivatives, or cross-border tax structures.",
      "Integrity & Clearance: Vetted by Income Tax Directorate of Investigation."
    ],
    scopeOfWork: [
      "In-depth statutory audit of books of account directed by Assessing Officer with prior approval of PCCIT.",
      "Reconstruction of suppressed turnover, unrecorded investments, and fictitious expenditures.",
      "Determination of correct arm's length pricing and real profit margins.",
      "Submission of statutory Special Audit Report in Form 6B directly to the Tax Department."
    ],
    steps: [
      "Apply during regional PCCIT empanelment drives for Section 142(2A) auditors.",
      "Receive formal nomination order from Commissioner of Income Tax for specific assessee.",
      "Conduct investigation and access assessee premises under statutory authority.",
      "Submit Form 6B audit findings and bill professional fee to Central Government."
    ],
    tags: ["Section 142(2A)", "CBDT Nominated Panel", "Tax Investigation", "Form 6B Report"]
  },
  {
    id: "gst-sec-66-audit",
    name: "GST Section 66 Special Auditor",
    fullName: "GST Department Special Auditor — Nominated by Commissioner of Indirect Taxes",
    authority: "GST Council & Central Board of Indirect Taxes and Customs (CBIC)",
    category: "taxation",
    statute: "Central Goods and Services Tax Act, 2017 (Section 66)",
    firmStanding: "Minimum 5 years standing in indirect tax audit and practice",
    minPartners: "Minimum 1 to 2 practicing CAs with indirect tax specialization",
    technicalPrerequisites: "Certificate Course on GST (ICAI IDTC) strongly preferred.",
    peerReviewRequired: false,
    applicationWindow: "Nomination on case-by-case basis by GST Commissioner",
    remunerationGrade: "Expenses and professional fees determined and paid by the GST Commissioner",
    portalUrl: "https://www.cbic.gov.in/",
    summary: "Statutory nomination by the GST Commissioner to audit registered persons suspected of incorrect valuation, abnormal input tax credit (ITC) claims, or complex supply networks.",
    pointAlgorithm: [
      "GST Practice Track Record: Established litigation and scrutiny experience under CGST Act.",
      "Data Reconciliation Mastery: Ability to audit multi-gigabyte GSTR-2B vs ERP purchase registers.",
      "No Conflict of Interest: Firm must not be the statutory auditor or tax advisor to the assessee."
    ],
    scopeOfWork: [
      "Special audit conducted under direction in Form GST ADT-03.",
      "Comprehensive verification of classification, valuation of supplies, and input tax credit availed.",
      "Audit of cross-charge transactions, related party supply values, and export refund calculations.",
      "Submission of audit report in Form GST ADT-04 to the Assistant Commissioner within 90 days."
    ],
    steps: [
      "Empanelment / nomination letter received from GST Commissionerate.",
      "Issue audit notice and inspect registered person books, ERP logs, and factory registers.",
      "Formulate audit findings regarding tax evasion or inverted duty structure discrepancies.",
      "Submit Form GST ADT-04 and receive government disbursement."
    ],
    tags: ["Section 66 CGST", "GST Special Audit", "Input Tax Credit Scrutiny", "ADT-04 Report"]
  },
  {
    id: "carbon-cbam-verifier",
    name: "Carbon & CBAM Verification Auditor",
    fullName: "Carbon Credit Trading Scheme (CCTS) & EU CBAM Independent Assurance Verifier",
    authority: "Sustainability Reporting Standards Board (SRSB) & Bureau of Energy Efficiency (BEE)",
    category: "esg",
    statute: "Energy Conservation Act, 2001 & EU CBAM Regulation (EU) 2023/956",
    firmStanding: "Minimum 3 years standing with ESG / BRSR assurance competence",
    minPartners: "Minimum 2 partners (at least 1 with sustainability accreditation)",
    technicalPrerequisites: "Certificate Course on BRSR (ICAI) / GARP SCR / ISO 14064 GHG Verifier.",
    peerReviewRequired: false,
    applicationWindow: "Continuous empanelment with BEE and domestic industrial exporters",
    remunerationGrade: "₹3,00,000 to ₹25,00,000+ per plant/product footprint verification",
    portalUrl: "https://sustainability.icai.org/",
    summary: "Independent assurance and carbon footprint auditing for Indian exporting conglomerates (steel, aluminum, cement) to satisfy EU CBAM regulations and verify credits under the Indian Carbon Market.",
    pointAlgorithm: [
      "ESG Assurance Experience: Track record in issuing independent assurance reports under SSAE 3000 / ISAE 3000.",
      "Greenhouse Gas Accounting: Mastery over GHG Protocol Corporate Standard (Scope 1, Scope 2, Scope 3).",
      "Manufacturing Process Exposure: Understanding blast furnace, clinker, and electrolytic production footprints."
    ],
    scopeOfWork: [
      "Audit of embedded carbon emissions per metric tonne of steel, aluminum, and cement exported to the EU.",
      "Independent assurance of quarterly CBAM declarations submitted to the European Commission.",
      "Verification of Carbon Emission Reductions (CERs) under India's Carbon Credit Trading Scheme (CCTS).",
      "Auditing green bond fund allocation and sustainability-linked loan covenant compliance."
    ],
    steps: [
      "Complete ICAI Certificate Course on Sustainability & BRSR or ISO 14064 GHG verification.",
      "Empanel with BEE or contract directly with exporting manufacturing corporations.",
      "Conduct plant-level emission testing and data reconciliation against production logs.",
      "Issue certified Verification Declaration valid for EU customs authorities and carbon registries."
    ],
    tags: ["EU CBAM Compliance", "Carbon Credit Accounting", "Scope 1 2 3 Audits", "Green Finance"]
  },
  {
    id: "trai-telecom-agr",
    name: "TRAI Telecom & AGR Statutory Auditor",
    fullName: "Telecom Regulatory Authority of India & DoT — License Fee & AGR Empanelled Auditor",
    authority: "Telecom Regulatory Authority of India (TRAI) & Department of Telecommunications (DoT)",
    category: "psu",
    statute: "TRAI Act, 1997 & Unified License Agreement (DoT)",
    firmStanding: "Minimum 10 years firm standing with large telecom/infrastructure audit exposure",
    minPartners: "Minimum 4 full-time FCA partners",
    technicalPrerequisites: "DISA/CISA qualified partners for billing system CDR (Call Detail Record) testing.",
    peerReviewRequired: true,
    applicationWindow: "Bi-annual empanelment through DoT / TRAI tenders",
    remunerationGrade: "Institutional Scale: ₹10,00,000 to ₹40,00,000+ per telecom circle",
    portalUrl: "https://www.trai.gov.in/",
    summary: "Statutory audit of Adjusted Gross Revenue (AGR), spectrum usage charges (SUC), and billing/metering accuracy for telecom service providers (Airtel, Jio, Vodafone Idea) across 22 telecom circles.",
    pointAlgorithm: [
      "Telecom Experience: Past auditing of telecommunications, ISP, or broadcasting balance sheets.",
      "IT Forensic Capabilities: Ability to audit billing mediators, HLR/VLR databases, and billing rating engines.",
      "Pan-India Presence: Branch offices across multiple state telecom circles."
    ],
    scopeOfWork: [
      "Statutory verification of Adjusted Gross Revenue (AGR) under supreme court definitions.",
      "Audit of spectrum usage charges (SUC) and license fee remittances to the Consolidated Fund of India.",
      "Technical audit of Quality of Service (QoS) metering and billing accuracy under TRAI regulations.",
      "Certification of deductions claimed for interconnect usage charges (IUC) and pass-through revenues."
    ],
    steps: [
      "Apply during Department of Telecommunications (DoT) national tender for empanelment of auditors.",
      "Technical and financial bid evaluation based on partner credentials and circle coverage.",
      "Conduct telecom circle audit and CDR sampling.",
      "Submit audited AGR statements to Controller of Communication Accounts (CCA) and TRAI."
    ],
    tags: ["Adjusted Gross Revenue", "TRAI Metering Audit", "DoT License Fees", "Telecom Circles"]
  },
  {
    id: "mscs-cooperative",
    name: "Multi-State Co-operative Society & Bank Auditor",
    fullName: "Ministry of Co-operation — Multi-State Co-operative Societies & Urban Bank Panel",
    authority: "Central Registrar of Co-operative Societies (CRCS) & Ministry of Co-operation",
    category: "banking",
    statute: "Multi-State Co-operative Societies Act, 2002 (Section 70)",
    firmStanding: "Minimum 3 to 7 years standing in bank and financial institution auditing",
    minPartners: "Minimum 2 full-time partners",
    technicalPrerequisites: "Completion of Certificate Course on Concurrent Audit or Co-operatives (CNC).",
    peerReviewRequired: true,
    applicationWindow: "Empanelment panel published by Central Registrar / State Co-operative Registrars",
    remunerationGrade: "Statutory Co-operative Scale: ₹75,000 to ₹10,00,000+ based on working capital",
    portalUrl: "https://cooperation.gov.in/",
    summary: "Exclusive statutory audit monopoly over Multi-State Co-operative Banks (UCBs), state co-operative federations, and dairy/credit multi-state societies across India.",
    pointAlgorithm: [
      "Co-operative Sector Exposure: Experience in auditing credit societies or urban co-operative banks.",
      "Statutory Eligibility: Must be on the panel approved by the Central Registrar under the MSCS Act.",
      "Rotation Norms: Compulsory rotation after consecutive 3 to 5 years."
    ],
    scopeOfWork: [
      "Statutory balance sheet audit of multi-state co-operative societies and urban co-op banks.",
      "Special compliance review under the newly enacted Multi-State Co-operative Societies (Amendment) Act.",
      "Verification of member shareholdings, dividend distributions, and cooperative education fund levies.",
      "Audit of priority sector lending and statutory reserve fund investments."
    ],
    steps: [
      "Register on Central Registrar of Co-operative Societies (CRCS) portal.",
      "Submit firm credentials, partner experience, and Peer Review status.",
      "Selection on the approved national panel of co-operative auditors.",
      "Appointment ratified during general body meetings of multi-state societies."
    ],
    tags: ["MSCS Act 2002", "Urban Co-op Banks", "Ministry of Co-operation", "Credit Societies"]
  },
  {
    id: "nhai-concession-audit",
    name: "NHAI Highway Concession & Toll Auditor",
    fullName: "National Highways Authority of India — Empanelled Statutory Toll & Concession Auditor",
    authority: "National Highways Authority of India (NHAI) & Ministry of Road Transport",
    category: "infra",
    statute: "National Highways Authority of India Act, 1988 & Model Concession Agreements",
    firmStanding: "Minimum 5 years standing with corporate infrastructure auditing experience",
    minPartners: "Minimum 3 full-time partners",
    technicalPrerequisites: "DISA qualified partner for FASTag Electronic Toll Collection (ETC) system audit.",
    peerReviewRequired: true,
    applicationWindow: "Tender invitations issued through NHAI e-procurement portal",
    remunerationGrade: "₹3,00,000 to ₹15,00,000+ per highway stretch / BOT concession",
    portalUrl: "https://nhai.gov.in/",
    summary: "Independent statutory audit of Public-Private Partnership (PPP) highway projects under Build-Operate-Transfer (BOT) and Hybrid Annuity Models (HAM).",
    pointAlgorithm: [
      "Infrastructure Project Experience: Past experience with infrastructure SPVs or construction joint ventures.",
      "Escrow Account Mastery: Capability to audit waterfall cash flows and Debt Service Reserve Accounts (DSRA).",
      "Tech Audit Capability: Validation of automated FASTag plaza sensors and revenue reporting."
    ],
    scopeOfWork: [
      "Statutory audit of toll plaza revenue collections and reconciliation with IHMCL FASTag settlement server.",
      "Verification of project construction costs to establish total project completion cost under HAM models.",
      "Audit of escrow waterfall mechanism ensuring debt service, O&M expenses, and statutory concession fee sharing.",
      "Certification of revenue shortfall compensation or revenue share remittances to NHAI."
    ],
    steps: [
      "Participate in NHAI expression of interest for Independent Auditor empanelment.",
      "Submit technical proposal detailing infrastructure audit methodologies.",
      "Receive appointment for designated highway corridor (e.g. 50km to 200km stretch).",
      "Conduct monthly/annual reviews and submit statutory certification to NHAI Project Director."
    ],
    tags: ["NHAI Toll Audit", "FASTag Reconciliation", "BOT & HAM Models", "Infrastructure SPVs"]
  },
  {
    id: "cerc-power-tariff",
    name: "Power Sector Tariff & True-Up Regulatory Auditor",
    fullName: "Central & State Electricity Regulatory Commissions (CERC / SERC Panel)",
    authority: "Central Electricity Regulatory Commission (CERC) & State ERCs",
    category: "infra",
    statute: "Electricity Act, 2003 (Section 61 & Section 62)",
    firmStanding: "Minimum 7 to 10 years firm standing in corporate utility and regulated accounting",
    minPartners: "Minimum 3 partners",
    technicalPrerequisites: "Specialized understanding of Regulatory Asset Base (RAB) and capital cost benchmarks.",
    peerReviewRequired: true,
    applicationWindow: "Empanelment notices on CERC and State ERC websites",
    remunerationGrade: "Regulatory Scale: ₹5,00,000 to ₹25,00,000+ per utility tariff petition",
    portalUrl: "https://cercind.gov.in/",
    summary: "Statutory regulatory audit of tariff petitions, capital expenditure true-ups, and Aggregate Revenue Requirements (ARR) for power generation (NTPC), transmission (PowerGrid), and state DISCOMs.",
    pointAlgorithm: [
      "Regulatory Accounting Standing: Experience in cost audits, power sector financial modeling, and tariff principles.",
      "Corporate Size Track Record: Experience auditing heavy capital expenditure projects (> ₹500 Cr).",
      "Independence: Strict neutrality from power discoms and generation companies."
    ],
    scopeOfWork: [
      "Statutory audit of Capital Cost and Additional Capitalization for thermal, hydro, and solar generation plants.",
      "Verification of Return on Equity (RoE), interest on loan capital, and depreciation under CERC tariff regulations.",
      "True-up audit of fuel price adjustments (FPA) and power purchase cost pass-throughs for state consumers.",
      "Expert presentation of audit findings during open public hearings before Regulatory Benches."
    ],
    steps: [
      "Register on CERC / State ERC consultant and auditor empanelment panels.",
      "Bid for regulatory true-up and tariff audit assignments.",
      "Analyze multi-year tariff filings and cross-examine financial statements.",
      "Submit statutory regulatory audit report to the Commission to finalize consumer power tariffs."
    ],
    tags: ["Electricity Act 2003", "CERC Tariff Petitions", "DISCOM True-Up", "Regulatory Asset Base"]
  },
  {
    id: "qrb-frrb-reviewer",
    name: "QRB & FRRB Statutory Quality Reviewer",
    fullName: "Quality Review Board & Financial Reporting Review Board — Technical Reviewer Panel",
    authority: "Quality Review Board (Government of India) & ICAI FRRB",
    category: "quality",
    statute: "Chartered Accountants Act, 1949 (Section 28A) & ICAI Council Guidelines",
    firmStanding: "Senior practicing CA / FCA with minimum 15+ years experience in audit quality",
    minPartners: "Senior FCA individual or partnership firm leader",
    technicalPrerequisites: "Demonstrated expertise in Standards on Auditing (SAs) and Ind AS compliance.",
    peerReviewRequired: true,
    applicationWindow: "Periodic invitations on qrbca.in and icai.org",
    remunerationGrade: "Institutional Honorarium: ₹75,000 to ₹3,00,000+ per review assignment",
    portalUrl: "http://www.qrbca.in/",
    summary: "Elite statutory oversight body under Section 28A of the Chartered Accountants Act. Empaneled Technical Reviewers inspect audit quality, workpapers, and GAAP compliance in top listed public interest entities.",
    pointAlgorithm: [
      "Senior Standing: Minimum 15 years as FCA with extensive experience as engagement partner in listed companies.",
      "Clean Disciplinary Record: Zero disciplinary findings or professional misconduct citations.",
      "Technical Eminence: Academic or committee contributions in standard-setting (ASB/AASB)."
    ],
    scopeOfWork: [
      "Inspection of audit documentation and workpapers of statutory auditors of top listed corporations.",
      "Evaluation of compliance with Standards on Quality Control (SQC 1) and Standards on Auditing (SAs).",
      "Assessment of financial statements for material misstatements, non-compliance with Ind AS, and Companies Act notes.",
      "Submission of confidential Technical Review Reports to the Board for recommendations to MCA or NFRA."
    ],
    steps: [
      "Apply during QRB / FRRB Empanelment of Technical Reviewers announcements.",
      "Undergo vetting and interview by Quality Review Board.",
      "Receive assignment to inspect audit files of selected public interest entities.",
      "Submit objective quality rating and detailed compliance report."
    ],
    tags: ["Section 28A CA Act", "Auditor of the Auditors", "SQC 1 Compliance", "Top-Tier Prestige"]
  }
];

// Provide CommonJS export for Node testing environments while preserving browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EMPANELMENTS_DATA;
}
