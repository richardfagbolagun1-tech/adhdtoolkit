// Untangle Playbook , Extras: RSD/women/shame/co-occur chapter + Books & Apps + FAQ
const { useState: useS4 } = React;

function PageNotOneWayIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Read this if you didn't see yourself</span>
          <h2 style={{marginTop:16}}>ADHD doesn't look one way.</h2>
          <p className="lede">The screener catches one shape of ADHD. If yours is quieter, hormonal, or wrapped in shame, you can score "low" and still be ADHD. Over the next four pages we cover the four most common reasons people get missed.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-12-adhd.jpg')`}}></div>
      </div>
      <div className="intro-block">
        <p><strong>Why this chapter exists.</strong> About 50% of the people who read a "10 signs of ADHD" article and walk away thinking "that's not me" actually do have ADHD. The default picture is a hyperactive boy at age 8. If you are a woman, were diagnosed with anxiety first, or have spent decades quietly compensating, you may have been missed for years.</p>
        <p>Each of the next four pages takes one shape of ADHD that gets overlooked. Read the ones that feel relevant. Skip the ones that don't.</p>
      </div>
    </div>
  );
}

function PageLateWomen() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Late-diagnosed women</span>
      <h2 style={{marginTop:16}}>The masked version.</h2>
      <p className="lede">Women are diagnosed on average 8 years later than men. The symptoms are quieter, internal restlessness, perfectionism, people-pleasing, exhaustion at 4pm. You learned to mask early, and the mask worked, until it didn't.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-13-masked.jpg')`, backgroundPosition:"center top"}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card">
          <span className="eyebrow muted">What it looks like</span>
          <h4 style={{marginTop:10, fontSize:20}}>The high-functioning collapse</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You held it together through school, university, even your twenties. Then a baby, a promotion, perimenopause, or one too many demands tipped you over. Suddenly you cannot do the basics. People say you have "burnout". Actually you have spent twenty years compensating for something nobody named.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">The hormone link</span>
          <h4 style={{marginTop:10, fontSize:20}}>Why your 40s feel different</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Oestrogen modulates dopamine. As oestrogen drops in perimenopause, ADHD symptoms intensify. If you suddenly cannot cope at 42, you might have been ADHD the whole time, and your hormones just stopped covering for it.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">Signs you might have missed</span>
          <h4 style={{marginTop:10, fontSize:20}}>The quieter clues</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Chronic lateness. Inbox of 14,000. Cancelling at the last minute because the thought of going feels impossible. Crying in the car park. Hyperfixating on hobbies for 8 weeks then never touching them again. Forgetting birthdays of people you love.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">What helps</span>
          <h4 style={{marginTop:10, fontSize:20}}>Where to start</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Read Sari Solden's "Women with ADHD" or "A Radical Guide". Listen to the ADHD Women's Wellbeing Podcast (UK). When you see your GP, mention specifically that symptoms have worsened with hormonal changes. Push for a specialist who understands women's presentation.</p>
        </div>
      </div>
    </div>
  );
}

function PageRSD() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Rejection Sensitive Dysphoria</span>
      <h2 style={{marginTop:16}}>The thing no GP mentions.</h2>
      <p className="lede">Roughly 99% of ADHDers feel a physical pain response to perceived rejection or criticism. A short text reply. A friend cancelling plans. A side-eye in a meeting. It feels like grief, lasts hours, and you cannot talk yourself out of it. RSD is not in the DSM, but it is real, and naming it changes everything.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-14-rsd-top.jpg')`}}></div>
      </div>
      <div className="quote-block" style={{marginBottom:32}}>
        <div>
          <div className="q">RSD is not in any clinical manual yet, but the research is catching up. It is one of the most consistent things ADHDers describe, and one of the least talked about by clinicians.</div>
          <div className="attr">Source: Dodson, Brown & Hallowell, peer-reviewed work on emotional dysregulation in ADHD</div>
        </div>
        <div className="photo" style={{backgroundImage:`url('assets/page-14-rsd-bottom.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card">
          <span className="eyebrow muted">What it feels like</span>
          <h4 style={{marginTop:10, fontSize:20}}>The physical hit</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A stomach drop. A wave of heat. The next two hours you cannot focus, you replay the moment, you draft and delete messages. People without RSD experience criticism. You experience criticism as a wound.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">What helps in the moment</span>
          <h4 style={{marginTop:10, fontSize:20}}>The 90-second rule</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Set a timer for 90 seconds. Sit with the sensation. Name it out loud, "this is RSD, this is a feeling, not a fact". Do not respond, do not reply, do not draft. After 90 seconds you can think again. Reply tomorrow.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">What helps over time</span>
          <h4 style={{marginTop:10, fontSize:20}}>Medication can blunt it</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Many people find stimulant medication and/or guanfacine takes the edge off. Some clinicians prescribe a low-dose SSRI alongside ADHD meds specifically for RSD. Ask. This is one of the most underdiscussed parts of ADHD treatment.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">What to remember</span>
          <h4 style={{marginTop:10, fontSize:20}}>You are not too sensitive</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You are wired to feel rejection more intensely. That is a feature of an ADHD nervous system, not a character flaw. The people who love you do not need you to feel less. They need you to know that the feeling is the symptom, not the truth.</p>
        </div>
      </div>
    </div>
  );
}

function PageCoOccur() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Co-occurring conditions</span>
      <h2 style={{marginTop:16}}>The double diagnosis.</h2>
      <p className="lede">If you have been diagnosed with anxiety, depression or autism and the treatment never quite worked, untreated ADHD may be the missing piece. Half of ADHDers also have anxiety. Forty per cent have depression. Roughly 30% are also autistic. The NHS routinely treats the surface and misses the cause.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80")}')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card">
          <span className="eyebrow muted">~50% of ADHDers</span>
          <h4 style={{marginTop:10, fontSize:20}}>Anxiety</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>If you have been on SSRIs for years and they take the edge off but never feel like the answer, ask about ADHD. Anxiety is often the brain's response to a life of missed deadlines, last-minute panics and not knowing why you cannot just do the thing.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">~40% of ADHDers</span>
          <h4 style={{marginTop:10, fontSize:20}}>Depression</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A lifetime of underachievement, broken promises to yourself and shame breeds depression. If your depression lifts when you have a deadline and crashes when life goes quiet, that is an ADHD-shaped depression.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">~30% of ADHDers</span>
          <h4 style={{marginTop:10, fontSize:20}}>Autism (AuDHD)</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>The internal contradiction of needing routine and getting bored of routine. Hating change and craving novelty. Wanting people and being drained by them. AuDHD is increasingly recognised. Specialist assessments are worth pushing for if you suspect both.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">~30-40% of ADHDers</span>
          <h4 style={{marginTop:10, fontSize:20}}>Dyslexia, dyspraxia, dyscalculia</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>The "neurodivergent cluster". If reading, writing, balance or numbers have always been disproportionately hard, a Specific Learning Difficulty assessment is worth doing alongside ADHD. DSA funding can cover it for students.</p>
        </div>
      </div>
      <div className="disclaim" style={{marginTop:32}}>
        <strong>The most common NHS mistake.</strong> Treating the anxiety or depression while the underlying ADHD is missed. If years of therapy and antidepressants have not shifted things, that is data. Bring it to your GP. Your treatment plan should cover the whole picture.
      </div>
    </div>
  );
}

function PageShame() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · The shame piece</span>
      <h2 style={{marginTop:16}}>You are not broken.</h2>
      <p className="lede">Most undiagnosed ADHDers arrive at 35 carrying a quiet conviction that they are lazy, stupid, or weak. You are none of those things. You have been running a marathon in flip-flops while everyone else had trainers. Diagnosis is the trainers.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-16-treat-yourself.jpg')`}}></div>
      </div>
      <div className="quote-block" style={{marginBottom:32, display:"none"}}>
        <div>
          <div className="q">If you spent decades thinking you were the problem, please know, you were not. You were running a system designed for somebody else's wiring. The tools in this playbook are yours now.</div>
          <div className="attr">A message from Untangle</div>
        </div>
        <div className="photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80")}')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18}}>
        <div className="card">
          <span className="eyebrow muted">Reframe 01</span>
          <h4 style={{marginTop:10, fontSize:19}}>You're not lazy.</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You have a brain that struggles to bridge intention and action, that's a wiring thing, not a moral thing. Everyone else is walking across a footbridge. You're being asked to swim. The fact that you sometimes can't face the water doesn't make you lazy. It makes you tired.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">Reframe 02</span>
          <h4 style={{marginTop:10, fontSize:19}}>You're not stupid.</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Forgetting where you put your keys ten seconds ago isn't a measure of intelligence, it's a quirk of working memory. You've spent your whole life solving problems other people never noticed, like how to look like you're listening when your brain wandered off three minutes ago. That's not stupid. That's quietly impressive.</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">Reframe 03</span>
          <h4 style={{marginTop:10, fontSize:19}}>You're not weak.</h4>
          <p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You've been carrying something heavy for a long time without anyone telling you it was heavy. No diagnosis, no map, no manual, just you trying your best. Whatever you've managed to build, a job, relationships, kids, a degree, you built it on hard mode. That's the opposite of weak.</p>
        </div>
      </div>
      <div className="disclaim" style={{marginTop:32}}>
                <strong>What helps, honestly.</strong> Shame doesn't lift because someone tells you it should. It lifts when you say the thing out loud, to one person, and the world doesn't end. Tell someone who already gets it, a friend who's been diagnosed, a partner who's been patient, a stranger on r/ADHDUK. Read "Driven to Distraction" or "Scattered Minds", they'll make you cry in the good way. The shame doesn't vanish, it just stops running the show.
      </div>
    </div>
  );
}

