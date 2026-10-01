// Untangle Playbook, Chapters 7-9 + cover + end (Meds, Work, Support)

// =================== CHAPTER 7: MEDICATION ===================

const MEDS = [
  { name: "Methylphenidate", brand: "Ritalin, Concerta, Equasym, Xaggitin, Medikinet", type: "stim", how: "Boosts dopamine and noradrenaline", note: "NICE recommends it as a first choice for adults. It comes as short-acting tablets and as slow-release versions that last up to 12 hours. Some brands are not licensed for starting treatment in adults, so specialists prescribe them off-label, which is common and allowed." },
  { name: "Lisdexamfetamine", brand: "Elvanse", type: "stim", how: "Turns into dexamfetamine slowly in the body", note: "NICE also recommends it as a first choice. It lasts around 12 to 14 hours and is licensed for adults in the UK." },
  { name: "Dexamfetamine", brand: "Amfexa", type: "stim", how: "Direct stimulant", note: "It lasts around 4 to 6 hours. Specialists may use it if lisdexamfetamine works for you but you need a shorter effect. In adults it is prescribed off-label." },
  { name: "Atomoxetine", brand: "Strattera", type: "nonstim", how: "Noradrenaline reuptake inhibitor", note: "Licensed for adults. It is the main non-stimulant option. NICE suggests it if you cannot take, or have not benefited from, both first-choice stimulants. It takes several weeks to reach full effect." },
  { name: "Guanfacine", brand: "Intuniv", type: "nonstim", how: "Alpha-2 agonist", note: "Licensed in the UK for ages 6 to 17, and sometimes prescribed to adults outside its licence. It can help with emotions and sleep." },
  { name: "Clonidine", brand: "(off-label)", type: "nonstim", how: "Alpha-2 agonist", note: "Not licensed in the UK for ADHD, but sometimes prescribed alongside a stimulant to help with sleep or tics." },
  { name: "Bupropion", brand: "Wellbutrin (off-label)", type: "nonstim", how: "Keeps more dopamine and noradrenaline available in the brain", note: "Not licensed in the UK for ADHD and not part of NICE guidance for adults. Specialists sometimes consider it if you also have low mood." },
];

function PageMedsIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip accent">Chapter 7 · Medication</span>
          <h1 style={{marginTop:16}}>Medication.</h1>
          <p className="lede">Here are the main medicines UK specialists prescribe for adult ADHD, what each one is trying to do, and what the first few weeks can feel like. Medication is one option among several. Many people who try it find it helpful.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-56-meds-intro.webp')`}}></div>
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
          <h1 style={{marginTop:16}}>UK ADHD medications.</h1>
          <p className="lede">Here are the main medicines UK specialists prescribe for adult ADHD, what each one is trying to do, and what the first few weeks can feel like. Medication is one option among several. Many people who try it find it helpful.</p>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginTop:16}}>Many people start on a stimulant and adjust from there. The table below covers the options a UK psychiatrist may discuss with you.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-57-meds-options.webp')`}}></div>
      </div>
      <PBQuote q={"Having ADHD, and taking medicine for it is nothing to be ashamed of nothing that I'm afraid to let people know."} who={"Simone Biles, Olympic gymnast"} src={"On X (Twitter), 13 September 2016"} />
      <div style={{border:"1px solid var(--line)", borderRadius:14, overflow:"hidden", marginTop:32, background:"var(--paper)"}}>
        <table className="meds-table">
          <thead><tr><th>Name</th><th>Type</th><th>How it works</th><th>Note</th></tr></thead>
          <tbody>
            {MEDS.map((m,i) => (
              <tr key={i}>
                <td className="name">{m.name}<small>{m.brand}</small></td>
                <td><span className={`pill-tag ${m.type}`}>{m.type === "stim" ? "Stimulant" : "Non-stim"}</span></td>
                <td data-l="How it works">{m.how}</td>
                <td data-l="Note">{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="disclaim" style={{marginTop:24}}>
        <strong>Not medical advice.</strong> Your psychiatrist decides on medication with you. Side effects, interactions and dose changes vary from person to person. This page is a general guide only.
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
          <h1 style={{marginTop:16}}>The titration process.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">You start on a low dose, your psychiatrist adjusts every few weeks, and you keep going until you find the dose that fits you. This can take a few months, and it varies from person to person.</p>
            <PBSlider items={[
            {h:"Start low", p:"You'll begin on the lowest dose available, taken in the morning with food. Pay attention to how the first four to six hours feel, that's the window you and your psychiatrist will be talking about next time."},
            {h:"Track daily", p:"Keep a simple note each day of energy, focus, appetite, sleep, mood and any side effects. A scrap of paper or an app, doesn't matter, just bring it with you to follow-ups so you have data, not memory."},
            {h:"Adjust monthly", p:"Your prescriber will usually increase the dose gradually until you find one that helps with manageable side effects. How long this takes varies. There's no prize for getting there fast."},
            {h:"Shared care", p:"Once you're stable, your GP can take over the prescription via what's called a shared-care agreement. Some GPs refuse, so know your rights and have the charities list to hand if you need to push back."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-58-titration.webp')`}}></div>
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
          <h1 style={{marginTop:16}}>Your rights at work and at <span className="accent">uni</span>.</h1>
          <p className="lede">ADHD may be protected under the Equality Act 2010 where it has a substantial and long-term effect on day-to-day life. If so, you may be able to ask for reasonable adjustments at work and at university. Many people never ask because they don't know what to ask for. Below is a list, and the words to use.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/work-cafe.webp"}')`}}></div>
      </div>
      <PBQuote q={"It's my best friend because it allows me to make the jumps and leaps I need for my job."} who={"Rory Bremner, impressionist"} src={"Interview with The Times, 2017"} />
    </div>
  );
}

function PageAccommodations() {
  const items = [
    { i: "🎧", h: "Noise-cancelling headphones", b: "If it is a reasonable adjustment, your employer should pay for it, not you. Open-plan offices can make it hard to focus. Put your request in writing." },
    { i: "🏠", h: "Flexible / hybrid working", b: "Work from home for focused tasks and go into the office for meetings. Say exactly which days you are asking for." },
    { i: "📅", h: "Written instructions", b: "Ask for written summaries after meetings and written briefs for tasks. Spoken instructions are easy to forget." },
    { i: "⏰", h: "Flexible start times", b: "Sleep problems are common with ADHD. Asking to start and finish later, for example 10am to 6pm, is a request your employer should consider." },
    { i: "📝", h: "More time on deadlines", b: "Agree extra time at the start. Calling it planning time rather than extra time often makes people more willing." },
    { i: "🔇", h: "A quiet workspace", b: "A meeting room booked for focused work, or a quiet area of the office. Both are reasonable requests." },
    { i: "💷", h: "Access to Work funding", b: "A UK government scheme that may help fund coaching, software and equipment. Support is assessed individually, so check current information on GOV.UK. You apply online. Your employer may be asked to share some equipment costs." },
    { i: "📚", h: "DSA at university", b: "Disabled Students' Allowance pays for software, mentoring and a study skills tutor. It is free to apply." },
  ];
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 8 · Reasonable adjustments</span>
          <h1 style={{marginTop:16}}>Things you can ask for.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">ADHD may be protected under the Equality Act 2010 where it has a substantial and long-term effect on day-to-day life. If so, your employer must consider reasonable adjustments. What is reasonable depends on the role, workplace and circumstances. These are the ones that help, and how to ask for them.</p>
            <PBSlider items={items.map(it => ({h: it.h, p: it.b}))} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-62-accommodations.webp')`}}></div>
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
          <h1 style={{marginTop:16}}>The disclosure email.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">To your manager or HR. A template you can adapt to your role. Keep it direct and professional, with no need to apologise.</p>
          <div className="script-card">
            <p>Hi [Name], I wanted to share that I've recently been diagnosed with ADHD. I'd like to discuss reasonable adjustments that would help me do my best work.</p>
            <p>The adjustments I'd find most useful are: noise-cancelling headphones, the option to work from home two days per week for focused work, and post-meeting written summaries of action points.</p>
            <p>I'd also like to apply for Access to Work funding, which is a government scheme that may help pay for coaching and assistive software. Could we book 30 minutes to discuss? Thank you.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-63-disclosure.webp')`}}></div>
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
          <h1 style={{marginTop:16}}>If today is hard.</h1>
          <p className="lede">If today is heavy, you do not need a piece of paper to ask for help. These UK numbers and organisations are free and confidential. You can ask for help even if you are not sure what you need yet.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-65-support-intro.webp')`}}></div>
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
          <h1 style={{marginTop:16}}>If you need to talk right now.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you're in crisis, or close to it, please use one of the numbers on this page first. They are free, confidential and answered by trained people.</p>
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
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/crisis-phone.webp"}')`}}></div>
      </div>
    </div>
  );
}

