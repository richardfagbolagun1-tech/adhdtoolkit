// Untangle Playbook, Content-5: the 10 most-requested gap pages + glossary
const { useState: useS5 } = React;

function PageBeforePrivate() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · While you wait</span>
          <h2 style={{marginTop:16}}>If you can't wait years and can't afford private.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">This is the question we get asked most. You can do a lot while you wait. None of it needs a diagnosis, and it costs nothing.</p>
          <PBSlider items={[
            {h:"Use Right to Choose, properly", p:"In England, Right to Choose may offer a faster NHS-funded assessment route if you are eligible and a suitable provider is available. Waiting times vary. The GP script page can help you ask."},
            {h:"Apply for Access to Work now", p:"You do not need a diagnosis. You can describe how your difficulties affect your work. They may help fund coaching, a noise-cancelling setup, and software. Decisions can take months, so apply early, and don't buy anything until it is approved. Apply at gov.uk/access-to-work."},
            {h:"Free ADHD coaching pilots", p:"The ADHD Foundation, ADHD UK and several NHS trusts run periodic free peer-support and coaching groups. Subscribe to their newsletters, places vanish in hours."},
            {h:"Use this playbook", p:"Body doubling (free via Focusmate), dopamine menus, the spoons framework, the apps in chapter 4, none of these need a diagnosis. Treat yourself as if your nervous system does not care whether you have a piece of paper."},
            {h:"Therapy for the shame", p:"NHS Talking Therapies are free and self-referral. You do not need to wait for a diagnosis to deal with the years of self-blame. Ask specifically for an ADHD-informed therapist if available."},
            {h:"Community is medicine", p:"r/ADHDUK, ADHD Babes, AADD-UK forums, local meet-ups via the ADHD Foundation. Free. Possibly the most effective intervention on this page."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-36-while-you-wait.webp')`}}></div>
      </div>
    </div>
  );
}

function PageSharedCare() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · After diagnosis</span>
          <h2 style={{marginTop:16}}>Shared care, the bit no one warns you about.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">You got diagnosed privately or via Right to Choose. Now you want your GP to take over the prescription so you pay standard NHS prescription charges instead of private prices that can run to hundreds. The handover is called shared care, and many GPs refuse. This page explains why, and what to do.</p>
            <div style={{display:"flex", flexDirection:"column", gap:14, marginTop:20}}>
            <div className="card"><h4 style={{marginTop:10}}>The agreement</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>A formal letter from your private/RTC psychiatrist to your GP, saying "we have titrated this patient, here is their dose, please prescribe NHS-side". The GP signs, NHS prescribes, you pay the standard NHS prescription charge, or you can buy a prepayment certificate if you need several items. Check current charges on nhs.uk.</p></div>
            <div className="card"><h4 style={{marginTop:10}}>The reasons</h4><p style={{marginTop:10, fontSize:15, color:"var(--ink-2)", lineHeight:1.55}}>Some ICBs (the bodies that fund GPs) instruct surgeries to refuse shared care for Right to Choose, citing "capacity". This is contested. GPs are also nervous about prescribing controlled drugs they did not titrate. None of this is your fault.</p></div>
            </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-37-shared-care.webp')`}}></div>
      </div>
      <div className="card" style={{marginTop:32}}>
        <h4 style={{marginTop:10, fontSize:20}}>Your options, in order</h4>
        <ol style={{marginTop:14, paddingLeft:20, fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>
          <li>Ask for the refusal in writing, citing the specific policy.</li>
          <li>Forward to your private/RTC provider, they often have template appeals.</li>
          <li>Complain to the ICB (Integrated Care Board) for your area. Find it via NHS website.</li>
          <li>Switch GP surgery, some local surgeries do shared care, others refuse blanket. r/ADHDUK keeps a community list.</li>
          <li>Last resort, stay on private prescription. Costs vary, so check with your provider. Many people do this for years.</li>
        </ol>
      </div>
      <div className="disclaim" style={{marginTop:24}}>This is one of the most active campaigning issues in UK ADHD right now. ADHD UK and AADD-UK are pushing for national policy change. Joining their mailing lists helps.</div>
    </div>
  );
}

function PageCycle() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Women</span>
          <h2 style={{marginTop:16}}>ADHD and the menstrual cycle.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">Oestrogen helps the brain use dopamine. When oestrogen falls in the second half of your cycle, ADHD symptoms often get worse. If the second half of each month feels harder, that matches what the research describes, although there are only a few studies so far.</p>
            <PBSlider items={[
              {h:"Days 1-14 · Follicular: The half that often feels easier", p:"As oestrogen rises, many people with ADHD notice better focus, a steadier mood and more motivation. Stimulant medication may also work better in these weeks. If you can, plan harder tasks for this time."},
              {h:"Days 14-28 · Luteal: The half where everything feels heavier", p:"As oestrogen falls, ADHD symptoms often get worse. Rejection can hurt more, planning gets harder, and your usual dose may seem to work less well. PMDD, a severe form of PMS, is more common in people with ADHD. If these two weeks have always felt very different, mention it to your GP."},
              {h:"What often helps: Track it, then plan around it", p:"Apps like Bearable or Moody Month let you record your mood, focus and energy alongside your cycle. After two or three months, you may start to see a pattern. Then you can plan around it, for example with a lighter workload and more rest in the last week."},
              {h:"Medication adjustments: It is okay to ask for a tweak", p:"If your tracking shows a clear pattern, take it to your prescriber. Some prescribers may discuss adjusting treatment across the cycle, but this is an individual decision. Taking the pill continuously, with no break, helps some women. PMDD can be treated alongside ADHD, so ask about it."},
            ]} />
            <div className="disclaim"><strong>Perimenopause is the bigger version of this.</strong> As oestrogen drops permanently in your 40s, ADHD symptoms can get much worse. Many women are diagnosed for the first time in their 40s for exactly this reason. Some women find HRT helps. Discuss it with your GP or a menopause clinician.</div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-17-cycle.webp')`}}></div>
      </div>
    </div>
  );
}