const BOOKS = [
  { t: "Driven to Distraction", a: "Edward Hallowell & John Ratey", d: "The original, and honestly still the best plain-English book on adult ADHD if you only read one.", c:"#FF5A36", url:"https://www.amazon.co.uk/s?k=Driven+to+Distraction+Hallowell+Ratey&i=stripbooks" },
  { t: "ADHD 2.0", a: "Hallowell & Ratey", d: "The follow-up, with newer research on the default mode network and what modern treatment actually looks like.", c:"#8AB4C8", url:"https://www.amazon.co.uk/s?k=ADHD+2.0+Hallowell+Ratey&i=stripbooks" },
  { t: "Scattered Minds", a: "Gabor Maté", d: "A trauma-informed view that's controversial in places, but readers tend to find it quietly transformative.", c:"#9FB89A", url:"https://www.amazon.co.uk/s?k=Scattered+Minds+Gabor+Mate&i=stripbooks" },
  { t: "Women with ADHD", a: "Sari Solden", d: "The foundational text for late-diagnosed women, and the one most often passed between friends after a 4am Google session.", c:"#E8B948", url:"https://www.amazon.co.uk/s?k=Women+with+ADHD+Sari+Solden&i=stripbooks" },
  { t: "A Radical Guide for Women with ADHD", a: "Sari Solden", d: "The practical companion to Solden's first book, more workbook than read, and the better starting point if you want something to do.", c:"#6B4D7A", url:"https://www.amazon.co.uk/s?k=A+Radical+Guide+for+Women+with+ADHD&i=stripbooks" },
  { t: "Smart but Stuck", a: "Thomas Brown", d: "For the high-achievers who cannot understand why they keep 'failing' at things that should be easy. This is the book that names it.", c:"#FF5A36", url:"https://www.amazon.co.uk/s?k=Smart+but+Stuck+Thomas+Brown&i=stripbooks" },
];

