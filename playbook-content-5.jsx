// Untangle Playbook, Content-5: the 10 most-requested gap pages + glossary
const { useState: useS5 } = React;

function PageBeforePrivate() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · While you wait</span>
          <h2 style={{marginTop:16}}>If you can't wait years and can't afford private.</h2>
          <p className="lede">This is the single most asked question we see, and the honest answer is that you can do a lot while you wait. None of it requires a piece of paper. Here is what to start today, costing nothing.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-36-while-you-wait.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">Step 01</span><h4 style={{marginTop:10}}>Use Right to Choose, properly</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>It is still free, still NHS, but the wait drops from 2-4 years to roughly 3-6 months. Most GPs will not tell you about it. The script on page 18 makes them say yes. Do this first.</p></div>
        <div className="card"><span className="eyebrow muted">Step 02</span><h4 style={{marginTop:10}}>Apply for Access to Work now</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You do not need a diagnosis. Self-identifying as having ADHD traits is enough. They can fund coaching (£60+ per hour, free to you), a noise-cancelling setup, and software. Apply at gov.uk/access-to-work.</p></div>
        <div className="card"><span className="eyebrow muted">Step 03</span><h4 style={{marginTop:10}}>Free ADHD coaching pilots</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>The ADHD Foundation, ADHD UK and several NHS trusts run periodic free peer-support and coaching groups. Subscribe to their newsletters, places vanish in hours.</p></div>
        <div className="card"><span className="eyebrow muted">Step 04</span><h4 style={{marginTop:10}}>Use this playbook</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Body doubling (free via Focusmate), dopamine menus, the spoons framework, the apps in chapter 4, none of these need a diagnosis. Treat yourself as if your nervous system does not care whether you have a piece of paper.</p></div>
        <div className="card"><span className="eyebrow muted">Step 05</span><h4 style={{marginTop:10}}>Therapy for the shame</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>NHS Talking Therapies are free and self-referral. You do not need to wait for a diagnosis to deal with the years of self-blame. Ask specifically for an ADHD-informed therapist if available.</p></div>
        <div className="card"><span className="eyebrow muted">Step 06</span><h4 style={{marginTop:10}}>Community is medicine</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>r/ADHDUK, ADHD Babes, AADD-UK forums, local meet-ups via the ADHD Foundation. Free. Possibly the most effective intervention on this page.</p></div>
      </div>
    </div>
  );
}

function PageSharedCare() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · After diagnosis</span>
          <h2 style={{marginTop:16}}>Shared care, the bit no one warns you about.</h2>
          <p className="lede">You got diagnosed privately or via Right to Choose. Now you want your GP to take over the prescription so you pay NHS prices, around £9.90 a month, instead of private prices that can run to hundreds. The handover is called shared care, and a lot of GPs quietly refuse. Here is why, and what to do.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-37-shared-care.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:24}}>
        <div className="card"><span className="eyebrow muted">What it is</span><h4 style={{marginTop:10}}>The agreement</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A formal letter from your private/RTC psychiatrist to your GP, saying "we have titrated this patient, here is their dose, please prescribe NHS-side". The GP signs, NHS prescribes, you pay £9.90 per item or get a prepayment certificate for £114/year.</p></div>
        <div className="card"><span className="eyebrow muted">Why GPs refuse</span><h4 style={{marginTop:10}}>The honest reasons</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Some ICBs (the bodies that fund GPs) instruct surgeries to refuse shared care for Right to Choose, citing "capacity". This is contested. GPs are also nervous about prescribing controlled drugs they did not titrate. None of this is your fault.</p></div>
      </div>
      <div className="card" style={{marginTop:18}}>
        <span className="eyebrow accent">What to do if refused</span>
        <h4 style={{marginTop:10, fontSize:20}}>Your options, in order</h4>
        <ol style={{marginTop:14, paddingLeft:20, fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>
          <li>Ask for the refusal in writing, citing the specific policy.</li>
          <li>Forward to your private/RTC provider, they often have template appeals.</li>
          <li>Complain to the ICB (Integrated Care Board) for your area. Find it via NHS website.</li>
          <li>Switch GP surgery, some local surgeries do shared care, others refuse blanket. r/ADHDUK keeps a community list.</li>
          <li>Last resort, stay on private prescription. £100-300/month but you keep the meds. Many people do this for years.</li>
        </ol>
      </div>
      <div className="disclaim" style={{marginTop:24}}>This is one of the most active campaigning issues in UK ADHD right now. ADHD UK and AADD-UK are pushing for national policy change. Join their mailing lists, your case adds weight.</div>
    </div>
  );
}