function PageDriving() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 7 · Practical</span>
          <h2 style={{marginTop:16}}>Driving, the DVLA, and your licence.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">An ADHD diagnosis does not stop you driving. There are rules to follow, especially about medication. This page explains them.</p>
          <PBAccordion items={[
            {h:"Group 1 (car, motorbike): Only if it affects your driving", p:"For a car or motorbike licence, you must tell the DVLA if your ADHD, or your medication, affects your ability to drive safely. This includes side effects such as drowsiness or blurred vision. If your driving is not affected, you do not need to tell them. If you are not sure, ask your prescriber."},
            {h:"Group 2 (lorry, bus, coach): Stricter rules", p:"For a lorry or bus licence, the medical standards are stricter. Check gov.uk/adhd-and-driving for the Group 2 rules and tell the DVLA if they apply to you. You can be fined up to £1,000 for not telling the DVLA about a condition that affects your driving, and you could be prosecuted if you have an accident because of it."},
            {h:"Stimulants and driving: The medical defence", p:"It is legal to drive on prescribed ADHD medication, as long as it does not affect your driving. In England and Wales, amphetamine is one of the drugs covered by drug-driving law, which matters if you take dexamfetamine or lisdexamfetamine. The law has a medical defence if you take your medicine as prescribed and your driving is not impaired. Keep your prescription slip or pharmacy label with you in case police ask."},
            {h:"First two weeks of meds: Be cautious", p:"When you start or change a dose, you may feel drowsy or jittery, or your vision may blur for a while. Avoid long drives in the first two weeks of a new dose."},
          ]} />
          <div className="disclaim" style={{marginTop:24}}>Current guidance is at <strong>gov.uk/adhd-and-driving</strong>. Rules can change, so check before you contact the DVLA.</div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-71-driving.webp')`}}></div>
      </div>
    </div>
  );
}

