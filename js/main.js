/**
 * Rishikesh CHS — main.js
 * Community Society Website
 * Navbar · Menu · Scroll · FAQ · Modals · BTT · GSAP
 */

'use strict';

/* ────────────────────────────────────────────────
   MODULE CONTENT — Written for residents, not sales
   ──────────────────────────────────────────────── */
const MODULE_DATA = {
  billing: {
    icon: '<iconify-icon icon="mdi:receipt-text-send" width="26"></iconify-icon>',
    tag: 'Resident Service',
    title: 'Pay Maintenance Online',
    desc: 'Pay your monthly or quarterly maintenance dues from your phone or laptop — no office visit needed. UPI, net banking, debit and credit cards are all accepted. Your receipt is generated and stored automatically.',
    steps: [
      'Log in to the member portal using your Flat Number and the OTP sent to your registered mobile number.',
      'Click "Pay Maintenance" and select the billing period (e.g., April 2025).',
      'Review the maintenance breakdown — principal amount, any arrears, and applicable charges.',
      'Choose your payment method: UPI, net banking, or card. Complete the payment securely.',
      'Your receipt is instantly generated, stored in your account, and emailed to you.'
    ],
    benefits: [
      'Available 24×7 — pay anytime, even outside office hours',
      'UPI, NEFT, debit card and credit card all supported',
      'PDF receipt auto-generated and stored in your account',
      'View your complete payment history for any past period',
      'Late fee notifications sent before the due date',
      'No need to visit the secretary or give a cheque'
    ]
  },
  notices: {
    icon: '<iconify-icon icon="mdi:bullhorn-variant" width="26"></iconify-icon>',
    tag: 'Member Communication',
    title: 'Society Notices & Circulars',
    desc: 'All official society notices — AGM announcements, maintenance circulars, water supply interruptions, security updates, and more — are published here. No more missing important information because it was posted on a notice board you didn\'t see.',
    steps: [
      'Log in to the member portal.',
      'Go to "Notices & Circulars" from your dashboard.',
      'Browse notices by type: General, AGM, Urgent, Maintenance, or Security.',
      'Click any notice to read the full text and download attached documents if any.',
      'You also receive email and SMS notifications when a new notice is published.'
    ],
    benefits: [
      'All notices accessible 24×7 from your phone or laptop',
      'Filter by category: AGM, Maintenance, Security, Events',
      'Email and SMS alerts when new notices are published',
      'Complete archive — access notices from previous years',
      'Attached documents (PDFs) are downloadable directly',
      'No more relying on the notice board or WhatsApp forwards'
    ]
  },
  complaints: {
    icon: '<iconify-icon icon="mdi:ticket-account" width="26"></iconify-icon>',
    tag: 'Resident Support',
    title: 'Lodge & Track a Complaint',
    desc: 'Experienced a plumbing issue, lift breakdown, security concern, or housekeeping complaint? File it through the portal and track exactly where it stands — no more wondering if anyone received your complaint or following up repeatedly.',
    steps: [
      'Log in and click "Raise a Complaint" from your dashboard.',
      'Select the complaint category: Plumbing, Electrical, Lift, Security, Housekeeping, or Other.',
      'Describe the issue in detail. You can attach a photo if helpful.',
      'Submit — you receive a complaint ticket number immediately.',
      'You can check the status ("Under Review", "Assigned", "In Progress", "Resolved") anytime from your portal.'
    ],
    benefits: [
      'Complaint categories: Plumbing, Electrical, Lift, Security, Housekeeping',
      'Photo attachment supported for clearer reporting',
      'Ticket number issued immediately on submission',
      'Real-time status updates as the committee responds',
      'Automatic notification when your complaint is resolved',
      'Full complaint history saved in your account for reference'
    ]
  },
  parking: {
    icon: '<iconify-icon icon="mdi:car-multiple" width="26"></iconify-icon>',
    tag: 'Resident Info',
    title: 'Your Parking Slot',
    desc: 'View your allocated parking slot, your registered vehicle number, and any parking-related dues. If you have a query about your slot, visitor parking, or need to apply for an additional slot, you can do it through the member portal.',
    steps: [
      'Log in to the member portal and go to "My Parking".',
      'View your current allocated slot number, location in the building, and registered vehicle details.',
      'If you need visitor parking for a guest, check availability and register your visitor.',
      'To request a change or additional slot, submit a request that goes to the Managing Committee for approval.',
      'Any parking charges will be visible in your maintenance bill.'
    ],
    benefits: [
      'View your allocated slot number and zone (covered / open / basement)',
      'Registered vehicle number on record for security',
      'Visitor parking slot availability visible in real time',
      'Request for additional or changed slot submitted digitally',
      'Parking-related disputes raised through complaint module',
      'No need to contact the secretary for basic parking info'
    ]
  },
  noc: {
    icon: '<iconify-icon icon="mdi:file-certificate" width="26"></iconify-icon>',
    tag: 'Document Request',
    title: 'Request an NOC / Society Letter',
    desc: 'Need a No Objection Certificate from the society for your passport, bank home loan, or electric meter transfer? Apply through the portal and get a formally formatted, secretary-signed NOC letter — without multiple trips to the office.',
    steps: [
      'Log in to your member portal and go to "Document Requests".',
      'Select the type of NOC you need: Passport, Bank Loan, Electric Meter Transfer, or Other.',
      'Enter any additional details required (e.g., bank name for loan NOC, old meter number for transfer).',
      'Submit your request — the secretary receives it immediately.',
      'Once approved (usually within 2 working days), the formatted NOC is available for download in your portal and is also emailed to you.'
    ],
    benefits: [
      'Passport NOC — formatted for regional passport office requirements',
      'Bank Home Loan NOC — includes share certificate and society details',
      'Electric Meter Transfer NOC — utility-formatted',
      'Custom letters for other purposes with editable templates',
      'Typically processed within 2 working days',
      'Digital copy stored in your account for future reference'
    ]
  },
  meetings: {
    icon: '<iconify-icon icon="mdi:clipboard-list-outline" width="26"></iconify-icon>',
    tag: 'Governance',
    title: 'Meeting Minutes & AGM Records',
    desc: 'All Annual General Meeting (AGM), Special General Meeting (SGM), and Managing Committee Meeting minutes are published in the portal after approval. As a member, you can read the minutes and submit written feedback or objections as permitted under the society bye-laws.',
    steps: [
      'Log in and go to "Meeting Minutes" from your dashboard menu.',
      'Select the meeting type: AGM, SGM, or MC Meeting.',
      'Browse minutes by year and date, and read the published record.',
      'If the minutes are within the public objection period, you will see an option to "Submit Feedback/Objection".',
      'Your feedback is logged with your name, flat number, and timestamp.'
    ],
    benefits: [
      'Fully searchable archive of past AGMs and MC meetings',
      'Submit written member objections as required by bye-laws',
      'Email notification when new minutes are published',
      'Read AGM agenda and resolutions passed',
      'Documents attached to meeting minutes downloadable',
      'Digitally timestamped for legal compliance'
    ]
  },
  tenant: {
    icon: '<iconify-icon icon="mdi:account-key" width="26"></iconify-icon>',
    tag: 'Owner Service',
    title: 'Tenant Registration',
    desc: 'If you own a flat in Rishikesh CHS and have given it on rent, you are required by society bye-laws to register your tenant with the society. The member portal makes this simple — upload tenant details, store lease information, and track expiry dates.',
    steps: [
      'Log in as the flat owner and go to "My Flat → Tenant Management".',
      'Click "Register New Tenant" and fill in details: name, ID proof, contact number, emergency contact.',
      'Enter the lease details: start date, end date, monthly rent (optional), and police verification status.',
      'Submit — the Managing Committee is notified and the details are recorded in the society\'s tenant register.',
      'You will receive automatic alerts 30 days before your tenant\'s lease agreement expires.'
    ],
    benefits: [
      'Fulfils society bye-law requirement for tenant registration',
      'Police verification status tracked and flagged if incomplete',
      'Lease start and end dates recorded with expiry alerts',
      'Tenant contact details accessible to you as the owner',
      'Complete tenant history maintained — including past tenants',
      'No need to submit physical forms to the secretary'
    ]
  },
  statutory: {
    icon: '<iconify-icon icon="mdi:text-box-multiple" width="26"></iconify-icon>',
    tag: 'Society Records',
    title: 'Society Documents & Statutory Records',
    desc: 'Key society documents — society bye-laws, registered address, Form-I (nomination details), Form-J (annual return), Member Registrar, and Share Certificate records — are maintained digitally and accessible to members as per their access rights.',
    steps: [
      'Log in and go to "Society Documents" from your dashboard.',
      'Browse available documents: Bye-laws, Registration Certificate, Annual Returns.',
      'For your personal records: view your flat\'s member register entry and share certificate details.',
      'Download PDFs of the society bye-laws or registration documents for your reference.',
      'If you find an error in your personal records, raise a correction request from this section.'
    ],
    benefits: [
      'Society bye-laws downloadable for every member',
      'View your member register entry and flat details',
      'Share Certificate register — your certificate number and history',
      'Form-I (nomination) status visible and updatable',
      'Annual returns and statutory filings accessible to committee',
      'Request corrections to personal member records digitally'
    ]
  },
  accounting: {
    icon: '<iconify-icon icon="mdi:calculator-variant" width="26"></iconify-icon>',
    tag: 'Committee — Treasurer',
    title: 'Billing & Accounting Dashboard',
    desc: 'The accounting module gives the Treasurer complete financial control — generating bills, tracking income and expenses, managing sub-funds, and producing financial statements — without needing a separate accounting package or external accountant.',
    steps: [
      'Log in as the Treasurer from the Admin Panel.',
      'Go to Billing → Generate Bills. Select the billing period and confirm per-flat amounts.',
      'Bills are dispatched automatically to all members via email, SMS and portal notification.',
      'Enter monthly society expenses (housekeeping, AMC, electricity, repairs) under Accounting → Expenses.',
      'View the income/expenditure dashboard anytime. Export reports or share with committee members.'
    ],
    benefits: [
      'Generate maintenance bills for all flats in under 60 seconds',
      'Track income vs. expenses in real time',
      'Defaulter list automatically maintained — filter by amount or period',
      'Sub-ledgers: Sinking Fund, Repair Fund, General Fund',
      'Role-based access: committee views, treasurer edits',
      'Complete financial independence — no external accountant needed'
    ]
  },
  defaulter: {
    icon: '<iconify-icon icon="mdi:alert-octagram" width="26"></iconify-icon>',
    tag: 'Committee — Treasurer / Secretary',
    title: 'Defaulter Management & Section 101 Notices',
    desc: 'The system automatically tracks overdue maintenance and sends reminders. If dues remain unpaid, the Secretary can generate a legally compliant Section 101 Notice under MCS Act 1960 — without any manual drafting.',
    steps: [
      'The system identifies overdue members automatically on the day after the due date.',
      'First reminder is sent via email and SMS immediately. Follow-up reminders go at Day 7, 15, and 30.',
      'View the defaulter list anytime — filter by wing, amount, or duration of default.',
      'If dues remain unpaid, click "Generate Section 101 Notice" for the member.',
      'The pre-formatted, legally compliant notice (all required fields auto-filled) is generated and can be dispatched digitally or downloaded for registered post.'
    ],
    benefits: [
      'Auto-reminders sent without any manual action',
      'Section 101 Notice format compliant with MCS Act 1960',
      'Defaulter dashboard filterable by wing, date range, or amount',
      'Full reminder history stored with timestamps for legal records',
      'Significant improvement in on-time payment compliance',
      'No manual notice drafting — saves the secretary hours'
    ]
  },
  payinslip: {
    icon: '<iconify-icon icon="mdi:bank-outline" width="26"></iconify-icon>',
    tag: 'Committee — Treasurer',
    title: 'Bank Pay-in Slip Generator',
    desc: 'For residents who pay by cheque, the Treasurer no longer needs to handwrite bank deposit slips. Once a cheque receipt is entered in the system, a print-ready pay-in slip is generated with all details pre-filled.',
    steps: [
      'Treasurer receives a maintenance cheque from a resident at the office.',
      'Log in to Admin Panel → Banking → Enter Cheque Receipt.',
      'Enter cheque number, member name, flat, bank name, amount, and date.',
      'Click "Generate Pay-in Slip" — a properly formatted bank deposit slip is created.',
      'Print the slip and take it to the bank for deposit. The receipt entry is saved in the system.'
    ],
    benefits: [
      'Eliminates handwritten bank deposit slips entirely',
      'All member details pre-filled from existing records',
      'Batch multiple cheques received on the same day into one slip',
      'Print-ready format compatible with standard A4/A5 printers',
      'Each pay-in slip archived digitally against the member record',
      'Saves the treasurer 2–3 hours of manual work per collection cycle'
    ]
  },
  audit: {
    icon: '<iconify-icon icon="mdi:chart-pie" width="26"></iconify-icon>',
    tag: 'Committee — All Members',
    title: 'Audit-Ready Financial Reports',
    desc: 'Statutory audit time should not mean two weeks of scrambling. All financial reports required by the Chartered Accountant for the society\'s audit are generated from live data — in seconds, already formatted correctly.',
    steps: [
      'From the Admin Panel, go to Reports → Audit Reports.',
      'Select the audit period (typically April 1 to March 31).',
      'Click "Generate Audit Package" — the system compiles all required reports from live financial data.',
      'Review the Income & Expenditure Statement, Receipt & Payment Account, and fund balances.',
      'Download the complete audit pack as a PDF set or share directly with your Chartered Accountant.'
    ],
    benefits: [
      'Receipt & Payment Account generated automatically',
      'Income & Expenditure Statement with all line items',
      'Sinking Fund, Repair Fund, and General Fund balances',
      'Defaulter list included in the audit package',
      'Format matches requirements of Maharashtra Co-op Society audit',
      'Reduces audit preparation from 2 weeks to under an hour'
    ]
  }
};