function PageCycle() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Women</span>
          <h2 style={{marginTop:16}}>ADHD and the menstrual cycle.</h2>
          <p className="lede">Oestrogen turns up the volume on dopamine. As oestrogen falls in the second half of your cycle, ADHD symptoms quietly intensify. If the back half of every month feels like a different brain than the front half, you are not imagining it, the research is small but consistent.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-17-cycle.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">Days 1-14 · Follicular</span><h4 style={{marginTop:10}}>The half that often feels easier</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>As oestrogen rises, many ADHDers notice sharper focus, a steadier mood and more motivation than usual, and this also tends to be the part of the cycle when stimulant medication does its best work. If life lets you, this is the window to schedule the harder, more focus-heavy stuff.</p></div>
        <div className="card"><span className="eyebrow muted">Days 14-28 · Luteal</span><h4 style={{marginTop:10}}>The half where everything feels heavier</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>As oestrogen falls, ADHD symptoms tend to intensify, RSD spikes, executive function drops, and you may feel that your usual meds dose just isn't doing what it did last week. PMDD (the severe form of PMS) also co-occurs at much higher rates in ADHD, so if these last two weeks have always felt like a different person was driving, that's worth naming.</p></div>
        <div className="card"><span className="eyebrow muted">What often helps</span><h4 style={{marginTop:10}}>Track it, then plan around it</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Apps like Bearable or Moody Month let you log mood, focus and energy alongside your cycle, and after two or three months your own pattern usually shows itself clearly. Once you can see it, the small adjustments matter, lighter workload in week four, more rest planned in, the harder conversations saved for week one if you can.</p></div>
        <div className="card"><span className="eyebrow muted">Medication adjustments</span><h4 style={{marginTop:10}}>It is okay to ask for a tweak</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Some prescribers will allow a slightly higher dose in the luteal phase if your tracking shows a clear dip, and continuous-pill contraception (no period at all) helps some women smooth the whole thing out. PMDD can be treated alongside ADHD too, so it is worth asking specifically rather than waiting to be offered.</p></div>
      </div>
      <div className="disclaim" style={{marginTop:24}}><strong>Perimenopause is the bigger version of this.</strong> As oestrogen drops permanently in your 40s, ADHD symptoms can intensify dramatically. Many women are diagnosed for the first time in their 40s for exactly this reason. HRT helps some, ask.</div>
    </div>
  );
}

function PageDriving() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 7 · Practical</span>
          <h2 style={{marginTop:16}}>Driving, the DVLA, and your licence.</h2>
          <p className="lede">An ADHD diagnosis does not stop you driving. There are rules, though, and they quietly trip people up, especially around medication. Here is the bit you legally need to know, in plain English.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-71-driving.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">Group 1 (car, motorbike)</span><h4 style={{marginTop:10}}>You probably don't need to tell DVLA</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>ADHD alone is not a notifiable condition for Group 1 licences. You only need to declare if your ADHD causes you to be a danger when driving, or if your medication has side-effects that affect driving (drowsiness, vision).</p></div>
        <div className="card"><span className="eyebrow muted">Group 2 (HGV, bus, coach)</span><h4 style={{marginTop:10}}>You usually do need to tell DVLA</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Group 2 has stricter rules. Declare ADHD via the DVLA online form. They will usually approve, often with annual medical confirmation. Failing to declare can void your insurance and lead to prosecution.</p></div>
        <div className="card"><span className="eyebrow muted">Stimulants and driving</span><h4 style={{marginTop:10}}>The 24-hour rule</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Methylphenidate and lisdexamfetamine are legal to drive on at prescribed doses. Carry your prescription or a copy when you drive. Random police drug-swab tests can show positive, your prescription is your defence.</p></div>
        <div className="card"><span className="eyebrow muted">First two weeks of meds</span><h4 style={{marginTop:10}}>Be cautious</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>While titrating up, you may feel drowsy, jittery, or your vision may briefly blur. Avoid long drives during the first fortnight of any new dose. After that, most people drive better on meds than off.</p></div>
      </div>
      <div className="disclaim" style={{marginTop:24}}>Current guidance is at <strong>gov.uk/adhd-and-driving</strong>. Rules change occasionally, always check before declaring.</div>
    </div>
  );
}

function PageRelationships() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Relationships</span>
          <h2 style={{marginTop:16}}>ADHD in love.</h2>
          <p className="lede">Around a third of long-term partners of ADHDers say it is the single hardest thing in their relationship. Not because their partner is bad, but because nobody ever told them what they were actually dealing with. Naming it gently changes everything.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-18-love-heart.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">For the ADHDer</span><h4 style={{marginTop:10}}>The patterns that hurt</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Forgetting promises (working memory). Saying yes and then resenting it (impulsivity). Disappearing into hyperfocus (interest-driven attention). Misreading their tone (RSD). None of these are about love. They are about wiring. Tell your partner that.</p></div>
        <div className="card"><span className="eyebrow muted">For the non-ADHD partner</span><h4 style={{marginTop:10}}>What is actually happening</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>They are not ignoring you. They have not stopped caring. Their working memory dropped the thing, their attention is interest-led, their feelings are bigger than yours and they may flinch at criticism. None of it is a verdict on you.</p></div>
        <div className="card"><span className="eyebrow muted">The classic trap</span><h4 style={{marginTop:10}}>Parent / child dynamic</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>The non-ADHD partner becomes the one who remembers everything, manages all admin and feels resentful. The ADHD partner feels infantilised and ashamed. This is the relationship dying. Therapy with an ADHD-aware practitioner can fix it.</p></div>
        <div className="card"><span className="eyebrow muted">What helps</span><h4 style={{marginTop:10}}>Tools, not lectures</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Shared calendar with reminders. Weekly 20-minute "us" check-in. A written list of the three things that matter to each of you. The Melissa Orlov book "The ADHD Effect on Marriage" is the gold standard.</p></div>
      </div>
    </div>
  );
}

