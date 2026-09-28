// Untangle Playbook — Feedback page
// Monthly-update commitment + reader suggestions form.

const { useState: useSFb } = React;

function PageFeedback() {
  const [type, setType] = useSFb("suggestion");
  const [page, setPage] = useSFb("");
  const [message, setMessage] = useSFb("");
  const [email, setEmail] = useSFb("");
  const [name, setName] = useSFb("");
  const [sent, setSent] = useSFb(false);
  const [copied, setCopied] = useSFb(false);

  // Where to send feedback. Two paths so the page works without any backend setup.
  //   1) FEEDBACK_FORM_URL: paste a Brevo/Tally/Formspark/Google Form action URL here
  //      to receive submissions directly into your inbox / dashboard.
  //   2) Fallback: if no URL is set, we open the reader's email client with a pre-filled
  //      message so nothing is lost. Either way we also keep a copy in localStorage on
  //      this device so the reader's draft survives a refresh.
  // Brevo feedback form (created in Brevo → Contacts → Forms).
  // Custom attributes used on the form: NAME, TYPE, PAGE, MESSAGE (plus the built-in EMAIL).
  const FEEDBACK_FORM_URL = "https://16b6a1b0.sibforms.com/serve/MUIFACNTV84VnUaEgd_KqgvtyrB5Tpnbtkywdgj_B7EG0r_Yn8poCxZ8lPiC2PecKIO7H-GmIf0hj63vwsDXKajGPxaqconB8gKSGpkbSmzPkOikKZzGFZqB2yED11w1TMdpxysHJPotprZU6xhD8OVDwNfdte2sVJZ148EFE7skJm1M4FN72XNUBEbLcIFl7N22xIdlRolDCcYCgQ==";
  const FEEDBACK_EMAIL    = "hello@untangleyouradhd.co.uk";  // fallback if the form URL is ever blanked

  // Restore any in-progress draft
  React.useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem("untangle-feedback-draft") || "{}");
      if (d.type) setType(d.type);
      if (d.page) setPage(d.page);
      if (d.message) setMessage(d.message);
      if (d.email) setEmail(d.email);
      if (d.name) setName(d.name);
    } catch (e) {}
  }, []);

  // Persist draft as you type
  React.useEffect(() => {
    try {
      localStorage.setItem(
        "untangle-feedback-draft",
        JSON.stringify({ type, page, message, email, name })
      );
    } catch (e) {}
  }, [type, page, message, email, name]);

  const TYPES = [
    { v: "suggestion",     l: "A suggestion or idea" },
    { v: "broken",         l: "Something is broken" },
    { v: "factual",        l: "I think you've got a fact wrong" },
    { v: "new-content",    l: "A topic you should cover" },
    { v: "lived",          l: "Sharing my lived experience" },
    { v: "general",        l: "General feedback" },
  ];

  function buildBody() {
    const t = TYPES.find(t => t.v === type)?.l || type;
    return [
      `Type: ${t}`,
      page ? `Page: ${page}` : null,
      name ? `From: ${name}` : null,
      email ? `Reply to: ${email}` : null,
      "",
      "Message:",
      message || "(empty)",
    ].filter(x => x !== null).join("\n");
  }

  function submit(e) {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const payload = { type, page, message, email, name, ts: new Date().toISOString() };
    // Keep a local copy for the editor's reference
    try {
      const log = JSON.parse(localStorage.getItem("untangle-feedback-log") || "[]");
      log.push(payload);
      localStorage.setItem("untangle-feedback-log", JSON.stringify(log.slice(-50)));
    } catch (e) {}

    if (FEEDBACK_FORM_URL) {
      // Brevo expects the field names to match its attribute names exactly,
      // plus the honeypot and locale fields all sib forms require.
      const fd = new FormData();
      fd.append("EMAIL",   email || "");
      fd.append("NAME",    name || "");
      fd.append("TYPE",    TYPES.find(t => t.v === type)?.l || type);
      fd.append("PAGE",    page || "");
      fd.append("MESSAGE", message || "");
      fd.append("email_address_check", "");  // anti-bot honeypot, must be empty
      fd.append("locale",  "en");
      fetch(FEEDBACK_FORM_URL, { method: "POST", body: fd, mode: "no-cors" })
        .finally(() => setSent(true));
    } else {
      // Open the reader's mail client as a fallback.
      const subject = `Untangle playbook · ${TYPES.find(t => t.v === type)?.l || "Feedback"}`;
      const body = buildBody();
      window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
    }
    // Clear the draft once sent
    try { localStorage.removeItem("untangle-feedback-draft"); } catch (e) {}
  }

  function copyMessage() {
    navigator.clipboard.writeText(buildBody()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  if (sent) {
    return (
      <div>
        <span className="chip accent">Feedback · Thank you</span>
        <h2 style={{marginTop:16}}>Thank you, properly.</h2>
        <p className="lede" style={{marginTop:16}}>It goes to our inbox and we read every message. We can't always reply, but every note feeds into the monthly update. If you left an email and your suggestion makes it in, we will let you know when it goes live.</p>
        <div style={{display:"flex", gap:12, marginTop:24, flexWrap:"wrap"}}>
          <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={() => setSent(false)}>Send another</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip accent">Feedback · We read every word</span>
          <h2 style={{marginTop:16}}>Help us make this better, every month.</h2>
          <p className="lede">This playbook gets a monthly update. Pages get rewritten, broken links fixed, new chapters added, and outdated NHS information replaced as fast as we hear about it. UK ADHD policy changes often, and most of our updates come from readers. If something is wrong, missing or out of date, please tell us.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/feedback-writing.webp')`}}></div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:32, marginTop:8}}>
        <form className="rtc-form" onSubmit={submit} style={{gap:18}}>
          <div className="rtc-field-group">
            <h4 style={{fontFamily:"var(--display, 'Outfit', sans-serif)", fontWeight:600, fontSize:18, margin:0}}>What is this about?</h4>
            <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:8, marginTop:8}}>
              {TYPES.map(t => (
                <button
                  key={t.v}
                  type="button"
                  onClick={() => setType(t.v)}
                  style={{
                    background: type === t.v ? "var(--accent)" : "var(--bg)",
                    color: type === t.v ? "#fff" : "var(--ink)",
                    border: `1px solid ${type === t.v ? "var(--accent)" : "var(--line)"}`,
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                    transition: "all 0.12s",
                  }}
                >
                  {t.l}
                </button>
              ))}
            </div>
          </div>

          <div className="rtc-field-group">
            <h4 style={{fontFamily:"var(--display, 'Outfit', sans-serif)", fontWeight:600, fontSize:18, margin:0}}>Your message</h4>
            <label>
              <span>Which page (optional)</span>
              <input
                type="text"
                value={page}
                onChange={e => setPage(e.target.value)}
                placeholder='e.g. "Clinic directory" or "page 34"'
              />
            </label>
            <label>
              <span>What would you like to tell us?</span>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Anything: a typo, a missing clinic, a chapter we should add, a story you want us to know. The more specific, the more useful."
                rows={6}
                required
                style={{minHeight:140, fontFamily:"inherit"}}
              />
            </label>
          </div>

          <div className="rtc-field-group">
            <h4 style={{fontFamily:"var(--display, 'Outfit', sans-serif)", fontWeight:600, fontSize:18, margin:0}}>About you (optional)</h4>
            <p className="rtc-hint" style={{margin:"-4px 0 4px"}}>We will only use this to reply if you ask us to. We do not add you to any list.</p>
            <div className="rtc-row">
              <label><span>Your name or initials</span><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Optional" /></label>
              <label><span>Email</span><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Optional" /></label>
            </div>
          </div>

          <div className="rtc-actions">
            <button type="submit" className="btn btn-accent" disabled={!message.trim()}>Send feedback</button>
            <button type="button" className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={copyMessage}>{copied ? "✓ Copied" : "Copy as text"}</button>
          </div>
        </form>

        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          <div className="card" style={{padding:"22px 24px"}}>
            <h4 style={{marginTop:10, fontSize:19}}>The monthly update cycle.</h4>
            <p style={{marginTop:10, fontSize:14.5, color:"var(--ink-2)", lineHeight:1.6}}>Every four weeks we pull all reader feedback, NHS policy changes, new research, broken links and reported clinic closures into one queue. We pick the highest-impact items, rewrite or add the pages, and republish. There is no big launch each time, the page just gets better between visits.</p>
          </div>

          <div className="card" style={{padding:"22px 24px"}}>
            <h4 style={{marginTop:10, fontSize:19}}>The four things we ask for most.</h4>
            <ul style={{margin:"12px 0 0", paddingLeft:18, fontSize:14.5, color:"var(--ink-2)", lineHeight:1.7}}>
              <li>A clinic on the directory that has closed, paused referrals or changed wait times.</li>
              <li>A factual error or out-of-date NHS policy we have not caught.</li>
              <li>A chapter you wish existed.</li>
              <li>Your own story, briefly, of what helped or what made you angry.</li>
            </ul>
          </div>

          <div className="card" style={{padding:"22px 24px", background:"var(--bg-2)"}}>
            <span className="eyebrow accent">In a crisis?</span>
            <p style={{marginTop:10, fontSize:14, color:"var(--ink-2)", lineHeight:1.6}}>This form is not monitored in real time. If you need urgent support, please ring <strong>Samaritans</strong> on <strong>116 123</strong>, free, 24/7, or use the crisis lines on the previous page.</p>
          </div>

          <p style={{fontSize:12.5, color:"var(--muted)", lineHeight:1.5}}>By submitting you agree to us reading your message and using it to improve the playbook. We never share or sell your data. We won't publish your message without your permission, and you can ask us to delete it at any time.</p>
        </div>
      </div>
    </div>
  );
}