// API BASE URL
const API_URL = window.location.origin + '/api';


/* ────────────────────────────────────────────────
   MODAL SYSTEM
   ──────────────────────────────────────────────── */
const modal         = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalIconEl   = document.getElementById('modalIcon');
const modalTagEl    = document.getElementById('modalTag');
const modalTitleEl  = document.getElementById('modal-title');
const modalDescEl   = document.getElementById('modalDesc');
const modalStepsEl  = document.getElementById('modalSteps');
const modalListEl   = document.getElementById('modalList');
const modalCta      = document.getElementById('modalCta');

let lastFocused = null;

function openModal(key) {
  const data = MODULE_DATA[key];
  if (!data) return;
  modalIconEl.innerHTML     = data.icon;
  modalTagEl.textContent    = data.tag;
  modalTitleEl.textContent  = data.title;
  modalDescEl.textContent   = data.desc;
  modalStepsEl.innerHTML    = data.steps.map(s => `<li>${s}</li>`).join('');
  modalListEl.innerHTML     = data.benefits.map(b => `<li>${b}</li>`).join('');
  
  // Show/Hide form based on module
  if (key === 'complaints') {
    modalStepsEl.closest('.modal__how').hidden = true;
    modalListEl.closest('.modal__benefits').hidden = true;
    modalCta.style.display = 'none';
    
    // Inject form
    let formHtml = `
      <div id="complaintFormWrap" style="margin-top:var(--s4)">
        <h3>Lodge Your Complaint</h3>
        <form id="complaintForm" class="admin-login__form" style="margin-top:var(--s2)">
          <div class="admin-field" style="margin-bottom:var(--s3)">
            <label class="admin-field__label">Full Name</label>
            <input type="text" name="resident" class="admin-input" placeholder="e.g. Rahul Sharma" required />
          </div>
          <div class="admin-field" style="margin-bottom:var(--s3)">
            <label class="admin-field__label">Flat Number</label>
            <input type="text" name="flat" class="admin-input" placeholder="e.g. A-101" required />
          </div>
          <div class="admin-field" style="margin-bottom:var(--s3)">
            <label class="admin-field__label">Category</label>
            <select name="category" class="security-select admin-select" required>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Lift">Lift</option>
              <option value="Security">Security</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="admin-field" style="margin-bottom:var(--s4)">
            <label class="admin-field__label">Description</label>
            <textarea name="description" class="admin-input" style="min-height:80px;padding:var(--s2)" placeholder="Describe the issue..."></textarea>
          </div>
          <button type="submit" class="btn btn--primary" style="width:100%">
            <i class="fa-solid fa-paper-plane"></i> Submit Complaint
          </button>
        </form>
      </div>
      <div id="complaintSuccess" hidden style="text-align:center;padding:var(--s6) 0">
        <i class="fa-solid fa-circle-check" style="font-size:3rem;color:var(--green);margin-bottom:var(--s3)"></i>
        <h3 style="margin-bottom:var(--s1)">Complaint Submitted!</h3>
        <p id="ticketInfo" style="color:var(--txt-2)"></p>
        <button class="btn btn--ghost" style="margin-top:var(--s4)" onclick="closeModal()">Close Window</button>
      </div>
    `;
    
    const existingForm = modal.querySelector('#complaintFormWrap');
    if (existingForm) existingForm.remove();
    const existingSuccess = modal.querySelector('#complaintSuccess');
    if (existingSuccess) existingSuccess.remove();
    
    modalListEl.closest('.modal__benefits').insertAdjacentHTML('afterend', formHtml);
    
    document.getElementById('complaintForm').addEventListener('submit', handleComplaintSubmit);
  } else {
    modalStepsEl.closest('.modal__how').hidden = false;
    modalListEl.closest('.modal__benefits').hidden = false;
    modalCta.style.display = 'inline-flex';
    const f = modal.querySelector('#complaintFormWrap'); if(f) f.remove();
    const s = modal.querySelector('#complaintSuccess'); if(s) s.remove();
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  lastFocused = document.activeElement;
  setTimeout(() => modalClose.focus(), 50);
  if (window.Iconify) window.Iconify.scan(modalIconEl);
}

async function handleComplaintSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const submitBtn = form.querySelector('button');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...';

  try {
    const res = await fetch(`${API_URL}/complaints`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();

    if (result.success) {
      document.getElementById('complaintFormWrap').hidden = true;
      document.getElementById('complaintSuccess').hidden = false;
      document.getElementById('ticketInfo').textContent = `Your ticket ID is ${result.ticket_id}. Our committee will review it soon.`;
    } else {
      alert(result.message || 'Submission failed');
    }
  } catch (err) {
    console.error(err);
    alert('Could not connect to server. Please try again later.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

function initModals() {
  document.querySelectorAll('[data-module]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.module));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(el.dataset.module); }
    });
  });
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  modalCta.addEventListener('click', closeModal);
  modal.addEventListener('keydown', trapFocus);
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const focusable = [...modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')];
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
  else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
}


/* ────────────────────────────────────────────────
   NAVBAR
   ──────────────────────────────────────────────── */
function initNavbar() {
  const nav     = document.getElementById('nav');
  const links   = nav.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
    let current = '';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) current = sec.id; });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ────────────────────────────────────────────────
   MOBILE MENU
   ──────────────────────────────────────────────── */