function PageFinancesA() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 7 · ADHD and money · Part 1 of 2</span>
          <h2 style={{marginTop:16}}>The ADHD tax is real, and it is not your fault.</h2>
          <p className="lede">If you have ever stared at a parking fine, or a £42 late fee, or a fridge full of food that quietly went off because you forgot it was there, and thought, <em>what is wrong with me</em>, please put that question down. Nothing is wrong with you. ADHD quietly costs the average UK adult around £1,600 a year extra in late fees, impulse buys, forgotten subscriptions, parking tickets and takeaways-because-there-was-no-plan-for-dinner. This is called the ADHD tax. It is paid by millions of us. And the first piece of relief is just hearing the name out loud.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80")}')`}}></div>
      </div>

      <p style={{maxWidth:760, fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:28}}>This page is the first of two on money. We split it because money and ADHD is sensitive, and trying to fix everything in a single bullet list is exactly the kind of thing your brain has been punished for failing at. Take it slowly. You do not need to apply all of this today. Pick the one thing on this page that feels least frightening, and start there. Part two, on the next page, is where we cover debt, benefits, and the long-game stuff.</p>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:18}}>
        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">01 · Take the decisions out of the room</span>
          <h4 style={{marginTop:10, fontSize:22}}>Automate everything you possibly can.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>The thing about an ADHD brain is that it is very good at solving problems in the moment, and quite bad at remembering the small recurring ones. Bills, council tax, rent, contents insurance, the dentist payment plan, every one of these is a decision you should not have to keep making. Set up direct debits the first chance you get. Standing orders into a savings pot on payday, the same day, every month, so it is gone before your brain has time to think of three things to spend it on. If you can, ask your council to spread your council tax across the full twelve months rather than the standard ten, because that lower monthly amount is far easier to plan around than the two surprise zero-payment months that come with it. The point is not to make you "responsible". The point is that every recurring decision you can hand to a machine is one fewer thing your already-tired brain has to remember.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">02 · Find the leaks you've stopped seeing</span>
          <h4 style={{marginTop:10, fontSize:22}}>Cancel the subscriptions you forgot you had.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>Almost every ADHDer who actually sits down and audits their direct debits finds three to five subscriptions costing somewhere between £40 and £80 a month, and most of the time they are paying for things they have not opened in six months. A trial they meant to cancel. A gym from a hyperfixation last spring. Two streaming services they forgot they were paying for separately. This is not because you are bad with money. It is because your brain registered the initial sign-up but did not have any system for noticing the silent monthly cost afterwards. Apps like Emma, Snoop or Money Dashboard scan your bank, find them, and cancel them with one tap. It is a twenty-minute job that quietly funds a year of birthday presents. If apps feel like a step too far, just open your banking app, sort by direct debits, and read down the list once. You will be surprised.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">03 · Buy yourself a 24-hour window</span>
          <h4 style={{marginTop:10, fontSize:22}}>The 24-hour rule for anything over £30.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>Impulse buying is not a moral failure. It is a dopamine event. Your brain finds a thing online, a wave of <em>yes, this, now</em> arrives, and the click feels like relief, the way a cigarette does for someone trying to quit. The trick is not to stop wanting things. The trick is to put a small, kind pause between wanting and buying. Anything over £30 goes onto a wishlist or a note on your phone, and you give yourself 24 hours. By the next morning the dopamine has dropped and you can look at it again with a quieter head. Most things will not survive the wait, and the ones that do, you really do want, and you can buy them without the regret afterwards. Try it once with a small thing. The success feels disproportionately good, and it teaches the brain that delaying is not the same as denying.</p>
        </div>
      </div>

      <div className="card" style={{marginTop:24, padding:"22px 26px", background:"var(--bg-2)"}}>
        <span className="eyebrow accent">A note before you go</span>
        <p style={{margin:"10px 0 0", fontSize:14.5, color:"var(--ink-2)", lineHeight:1.65}}>If reading this page has stirred up shame about past money decisions, please notice that and be gentle. Those decisions made sense at the time, with the brain you had and the information you had. You are reading this now, which means you are already doing the work. The next page is about debt, benefits, and the longer game, when you are ready for it.</p>
      </div>
    </div>
  );
}

function PageFinancesB() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 7 · ADHD and money · Part 2 of 2</span>
          <h2 style={{marginTop:16}}>If you are already in trouble, you are not alone in this.</h2>
          <p className="lede">A surprising number of the people we hear from arrive at money advice having been quietly carrying debt, missed payments, or unclaimed benefits for years. Sometimes for decades. None of it makes you a bad person. ADHD makes the dull paperwork side of money disproportionately hard, and the longer it goes unspoken, the heavier it gets. This page is about the heavier stuff, calmly, with the things in the UK that actually help.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-73-money-b.jpg')`}}></div>
      </div>

      <p style={{maxWidth:760, fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:28}}>If only one of the three points below applies to you right now, that is enough. You do not need to read all three. Pick the one that lines up with where you are, do that one thing in the next week, and let the others wait until they are needed.</p>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:18}}>
        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">04 · If you are in debt</span>
          <h4 style={{marginTop:10, fontSize:22}}>There is free, judgement-free UK help, and it works.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>Please, before anything else, hear this. Debt advisors are not bailiffs. They will not shame you, they will not lecture you, and they cannot tell anyone else. <strong>StepChange</strong> (stepchange.org, 0800 138 1111) and <strong>National Debtline</strong> (nationaldebtline.org, 0808 808 4000) are both completely free, both anonymous if you want them to be, and both used to ADHD-shaped patterns of money trouble. They will look at your situation with you, work out what you can realistically afford, and in many cases negotiate with creditors so the calls stop and the interest pauses. Many ADHDers carry debt because of executive function, not bad character, and the people answering these phones genuinely know that. If picking up the phone feels impossible, both have web chat and email forms. The first conversation is the hardest. The next morning is usually the first quiet one you have had in months.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">05 · Money you may not know is yours</span>
          <h4 style={{marginTop:10, fontSize:22}}>PIP, DLA, Access to Work and grants.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>If ADHD seriously affects your day-to-day functioning or your ability to work, you may be eligible for <strong>Personal Independence Payment</strong> (PIP, for adults) or <strong>Disability Living Allowance</strong> (DLA, for children under 16). The application process is famously brutal, especially for a condition that struggles with paperwork in the first place, and the rejection rate on first try is high. That is not a verdict on whether you deserve the support, it is a verdict on a process that is not built for our wiring. The way through it is to not do it alone. <strong>Benefits and Work</strong> (benefitsandwork.co.uk) publishes the best UK guides for ADHD claimants. Your local <strong>Citizens Advice</strong> will sit with you and fill in the forms together, free, no judgement. <strong>Turn2us</strong> (turn2us.org.uk) has a grant search that takes ten minutes and surfaces hundreds of small charitable grants you may qualify for. Separately, <strong>Access to Work</strong> (gov.uk/access-to-work) funds coaching, software and equipment up to roughly £69,000 a year if you are employed or self-employed. None of these need a formal ADHD diagnosis, just a self-identified pattern of need. Most of the people who would qualify never apply.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">06 · A small kind future</span>
          <h4 style={{marginTop:10, fontSize:22}}>One pot, named for the person you want to look after.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>This last one is small and sounds soft, and it is the one most ADHDers tell us actually changes their relationship with money. Open a separate savings account, with most UK banks you can do it in five minutes on the app, and name it something emotional. "Future me." "Christmas, in advance, for the people I love." "The trip I keep meaning to take." Abstract financial goals do not land for ADHD brains, but named pots do, because they connect today's £25 to a specific person or feeling you actually care about. Set a standing order for whatever feels possible, even five pounds a week. The amount does not really matter. What you are training is the part of your brain that quietly notices, once a month, that future-you is being looked after by present-you. That feels different from "saving money". It feels like care. And once you have one named pot working, the next one is easy.</p>
        </div>
      </div>

      <div className="disclaim" style={{marginTop:28}}>
        <strong>If your situation feels overwhelming.</strong> Please ring StepChange first, 0800 138 1111, free, weekdays. If money worries are putting you in dark headspace, Samaritans is 116 123, 24/7, also free, and they will absolutely take a money-driven call. You do not have to be at the very edge to use either of these. They are there for the middle of it.
      </div>
    </div>
  );
}

