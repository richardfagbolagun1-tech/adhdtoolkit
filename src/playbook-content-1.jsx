// Untangle Playbook, Chapters 1-3 content (Self-check, Parents, Get tested)
// Each export is an array of page render functions { chapter, render }

const { useState, useMemo } = React;

// =================== CHAPTER 1: COULD I HAVE ADHD? ===================

const SIGNS = [
  { t: "You can hyperfocus for hours, but can't start the email.",
    b: "ADHD attention follows interest. New or urgent things grab it, and important but dull things don't. So you might spend nine hours on a new hobby while a fifteen-minute email sits in your drafts for two weeks. Other people may call this lazy, but your brain is working hard just to get started." },
  { t: "Five minutes and two hours feel the same.",
    b: "Time blindness is a well-known part of ADHD. Your sense of time passing works differently. You are often late because you thought you had loads of time, or two hours early because you were worried about being late." },
  { t: "You forget what you walked into the room for. Daily.",
    b: "Working memory is how you hold information in your head for a short time. In ADHD it is less reliable. That is why lists, alarms and sticky notes help so much. Forgetting why you walked into the kitchen does not mean you are losing your mind. Something else caught your attention before the thought stuck." },
  { t: "Half-finished projects everywhere.",
    b: "Starting new things is exciting, and finishing them is hard. ADHD brains get a boost from something new, and it fades as the novelty wears off. You might have a guitar you stopped learning, a half-knitted scarf and the first three chapters of a book. This is how ADHD works. It does not mean you are weak." },
  { t: "Small frustrations feel huge.",
    b: "Strong emotions are part of ADHD, even though the official criteria barely mention them. A printer jam can ruin your morning. A short reply from a friend can upset you for hours. This is called emotional dysregulation, and it is tiring." },
  { t: "You fidget. Always.",
    b: "You bounce your leg, click your pen, pace during phone calls or scroll your phone while watching TV. Many people with ADHD need a little movement or input to stay focused, and sitting still can feel uncomfortable. If you think better on a walk than in a quiet meeting, this may be part of the reason." },
  { t: "You speak first, plan later.",
    b: "Impulsivity is one of the main ADHD traits. You might interrupt people, shop online at 1am, book a holiday you can't afford or quit a job in one afternoon. You act on thoughts faster than most people. Sometimes that helps you, and sometimes it causes problems." },
  { t: "Tired all day, wired at midnight.",
    b: "Sleep problems, especially going to sleep late, are very common in adults with ADHD. Many people with ADHD feel most awake and creative late at night, just when they should be going to sleep. Mornings are hard, and the lost sleep builds up over time." },
  { t: "You think you're 'lazy' or 'broken'.",
    b: "Many people with ADHD say this about themselves before they are diagnosed. Years of missed deadlines, broken promises and falling short can lead to shame, and to the belief that something is wrong with you. If ADHD is part of your picture, your brain may work differently in ways that make some everyday tasks harder. Once you understand how, you can start to work with it." },
];