function PageCharities() {
  const list = [
    { name: "ADHD Foundation", who: "Charity · Helpline", desc: "Works across the UK, with resources and training for parents.", url: "https://www.adhdfoundation.org.uk" },
    { name: "ADHD UK", who: "Community · Forum", desc: "An active UK community for adults and parents, where you can ask questions and get answers from people with experience.", url: "https://adhduk.co.uk" },
    { name: "AADD-UK", who: "Charity · Adults", desc: "For adults with ADHD, with local meet-ups around the UK.", url: "https://aadduk.org" },
    { name: "ADDISS", who: "Charity · National", desc: "ADHD Information Services. Books, leaflets and training for families.", url: "https://www.addiss.co.uk" },
    { name: "ADHD Aware", who: "Charity · Peer support", desc: "Free support groups run by people with ADHD, online and in person.", url: "https://adhdaware.org.uk" },
    { name: "YoungMinds Parents", who: "Helpline", desc: "A free helpline for parents on 0808 802 5544, open weekdays (check current hours on their website).", url: "https://www.youngminds.org.uk" },
    { name: "Contact", who: "Disabled children", desc: "For parents of disabled children, with a helpline on 0808 808 3555.", url: "https://contact.org.uk" },
    { name: "Family Lives", who: "Parenting · Helpline", desc: "A free parenting helpline on 0808 800 2222.", url: "https://www.familylives.org.uk" },
    { name: "IPSEA", who: "Legal · Education", desc: "Free legal advice on EHCPs and support at school.", url: "https://www.ipsea.org.uk" },
    { name: "Access to Work", who: "Gov · Employment", desc: "May help fund practical support at work. Check current eligibility on GOV.UK. It is free to apply.", url: "https://www.gov.uk/access-to-work" },
    { name: "DSA (Student Finance)", who: "Gov · University", desc: "Disabled Students' Allowance pays for coaching, equipment and mentoring while you study.", url: "https://www.gov.uk/disabled-students-allowance-dsa" },
    { name: "Sibs", who: "Charity · Siblings", desc: "Support for brothers and sisters of disabled or neurodivergent children.", url: "https://www.sibs.org.uk" },
    { name: "Mind", who: "Mental health · National", desc: "Mental health support, with local branches across the UK.", url: "https://www.mind.org.uk" },
    { name: "Samaritans", who: "Crisis · 24/7", desc: "Call 116 123 for free, any time of day or night, if you are struggling.", url: "https://www.samaritans.org" },
    { name: "Focusmate", who: "Body doubling", desc: "Free 50-minute online co-working sessions, three a week on the free plan.", url: "https://www.focusmate.com" },
  ];
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip">Chapter 9 · UK charities</span>
          <h1 style={{marginTop:16}}>Trusted UK support.</h1>
          <p className="lede">UK organisations that offer free support and advice. Bookmark this page.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/charities-noticeboard.webp"}')`}}></div>
      </div>
      <div className="charity-grid" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 16}}>
        {list.map((r,i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener" className="card" style={{textDecoration:"none", color:"inherit", display:"flex", flexDirection:"column", gap:10}}>
            <span className="eyebrow muted">{r.who}</span>
            <h4 style={{fontSize:20}}>{r.name}</h4>
            <p style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.5}}>{r.desc}</p>
            <span style={{fontSize:13, fontWeight:700, marginTop:"auto", paddingTop:12, borderTop:"1px solid var(--line-soft)"}}>Visit site</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// =================== COVER + END ===================

const { useState: useS3, useEffect: useE3 } = React;
// Each slide has a -wide (landscape screens) and -tall (portrait screens) WebP.
const COVER_SLIDES = ["assets/hero-1", "assets/hero-2", "assets/hero-bench", "assets/hero-4", "assets/hero-5", "assets/hero-6"];
const COVER_TALL = !!(window.matchMedia && window.matchMedia("(orientation: portrait)").matches);

function PageCover({onStart, total, resumeIdx, resumeTitle}) {
  const [slide, setSlide] = useS3(0);
  // Only fetch a slide once it is next in line.
  const [reach, setReach] = useS3(1);
  useE3(() => { setReach(r => Math.max(r, slide + 1)); }, [slide]);
  useE3(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % COVER_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="cover-hero">
      <div className="cover-hero-media">
        {COVER_SLIDES.map((src, i) => (
          <div key={i} className={`cover-hero-slide ${i === slide ? "active" : ""}`} style={i <= reach ? {backgroundImage: `url('${src}-${COVER_TALL ? "tall" : "wide"}.webp')`} : undefined}></div>
        ))}
      </div>
      <div className="cover-hero-scrim"></div>
      <div className="cover-hero-content">
        <p className="cover-tagline">The website I wish I'd found when I was younger.</p>
        <h1><span className="accent">Untangle</span> your ADHD brain.</h1>
        <p className="lede">A free guide for adults who wonder if they have ADHD, for parents trying to make sense of their child, and for anyone learning to live well with a brain that is wired differently from most.</p>
        <div className="actions">
          <button className="btn btn-accent" onClick={onStart}>Start the playbook</button>
          <button className="btn btn-ghost cover-hero-ghost" onClick={() => window.dispatchEvent(new CustomEvent("pb-open-drawer"))}>See contents</button>
        </div>
        <a className="cover-madeby" href="who-made-this.html">Made by Rich</a>
        <button className="loophole-cta" onClick={() => window.dispatchEvent(new CustomEvent("pb-jump-loophole"))}>
          <span className="loophole-cta-h">Waiting for an ADHD assessment? Explore your options.</span>
          <span className="loophole-cta-sub">A letter to help you ask for a faster NHS-funded ADHD referral</span>
          <span className="loophole-cta-arrow">→</span>
        </button>
      </div>
      <ul className="cover-hero-facts">
        <li>ADHD UK estimates around 2.6 million people in the UK have ADHD.</li>
        <li>NHS waits for an adult assessment are commonly two years or more, and far longer in some areas.</li>
        <li>Despite public debate about over-diagnosis, ADHD UK estimates more than 2 million people are undiagnosed. What's changed is awareness, not the condition.</li>
      </ul>
    </div>
  );
}

function PageEnd({onRestart, onJump}) {
  return (
    <div className="end-card">
      <span className="chip accent" style={{marginBottom:16}}>You made it</span>
      <h1>That's the playbook.</h1>
      <p>You now know more about UK ADHD than most GPs. The next move is small. Pick one thing, this week. Book a GP appointment, try one framework, send the disclosure email. One step.</p>
      <div className="actions">
        <button className="btn btn-accent" onClick={() => onJump("test")}>Find a clinic</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={() => onJump("tools")}>Try a tool</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={() => window.dispatchEvent(new CustomEvent("pb-jump-feedback"))}>★ Send feedback</button>
        <button className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={onRestart}>Start again</button>
      </div>
      <PBSignup />
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

function PBSignup() {
  return (
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
  );
}
window.PBSignup = PBSignup;