function PageAddiction() { return <PageAddictionA />; }

function PageAddictionA() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 9 · ADHD and addiction · Part 1 of 2</span>
          <h2 style={{marginTop:16}}>Let's talk about this gently. It is more common than you think.</h2>
          <p className="lede">If you opened this page because something in you said <em>this might be me</em>, please stay with us for a minute. Adults with untreated ADHD are roughly two to four times more likely than the general population to develop a problem with alcohol, weed, harder drugs, gambling, food, screens or shopping. That is not a verdict on you. It is biology, and the rest of this page is about why, and the next page is about what to do, and both are written without judgement because shame is the thing that keeps people stuck in this for years.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-74-addiction.jpg')`}}></div>
      </div>

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 12px"}}>Why this happens, in plain English</h3>
      <p style={{maxWidth:760, fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:32}}>The ADHD brain runs on a quieter dopamine signal than a neurotypical one. Dopamine is the brain chemical that says "this matters, do this, finish this, feel pleased about it", and ADHDers have less of it doing less of that work. Alcohol, weed, nicotine, cocaine, sugar, scrolling, online shopping, gambling, all of these temporarily top up the dopamine. The brain isn't being weak. It is, quite reasonably, looking for the thing it is short of. Once you understand that, the pattern stops being a moral story about willpower and starts being a chemistry story about a brain trying to self-medicate. That is a much kinder, and much more useful, frame to work from.</p>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:18}}>
        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">01 · The everyday ones</span>
          <h4 style={{marginTop:10, fontSize:22}}>The "soft" patterns most of us have, at some point.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>A bottle of wine every evening, just to take the edge off. Eight hours of TikTok and you cannot remember a single video. Online shopping carts at 1am for things you do not need. Food you eat without tasting it, after the kids are in bed. Vaping or nicotine from the moment you wake up. Gaming until 4am, again. Caffeine until your hands shake. None of these is, on its own, an emergency. They are however your brain reaching for a dopamine top-up because the day did not have enough of it. The honest question is not "is this bad", it is "is this slowly hollowing me out". You probably already know the answer for one of them. That one is the place to start, not all of them at once.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">02 · The heavier ones</span>
          <h4 style={{marginTop:10, fontSize:22}}>The patterns that scare you and feel hard to name.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>Daily weed for years. Cocaine, ketamine or MDMA at scales your non-ADHD friends do not match. Stimulant misuse, taking someone else's Vyvanse or Ritalin because it makes you feel functional. Gambling, particularly online, where the dopamine hit is faster and more precise than almost anything else. If you have noticed an "I cannot stop, even when I want to" pattern with any of these, please know that you are not alone, you are not unusual in ADHD circles, and treating the underlying ADHD is often the single biggest lever for changing it. Naming this out loud to one person, a GP, a partner, a sponsor, a helpline, is the entire first step. Nobody is going to drag you to a clinic. You will not lose your job for telling your GP. You will, however, feel about ten percent lighter, immediately, because the secret was the heavy part.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">03 · The thing we want you to take from this page</span>
          <h4 style={{marginTop:10, fontSize:22}}>You are not broken. You are unmedicated, and uninformed.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>Most ADHDers who develop a substance issue do so before they know they have ADHD. They spend their teens and twenties wondering why they cannot just have one drink, why a hobby becomes an obsession, why the off-switch other people seem to have is broken in them. Then they get diagnosed, often in their thirties or forties, and the whole life suddenly makes sense in retrospect. If that is you, please notice that you have survived an unmedicated, undiagnosed condition for years, while everyone around you assumed you were lazy or chaotic or broken. The surviving is the impressive bit. The patterns are what your brain did to get you through. Treating the ADHD, properly, often softens those patterns more gently than anything else, and the next page is about how.</p>
        </div>
      </div>
    </div>
  );
}

