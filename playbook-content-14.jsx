// Untangle Playbook — Content-14: How to use + If you only read one page

// =================== HOW TO USE ===================

function PageHowToUse() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Read first · 90 seconds</span>
          <h2 style={{marginTop:16}}>How to use this playbook.</h2>
          <p className="lede">There are more than seventy pages here. You don't need to read them all, not now, probably not ever. This playbook is built to be read once at your own pace and then kept somewhere you can come back to when something specific comes up. Two minutes here will save you an hour of scrolling.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80")}')`}}></div>
      </div>

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The four ways to use it</h3>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:18, marginBottom:32}}>
        <div className="card">
          <span className="eyebrow accent">01</span>
          <h4 style={{marginTop:8}}>Start at the beginning and walk forward.</h4>
          <p>If you have an hour, click through page by page. The order is intentional, from "what is this thing" through recognition, diagnosis, treatment, work, money, relationships, and the harder topics. The arrow keys on a keyboard work, the buttons at the bottom work, your phone's swipe works.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">02</span>
          <h4 style={{marginTop:8}}>Skim the next page, jump to what you need.</h4>
          <p>The next page is "If you only read one page", the eight things that matter most. Read that, then use the chapter drawer (the menu icon top-right) to jump straight to whatever is most pressing. Diagnostic process, medication, work, money, the harder topics, they all stand on their own.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">03</span>
          <h4 style={{marginTop:8}}>Use the action pages.</h4>
          <p>Two pages do something rather than say something. The <strong>Fast Track GP letter generator</strong> writes a letter to your GP requesting an NHS Right to Choose referral. The <strong>Write to your MP</strong> page writes a letter pushing for ADHD-care reform. Both take 90 seconds. Both are the reason this playbook exists.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">04</span>
          <h4 style={{marginTop:8}}>Send it to someone.</h4>
          <p>If you have already read it and someone you know is at the start of this, the most useful thing you can do is forward them the link. There is also a page specifically for partners, parents and friends, in chapter 9. They do not have to read everything to be useful to you.</p>
        </div>
      </div>

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>Wayfinding</h3>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:14, marginBottom:28}}>
        <div className="card">
          <h4>The page counter at the bottom.</h4>
          <p>Tells you where you are out of 73. The top bar shows the current chapter and page title. You are never lost, you are just somewhere specific.</p>
        </div>
        <div className="card">
          <h4>The drawer.</h4>
          <p>The menu icon in the top-right opens a full table of contents, grouped by chapter, colour-coded. Click any title to jump straight there.</p>
        </div>
        <div className="card">
          <h4>The keyboard.</h4>
          <p>Left and right arrow keys turn pages. Useful if you are scrolling on a laptop. On phone, swipe or tap the arrow buttons at the bottom.</p>
        </div>
        <div className="card">
          <h4>Saving and printing.</h4>
          <p>Your browser's "Save as PDF" or "Print" will produce a clean, single-column, printable copy of the entire playbook. Useful if you want a paper version, or to share offline.</p>
        </div>
      </div>

      <div className="disclaim">
        <strong>One last thing.</strong> This playbook is free, built by people in the UK ADHD community, and updated as the NHS pathways change. Nothing here is medical advice, and nothing here replaces a conversation with a clinician. It is a map, not a prescription. Use it like one.
      </div>
    </div>
  );
}

// =================== IF YOU ONLY READ ONE PAGE ===================

function PageSkim() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"#FFE94A", borderColor:"#FFE94A", color:"#1A1814"}}>The skim · 2 minutes</span>
          <h2 style={{marginTop:16}}>If you only read one page.</h2>
          <p className="lede">The eight things from this playbook that matter most. If you read nothing else here, read these. Each one is a door, and the rest of the playbook is what is behind them.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80")}')`}}></div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:20, margin:"32px 0"}}>
        <div className="card">
          <span className="eyebrow accent">01 · You are not lazy</span>
          <h4 style={{marginTop:8}}>ADHD is a neurological difference, not a character flaw.</h4>
          <p>It affects attention regulation, executive function, time perception and emotion. It is one of the most heritable conditions in psychiatry. If you have been told you are lazy, weak, or undisciplined, that has been an explanation for a brain difference no one named correctly. The whole playbook starts here.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">02 · NHS Right to Choose</span>
          <h4 style={{marginTop:8}}>You can be assessed in months, not years, for free.</h4>
          <p>The NHS waiting list for ADHD assessment in some areas is now 8+ years. You do not have to wait. Under "Right to Choose" you can request a referral to a faster NHS-funded provider, free at the point of use. The Fast Track page in this playbook generates the GP letter for you.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">03 · It doesn't look one way</span>
          <h4 style={{marginTop:8}}>If the screener said "low", you may still be ADHD.</h4>
          <p>The classic profile, hyperactive boy, was built on a narrow sample. Late-diagnosed women, masked presentations, the quietly-inattentive, AuDHD, marginalised adults, all get missed routinely. Chapter 1 covers all of these. Score low and still recognise yourself, take that seriously.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">04 · Medication helps most people</span>
          <h4 style={{marginTop:8}}>And the first two weeks are not always the final answer.</h4>
          <p>About 70 to 80 percent of adults respond well to stimulant medication. The first stimulant you try may not be the right one, the first dose probably won't be the right dose, and shared care with your GP is the long-term goal. The Meds chapter walks through all of it honestly.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">05 · Work has rights</span>
          <h4 style={{marginTop:8}}>ADHD is a disability under the Equality Act 2010.</h4>
          <p>You are entitled to reasonable adjustments. Access to Work will fund coaching, equipment and adjustments up to roughly £69,000 over five years. Most ADHDers don't know either of these things exist. The Work chapter is the cheat sheet.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">06 · The grief is real</span>
          <h4 style={{marginTop:8}}>Most late-diagnosed adults mourn the years they lost.</h4>
          <p>It is normal, it is allowed, and it tends to pass faster when you let yourself feel it rather than skipping straight to productivity. Shame and grief are different things, and the playbook covers both. You are not behind, you are on the timeline you actually lived.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">07 · You are not alone</span>
          <h4 style={{marginTop:8}}>There is a UK ADHD community, and it is good.</h4>
          <p>ADHD Babes, Sistas with ADHD, ADHD UK, r/ADHDUK, AuDHD spaces, the loneliness eases significantly when you find one or two people whose brains work like yours. The community has been doing the work the system has not been doing. Find your corner of it.</p>
        </div>
        <div className="card">
          <span className="eyebrow accent">08 · The two action moments</span>
          <h4 style={{marginTop:8}}>The Fast Track letter, and the MP letter.</h4>
          <p>Two pages in this playbook ask you to do something rather than read something. The first gets you seen. The second is how the system changes. Both take 90 seconds. Both matter. If reading the rest of the playbook feels like too much today, do those two things and come back later.</p>
        </div>
      </div>

      <div className="disclaim">
        <strong>That is the playbook in one page.</strong> If you want to go deeper on any of the eight, the chapter drawer (top right) will take you straight to the relevant pages. If you want to read everything in order, the right arrow at the bottom of the screen will take you through it. There is no wrong way to use this.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_INTRO = [
  { ch: "self", title: "How to use this playbook", render: () => <PageHowToUse /> },
  { ch: "self", title: "If you only read one page", render: () => <PageSkim /> },
];
