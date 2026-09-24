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
          <p className="lede">If reading the ADHD pages so far has felt like a recognition, then keep reading. Somewhere between 30 and 40 percent of adults with ADHD also meet the criteria for autism, and the overlap is so consistent that the community has given the combination its own name. AuDHD is not a third diagnosis. It is the experience of carrying both wirings at once, and it has its own pattern, its own strengths, and its own particular kind of exhaustion.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The two wirings, briefly</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>ADHD is, roughly, a difference in the brain's attention regulation and dopamine systems. Autism is, roughly, a difference in sensory processing, social processing, and cognitive flexibility. They are not the same thing and they are not on a spectrum together. They are two different neurotypes that happen to co-occur far more often than chance, which is why so many late-diagnosed ADHDers eventually wonder if they are autistic too, and why so many late-diagnosed autistic adults eventually wonder if they have ADHD as well.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-21-audhd.jpg')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The signs you might be both</h3>

      <PBSlider items={[
        {h:"You need routine and you can't keep one.", p:"Autism craves predictability. ADHD undermines it. AuDHD adults describe building elaborate routines they then abandon two weeks in, then panicking because the routine was load-bearing, then building a new one. The cycle is exhausting and entirely real, and it is not a character flaw, it is two wirings pulling in different directions."},
        {h:"You hyperfixate on special interests.", p:"ADHD hyperfocus and autistic special interests can look identical from the outside, but they feel different. ADHD hyperfocus is intense and time-limited and tends to leave you exhausted. Special interests are quieter and more sustaining and you return to them across years and decades. AuDHD often gets both, which means your interests are both deep and chaotic."},
        {h:"You are simultaneously sensory-seeking and sensory-avoidant.", p:"You need stimulation, so you fidget, you snack, you put music on. You also can't handle a noisy restaurant or fluorescent lights or a scratchy jumper. Both are true, sometimes within the same hour. Most ADHD content frames sensory issues as autism's domain, but AuDHD adults will tell you it is a very specific double bind."},
        {h:"You mask in two different directions.", p:"The autistic mask is performing being neurotypical, eye contact, small talk, predictable affect. The ADHD mask is performing being organised, on-time, attentive. Doing both at once, all day, every day, is the documented reason so many AuDHD adults burn out catastrophically in their thirties."},
        {h:"Demand avoidance hits harder.", p:"Pathological Demand Avoidance, sometimes called PDA, is most associated with autism but ADHD's resistance to imposed structure compounds it. AuDHD adults often describe a particular flavour of refusal where the more important a task is, the more impossible it becomes, even tasks you genuinely want to do."},
        {h:"Social energy runs out fast and unpredictably.", p:"Pure ADHD adults often love socialising and crash later. Pure autistic adults often find socialising effortful from the start. AuDHD adults describe a confusing pattern where they want to socialise, do, enjoy it, and then crash for two days afterwards with no obvious trigger and no way to predict it."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>Getting assessed for both</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>The NHS routes for ADHD and autism are separate, with separate waiting lists and separate Right to Choose providers. You can be on both lists at the same time and most AuDHD adults are. If you go private, the same provider can sometimes assess both, but more often you will use one provider for ADHD and another for autism. The order people usually recommend is whichever one is hurting you more right now, because the right diagnosis is the one that unlocks the right treatment first, and there is no medical or practical reason to do them in any particular order.</p>

      <div className="card" style={{marginTop:24, padding:"24px 28px", background:"var(--bg-2)"}}>
        <span className="eyebrow muted">If you are nodding at most of this</span>
        <h4 style={{marginTop:8, fontFamily:"var(--display)", fontWeight:500, fontSize:20}}>Where to go next</h4>
        <ul style={{marginTop:14, paddingLeft:22, fontSize:15, lineHeight:1.75, color:"var(--ink-2)"}}>
          <li><strong>r/AuDHD on Reddit</strong>, more than 100,000 members, deeply active, the single best place to feel less alone in this combination.</li>
          <li><strong>The Embrace Autism online tests</strong>, particularly the RAADS-R and the CAT-Q, are widely used in UK private assessments and are a reasonable starting point if you are wondering whether autism is part of your picture.</li>
          <li><strong>The National Autistic Society</strong> in the UK runs a separate set of resources and a helpline, and they are increasingly aware of AuDHD as a real lived experience rather than two conditions in the same body.</li>
          <li><strong>Books, if you read</strong>, <em>Unmasking Autism</em> by Devon Price and <em>Divergent Mind</em> by Jenara Nerenberg are widely recommended in AuDHD spaces and both have UK editions.</li>
        </ul>
      </div>

      <div className="disclaim" style={{marginTop:24}}>
        Getting the second diagnosis can be its own grief, on top of the first. Most AuDHD adults describe a period where everything they thought they knew about themselves reshuffles, and that reshuffling takes months not weeks. The other side of it, the community will tell you, is the most settled most of them have felt in their adult lives. You are not too much. You are wired for both, and now you know.
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
          <p className="lede">The NHS does not diagnose ADHD evenly. If you are Black or Asian or working class or any of the people the medical system has historically failed, you are statistically less likely to have been referred, less likely to have been believed, and more likely to be sitting with this playbook quietly wondering if you are imagining the whole thing. You are not imagining it, and the gap is real, and this page is for you.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What the data shows</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>UK studies consistently find that Black and Asian adults are diagnosed with ADHD at significantly lower rates than white adults, even after adjusting for prevalence. The same is true for working-class and lower-income adults, for adults who did not go to university, for adults whose first language is not English, and for women across all of those groups. Prevalence is roughly the same. Diagnosis is not. The shortfall is the diagnostic gap, and it is the result of a system, not of you being less unwell or less worthy of help.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-22-working.jpg')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>Why the gap exists</h3>

      <PBSlider items={[
        {h:"The diagnostic criteria were built on a narrow sample.", p:"Most of the original research on ADHD was done on white, middle-class, hyperactive boys in the United States. The DSM criteria reflect that, and clinicians trained on those criteria tend to recognise that profile and miss everything else. If you don't present like the textbook, the textbook isn't the problem with you."},
        {h:"Behaviour gets read differently depending on who you are.", p:"A white middle-class boy who can't sit still gets called fidgety and referred. A Black boy doing the same thing gets called disruptive and disciplined. A Black girl doing the same thing gets called difficult. These patterns are well-documented in UK schools and they shape who gets noticed and who gets punished."},
        {h:"GP referral rates are uneven.", p:"UK research has found that GPs are less likely to refer Black and Asian patients onward for ADHD assessment, even when symptoms are described in identical language. This is not always conscious bias, it can be ambient assumptions about which patients are likely to be \"real\" cases. The pattern is real and worth knowing about before you walk into your appointment."},
        {h:"Cultural framing can keep symptoms hidden.", p:"In many cultural and family contexts, mental health diagnosis itself is taboo, struggle is character-building, and admitting you can't cope is considered a personal failing. Many adults from these contexts arrive at an ADHD self-recognition having spent decades framing the symptoms as moral problems rather than neurological ones."},
        {h:"Cost is its own filter.", p:"Right to Choose is theoretically free, but in practice it requires confidence, time, advocacy, and often a private screening to anchor the GP conversation. Each of those costs money or time or both, and the people most likely to have neither are the people the system was already missing."},
        {h:"The community is filling the gap itself.", p:"This is the genuinely hopeful bit. The most active and effective UK ADHD spaces for marginalised adults are run by the communities themselves, not by the NHS, not by big charities. Below are the ones that have been doing the work longest, and they are good."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>UK communities by and for the people the system misses</h3>

      <PBSlider items={[
        {h:"ADHD Babes (UK)", p:"A community for Black women and non-binary people with ADHD or who suspect they have it. Free monthly meet-ups, peer support, and a thoughtful, well-moderated space. Probably the single most-recommended UK organisation in this category. adhdbabes.com."},
        {h:"Sistas with ADHD", p:"UK-based community for Black women, runs events, mentoring, and an active social presence. Particularly strong on navigating the GP and assessment process as a Black woman, with people who have done it."},
        {h:"ADHD Foundation Cultural Toolkit", p:"The ADHD Foundation has been producing culturally-aware resources for South Asian and Black African and Caribbean families for some years now. Worth checking their site for the most recent materials, particularly if you are navigating diagnosis as a parent."},
        {h:"Neuroqueer", p:"Long-running community for LGBTQIA+ neurodivergent adults, including a strong subset of people sitting at multiple marginalised intersections. Active Discord, no medical claims, lots of lived experience."},
        {h:"The ADHD Foundation", p:"UK charity with multilingual resources, particularly useful if English is not your first language or your parents' first language. Their materials are calmer and less corporate than most of the NHS-adjacent options."},
        {h:"r/ADHDUK and r/ADHDWomen", p:"Both general communities, but both have active threads from readers at every intersection. If you can't find a community space specifically for you, posting in one of these with a clear \"I am a [your context] in the UK, has anyone navigated this?\" will reliably bring someone who has."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What helps in the appointment</h3>

      <PBSlider items={[
        {h:"Bring a written list.", p:"The single biggest equaliser in any GP appointment is having your symptoms written down in advance. It moves the conversation off whether you sound credible and onto what is on the paper. The \"what to say to your GP\" page in the playbook is built precisely for this, and writing it out yourself first is even better."},
        {h:"Take someone with you if you can.", p:"You are allowed to bring a friend or family member to a GP appointment, and the GP cannot refuse. Many readers find that a second adult in the room, particularly a calm one, meaningfully shifts how seriously the conversation is taken. It should not be necessary. Sometimes it is."},
        {h:"Switch practices if you need to.", p:"If your GP has dismissed you in a way you cannot get past, you can register at any practice in your catchment area without giving a reason. The new practice cannot ask. This is one of the underused rights in the NHS and it is particularly useful when you suspect the issue with your current GP is not about you."},
        {h:"Report the gap.", p:"If you experience a clearly biased refusal, ADHD UK want to hear about it. They are building a dataset of refusals and patterns to push for policy change, and individual reports do matter. adhduk.co.uk."},
      ]} />

      <div className="disclaim">
        <strong>One thing worth saying directly.</strong> If you have got this far in the playbook and you are wondering if you are allowed to claim a diagnosis, given everyone in your family or culture survived without one, the answer is yes. Survival is not the same as thriving, and the generations before you did not have access to the tools you have access to now. Choosing to use them is not a betrayal of how you were raised, it is a continuation of what your people were trying to do for you in the first place.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_4 = [
  { ch: "self", title: "AuDHD, when you have both", render: () => <PageAuDHD /> },
  { ch: "self", title: "Who gets missed", render: () => <PageWhoGetsMissed /> },
];