function PageAddictionB() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 9 · ADHD and addiction · Part 2 of 2</span>
          <h2 style={{marginTop:16}}>What actually helps. Free, in the UK, today.</h2>
          <p className="lede">This page is the practical companion to the previous one. If you read part one and felt a small click of recognition, this is the next step, the human-scale things that have helped thousands of UK adults with ADHD-shaped patterns. None of it requires a diagnosis. None of it requires you to call yourself an addict if you do not want to. None of it is about willpower. All of it is about giving a tired, dopamine-hungry brain better support than it has been getting.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80")}')`}}></div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:18, marginTop:8}}>
        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">04 · The single biggest lever</span>
          <h4 style={{marginTop:10, fontSize:22}}>Get the ADHD assessed and, if right for you, treated.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>This sounds obvious and it is, in practice, transformative. A large share of ADHDers who start medication report that within a few months their pull towards their go-to substance quietly softens, because the underlying dopamine drought is finally being addressed. Please be honest with your prescriber about what you use and how often, even the embarrassing bits, because it changes which medication is right for you. If you have a history of stimulant misuse or any active substance issue, non-stimulants like atomoxetine and guanfacine carry far less misuse risk than the classic stimulants and may be the safer place to start. UK psychiatrists are used to this conversation. They are not going to refuse you treatment for telling the truth, in fact the opposite, the people who get the best outcomes are the ones who give their prescriber the full picture from the start.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">05 · Free UK services that actually understand ADHD</span>
          <h4 style={{marginTop:10, fontSize:22}}>The numbers worth saving in your phone, just in case.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}><strong>Talk to Frank</strong> (0300 123 6600, talktofrank.com) is the UK's national drugs information line, anonymous, 24/7, and very used to ADHD-shaped self-medication. <strong>Drinkaware</strong> (drinkaware.co.uk) has a self-assessment that takes four minutes and is honest without being preachy. <strong>Alcoholics Anonymous</strong> (0800 9177 650, alcoholics-anonymous.org.uk) is free, confidential, and runs in-person and online meetings across every UK town, and is more secular and more welcoming to neurodivergent people than its reputation suggests. <strong>GamCare</strong> (0808 8020 133, gamcare.org.uk) is the equivalent for gambling. Your local <strong>NHS Community Drug and Alcohol Service</strong> is also free, you can self-refer without a GP, and they specialise in working with people who are not yet sure they want to stop. Mentioning ADHD when you ring any of these is welcomed, not penalised, and usually means they can point you at the person on the team who gets it.</p>
        </div>

        <div className="card" style={{padding:"24px 26px"}}>
          <span className="eyebrow muted">06 · The small daily moves that actually stack</span>
          <h4 style={{marginTop:10, fontSize:22}}>Replace the dopamine, do not just remove it.</h4>
          <p style={{marginTop:12, fontSize:15.5, color:"var(--ink-2)", lineHeight:1.7}}>The classic mistake is to try to white-knuckle abstinence with nothing in its place. That almost never works for ADHD brains, because the underlying dopamine deficit is still there and the brain will eventually find another way to top up, sometimes a worse one. The thing that does work is to put something else in the slot. Movement is the biggest one, and it does not have to be a gym membership, a brisk walk in daylight is the most-studied, lowest-friction, evidence-backed dopamine source available to you. A dopamine menu (see chapter 4) gives your brain a list of small reliable joys to reach for when the craving hits. A body-doubling session on Focusmate at the time of day you most often slip can quietly redirect an hour you would have otherwise spent scrolling. None of these is a cure. All of them help, and stacked together over months they make the cravings a smaller part of your day. Be patient with yourself. You are not failing if it takes a year. The people who get out of these patterns are the ones who keep coming back to them gently, not the ones who try to fix it all in a weekend.</p>
        </div>
      </div>

      <div className="disclaim" style={{marginTop:28}}>
        <strong>If you are in real crisis right now.</strong> Please ring Samaritans on 116 123, free, 24/7, or NHS 111 option 2 for an urgent mental health response. If you are using substances and have any concern about your physical safety, A&amp;E is the right place, not the wrong place. You will be looked after. You will not be reported. You deserve the care.
      </div>
    </div>
  );
}

function PageFirstWeeksMeds() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 5 · Medication</span>
          <h2 style={{marginTop:16}}>The first two weeks on meds.</h2>
          <p className="lede">Most people do not feel "fixed" on day one. Some feel nothing for a fortnight. A few feel jittery. A handful describe a quiet click, as if a fan inside their head finally turned off. Here is what is normal, what is not, and when to ring your prescriber.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80")}')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">Often normal · Days 1-3</span><h4 style={{marginTop:10}}>The first few days</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A bit of jitteriness, reduced appetite, a low-grade headache or a slightly dry mouth are all common. Some people describe a subtle "the noise in my head is quieter" feeling, and some people feel nothing at all, which is also fine, the starting dose is deliberately low.</p></div>
        <div className="card"><span className="eyebrow muted">Often normal · Days 4-14</span><h4 style={{marginTop:10}}>The settling-in fortnight</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Side effects usually start to settle by the end of week two, though the clinical effect can still feel subtle. Many people only notice real change after the second or third dose increase, because titration is genuinely a six to twelve week process, not a switch you flick on day one.</p></div>
        <div className="card"><span className="eyebrow muted">Worth a call</span><h4 style={{marginTop:10}}>Ring your prescriber if</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Heart racing or chest pain, severe anxiety or panic that won't ease, a hard mood crash on the come-down, sleep destroyed for more than five nights in a row, or genuinely not being able to eat at all, any of these are reasons to pick up the phone. None of it means you cannot tolerate medication, it usually means the dose or the molecule is wrong for you and needs adjusting.</p></div>
        <div className="card"><span className="eyebrow muted">What often helps</span><h4 style={{marginTop:10}}>A few practical anchors</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Try to take your meds at roughly the same time every day, and eat something protein-heavy first, otherwise your appetite will not return until 7pm. Keep a water bottle in arm's reach, stimulants are diuretic. And note daily one-to-ten ratings of focus, mood and sleep, your prescriber will absolutely ask at the next review.</p></div>
      </div>
      <div className="disclaim" style={{marginTop:24}}><strong>If the first med doesn't work, ask to try another.</strong> About 70% of people respond to the first stimulant they try. The other 30% need a second. There are six UK-licensed ADHD medications, you are entitled to titrate through them.</div>
    </div>
  );
}

