// Untangle Playbook , Extras: RSD/women/shame/co-occur chapter + Books & Apps + FAQ
const { useState: useS4 } = React;

function PageNotOneWayIntro() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Read this if you didn't see yourself</span>
          <h2 style={{marginTop:16}}>ADHD doesn't look one way.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">The screener is useful, but it does not capture every way ADHD can present. A low result does not diagnose ADHD. If you have long-standing difficulties that affect daily life, you can still discuss them with a qualified clinician. Over the next four pages we cover the four most common reasons people get missed.</p>
          <div className="intro-block">
            <p><strong>Why this chapter exists.</strong> Older stereotypes of ADHD centred on visibly hyperactive boys, which may have contributed to some people being overlooked. If you are a woman, were diagnosed with anxiety first, or have spent decades compensating, you may have been missed for years.</p>
            <p>Each of the next four pages takes one shape of ADHD that gets overlooked. Read the ones that feel relevant. Skip the ones that don't.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-12-adhd.webp')`}}></div>
      </div>
    </div>
  );
}

function PageLateWomen() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Late-diagnosed women</span>
      <h2 style={{marginTop:16}}>The masked version.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">Women are often diagnosed years later than men, because the signs are quieter: inner restlessness, perfectionism, people-pleasing, exhaustion by 4pm. Many learn to mask early, and it holds until the load gets too big, often around a new job, a baby or perimenopause.</p>
            <PBSlider items={[
              {h:"The high-functioning collapse", p:"You coped through school, university and your twenties. Then a baby, a new job, perimenopause or one demand too many, and suddenly the basics feel impossible. People call it burnout. Often it is ADHD you have been working around for years without knowing."},
              {h:"Why your 40s feel different", p:"Oestrogen affects dopamine, one of the brain chemicals linked to ADHD. When oestrogen drops in perimenopause, ADHD symptoms often get worse. If you suddenly can't cope in your 40s, you may have had ADHD all along, and your hormones were helping you manage it."},
              {h:"The quieter clues", p:"You are often late. Your inbox has thousands of unread emails. You cancel plans at the last minute because going feels impossible. You get absorbed in a hobby for weeks, then never touch it again. You forget the birthdays of people you love."},
              {h:"Where to start", p:"Sari Solden's book Women with ADHD is a good place to start, and so is the ADHD Women's Wellbeing Podcast from the UK. When you see your GP, say if your symptoms have got worse with hormonal changes. Ask for a specialist who understands how ADHD shows up in women."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-13-masked.webp')`, backgroundPosition:"center top"}}></div>
      </div>
    </div>
  );
}

function PageRSD() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Rejection Sensitive Dysphoria</span>
      <h2 style={{marginTop:16}}>When rejection feels bigger than the moment.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
      <p className="lede">Many adults with ADHD describe rejection or criticism as physically painful. It might be a short text reply, a friend cancelling plans or a look in a meeting. The feeling can last for hours, and it is hard to talk yourself out of it. RSD is a commonly used community term, not a formal diagnosis in diagnostic manuals. Having a name for it can make it easier to explain to people close to you.</p>
            <PBSlider items={[
              {h:"The physical hit", p:"Your stomach drops and you feel hot. For the next couple of hours you can't focus, and you replay the moment and write and delete messages."},
              {h:"The 90-second rule", p:"Set a timer for 90 seconds. Notice the feeling. Name it out loud, \"this is RSD, this is a feeling, not a fact\". Do not respond, do not reply, do not draft. After 90 seconds you can think again. Reply tomorrow."},
              {h:"Treatment may help", p:"Some people find that treating ADHD or co-occurring conditions reduces the intensity. Discuss what you are experiencing with a clinician."},
              {h:"If you have been called too sensitive", p:"ADHD can make rejection feel more intense. It helps to remember that the feeling is a symptom. It does not mean the rejection is real."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-14-rsd-top.webp')`}}></div>
      </div>
      <div className="quote-block" style={{marginBottom:32}}>
        <div>
          <div className="q">RSD is a commonly used community term, rather than a formal diagnosis. If intense reactions to rejection or criticism are affecting your life, it is worth discussing them with a clinician. It is one of the most consistent things ADHDers describe, and one of the least talked about by clinicians.</div>
          <div className="attr">Source: Dodson, Brown & Hallowell, peer-reviewed work on emotional dysregulation in ADHD</div>
        </div>
        <div className="photo" style={{backgroundImage:`url('assets/page-14-rsd-bottom.webp')`}}></div>
      </div>
    </div>
  );
}

function PageCoOccur() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Co-occurring conditions</span>
      <h2 style={{marginTop:16}}>The double diagnosis.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">If you have been treated for anxiety or depression and it never quite helped, ADHD may be part of the picture. Anxiety and depression are among the most common conditions alongside ADHD, and many adults with ADHD are also autistic. ADHD is often missed when anxiety or depression are treated first.</p>
            <PBSlider items={[
              {h:"Anxiety", p:"If you have taken antidepressants for years and they help a bit but never enough, ask about ADHD. Anxiety can build up after years of missed deadlines, last-minute panics and not knowing why simple tasks feel so hard."},
              {h:"Depression", p:"Years of falling short, breaking promises to yourself and feeling ashamed can lead to depression. If your mood lifts when you have a deadline and drops when life goes quiet, that pattern is common with ADHD."},
              {h:"Autism (AuDHD)", p:"You might need routine and get bored of it, hate change and crave new things, or want company and find it draining. This mix is known as AuDHD. If you think you have both, ask for an assessment that covers both."},
              {h:"Dyslexia, dyspraxia, dyscalculia", p:"These often come with ADHD. If reading, writing, balance or numbers have always been much harder for you than for others, ask about a Specific Learning Difficulty assessment. Students can get this paid for through DSA."},
            ]} />
            <div className="disclaim">
              <strong>When another difficulty may be hiding ADHD.</strong> Treating the anxiety or depression while the underlying ADHD is missed. If years of therapy and antidepressants have not helped, tell your GP. It is a reason to consider ADHD.
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/pill-organiser-week.webp')`, backgroundPosition:"70% center"}}></div>
      </div>
    </div>
  );
}

