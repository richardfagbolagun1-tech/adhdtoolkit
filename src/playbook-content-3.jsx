// Untangle Playbook, Chapters 7-9 + cover + end (Meds, Work, Support)

// =================== CHAPTER 7: MEDICATION ===================

const MEDS = [
  { name: "Methylphenidate", brand: "Ritalin, Concerta, Equasym, Xaggitin, Medikinet", type: "stim", how: "Boosts dopamine and noradrenaline", note: "First-line NICE recommendation in adults. Available in many formulations from short-acting tablets to 12-hour modified release." },
  { name: "Lisdexamfetamine", brand: "Elvanse", type: "stim", how: "Pro-drug, releases dexamfetamine slowly", note: "Also first-line per NICE NG87. Long-acting, around 12 to 14 hours, and a firm UK favourite for adults." },
  { name: "Dexamfetamine", brand: "Amfexa", type: "stim", how: "Direct stimulant", note: "Short-acting (around 4 hours). NICE recommends it as an option when methylphenidate and lisdexamfetamine have not worked or are not tolerated." },
  { name: "Atomoxetine", brand: "Strattera", type: "nonstim", how: "Noradrenaline reuptake inhibitor", note: "Licensed for adults. The main non-stimulant option, useful when stimulants are contraindicated or in adults with anxiety, tic disorders or a history of substance use." },
  { name: "Guanfacine", brand: "Intuniv", type: "nonstim", how: "Alpha-2 agonist", note: "Licensed for ages 6 to 17 in the UK and used off-label in adults. Sometimes added to help with emotional regulation and sleep." },
  { name: "Clonidine", brand: "(off-label)", type: "nonstim", how: "Alpha-2 agonist", note: "Not UK-licensed for ADHD but sometimes used off-label, particularly alongside a stimulant to help with sleep or tic comorbidity." },
  { name: "Bupropion", brand: "Wellbutrin (off-label)", type: "nonstim", how: "Dopamine and noradrenaline reuptake inhibitor", note: "Off-label in the UK and not in the NICE adult ADHD pathway, but occasionally considered by specialists where low mood is also in the picture." },
];

function PageMedsIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip accent">Chapter 7 · Medication</span>
          <h2 style={{marginTop:16}}>Medication, in plain English.</h2>
          <p className="lede">Here are the six medications licensed for adult ADHD in the UK, what each one is trying to do, and what the first few weeks usually feel like. Meds are one tool among many, not a verdict on how serious things are. Roughly seven in ten people who try them find them helpful, and there is no medal for doing it without.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-56-meds-intro.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageMedsTable() {
  return (
    <div>
      <div className="ph ph-noline">
        <div>
          <span className="chip">Chapter 7 · The options</span>
          <h2 style={{marginTop:16}}>UK ADHD medications.</h2>
          <p className="lede">Here are the six medications licensed for adult ADHD in the UK, what each one is trying to do, and what the first few weeks usually feel like. Meds are one tool among many, not a verdict on how serious things are. Roughly seven in ten people who try them find them helpful, and there is no medal for doing it without.</p>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginTop:16}}>Most people start on a stimulant and adjust from there, the table below is what a UK psychiatrist will walk you through, demystified.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-57-meds-options.jpg')`}}></div>
      </div>
      <div style={{border:"1px solid var(--line)", borderRadius:14, overflow:"hidden", marginTop:32, background:"var(--paper)"}}>
        <table className="meds-table">
          <thead><tr><th>Name</th><th>Type</th><th>How it works</th><th>Note</th></tr></thead>
          <tbody>
            {MEDS.map((m,i) => (
              <tr key={i}>
                <td className="name">{m.name}<small>{m.brand}</small></td>
                <td><span className={`pill-tag ${m.type}`}>{m.type === "stim" ? "Stimulant" : "Non-stim"}</span></td>
                <td>{m.how}</td>
                <td>{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="disclaim" style={{marginTop:24}}>
        <strong>Not medical advice.</strong> Medication choice is a clinical decision made with your psychiatrist. Side effects, interactions and titration vary by person. This page is orientation only.
      </div>
    </div>
  );
}

function PageMedsExpect() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 7 · What to expect</span>
          <h2 style={{marginTop:16}}>The titration process.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Starting ADHD meds is not like starting an antibiotic. You start low, your psychiatrist adjusts every few weeks, and you keep going until you find the dose that fits you. Most people land in 2 to 3 months.</p>
            <PBSlider items={[
            {h:"Start low", p:"You'll begin on the lowest dose available, taken in the morning with food. Pay attention to how the first four to six hours feel, that's the window you and your psychiatrist will be talking about next time."},
            {h:"Track daily", p:"Keep a simple note each day of energy, focus, appetite, sleep, mood and any side effects. A scrap of paper or an app, doesn't matter, just bring it with you to follow-ups so you have data, not memory."},
            {h:"Adjust monthly", p:"Most people titrate up gradually over two to four months until they find the dose where focus feels real and side effects feel tolerable. There's no prize for getting there fast."},
            {h:"Shared care", p:"Once you're stable, your GP can take over the prescription via what's called a shared-care agreement. Some GPs refuse, so know your rights and have the charities list to hand if you need to push back."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-58-titration.jpg')`}}></div>
      </div>
    </div>
  );
}

// =================== CHAPTER 8: WORK & STUDY ===================

function PageWorkIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 8 · Work & study</span>
          <h2 style={{marginTop:16}}>Your rights at work and at <span className="accent">uni</span>.</h2>
          <p className="lede">Under the Equality Act 2010, ADHD counts as a disability in the UK, which means you are legally entitled to reasonable adjustments at work and at university. Most people we speak to never ask, because they have never seen it written down what those adjustments could actually look like. Here is a starter list, and the words to use when you raise it.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageAccommodations() {
  const items = [
    { i: "🎧", h: "Noise-cancelling headphones", b: "On the company, not you. Open-plan offices genuinely wreck ADHD focus, and a written request makes this hard to refuse." },
    { i: "🏠", h: "Flexible / hybrid working", b: "Working from home for the deep work, the office for collaboration. Be specific about the pattern you're asking for, it lands better." },
    { i: "📅", h: "Written instructions", b: "Always, every time. Post-meeting summaries and written briefs save you from the memory trap that verbal-only instructions create." },
    { i: "⏰", h: "Flexible start times", b: "ADHD sleep is delayed for most of us, that's biology not slackness. A 10am to 6pm pattern is a perfectly reasonable ask." },
    { i: "📝", h: "More time on deadlines", b: "Build in a buffer up front. Frame it as 'planning time' rather than 'extra time', the language change really does make people more agreeable." },
    { i: "🔇", h: "A quiet workspace", b: "A meeting room booked out for a focus block, or a wing of the office that's been labelled quiet. Either works, both are reasonable." },
    { i: "💷", h: "Access to Work funding", b: "A UK government scheme that pays for coaching, software and equipment up to £69,000 a year. You apply online, your company doesn't pay." },
    { i: "📚", h: "DSA at university", b: "The Disabled Students' Allowance covers software, mentoring and a study skills tutor. Free to apply for and worth every minute of the form." },
  ];
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 8 · Reasonable adjustments</span>
          <h2 style={{marginTop:16}}>Things you can ask for.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">ADHD is recognised as a disability under the UK Equality Act 2010, which means your employer is legally required to consider reasonable adjustments. Here are the ones that actually help, plus the language to ask without underselling yourself.</p>
            <PBSlider items={items.map(it => ({h: it.h, p: it.b}))} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-62-accommodations.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageWorkScript() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip accent">Chapter 8 · Email script</span>
          <h2 style={{marginTop:16}}>The disclosure email.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">To your manager or HR. The hardest email to send and one of the most worthwhile. Direct, professional, no apologies, adapt the asks to fit your role. This template is what UK ADHDers have been quietly sharing with each other for years.</p>
          <div className="script-card">
            <p>Hi [Name], I wanted to share that I've recently been diagnosed with ADHD. ADHD is recognised as a disability under the Equality Act 2010, and I'd like to discuss reasonable adjustments to help me do my best work.</p>
            <p>The adjustments I'd find most useful are: noise-cancelling headphones, the option to work from home two days per week for focused work, and post-meeting written summaries of action points.</p>
            <p>I'd also like to apply for Access to Work funding, which is a government scheme that may cover coaching and assistive software at no cost to the company. Could we book 30 minutes to discuss? Thank you.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-63-disclosure.jpg')`}}></div>
      </div>
    </div>
  );
}

// =================== CHAPTER 9: SUPPORT ===================

function PageSupportIntro() {
  return (
    <div>
      <div className="ph ph-noline">
        <div>
          <span className="chip accent">Chapter 9 · Support now</span>
          <h2 style={{marginTop:16}}>If today is hard.</h2>
          <p className="lede">If today is heavy, you do not need a piece of paper to ask for help. These are the UK numbers and organisations our community ring on the bad days, free, confidential, and used to ADHD callers. Please use them.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-65-support-intro.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageHelplines() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip accent">Chapter 9 · Crisis lines</span>
          <h2 style={{marginTop:16}}>If you need to talk right now.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you're in crisis, or close to it, please use one of the numbers on this page first. They are free, confidential, and answered by humans trained for exactly this moment.</p>
          <div className="help-list help-compact">
            <div className="help urgent">
              <span className="who">Emergency · 24/7</span>
              <h4>If life is at risk</h4>
              <div className="number">999</div>
              <p>If you or someone else is in immediate danger, please don't hesitate, that's exactly what this number is for.</p>
            </div>
            <div className="help urgent">
              <span className="who">Crisis · 24/7 · Free</span>
              <h4>Samaritans</h4>
              <div className="number">116 123</div>
            </div>
            <div className="help">
              <span className="who">Mental health · 24/7 · Text</span>
              <h4>Shout</h4>
              <div className="number">Text "SHOUT" to 85258</div>
              <p>A free crisis text line, available around the clock if picking up the phone feels like too much right now.</p>
            </div>
            <div className="help">
              <span className="who">NHS · 24/7</span>
              <h4>NHS 111, option 2</h4>
              <div className="number">111</div>
              <p>For urgent mental health support, including a same-day referral to the crisis team if you need one.</p>
            </div>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageCharities() {
  const list = [
    { name: "ADHD Foundation", who: "Charity · Helpline", desc: "UK-wide, with resources, parent training and a neurodiversity-affirming team behind it.", url: "https://www.adhdfoundation.org.uk" },
    { name: "ADHD UK", who: "Community · Forum", desc: "An active UK-based community for adults and parents alike, the kind of place where you can bring an awkward question and not be the only one asking it.", url: "https://adhduk.co.uk" },
    { name: "AADD-UK", who: "Charity · Adults", desc: "Adults with ADHD, with local meetups running across the UK if you'd rather meet in person.", url: "https://aadduk.org" },
    { name: "ADDISS", who: "Charity · National", desc: "The ADHD Information Services. Books, leaflets, and proper training for families who want to go deeper.", url: "https://www.addiss.co.uk" },
    { name: "ADHD Aware", who: "Charity · Peer support", desc: "Free peer-led support groups, running both online and in person depending on what suits you.", url: "https://adhdaware.org.uk" },
    { name: "YoungMinds Parents", who: "Helpline", desc: "A free helpline specifically for parents, on 0808 802 5544, open weekday afternoons.", url: "https://www.youngminds.org.uk" },
    { name: "Contact", who: "Disabled children", desc: "For parents of disabled children, with a helpline on 0808 808 3555 if you need to talk it through.", url: "https://contact.org.uk" },
    { name: "Family Lives", who: "Parenting · Helpline", desc: "A free 24/7 parenting helpline on 0808 800 2222, for the nights when nothing else feels open.", url: "https://www.familylives.org.uk" },
    { name: "IPSEA", who: "Legal · Education", desc: "Free legal advice on EHCPs and school support, from people who know the system inside out.", url: "https://www.ipsea.org.uk" },
    { name: "Access to Work", who: "Gov · Employment", desc: "Up to £69,000 a year in support for working adults with ADHD. Free to apply, and most people who'd qualify never do.", url: "https://www.gov.uk/access-to-work" },
    { name: "DSA (Student Finance)", who: "Gov · University", desc: "The Disabled Students' Allowance covers ADHD coaching, tech and mentoring while you study, all funded.", url: "https://www.gov.uk/disabled-students-allowance-dsa" },
    { name: "Sibs", who: "Charity · Siblings", desc: "For the brothers and sisters of disabled or neurodivergent children, who absorb more than people realise.", url: "https://www.sibs.org.uk" },
    { name: "Mind", who: "Mental health · National", desc: "General mental health support, with local Minds dotted across the UK if you'd rather have someone nearby.", url: "https://www.mind.org.uk" },
    { name: "Samaritans", who: "Crisis · 24/7", desc: "Call 116 123, free, any time of day or night. For anyone in distress, full stop.", url: "https://www.samaritans.org" },
    { name: "Focusmate", who: "Body doubling", desc: "Free 50-minute virtual coworking sessions, three a week on the free plan, often life-changing for ADHDers.", url: "https://www.focusmate.com" },
  ];
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip">Chapter 9 · UK charities</span>
          <h2 style={{marginTop:16}}>Trusted UK support.</h2>
          <p className="lede">Fifteen UK organisations who actually pick up the phone, answer the email, and don't try to sell you anything. Bookmark this page, you'll want it again.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=80")}')`}}></div>
      </div>
      <div className="charity-grid" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 16}}>
        {list.map((r,i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener" className="card" style={{textDecoration:"none", color:"inherit", display:"flex", flexDirection:"column", gap:10}}>
            <span className="eyebrow muted">{r.who}</span>
            <h4 style={{fontSize:20}}>{r.name}</h4>
            <p style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.5}}>{r.desc}</p>
            <span style={{fontSize:13, fontWeight:700, marginTop:"auto", paddingTop:12, borderTop:"1px solid var(--line-soft)"}}>Visit site →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// =================== COVER + END ===================

const { useState: useS3, useEffect: useE3 } = React;
const COVER_SLIDES = ["assets/cover-1.jpg", "assets/cover-2.jpg", "assets/cover-3.jpg"];

function PageCover({onStart, total, resumeIdx, resumeTitle}) {
  const [slide, setSlide] = useS3(0);
  useE3(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % COVER_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="cover-hero">
      <div className="cover-hero-media">
        {COVER_SLIDES.map((src, i) => (
          <div key={i} className={`cover-hero-slide ${i === slide ? "active" : ""}`} style={{backgroundImage: `url('${src}')`}}></div>
        ))}
      </div>
      <div className="cover-hero-scrim"></div>
      <div className="cover-hero-content">
        <h1><span className="accent">Untangle</span> your ADHD brain.</h1>
        <p className="lede">A free, gently-written guide for adults who quietly wonder if they have ADHD, for parents trying to make sense of their child, and for anyone learning to live well with a brain that is wired a little differently from most.</p>
        <div className="actions">
          <button className="btn btn-accent" onClick={onStart}>Start the playbook →</button>
          <button className="btn btn-ghost cover-hero-ghost" onClick={() => window.dispatchEvent(new CustomEvent("pb-open-drawer"))}>See contents</button>
        </div>
        <button className="loophole-cta" onClick={() => window.dispatchEvent(new CustomEvent("pb-jump-loophole"))}>
          <span className="loophole-cta-tag">New · The Fast Track</span>
          <span className="loophole-cta-h">Skip the 4-year NHS wait.</span>
          <span className="loophole-cta-sub">The legal GP letter that gets you seen on the NHS in months, free.</span>
          <span className="loophole-cta-arrow">→</span>
        </button>
      </div>
      <ul className="cover-hero-facts">
        <li>2.6 million people in the UK are estimated to have ADHD.</li>
        <li>The average NHS wait for an assessment is around 4 years.</li>
        <li>Despite public debate about over-diagnosis, more than 80% of those adults are still undiagnosed. What's changed is awareness, not the condition.</li>
      </ul>
    </div>
  );
}

function PageEnd({onRestart, onJump}) {
  return (
    <div className="end-card">
      <span className="chip accent" style={{marginBottom:16}}>You made it</span>
      <h2>That's the playbook.</h2>
      <p>You now know more about UK ADHD than most GPs. The next move is small. Pick one thing, this week. Book a GP appointment, try one framework, send the disclosure email. One step.</p>
      <div className="actions">
        <button className="btn btn-accent" onClick={() => onJump("test")}>Find a clinic →</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={() => onJump("tools")}>Try a tool</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={() => window.dispatchEvent(new CustomEvent("pb-jump-feedback"))}>★ Send feedback</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={onRestart}>Start again</button>
      </div>
      <div className="signup-card">
        <div className="signup-inner">
          <h3 style={{marginTop:0}}>New chapters, new tools, no spam.</h3>
          <p>One short email a month with the latest UK ADHD updates, new chapters we've added, and reader-suggested resources. Unsubscribe in one click.</p>
          {/* Brevo subscription form — posts directly to Brevo. The hidden fields
              email_address_check (honeypot) and locale are required by Brevo. */}
          <form
            id="brevo-signup"
            action="https://16b6a1b0.sibforms.com/serve/MUIFAAbJPQXH9DK7mYVKRAfqfj-dOwEHvH1JsSBS1BF0SSQDUKAEWZKchYJU_IgigGsLj89BKdWNQIBXRQz7ptyWYolP0UuOxMcj_gDTYF-G-0uZNC_42yIoLpOsZEljk3h6wiKGTsoT2ho6qiEaH_7gR9O3_ZH7h2kXTvs8W-qzjhgQpNpldfLeRv4xHFvfA_H2MTQATuB3AnDj0Q=="
            method="POST"
            target="_blank"
            rel="noopener"
            className="signup-form"
          >
            <input type="email" name="EMAIL" placeholder="your@email.com" required aria-label="Email address" />
            <input type="text" name="email_address_check" defaultValue="" style={{display:"none"}} tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="locale" value="en" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="signup-small">By subscribing you agree to receive emails from us. Powered by Brevo. We never sell your data.</p>
        </div>
      </div>
    </div>
  );
}

window.PB_PAGES_7_9 = [
  { ch: "meds", title: "Medication options", render: () => <PageMedsTable /> },
  { ch: "meds", title: "What to expect", render: () => <PageMedsExpect /> },

  { ch: "work", title: "Work and study", render: () => <PageWorkIntro /> },
  { ch: "work", title: "Reasonable adjustments", render: () => <PageAccommodations /> },
  { ch: "work", title: "Disclosure email", render: () => <PageWorkScript /> },

  { ch: "support", title: "Getting support", render: () => <PageSupportIntro /> },
  { ch: "support", title: "Crisis lines", render: () => <PageHelplines /> },
  { ch: "support", title: "UK charities", render: () => <PageCharities /> },
];

window.PB_COVER = PageCover;
window.PB_END = PageEnd;