function PageSignsIntro() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip accent">Chapter 1 · Self</span>
          <h2 style={{marginTop:16}}>Could I actually<br/>have <span className="accent">ADHD?</span></h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Take six minutes to walk through the World Health Organisation's Adult ADHD Self-Report Scale, a screening tool widely used in UK assessments. It can't diagnose you. It can tell you whether it's worth talking to your GP.</p>
          <div className="intro-block">
            <p><strong>The point of this chapter.</strong> By the end, you'll have a clear sense of whether ADHD is worth taking to your GP. We'll show you the nine signs adults most often relate to, run you through the screener, and tell you exactly what to do next.</p>
            <p>It takes about ten minutes. Nothing is saved, nothing is shared. Press next when you're ready.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/signs-laundry.webp"}')`}}></div>
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
          <p className="lede" style={{fontSize: 17, color:"var(--ink-2)", margin:0}}>These are written by adults who have ADHD, for adults who think they might. Recognising some of these does not mean you have ADHD. It may be worth talking to a clinician if several fit and have affected you for a long time. You don't have to relate to every one, especially if you're a woman, where ADHD often shows up quieter and more internal. If this fits your experience, keep reading. If it does not, skip it.</p>
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
    else if (pos >= 2) { title = <>Mixed picture.</>; body = `You answered "yes" on ${pos} of 6. Below threshold but worth thinking about, especially if you're a woman, where ADHD often presents.`; }
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
            <span className="chip" style={{marginLeft:"auto"}}>Press next to continue</span>
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
        <div className="q-progress">
          <div className="q-progress-label"><strong>Question {idx + 1}</strong> of 6</div>
          <div className="q-steps" aria-hidden="true">
            {[0,1,2,3,4,5].map(i => <span key={i} className={`q-step${answers[i] != null ? " done" : ""}${i === idx ? " now" : ""}`}></span>)}
          </div>
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
          <button className="q-back" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>Back</button>
          <span className="eyebrow muted">Anonymous · Nothing saved</span>
        </div>
      </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/screener-checklist.webp')`, backgroundPosition:"18% center"}}></div>
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
          <h2 style={{marginTop:16, marginBottom: 12}}>If you scored high, these are your next steps.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede" style={{margin:0}}>Three things you can do next. None of them need a diagnosis.</p>
            <PBSlider items={[
            {h:"Talk to your GP", p:"Book a double appointment so you're not rushing, and start with the words \"I would like you to consider a referral for an ADHD assessment\". Bring a short list of how it shows up in your day, and you can ask them to consider a referral under the NHS England Right to Choose framework."},
            {h:"Choose your route", p:"NHS is free but the wait is commonly two years or more. In England, Right to Choose may offer a faster NHS-funded option if you are eligible and a suitable provider is available. Waiting times vary. Private assessment can be quicker, but costs, waiting times and follow-up arrangements vary. Check these before you decide. None of them are wrong, they're just different trades."},
            {h:"Build scaffolding now", p:"You don't need a diagnosis to start helping yourself. Body doubling and the 1-3-5 brain dump are the two we'd hand you first, both free, both work tonight. Chapter 4 walks through all six of the tools our community keeps coming back to."},
            ]} />
            <div className="disclaim">
            <strong>Important.</strong> A screener is a signal, not a diagnosis. Only a qualified clinician (psychiatrist or specialist psychiatric nurse) can diagnose ADHD in the UK. ADHD often co-occurs with anxiety, depression, autism and dyslexia, so a thorough assessment matters.
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-10-next-steps.webp')`}}></div>
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
          <p className="lede">Written for the parent who has spent months wondering, this covers what to look for at each age, what to say to your GP, and how to talk to your child without making them feel something is wrong with them.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-25-parents-intro.webp')`}}></div>
      </div>
      <PBQuote q={"People still say, 'it's about bad parents and naughty children' and we just have to get rid of that stigma."} who={"Rory Bremner, patron of the ADHD Foundation"} src={"ITV, Lorraine"} />
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
          <p className="lede">Before any reading, any forms, any appointments, three things parents of newly diagnosed children say they wish they had heard in the first week.</p>
            <PBSlider items={[
            {h:"It isn't your fault.", p:"ADHD is not the result of bad parenting, screen time or anything you did or didn't do. It's a difference in how the brain regulates attention, impulse and emotion, your child was born with this wiring. They don't grow out of it, but with the right scaffolding around them, they really can thrive."},
            {h:"Girls get missed.", p:"Boys tend to get referred for hyperactivity. Girls more often daydream, people-please, and hold it all together at school, only to fall apart at home, so they slip through. If your daughter is \"struggling but somehow coping\", that's worth a closer look."},
            {h:"Diagnosis is a door.", p:"It can lead to support at school, an EHCP if needed, exam access arrangements, benefits, and treatment options. What it doesn't do is change who your child is, they're the same person tomorrow as they were today, just with a map on how to move forward."},
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
    { t: "Bullied or bullying", b: "Some children with ADHD find impulsivity, emotions or social situations hard, which can affect friendships." },
  ],
  teen: [
    { t: "Mood swings", b: "Sudden anger, hopelessness, shutdowns. Worse with hormones." },
    { t: "Risk-taking", b: "Impulsive vapes, drugs, dangerous driving, online chats." },
    { t: "Can't manage time", b: "Late, missed deadlines, no concept of how long things take." },
    { t: "Anxiety or low mood", b: "Often appears before ADHD does. Treat both." },
    { t: "Sleep is wrecked", b: "Up till 2am on the phone. Can't function before 11am." },
    { t: "Sensitive to rejection", b: "A 'maybe' from a friend feels like the end of the world." },
    { t: "Self-medicating", b: "Caffeine, weed, alcohol, sugar, screens. Looking for regulation." },
    { t: "Talks about being 'broken'", b: "Ongoing difficulties at school or with friends can affect a child's confidence. Listen carefully if they speak negatively about themselves. Listen carefully." },
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
      <p style={{fontSize:16, color:"var(--ink-2)", marginBottom: 20,}}>Tick what you've seen consistently for at least 6 months, in more than one setting (home and school). Many of these behaviours are common in childhood. What matters is a persistent pattern, across settings, that is causing distress or difficulty.</p>
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
          <p className="lede">Children pick up on shame fast, and how you frame this matters more than the exact words. Start from curiosity rather than worry.</p>
      <div className="dd-pair" style={{marginTop:20}}>
        <div className="dd do">
          <h5>Do say</h5>
          <ul>
            <li>"Your brain works in a really interesting way."</li>
            <li>"Lots of people have ADHD, including many successful ones."</li>
            <li>"We can work out what helps you."</li>
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
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-28-talking-a.webp')`}}></div>
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
          <p className="lede">The UK pathway to a child ADHD assessment. Four steps, what each looks like, and roughly how long it takes.</p>
            <PBSlider items={[
            {h:"Book the GP", p:"Ask for a double slot so you have time to be heard properly. Request a referral to community paediatrics (for under-18s) or to a Right to Choose clinic, the choice is yours."},
            {h:"Gather evidence", p:"Pull together school reports, examples of behaviour you've noticed, and ask if the school can complete a Conners or SDQ questionnaire. The more concrete the picture, the smoother the next step."},
            {h:"Assessment", p:"Expect anywhere from three to eighteen months on the NHS. A specialist, such as a paediatrician or child psychiatrist, will usually gather information from you, your child and the school."},
            {h:"Plan & support", p:"A diagnosis can lead to school support (EHCP, exam access), parent training programmes, and the option of medication trials from around age six. None of it is automatic, but all of it is there."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/parent-route-school.webp"}')`}}></div>
      </div>
      <div style={{marginTop:32, display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16}}>
        <div className="card">
          <h4 style={{marginTop:10}}>EHCP (Education, Health & Care Plan)</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>This is a legally binding document setting out the support your child needs in school, and you can apply directly to your local authority without the school's permission. IPSEA's free helpline will walk you through every step.</p>
          <a href="https://www.ipsea.org.uk" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>IPSEA helpline</a>
        </div>
        <div className="card">
          <h4 style={{marginTop:10}}>Meet the SENCO</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Every school has a Special Educational Needs Co-ordinator, and a written request for a meeting often carries more weight than a passing word at the gate. Three questions to ask: "What's already in place? What can be put on a SEN Support Plan? Can you complete a Conners questionnaire for us?"</p>
        </div>
        <div className="card">
          <h4 style={{marginTop:10}}>DLA (Disability Living Allowance)</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Rates are set each April (check current rates on GOV.UK). For children under 16 with ADHD and significant care needs, tax-free, and it doesn't affect any other benefits you're on. Many parents don't know it exists. Check current rates and eligibility on GOV.UK. Take the half hour, fill it in.</p>
          <a href="https://www.gov.uk/disability-living-allowance-children" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>Apply on gov.uk</a>
        </div>
        <div className="card">
          <h4 style={{marginTop:10}}>Brothers and sisters</h4>
          <p style={{marginTop:8, fontSize:14, color:"var(--ink-2)"}}>Siblings of ADHD kids often absorb more than anyone realises, and they need their own space to talk about it. Sibs is a UK charity dedicated entirely to them, with free resources, peer groups and guides for parents.</p>
          <a href="https://www.sibs.org.uk" target="_blank" rel="noopener" style={{fontSize:13,fontWeight:700,color:"var(--accent)"}}>sibs.org.uk</a>
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
          <p className="lede">There are three real routes to an adult ADHD assessment in the UK, and one of them, Right to Choose, is often not well known. Right to Choose may offer a faster NHS-funded assessment route in England, though availability and waits vary. This chapter shows you how to use it.</p>
          <div className="intro-block">
            <p><strong>What this chapter covers.</strong> The UK has three real routes to an adult ADHD assessment, and they could not be more different. NHS is free but the wait is commonly two years or more and some trusts have closed their lists entirely. Right to Choose is also free, works only in England, and brings the wait down to three to six months, almost no GP volunteers this information. Private assessment can be quicker, but costs, waiting times and follow-up arrangements vary. Check these before you decide.</p>
            <p>Over the next pages we lay all three side by side, list UK clinics you can filter by region, route and age, and give you a GP script you can read out or paste into an online form.</p>
            <p>If you remember one thing from this chapter, remember this. In England, NHS patient choice rules may let you ask for referral to an NHS-contracted ADHD provider, even if your local service has closed its list. Eligibility and provider availability vary. You can ask your GP to consider a referral under the NHS England Right to Choose framework. Local arrangements and provider availability can affect what happens next. If they push back, the script on page eighteen gives you the exact wording to use.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/tested-clipboard.webp')`, backgroundPosition:"40% center"}}></div>
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
          <p className="lede" style={{margin:0}}>Free and slow, free and faster, or paid and fastest. Compare them below.</p>
            <div className="route-compare-strip" style={{marginTop:20}}>
              <div className="rc-row rc-head"><span>Route</span><span>Cost</span><span>Wait</span><span>Where</span></div>
              <div className="rc-row"><span><strong>NHS referral</strong></span><span>£0</span><span>Often long</span><span>UK-wide</span></div>
              <div className="rc-row rc-best"><span><strong>Right to Choose</strong> <em>Often overlooked</em></span><span>£0</span><span>Varies</span><span>England only</span></div>
              <div className="rc-row"><span><strong>Private</strong></span><span>Varies + meds</span><span>Often quicker</span><span>UK-wide</span></div>
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-33-routes.webp')`}}></div>
      </div>
      <div className="route-grid">
        <div className="route">
          <span className="label">1 · Free</span>
          <h3>NHS referral</h3>
          <div className="stats"><div className="stat"><span className="v">£0</span><span className="l">Cost</span></div><div className="stat"><span className="v">Often long</span><span className="l">Wait</span></div></div>
          <p>Your GP refers you to your local adult ADHD service and you join the queue. It's completely free, but the waiting lists are extreme right now and some trusts have closed referrals entirely. Worth doing in parallel with another route.</p>
          <ul className="pros"><li>Free at point of use</li><li>Includes follow-up & titration</li><li>Postcode lottery on quality</li></ul>
        </div>
        <div className="route featured">
          <span className="label">2 · Free, faster</span>
          <h3>Right to <span className="it">Choose</span></h3>
          <div className="stats"><div className="stat"><span className="v">£0</span><span className="l">Cost</span></div><div className="stat"><span className="v">Varies</span><span className="l">Wait</span></div></div>
          <p>England only. You ask your GP to refer you to a provider that holds an NHS contract. If the referral goes ahead and the provider is available, the NHS pays for the assessment. Check current availability. Many people, including some GPs, have not heard of it.</p>
          <ul className="pros"><li>Free, like the NHS</li><li>Several providers to choose from, subject to availability</li><li>GP must agree to refer</li></ul>
        </div>
        <div className="route">
          <span className="label">3 · Pay</span>
          <h3>Private</h3>
          <div className="stats"><div className="stat"><span className="v">Varies</span><span className="l">Assessment</span></div><div className="stat"><span className="v">Often quicker</span><span className="l">Wait</span></div></div>
          <p>Pay out of pocket, or via private health insurance if you're lucky enough to have it. This is the fastest route with full choice of clinician, but the costs add up, ongoing prescription costs depend on whether your GP agrees to shared care.</p>
          <ul className="pros"><li>Fastest, most flexible</li><li>Costs add up over time</li><li>Watch for shared-care refusals</li></ul>
        </div>
      </div>
    </div>
  );
}

const CLINICS = [
  // Right to Choose providers (England, NHS-funded)
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Psychiatry-UK", note:"Largest RTC provider in England", wait:"Check current wait", cost:"£0 (RTC)", age:"18+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"ADHD-360", note:"Nurse-led, well-regarded for shared care", wait:"Check current wait", cost:"£0 (RTC)", age:"7+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"ProblemShared", note:"RTC for adults", wait:"Check current wait", cost:"£0 (RTC)", age:"18+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Clinical Partners", note:"RTC and private routes", wait:"Check current wait", cost:"£0 (RTC)", age:"5+" },
  { type:"rtc", region:"england", area:"England-wide (remote)", name:"Dr Julian", note:"RTC, adult ADHD focus", wait:"Check current wait", cost:"£0 (RTC)", age:"18+" },
  // Private clinics
  { type:"private", region:"london", area:"London (Harley St)", name:"The London Psychiatry Centre", note:"In-person + remote", wait:"Check current wait", cost:"Check current price", age:"18+" },
  { type:"private", region:"london", area:"London (multi-site)", name:"The Priory Group", note:"Private hospitals", wait:"Check current wait", cost:"Check current price", age:"6+" },
  { type:"private", region:"london", area:"London (Harley St / remote)", name:"The ADHD Centre", note:"Adult ADHD specialists", wait:"Check current wait", cost:"Check current price", age:"18+" },
  { type:"private", region:"london", area:"London (multi-site)", name:"Re:Cognition Health", note:"Private, adults & children", wait:"Check current wait", cost:"Check current price", age:"6+" },
  { type:"private", region:"scotland", area:"Edinburgh", name:"The Edinburgh Practice", note:"Private psychiatry", wait:"Check current wait", cost:"Check current price", age:"18+" },
  { type:"private", region:"ni", area:"Belfast", name:"Belfast Adult ADHD Clinic", note:"NI coverage", wait:"Check current wait", cost:"Check current price", age:"18+" },
  // NHS direct
  { type:"nhs", region:"england", area:"London-wide", name:"Maudsley NHS Trust", note:"Tertiary referral only", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Birmingham", name:"Birmingham & Solihull NHS", note:"Local catchment", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Leeds / W. Yorks", name:"Leeds & York NHS Adult ADHD", note:"Local catchment", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"england", area:"Bristol", name:"Avon & Wiltshire NHS", note:"Closed to new referrals", wait:"Closed", cost:"£0", age:"18+" },
  { type:"nhs", region:"scotland", area:"Glasgow", name:"NHS Glasgow Adult ADHD", note:"Scotland - no RTC", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"scotland", area:"Edinburgh / Lothian", name:"NHS Lothian Adult ADHD", note:"Scotland - long wait", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"wales", area:"Cardiff", name:"Cardiff & Vale Health Board", note:"NHS Wales - long wait", wait:"Check current wait", cost:"£0", age:"18+" },
  { type:"nhs", region:"ni", area:"Belfast", name:"Belfast Health & Social Care Trust", note:"NHS NI - long wait", wait:"Check current wait", cost:"£0", age:"18+" },
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
      <p style={{fontSize:15, color:"var(--muted)", marginBottom:20}}>{list.length} of {CLINICS.length} clinics. Wait times and costs change often and vary by area. Treat every figure below as a rough estimate and check current availability with the provider. Last checked September 2026. Search each name before you contact them.</p>
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
                <a className="v" href={`https://www.google.com/search?q=${encodeURIComponent(c.name + " ADHD assessment current wait time")}`} target="_blank" rel="noopener" style={{color:"var(--accent)", textDecoration:"underline", fontSize:13}}>Check current wait</a>
                <span className="l">Wait (varies)</span>
              </div>
              <div className="col"><span className="v">{c.cost}</span><span className="l">Cost</span></div>
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
        <p>Under the Right to Choose framework in England, I would like to be referred to Psychiatry-UK or ADHD-360, which are NHS-contracted providers. I would like to discuss a referral under the NHS England Right to Choose framework, if I am eligible and an appropriate provider is available.</p>
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
      <p className="lede" style={{marginBottom:32}}>Older children, and especially teenagers, often dig their heels in. "I'm not crazy." "I don't want pills." "I'll be the weird one." These are protective, and reasonable. Here are five ways to take the pressure off without forcing it.</p>
      <div className="steps-list">
        <div className="step-card"><h4>1. Drop the word "test"</h4><p>Try "a chat with someone who's really good at brains", or "a way to figure out why some things feel harder than they should". Clinical language scares kids, especially ones who already feel like something is wrong with them. Soft words open doors.</p></div>
        <div className="step-card"><h4>2. Frame it as power, not problem</h4><p>"This is so you get the support you deserve at school." Not "so we can fix you." A diagnosis can lead to help, adjustments and a better understanding of yourself. It is not a label that tells them what they are. Make sure they hear that, more than once.</p></div>
        <div className="step-card"><h4>3. Read together first</h4><p>The next page lists books for every age. Reading about a character with ADHD does what no parent lecture ever will, because the child gets to meet themselves on the page with no pressure to react. Start there.</p></div>
        <div className="step-card"><h4>4. Give them control</h4><p>Let them pick the date. Let them choose whether you come into the room or wait outside (older teens often want privacy). Tell them, out loud, that they can say "stop" at any point and you will respect it. Control reduces fear.</p></div>
        <div className="step-card"><h4>5. It is okay to wait</h4><p>A forced assessment is rarely useful, and can damage trust for years. If they're a hard no, agree to revisit it in six months. In the meantime, plant seeds, books, podcasts, shows like Heartbreak High or Percy Jackson. Many teens come round on their own once they recognise themselves in a story.</p></div>
      </div>
      <div className="disclaim" style={{marginTop:32}}>
        <strong>While you're on the CAMHS waiting list.</strong> NHS waits for children's ADHD assessments are often a year or more, and longer in some areas. You can start before the assessment. Get the school onside via the SENCO, ask for in-school interventions now (they don't need a diagnosis), and contact the ADHD Foundation on 0151 541 9020 to ask what family support is available. The next page collects the books we'd hand to any parent in this spot.
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