const APPS = [
  { t: "Focusmate", d: "Virtual body doubling in 50-minute sessions, three a week on the free plan. Often the single most life-changing app on this list.", f:"Free / £5mo", url:"https://www.focusmate.com" },
  { t: "Routinery", d: "Morning and bedtime routines broken into small tappable steps, so your brain doesn't have to make the decisions when it's offline.", f:"Free / £4mo", url:"https://routinery.app" },
  { t: "Tiimo", d: "A visual day planner built by and for neurodivergent people, with the UK clock and UK sensibilities baked in.", f:"£8mo", url:"https://www.tiimoapp.com" },
  { t: "Brain.fm", d: "Focus music engineered specifically for ADHD attention, and yes, it really does work for a lot of people.", f:"£7mo", url:"https://www.brain.fm" },
  { t: "Goblin Tools", d: "An AI that takes 'one big scary task' and breaks it into baby steps you can actually start. Free, simple and brilliant.", f:"Free", url:"https://goblin.tools" },
  { t: "Bearable", d: "Track mood, sleep, meds and symptoms in one place, and spot the patterns that emerge over weeks.", f:"Free / £4mo", url:"https://bearable.app" },
  { t: "Finch", d: "A self-care pet that depends on you doing small things. Stupidly effective for ADHD brains that need a reason outside themselves.", f:"Free", url:"https://finchcare.com" },
  { t: "Sunsama", d: "A daily planner that gently forces realistic time-boxing, especially good if you work from home and lose whole afternoons.", f:"£16mo", url:"https://www.sunsama.com" },
];