function PageRelationships() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 1.5 · Relationships</span>
          <h2 style={{marginTop:16}}>ADHD in love.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">Missed plans, forgotten bills, conversations that drift mid-sentence. For many couples these become the main source of arguments, often because neither person knows ADHD is behind them. This page is for both partners.</p>
            <PBSlider items={[
              {h:"For the ADHDer: The patterns that hurt", p:"You forget promises, say yes and then resent it, get lost in hyperfocus or misread your partner's tone. These come from ADHD, not from caring less. It helps to tell your partner that."},
              {h:"For the non-ADHD partner: What is happening", p:"Your partner is not ignoring you and has not stopped caring. ADHD affects their memory and attention. Their feelings may also be stronger, and criticism may hit them hard."},
              {h:"When one partner becomes the organiser", p:"One partner ends up remembering everything and doing all the admin, and starts to feel resentful. The partner with ADHD feels treated like a child and feels ashamed. Left alone, this pattern wears a relationship down. Couples therapy with someone who understands ADHD can help."},
              {h:"What helps: Tools, not lectures", p:"Try a shared calendar with reminders, a 20-minute check-in each week, and a written list of the three things that matter most to each of you. Melissa Orlov's book The ADHD Effect on Marriage is widely recommended."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-18-love-heart.webp')`}}></div>
      </div>
    </div>
  );
}

function PageFinancesA() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 7 · ADHD and money · Part 1 of 2</span>
          <h2 style={{marginTop:16}}>The ADHD tax.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you have ever stared at a parking fine, or a £42 late fee, or a fridge full of food that went off because you forgot it was there, and wondered what is wrong with you, this page is about that. ADHD can cost a lot of money in late fees, impulse buys, forgotten subscriptions, parking tickets and takeaways-because-there-was-no-plan-for-dinner. People call this the ADHD tax.</p>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:28}}>This page is the first of two on money. We split it because money and ADHD is sensitive, and trying to fix everything in a single bullet list is exactly the kind of thing your brain has been punished for failing at. Take it slowly. You do not need to apply all of this today. Pick the one thing on this page that feels least frightening, and start there. Part two, on the next page, is where we cover debt, benefits, and the long-game stuff.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/money-past-due.webp"}')`}}></div>
      </div>


      <PBSlider items={[
        {h:"Automate everything you possibly can.", p:<>The thing about an ADHD brain is that it is very good at solving problems in the moment, and quite bad at remembering the small recurring ones. Bills, council tax, rent, contents insurance, the dentist payment plan, every one of these is a decision you should not have to keep making. Set up direct debits the first chance you get. Standing orders into a savings pot on payday, the same day, every month, so it is gone before your brain has time to think of three things to spend it on. Ask your council to spread your council tax over twelve months instead of ten. Smaller monthly payments are easier to plan around. This is not about being more "responsible". Each regular payment you automate is one less thing to remember.</>},
        {h:"Cancel the subscriptions you forgot you had.", p:<>Many people who sit down and check their direct debits find subscriptions they had forgotten about, often for things they have not opened in months. A trial they meant to cancel. A gym from a hyperfixation last spring. Two streaming services they forgot they were paying for separately. This is not because you are bad with money. It is because your brain registered the initial sign-up but did not have any system for noticing the silent monthly cost afterwards. Apps like Emma, Snoop or Money Dashboard scan your bank, find them, and cancel them with one tap. It is a twenty-minute job that funds a year of birthday presents. If apps feel like a step too far, just open your banking app, sort by direct debits, and read down the list once. You will be surprised.</>},
        {h:"The 24-hour rule for anything over £30.", p:<>Impulse buying is not a moral failure. It is a dopamine event. Your brain finds a thing online, a wave of <em>yes, this, now</em> arrives, and the click feels like relief, the way a cigarette does for someone trying to quit. The trick is not to stop wanting things. The trick is to put a small, kind pause between wanting and buying. Anything over £30 goes onto a wishlist or a note on your phone, and you give yourself 24 hours. By the next morning the dopamine has dropped and you can look at it again with a quieter head. Most things will not survive the wait, and the ones that do, you really do want, and you can buy them without the regret afterwards. Try it once with a small thing. The success feels disproportionately good, and it teaches the brain that delaying is not the same as denying.</>},
      ]} />

      <div className="card" style={{marginTop:24, padding:"22px 26px", background:"var(--bg-2)"}}>
        <span className="eyebrow accent">A note before you go</span>
        <p style={{margin:"10px 0 0", fontSize:14.5, color:"var(--ink-2)", lineHeight:1.65}}>If reading this page has stirred up shame about past money decisions, try to be kind to yourself. Those decisions made sense at the time, with the brain you had and the information you had. You are reading this now, which means you are already doing the work. The next page is about debt, benefits, and the longer game, when you are ready for it.</p>
      </div>
    </div>
  );
}