const SOURCES_LIST = [
 {
  "t": "How common ADHD is in the UK",
  "s": "ADHD UK, ADHD diagnosis rate research",
  "u": "https://adhduk.co.uk/adhd-diagnosis-rate-uk/"
 },
 {
  "t": "Clinical guidance on ADHD diagnosis and treatment",
  "s": "NICE guideline NG87: Attention deficit hyperactivity disorder",
  "u": "https://www.nice.org.uk/guidance/ng87"
 },
 {
  "t": "The adult screener",
  "s": "World Health Organization Adult ADHD Self-Report Scale (ASRS)",
  "u": "https://www.hcp.med.harvard.edu/ncs/asrs.php"
 },
 {
  "t": "How much ADHD is genetic (twin studies)",
  "s": "Faraone and Larsson (2019), Genetics of attention deficit hyperactivity disorder, Molecular Psychiatry",
  "u": "https://www.nature.com/articles/s41380-018-0070-0"
 },
 {
  "t": "Who gets diagnosed",
  "s": "Racial-ethnic differences in ADHD diagnosis and treatment during adolescence and early adulthood (2024, US study)",
  "u": "https://pubmed.ncbi.nlm.nih.gov/38239182/"
 },
 {
  "t": "Neurodevelopmental conditions in trans and gender-diverse people",
  "s": "Warrier and others (2020), Nature Communications",
  "u": "https://www.nature.com/articles/s41467-020-17794-1"
 },
 {
  "t": "Right to Choose and Indicative Activity Plans",
  "s": "NHS South West London ICB, ADHD and autism Right to Choose",
  "u": "https://www.southwestlondon.icb.nhs.uk/find-nhs-services/attention-deficit-hyperactivity-disorder-adhd-and-autism-right-to-choose-2/"
 },
 {
  "t": "Right to Choose campaign updates",
  "s": "ADHD UK, Right to Choose campaign hub",
  "u": "https://adhduk.co.uk/right-to-choose/campaigns/"
 },
 {
  "t": "Rights at work",
  "s": "GOV.UK, Definition of disability under the Equality Act 2010",
  "u": "https://www.gov.uk/definition-of-disability-under-equality-act-2010"
 },
 {
  "t": "Access to Work",
  "s": "GOV.UK, Access to Work",
  "u": "https://www.gov.uk/access-to-work"
 },
 {
  "t": "Driving",
  "s": "GOV.UK, ADHD and driving",
  "u": "https://www.gov.uk/adhd-and-driving"
 },
 {
  "t": "Prescription charges",
  "s": "NHS, Prescription costs",
  "u": "https://www.nhs.uk/nhs-services/prescriptions/"
 },
 {
  "t": "Helplines",
  "s": "Each organisation's own website, checked for current numbers and opening hours",
  "u": ""
 },
 {
  "t": "ADHD medicines in pregnancy",
  "s": "bumps (UKTIS), medicine leaflets",
  "u": "https://www.medicinesinpregnancy.org/leaflets-a-z/"
 },
 {
  "t": "Methylphenidate and breastfeeding",
  "s": "NHS, pregnancy, breastfeeding and fertility while taking methylphenidate",
  "u": "https://www.nhs.uk/medicines/methylphenidate-adults/pregnancy-breastfeeding-and-fertility-while-taking-methylphenidate-for-adults/"
 },
 {
  "t": "ADHD and breastfeeding",
  "s": "Breastfeeding Network, ADHD and breastfeeding factsheet",
  "u": "https://www.breastfeedingnetwork.org.uk/factsheet/adhd-and-breastfeeding/"
 },
 {
  "t": "Diagnosis at any age",
  "s": "NICE NG87, ADHD: diagnosis and management",
  "u": "https://www.nice.org.uk/guidance/ng87/chapter/Recommendations"
 },
 {
  "t": "ADHD in adults",
  "s": "Royal College of Psychiatrists, ADHD in adults",
  "u": "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/adhd-in-adults"
 },
 {
  "t": "ADHD as a disability",
  "s": "GOV.UK, Equality Act 2010 guidance on the definition of disability",
  "u": "https://www.gov.uk/government/publications/equality-act-guidance/disability-equality-act-2010-guidance-on-matters-to-be-taken-into-account-in-determining-questions-relating-to-the-definition-of-disability-html"
 },
 {
  "t": "Renters' Rights Act",
  "s": "GOV.UK, guide to the Renters' Rights Act",
  "u": "https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act"
 },
 {
  "t": "Priority need and disability",
  "s": "Shelter, priority need if you have a health condition or disability",
  "u": "https://england.shelter.org.uk/housing_advice/homelessness/priority_need/health_condition_or_disability"
 },
 {
  "t": "Crisis and Resilience Fund",
  "s": "GOV.UK, Crisis and Resilience Fund guidance",
  "u": "https://www.gov.uk/government/publications/crisis-and-resilience-fund-guidance-for-local-authorities-in-england-1-april-2026-to-31-march-2029/the-crisis-and-resilience-fund-guidance-for-local-authorities-in-england-1-april-2026-to-31-march-2029"
 },
 {
  "t": "Who can foster",
  "s": "The Fostering Network, who can foster",
  "u": "https://www.thefosteringnetwork.org.uk/for-carers/becoming-a-foster-carer/who-can-foster/"
 },
 {
  "t": "Health and adoption",
  "s": "First4Adoption, your health and adoption",
  "u": "https://www.first4adoption.org.uk/who-can-adopt-a-child/your-health-and-adoption/"
 },
 {
  "t": "Adoption and Special Guardianship Support Fund",
  "s": "GOV.UK, ASGSF",
  "u": "https://www.gov.uk/guidance/adoption-and-special-guardianship-support-fund-asgsf"
 },
 {
  "t": "Pupil premium plus",
  "s": "GOV.UK, pupil premium",
  "u": "https://www.gov.uk/government/publications/pupil-premium/pupil-premium"
 },
 {
  "t": "Kinship allowance pilot",
  "s": "Kinship, financial allowances pilot",
  "u": "https://kinship.org.uk/support-and-advice/advice-and-information/financial-allowances-pilot/"
 }
];
function PageSources() {
  return (
    <div>
      <h2 style={{marginBottom:16}}>Sources</h2>
      <p className="lede">These are the main sources behind the facts and figures in this playbook. We link to the original wherever we can. Information about NHS services, benefits and rights changes, so check the source before you make a decision.</p>
      <p style={{fontSize:14, color:"var(--muted)", marginTop:8}}>Last checked 25 September 2026.</p>
      <ul className="src-list">
        {SOURCES_LIST.map((x, i) => (
          <li key={i}><strong>{x.t}</strong><span>{x.u ? <a href={x.u} target="_blank" rel="noopener">{x.s}</a> : x.s}</span></li>
        ))}
      </ul>
      <p style={{fontSize:15, color:"var(--ink-2)", marginTop:28}}>Some pages also describe common experiences shared by people with ADHD. Where something is lived experience rather than research, we say so. If you think something here is wrong or out of date, please tell us on the feedback page.</p>
      <p style={{fontSize:15, color:"var(--ink-2)", marginTop:12}}>Photos are from <a href="https://www.pexels.com" target="_blank" rel="noopener">Pexels</a> and used under the <a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels licence</a>. Quotes are from published interviews, books and posts, and each one names its source.</p>
    </div>
  );
}

window.PB_PAGES_EXTRA_FEEDBACK = [
  { ch: "support", title: "Sources", render: () => <PageSources /> },
  { ch: "support", title: "Give feedback", render: () => <PageFeedback /> },
];
