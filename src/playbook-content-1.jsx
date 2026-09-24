// Untangle Playbook, Chapters 1-3 content (Self-check, Parents, Get tested)
// Each export is an array of page render functions { chapter, render }

const { useState, useMemo } = React;

// =================== CHAPTER 1: COULD I HAVE ADHD? ===================

const SIGNS = [
  { t: "You can hyperfocus for hours, but can't start the email.",
    b: "ADHD attention isn't broken, it's interest-based. Your brain rewards novelty and urgency, not importance. So you can spend nine hours on a hobby project you discovered yesterday, while a fifteen-minute email sits in your drafts for a fortnight. People read this as laziness. It is the opposite, your brain is working overtime trying to manufacture the chemistry needed to start." },
  { t: "Five minutes and two hours feel the same.",
    b: "Time blindness is a documented feature of ADHD. The internal clock that other people use to feel time passing simply runs differently in your head. You are either chronically late because 'I have loads of time' or you arrive two hours early because anxiety took over. Most ADHDers exist in two times only, now and not-now." },
  { t: "You forget what you walked into the room for. Daily.",
    b: "Working memory, the mental whiteboard where you hold information for the next thirty seconds, is leaky in ADHD brains. This is why lists, alarms, sticky notes and visual cues are not optional accessories, they are accessibility tools. Forgetting why you walked into the kitchen does not mean you are losing your mind. It means your kitchen is interesting and the original thought wasn't anchored anywhere." },
  { t: "Half-finished projects everywhere.",
    b: "Starting is dramatic, finishing is rare. ADHD brains get a big dopamine hit at the beginning of something new and the chemistry tails off as the novelty wears down. You probably have a guitar, a half-knitted scarf, a Notion workspace and the first three chapters of a book. None of this is character weakness. It is brain wiring meeting a world that punishes unfinished things." },
  { t: "Small frustrations feel huge.",
    b: "Emotional regulation is part of ADHD, even though the official diagnostic criteria barely mention it. A printer jam can ruin your morning. A short text reply from a friend can spin you into a four-hour grief loop. The volume dial on your feelings has fewer notches than other people's. This is exhausting, and it is not a personality flaw, it is a recognised feature of ADHD called emotional dysregulation." },
  { t: "You fidget. Always.",
    b: "Bouncing leg, pen-clicking, walking laps on phone calls, doom-scrolling while watching TV. The ADHD nervous system needs continuous low-grade input to keep itself regulated. Stillness can feel genuinely uncomfortable. If you have ever 'paid attention better' on a long walk than in a quiet meeting, that is your wiring asking for movement." },
  { t: "You speak first, plan later.",
    b: "Impulsivity is one of the three core ADHD traits. It can show up as cutting people off mid-sentence, online shopping at 1am, agreeing to a holiday you can't afford or handing in your notice in a single afternoon. The gap between thought and action is shorter for you than for most people, which is sometimes brilliant, sometimes catastrophic." },
  { t: "Tired all day, wired at midnight.",
    b: "Delayed sleep phase is hugely common in ADHD, around 75% of adults with it have some form of sleep dysregulation. Your most productive, alive, creative hours are between 10pm and 2am, which is exactly the window when the rest of the world wants you asleep. Mornings are brutal, evenings are alive, and the gap between the two is where ADHD burnout lives." },
  { t: "You think you're 'lazy' or 'broken'.",
    b: "This is the sentence we hear most often from people who turn out to be ADHD. A lifetime of missed deadlines, undelivered promises and quiet underachievement breeds shame, and shame breeds the conclusion that something is wrong with you. There is something different about your brain. Different is not broken. Once you know what you are working with, you can start working with it." },
];

function PageSignsIntro() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip accent">Chapter 1 · Self</span>
          <h2 style={{marginTop:16}}>Could I actually<br/>have <span className="accent">ADHD?</span></h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Take six minutes to walk through the World Health Organisation's Adult ADHD Self-Report Scale, the same starting point most UK GPs use in the room. It cannot diagnose you, nothing online can, but it is a strong, honest signal of whether the rest of this playbook is for you.</p>
          <div className="intro-block">
            <p><strong>The point of this chapter.</strong> By the end, you'll have a clear sense of whether ADHD is worth taking to your GP. We'll show you the nine signs adults most often relate to, run you through the screener, and tell you exactly what to do next.</p>
            <p>It takes about ten minutes. Nothing is saved, nothing is shared. Press next when you're ready.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageSigns() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 1 · Nine signs</span>
          <h2 style={{marginTop:16, marginBottom: 16}}>Nine signs in adults.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede" style={{fontSize: 17, color:"var(--ink-2)", margin:0}}>These are written by adults who have ADHD, for adults who think they might. Most people who turn out to have ADHD relate strongly to four or more, often to all nine. You don't have to relate to every one, especially if you're a woman, where ADHD often shows up quieter and more internal.</p>
          <PBSlider items={SIGNS.map(s => ({h: s.t, p: s.b}))} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-06-signs-1-3.jpg')`}}></div>
      </div>
    </div>
  );
}