function PageFinancesB() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 7 · ADHD and money · Part 2 of 2</span>
          <h2 style={{marginTop:16}}>If you are already in trouble, many people are in the same position, and there is help.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">A surprising number of the people we hear from arrive at money advice having been carrying debt, missed payments, or unclaimed benefits for years. ADHD makes money paperwork much harder than it should be. This page covers debt, missed payments and benefits, and the UK services that help.</p>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:28}}>If only one of the three points below applies to you right now, that is enough. You do not need to read all three. Pick the one that lines up with where you are, do that one thing in the next week, and let the others wait until they are needed.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-73-money-b.webp')`}}></div>
      </div>


      <PBSlider items={[
        {h:"There is free, judgement-free UK help, and it works.", p:<>Please, before anything else, hear this. Debt advisors are not bailiffs. They will not shame you, they will not lecture you, and they cannot tell anyone else. <strong>StepChange</strong> (stepchange.org, 0800 138 1111) and <strong>National Debtline</strong> (nationaldebtline.org, 0808 808 4000) are both completely free, both anonymous if you want them to be, and both used to ADHD-shaped patterns of money trouble. They will look at your situation with you, work out what you can realistically afford, and in many cases negotiate with creditors so the calls stop and the interest pauses. Many ADHDers carry debt because of executive function, not bad character, and the people answering these phones know that. If picking up the phone feels impossible, both have web chat and email forms. The first conversation is the hardest. For some people, the next morning feels calmer than it has in months.</>},
        {h:"PIP, DLA, Access to Work and grants.", p:<>If ADHD seriously affects your day-to-day functioning or your ability to work, you may be eligible for <strong>Personal Independence Payment</strong> (PIP, for adults) or <strong>Disability Living Allowance</strong> (DLA, for children under 16). The application is long and hard, which is especially tough when you have ADHD. Many claims are turned down at first, and many are then won on appeal. That is not a verdict on whether you deserve the support, it is a verdict on a process that is not built for our wiring. The way through it is to not do it alone. <strong>Benefits and Work</strong> (benefitsandwork.co.uk) publishes clear UK guides for people claiming benefits. Your local <strong>Citizens Advice</strong> can help you fill in the forms for free. <strong>Turn2us</strong> (turn2us.org.uk) has a grant search that takes ten minutes and surfaces hundreds of small charitable grants you may qualify for. Separately, <strong>Access to Work</strong> (gov.uk/access-to-work) may help fund coaching, software and equipment if you are employed or self-employed, subject to an individual assessment. Check current information on GOV.UK. None of these need a formal ADHD diagnosis, just a self-identified pattern of need. Many people who might qualify never apply.</>},
        {h:"One pot, named for the person you want to look after.", p:<>This last one is small, and some people find it changes how they feel about saving. Open a separate savings account, with most UK banks you can do it in five minutes on the app, and name it something emotional. "Future me." "Christmas, in advance, for the people I love." "The trip I keep meaning to take." Abstract financial goals do not land for ADHD brains, but named pots do, because they connect today's £25 to a specific person or feeling you care about. Set a standing order for whatever feels possible, even five pounds a week. The amount does not really matter. What you are training is the part of your brain that notices, once a month, that future-you is being looked after by present-you. That feels different from "saving money". It feels like care. And once you have one named pot working, the next one is easy.</>},
      ]} />

      <div className="disclaim" style={{marginTop:28}}>
        <strong>If your situation feels overwhelming.</strong> Please ring StepChange first, 0800 138 1111, free, weekdays. If money worries are putting you in dark headspace, Samaritans is 116 123, 24/7, also free, and they take calls about money worries. You don't need to be at crisis point to call either.
      </div>
    </div>
  );
}

function PageAddiction() { return <PageAddictionA />; }

