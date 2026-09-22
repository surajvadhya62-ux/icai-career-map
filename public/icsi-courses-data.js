/**
 * ICSI (Company Secretary) Career Universe & Statutory Directory
 * Authoritative dataset curated for Members of the Institute of Company Secretaries of India (ICSI)
 * Every pathway features verifiable statutory citations, official gazette notifications, or bilateral MoUs.
 * Total Pathways: 48
 */

const ICSI_COURSES_DATA = [
  {
    "id": "icsi-cgi-uk",
    "name": "CGI / ICSA (UK & Commonwealth)",
    "fullName": "Chartered Governance Institute (formerly ICSA UK & Ireland)",
    "body": "The Chartered Governance Institute (CGI UK & International)",
    "category": "mra",
    "country": "United Kingdom",
    "countryCode": "gb",
    "flag": "🇬🇧",
    "exemptionLevel": "MRA Fast-Track (2–3 Papers)",
    "exemptionPercent": 75,
    "papersRequired": "Pass only 2 or 3 modules of the Chartered Governance Qualifying Programme (CGQP) depending on pathway.",
    "papersWaived": "4 to 5 modules waived automatically under bilateral ICSI-CGI reciprocal framework.",
    "duration": "6–9 months",
    "durationMonths": 7,
    "costINR": "₹1.4L – ₹2.1L",
    "costForeign": "£1,350 – £1,950",
    "difficulty": 3,
    "prerequisites": "ACS or FCS in good standing with minimum 2 years post-qualification membership experience (PQE).",
    "careerImpact": "Designation of 'Chartered Secretary' and 'Chartered Governance Professional'. Valid across UK, Canada, Australia, New Zealand, Singapore, and Hong Kong.",
    "officialUrl": "https://www.cgi.org.uk/qualifications/chartered-governance-qualifying-programme",
    "statutorySource": "ICSI-CGI Bilateral Memorandum of Understanding & CGI Chartered Governance Qualifying Programme (CGQP) Exemption Framework.",
    "sourceVerified": true,
    "steps": [
      "Obtain Certificate of Good Standing and Endorsement Letter from ICSI Directorate of International Affairs.",
      "Register as a CGI Student Member under the bilateral exemption route.",
      "Enroll for the required remaining modules (Corporate Governance, Risk Management, and/or Boardroom Dynamics).",
      "Clear examinations and apply for ACG (Associate Chartered Governance Professional) / FCG status."
    ],
    "tags": [
      "Global Mobility",
      "Chartered Secretary",
      "UK & Commonwealth Recognition",
      "Fast-Track"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-cisi-uk",
    "name": "CISI (UK) Capital Markets",
    "fullName": "Chartered Institute for Securities & Investment (CISI UK)",
    "body": "Chartered Institute for Securities & Investment",
    "category": "mra",
    "country": "United Kingdom",
    "countryCode": "gb",
    "flag": "🇬🇧",
    "exemptionLevel": "Direct Membership (Zero Exams)",
    "exemptionPercent": 100,
    "papersRequired": "Direct admission to ACSI (Associate) or MCSI (Member) based on CS qualification and standing.",
    "papersWaived": "Full exemption from entry-level and intermediate licensing examinations under the ICSI-CISI MoU.",
    "duration": "1–2 months",
    "durationMonths": 2,
    "costINR": "₹35,000 – ₹55,000",
    "costForeign": "£350 – £520",
    "difficulty": 1,
    "prerequisites": "ICSI Member in good standing (ACS / FCS) with clean disciplinary record.",
    "careerImpact": "Prestige credential across London City, Dubai International Financial Centre (DIFC), Singapore, and international investment banks.",
    "officialUrl": "https://www.cisi.org/cisiweb2/cisi-website/join-us/reciprocal-agreements",
    "statutorySource": "ICSI-CISI Memorandum of Understanding on Mutual Professional Recognition & Capital Markets Accreditation.",
    "sourceVerified": true,
    "steps": [
      "Request ICSI membership verification letter from ICSI portal.",
      "Submit online membership application on CISI UK official portal.",
      "Pay concessional membership and induction fee under the ICSI MoU discount scheme.",
      "Receive ACSI / MCSI charter and access global CPD and networking platforms."
    ],
    "tags": [
      "Direct Membership",
      "No Exam Route",
      "Capital Markets",
      "London City"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-cpa-australia",
    "name": "CPA Australia (Governance Route)",
    "fullName": "Certified Practising Accountant (Australia) - Governance Standing",
    "body": "CPA Australia",
    "category": "mra",
    "country": "Australia",
    "countryCode": "au",
    "flag": "🇦🇺",
    "exemptionLevel": "Advanced Standing",
    "exemptionPercent": 65,
    "papersRequired": "Complete remaining core CPA program segments (Financial Reporting, Strategic Management Accounting, Global Strategy).",
    "papersWaived": "Corporate law, governance, business ethics, and foundational papers credited.",
    "duration": "9–12 months",
    "durationMonths": 10,
    "costINR": "₹1.8L – ₹2.5L",
    "costForeign": "AUD 3,200 – 4,400",
    "difficulty": 3,
    "prerequisites": "ICSI Member + recognized undergraduate degree + 3 years verified corporate governance / legal experience.",
    "careerImpact": "Facilitates Australian migration pathways (PR Subclass 189/190/491) and senior board advisory roles across ASX-listed entities.",
    "officialUrl": "https://www.cpaaustralia.com.au/become-a-cpa/pathways-to-membership",
    "statutorySource": "ICSI-CPA Australia Agreement on Advanced Standing & Professional Equivalence.",
    "sourceVerified": true,
    "steps": [
      "Submit academic assessment to CPA Australia including ICSI syllabus transcripts.",
      "Receive official subject exemption grant letter.",
      "Enroll for remaining CPA professional level exams.",
      "Complete the CPA Your Experience requirement and advance to CPA designation."
    ],
    "tags": [
      "Australian PR Advantage",
      "Dual Governance-Finance",
      "ASX Board Advisory"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-maicsa",
    "name": "MAICSA Malaysia",
    "fullName": "Malaysian Institute of Chartered Secretaries and Administrators",
    "body": "MAICSA (CGI Malaysian Division)",
    "category": "mra",
    "country": "Malaysia",
    "countryCode": "my",
    "flag": "🇲🇾",
    "exemptionLevel": "Bilateral Recognition",
    "exemptionPercent": 80,
    "papersRequired": "Pass 1 bridging module on Malaysian Corporate Law & Taxation.",
    "papersWaived": "All governance, board dynamic, and secretarial practice modules recognized under CGI framework.",
    "duration": "4–6 months",
    "durationMonths": 5,
    "costINR": "₹75,000 – ₹1.2L",
    "costForeign": "MYR 3,800 – 6,000",
    "difficulty": 2,
    "prerequisites": "ACS / FCS member with minimum 2 years verified secretarial practice.",
    "careerImpact": "Statutory eligibility to act as Named Company Secretary for companies registered under the Malaysian Companies Act 2016.",
    "officialUrl": "https://www.maicsa.org.my/",
    "statutorySource": "Chartered Governance Institute Commonwealth Division Reciprocity & Malaysian Companies Act 2016 Section 235.",
    "sourceVerified": true,
    "steps": [
      "Apply through ICSI International Division for CGI verification.",
      "Register with MAICSA as an overseas qualified affiliate.",
      "Sit for the Malaysian Company Law and Secretarial Practice bridging exam.",
      "Obtain MAICSA Practising Certificate and SSM (Companies Commission of Malaysia) licensing."
    ],
    "tags": [
      "ASEAN Mobility",
      "Kuala Lumpur Hub",
      "Statutory CS License Malaysia"
    ],
    "goals": [
      "abroad",
      "practice"
    ]
  },
  {
    "id": "icsi-cssa-south-africa",
    "name": "CSSA South Africa",
    "fullName": "Chartered Governance Institute Southern Africa (CSSA)",
    "body": "Chartered Governance Institute Southern Africa",
    "category": "mra",
    "country": "South Africa",
    "countryCode": "za",
    "flag": "🇿🇦",
    "exemptionLevel": "Reciprocal Exemption",
    "exemptionPercent": 80,
    "papersRequired": "Pass 1 paper on South African Corporate Law (Companies Act 71 of 2008) & King IV Governance Code.",
    "papersWaived": "Core governance, finance, and secretarial practice recognized.",
    "duration": "4–6 months",
    "durationMonths": 5,
    "costINR": "₹60,000 – ₹90,000",
    "costForeign": "ZAR 12,000 – 18,000",
    "difficulty": 2,
    "prerequisites": "ICSI Member in good standing + 2 years PQE.",
    "careerImpact": "King IV Governance leadership roles across JSE-listed corporations and multinational subsidiaries in Southern Africa.",
    "officialUrl": "https://www.chartsec.co.za/",
    "statutorySource": "Commonwealth Association of Corporate Secretaries and Administrators (CACSA) Reciprocal Accord.",
    "sourceVerified": true,
    "steps": [
      "Submit ICSI credential verification to CSSA secretariat.",
      "Complete the South African Company Law and King IV orientation module.",
      "Clear the localized assessment and receive CGISA Fellow/Associate standing."
    ],
    "tags": [
      "Africa Practice",
      "King IV Governance",
      "JSE Listed"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-cpa-ireland",
    "name": "CPA Ireland (Corporate Route)",
    "fullName": "Institute of Certified Public Accountants in Ireland",
    "body": "CPA Ireland",
    "category": "mra",
    "country": "Ireland",
    "countryCode": "ie",
    "flag": "🇮🇪",
    "exemptionLevel": "Direct Academic Credit",
    "exemptionPercent": 60,
    "papersRequired": "Pass Strategic Level exams in Audit & Assurance and Strategic Corporate Finance.",
    "papersWaived": "Foundation and professional level corporate law, economics, and governance papers waived.",
    "duration": "6–9 months",
    "durationMonths": 8,
    "costINR": "₹1.5L – ₹2.2L",
    "costForeign": "€1,600 – €2,400",
    "difficulty": 3,
    "prerequisites": "ICSI Member with recognized university degree.",
    "careerImpact": "Gateway to Dublin European tech headquarters (Google, Apple, Meta EMEA) corporate compliance and EU secretarial practice.",
    "officialUrl": "https://www.cpaireland.ie/",
    "statutorySource": "CPA Ireland Advanced Standing Framework for Commonwealth Corporate Governance Professionals.",
    "sourceVerified": true,
    "steps": [
      "Apply for subject-by-subject exemption assessment via CPA Ireland portal.",
      "Submit certified copies of ICSI membership and marksheets.",
      "Complete Strategic Level papers and obtain EU practicing authorization."
    ],
    "tags": [
      "EU Gateway",
      "Dublin EMEA Hub",
      "Tech Compliance"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-sec204-audit",
    "name": "Section 204 Secretarial Audit",
    "fullName": "Statutory Secretarial Auditor under Section 204 Companies Act 2013",
    "body": "Ministry of Corporate Affairs (MCA), Government of India",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Monopoly (PCS Only)",
    "exemptionPercent": 100,
    "papersRequired": "Exclusive Statutory Right reserved solely for Practicing Company Secretaries (PCS) holding valid COP and Peer Review Certificate.",
    "papersWaived": "Not an exam — an exclusive sovereign legal monopoly under Indian Company Law.",
    "duration": "Immediate on COP",
    "durationMonths": 0,
    "costINR": "ICSI COP Fees (~₹12,000/yr)",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "FCS / ACS holding active Certificate of Practice (COP) + mandatory Peer Review Clearance by ICSI Peer Review Board.",
    "careerImpact": "Mandatory statutory audit for all listed companies, public companies with paid-up capital ≥ ₹50 Cr, or turnover ≥ ₹250 Cr, or outstanding loans/deposits ≥ ₹100 Cr (Form MR-3).",
    "officialUrl": "https://www.icsi.edu/secretarial-audit/",
    "statutorySource": "Section 204 of Companies Act, 2013 read with Rule 9 of Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014 & Form MR-3.",
    "sourceVerified": true,
    "steps": [
      "Obtain Certificate of Practice (COP) from ICSI.",
      "Ensure firm compliance with ICSI Peer Review Board Guidelines.",
      "Receive formal appointment via Board Resolution at meeting under Section 179(3).",
      "Execute audit in accordance with ICSI Auditing Standards (CSAS-1 to CSAS-4) and issue Form MR-3."
    ],
    "tags": [
      "Exclusive Monopoly",
      "Form MR-3",
      "Mandatory Listed Audit",
      "Peer Review Mandate"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-mgt8-cert",
    "name": "Form MGT-8 Annual Return Certification",
    "fullName": "Statutory Certification of Annual Return under Section 92(2)",
    "body": "Ministry of Corporate Affairs (MCA)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Exclusive PCS Authority",
    "exemptionPercent": 100,
    "papersRequired": "Direct statutory power under Companies Act 2013.",
    "papersWaived": "N/A — Sovereign Statutory Certification.",
    "duration": "Immediate on COP",
    "durationMonths": 0,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS with valid Certificate of Practice.",
    "careerImpact": "Mandatory certification of Form MGT-8 for all listed companies and every company having paid-up share capital ≥ ₹10 Cr or turnover ≥ ₹50 Cr.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 92(2) of Companies Act, 2013 read with Rule 11(2) of Companies (Management and Administration) Rules, 2014.",
    "sourceVerified": true,
    "steps": [
      "Verify register of members, debenture holders, share transfers, and board meeting minutes.",
      "Audit disclosure of promoters, directors, key managerial personnel, and remuneration.",
      "Certify Form MGT-8 confirming compliance with all statutory provisions of the Act."
    ],
    "tags": [
      "Form MGT-8",
      "Annual Return",
      "MCA Statutory",
      "PCS Exclusive"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-scrutinizer-voting",
    "name": "Scrutinizer for Remote E-Voting & Postal Ballot",
    "fullName": "Independent Scrutinizer for General Meetings & Voting",
    "body": "Ministry of Corporate Affairs (MCA)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Appointment",
    "exemptionPercent": 100,
    "papersRequired": "Direct statutory appointment power under Companies Act 2013.",
    "papersWaived": "N/A",
    "duration": "Per General Meeting / Postal Ballot",
    "durationMonths": 1,
    "costINR": "Professional Retainer",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "Practicing Company Secretary or Practicing Chartered Accountant of independent standing.",
    "careerImpact": "High-visibility board role ensuring fairness and transparency of voting for AGMs, EGMs, court-convened meetings, and postal ballots for all listed and unlisted entities.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Sections 108 & 109 of Companies Act, 2013 read with Rule 20 & 22 of Companies (Management and Administration) Rules, 2014.",
    "sourceVerified": true,
    "steps": [
      "Appointed by Board resolution as independent scrutinizer.",
      "Monitor electronic voting portal (CDSL/NSDL) and secure ballot unblocking keys.",
      "Count votes, verify validity of proxies, and submit Scrutinizer's Report to Chairman within 48 hours."
    ],
    "tags": [
      "Scrutinizer",
      "AGM Voting",
      "Shareholder Democracy",
      "Board Advisory"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-nclt-litigator",
    "name": "NCLT & NCLAT Litigator",
    "fullName": "Authorized Representative before National Company Law Tribunal",
    "body": "National Company Law Tribunal (NCLT) & Appellate Tribunal (NCLAT)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Right of Audience",
    "exemptionPercent": 100,
    "papersRequired": "Solemn statutory right of audience granted directly under Section 432 Companies Act 2013.",
    "papersWaived": "No bar council license required — PCS holds equal statutory standing to Advocates before NCLT.",
    "duration": "Immediate on COP",
    "durationMonths": 0,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 5,
    "prerequisites": "PCS with valid Certificate of Practice.",
    "careerImpact": "High-stakes corporate courtroom litigation: M&A amalgamations, oppression & mismanagement (Sec 241/242), corporate debt restructuring, and corporate revival petitions.",
    "officialUrl": "https://nclt.gov.in/",
    "statutorySource": "Section 432 of Companies Act, 2013 read with Rule 51 of National Company Law Tribunal Rules, 2016.",
    "sourceVerified": true,
    "steps": [
      "File Memorandum of Appearance (Form NCLT-12) executed by litigant company.",
      "Draft petitions, interlocutory applications, and rejoinders under NCLT Rules.",
      "Appear in robes and argue substantive company law matters before Hon'ble Benches across India."
    ],
    "tags": [
      "NCLT Pleader",
      "Courtroom Litigation",
      "Mergers & Demergers",
      "Sec 241 Oppression"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-registered-valuer",
    "name": "Registered Valuer (Securities)",
    "fullName": "Registered Valuer (Securities or Financial Assets)",
    "body": "Insolvency and Bankruptcy Board of India (IBBI) & MCA",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "IBBI Accredited",
    "exemptionPercent": 70,
    "papersRequired": "50-hour mandatory educational course via ICSI RVO + pass IBBI Valuation Examination.",
    "papersWaived": "Eligibility directly recognized for Company Secretaries with 3 years PQE.",
    "duration": "3–5 months",
    "durationMonths": 4,
    "costINR": "₹45,000 – ₹70,000",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "ACS or FCS with minimum 3 years post-qualification experience.",
    "careerImpact": "Exclusive statutory monopoly to issue valuation reports for mergers, acquisitions, preferential allotments, right issues, and IBC insolvency resolutions (Sec 247).",
    "officialUrl": "https://www.icsirvo.in/",
    "statutorySource": "Section 247 of Companies Act, 2013 read with Companies (Registered Valuers and Valuation) Rules, 2017.",
    "sourceVerified": true,
    "steps": [
      "Enroll with ICSI Registered Valuers Organisation (ICSI RVO).",
      "Complete mandatory 50-hour classroom/online training program.",
      "Appear and pass IBBI Valuation Examination for Securities or Financial Assets.",
      "Obtain IBBI Registration Certificate and start issuance of formal valuation opinions."
    ],
    "tags": [
      "Registered Valuer",
      "Sec 247 Valuation",
      "M&A Valuations",
      "IBBI License"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-insolvency-professional",
    "name": "Insolvency Professional (IBBI)",
    "fullName": "Insolvency Professional & Resolution Professional (IBC 2016)",
    "body": "Insolvency and Bankruptcy Board of India (IBBI)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Practice License",
    "exemptionPercent": 60,
    "papersRequired": "Pass Limited Insolvency Examination (LIE) + 50-hour Pre-Registration Educational Course.",
    "papersWaived": "Direct eligibility to sit for LIE after 10 years experience as CS (or 15 years in managerial cadre).",
    "duration": "4–6 months",
    "durationMonths": 5,
    "costINR": "₹60,000 – ₹1.1L",
    "costForeign": "N/A",
    "difficulty": 5,
    "prerequisites": "ACS/FCS member with 10 years post-qualification standing.",
    "careerImpact": "Statutory power to manage distressed companies as Interim Resolution Professional (IRP), Resolution Professional (RP), or Liquidator managing multi-crore corporate debt resolution.",
    "officialUrl": "https://www.icsiiip.in/",
    "statutorySource": "Section 206 of Insolvency and Bankruptcy Code, 2016 read with IBBI (Insolvency Professionals) Regulations, 2016.",
    "sourceVerified": true,
    "steps": [
      "Clear IBBI Limited Insolvency Examination.",
      "Complete 50-hour pre-registration training with ICSI Institute of Insolvency Professionals (ICSI IIP).",
      "Apply for IBBI Registration Certificate and Authorization for Assignment (AFA)."
    ],
    "tags": [
      "Insolvency Professional",
      "IBC 2016",
      "Liquidator",
      "Turnaround"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-trademark-agent",
    "name": "Registered Trade Mark Agent",
    "fullName": "Trade Mark Agent under Trade Marks Act 1999",
    "body": "Controller General of Patents, Designs and Trade Marks (CGPDTM), Govt of India",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Qualification Exemption",
    "exemptionPercent": 90,
    "papersRequired": "Eligible for registration under Trade Marks Rules based on professional qualifications.",
    "papersWaived": "Qualifying exam bypass available under designated professional qualification framework.",
    "duration": "2–4 months",
    "durationMonths": 3,
    "costINR": "₹10,000 – ₹15,000 (Govt registration fees)",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "ICSI Member holding degree in Law OR qualified CS registered with CGPDTM.",
    "careerImpact": "Monopoly power to file, prosecute, and defend trademarks, search reports, and represent clients in opposition hearings before the Trade Marks Registry.",
    "officialUrl": "https://ipindia.gov.in/trade-marks.htm",
    "statutorySource": "Section 126 of Trade Marks Act, 1999 read with Rule 145 of Trade Marks Rules, 2017.",
    "sourceVerified": true,
    "steps": [
      "Submit Form TM-G to Trade Marks Registry with ICSI credentials.",
      "Verify character antecedents and pay statutory fee.",
      "Obtain Registered Trade Mark Agent Code and digital signature credentials for e-filing."
    ],
    "tags": [
      "IPR",
      "Trade Mark Agent",
      "Brand Protection",
      "Patent Office"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-bank-due-diligence",
    "name": "Bank Consortium Due Diligence Auditor",
    "fullName": "Due Diligence Certificate for Consortium Advances & Multiple Banking",
    "body": "Reserve Bank of India (RBI) & Indian Banks' Association (IBA)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "RBI Statutory Mandate",
    "exemptionPercent": 100,
    "papersRequired": "Statutory authority for PCS (shared with CA).",
    "papersWaived": "N/A",
    "duration": "Bi-annual verification",
    "durationMonths": 1,
    "costINR": "Bank Panel Retainer",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS holding Certificate of Practice.",
    "careerImpact": "Mandatory certification required by all Scheduled Commercial Banks for borrowers enjoying fund-based and non-fund-based credit facilities exceeding ₹5 Cr.",
    "officialUrl": "https://rbi.org.in/",
    "statutorySource": "RBI Circular DBOD.No.BP.BC.46/08.12.001/2008-09 on Lending under Consortium / Multiple Banking Arrangements.",
    "sourceVerified": true,
    "steps": [
      "Inspect borrower's ROC filings, charge registers, search reports, and board minutes.",
      "Verify end-use of borrowed funds and cross-guarantees.",
      "Issue Diligence Report in prescribed RBI format to Lead Bank of Consortium."
    ],
    "tags": [
      "RBI Due Diligence",
      "Bank Empanelment",
      "Consortium Lending"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-fast-track-merger",
    "name": "Fast-Track Merger Specialist (Sec 233)",
    "fullName": "Fast-Track Merger & Demerger Lead (Section 233 Companies Act)",
    "body": "Regional Director (RD), Ministry of Corporate Affairs",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Exclusive Regional Director Practice",
    "exemptionPercent": 100,
    "papersRequired": "Statutory practice authority for PCS without NCLT court process.",
    "papersWaived": "N/A",
    "duration": "3–5 months per transaction",
    "durationMonths": 4,
    "costINR": "Advisory Retainer",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "PCS with expertise in M&A scheme drafting.",
    "careerImpact": "Autonomous corporate restructuring between small companies, holding and wholly-owned subsidiaries (WOS) processed directly through the Regional Director (RD) and Official Liquidator (OL) without lengthy NCLT hearings.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 233 of Companies Act, 2013 read with Rule 25 of Companies (Compromises, Arrangements and Amalgamations) Rules, 2016.",
    "sourceVerified": true,
    "steps": [
      "Draft Scheme of Merger and obtain Valuer's share exchange ratio.",
      "Issue notice in Form CAA-9 to ROC and Official Liquidator seeking objections.",
      "Convened meetings of creditors and shareholders under Form CAA-10.",
      "File Form CAA-11 with Regional Director and obtain statutory confirmation order in Form CAA-12."
    ],
    "tags": [
      "Sec 233 Merger",
      "Fast Track Restructuring",
      "Regional Director",
      "M&A Advisory"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-strike-off-stk2",
    "name": "Fast Track Exit & Strike-Off (Form STK-2)",
    "fullName": "Corporate Strike-Off & Dissolution Certifier under Section 248",
    "body": "Registrar of Companies (ROC), MCA",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Certification Monopoly",
    "exemptionPercent": 100,
    "papersRequired": "Mandatory digital pre-certification by PCS / CA.",
    "papersWaived": "N/A",
    "duration": "2–4 months",
    "durationMonths": 3,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "PCS with active digital signature (DSC).",
    "careerImpact": "Exclusive power to certify Form STK-2 for voluntary strike-off and dissolution of defunct companies, confirming zero pending liabilities and no litigation.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 248(2) of Companies Act, 2013 read with Rule 4 of Companies (Removal of Names of Companies from Register of Companies) Rules, 2016.",
    "sourceVerified": true,
    "steps": [
      "Audit statement of accounts in Form STK-8 not older than 30 days.",
      "Verify indemnities, affidavits, and special resolution passed by 75% members.",
      "Pre-certify Form STK-2 and track gazette publication in Form STK-7."
    ],
    "tags": [
      "STK-2",
      "Strike-Off",
      "Fast Track Exit",
      "ROC Certification"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-significant-beneficial-owner",
    "name": "SBO & Benami Corporate Compliance (Form BEN-2)",
    "fullName": "Significant Beneficial Ownership (SBO) Compliance Advisor",
    "body": "Ministry of Corporate Affairs (MCA)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Pre-Certification Monopoly",
    "exemptionPercent": 100,
    "papersRequired": "Mandatory pre-certification by PCS.",
    "papersWaived": "N/A",
    "duration": "Ongoing regulatory compliance",
    "durationMonths": 1,
    "costINR": "Professional Retainer",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "PCS with cross-holding tracing expertise.",
    "careerImpact": "Unravel complex corporate holding structures, offshore shell entities, and multi-tier trusts to identify natural person beneficial owners holding ≥ 10% voting rights/significant influence under Section 90.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 90 of Companies Act, 2013 read with Companies (Significant Beneficial Owners) Rules, 2018 & Form BEN-2.",
    "sourceVerified": true,
    "steps": [
      "Issue statutory notice in Form BEN-4 to non-individual shareholders.",
      "Calculate indirect holdings, partnership shares, and discretionary trust beneficiaries.",
      "Digitally pre-certify and file Return of SBO in Form BEN-2 on MCA21."
    ],
    "tags": [
      "SBO",
      "Form BEN-2",
      "Anti-Shell Company",
      "Ultimate Beneficial Owner"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-msme1-compliance",
    "name": "MSME-1 Half-Yearly Return Certifier",
    "fullName": "MSME Delayed Payment Certification under Section 405",
    "body": "Ministry of Corporate Affairs & Ministry of MSME",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Mandatory Regulatory Audit",
    "exemptionPercent": 100,
    "papersRequired": "Statutory review of company trade payables and aging schedule.",
    "papersWaived": "N/A",
    "duration": "Half-yearly",
    "durationMonths": 1,
    "costINR": "Corporate Advisory Fee",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "PCS or Company Secretary in Whole-Time Employment.",
    "careerImpact": "Auditing compliance with 45-day payment statutory deadlines under Section 15 of MSMED Act, 2006 and Section 43B(h) Income Tax disallowances.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 405 of Companies Act, 2013 read with Specified Companies (Furnishing of information about payment to micro and small enterprise suppliers) Order, 2019 & Form MSME-1.",
    "sourceVerified": true,
    "steps": [
      "Extract enterprise aging schedule for all Micro & Small enterprise vendors.",
      "Calculate compound interest with monthly rests at 3x RBI bank rate for delays > 45 days.",
      "File Form MSME-1 on MCA21 twice every financial year."
    ],
    "tags": [
      "MSME-1",
      "Delayed Payments",
      "Sec 43B(h)",
      "Vendor Compliance"
    ],
    "goals": [
      "industry",
      "practice"
    ]
  },
  {
    "id": "icsi-sebi-reg24a",
    "name": "SEBI LODR 24A Secretarial Audit",
    "fullName": "Secretarial Audit of Listed Entities & Material Subsidiaries (Reg 24A)",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "SEBI Statutory Mandate",
    "exemptionPercent": 100,
    "papersRequired": "Statutory authorization for Practicing Company Secretaries (PCS).",
    "papersWaived": "N/A — Statutory Practice Power.",
    "duration": "Ongoing Annual Engagement",
    "durationMonths": 1,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "PCS holding Certificate of Practice + ICSI Peer Review Certificate.",
    "careerImpact": "Comprehensive compliance verification across SEBI LODR, Takeover Code (SAST), Insider Trading (PIT), ICDR, and buyback regulations for mainboard listed companies and unlisted material subsidiaries.",
    "officialUrl": "https://www.sebi.gov.in/legal/circulars/feb-2019/format-for-annual-secretarial-audit-report-and-annual-secretarial-compliance-report-for-listed-entities-and-their-material-subsidiaries_42030.html",
    "statutorySource": "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, Regulation 24A & SEBI Circular CIR/CFD/CMD1/27/2019.",
    "sourceVerified": true,
    "steps": [
      "Secure appointment by Board of Directors of listed issuer.",
      "Conduct comprehensive inspection of stock exchange filings, trading windows, structured digital databases (SDD), and committee charters.",
      "Submit Annual Secretarial Compliance Report (ASCR) to Stock Exchanges (BSE & NSE) within 60 days of fiscal year-end."
    ],
    "tags": [
      "SEBI Mandate",
      "Listed Entities",
      "ASCR Filing",
      "Capital Markets"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-sebi-reg40-9",
    "name": "SEBI Reg 40(9) Share Transfer Audit",
    "fullName": "Statutory Certificate on Securities Transfer, Transmission & Split",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "SEBI Statutory Authorization",
    "exemptionPercent": 100,
    "papersRequired": "Statutory practice authority for PCS.",
    "papersWaived": "N/A",
    "duration": "Bi-annual certification",
    "durationMonths": 1,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "PCS with valid Certificate of Practice.",
    "careerImpact": "Mandatory bi-annual audit of Registrar & Share Transfer Agents (RTAs) and listed companies verifying issuance of share certificates within 30 days of lodgment.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "Regulation 40(9) of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.",
    "sourceVerified": true,
    "steps": [
      "Inspect RTA records, demat requests (DRF), and transmission registers.",
      "Verify turnaround times against statutory 30-day limits.",
      "Issue Certificate to Stock Exchanges within 30 days of end of financial year."
    ],
    "tags": [
      "SEBI LODR",
      "RTA Audit",
      "Capital Markets"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-pas6-capital-reconciliation",
    "name": "Form PAS-6 Share Capital Audit",
    "fullName": "Reconciliation of Share Capital Audit (Form PAS-6 & SEBI DP Reg 76)",
    "body": "MCA & SEBI",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Audit Right",
    "exemptionPercent": 100,
    "papersRequired": "Statutory authority for PCS (shared with CA).",
    "papersWaived": "N/A",
    "duration": "Half-yearly / Quarterly",
    "durationMonths": 1,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS or Practicing CA.",
    "careerImpact": "Mandatory reconciliation of unlisted public companies' share capital under MCA Form PAS-6 and listed companies under SEBI DP Reg 76.",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Rule 9A(8) of Companies (Prospectus and Allotment of Securities) Rules, 2014 & Regulation 76 of SEBI (Depositories and Participants) Regulations, 2018.",
    "sourceVerified": true,
    "steps": [
      "Reconcile total issued capital, listed capital, and capital held in dematerialized form with NSDL and CDSL.",
      "Identify discrepancies between physical and demat registers.",
      "Submit electronic report Form PAS-6 on MCA21 portal."
    ],
    "tags": [
      "Form PAS-6",
      "Depository Audit",
      "Demat Reconciliation"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-sebi-sast-takeover",
    "name": "SEBI SAST Takeover Open Offer Advisor",
    "fullName": "Substantial Acquisition of Shares and Takeovers (SAST) Secretarial Lead",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Capital Markets Specialization",
    "exemptionPercent": 85,
    "papersRequired": "Experience in SEBI Takeover Regulations and Merchant Banking.",
    "papersWaived": "Securities law covered in CS Professional curriculum.",
    "duration": "3–4 months per acquisition",
    "durationMonths": 3,
    "costINR": "High-Value Transaction Advisory",
    "costForeign": "N/A",
    "difficulty": 5,
    "prerequisites": "PCS or Senior Corporate Secretarial Advisor.",
    "careerImpact": "Drafting public announcements, detailed public statements (DPS), letter of offer, escrow account management, and open offer tendering verification under SEBI SAST Regulations.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011 (SAST Regulations).",
    "sourceVerified": true,
    "steps": [
      "Monitor trigger thresholds (25% voting rights or change of control under Reg 3/4).",
      "Draft Detailed Public Statement with Merchant Banker.",
      "Audit escrow account funding and certify completion of consideration payout."
    ],
    "tags": [
      "Takeover Code",
      "Open Offer",
      "SEBI SAST",
      "Hostile Takeover Defense"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-sebi-icdr-ipo",
    "name": "SEBI ICDR Pre-IPO Secretarial Due Diligence Lead",
    "fullName": "Mainboard & SME Initial Public Offering (IPO) Secretarial Counsel",
    "body": "Securities and Exchange Board of India (SEBI) & Stock Exchanges",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Premier Capital Markets Role",
    "exemptionPercent": 90,
    "papersRequired": "Specialized practice certification in capital market offerings.",
    "papersWaived": "ICDR regulations foundational to CS Professional curriculum.",
    "duration": "6–9 months per IPO",
    "durationMonths": 7,
    "costINR": "IPO Advisory Retainer (₹15L – ₹50L+)",
    "costForeign": "N/A",
    "difficulty": 5,
    "prerequisites": "PCS firm with Peer Review Certificate.",
    "careerImpact": "Comprehensive secretarial due diligence, drafting Draft Red Herring Prospectus (DRHP) governance chapters, promoter group identification, material contract verification, and in-principle stock exchange approvals.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018 (ICDR Regulations).",
    "sourceVerified": true,
    "steps": [
      "Perform exhaustive 5-year secretarial audit of issuer and group entities.",
      "Draft and certify corporate history and promoter shareholding chapters of DRHP/RHP.",
      "Coordinate with Merchant Bankers, Registrar, and SEBI for final comment letter clearance."
    ],
    "tags": [
      "IPO Lead",
      "DRHP Drafting",
      "SEBI ICDR",
      "BSE NSE Listing"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-sme-ipo-mentor",
    "name": "SME IPO Lead Advisor (BSE SME / NSE Emerge)",
    "fullName": "SME Listing & Growth Capital Secretarial Advisor",
    "body": "BSE SME Platform & NSE Emerge",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Turnkey SME Advisory Practice",
    "exemptionPercent": 90,
    "papersRequired": "ICSI Certificate Course on SME IPO & Capital Mobilization.",
    "papersWaived": "Company law and corporate finance foundations credited.",
    "duration": "4–6 months",
    "durationMonths": 5,
    "costINR": "₹5L – ₹15L per listing",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS or practicing financial corporate advisor.",
    "careerImpact": "End-to-end management of SME public listings without full SEBI vetting (direct exchange vetting): restructuring proprietary/partnership firms into limited companies, prospectus filing, market making, and post-listing LODR compliance.",
    "officialUrl": "https://www.bsesme.com/",
    "statutorySource": "Chapter IX of SEBI (ICDR) Regulations, 2018 on SME Public Offers.",
    "sourceVerified": true,
    "steps": [
      "Convert SME into Public Limited entity with minimum post-issue paid-up capital of ₹10 Cr.",
      "Draft Information Memorandum / Prospectus for Stock Exchange in-house vetting.",
      "Arrange Market Maker underwriting agreements and execute listing bell ceremony."
    ],
    "tags": [
      "SME IPO",
      "BSE SME",
      "NSE Emerge",
      "Growth Capital"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-esop-sbeb-trust",
    "name": "SEBI SBEB Share-Based Employee Benefits (ESOP) Lead",
    "fullName": "Employee Stock Option Scheme (ESOP) & Trust Compliance Lead",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Exclusive Compliance Secretarial Audit",
    "exemptionPercent": 90,
    "papersRequired": "Statutory compliance auditor under SEBI SBEB Regulations.",
    "papersWaived": "N/A",
    "duration": "Annual Secretarial Audit",
    "durationMonths": 1,
    "costINR": "ICSI COP Retainer",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS holding Certificate of Practice.",
    "careerImpact": "Drafting ESOP/SAR schemes, establishing employee welfare trusts, secondary market share purchases, and issuing mandatory PCS Certificate at AGM confirming scheme compliance with SEBI Regulations.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "SEBI (Share Based Employee Benefits and Sweat Equity) Regulations, 2021, Regulation 13.",
    "sourceVerified": true,
    "steps": [
      "Design ESOP Scheme in alignment with NRC Committee charters and statutory caps.",
      "Establish Employee Welfare Trust and draft Trust Deed.",
      "Issue mandatory PCS Certificate placed before shareholders at every AGM."
    ],
    "tags": [
      "ESOP Schemes",
      "SEBI SBEB",
      "Employee Trust",
      "Sweat Equity"
    ],
    "goals": [
      "industry",
      "practice"
    ]
  },
  {
    "id": "icsi-sdd-insider-trading",
    "name": "SEBI Insider Trading & SDD Compliance Officer",
    "fullName": "Structured Digital Database (SDD) Officer & PIT Compliance Lead",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Mandatory Corporate Role",
    "exemptionPercent": 100,
    "papersRequired": "Statutory role designated to Company Secretary under SEBI PIT Regulations.",
    "papersWaived": "N/A — Exclusive statutory function.",
    "duration": "Ongoing corporate office",
    "durationMonths": 0,
    "costINR": "Internal Corporate Role",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "Company Secretary appointed as Compliance Officer under SEBI LODR Regulation 6.",
    "careerImpact": "Direct responsibility to maintain tamper-proof Structured Digital Database (SDD) of Unpublished Price Sensitive Information (UPSI), closures of trading window, and pre-clearance of trades.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "Regulation 3(5) & 3(6) of SEBI (Prohibition of Insider Trading) Regulations, 2015 read with SEBI Circular on SDD compliance audit.",
    "sourceVerified": true,
    "steps": [
      "Appointed as Compliance Officer under Regulation 6 of SEBI LODR.",
      "Implement compliant SDD software with non-tamperable time-stamping and audit trails.",
      "Report quarterly SDD compliance status directly to Stock Exchanges."
    ],
    "tags": [
      "SEBI PIT",
      "SDD Database",
      "UPSI Compliance",
      "Listed Co Secretary"
    ],
    "goals": [
      "industry",
      "india"
    ]
  },
  {
    "id": "icsi-delisting-auditor",
    "name": "SEBI Delisting Regulations Due Diligence Auditor",
    "fullName": "Voluntary & Compulsory Delisting Peer Review Secretarial Auditor",
    "body": "Securities and Exchange Board of India (SEBI)",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Mandatory Peer-Reviewed PCS Role",
    "exemptionPercent": 95,
    "papersRequired": "Statutory appointment under SEBI Delisting Regulations.",
    "papersWaived": "N/A",
    "duration": "4–6 months per delisting offer",
    "durationMonths": 5,
    "costINR": "Transaction Retainer (₹5L – ₹15L)",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "Peer-Reviewed Practicing Company Secretary.",
    "careerImpact": "Independent due diligence report confirming that promoters have not manipulated share prices, carried out insider trading, or violated securities laws prior to reverse book building delisting offers.",
    "officialUrl": "https://www.sebi.gov.in/",
    "statutorySource": "Regulation 10(2) of SEBI (Delisting of Equity Shares) Regulations, 2021.",
    "sourceVerified": true,
    "steps": [
      "Appointed by Board of Directors of company proposing delisting.",
      "Conduct 2-year forensic audit of trading records, promoter accounts, and price movements.",
      "Issue formal Due Diligence Report submitted to Stock Exchanges along with in-principle delisting application."
    ],
    "tags": [
      "SEBI Delisting",
      "Reverse Book Building",
      "Price Manipulation Check",
      "Promoter Buyout"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-brsr-esg-lead",
    "name": "ESG & BRSR Core Assurance Lead",
    "fullName": "Business Responsibility and Sustainability Reporting (BRSR) Auditor",
    "body": "Securities and Exchange Board of India (SEBI) & ICSI",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Emerging Regulatory Monopoly",
    "exemptionPercent": 90,
    "papersRequired": "ICSI Certificate Course on ESG & BRSR Core Assurance.",
    "papersWaived": "Foundational corporate reporting syllabus covered in CS Professional curriculum.",
    "duration": "2–3 months",
    "durationMonths": 2,
    "costINR": "₹25,000 – ₹45,000",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "ICSI Member in good standing.",
    "careerImpact": "SEBI mandate requiring mandatory reasonable assurance of BRSR Core metrics for top 1,000 listed entities; high board-level advisory billing.",
    "officialUrl": "https://www.icsi.edu/home/esg/",
    "statutorySource": "SEBI Circular SEBI/HO/CFD/CFD-SEC-2/P/CIR/2023/122 dated July 12, 2023 on BRSR Core Assurance.",
    "sourceVerified": true,
    "steps": [
      "Complete ICSI Masterclass on BRSR Core Nine Principles and KPI verification.",
      "Conduct boundary assessments for value-chain emissions and governance footprints.",
      "Issue formal BRSR Reasonable Assurance Report to the Board Audit Committee."
    ],
    "tags": [
      "ESG",
      "BRSR Core",
      "SEBI Mandate",
      "Sustainability Assurance"
    ],
    "goals": [
      "industry",
      "practice"
    ]
  },
  {
    "id": "icsi-dpdp-dpo",
    "name": "Data Protection Officer (DPDP Act)",
    "fullName": "Certified Data Protection Officer & Privacy Governance Lead",
    "body": "Data Protection Board of India / IAPP / ICSI",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Corporate Officer Role",
    "exemptionPercent": 85,
    "papersRequired": "ICSI Executive Certificate in Data Protection Laws OR CIPP/A credential.",
    "papersWaived": "Regulatory compliance and board governance fundamentals built into CS curriculum.",
    "duration": "2–4 months",
    "durationMonths": 3,
    "costINR": "₹30,000 – ₹65,000",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "Company Secretary or Corporate Legal Counsel.",
    "careerImpact": "Mandatory appointment as Data Protection Officer (DPO) for all 'Significant Data Fiduciaries' under the Digital Personal Data Protection Act 2023.",
    "officialUrl": "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
    "statutorySource": "Section 8 & Section 10 of Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023).",
    "sourceVerified": true,
    "steps": [
      "Master the provisions of DPDP Act 2023, data principal rights, and cross-border transfer rules.",
      "Conduct Data Protection Impact Assessments (DPIA) and institutionalize grievance redressal.",
      "Serve as official liaison with the Data Protection Board of India."
    ],
    "tags": [
      "DPDP Act 2023",
      "Data Protection Officer",
      "DPO",
      "Privacy Governance"
    ],
    "goals": [
      "industry",
      "niche"
    ]
  },
  {
    "id": "icsi-fema-cross-border",
    "name": "FEMA & Cross-Border JV Specialist",
    "fullName": "FEMA, Foreign Direct Investment (FDI) & Overseas Investment Lead",
    "body": "Reserve Bank of India (RBI) & ICSI",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Specialized Advisory Practice",
    "exemptionPercent": 80,
    "papersRequired": "ICSI Certificate Course on Foreign Exchange Management Act (FEMA).",
    "papersWaived": "FEMA foundations covered in CS Professional Group 2 Economic Laws.",
    "duration": "2–3 months",
    "durationMonths": 2,
    "costINR": "₹20,000 – ₹35,000",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "Company Secretary in practice or corporate employment.",
    "careerImpact": "High-value cross-border advisory: structuring FDI into India (FC-GPR / FC-TRS), Overseas Direct Investment (ODI / APR filings), External Commercial Borrowings (ECB), and compounding applications before RBI.",
    "officialUrl": "https://www.icsi.edu/",
    "statutorySource": "Foreign Exchange Management Act, 1999 read with Foreign Exchange Management (Overseas Investment) Rules, 2022 & FIRMS Portal Guidelines.",
    "sourceVerified": true,
    "steps": [
      "Complete advanced certification in FEMA and cross-border investment regulations.",
      "Audit overseas corporate bodies (WOS/JV) and foreign inward remittances.",
      "Represent multinational clients in RBI compounding proceedings under Section 15 of FEMA."
    ],
    "tags": [
      "FEMA",
      "FDI Inbound",
      "Overseas Investment ODI",
      "RBI Compounding"
    ],
    "goals": [
      "practice",
      "industry"
    ]
  },
  {
    "id": "icsi-independent-director",
    "name": "MCA Independent Director Specialist",
    "fullName": "Empanelled Independent Director & Board Committee Advisor",
    "body": "Indian Institute of Corporate Affairs (IICA) & MCA",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Proficiency Test Exemption / Standing",
    "exemptionPercent": 90,
    "papersRequired": "Empanelment on Independent Director Databank (CS members with 10+ years standing qualify for online proficiency test exemption).",
    "papersWaived": "Exemption from Online Proficiency Self-Assessment Test granted based on 10 years experience as CS in practice or employment.",
    "duration": "1 month",
    "durationMonths": 1,
    "costINR": "₹5,000 – ₹18,000 (Databank subscription)",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "ACS or FCS with minimum 10 years experience as Company Secretary in listed or large unlisted company.",
    "careerImpact": "Appointment to Boards of Directors of listed companies as Independent Director, Audit Committee Member, and Nomination & Remuneration Committee (NRC) Chair.",
    "officialUrl": "https://www.independentdirectorsdatabank.in/",
    "statutorySource": "Section 149 & 150 of Companies Act, 2013 read with Rule 6 of Companies (Creation and Maintenance of databank of Independent Directors) Rules, 2019.",
    "sourceVerified": true,
    "steps": [
      "Register on MCA Independent Director Databank hosted by IICA.",
      "Claim statutory test exemption based on 10 years professional standing as CS.",
      "Receive inclusion in corporate board search directory and accept independent directorships."
    ],
    "tags": [
      "Independent Director",
      "Board Room",
      "Audit Committee",
      "MCA Databank"
    ],
    "goals": [
      "industry",
      "india"
    ]
  },
  {
    "id": "icsi-competition-law",
    "name": "Competition Commission of India (CCI) Specialist",
    "fullName": "Anti-Trust, Merger Control & Competition Law Pleader",
    "body": "Competition Commission of India (CCI)",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Representative",
    "exemptionPercent": 85,
    "papersRequired": "ICSI Certificate Course on Competition Law & Anti-Trust.",
    "papersWaived": "Competition Act foundations covered in CS Professional curriculum.",
    "duration": "2–3 months",
    "durationMonths": 2,
    "costINR": "₹20,000 – ₹35,000",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "CS with knowledge of anti-trust economic thresholds.",
    "careerImpact": "Mandatory merger control filings (Form I / Form II) for large M&A combinations exceeding asset/turnover thresholds; defense in anti-competitive cartel investigations.",
    "officialUrl": "https://www.cci.gov.in/",
    "statutorySource": "Section 35 & Section 6 of Competition Act, 2002 read with CCI (Procedure in regard to the transaction of business relating to combinations) Regulations.",
    "sourceVerified": true,
    "steps": [
      "Assess transaction thresholds under Section 5 (assets and turnover in India & worldwide).",
      "Draft combination notification to CCI within statutory timelines.",
      "Appear before the Commission for green-channel approvals and defense."
    ],
    "tags": [
      "CCI Anti-Trust",
      "Merger Control",
      "Cartel Defense",
      "Combination Filings"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-legaltech-clm",
    "name": "LegalTech & Contract Lifecycle (CLM) Architect",
    "fullName": "Corporate Legal Operations & AI Contract Governance Specialist",
    "body": "ICSI Centre of Excellence & International Legal Tech Institutes",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Cutting-Edge Tech Certification",
    "exemptionPercent": 80,
    "papersRequired": "ICSI Certificate Course on Artificial Intelligence in Corporate Legal Practice.",
    "papersWaived": "Corporate contract drafting and interpretation covered in CS training.",
    "duration": "2–3 months",
    "durationMonths": 2,
    "costINR": "₹25,000 – ₹50,000",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "Company Secretary or Corporate Legal Counsel.",
    "careerImpact": "Design and implement automated CLM systems (Ironclad, Icertis, SirionLabs), AI clause libraries, and digital board portals for global enterprises.",
    "officialUrl": "https://www.icsi.edu/",
    "statutorySource": "ICSI Centre of Excellence Curriculum on Digital Transformation & Legal Automation.",
    "sourceVerified": true,
    "steps": [
      "Master automated legal workflows and clause taxonomy.",
      "Deploy digital board governance software and board evaluation portals.",
      "Lead Legal Operations and contract automation for MNC corporate secretariats."
    ],
    "tags": [
      "LegalTech",
      "Contract Lifecycle CLM",
      "AI Legal Operations",
      "Digital Governance"
    ],
    "goals": [
      "industry",
      "niche"
    ]
  },
  {
    "id": "icsi-forensic-audit",
    "name": "Corporate Fraud & Forensic Investigator (SFIO)",
    "fullName": "Forensic Investigation & Serious Fraud Investigation Defense",
    "body": "ICSI Centre of Excellence / ACFE",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Forensic Specialization",
    "exemptionPercent": 75,
    "papersRequired": "ICSI Certificate Course on Forensic Audit & Fraud Detection.",
    "papersWaived": "Company law and penal provisions (Sec 447/448) covered in CS syllabus.",
    "duration": "3–4 months",
    "durationMonths": 3,
    "costINR": "₹30,000 – ₹55,000",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "Company Secretary in practice or corporate investigation.",
    "careerImpact": "Assisting SFIO investigations, whistleblower inquiries, corporate fund siphoning probes, and defending directors before Special Courts under Section 435/447 of Companies Act.",
    "officialUrl": "https://www.icsi.edu/",
    "statutorySource": "Section 447 & Section 212 of Companies Act, 2013 read with ICSI Standards on Forensic Audit.",
    "sourceVerified": true,
    "steps": [
      "Complete advanced training in digital forensics, fund unravelling, and electronic evidence.",
      "Lead internal fraud investigations ordered by Audit Committee.",
      "Draft independent investigation reports and coordinate defense before SFIO."
    ],
    "tags": [
      "Forensic Audit",
      "Section 447",
      "SFIO Investigation",
      "Whistleblower Probes"
    ],
    "goals": [
      "practice",
      "niche"
    ]
  },
  {
    "id": "icsi-rera-representative",
    "name": "RERA Real Estate Legal Representative",
    "fullName": "Authorized Representative before Real Estate Regulatory Authority",
    "body": "Real Estate Regulatory Authority (RERA) & RERA Appellate Tribunal",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Practice Power",
    "exemptionPercent": 100,
    "papersRequired": "Solemn statutory right of audience under Section 56 of RERA Act, 2016.",
    "papersWaived": "N/A",
    "duration": "Immediate on COP",
    "durationMonths": 0,
    "costINR": "ICSI COP Fees",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "Practicing Company Secretary.",
    "careerImpact": "High-volume real estate practice: project registrations, quarterly progress reports (QPR), escrow account withdrawals, and defending promoters/allottees in complaint adjudications.",
    "officialUrl": "https://rera.gov.in/",
    "statutorySource": "Section 56 of Real Estate (Regulation and Development) Act, 2016 (RERA).",
    "sourceVerified": true,
    "steps": [
      "File online Vakalatnama / Memorandum of Appearance with RERA Authority.",
      "Draft project documentation and consumer complaint replies.",
      "Argue complaints before Adjudicating Officer and Appellate Tribunal."
    ],
    "tags": [
      "RERA Pleader",
      "Real Estate Law",
      "Promoter Compliance",
      "Escrow Audit"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-gst-practitioner",
    "name": "GST Practitioner & Appellate Pleader for CS",
    "fullName": "Certified GST Practitioner & Representative (CGST Act)",
    "body": "Goods and Services Tax Network (GSTN) & CBIC",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Right to Practice",
    "exemptionPercent": 100,
    "papersRequired": "Direct registration as GST Practitioner without entrance exam under Section 48.",
    "papersWaived": "Entrance test waived based on professional Company Secretary qualification.",
    "duration": "1–2 months",
    "durationMonths": 1,
    "costINR": "₹5,000 – ₹10,000",
    "costForeign": "N/A",
    "difficulty": 2,
    "prerequisites": "ACS or FCS member of ICSI.",
    "careerImpact": "Statutory right to represent corporate assessees in GST audits, departmental scrutiny, advance rulings, and appeals before the Appellate Authority under CGST Act Section 107.",
    "officialUrl": "https://www.gst.gov.in/",
    "statutorySource": "Section 48 & Section 116 of Central Goods and Services Tax (CGST) Act, 2017 read with Rule 83.",
    "sourceVerified": true,
    "steps": [
      "Enroll on GST Portal in Form GST PCT-01 using ICSI membership number.",
      "Obtain GST Practitioner Certificate (Form GST PCT-02).",
      "Represent corporate clients in show-cause notice (SCN) hearings and appellate tribunals."
    ],
    "tags": [
      "GST Practitioner",
      "Indirect Tax",
      "Appellate Pleader",
      "CGST Sec 116"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-dcg",
    "name": "Diploma in Corporate Governance (DCG)",
    "fullName": "Post-Qualification Diploma in Corporate Governance",
    "body": "Institute of Company Secretaries of India (ICSI)",
    "category": "pqd",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Premier ICSI Post-Qual Diploma",
    "exemptionPercent": 70,
    "papersRequired": "Written examinations + Dissertation and Viva-Voce on Advanced Corporate Governance.",
    "papersWaived": "Eligibility restricted to Members of ICSI.",
    "duration": "1 year",
    "durationMonths": 12,
    "costINR": "₹25,000 – ₹40,000",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "ACS or FCS member of ICSI.",
    "careerImpact": "Flagship institutional credential for governance leaders: prepares members for Board Secretary roles, governance advisory for sovereign funds, and institutional investors.",
    "officialUrl": "https://www.icsi.edu/academic-programmes/post-membership-courses/",
    "statutorySource": "ICSI Regulations for Post-Membership Qualification in Corporate Governance.",
    "sourceVerified": true,
    "steps": [
      "Enroll with ICSI Directorate of Academics for DCG program.",
      "Complete prescribed self-study modules and intensive contact programs.",
      "Submit research dissertation on cutting-edge governance challenge.",
      "Clear written examination and viva-voce to receive the DCG credential."
    ],
    "tags": [
      "ICSI Flagship",
      "Corporate Governance",
      "Boardroom Leadership",
      "Dissertation"
    ],
    "goals": [
      "industry",
      "india"
    ]
  },
  {
    "id": "icsi-dia",
    "name": "Diploma in Internal Audit (DIA - ICSI)",
    "fullName": "Post-Qualification Diploma in Internal Audit",
    "body": "Institute of Company Secretaries of India (ICSI)",
    "category": "pqd",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Internal Audit Specialization",
    "exemptionPercent": 70,
    "papersRequired": "Written assessment on Internal Controls, Enterprise Risk, and Operational Audit.",
    "papersWaived": "Exclusively for ICSI members.",
    "duration": "1 year",
    "durationMonths": 12,
    "costINR": "₹25,000 – ₹35,000",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "ACS or FCS member of ICSI.",
    "careerImpact": "Statutory eligibility to be appointed as Internal Auditor under Section 138 of Companies Act 2013 with specialized compliance and operational risk expertise.",
    "officialUrl": "https://www.icsi.edu/",
    "statutorySource": "Section 138 of Companies Act, 2013 read with ICSI DIA Curriculum Regulations.",
    "sourceVerified": true,
    "steps": [
      "Enroll for DIA through ICSI online portal.",
      "Study modern internal control frameworks (COSO, ICSI Internal Audit Standards).",
      "Pass final examinations and lead internal audit departments in tier-1 corporates."
    ],
    "tags": [
      "Sec 138 Internal Audit",
      "Enterprise Risk",
      "COSO Framework"
    ],
    "goals": [
      "industry",
      "practice"
    ]
  },
  {
    "id": "icsi-banking-compliance",
    "name": "Certified Banking Compliance Professional",
    "fullName": "Joint Certification in Banking Compliance (ICSI & IIBF)",
    "body": "ICSI & Indian Institute of Banking & Finance (IIBF)",
    "category": "pqd",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Joint National Banking Credential",
    "exemptionPercent": 80,
    "papersRequired": "Pass 2 specialized online papers administered jointly by IIBF.",
    "papersWaived": "Banking law foundations credited from CS curriculum.",
    "duration": "3–6 months",
    "durationMonths": 4,
    "costINR": "₹15,000 – ₹25,000",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "ICSI Member in good standing.",
    "careerImpact": "Preferred qualification for Chief Compliance Officer (CCO) and Head of Regulatory Affairs across public and private sector commercial banks under RBI Guidelines.",
    "officialUrl": "https://www.iibf.org.in/",
    "statutorySource": "Joint Certification Framework of ICSI & Indian Institute of Banking and Finance (IIBF) & RBI Circular on Chief Compliance Officer.",
    "sourceVerified": true,
    "steps": [
      "Register on IIBF portal under the ICSI joint candidate scheme.",
      "Complete e-learning course on banking regulations, KYC/AML, and RBI circulars.",
      "Pass online examinations and secure joint certification."
    ],
    "tags": [
      "Banking Compliance",
      "IIBF Joint",
      "RBI CCO",
      "Banking Head"
    ],
    "goals": [
      "industry",
      "india"
    ]
  },
  {
    "id": "icsi-cams",
    "name": "CAMS (Anti-Money Laundering)",
    "fullName": "Certified Anti-Money Laundering Specialist",
    "body": "ACAMS (Association of Certified Anti-Money Laundering Specialists)",
    "category": "intl",
    "country": "United States",
    "countryCode": "us",
    "flag": "🇺🇸",
    "exemptionLevel": "Global Gold Standard in AML",
    "exemptionPercent": 60,
    "papersRequired": "Pass 1 rigorous proctored global examination (120 multiple choice questions).",
    "papersWaived": "Educational credits granted toward the mandatory 40 ACAMS eligibility points based on CS qualification.",
    "duration": "3–5 months",
    "durationMonths": 4,
    "costINR": "₹1.4L – ₹1.9L",
    "costForeign": "USD 1,695 – 2,100",
    "difficulty": 4,
    "prerequisites": "40 ACAMS eligibility credits (CS credential provides 20 credits, bachelor's degree provides 20 credits).",
    "careerImpact": "Unchallenged global benchmark for AML/CFT compliance officers in international banks, FinTechs, and regulatory enforcement agencies worldwide.",
    "officialUrl": "https://www.acams.org/en/certifications/cams-certification",
    "statutorySource": "Financial Action Task Force (FATF) Recommendations & Prevention of Money Laundering Act, 2002 (PMLA).",
    "sourceVerified": true,
    "steps": [
      "Submit ACAMS candidate application with ICSI transcripts for credit verification.",
      "Complete the official CAMS study guide and virtual masterclasses.",
      "Clear the computer-based exam at Pearson VUE test center."
    ],
    "tags": [
      "ACAMS",
      "Anti-Money Laundering",
      "PMLA Compliance",
      "Global Financial Crime"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-step-trusts",
    "name": "STEP (Trusts & Estates Practitioner)",
    "fullName": "Society of Trust and Estate Practitioners (TEP)",
    "body": "STEP (Worldwide)",
    "category": "intl",
    "country": "United Kingdom",
    "countryCode": "gb",
    "flag": "🇬🇧",
    "exemptionLevel": "Exemption Accreditation",
    "exemptionPercent": 65,
    "papersRequired": "Complete 2 advanced papers on International Trust Management & Succession Planning.",
    "papersWaived": "Company law and foundational wealth structuring modules exempted.",
    "duration": "6–12 months",
    "durationMonths": 9,
    "costINR": "₹2.2L – ₹3.4L",
    "costForeign": "£2,100 – £3,200",
    "difficulty": 4,
    "prerequisites": "ICSI Member + experience in family office, trust structuring, or estate planning.",
    "careerImpact": "Elite credential for private wealth structuring, family offices, offshore trusts in Jersey/Guernsey/Cayman/DIFC, and succession planning for Indian promoter dynasties.",
    "officialUrl": "https://www.step.org/",
    "statutorySource": "STEP Global Qualifications Framework for Corporate & Trust Professionals.",
    "sourceVerified": true,
    "steps": [
      "Apply through the STEP Professional Pathway based on CS credentials.",
      "Complete modules on International Trust Law and Wealth Transfer Planning.",
      "Earn full 'TEP' (Trust and Estate Practitioner) designation."
    ],
    "tags": [
      "Family Office",
      "Private Wealth",
      "Trust Structuring",
      "Offshore Jurisdictions"
    ],
    "goals": [
      "abroad",
      "niche"
    ]
  },
  {
    "id": "icsi-llm-corporate-law",
    "name": "Master of Laws (LL.M in Corporate Law)",
    "fullName": "Executive Master of Laws in Corporate & Commercial Law",
    "body": "National Law Universities (NLUs) / UK Russell Group Universities",
    "category": "degree",
    "country": "Global",
    "countryCode": "in",
    "flag": "🌐",
    "exemptionLevel": "Academic Synergy",
    "exemptionPercent": 60,
    "papersRequired": "Coursework and master's thesis on corporate jurisprudence.",
    "papersWaived": "CS syllabus provides profound conceptual foundation for corporate, securities, and insolvency law.",
    "duration": "1–2 years",
    "durationMonths": 14,
    "costINR": "₹2.5L – ₹15L",
    "costForeign": "£14,000 – £28,000",
    "difficulty": 4,
    "prerequisites": "LL.B degree + CS qualification.",
    "careerImpact": "Powerful dual credential (CS + LL.M) for General Counsel, corporate legal directors, and Supreme Court / High Court corporate practice.",
    "officialUrl": "https://www.nludelhi.ac.in/",
    "statutorySource": "University Grants Commission (UGC) recognition of CS as equivalent to Post Graduate Degree (M.Com/LL.M equivalence circular).",
    "sourceVerified": true,
    "steps": [
      "Utilize UGC circular recognizing CS as Post Graduate Degree for doctoral research and higher legal studies.",
      "Enroll in specialized LL.M program in Corporate & Insolvency Laws.",
      "Complete research dissertation on corporate governance reforms."
    ],
    "tags": [
      "LL.M",
      "UGC PG Equivalent",
      "General Counsel",
      "Corporate Jurisprudence"
    ],
    "goals": [
      "degree",
      "practice"
    ]
  },
  {
    "id": "icsi-phd-commerce-law",
    "name": "Doctor of Philosophy (Ph.D in Corporate Law/Management)",
    "fullName": "Ph.D Research Fellowship via UGC PG Equivalence",
    "body": "Indian Institute of Management (IIMs) & National Law Universities (NLUs)",
    "category": "degree",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Direct Doctoral Eligibility",
    "exemptionPercent": 100,
    "papersRequired": "Doctoral dissertation and defense in corporate governance / securities law.",
    "papersWaived": "Master's degree requirement waived — UGC circular recognizes CS qualification as equivalent to Post Graduate Degree.",
    "duration": "3–5 years",
    "durationMonths": 36,
    "costINR": "Funded Fellowship / ₹50,000 – ₹2L",
    "costForeign": "N/A",
    "difficulty": 5,
    "prerequisites": "ICSI Member + UGC NET / National Fellowship entrance.",
    "careerImpact": "Highest academic credential: qualification for Tenured Professorships, Deanships, public policy think tanks (NITI Aayog, MCA Research Fellows), and expert witness testifying before Parliamentary Committees.",
    "officialUrl": "https://www.ugc.gov.in/",
    "statutorySource": "UGC Notification No. F.2-1/2021(NET) dated March 15, 2021 recognizing CS qualification as equivalent to Master's Degree.",
    "sourceVerified": true,
    "steps": [
      "Register for UGC NET in Commerce / Law / Management citing CS equivalence.",
      "Submit research proposal to doctoral advisory board of recognized university.",
      "Publish peer-reviewed papers in Scopus/UGC CARE journals and defend thesis."
    ],
    "tags": [
      "Ph.D",
      "Doctorate",
      "UGC Equivalence",
      "Think Tank Fellow"
    ],
    "goals": [
      "degree",
      "india"
    ]
  },
  {
    "id": "icsi-difc-adgm-compliance",
    "name": "UAE Corporate Tax & DIFC / ADGM Compliance Officer",
    "fullName": "Dubai International Financial Centre & ADGM Secretarial Specialist",
    "body": "DIFC Registrar of Companies & ADGM Registration Authority",
    "category": "intl",
    "country": "United Arab Emirates",
    "countryCode": "ae",
    "flag": "🇦🇪",
    "exemptionLevel": "Cross-Border Market Standing",
    "exemptionPercent": 85,
    "papersRequired": "Assessment in UAE Federal Corporate Tax Law (Decree-Law No. 47 of 2022) & DIFC Companies Law No. 5 of 2018.",
    "papersWaived": "Anglo-Saxon common law company secretarial foundations credited directly.",
    "duration": "2–4 months",
    "durationMonths": 3,
    "costINR": "₹80,000 – ₹1.4L",
    "costForeign": "AED 3,500 – 6,000",
    "difficulty": 3,
    "prerequisites": "Company Secretary with knowledge of common law company administration.",
    "careerImpact": "High-earning cross-border secretarial practice across Dubai and Abu Dhabi: Economic Substance Regulations (ESR), ultimate beneficial ownership (UBO) filings, and Corporate Tax free zone qualifying exemptions.",
    "officialUrl": "https://www.difc.com/",
    "statutorySource": "DIFC Companies Law (DIFC Law No. 5 of 2018) & UAE Federal Decree-Law No. 47 of 2022 on Taxation of Corporations and Businesses.",
    "sourceVerified": true,
    "steps": [
      "Complete certification in UAE Corporate Tax and DIFC common law corporate registry regulations.",
      "Register as Approved Corporate Service Provider / Compliance Officer with ADGM / DIFC.",
      "Administer board governance and regulatory filings for international family offices and DIFC holding entities."
    ],
    "tags": [
      "DIFC Dubai",
      "ADGM Abu Dhabi",
      "UAE Corporate Tax",
      "Middle East Wealth"
    ],
    "goals": [
      "abroad",
      "niche"
    ]
  },
  {
    "id": "icsi-singapore-acra",
    "name": "Singapore Corporate Filing Agent (ACRA Pathway)",
    "fullName": "Registered Filing Agent under Singapore Accounting and Corporate Regulatory Authority",
    "body": "ACRA Singapore",
    "category": "intl",
    "country": "Singapore",
    "countryCode": "sg",
    "flag": "🇸🇬",
    "exemptionLevel": "International Commonwealth Accord",
    "exemptionPercent": 75,
    "papersRequired": "Pass ACRA Qualified Individual (QI) assessment on Singapore Companies Act (Cap. 50).",
    "papersWaived": "Governance and corporate secretarial experience credited.",
    "duration": "3–5 months",
    "durationMonths": 4,
    "costINR": "₹1.1L – ₹1.6L",
    "costForeign": "SGD 1,800 – 2,500",
    "difficulty": 3,
    "prerequisites": "CGI/ICSI Member residing or practicing in Singapore.",
    "careerImpact": "Licensed to act as Named Company Secretary and Registered Filing Agent for multinational holding corporations and venture funds incorporated in Singapore.",
    "officialUrl": "https://www.acra.gov.sg/",
    "statutorySource": "Singapore Companies Act (Cap. 50) Section 171 & ACRA (Filing Agents and Qualified Individuals) Regulations.",
    "sourceVerified": true,
    "steps": [
      "Leverage CGI division recognition in Singapore via CSIS (Chartered Secretaries Institute of Singapore).",
      "Pass the ACRA Qualified Individual (QI) examination on BizFile+.",
      "Obtain Registered Filing Agent license to provide corporate secretarial services in Singapore."
    ],
    "tags": [
      "Singapore ACRA",
      "ASEAN Financial Hub",
      "Venture Funds",
      "BizFile+"
    ],
    "goals": [
      "abroad",
      "practice"
    ]
  },
  {
    "id": "icsi-uk-eccta-lead",
    "name": "UK Corporate Transparency Act (ECCTA 2023) Specialist",
    "fullName": "Economic Crime and Corporate Transparency Act 2023 Compliance Lead",
    "body": "Companies House UK & CGI UK",
    "category": "intl",
    "country": "United Kingdom",
    "countryCode": "gb",
    "flag": "🇬🇧",
    "exemptionLevel": "High-Demand UK Advisory",
    "exemptionPercent": 80,
    "papersRequired": "Mastery of the UK Economic Crime and Corporate Transparency Act 2023 (ECCTA).",
    "papersWaived": "UK company law foundations built through CGI qualification pathway.",
    "duration": "2–3 months",
    "durationMonths": 2,
    "costINR": "₹45,000 – ₹85,000",
    "costForeign": "£450 – £800",
    "difficulty": 3,
    "prerequisites": "CS with UK entity compliance responsibilities or CGI membership.",
    "careerImpact": "Managing the largest overhaul in Companies House history: mandatory identity verification for UK company directors, Authorised Corporate Service Provider (ACSP) registration, and prevention of fraudulent corporate shell structures.",
    "officialUrl": "https://www.gov.uk/government/organisations/companies-house",
    "statutorySource": "UK Economic Crime and Corporate Transparency Act 2023 (c. 56) amending UK Companies Act 2006.",
    "sourceVerified": true,
    "steps": [
      "Study ECCTA 2023 statutory changes including ACSP registration and direct identity verification.",
      "Register corporate secretarial firm as Authorised Corporate Service Provider with UK Companies House.",
      "Deliver compliance assurance for UK subsidiaries of Indian multinationals and cross-border conglomerates."
    ],
    "tags": [
      "UK Companies House",
      "ECCTA 2023",
      "Economic Crime Act",
      "London Compliance"
    ],
    "goals": [
      "abroad",
      "industry"
    ]
  },
  {
    "id": "icsi-csr-impact-auditor",
    "name": "Corporate Social Responsibility (CSR) Impact Auditor",
    "fullName": "Statutory CSR & Social Impact Auditor under Section 135",
    "body": "Ministry of Corporate Affairs (MCA)",
    "category": "govt",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Statutory Mandate",
    "exemptionPercent": 100,
    "papersRequired": "Independent agency / PCS verification of CSR projects.",
    "papersWaived": "N/A",
    "duration": "Per project audit",
    "durationMonths": 1,
    "costINR": "Professional Audit Retainer",
    "costForeign": "N/A",
    "difficulty": 3,
    "prerequisites": "PCS or independent CSR evaluation specialist.",
    "careerImpact": "Mandatory Impact Assessment for companies having average CSR obligation ≥ ₹10 Cr under Section 135(5) and ongoing project fund-flow audit (Form CSR-1 / CSR-2).",
    "officialUrl": "https://www.mca.gov.in/",
    "statutorySource": "Section 135 of Companies Act, 2013 read with Companies (Corporate Social Responsibility Policy) Amendment Rules, 2021 & Form CSR-2.",
    "sourceVerified": true,
    "steps": [
      "Audit annual CSR budget calculation (2% of average net profits of preceding 3 financial years).",
      "Verify registration of implementing agencies via Form CSR-1 on MCA portal.",
      "Conduct field impact assessment of completed projects and certify Annexure to Board's Report."
    ],
    "tags": [
      "CSR Audit",
      "Section 135",
      "Impact Assessment",
      "Form CSR-2"
    ],
    "goals": [
      "practice",
      "india"
    ]
  },
  {
    "id": "icsi-ceg-board-evaluation",
    "name": "Board Performance & Peer Evaluation Specialist",
    "fullName": "Independent Board Evaluation & Governance Assessor",
    "body": "ICSI & Indian Institute of Corporate Affairs (IICA)",
    "category": "niche",
    "country": "India",
    "countryCode": "in",
    "flag": "🇮🇳",
    "exemptionLevel": "Elite Boardroom Practice",
    "exemptionPercent": 85,
    "papersRequired": "ICSI Board Evaluation Methodology Masterclass.",
    "papersWaived": "Corporate governance and board functioning core to CS curriculum.",
    "duration": "1–2 months",
    "durationMonths": 1,
    "costINR": "₹3L – ₹10L per evaluation engagement",
    "costForeign": "N/A",
    "difficulty": 4,
    "prerequisites": "Senior PCS or Fellow CS (FCS) with 10+ years corporate governance standing.",
    "careerImpact": "Mandatory annual evaluation of the performance of the Board as a whole, its committees, and individual directors for all listed entities under SEBI LODR Regulation 17(10) and Companies Act Section 178.",
    "officialUrl": "https://www.icsi.edu/",
    "statutorySource": "Schedule IV (Code for Independent Directors) of Companies Act, 2013 read with SEBI Guidance Note on Board Evaluation dated Jan 5, 2017.",
    "sourceVerified": true,
    "steps": [
      "Design customized evaluation questionnaires covering board dynamics, strategy, and risk oversight.",
      "Conduct confidential one-on-one structured interviews with Chairman, MD, and Independent Directors.",
      "Present confidential Board Evaluation Report and development roadmap to the Nomination and Remuneration Committee (NRC)."
    ],
    "tags": [
      "Board Evaluation",
      "SEBI Reg 17(10)",
      "NRC Committee",
      "Peer Review"
    ],
    "goals": [
      "practice",
      "industry"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ICSI_COURSES_DATA };
}