function PageShame() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · The shame piece</span>
      <h2 style={{marginTop:16}}>Shame and ADHD.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">Many people spend years thinking they are lazy, careless or not trying hard enough. If that feels familiar, you are not alone, and it does not mean there is something wrong with you as a person. It can feel like running a marathon in flip-flops while everyone else has trainers.</p>
            <PBSlider items={[
              {h:"If you have been called lazy.", p:"Many people with ADHD describe a frustrating gap between intention and action. If you sometimes can't face a task, that is often exhaustion, not laziness."},
              {h:"If you have been called stupid.", p:"Forgetting where you put your keys ten seconds ago is about working memory, not intelligence. You have spent years solving problems other people never noticed, such as looking like you are listening when your mind wandered off minutes ago. That takes skill."},
              {h:"If you have been called weak.", p:"You've been carrying something heavy for a long time without anyone telling you it was heavy. No diagnosis, no map, no manual, just you trying your best. Whatever you've managed to build, a job, relationships, kids, a degree, you built it on hard mode."},
            ]} />
            <div className="disclaim">
                      <strong>What helps.</strong> For many people, shame eases a little when they tell one person and it goes better than they feared. Tell someone who already gets it, a friend who's been diagnosed, a partner who's been patient, a stranger on r/ADHDUK. Read "Driven to Distraction" or "Scattered Minds". The shame won't vanish, but it gets quieter.
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-16-treat-yourself.webp')`}}></div>
      </div>
      <div className="quote-block" style={{marginBottom:32, display:"none"}}>
        <div>
          <div className="q">If you spent decades thinking you were the problem, you were not. You were running a system designed for somebody else's wiring. The tools in this playbook are yours now.</div>
          <div className="attr">A message from Untangle</div>
        </div>
        <div className="photo" style={{backgroundImage:`url('${"assets/shame-mug.webp"}')`}}></div>
      </div>
    </div>
  );
}