const QUESTIONS = [
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty getting things in order when you have to do a task that requires organisation?",
  "How often do you have problems remembering appointments or obligations?",
  "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
  "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
];
const Q_OPTS = [{n:0,l:"Never"},{n:1,l:"Rarely"},{n:2,l:"Sometimes"},{n:3,l:"Often"},{n:4,l:"Very often"}];

function PageSelfCheck() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(6).fill(null));
  const [done, setDone] = useState(false);

  function pick(v) {
    const next = [...answers]; next[idx] = v; setAnswers(next);
    setTimeout(() => { if (idx < 5) setIdx(idx + 1); else setDone(true); }, 240);
  }
  function reset() { setIdx(0); setAnswers(Array(6).fill(null)); setDone(false); }

  if (done) {
    let pos = 0; answers.forEach((a, i) => { if (a == null) return; if (a >= (i < 3 ? 2 : 3)) pos++; });
    const pct = (pos / 6) * 100;
    let title, body;
    if (pos >= 4) { title = <>Strong signal.</>; body = `You answered "yes" on ${pos} of 6. The screener flags 4 or more as highly consistent with ADHD. Strong reason to talk to your GP.`; }
    else if (pos >= 2) { title = <>Mixed picture.</>; body = `You answered "yes" on ${pos} of 6. Below threshold but worth thinking about, especially if you're a woman, where ADHD often presents quietly.`; }
    else { title = <>Low signal.</>; body = `You answered "yes" on ${pos} of 6. Below threshold. If something still feels off, look at the longer Part B questionnaire or talk to your GP about other causes.`; }

    return (
      <div>
        <span className="chip accent">Your result</span>
        <h2 style={{marginTop:16}}>{title}</h2>
        <div className="check-card" style={{marginTop:24}}>
          <div className="result-bar"><div className="dot" style={{left:`${Math.max(4,Math.min(96,pct))}%`}}></div></div>
          <div className="result-scale"><span>0 / Low</span><span>4 / Threshold</span><span>6 / Strong</span></div>
          <p style={{marginTop:24, fontSize:17, lineHeight:1.55, color:"var(--ink-2)"}}>{body}</p>
          <div style={{display:"flex", gap:10, marginTop:24, flexWrap:"wrap"}}>
            <button className="q-back" onClick={reset}>Restart</button>
            <span className="chip" style={{marginLeft:"auto"}}>Press next to continue →</span>
          </div>
        </div>
      </div>
    );
  }

  const pct = (idx / 6) * 100;
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip accent">ASRS-v1.1 · Part A</span>
          <h2 style={{marginTop:16, marginBottom: 8}}>The screener.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p style={{fontSize:16, color:"var(--ink-2)", margin: 0,}}>Six short questions from the WHO Adult ADHD Self-Report Scale. How often has each thing happened in the last 6 months?</p>
      <div className="check-card" style={{marginTop:20}}>
        <div className="progress-row">
          <span>Question {idx + 1} / 6</span>
          <div className="progress-bar"><div style={{width:`${pct}%`}}></div></div>
          <span>{Math.round(pct)}%</span>
        </div>
        <div className="q-text">{QUESTIONS[idx]}</div>
        <div className="q-options">
          {Q_OPTS.map(o => (
            <button key={o.n} className={`q-opt ${answers[idx] === o.n ? "selected" : ""}`} onClick={() => pick(o.n)}>
              <span className="num">{o.n}</span><span className="lbl">{o.l}</span>
            </button>
          ))}
        </div>
        <div className="q-actions">
          <button className="q-back" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>← Back</button>
          <span className="eyebrow muted">Anonymous · Nothing saved</span>
        </div>
      </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageSelfNext() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 1 · Next steps</span>
          <h2 style={{marginTop:16, marginBottom: 12}}>If you scored high, here's what next.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede" style={{margin:0}}>Three concrete moves. You can do all three in an afternoon, you can do them over weeks, you can do one and stop. None of them require a diagnosis to start.</p>
            <PBSlider items={[
            {h:"Talk to your GP", p:"Book a double appointment so you're not rushing, and start with the words \"I'd like to be referred for an ADHD assessment\". Bring a short list of how it shows up in your day, and remember they cannot refuse you on cost grounds, even if they hint that they can."},
            {h:"Choose your route", p:"NHS is free but the wait is currently anywhere from one to four years. Right to Choose, in England, is also free and brings that down to three to six months. Private is the fastest at two to eight weeks, costing £500 to £1,500. None of them are wrong, they're just different trades."},
            {h:"Build scaffolding now", p:"You don't need a diagnosis to start helping yourself. Body doubling and the 1-3-5 brain dump are the two we'd hand you first, both free, both work tonight. Chapter 4 walks through all six of the tools our community keeps coming back to."},
            ]} />
            <div className="disclaim">
            <strong>Important.</strong> A screener is a signal, not a diagnosis. Only a qualified clinician (psychiatrist or specialist psychiatric nurse) can diagnose ADHD in the UK. ADHD often co-occurs with anxiety, depression, autism and dyslexia, so a thorough assessment matters.
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-10-next-steps.jpg')`}}></div>
      </div>
    </div>
  );
}