function PageAddictionA() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 9 · ADHD and addiction · Part 1 of 2</span>
          <h2 style={{marginTop:16}}>This page covers ADHD and addiction. It is more common than you think.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you opened this page because something in you said <em>this might be me</em>, read on. Adults with ADHD are at higher risk of developing a problem with alcohol, weed, harder drugs, gambling, food, screens or shopping. This page explains why. The next page covers what helps.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 12px"}}>Why this happens</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)", marginBottom:32}}>The ADHD brain runs on a quieter dopamine signal than a neurotypical one. Dopamine is the brain chemical that says "this matters, do this, finish this, feel pleased about it", and in ADHD this system works differently. Alcohol, weed, nicotine, cocaine, sugar, scrolling, online shopping, gambling, all of these temporarily top up the dopamine. The brain isn't being weak. It is looking for a quick boost. Once you understand that, the pattern stops being a moral story about willpower and starts being a chemistry story about a brain trying to self-medicate. That is a much kinder, and much more useful, frame to work from.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-74-addiction.webp')`}}></div>
      </div>


      <PBSlider items={[
        {h:"The \"soft\" patterns many people have at some point.", p:<>A bottle of wine every evening, just to take the edge off. Eight hours of TikTok and you cannot remember a single video. Online shopping carts at 1am for things you do not need. Food you eat without tasting it, after the kids are in bed. Vaping or nicotine from the moment you wake up. Gaming until 4am, again. Caffeine until your hands shake. None of these is, on its own, an emergency. They are however your brain reaching for a dopamine top-up because the day did not have enough of it. A better question than "is this bad" is "is this slowly hollowing me out". You probably already know the answer for one of them. That one is the place to start, not all of them at once.</>},
        {h:"The patterns that scare you and feel hard to name.", p:<>Daily weed for years. Cocaine, ketamine or MDMA at scales your non-ADHD friends do not match. Stimulant misuse, taking someone else's Vyvanse or Ritalin because it makes you feel functional. Gambling, particularly online, where the dopamine hit is faster and more precise than almost anything else. If you have noticed an "I cannot stop, even when I want to" pattern with any of these, it is common in ADHD, and treating the underlying ADHD often helps most. Naming this out loud to one person, a GP, a partner, a sponsor, a helpline, is the entire first step. Nobody is going to drag you to a clinic. You will not lose your job for telling your GP. You will, however, feel lighter straight away, because keeping it secret was the heavy part.</>},
        {h:"Many people find out about ADHD later.", p:<>Many people with ADHD who develop a substance problem do so before they know they have ADHD. They spend their teens and twenties wondering why they cannot just have one drink, why a hobby becomes an obsession, why the off-switch other people seem to have is broken in them. Then they get diagnosed, often in their thirties or forties, and the whole life suddenly makes sense in retrospect. If that is you, remember that you may have been managing an undiagnosed condition for years, often while other people misunderstood you. The surviving is the impressive bit. The patterns are what your brain did to get you through. Treating the ADHD, properly, often softens those patterns more than anything else, and the next page is about how.</>},
      ]} />
    </div>
  );
}

function PageAddictionB() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" >Chapter 9 · ADHD and addiction · Part 2 of 2</span>
          <h2 style={{marginTop:16}}>What helps. Free, in the UK, today.</h2>
          <p className="lede">This page follows on from the last one. It covers practical steps that help. None of them need a diagnosis, and you don't have to call yourself an addict to use them.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/addiction-coffee-phone.webp"}')`}}></div>
      </div>

      <PBSlider items={[
        {h:"Get the ADHD assessed and, if right for you, treated.", p:<>Research links ADHD treatment with a lower risk of substance problems, and many people say their cravings eased once their ADHD was treated. Tell your prescriber honestly what you use and how often, because it affects which medication is right for you. If you have misused stimulants or have a current substance problem, a non-stimulant such as atomoxetine may be a safer place to start. UK psychiatrists are used to this conversation, and being honest helps them treat you well.</>},
        {h:"Numbers to save in your phone.", p:<><strong>Talk to Frank</strong> (0300 123 6600, talktofrank.com) is the UK's national drugs information line. It is anonymous and open 24 hours a day. <strong>Drinkaware</strong> (drinkaware.co.uk) has a short online check of your drinking. <strong>Alcoholics Anonymous</strong> (0800 9177 650, alcoholics-anonymous.org.uk) is free and confidential, with meetings online and across the UK. <strong>GamCare</strong> (0808 8020 133, gamcare.org.uk) offers the same kind of help for gambling. Your local <strong>NHS Community Drug and Alcohol Service</strong> is also free, and you can refer yourself without seeing a GP. You don't need to be sure you want to stop. Tell them you have ADHD when you call.</>},
        {h:"Replace what you are giving up.", p:<>Stopping with nothing to take its place is very hard with ADHD, because your brain still wants the boost. It helps to replace it with something else. Exercise is a good start, and a brisk walk in daylight counts. A dopamine menu from chapter 4 gives you a list of small, reliable pleasures to turn to when a craving hits. A Focusmate session at the time of day you usually slip can fill that hour. None of these is a cure, but together they help over time. It may take a year, and that is normal. Keep coming back to it.</>},
      ]} />

      <div className="disclaim" style={{marginTop:28}}>
        <strong>If you are in real crisis right now.</strong> Please ring Samaritans on 116 123, free, 24/7, or NHS 111 option 2 for an urgent mental health response. If you have used substances and are worried about your physical safety, go to A&amp;E. You will be looked after.
      </div>
    </div>
  );
}