function initMobileMenu() {
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  const close  = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => { if (!burger.contains(e.target) && !drawer.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


/* ────────────────────────────────────────────────
   SMOOTH SCROLL
   ──────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('nav')?.offsetHeight || 72;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
}


/* ────────────────────────────────────────────────
   FAQ ACCORDION
   ──────────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__q');
    const ans = item.querySelector('.faq__a');
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq__item').forEach(other => {
        const ob = other.querySelector('.faq__q');
        const oa = other.querySelector('.faq__a');
        ob.setAttribute('aria-expanded', 'false');
        oa.classList.remove('open');
        oa.style.maxHeight = '0';
      });
      // Open clicked
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        ans.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 40 + 'px';
      }
    });
  });
}


/* ────────────────────────────────────────────────
   SECURITY PERSON DROPDOWN
   ──────────────────────────────────────────────── */
function initSecurityDropdown() {
  const sel = document.getElementById('securitySelect');
  const btn = document.getElementById('securityCallBtn');
  if (!sel || !btn) return;

  sel.addEventListener('change', () => {
    const val = sel.value;
    if (val) {
      btn.setAttribute('href', val);
      btn.removeAttribute('aria-disabled');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.setAttribute('href', '#');
      btn.setAttribute('aria-disabled', 'true');
      btn.style.opacity = '0.5';
      btn.style.pointerEvents = 'none';
    }
  });

  btn.addEventListener('click', e => {
    if (!sel.value) { e.preventDefault(); sel.focus(); }
  });
}


/* ────────────────────────────────────────────────
   BACK TO TOP
   ──────────────────────────────────────────────── */
function initBTT() {
  const btn = document.getElementById('btt');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ────────────────────────────────────────────────
   GSAP ANIMATIONS
   ──────────────────────────────────────────────── */
function initGSAP() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Hero — immediate entrance
  gsap.from('.hero__welcome-tag', { y: 18,  opacity: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' });
  gsap.from('.hero__h1',          { y: 40,  opacity: 0, duration: 0.9, delay: 0.35, ease: 'power3.out' });
  gsap.from('.hero__address',     { y: 16,  opacity: 0, duration: 0.6, delay: 0.5,  ease: 'power2.out' });
  gsap.from('.hero__sub',         { y: 20,  opacity: 0, duration: 0.6, delay: 0.65, ease: 'power2.out' });
  gsap.from('.hero__actions',     { y: 16,  opacity: 0, duration: 0.6, delay: 0.8,  ease: 'power2.out' });
  gsap.from('.hero__stats',       { y: 20,  opacity: 0, duration: 0.7, delay: 0.95, ease: 'power2.out' });

  // Section headers
  gsap.utils.toArray('.qa__header, .residents__header, .ct__header, .committee__h2, .announcements__h2, .faq__h2, .login-cta__h2, .about-society__h2, .contact__h2').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 87%', once: true },
      y: 15, opacity: 0, duration: 0.5, ease: 'power2.out'
    });
  });

  // ── PREMIUM STAGGERED ENTRANCE FOR ALL CARDS ──
  // Consolidating to prevent animation conflicts
  const revealCards = (selector, yDist = 15, delayBase = 0) => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: 'top 94%',
        once: true
      },
      y: yDist,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      delay: delayBase,
      ease: 'power1.out',
      clearProps: 'all'
    });
  };

  revealCards('.qa__card', 20);
  revealCards('.notice-card', 15, 0.05);
  revealCards('.cm-card', 15);
  revealCards('.glimpse-card', 25);
  revealCards('.svc-row', 12);
}