// =================== CHAPTER 2: FOR PARENTS ===================

function PageParentsIntro() {
  return (
    <div>
      <div className="ph ph-noline">
        <div>
          <span className="chip" style={{background:"var(--sage)", borderColor:"var(--sage)", color:"var(--ink)"}}>Chapter 2 · Parents</span>
          <h2 style={{marginTop:16}}>Is my child<br/>showing <span className="accent">signs?</span></h2>
          <p className="lede">Written for the parent who has spent months quietly wondering, this is a calm, plain-English walk-through of what to look for at each age, the words to use with your GP, and how to talk to your child about any of it without ever making them feel like there is something wrong with who they are.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-25-parents-intro.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageParentsRead() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sage)", borderColor:"var(--sage)", color:"var(--ink)"}}>Chapter 2 · Read this first</span>
          <h2 style={{marginTop:16}}>Three things to know before you start.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Before any reading, any forms, any appointments, three things parents of newly-diagnosed children tell us they wish someone had said in the first week.</p>
            <PBSlider items={[
            {h:"It isn't your fault.", p:"ADHD is not the result of bad parenting, screen time or anything you did or didn't do. It's a difference in how the brain regulates attention, impulse and emotion, your child was born with this wiring. They don't grow out of it, but with the right scaffolding around them, they really can thrive."},
            {h:"Girls get missed.", p:"Boys tend to get referred for hyperactivity. Girls more often daydream quietly, people-please, and hold it all together at school, only to fall apart at home, so they slip through. If your daughter is \"struggling but somehow coping\", that's worth a closer look."},
            {h:"Diagnosis is a door.", p:"It unlocks proper support at school, an EHCP if needed, exam access arrangements, benefits, and treatment options. What it doesn't do is change who your child is, they're the same person tomorrow as they were today, just with a map on how to move forward."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-26-parents-read.jpg')`}}></div>
      </div>
    </div>
  );
}

const PARENT_ITEMS = {
  young: [
    { t: "Constant motion", b: "Climbing, running, fidgeting where they shouldn't." },
    { t: "Can't wait their turn", b: "Bursts in, blurts out, struggles with queues and games." },
    { t: "Talks non-stop", b: "Interrupts, finishes others' sentences, hard to listen back." },
    { t: "Big emotions", b: "Meltdowns over small things. Slow to recover, fast to flip." },
    { t: "Loses everything", b: "Coats, water bottles, school books. Daily." },
    { t: "Forgets simple instructions", b: "Asked to do three things, does one, forgets the rest." },
    { t: "Hyper-focuses on play", b: "Locked into a game, impossible to redirect to dinner." },
    { t: "Trouble at bedtime", b: "Wired late, exhausted in the morning, refuses to sleep." },
  ],
  school: [
    { t: "Daydreaming in class", b: "Teachers say they're 'in their own world'. Common in girls." },
    { t: "Careless mistakes", b: "Bright child, scrappy work. Knows the answer, writes wrong thing." },
    { t: "Can't start homework", b: "Tearful at the table. Procrastinates for hours." },
    { t: "Friendship struggles", b: "Bossy in play, easily hurt, falls out and reconciles weekly." },
    { t: "School avoidance", b: "Tummy aches on school mornings. Refuses uniform." },
    { t: "Behaviour reports", b: "Repeated detention, calls home, 'disruptive' on reports." },
    { t: "Inconsistent grades", b: "Top in maths, failing English. Or vice versa." },
    { t: "Bullied or bullying", b: "ADHD kids often end up on both sides. Social radar is off." },
  ],
  teen: [
    { t: "Mood swings", b: "Sudden anger, hopelessness, shutdowns. Worse with hormones." },
    { t: "Risk-taking", b: "Impulsive vapes, drugs, dangerous driving, online chats." },
    { t: "Can't manage time", b: "Late, missed deadlines, no concept of how long things take." },
    { t: "Anxiety or low mood", b: "Often appears before ADHD does. Treat both." },
    { t: "Sleep is wrecked", b: "Up till 2am on the phone. Can't function before 11am." },
    { t: "Sensitive to rejection", b: "A 'maybe' from a friend feels like the end of the world." },
    { t: "Self-medicating", b: "Caffeine, weed, alcohol, sugar, screens. Looking for regulation." },
    { t: "Talks about being 'broken'", b: "Self-esteem usually low by 13 if undiagnosed. Listen carefully." },
  ],
};

function PageParentChecklist() {
  const [tab, setTab] = useState("young");
  const [checks, setChecks] = useState({});

  function toggle(k) { setChecks(c => ({ ...c, [k]: !c[k] })); }

  const items = PARENT_ITEMS[tab];
  const ticked = items.filter((_, i) => checks[`${tab}-${i}`]).length;

  let verdict;
  if (ticked === 0) verdict = "Tick what fits.";
  else if (ticked <= 2) verdict = "A few signs. Worth keeping an eye on.";
  else if (ticked <= 4) verdict = "Several signs. Mention it at the GP.";
  else verdict = "Strong pattern. Book a GP appointment this week.";

  return (
    <div>
      <span className="chip">Chapter 2 · Checklist</span>
      <h2 style={{marginTop:16, marginBottom:8}}>The parent's checklist.</h2>
      <p style={{fontSize:16, color:"var(--ink-2)", marginBottom: 20,}}>Tick what you've seen consistently for at least 6 months, in more than one setting (home and school).</p>
      <div className="cl-tabs">
        {[{k:"young",l:"Ages 4-10"},{k:"school",l:"School age"},{k:"teen",l:"Teens 12-18"}].map(t => (
          <button key={t.k} className={`cl-tab ${tab===t.k?"active":""}`} onClick={() => setTab(t.k)}>{t.l}</button>
        ))}
      </div>
      <div className="cl-grid">
        {items.map((it, i) => {
          const k = `${tab}-${i}`; const on = !!checks[k];
          return (
            <div key={k} className={`cl-item ${on?"checked":""}`} onClick={() => toggle(k)}>
              <div className="cl-box"></div>
              <div><h4>{it.t}</h4><p>{it.b}</p></div>
            </div>
          );
        })}
      </div>
      <div className="tally tally-centre">
        <div className="num">{ticked} / {items.length}</div>
        <div className="verdict">{verdict}</div>
      </div>
    </div>
  );
}

function PageParentTalking() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sage)", borderColor:"var(--sage)", color:"var(--ink)"}}>Chapter 2 · Talking</span>
          <h2 style={{marginTop:16}}>Talking to them about it.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Children pick up on shame fast, and the way you frame this matters far more than the words you choose. Lead with curiosity, not concern, and the conversation tends to look after itself.</p>
      <div className="dd-pair" style={{marginTop:20}}>
        <div className="dd do">
          <h5>Do say</h5>
          <ul>
            <li>"Your brain works in a really interesting way."</li>
            <li>"Lots of brilliant people have ADHD brains."</li>
            <li>"Let's figure out what helps you."</li>
            <li>"Tell me what feels hard at school."</li>
          </ul>
        </div>
        <div className="dd dont">
          <h5>Don't say</h5>
          <ul>
            <li>"You just need to try harder."</li>
            <li>"Other kids manage it fine."</li>
            <li>"I'm worried something's wrong with you."</li>
            <li>"Stop making excuses."</li>
          </ul>
        </div>
      </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-28-talking-a.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageParentRoute() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sage)", borderColor:"var(--sage)", color:"var(--ink)"}}>Chapter 2 · The UK route</span>
          <h2 style={{marginTop:16}}>Getting assessed, step by step.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">The UK pathway to a child ADHD assessment in plain English. Four steps, what each looks like, and roughly how long it takes. Skip ahead at any point if you already know.</p>
            <PBSlider items={[
            {h:"Book the GP", p:"Ask for a double slot so you have time to be heard properly. Request a referral to community paediatrics (for under-18s) or to a Right to Choose clinic, the choice is yours."},
            {h:"Gather evidence", p:"Pull together school reports, examples of behaviour you've noticed, and ask if the school can complete a Conners or SDQ questionnaire. The more concrete the picture, the smoother the next step."},
            {h:"Assessment", p:"Expect anywhere from three to eighteen months on the NHS. A specialist, usually a paediatrician or child psychiatrist, will sit down with you, your child and the school to build the full picture."},
            {h:"Plan & support", p:"A diagnosis is the key that unlocks proper school support (EHCP, exam access), parent training programmes, and the option of medication trials from around age six. None of it is automatic, but all of it is there."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=80")}')`}}></div>
      </div>
      <div style={{marginTop:32, display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16}}>
        <div className="card">
          <span className="eyebrow muted">School · SEN</span>
          <h4 style={{marginTop:10}}>EHCP (Education, Health & Care Plan)</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>This is a legally binding document setting out the support your child needs in school, and you can apply directly to your local authority without the school's permission. IPSEA's free helpline will walk you through every step.</p>
          <a href="https://www.ipsea.org.uk" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>IPSEA helpline →</a>
        </div>
        <div className="card">
          <span className="eyebrow muted">Talk to school</span>
          <h4 style={{marginTop:10}}>Meet the SENCO</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Every school has a Special Educational Needs Co-ordinator, and a written request for a meeting always carries more weight than a passing word at the gate. Three questions to ask: "What's already in place? What can be put on a SEN Support Plan? Can you complete a Conners questionnaire for us?"</p>
        </div>
        <div className="card">
          <span className="eyebrow muted">Money</span>
          <h4 style={{marginTop:10}}>DLA (Disability Living Allowance)</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Up to £184 a week for children under 16 with ADHD and significant care needs, tax-free, and it doesn't affect any other benefits you're on. Most parents who'd be eligible never claim because they don't know it exists. Take the half hour, fill it in.</p>
          <a href="https://www.gov.uk/disability-living-allowance-children" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>Apply on gov.uk →</a>
        </div>
        <div className="card">
          <span className="eyebrow muted">Don't forget the siblings</span>
          <h4 style={{marginTop:10}}>Brothers and sisters</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Siblings of ADHD kids often quietly absorb more than anyone realises, and they need their own space to talk about it. Sibs is a UK charity dedicated entirely to them, with free resources, peer groups and guides for parents.</p>
          <a href="https://www.sibs.org.uk" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>sibs.org.uk →</a>
        </div>
      </div>
    </div>
  );
}

// =================== CHAPTER 3: GET TESTED ===================

function PageTestedIntro() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 , Get tested</span>
          <h2 style={{marginTop:16}}>Three routes<br/>to <span className="accent">assessment.</span></h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">There are three real routes to an adult ADHD assessment in the UK, and the one most people are never told about is the cheapest and fastest. Right to Choose is a quiet little policy that can turn a three-year NHS wait into a three-month one, completely free, and we will walk you through how to use it.</p>
          <div className="intro-block">
            <p><strong>What this chapter covers.</strong> The UK has three real routes to an adult ADHD assessment, and they could not be more different. NHS is free but the wait is one to four years and some trusts have closed their lists entirely. Right to Choose is also free, works only in England, and brings the wait down to three to six months, almost no GP volunteers this information. Private is the fastest, two to eight weeks, but costs £500 to £1,500 up front plus ongoing prescription fees.</p>
            <p>Over the next pages we lay all three side by side, give you a directory of fourteen UK clinics filtered by region, route and age, and finish with a word-for-word GP script you can read out or paste into eConsult.</p>
            <p>If you remember one thing from this chapter, remember this. You have the legal right under NHS England's "patient choice" policy to be referred to any NHS-contracted ADHD provider in England, even if your local trust has closed its list. Your GP cannot refuse on cost grounds. If they push back, the script on page eighteen gives you the exact wording to use.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageRoutes() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 3 · Compare</span>
          <h2 style={{marginTop:16, marginBottom: 12}}>Three routes, side by side.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede" style={{margin:0}}>Free and slow, free and faster, or pay and skip the queue. Compare them at a glance and then go deep on whichever fits where you actually are right now.</p>
            <div className="route-compare-strip" style={{marginTop:20}}>
              <div className="rc-row rc-head"><span>Route</span><span>Cost</span><span>Wait</span><span>Where</span></div>
              <div className="rc-row"><span><strong>NHS referral</strong></span><span>£0</span><span>1–4 yrs</span><span>UK-wide</span></div>
              <div className="rc-row rc-best"><span><strong>Right to Choose</strong> <em>Most under-used</em></span><span>£0</span><span>3–6 mo</span><span>England only</span></div>
              <div className="rc-row"><span><strong>Private</strong></span><span>£500–1,500 + meds</span><span>2–8 wks</span><span>UK-wide</span></div>
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-33-routes.jpg')`}}></div>
      </div>
      <div className="route-grid">
        <div className="route">
          <span className="label">1 · Free</span>
          <h3>NHS referral</h3>
          <div className="stats"><div className="stat"><span className="v">£0</span><span className="l">Cost</span></div><div className="stat"><span className="v">1-4 yrs</span><span className="l">Wait</span></div></div>
          <p>Your GP refers you to your local adult ADHD service and you join the queue. It's completely free, but the waiting lists are extreme right now and some trusts have closed referrals entirely. Worth doing in parallel with another route.</p>
          <ul className="pros"><li>Free at point of use</li><li>Includes follow-up & titration</li><li>Postcode lottery on quality</li></ul>
        </div>
        <div className="route featured">
          <span className="label">2 · Free, faster</span>
          <h3>Right to <span className="it">Choose</span></h3>
          <div className="stats"><div className="stat"><span className="v">£0</span><span className="l">Cost</span></div><div className="stat"><span className="v">3-6 mo</span><span className="l">Wait</span></div></div>
          <p>England only. You pick any NHS-contracted provider on the list, the clinic itself is private, the bill goes to the NHS, and you pay nothing at any point. The reason it's quiet is that almost nobody, GPs included, is told it exists.</p>
          <ul className="pros"><li>Free, like the NHS</li><li>Choose ADHD-360, Psychiatry-UK, etc</li><li>GP must agree to refer</li></ul>
        </div>
        <div className="route">
          <span className="label">3 · Pay</span>
          <h3>Private</h3>
          <div className="stats"><div className="stat"><span className="v">£500-1.5k</span><span className="l">Assessment</span></div><div className="stat"><span className="v">2-8 wks</span><span className="l">Wait</span></div></div>
          <p>Pay out of pocket, or via private health insurance if you're lucky enough to have it. This is the fastest route with full choice of clinician, but the costs add up, ongoing prescriptions run from around £150 a year if your GP agrees to a shared-care agreement.</p>
          <ul className="pros"><li>Fastest, most flexible</li><li>Costs add up over time</li><li>Watch for shared-care refusals</li></ul>
        </div>
      </div>
    </div>
  );
}