function PageBodyOnMeds() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 5 · Medication</span>
          <h2 style={{marginTop:16}}>What stimulants do to your body.</h2>
          <p className="lede">Stimulants are largely safe in healthy adults at prescribed doses. They do real, observable things to your body, though, and knowing what to expect can spare you a 3am scroll through worst-case search results.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=80")}')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">Appetite</span><h4 style={{marginTop:10}}>The "no lunch" effect</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You will likely not feel hungry until evening. Set a reminder, eat anyway. Protein-heavy breakfast before meds, simple lunch you can eat without wanting it, normal dinner when the meds taper. Weight loss is common in the first 3 months and usually stabilises.</p></div>
        <div className="card"><span className="eyebrow muted">Sleep</span><h4 style={{marginTop:10}}>Often improves, give it time</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A lot of ADHDers actually sleep better on meds because the racing brain finally quietens, which is the opposite of what most people expect. If sleep is destroyed instead of helped, the dose is usually too high or the timing too late in the day, and the answer is to tell your prescriber rather than push through.</p></div>
        <div className="card"><span className="eyebrow muted">Heart and blood pressure</span><h4 style={{marginTop:10}}>Something to track, not fear</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Stimulants do raise blood pressure and heart rate by a few points, which is why your prescriber will check both every six months. If you already know you have cardiac issues, mention them up front. The honest read of the research is that long-term cardiac risk in healthy adults at prescribed doses is small, and worth weighing against the cost of untreated ADHD.</p></div>
        <div className="card"><span className="eyebrow muted">Skin, mouth, gut</span><h4 style={{marginTop:10}}>Small changes</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Dry mouth (sip water), occasional skin tingling, sometimes constipation. Mostly settle in week two. If anything is severe or persistent, ring your prescriber.</p></div>
        <div className="card"><span className="eyebrow muted">Mood and the come-down</span><h4 style={{marginTop:10}}>The 5pm dip is real</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>As short-acting meds wear off, a lot of people feel irritable or flat for an hour or so, and the people you live with will notice it before you do. Eating protein, drinking water and a short walk help more than they should. If the dip is making evenings difficult, ask your prescriber about a longer-acting version or a small top-up dose.</p></div>
        <div className="card"><span className="eyebrow muted">Cycle, illness, alcohol</span><h4 style={{marginTop:10}}>How they interact</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Meds feel less effective in the luteal phase. They feel less effective when you are unwell. Alcohol blunts them and increases the crash, drinking on stims is more dehydrating and often shorter-lived.</p></div>
      </div>
    </div>
  );
}

function PageBurnout() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 6 · Work</span>
          <h2 style={{marginTop:16}}>If you already feel broken.</h2>
          <p className="lede">You did not pace yourself because you couldn't. The hyperfocus, the overworking, the keeping-up-at-all-costs has finally run out and your body has handed you the bill. ADHD burnout is real, common, and yes, recoverable.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-64-burnout.jpg')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18}}>
        <div className="card"><span className="eyebrow muted">What it looks like</span><h4 style={{marginTop:10}}>The collapse</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Can't get out of bed. Can't reply to texts. Even fun things feel impossible. Crying at small things. A sense that the version of you who did normal life has disappeared. This is not depression in the classical sense, it is the consequence of years of compensation.</p></div>
        <div className="card"><span className="eyebrow muted">Sick leave is a tool</span><h4 style={{marginTop:10}}>Please let yourself use it</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>You can self-certify for the first seven days and after that your GP writes a sick note, usually for "burnout" or "stress-related illness", and there is nothing unusual or shameful about either of those phrases on a fit note. Statutory Sick Pay is your right too (around £116.75/week at the 2025/26 rate, worth checking the current figure).</p></div>
        <div className="card"><span className="eyebrow muted">Going back</span><h4 style={{marginTop:10}}>A phased return is your right</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Under the Equality Act, you can ask for a phased return, reduced hours, fewer responsibilities for a while, longer breaks, all of it, and you are not asking for a favour when you do. Occupational Health (OH) reports tend to unlock this kind of adjustment more easily than asking line managers directly, so if you can, ask HR to refer you for one.</p></div>
        <div className="card"><span className="eyebrow muted">Climbing back out</span><h4 style={{marginTop:10}}>The five non-negotiables</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Sleep, real food, daylight, gentle movement, and one person you can be properly honest with, that is the floor. This is not the season for productivity hacks or optimisation. Most ADHD burnouts take three to six months to climb out of, which feels much slower than is acceptable on day one and much faster than feels possible by the end of week one.</p></div>
      </div>
    </div>
  );
}

