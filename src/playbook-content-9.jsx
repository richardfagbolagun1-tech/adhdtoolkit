// Untangle Playbook — Content-9: Diagnostic grief + Trans/nonbinary readers

// =================== GAP 6: DIAGNOSTIC GRIEF ===================

function PageGrief() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · After recognition</span>
          <h2 style={{marginTop:16}}>The grief no one warned you about.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Shame is one feeling. Grief is another, and it tends to arrive about three weeks after the diagnosis, once the relief has worn off. It is the quiet, awful realisation that you have been doing life on the hardest difficulty setting, alone, and that no one caught it. The friendships, the jobs, the relationships, the years, all of them touched by something that had a name the whole time. This is real, it is allowed, and it does pass.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>Why grief shows up, and why it isn't shame</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Shame says <em>I am bad</em>. Grief says <em>I lost something</em>. They use different parts of you and they need different things to heal. Most late-diagnosed adults move through both, often at the same time, and confuse one for the other. The way to tell which one you are sitting in, on any given day, is to notice what your inner sentence sounds like. If it sounds like a verdict on you as a person, it is shame, and the Shame page is where to go next. If it sounds like a loss being counted, the careers, the friendships, the version of you that might have existed if someone had caught this at twelve, that is grief, and grief asks to be witnessed, not fixed.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-19-grief.jpg')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The five things people grieve</h3>

      <PBSlider items={[
        {h:"The lost years.", p:"The decade or two where you knew something was wrong but everyone told you it was character, not condition. The therapy that never quite worked because it was treating the wrong thing. The self-help books, the productivity systems, the morning routines you couldn't stick to and assumed proved you were weak. None of it was you. You needed a different map."},
        {h:"The relationships.", p:"Friends who quietly stopped inviting you. Partners who couldn't understand why you kept forgetting their birthday when you clearly cared. Family who labelled you flaky, distant, selfish. Some of those people will read your diagnosis differently now. Some won't. Grieving the ones who won't is its own work, and it is fair to take time for it."},
        {h:"The career you didn't have.", p:"The job you left because you couldn't make the admin work. The promotion you turned down because the meetings were already crushing you. The dream you parked at twenty-five because you assumed you weren't disciplined enough. You were disciplined. You were running on a brain that needed scaffolding no one had told you existed."},
        {h:"The version of you that might have been.", p:"This is the hardest one. The hypothetical you who got caught at twelve, started medication at eighteen, never developed the people-pleasing armour, never lost a decade to burnout. That person doesn't exist. You are not behind them, you are simply you, on the timeline you actually lived. The grief is real anyway, and it is allowed."},
        {h:"The energy you spent masking.", p:"The cumulative cost of pretending to be someone whose brain worked differently, for twenty or thirty or forty years. The exhaustion that never made sense, the burnouts that came out of nowhere, the weekends you needed just to recover from being functional during the week. That energy is gone, and you are allowed to be furious about it before you are ready to move forward."},
        {h:"What grief is not.", p:"It is not a sign that diagnosis was a mistake. It is not evidence that you are stuck or self-pitying. It is not something you have to fix on a timeline. Grief about a late diagnosis is almost universal in late-diagnosed adults and the people who let themselves feel it tend to come out the other side faster than the people who try to skip past it into productivity."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What helps</h3>
      <PBSlider items={[
        {h:"Name it out loud.", p:"To one person, a friend or therapist or a community space, say the sentence \"I think I am grieving the years I lost\". Once you have said it out loud the feeling tends to get smaller, because grief that stays inside you tends to expand."},
        {h:"Write a letter to the kid you were.", p:"The version of you at eight, at fourteen, at twenty-two. Tell them what you know now that they didn't. Tell them it wasn't their fault. This sounds like a workbook exercise and it is, but it is also one of the most consistently useful things late-diagnosed adults describe doing."},
        {h:"Find a community of late-diagnosed people.", p:"r/ADHDUK, the ADHD Babes community (UK Black women), Sistas with ADHD, the ADHD Adults UK podcast Discord. The single biggest thing that reduces grief is realising you are part of a generation of people who got missed, not a person uniquely missed."},
        {h:"Therapy specifically with someone ADHD-trained.", p:"Generalist therapy can struggle with diagnostic grief because it is a relatively new specialism. The UK ADHD Coaches Professional Organisation (uk-aco.co.uk) lists therapists and coaches who get it. Diagnostic grief is well-understood inside ADHD-aware therapy and faster to move through with the right person."},
      ]} />

      <div className="disclaim">
        <strong>One last thing.</strong> Grief and gratitude can sit in the same chest at the same time. You can mourn the lost years and feel, simultaneously, profound relief that you finally know. Both are true. The work is not to choose between them, the work is to make space for the grief while you build the future the diagnosis has opened up.
      </div>
    </div>
  );
}

// =================== GAP 7: TRANS / NONBINARY READERS ===================

function PageGenderDiverse() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"#E8D6F5", borderColor:"#E8D6F5", color:"var(--ink)"}}>Chapter 1 · You are welcome here</span>
          <h2 style={{marginTop:16}}>For trans, nonbinary &amp; gender-diverse readers.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If the playbook has read so far as if ADHD comes in two flavours, men and women, this page is the correction. ADHD in trans, nonbinary, and gender-diverse adults is its own thing, shaped by hormones, by masking, by the experience of being read incorrectly for years, and by a healthcare system that often makes you choose which of your needs to advocate for first. You are not an afterthought. You belong here.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What we know, and what we don't</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>The research base on ADHD in trans and gender-diverse adults is small but growing, and the picture so far is consistent. Neurodivergence appears to be meaningfully more common in trans and nonbinary populations than in cis populations, which means many of you arrive at an ADHD diagnosis after, or alongside, a gender journey, and many cis-trained clinicians have never thought carefully about how the two interact. The community has been doing this thinking for years and what is in this page is drawn directly from that community, not from a textbook.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-20-couple.jpg')`}}></div>
      </div>


      <PBSlider items={[
        {h:"Symptoms can shift, sometimes a lot.", p:"Testosterone affects dopamine signalling, and a meaningful number of trans masc ADHDers describe their symptoms changing in the first year on T, sometimes easing, sometimes intensifying. Hyperactivity often becomes more noticeable. Emotional dysregulation can soften. None of this is universal, but if your ADHD experience is shifting alongside HRT, that is a real and reported pattern, and worth raising with whoever prescribes your ADHD medication."},
        {h:"The cyclical pattern can show up.", p:"If you are on cyclical oestrogen and progesterone, the ADHD-and-cycle dynamics covered earlier in this playbook may apply to you too. Many trans fem ADHDers describe a symptom flare in the luteal-equivalent week of their cycle. The whole \"track for three cycles\" approach in the cycle page works just as well here, and is one of the few places where existing ADHD literature on hormones actually transfers cleanly."},
        {h:"You may have been read as the wrong thing for years.", p:"If you were assigned female at birth, you may carry the same late-diagnosis profile we describe in the \"late-diagnosed women\" page, the masking, the high-functioning inattentive presentation, the diagnosis that arrived in your thirties. If you were assigned male at birth, you may carry a different masking pattern entirely. Both can be true at once, and both are worth taking to a diagnostic conversation."},
        {h:"The cumulative cost is real.", p:"Masking ADHD on top of masking gender is a documented exhaustion pattern in trans and nonbinary adults. Many describe their ADHD symptoms easing meaningfully after transition or coming out, not because the ADHD changed but because they finally stopped spending half their cognitive bandwidth on performance. If you are pre-transition or closeted and wondering why you are so tired, this is part of why."},
        {h:"You can pursue both at once.", p:"There is no rule that says you have to resolve a gender clinic referral before pursuing an ADHD assessment, or vice versa. They are run by entirely different services and both have long waiting lists, so most community advice is to start both processes in parallel. The Fast Track GP letter in this playbook can run alongside a Gender GP or NHS gender clinic referral without interference."},
        {h:"You can ask explicitly.", p:"Most NHS Right to Choose providers can tell you whether their assessing clinicians have experience with gender-diverse patients if you ask directly when booking. It is a reasonable question, you are not being difficult by asking it, and a provider that bristles at the question is telling you something useful before you book. Psychiatry UK and ProblemShared are both reported in community spaces as broadly trans-friendly, though experiences vary."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>Communities and resources</h3>
      <PBSlider items={[
        {h:"Neuroqueer (online)", p:"Long-running community space for LGBTQIA+ neurodivergent adults. Active Discord, frequent UK voices, no medical claims, lots of lived experience."},
        {h:"r/adhdwomen", p:"Explicitly welcomes \"trans women, non-binary, agender, and genderqueer folks\". The mod team have been firm about this for years and the community follows."},
        {h:"Gendered Intelligence (UK)", p:"UK charity supporting trans, nonbinary and gender-diverse people. Not ADHD-specific, but the support workers are reliably good at navigating intersecting healthcare needs."},
        {h:"ADHD UK forums", p:"The general UK community space is broadly inclusive. If you post a question framed around your specific intersection, you will almost always get someone who has navigated the same thing answering."},
      ]} />

      <div className="disclaim">
        <strong>If your GP misgenders you while you are also trying to get an ADHD referral.</strong> You are allowed to address it. The two issues are separate but they sit in the same appointment, and there is no rule that says you have to put up with one to get the other. A short, calm "could you use my correct name and pronouns, please, and then we can talk about the ADHD referral" works far more often than people expect, and it sets the tone for the rest of the relationship with that practice.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_3 = [
  { ch: "self", title: "Diagnostic grief", render: () => <PageGrief /> },
  { ch: "self", title: "Trans, nonbinary & gender-diverse readers", render: () => <PageGenderDiverse /> },
];