function PageFirstWeeksMeds() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 5 · Medication</span>
          <h2 style={{marginTop:16}}>The first two weeks on meds.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Many people do not feel "fixed" on day one. Some feel nothing for a fortnight. A few feel jittery. Some describe a sudden calm. This page covers what is normal, what isn't, and when to call your prescriber.</p>
          <PBAccordion items={[
            {h:"Often normal · Days 1-3: The first few days", p:"A bit of jitteriness, reduced appetite, a low-grade headache or a slightly dry mouth are all common. Some people describe a subtle \"the noise in my head is quieter\" feeling, and some people feel nothing at all, which is also fine, the starting dose is deliberately low."},
            {h:"Often normal · Days 4-14: The settling-in fortnight", p:"For many people, side effects start to settle within a few weeks. Tell your prescriber if they don't. Many people only notice real change after the second or third dose increase, because titration is a six to twelve week process, not a switch you flick on day one."},
            {h:"Worth a call: Ring your prescriber if", p:"Call your prescriber if you have a racing heart or chest pain, severe anxiety or panic that won't ease, a big drop in mood as the dose wears off, very poor sleep for more than five nights, or you cannot eat at all. This does not necessarily mean medication is not for you. Your prescriber may suggest a different dose or medicine."},
            {h:"What often helps: A few practical anchors", p:"Try to take your meds at roughly the same time every day, and eat something protein-heavy first, otherwise your appetite will not return until 7pm. Keep a water bottle in arm's reach, stimulants are diuretic. And note daily one-to-ten ratings of focus, mood and sleep, your prescriber will ask about these at your next review."},
          ]} />
          <div className="disclaim" style={{marginTop:24}}><strong>If the first med doesn't work, ask to try another.</strong> Many people respond to the first stimulant they try. Some need to switch to a second. There are six UK-licensed ADHD medications, and you can try others if one doesn't suit you.</div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/first-weeks-breakfast.webp"}')`}}></div>
      </div>
    </div>
  );
}