/* ────────────────────────────────────────────────
   3D HERO EFFECT (Synchronized Mouse + Scroll)
   ──────────────────────────────────────────────── */
function init3DEffects() {
  const hero = document.querySelector('.hero');
  const heroImgs = document.querySelectorAll('.hero__bg-img, .hero__side-img');
  if (!hero || heroImgs.length === 0) return;

  // 1. Scroll-based Perspective (Synced)
  gsap.to(heroImgs, {
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    scale: 1.1,
    rotationZ: (i) => i === 0 ? 2 : 1.5, // subtle difference for depth
    ease: 'none'
  });

  // 2. Mouse-reactive subtle tilt (Synced)
  hero.addEventListener('mousemove', (e) => {
    const { width, height } = hero.getBoundingClientRect();
    const x = (e.clientX / width - 0.5) * 20;
    const y = (e.clientY / height - 0.5) * 20;

    gsap.to(heroImgs, {
      x: x,
      y: y + (window.scrollY * 0.1),
      rotationY: x * 0.2,
      rotationX: -y * 0.2,
      duration: 1.5,
      stagger: 0.02, // ultra-subtle lag for organic feel
      ease: 'power2.out'
    });
  });

  // Reset on mouse leave
  hero.addEventListener('mouseleave', () => {
    gsap.to(heroImgs, {
      x: 0,
      y: (window.scrollY * 0.1),
      rotationY: 0,
      rotationX: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.3)'
    });
  });
}