function PageBooksApps() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip">Chapter 4 · The toolkit</span>
          <h2 style={{marginTop:16}}>Books and apps.</h2>
          <p className="lede">None of these are sponsored and we don't earn anything if you buy them. They're the titles and apps that our community keeps recommending to each other when someone new joins the chat asking, "where do I even start?"</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-47-books.jpg')`}}></div>
      </div>
      <h3 style={{fontSize:24, marginTop:16, marginBottom:14}}>Books</h3>
      <p style={{fontSize:14, color:"var(--muted)", marginBottom:16, maxWidth:640}}>Tap any cover to open the title on Amazon UK. We're not paid for any of these.</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14}}>
        {BOOKS.map((b,i) => (
          <a key={i} href={b.url} target="_blank" rel="noopener" className="card" style={{borderTop:`6px solid ${b.c}`, textDecoration:"none", color:"inherit", display:"flex", flexDirection:"column", gap:8}}>
            <span className="eyebrow muted">{b.a}</span>
            <h4 style={{marginTop:0, fontSize:19}}>{b.t}</h4>
            <p style={{marginTop:4, fontSize:14, color:"var(--ink-2)", lineHeight:1.5}}>{b.d}</p>
            <span style={{fontFamily:"var(--mono)", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--accent)", marginTop:"auto", paddingTop:12, borderTop:"1px solid var(--line-soft, var(--line))"}}>Find on Amazon →</span>
          </a>
        ))}
      </div>
      <h3 style={{fontSize:24, marginTop:36, marginBottom:14}}>Apps</h3>
      <p style={{fontSize:14, color:"var(--muted)", marginBottom:16, maxWidth:640}}>Tap any card to open the app's website, where the App Store / Google Play links sit.</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14}}>
        {APPS.map((a,i) => (
          <a key={i} href={a.url} target="_blank" rel="noopener" className="card" style={{padding:"20px", textDecoration:"none", color:"inherit", display:"flex", flexDirection:"column", gap:8}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:8}}>
              <h4 style={{fontSize:18}}>{a.t}</h4>
              <span style={{fontFamily:"var(--mono)", fontSize:10, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--muted)"}}>{a.f}</span>
            </div>
            <p style={{marginTop:4, fontSize:14, color:"var(--ink-2)", lineHeight:1.5}}>{a.d}</p>
            <span style={{fontFamily:"var(--mono)", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--accent)", marginTop:"auto", paddingTop:12}}>Open →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

const FAQS = [
  { q: "Is ADD different from ADHD?", a: "No, ADD was the old name. The current diagnosis is ADHD, and there are three presentations under that umbrella: inattentive (which is what used to be called ADD), hyperactive-impulsive, and combined." },
  { q: "Can you grow out of ADHD?", a: "You don't grow out of it. The hyperactivity often softens with age, but the executive function and emotional regulation pieces tend to stay with you. About 65% of children with ADHD still meet the criteria as adults, and the rest still carry traces, they've just learned to adapt." },
  { q: "Will medication change my personality?", a: "No, and when it works, people describe feeling more themselves, not less. If you ever feel flattened or anxious on it, that's a signal that the dose or the molecule is wrong, so please ask to adjust rather than pushing through." },
  { q: "Do I need a diagnosis to use the tools in this playbook?", a: "Absolutely not. Body doubling, dopamine menus, accommodations at work, none of these need a piece of paper to start helping. Self-knowledge is genuinely enough." },
  { q: "Is ADHD over-diagnosed?", a: "In the UK it's heavily under-diagnosed, the opposite problem. Around 2.6 million adults are estimated to have it and perhaps 200,000 have a formal diagnosis. The 'over-diagnosis' panic is mostly a US conversation, and mostly about children." },
  { q: "Should I tell my employer?", a: "Only if it actually benefits you. Disclosure unlocks legal protections under the Equality Act 2010 and the right to reasonable adjustments, and it can't be used to fire you. But if you don't need adjustments, you don't have to disclose, that's your call to make." },
  { q: "Is private diagnosis taken seriously by the NHS?", a: "Legally yes, any GMC-registered psychiatrist can diagnose ADHD. In practice, some GPs refuse 'shared care' (the bit where they take over prescribing meds at NHS prices after a private diagnosis), so it's worth checking before you pay. Psychiatry-UK and ADHD-360 tend to have the smoothest shared-care paths." },
  { q: "Will I be a different person on medication?", a: "You'll be a calmer, more focused version of yourself, no more, no less. Most people describe their first day on the right dose as the quietest their brain has ever been. That isn't a personality change, that's relief." },
];

function PageFAQ() {
  const [open, setOpen] = useS4(0);
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip">Chapter 9 · FAQ</span>
          <h2 style={{marginTop:16}}>The questions we all ask.</h2>
          <p className="lede">The ones that come up most often in DMs, in forums, and at 3am Google sessions. Honest answers, no hedging, no fluff. If your question isn't here, the glossary or charities page probably points at it.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-70-conference.jpg')`}}></div>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:8, maxWidth:820}}>
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
  );
}

function PageIceberg() {
  const ABOVE = [
    { x: 200, y: 168, label: "Procrastination" },
    { x: 360, y: 130, label: "Forgetfulness" },
    { x: 510, y: 168, label: "Fidgeting" },
    { x: 640, y: 145, label: "Interrupting" },
    { x: 280, y: 215, label: "Losing things" },
    { x: 560, y: 215, label: "Restlessness" },
  ];
  const BELOW = [
    "Time blindness — the genuine inability to feel how long things take",
    "Rejection sensitivity — physical pain at the smallest perceived rejection",
    "Emotional dysregulation — feelings 2 to 3 times the size of the moment",
    "Masking — exhausting performance of appearing 'normal' all day, every day",
    "Executive dysfunction — the bridge between knowing and doing keeps collapsing",
    "Sensory overload — fluorescent lights, certain fabrics, supermarkets are loud",
    "Hyperfixation — six hours into a thing and you forgot to eat or pee",
    "Decision paralysis — eight tabs open, three meals considered, one chosen at 9pm",
    "Perfectionism — the freeze when 'good enough' isn't a feeling you've ever felt",
    "Demand avoidance — the harder you push yourself, the more your brain refuses",
    "Shame loops — replaying that one thing from 2014 at 3am for the 400th time",
    "Object permanence with people — out of sight is, briefly, out of existence",
  ];

  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · Recognition</span>
          <h2 style={{marginTop:16}}>The ADHD iceberg.</h2>
          <p className="lede">If you have only ever heard ADHD described as "trouble concentrating" and "can't sit still", you have only ever heard about the tip. What people see at school, at work, in your relationships, is a tiny fraction of what ADHD is actually doing inside you. The rest is below the waterline, and the rest is the bit that hurts.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1551405780-03882d5a2ba7?w=900&q=80")}')`}}></div>
      </div>

      <div style={{background:"linear-gradient(180deg, #DDE9F0 0%, #DDE9F0 38%, #2C5FCC 38.5%, #1E3F8F 100%)", borderRadius:18, padding:"32px 24px 40px", margin:"8px 0 28px", position:"relative", overflow:"hidden"}}>
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
          </defs>
          {ABOVE.map((a,i) => (
            <g key={i}>
              <line x1={a.x} y1={a.y+6} x2={a.x} y2={245} stroke="#0E1A1F" strokeOpacity="0.35" strokeDasharray="2 4" strokeWidth="1"/>
              <text x={a.x} y={a.y} textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="14" fontWeight="500" fill="#1F2A33">{a.label}</text>
            </g>
          ))}
          <line x1="0" y1="280" x2="800" y2="280" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="3 6"/>
          <text x="780" y="276" textAnchor="end" fontFamily="Outfit, system-ui, sans-serif" fontSize="11" fill="#1F2A33" letterSpacing="2">WATERLINE</text>
          <path d="M 340 280 L 460 280 L 480 250 L 460 250 L 470 230 L 440 230 L 450 215 L 420 215 L 410 235 L 395 220 L 380 245 L 360 230 L 350 255 L 335 250 Z" fill="url(#icetop)" stroke="#1F2A33" strokeOpacity="0.3"/>
          <path d="M 340 280 L 460 280 L 540 360 L 590 480 L 540 540 L 380 555 L 220 510 L 200 420 L 260 340 Z" fill="url(#icebot)" stroke="#1F2A33" strokeOpacity="0.2"/>
          <path d="M 340 290 L 380 320 M 460 290 L 420 330 M 280 380 L 350 420 M 520 400 L 460 450" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" fill="none"/>
          <text x="400" y="238" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1F2A33">What people see</text>
          <text x="400" y="430" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="17" fontWeight="500" fill="#FBFCFD">What is actually</text>
          <text x="400" y="455" textAnchor="middle" fontFamily="Outfit, system-ui, sans-serif" fontSize="17" fontWeight="500" fill="#FBFCFD">happening</text>
        </svg>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14, marginBottom:24}}>
        {BELOW.map((b,i) => (
          <div key={i} className="card" style={{padding:"16px 20px", fontSize:14.5, color:"var(--ink-2)", lineHeight:1.55}}>
            <span style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--accent)", letterSpacing:"0.08em", marginRight:8}}>{String(i+1).padStart(2,"0")}</span>{b}
          </div>
        ))}
      </div>

      <div className="disclaim">
        If reading that list made your stomach drop in recognition, you are in the right place. The iceberg is the single most-shared image in adult ADHD spaces for one reason, the moment you see all of it laid out, you stop wondering why everyone else seems to be doing life on easier difficulty. They are. You have been swimming with most of an iceberg underneath you, alone, your whole adult life.
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