const BOOKS = [
  { t: "Driven to Distraction", a: "Edward Hallowell & John Ratey", d: "A long-standing, plain-English book on adult ADHD, and a good one to start with.", c:"#FF5A36", url:"https://www.amazon.co.uk/s?k=Driven+to+Distraction+Hallowell+Ratey&i=stripbooks" },
  { t: "ADHD 2.0", a: "Hallowell & Ratey", d: "The follow-up, with newer research on the default mode network and what modern treatment looks like.", c:"#8AB4C8", url:"https://www.amazon.co.uk/s?k=ADHD+2.0+Hallowell+Ratey&i=stripbooks" },
  { t: "Scattered Minds", a: "Gabor Maté", d: "It looks at ADHD through trauma. Some of its ideas are debated, but many readers find it helpful.", c:"#9FB89A", url:"https://www.amazon.co.uk/s?k=Scattered+Minds+Gabor+Mate&i=stripbooks" },
  { t: "Women with ADHD", a: "Sari Solden", d: "The foundational text for late-diagnosed women, and the one most often passed between friends after a 4am Google session.", c:"#E8B948", url:"https://www.amazon.co.uk/s?k=Women+with+ADHD+Sari+Solden&i=stripbooks" },
  { t: "A Radical Guide for Women with ADHD", a: "Sari Solden", d: "The practical companion to Solden's first book, more workbook than read, and the better starting point if you want something to do.", c:"#6B4D7A", url:"https://www.amazon.co.uk/s?k=A+Radical+Guide+for+Women+with+ADHD&i=stripbooks" },
  { t: "Smart but Stuck", a: "Thomas Brown", d: "For the high-achievers who cannot understand why they keep 'failing' at things that should be easy. This is the book that names it.", c:"#FF5A36", url:"https://www.amazon.co.uk/s?k=Smart+but+Stuck+Thomas+Brown&i=stripbooks" },
];

const APPS = [
  { t: "Focusmate", d: "Online body doubling in 50-minute sessions. The free plan gives you three a week. Many people find it the most useful app on this list.", f:"Free / £5mo", url:"https://www.focusmate.com" },
  { t: "Routinery", d: "Breaks morning and bedtime routines into small steps, so you don't have to decide what comes next when you are tired.", f:"Free / £4mo", url:"https://routinery.app" },
  { t: "Tiimo", d: "A visual day planner made by and for neurodivergent people.", f:"£8mo", url:"https://www.tiimoapp.com" },
  { t: "Brain.fm", d: "Music designed to help with focus. Many people with ADHD find it helps.", f:"£7mo", url:"https://www.brain.fm" },
  { t: "Goblin Tools", d: "Breaks a big task into small steps you can start. Free and simple to use.", f:"Free", url:"https://goblin.tools" },
  { t: "Bearable", d: "Tracks your mood, sleep, medication and symptoms in one place, so you can spot patterns over time.", f:"Free / £4mo", url:"https://bearable.app" },
  { t: "Finch", d: "A virtual pet that grows when you do small self-care tasks. It helps if you find it easier to do things for someone else.", f:"Free", url:"https://finchcare.com" },
  { t: "Sunsama", d: "A daily planner that makes you give each task a realistic time slot. Useful if you work from home and lose whole afternoons.", f:"£16mo", url:"https://www.sunsama.com" },
];

function BookSlider() {
  const [i, setI] = useS4(0);
  const b = BOOKS[i];
  return (
    <div className="card pbn-slider" style={{borderTop:`6px solid ${b.c}`}}>
      <span className="eyebrow muted">{b.a}</span>
      <h4 className="pbn-slide-h" style={{marginTop:6}}><span className="pbn-slide-count">{i + 1}/{BOOKS.length}</span> {b.t}</h4>
      <p>{b.d}</p>
      <a href={b.url} target="_blank" rel="noopener" style={{display:"inline-block", marginTop:10, fontSize:13, fontWeight:700, color:"var(--accent)"}}>Find on Amazon</a>
      <div className="pbn-slide-nav">
        <button onClick={() => setI((i - 1 + BOOKS.length) % BOOKS.length)} aria-label="Previous slide">Previous</button>
        <button onClick={() => setI((i + 1) % BOOKS.length)} aria-label="Next slide">Next</button>
      </div>
    </div>
  );
}

function PageBooksApps() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 4 · The toolkit</span>
          <h2 style={{marginTop:16}}>Books and apps.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">None of these are sponsored and we don't earn anything if you buy them. They are the titles and apps people with ADHD recommend most often to someone just starting out.</p>
            <h3 style={{fontSize:22, margin:"24px 0 0"}}>Books</h3>
            <BookSlider />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-47-books.webp')`}}></div>
      </div>
      <h3 style={{fontSize:24, marginTop:36, marginBottom:14}}>Apps</h3>
      <p style={{fontSize:14, color:"var(--muted)", marginBottom:16,}}>Tap any card to open the app's website, where the App Store / Google Play links sit.</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14}}>
        {APPS.map((a,i) => (
          <a key={i} href={a.url} target="_blank" rel="noopener" className="card" style={{padding:"20px", textDecoration:"none", color:"inherit", display:"flex", flexDirection:"column", gap:8}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:8}}>
              <h4 style={{fontSize:18}}>{a.t}</h4>
              <span style={{fontSize:12, fontWeight:700, color:"var(--muted)"}}>{a.f}</span>
            </div>
            <p style={{marginTop:4, fontSize:14, color:"var(--ink-2)", lineHeight:1.5}}>{a.d}</p>
            <span style={{fontSize:13, fontWeight:700, color:"var(--accent)", marginTop:"auto", paddingTop:12}}>Open</span>
          </a>
        ))}
      </div>
    </div>
  );
}