const CLINICS = [
  // Right to Choose providers (England, NHS-funded)
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Psychiatry-UK", note:"Largest RTC provider in England", wait:"16-20 wks", cost:"£0 (RTC)", age:"18+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"ADHD-360", note:"Nurse-led, well-regarded for shared care", wait:"8-14 wks", cost:"£0 (RTC)", age:"7+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"ProblemShared", note:"RTC for adults", wait:"12-18 wks", cost:"£0 (RTC)", age:"18+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Clinical Partners", note:"RTC and private routes", wait:"6-12 wks", cost:"£0 (RTC)", age:"5+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Dr Julian", note:"RTC, adult ADHD focus", wait:"12-16 wks", cost:"£0 (RTC)", age:"18+" },
  // Private clinics
  { type:"private", region:"london", area:"London (Harley St)", name:"The London Psychiatry Centre", note:"In-person + remote", wait:"2-3 wks", cost:"£900", age:"18+" },
  { type:"private", region:"london", area:"London (multi-site)", name:"The Priory Group", note:"Private hospitals", wait:"2-4 wks", cost:"£1,028", age:"6+" },
  { type:"private", region:"london", area:"London (Harley St / remote)", name:"The ADHD Centre", note:"Adult ADHD specialists", wait:"3-5 wks", cost:"£950", age:"18+" },
  { type:"private", region:"london", area:"London (multi-site)", name:"Re:Cognition Health", note:"Private, adults & children", wait:"3-5 wks", cost:"£1,100", age:"6+" },
  { type:"private", region:"manchester", area:"Manchester & remote", name:"Smart TMS", note:"Private clinic offering TMS/neurofeedback for ADHD", wait:"3-5 wks", cost:"£900", age:"18+" },
  { type:"private", region:"scotland", area:"Edinburgh", name:"The Edinburgh Practice", note:"Private psychiatry", wait:"3-5 wks", cost:"£900", age:"18+" },
  { type:"private", region:"ni", area:"Belfast", name:"Belfast Adult ADHD Clinic", note:"NI coverage", wait:"5-8 wks", cost:"£950", age:"18+" },
  // NHS direct
  { type:"nhs", region:"england", area:"London-wide", name:"Maudsley NHS Trust", note:"Tertiary referral only", wait:"2-3 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Birmingham", name:"Birmingham & Solihull NHS", note:"Local catchment", wait:"3-4 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Leeds / W. Yorks", name:"Leeds & York NHS Adult ADHD", note:"Local catchment", wait:"3-5 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Bristol", name:"Avon & Wiltshire NHS", note:"Closed to new referrals", wait:"Closed", cost:"£0", age:"18+" },
  { type:"nhs", region:"scotland", area:"Glasgow", name:"NHS Glasgow Adult ADHD", note:"Scotland - no RTC", wait:"2-5 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"scotland", area:"Edinburgh / Lothian", name:"NHS Lothian Adult ADHD", note:"Scotland - long wait", wait:"3-5 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"wales", area:"Cardiff", name:"Cardiff & Vale Health Board", note:"NHS Wales - long wait", wait:"3-4 yrs", cost:"£0", age:"18+" },
  { type:"nhs", region:"ni", area:"Belfast", name:"Belfast Health & Social Care Trust", note:"NHS NI - long wait", wait:"3-5 yrs", cost:"£0", age:"18+" },
];