// GLOSSARY
const GLOSSARY = [
  { term: "ADHD", def: "Attention Deficit Hyperactivity Disorder. The current diagnostic term covering three presentations, inattentive, hyperactive-impulsive, and combined." },
  { term: "ADD", def: "The old name for what is now called inattentive-presentation ADHD. Not in current diagnostic manuals." },
  { term: "ASRS", def: "Adult ADHD Self-Report Scale. The WHO six-question screener used as a starting point by GPs. Used in this playbook." },
  { term: "AuDHD", def: "Informal term for someone who has both autism and ADHD. Around 30% of ADHDers also meet criteria for autism." },
  { term: "Body doubling", def: "Working alongside another person (in real life or on video) to make starting a boring task easier. Focusmate is the popular app." },
  { term: "CAMHS", def: "Child and Adolescent Mental Health Services. The NHS team that assesses and supports under-18s." },
  { term: "DLA", def: "Disability Living Allowance, a benefit for under-16s with care or mobility needs." },
  { term: "DSA", def: "Disabled Students' Allowances, UK government funding for university students with ADHD to cover equipment, coaching, and study support." },
  { term: "EHCP", def: "Education, Health and Care Plan. A legally binding document for under-25s in England that sets out the support a child needs at school." },
  { term: "Executive function", def: "The brain's set of skills for planning, starting tasks, managing time, regulating emotion. Often impaired in ADHD." },
  { term: "Hyperfocus", def: "Intense, sustained absorption in a task you find interesting. A core ADHD trait, not a contradiction." },
  { term: "ICB", def: "Integrated Care Board. The NHS body that funds and commissions services in your area, including ADHD assessments." },
  { term: "NICE", def: "National Institute for Health and Care Excellence. The body that publishes the UK clinical guideline for ADHD (NG87)." },
  { term: "Right to Choose", def: "An NHS England policy letting you pick any NHS-contracted provider for your assessment. Drops typical waits from years to months." },
  { term: "RSD", def: "Rejection Sensitive Dysphoria. The intense physical pain response many ADHDers feel to perceived rejection. Not a formal diagnosis but widely recognised." },
  { term: "RTC", def: "Shorthand for Right to Choose." },
  { term: "SENCO", def: "Special Educational Needs Co-ordinator. The teacher in every English school responsible for SEN support, including ADHD." },
  { term: "Shared care", def: "An agreement where your private/RTC psychiatrist hands prescribing to your NHS GP so you pay NHS prices for medication." },
  { term: "Spoons / spoon theory", def: "A metaphor for limited daily energy. ADHDers often start with fewer 'spoons' and burn through them faster." },
  { term: "Stimulants", def: "Class of ADHD medication including methylphenidate (Concerta, Ritalin) and lisdexamfetamine (Elvanse). Most-prescribed and most-effective." },
  { term: "Titration", def: "The medical process of slowly increasing a medication dose to find the right one for you. Usually 6-12 weeks." },
];