const FAQS = [
  { q: "Is ADD different from ADHD?", a: "ADD was the old name. The diagnosis is now ADHD, and it has three types: inattentive (what used to be called ADD), hyperactive-impulsive, and combined." },
  { q: "Can you grow out of ADHD?", a: "Many people do not grow out of it. Hyperactivity often eases with age, but problems with planning and emotions tend to stay. Research suggests around half to two-thirds of children with ADHD still have it as adults. Others still carry traces and have learned to adapt." },
  { q: "Will medication change my personality?", a: "When medication works, many people say they feel more like themselves. If you feel flat or anxious on it, the dose or the medicine may be wrong. Ask your prescriber to change it." },
  { q: "Do I need a diagnosis to use the tools in this playbook?", a: "No. You can use body doubling, dopamine menus and many work adjustments without a diagnosis." },
  { q: "Is ADHD over-diagnosed?", a: "In the UK, the bigger problem is under-diagnosis. ADHD UK estimates around 2.6 million people in the UK have ADHD, and more than 2 million of them have no diagnosis." },
  { q: "Should I tell my employer?", a: "Only if it helps you. Telling your employer means you can ask for reasonable adjustments under the Equality Act 2010, and it is unlawful to treat you unfairly because of it. If you don't need adjustments, you don't have to tell them." },
  { q: "Is private diagnosis taken seriously by the NHS?", a: "A diagnosis from a qualified specialist is valid. But some GPs refuse shared care, which is when your GP takes over your prescription at NHS prices. Ask your GP practice about their policy before you pay for a private assessment." },
  { q: "Will I be a different person on medication?", a: "No. On the right dose, many people feel calmer and more focused, but still like themselves. Many describe their first day on the right dose as the quietest their mind has ever been." },
];

function PageFAQ() {
  const [open, setOpen] = useS4(0);
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 9 · FAQ</span>
          <h2 style={{marginTop:16}}>The questions we all ask.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <div style={{display:"flex", flexDirection:"column", gap:8}}>
              {FAQS.map((f,i) => (
                <button key={i} onClick={() => setOpen(open === i ? -1 : i)} style={{textAlign:"left", background:"var(--paper)", border:"1px solid var(--line)", borderRadius:14, padding:"18px 22px", cursor:"pointer", color:"var(--ink)", fontFamily:"inherit"}}>
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:14}}>
                    <span style={{fontSize:17, fontWeight:500}}>{f.q}</span>
                    <span style={{fontSize:22, color:"var(--muted)", lineHeight:1}}>{open === i ? "−" : "+"}</span>
                  </div>
                  {open === i && <p style={{marginTop:14, fontSize:15, color:"var(--ink-2)", lineHeight:1.6}}>{f.a}</p>}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-70-conference.webp')`}}></div>
      </div>
    </div>
  );
}