/* ────────────────────────────────────────────────
   FETCH NOTICES
   ──────────────────────────────────────────────── */
async function fetchNotices() {
  const grid = document.querySelector('.notices__grid');
  if (!grid) return;

  try {
    const res = await fetch(`${API_URL}/notices`);
    const notices = await res.json();
    
    if (notices && notices.length > 0) {
      grid.innerHTML = notices.slice(0, 4).map(n => {
        const cat = (n.category || '').toLowerCase();
        let icon = 'fa-bullhorn'; 
        let colorClass = 'notice-badge--info';

        if (cat.includes('water')) { icon = 'fa-droplet-slash'; colorClass = 'notice-badge--water'; }
        else if (cat.includes('electric')) { icon = 'fa-bolt'; colorClass = 'notice-badge--electric'; }
        else if (cat.includes('health')) { icon = 'fa-heart-pulse'; colorClass = 'notice-badge--health'; }
        else if (cat.includes('event')) { icon = 'fa-calendar-check'; colorClass = 'notice-badge--event'; }
        else if (cat.includes('agm') || cat.includes('meeting')) { icon = 'fa-users'; colorClass = 'notice-badge--agm'; }
        else if (n.urgent) { icon = 'fa-circle-exclamation'; colorClass = 'notice-badge--urgent'; }

        return `
          <article class="notice-card ${n.urgent ? 'notice-card--urgent' : ''}" aria-label="Notice">
            <div class="notice-card__board-graphic" aria-hidden="true">
              <i class="fa-solid ${icon}"></i>
            </div>
            <div class="notice-card__content">
              <div class="notice-card__meta">
                <span class="notice-badge ${colorClass}">
                  <i class="fa-solid ${icon}"></i> 
                  ${n.category || (n.urgent ? 'Urgent' : 'Circular')}
                </span>
                <time datetime="${n.date}">${new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
              </div>
              <h3>${n.title}</h3>
              <p>${n.description}</p>
              <a href="#login" class="notice-card__link">View Details <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </article>
        `;
      }).join('');
    }
  } catch (err) {
    console.warn('Backend not available for notices, using fallback.');
  }
}

/* ────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initModals();
  initFAQ();
  initBTT();
  initSecurityDropdown();
  initGSAP();
  init3DEffects();
  fetchNotices();
});
