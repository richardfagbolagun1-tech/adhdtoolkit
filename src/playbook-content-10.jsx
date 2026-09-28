// Untangle Playbook — Content-10: AuDHD + Marginalised UK communities

// =================== GAP 8: AUDHD ===================

function PageAuDHD() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · You may be both</span>
          <h2 style={{marginTop:16}}>AuDHD, when ADHD and autism live in the same brain.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Many adults with ADHD are also autistic. Estimates vary between studies, but the overlap is common enough that people call it AuDHD. It is not a separate diagnosis. It means having both, which can be tiring, for example needing routine while also craving new things.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The two wirings, briefly</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>ADHD is, roughly, a difference in the brain's attention regulation and dopamine systems. Autism is, roughly, a difference in sensory processing, social processing, and cognitive flexibility. They are not the same thing and they are not on a spectrum together. They are two different neurotypes that happen to co-occur far more often than chance, which is why so many late-diagnosed ADHDers eventually wonder if they are autistic too, and why so many late-diagnosed autistic adults eventually wonder if they have ADHD as well.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-21-audhd.webp')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The signs you might be both</h3>

      <PBSlider items={[
        {h:"You need routine and you can't keep one.", p:"Autism likes things to be predictable, and ADHD makes that hard. Many AuDHD adults build detailed routines, drop them after two weeks, panic, and then build new ones. The two conditions pull in different directions."},
        {h:"You hyperfixate on special interests.", p:"ADHD hyperfocus and autistic special interests can look the same, but they feel different. Hyperfocus is intense, short-lived and tiring. Special interests are calmer and last for years. With AuDHD you often have both."},
        {h:"You seek out and avoid sensory input.", p:"You need stimulation, so you fidget, snack or put music on. You also struggle with noisy restaurants, bright lights or scratchy clothes. Both can happen in the same hour."},
        {h:"You mask in two different directions.", p:"Autistic masking means acting neurotypical, with eye contact and small talk. ADHD masking means acting organised, on time and attentive. Doing both all day is draining, and many AuDHD adults describe burning out because of it."},
        {h:"Demand avoidance hits harder.", p:"Demand avoidance is linked with autism, and ADHD can make it stronger. Many AuDHD adults find that the more important a task is, the harder it becomes to start, even when they want to do it."},
        {h:"Your social energy runs out quickly.", p:"Adults with ADHD often enjoy socialising and crash later. Autistic adults often find it hard work from the start. AuDHD adults may want to go out, enjoy it, and then need two days to recover."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>Getting assessed for both</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>The NHS routes for ADHD and autism are separate, with separate waiting lists and separate Right to Choose providers. You can be on both lists at the same time and most AuDHD adults are. If you go private, the same provider can sometimes assess both, but more often you will use one provider for ADHD and another for autism. Many people start with whichever is affecting them most right now, since there is no medical reason to do them in a set order.</p>

      <div className="card" style={{marginTop:24, padding:"24px 28px", background:"var(--bg-2)"}}>
        <h4 style={{marginTop:8, fontFamily:"var(--display)", fontWeight:500, fontSize:20}}>Where to go next</h4>
        <ul style={{marginTop:14, paddingLeft:22, fontSize:15, lineHeight:1.75, color:"var(--ink-2)"}}>
          <li><strong>r/AuDHD on Reddit</strong>, a large and active community, and a good place to feel less alone in this combination.</li>
          <li><strong>The Embrace Autism online tests</strong>, particularly the RAADS-R and the CAT-Q, are widely used in UK private assessments and are a reasonable starting point if you are wondering whether autism is part of your picture.</li>
          <li><strong>The National Autistic Society</strong> in the UK runs a separate set of resources and a helpline, and they are increasingly aware of AuDHD as a real lived experience rather than two conditions in the same body.</li>
          <li><strong>Books, if you read</strong>, <em>Unmasking Autism</em> by Devon Price and <em>Divergent Mind</em> by Jenara Nerenberg are widely recommended in AuDHD spaces and both have UK editions.</li>
        </ul>
      </div>

      <div className="disclaim" style={{marginTop:24}}>
        Getting the second diagnosis can be its own grief, on top of the first. Many AuDHD adults say it took months to rethink how they saw themselves. Many say they feel more settled afterwards than they have in years.
      </div>
    </div>
  );
}

// =================== GAP 9: MARGINALISED UK COMMUNITIES ===================

function PageWhoGetsMissed() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"#E8D6F5", borderColor:"#E8D6F5", color:"var(--ink)"}}>Chapter 1 · The diagnostic gap</span>
          <h2 style={{marginTop:16}}>Who the system misses, and what to do if that is you.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">ADHD is not diagnosed evenly across groups. Research suggests some groups, including people from minority ethnic backgrounds, are less likely to be diagnosed, and more likely to be told it is something else. What we know about the gap is below.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What the data shows</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>A large US study published in 2024 found that Asian, Black and Hispanic young people were less likely than white young people to have an ADHD diagnosis recorded. UK data on this is more limited. If you feel you have been overlooked, that does not make your difficulties any less real.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-22-working.webp')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>Why the gap exists</h3>

      <PBSlider items={[
        {h:"The diagnostic criteria were built on a narrow sample.", p:"Most of the original research on ADHD was done on white, middle-class, hyperactive boys in the United States. The diagnostic criteria still reflect that, so clinicians tend to spot that profile and miss others. If you don't fit the textbook, that does not mean you don't have ADHD."},
        {h:"The same behaviour is judged differently.", p:"A white middle-class boy who can't sit still gets called fidgety and referred. A Black boy doing the same thing gets called disruptive and disciplined. A Black girl doing the same thing gets called difficult."},
        {h:"GP referral rates are uneven.", p:"Research, mostly from the US, suggests that assumptions about who is likely to have ADHD can affect who gets referred and diagnosed. It can help to know this before your appointment."},
        {h:"Culture can keep symptoms hidden.", p:"In some families and cultures, mental health diagnoses are taboo and struggling is seen as a personal failing. Many adults from these backgrounds spend years blaming themselves before they recognise ADHD."},
        {h:"Cost is its own filter.", p:"Right to Choose is free, but using it takes confidence, time and persistence. Those are hardest to find for the people the system already misses."},
        {h:"Communities are filling the gap.", p:"Many of the most active UK ADHD groups for marginalised adults are run by the communities themselves. Some of the longest-running are below."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>UK communities by and for the people the system misses</h3>

      <PBSlider items={[
        {h:"ADHD Babes (UK)", p:"A community for Black women and non-binary people with ADHD or who suspect they have it. It runs free monthly meet-ups and peer support, and is widely recommended. adhdbabes.com."},
        {h:"Sistas with ADHD", p:"A UK community for Black women that runs events and mentoring. Members share advice on getting through the GP and assessment process."},
        {h:"ADHD Foundation Cultural Toolkit", p:"The ADHD Foundation publishes resources for South Asian, Black African and Caribbean families. Check their website for the latest, especially if you are a parent."},
        {h:"Neuroqueer", p:"An online community for LGBTQIA+ neurodivergent adults, with an active Discord."},
        {h:"The ADHD Foundation", p:"UK charity with multilingual resources, particularly useful if English is not your first language or your parents' first language. "},
        {h:"r/ADHDUK and r/ADHDWomen", p:"Both are general communities with a wide mix of members. If you can't find a group for your situation, post a question there and describe your circumstances. Someone with similar experience will often reply."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What helps in the appointment</h3>

      <PBSlider items={[
        {h:"Bring a written list.", p:"Write your symptoms down before any GP appointment. It keeps the conversation on the facts rather than on how you come across. The GP script page can help."},
        {h:"Take someone with you if you can.", p:"You can usually bring someone with you to a GP appointment. It can help to let the practice know in advance. Having another adult in the room can make the GP take the conversation more seriously."},
        {h:"Switch practices if you need to.", p:"If your GP has dismissed you in a way you cannot get past, you can register at any practice in your catchment area without giving a reason. Many people don't know they can do this."},
        {h:"Report the gap.", p:"If you experience a clearly biased refusal, ADHD UK want to hear about it. They collect reports of refusals to push for policy change. adhduk.co.uk."},
      ]} />

      <div className="disclaim">
        <strong>One thing worth saying directly.</strong> You may wonder whether to seek a diagnosis when others in your family managed without one. It is still worth doing. The generations before you did not have the options you have now. Using them can sit alongside how you were raised, and many people find it continues what their family was trying to do for them.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_4 = [
  { ch: "self", title: "AuDHD, when you have both", render: () => <PageAuDHD /> },
  { ch: "self", title: "Who gets missed", render: () => <PageWhoGetsMissed /> },
];