function PageIceberg() {
  const ABOVE = [
    { x: 160, y: 54, label: "Procrastination" },
    { x: 160, y: 114, label: "Forgetfulness" },
    { x: 160, y: 174, label: "Losing things" },
    { x: 640, y: 54, label: "Fidgeting" },
    { x: 640, y: 114, label: "Interrupting" },
    { x: 640, y: 174, label: "Restlessness" },
  ];
  const BELOW = [
    "Time blindness: not being able to feel how long things take",
    "Rejection sensitivity: small rejections can feel physically painful",
    "Emotional dysregulation: feelings much bigger than the moment",
    "Masking: the tiring effort of hiding your ADHD all day",
    "Executive dysfunction: knowing what to do but not being able to start",
    "Sensory overload: bright lights, some fabrics and busy shops feel too much",
    "Hyperfixation: six hours on one thing, and you forgot to eat",
    "Decision paralysis: struggling to choose, even something simple like dinner",
    "Perfectionism: freezing because nothing ever feels good enough",
    "Demand avoidance: the harder you push, the more you resist",
    "Shame loops: replaying old mistakes at 3am",
    "Out of sight, out of mind: forgetting to keep in touch with people you care about",
  ];

  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · Recognition</span>
          <h2 style={{marginTop:16}}>The ADHD iceberg.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you have only ever heard ADHD described as "trouble concentrating" and "can't sit still", you have only ever heard about the tip. What people see at school, at work, in your relationships, is a tiny fraction of what ADHD is doing inside you. Below the waterline are the parts nobody sees: the effort, the shame and the exhaustion.</p>
            <div style={{borderRadius:18, margin:"20px 0 0", position:"relative", overflow:"hidden"}}>
              <svg viewBox="0 0 800 560" style={{width:"100%", height:"auto", display:"block"}} aria-label="ADHD iceberg diagram">
                <defs>
                  <linearGradient id="icetop" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FBFCFD"/>
                    <stop offset="100%" stopColor="#C9D4DC"/>
                  </linearGradient>
                  <linearGradient id="icebot" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#A4BAC9" stopOpacity="0.95"/>
                    <stop offset="50%" stopColor="#6E8AA0" stopOpacity="0.85"/>
                    <stop offset="100%" stopColor="#3C5A78" stopOpacity="0.75"/>
                  </linearGradient>
                  <linearGradient id="icewater" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2C5FCC"/><stop offset="100%" stopColor="#1E3F8F"/></linearGradient>
          </defs>
          <rect x="0" y="0" width="800" height="280" fill="#DDE9F0"/>
          <rect x="0" y="280" width="800" height="280" fill="url(#icewater)"/>
                {ABOVE.map((a,i) => (
            <g key={i}>
              <rect x={a.x - (a.label.length*8.6+22)} y={a.y-34} width={a.label.length*17.2+44} height={48} rx={24} fill="#fff" stroke="#0E1A1F" strokeOpacity="0.15"/>
              <text x={a.x} y={a.y} textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="32" fontWeight="700" fill="#0E1A1F">{a.label}</text>
            </g>
          ))}
                <line x1="0" y1="280" x2="800" y2="280" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="3 6"/>
                <text x="780" y="276" textAnchor="end" fontFamily="Outfit, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#0E1A1F" letterSpacing="2">WATERLINE</text>
                <path d="M 340 280 L 460 280 L 480 250 L 460 250 L 470 230 L 440 230 L 450 215 L 420 215 L 410 235 L 395 220 L 380 245 L 360 230 L 350 255 L 335 250 Z" fill="url(#icetop)" stroke="#1F2A33" strokeOpacity="0.3"/>
                <path d="M 340 280 L 460 280 L 540 360 L 590 480 L 540 540 L 380 555 L 220 510 L 200 420 L 260 340 Z" fill="url(#icebot)" stroke="#1F2A33" strokeOpacity="0.2"/>
                <path d="M 340 290 L 380 320 M 460 290 L 420 330 M 280 380 L 350 420 M 520 400 L 460 450" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" fill="none"/>
                <text x="400" y="206" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="26" fontWeight="700" fill="#0E1A1F">What people see</text>
                <text x="400" y="420" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="32" fontWeight="700" fill="#FBFCFD">What is actually</text>
                <text x="400" y="462" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="32" fontWeight="700" fill="#FBFCFD">happening</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/iceberg-clothes.webp"}')`}}></div>
      </div>

      <PBSlider items={BELOW.map(b => { const i = b.indexOf(": "); const p = b.slice(i + 2); return i > 0 ? {h: b.slice(0, i), p: p.charAt(0).toUpperCase() + p.slice(1)} : {h: b, p: ""}; })} />

      <div className="disclaim">
        If you recognised much of that list, the rest of this playbook may help. Seeing it all laid out helps explain why daily life has felt harder for you than for others.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF = [
  { ch: "self", title: "The ADHD iceberg", render: () => <PageIceberg /> },
  { ch: "self", title: "Doesn't look one way", render: () => <PageNotOneWayIntro /> },
  { ch: "self", title: "Late-diagnosed women", render: () => <PageLateWomen /> },
  { ch: "self", title: "RSD", render: () => <PageRSD /> },
  { ch: "self", title: "Co-occurring", render: () => <PageCoOccur /> },
  { ch: "self", title: "Shame", render: () => <PageShame /> },
];
window.PB_PAGES_EXTRA_AFTER_TOOLS = [
  { ch: "tools", title: "Books and apps", render: () => <PageBooksApps /> },
];
window.PB_PAGES_EXTRA_BEFORE_END = [
  { ch: "support", title: "FAQ", render: () => <PageFAQ /> },
];