function PageGlossary() {
  const [q, setQ] = useS5("");
  const filt = q ? GLOSSARY.filter(g => (g.term + " " + g.def).toLowerCase().includes(q.toLowerCase())) : GLOSSARY;
  return (
    <div>
      <span className="chip">Reference · Glossary</span>
      <h2 style={{marginTop:16, marginBottom:8}}>The acronyms, decoded.</h2>
      <p style={{fontSize:16, color:"var(--muted)", marginBottom:20, maxWidth:600}}>The UK ADHD world has too many initials. Here are all of them, plain English.</p>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the glossary..." style={{width:"100%", maxWidth:520, padding:"14px 18px", fontSize:16, borderRadius:12, border:"1px solid var(--line)", background:"var(--paper)", color:"var(--ink)", fontFamily:"inherit", marginBottom:24}} />
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12}}>
        {filt.map((g,i) => (
          <div key={i} className="card" style={{padding:"18px 20px"}}>
            <h4 style={{fontSize:17, color:"var(--accent)"}}>{g.term}</h4>
            <p style={{marginTop:6, fontSize:14.5, color:"var(--ink-2)", lineHeight:1.5}}>{g.def}</p>
          </div>
        ))}
        {filt.length === 0 && <div style={{gridColumn:"1/-1", color:"var(--muted)", padding:"20px"}}>No matches. Tell us, we'll add it.</div>}
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_2 = [
  { ch: "self", title: "ADHD and the menstrual cycle", render: () => <PageCycle /> },
  { ch: "self", title: "ADHD in love", render: () => <PageRelationships /> },
];
function PageSharedCareScripts() {
  const [copiedIdx, setCopiedIdx] = useS5(-1);
  const SCRIPTS = [
    {
      tag: "Script 01 · Reframe as policy not personal",
      title: "When your old GP supported shared care and your new one won't.",
      text: "My previous GP supported my care under a shared-care agreement with my ADHD provider. Has your practice policy changed, or is this a personal clinical decision?",
      why: "This separates the GP as a person from the practice as an institution. Most refusals are practice-wide or ICB-led, not personal, and naming that lets the GP answer honestly without feeling attacked. If they say it's policy, you have grounds to ask for the policy in writing. If they say it's personal, you have grounds to ask for a different GP at the practice.",
    },
    {
      tag: "Script 02 · Surface the source",
      title: "When the refusal sounds blanket but unexplained.",
      text: "Is this refusal based on practice policy, or on guidance from the Local Medical Committee, the Primary Care Network, or the Integrated Care Board? I'd like to understand the source so I can take it up at the right level.",
      why: "GPs sometimes refuse on the basis of LMC guidance they've seen but cannot quite cite. Asking calmly for the source either gets you the document (useful for an ICB complaint) or surfaces that the refusal is less formal than implied. Either way the conversation moves forward.",
    },
    {
      tag: "Script 03 · Put it on the record",
      title: "When you want the refusal in writing, without it being a fight.",
      text: "Could I please have a copy of the policy or guidance your decision is based on, or a short letter confirming the refusal and the reason, so I have it for my records and any onward correspondence with my ADHD provider or the ICB?",
      why: "Asking in writing is your statutory right and almost always reframes the conversation. GPs are far more careful with a written refusal than a verbal one, and many will quietly reconsider rather than commit a refusal to paper. If they do put it in writing, you have what ADHD UK and your ICB need to act.",
    },
  ];

  function copyScript(text, idx) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(-1), 2200);
    });
  }

  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · After diagnosis</span>
          <h2 style={{marginTop:16}}>Three scripts for when shared care is refused.</h2>
          <p className="lede">If your GP has just told you they won't take over your ADHD prescription, you are not the first person this has happened to and you will not be the last. These three scripts were built and refined on r/ADHDUK over many hundreds of refused appointments. They are not magic, but they shift the conversation from emotion to accountability, and they work more often than you would think.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=80")}')`}}></div>
      </div>

      <p style={{maxWidth:760, marginBottom:28, color:"var(--ink-2)", fontSize:16, lineHeight:1.6}}>Print these off or save them to your phone before the appointment. Read them out if you need to, you will not be the first patient to do exactly that. The point is to stay calm, ask in this order, and treat each refusal as information rather than a verdict.</p>

      <div style={{display:"grid", gap:18}}>
        {SCRIPTS.map((s, i) => (
          <div key={i} className="card" style={{padding:"26px 28px"}}>
            <span className="eyebrow accent">{s.tag}</span>
            <h4 style={{marginTop:10, fontFamily:"var(--display)", fontWeight:500, fontSize:22, lineHeight:1.25}}>{s.title}</h4>
            <blockquote style={{margin:"18px 0", padding:"18px 22px", background:"var(--bg-2)", borderLeft:"4px solid var(--accent)", borderRadius:"8px", fontSize:17, lineHeight:1.55, color:"var(--ink)", fontStyle:"italic"}}>"{s.text}"</blockquote>
            <button onClick={() => copyScript(s.text, i)} className="btn btn-ghost" style={{border:"1px solid var(--line)", padding:"8px 16px", fontSize:13, marginBottom:14}}>
              {copiedIdx === i ? "✓ Copied" : "Copy this script"}
            </button>
            <p style={{fontSize:14.5, color:"var(--ink-2)", lineHeight:1.6, margin:0}}><strong style={{color:"var(--ink)"}}>Why it works.</strong> {s.why}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{marginTop:24, padding:"24px 28px", background:"var(--bg-2)"}}>
        <span className="eyebrow muted">If all three scripts get refused</span>
        <h4 style={{marginTop:10, fontFamily:"var(--display)", fontWeight:500, fontSize:22}}>Your next moves, in order</h4>
        <ol style={{marginTop:14, paddingLeft:22, fontSize:15, lineHeight:1.75, color:"var(--ink-2)"}}>
          <li><strong>Get the refusal in writing</strong>, citing the specific policy or LMC guidance.</li>
          <li><strong>Send it to your private or RTC provider</strong>, who almost always have a template appeal letter and may write directly to your GP on your behalf.</li>
          <li><strong>Complain to the ICB</strong> (Integrated Care Board) for your area, find it via the NHS website. ADHD UK has a template letter for this too.</li>
          <li><strong>Report the refusal to ADHD UK</strong> at adhduk.co.uk. They track refusals nationally and use the data to push for policy change.</li>
          <li><strong>Switch GP surgery</strong> if you can, r/ADHDUK keeps a quietly maintained community list of practices that do shared care and ones that refuse. Switching is free and the new practice cannot ask why.</li>
          <li><strong>Last resort, stay on private prescription</strong>. Around £100 to £300 a month. Hundreds of UK ADHDers do this for years rather than fight the shared-care battle. It is not failure.</li>
        </ol>
      </div>

      <div className="disclaim" style={{marginTop:24}}>
        <strong>Stay polite, always.</strong> The GP you are talking to almost certainly did not write the policy and likely disagrees with it themselves. The community evidence is consistent that the readers who get the best outcomes are the ones who stay warm, ask clearly, and treat the GP as an ally trapped in the same broken system you are.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_TESTED = [
  { ch: "test", title: "While you wait", render: () => <PageBeforePrivate /> },
  { ch: "test", title: "Shared care", render: () => <PageSharedCare /> },
  { ch: "test", title: "Refusal scripts", render: () => <PageSharedCareScripts /> },
];
window.PB_PAGES_EXTRA_MEDS = [
  { ch: "meds", title: "First two weeks on meds", render: () => <PageFirstWeeksMeds /> },
  { ch: "meds", title: "Stimulants and your body", render: () => <PageBodyOnMeds /> },
];
window.PB_PAGES_EXTRA_WORK = [
  { ch: "work", title: "If you already feel broken", render: () => <PageBurnout /> },
];
window.PB_PAGES_EXTRA_PRACTICAL = [
  { ch: "support", title: "Driving and the DVLA", render: () => <PageDriving /> },
  { ch: "support", title: "ADHD and money · The tax", render: () => <PageFinancesA /> },
  { ch: "support", title: "ADHD and money · The longer game", render: () => <PageFinancesB /> },
  { ch: "support", title: "ADHD and addiction · Why this happens", render: () => <PageAddictionA /> },
  { ch: "support", title: "ADHD and addiction · What helps", render: () => <PageAddictionB /> },
];
window.PB_PAGES_EXTRA_REFERENCE = [
  { ch: "support", title: "Glossary", render: () => <PageGlossary /> },
];