function PageBodyOnMeds() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 5 · Medication</span>
          <h2 style={{marginTop:16}}>What stimulants do to your body.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Stimulants are largely safe in healthy adults at prescribed doses. They do real, observable things to your body, though, and it helps to know what to expect.</p>
            <PBAccordion items={[
              {h:"Appetite: The \"no lunch\" effect", p:"You will likely not feel hungry until evening. Set a reminder, eat anyway. Protein-heavy breakfast before meds, simple lunch you can eat without wanting it, normal dinner when the meds taper. Weight loss is common at first and often settles. Tell your prescriber if it worries you."},
              {h:"Sleep: Often improves, give it time", p:"Some people with ADHD sleep better on medication because their mind feels quieter, which surprises many. If your sleep gets much worse, tell your prescriber rather than pushing through. They may look at the dose or timing."},
              {h:"Heart and blood pressure: Something to track, not fear", p:"Stimulants do raise blood pressure and heart rate by a few points, which is why your prescriber will check both every six months. If you already know you have cardiac issues, mention them up front. Research suggests that long-term cardiac risk in healthy adults at prescribed doses is small, and worth weighing against the cost of untreated ADHD."},
              {h:"Skin, mouth, gut: Small changes", p:"Dry mouth (sip water), occasional skin tingling, sometimes constipation. Mostly settle in week two. If anything is severe or persistent, ring your prescriber."},
              {h:"Mood and the come-down: The 5pm dip is real", p:"As short-acting meds wear off, a lot of people feel irritable or flat for an hour or so, and the people you live with will notice it before you do. Eating protein, drinking water and a short walk help more than they should. If the dip is making evenings difficult, ask your prescriber about a longer-acting version or a small top-up dose."},
              {h:"Cycle, illness, alcohol: How they interact", p:"Meds feel less effective in the luteal phase. They feel less effective when you are unwell. Alcohol blunts them and increases the crash, drinking on stims is more dehydrating and often shorter-lived."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/meds-body-breakfast.webp"}')`}}></div>
      </div>
    </div>
  );
}

function PageBurnout() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" >Chapter 6 · Work</span>
          <h2 style={{marginTop:16}}>If you already feel broken.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">ADHD burnout often follows years of overworking and hyperfocus to keep up. It is common, and you can recover from it.</p>
          <PBAccordion items={[
            {h:"What it looks like: The collapse", p:"You cannot get out of bed or reply to texts. Even things you enjoy feel impossible, and you cry at small things. It can look like depression, but it often comes from years of working hard to keep up."},
            {h:"Take sick leave: It is there for this", p:"You can sign yourself off for the first seven days. After that, your GP can give you a fit note, often for burnout or stress-related illness. You may also be entitled to Statutory Sick Pay. Check the current rate on gov.uk."},
            {h:"Going back: You can ask for a phased return", p:"Under the Equality Act, you can ask for a phased return, shorter hours, fewer duties for a while or longer breaks. An Occupational Health report often makes these easier to agree, so ask HR to refer you if you can."},
            {h:"Recovering: Five basics", p:"Sleep, proper meals, daylight, gentle exercise and one person you can talk to openly. Leave productivity tips for later. Recovery often takes a few months, and it can feel slow at first."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-64-burnout.webp')`}}></div>
      </div>
    </div>
  );
}

// GLOSSARY
const GLOSSARY = [
  { term: "ADHD", def: "Attention Deficit Hyperactivity Disorder. The current diagnostic term covering three presentations, inattentive, hyperactive-impulsive, and combined." },
  { term: "ADD", def: "The old name for what is now called inattentive-presentation ADHD. Not in current diagnostic manuals." },
  { term: "ASRS", def: "Adult ADHD Self-Report Scale. The WHO six-question screener used as a starting point by GPs. Used in this playbook." },
  { term: "AuDHD", def: "Informal term for someone who has both autism and ADHD. Many adults with ADHD are also autistic, though estimates vary widely between studies." },
  { term: "Body doubling", def: "Working alongside another person (in real life or on video) to make starting a boring task easier. Focusmate is the popular app." },
  { term: "CAMHS", def: "Child and Adolescent Mental Health Services. The NHS team that assesses and supports under-18s." },
  { term: "DLA", def: "Disability Living Allowance, a benefit for under-16s with care or mobility needs." },
  { term: "DSA", def: "Disabled Students' Allowances, UK government funding for university students with ADHD to cover equipment, coaching, and study support." },
  { term: "EHCP", def: "Education, Health and Care Plan. A legally binding document for under-25s in England that sets out the support a child needs at school." },
  { term: "Executive function", def: "The brain's set of skills for planning, starting tasks, managing time and managing emotions. These are often harder for people with ADHD." },
  { term: "Hyperfocus", def: "Intense, sustained absorption in a task you find interesting. A common ADHD trait." },
  { term: "ICB", def: "Integrated Care Board. The NHS body that funds and commissions services in your area, including ADHD assessments." },
  { term: "NICE", def: "National Institute for Health and Care Excellence. The body that publishes the UK clinical guideline for ADHD (NG87)." },
  { term: "Right to Choose", def: "An NHS England policy letting you pick any NHS-contracted provider for your assessment. Drops typical waits from years to months." },
  { term: "RSD", def: "Rejection Sensitive Dysphoria. A community term for intense sensitivity to perceived rejection or criticism. It is not a formal diagnosis in diagnostic manuals." },
  { term: "RTC", def: "Shorthand for Right to Choose." },
  { term: "SENCO", def: "Special Educational Needs Co-ordinator. The teacher in every English school responsible for SEN support, including ADHD." },
  { term: "Shared care", def: "An agreement where your private/RTC psychiatrist hands prescribing to your NHS GP so you pay NHS prices for medication." },
  { term: "Spoons / spoon theory", def: "A metaphor for limited daily energy. ADHDers often start with fewer 'spoons' and burn through them faster." },
  { term: "Stimulants", def: "Class of ADHD medication including methylphenidate (Concerta, Ritalin) and lisdexamfetamine (Elvanse). The most commonly prescribed type." },
  { term: "Titration", def: "The medical process of slowly increasing a medication dose to find the right one for you. How long this takes varies." },
];

function PageGlossary() {
  const [q, setQ] = useS5("");
  const filt = q ? GLOSSARY.filter(g => (g.term + " " + g.def).toLowerCase().includes(q.toLowerCase())) : GLOSSARY;
  return (
    <div>
      <span className="chip">Reference · Glossary</span>
      <h2 style={{marginTop:16, marginBottom:8}}>The acronyms, decoded.</h2>
      <p style={{fontSize:16, color:"var(--muted)", marginBottom:20,}}>The UK ADHD world has too many initials. Here are all of them, plain English.</p>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the glossary..." style={{width:"100%", padding:"14px 18px", fontSize:16, borderRadius:12, border:"1px solid var(--line)", background:"var(--paper)", color:"var(--ink)", fontFamily:"inherit", marginBottom:24}} />
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
      tag: "Script 1 · Reframe as policy not personal",
      title: "When your old GP supported shared care and your new one won't.",
      text: "My previous GP supported my care under a shared-care agreement with my ADHD provider. Has your practice policy changed, or is this a personal clinical decision?",
      why: "This separates the GP as a person from the practice as an institution. Most refusals are practice-wide or ICB-led, not personal, and naming that lets the GP answer without feeling attacked. If they say it's policy, you have grounds to ask for the policy in writing. If they say it's personal, you have grounds to ask for a different GP at the practice.",
    },
    {
      tag: "Script 2 · Surface the source",
      title: "When the refusal sounds blanket but unexplained.",
      text: "Is this refusal based on practice policy, or on guidance from the Local Medical Committee, the Primary Care Network, or the Integrated Care Board? I'd like to understand the source so I can take it up at the right level.",
      why: "GPs sometimes refuse on the basis of LMC guidance they've seen but cannot quite cite. Asking calmly for the source either gets you the document (useful for an ICB complaint) or surfaces that the refusal is less formal than implied. Either way the conversation moves forward.",
    },
    {
      tag: "Script 3 · Put it on the record",
      title: "When you want the refusal in writing, without it being a fight.",
      text: "Could I please have a copy of the policy your decision is based on, or a short letter confirming the refusal and the reason? I need it for my records and for my ADHD provider.",
      why: "Asking for a decision in writing is a reasonable request and can help the conversation. GPs are far more careful with a written refusal than a verbal one, and many will reconsider rather than commit a refusal to paper. If they do put it in writing, you have what ADHD UK and your ICB need to act.",
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
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 3 · After diagnosis</span>
          <h2 style={{marginTop:16}}>Three scripts for when shared care is refused.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If your GP has just told you they won't take over your ADHD prescription, this happens a lot. These three scripts come from people on r/ADHDUK who have been through it. They keep the conversation focused on the facts.</p>
          <p style={{marginBottom:28, color:"var(--ink-2)", fontSize:16, lineHeight:1.6}}>Print these off or save them to your phone before the appointment. Read them out if you need to, you will not be the first patient to do exactly that. Try to stay calm, ask in this order, and treat a refusal as information rather than a final answer.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/refusal-scripts-pills.webp')`}}></div>
      </div>


      <div style={{display:"grid", gap:18}}>
        {SCRIPTS.map((s, i) => (
          <div key={i} className="card" style={{padding:"26px 28px"}}>
            <h4 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, lineHeight:1.25}}>{i+1}. {s.title}</h4>
            <blockquote style={{margin:"18px 0", padding:"18px 22px", background:"var(--bg-2)", borderLeft:"4px solid var(--accent)", borderRadius:"8px", fontSize:17, lineHeight:1.55, color:"var(--ink)", fontStyle:"italic"}}>"{s.text}"</blockquote>
            <button onClick={() => copyScript(s.text, i)} className="btn btn-ghost" style={{border:"1px solid var(--line)", padding:"8px 16px", fontSize:13, marginBottom:14}}>
              {copiedIdx === i ? "✓ Copied" : "Copy this script"}
            </button>
            <p style={{fontSize:14.5, color:"var(--ink-2)", lineHeight:1.6, margin:0}}><strong style={{color:"var(--ink)"}}>Why it works.</strong> {s.why}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{marginTop:24, padding:"24px 28px", background:"var(--bg-2)"}}>
        <h4 style={{marginTop:10, fontFamily:"var(--display)", fontWeight:500, fontSize:22}}>Your next moves, in order</h4>
        <ol style={{marginTop:14, paddingLeft:22, fontSize:15, lineHeight:1.75, color:"var(--ink-2)"}}>
          <li><strong>Get the refusal in writing</strong>, citing the specific policy or LMC guidance.</li>
          <li><strong>Send it to your private or RTC provider</strong>, who may have a template letter and can sometimes contact your GP for you.</li>
          <li><strong>Complain to the ICB</strong> (Integrated Care Board) for your area, find it via the NHS website. ADHD UK has a template letter for this too.</li>
          <li><strong>Report the refusal to ADHD UK</strong> at adhduk.co.uk. They track refusals nationally and use the data to push for policy change.</li>
          <li><strong>Switch GP surgery</strong> if you can, r/ADHDUK keeps a maintained community list of practices that do shared care and ones that refuse. Switching is free and the new practice cannot ask why.</li>
          <li><strong>Last resort, stay on private prescription</strong>. Costs vary, so check with your provider. Some people do this for years rather than fight the shared-care battle. It is not failure.</li>
        </ol>
      </div>

      <div className="disclaim" style={{marginTop:24}}>
        <strong>Stay polite.</strong> Your GP probably didn't write the policy. People tend to get better results when they stay calm, ask clearly and treat the GP as being on their side.
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