function PageDirectory() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("all");
  const [type, setType] = useState("all");
  const [age, setAge] = useState("all");

  const list = useMemo(() => CLINICS.filter(c => {
    if (q && !`${c.name} ${c.area} ${c.note}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (region !== "all" && c.region !== region) return false;
    if (type !== "all" && c.type !== type) return false;
    if (age === "child" && c.age === "18+") return false;
    if (age === "adult" && (c.age === "5+" || c.age === "7+")) return false;
    return true;
  }), [q, region, type, age]);

  function badge(t) { return t === "nhs" ? {c:"nhs", t:"NHS"} : t === "rtc" ? {c:"rtc", t:"RTC"} : {c:"priv", t:"PRV"}; }

  return (
    <div>
      <span className="chip">Chapter 3 · Directory</span>
      <h2 style={{marginTop:16, marginBottom: 8}}>Clinic directory.</h2>
      <p style={{fontSize:15, color:"var(--muted)", marginBottom:20}}>{list.length} of {CLINICS.length} clinics. Wait times and costs change monthly and vary by ICB &mdash; treat every figure below as a starting estimate, not a booking guarantee. Search each name before you contact them.</p>
      <div className="search-row">
        <input placeholder="Search by name, area or postcode" value={q} onChange={e => setQ(e.target.value)} />
        <select value={region} onChange={e => setRegion(e.target.value)}>
          <option value="all">All UK</option><option value="england">England</option><option value="london">London</option>
          <option value="manchester">Manchester</option><option value="scotland">Scotland</option><option value="wales">Wales</option><option value="ni">N. Ireland</option>
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="all">All routes</option><option value="rtc">Right to Choose</option><option value="private">Private</option><option value="nhs">NHS</option>
        </select>
        <select value={age} onChange={e => setAge(e.target.value)}>
          <option value="all">All ages</option><option value="child">Children</option><option value="adult">Adults</option>
        </select>
      </div>
      <div className="clinic-list">
        {list.length === 0 && <div className="empty">No clinics match those filters. Try widening the region.</div>}
        {list.map((c, i) => {
          const b = badge(c.type);
          return (
            <div key={i} className="clinic">
              <div className={`badge ${b.c}`}>{b.t}</div>
              <div><div className="name">{c.name}<small>{c.area} · {c.note}</small></div></div>
              <div className="col">
                <a className="v" href={`https://www.google.com/search?q=${encodeURIComponent(c.name + " ADHD assessment current wait time")}`} target="_blank" rel="noopener" style={{color:"var(--accent)", textDecoration:"underline", fontSize:13}}>Check current wait →</a>
                <span className="l">Wait (varies)</span>
              </div>
              <div className="col"><span className="v">{c.cost}</span><span className="l">Cost (approx)</span></div>
              <div className="col"><span className="v">{c.age}</span><span className="l">Ages</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PageGPScript() {
  return (
    <div>
      <span className="chip accent">Chapter 3 · GP script</span>
      <h2 style={{marginTop:16, marginBottom: 8}}>What to say to your GP.</h2>
      <p style={{fontSize:17, color:"var(--ink-2)", marginBottom:24,}}>If you freeze in appointments, bring this. Read it out, hand it over, or paste it into the eConsult form.</p>
      <div className="script-card">
        <p>I would like to be referred for an adult ADHD assessment. I have completed the ASRS-v1.1 self-screener and scored above the threshold. The symptoms have affected me since childhood and impact my work, relationships and daily functioning.</p>
        <p>Under the Right to Choose framework in England, I would like to be referred to Psychiatry-UK or ADHD-360, which are NHS-contracted providers. This is my legal right and the cost will be covered by the NHS.</p>
        <p>Could you please process the referral today and confirm in writing? Thank you.</p>
      </div>
    </div>
  );
}


function PageParentKids() {
  return (
    <div>
      <span className="chip" style={{background:"var(--sage)",borderColor:"var(--sage)"}}>Chapter 2 · For the child</span>
      <h2 style={{marginTop:16, marginBottom:24}}>When your child says no.</h2>
      <p className="lede" style={{marginBottom:32}}>Older children, and especially teenagers, often dig their heels in. "I'm not crazy." "I don't want pills." "I'll be the weird one." None of these are unreasonable, they're protective. Here are five gentle ways to lower the temperature without forcing anything.</p>
      <div className="steps-list">
        <div className="step-card"><h4>1. Drop the word "test"</h4><p>Try "a chat with someone who's really good at brains", or "a way to figure out why some things feel harder than they should". Clinical language scares kids, especially ones who already feel like something is wrong with them. Soft words open doors.</p></div>
        <div className="step-card"><h4>2. Frame it as power, not problem</h4><p>"This is so you get the support you deserve at school." Not "so we can fix you." A diagnosis is a key that unlocks help, accommodations, and self-understanding. It is not a label that tells them what they are. Make sure they hear that, more than once.</p></div>
        <div className="step-card"><h4>3. Read together first</h4><p>The next page lists books for every age. Reading about a character with ADHD does what no parent lecture ever will, because the child gets to meet themselves on the page with no pressure to react. Start there.</p></div>
        <div className="step-card"><h4>4. Give them control</h4><p>Let them pick the date. Let them choose whether you come into the room or wait outside (older teens often want privacy). Tell them, out loud, that they can say "stop" at any point and you will respect it. Control reduces fear.</p></div>
        <div className="step-card"><h4>5. It is okay to wait</h4><p>A forced assessment is rarely useful, and can damage trust for years. If they're a hard no, agree to revisit it in six months. In the meantime, plant seeds gently, books, podcasts, shows like Heartbreak High or Percy Jackson. Many teens come round on their own once they recognise themselves in a story.</p></div>
      </div>
      <div className="disclaim" style={{marginTop:32}}>
        <strong>While you're on the CAMHS waiting list.</strong> NHS waits for children's ADHD assessments are commonly 12-24 months. You don't have to sit still. Get the school onside via the SENCO, ask for in-school interventions now (they don't need a diagnosis), and call the ADHD Foundation's free family support line on 0151 541 9020. The next page collects the books we'd hand to any parent in this spot.
      </div>
    </div>
  );
}

window.PB_PAGES_1_3 = [
  { ch: "self", title: "Spotting the signs", render: () => <PageSignsIntro /> },
  { ch: "self", title: "Nine signs in adults", render: () => <PageSigns /> },
  { ch: "self", title: "The screener", render: () => <PageSelfCheck /> },
  { ch: "self", title: "Next steps", render: () => <PageSelfNext /> },

  { ch: "parents", title: "For parents", render: () => <PageParentsIntro /> },
  { ch: "parents", title: "Read first", render: () => <PageParentsRead /> },
  { ch: "parents", title: "Checklist", render: () => <PageParentChecklist /> },
  { ch: "parents", title: "How to talk to them", render: () => <PageParentTalking /> },
  { ch: "parents", title: "If they refuse + books", render: () => <PageParentKids /> },
  { ch: "parents", title: "Getting assessed", render: () => <PageParentRoute /> },

  { ch: "test", title: "Getting tested", render: () => <PageTestedIntro /> },
  { ch: "test", title: "Three routes", render: () => <PageRoutes /> },
  { ch: "test", title: "Clinic directory", render: () => <PageDirectory /> },
  { ch: "test", title: "GP script", render: () => <PageGPScript /> },
];
