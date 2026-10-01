// Untangle Playbook — Content-9: Diagnostic grief + Trans/nonbinary readers

// =================== GAP 6: DIAGNOSTIC GRIEF ===================

function PageGrief() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · After recognition</span>
          <h1 style={{marginTop:16}}>The grief no one warned you about.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Shame is one feeling. Grief is another. For some late-diagnosed adults, it appears after the initial relief of diagnosis. Some people feel they have been doing life on the hardest setting, without anyone noticing. Some people look back at friendships, jobs or years that might have gone differently. How this feels, and how long it lasts, is different for everyone. You do not have to work this out today.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>Why grief shows up, and why it isn't shame</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Shame says <em>I am bad</em>. Grief says <em>I lost something</em>. They use different parts of you and they need different things to heal. Most late-diagnosed adults move through both, often at the same time, and confuse one for the other. The way to tell which one you are sitting in, on any given day, is to notice what your inner sentence sounds like. If it sounds like a verdict on you as a person, it is shame, and the Shame page is where to go next. If it sounds like a loss being counted, the careers, the friendships, the version of you that might have existed if someone had caught this at twelve, that is grief, and grief asks to be witnessed, not fixed.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-19-grief.webp')`}}></div>
      </div>
      <PBQuote q={"When you spend the best part of a day acknowledging that there are areas in your life where you regularly fail, that can be quite overwhelming."} who={"Rory Bremner, on being diagnosed"} src={"Interview with The Times, 2017"} />


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The five things people grieve</h3>

      <PBSlider items={[
        {h:"The lost years.", p:"The decade or two where you knew something was wrong but everyone told you it was character, not condition. The therapy that never quite worked because it was treating the wrong thing. The self-help books, the productivity systems, the morning routines you couldn't stick to and assumed proved you were weak. None of it was you. You needed a different map."},
        {h:"The relationships.", p:"Friends who stopped inviting you. Partners who couldn't understand why you kept forgetting their birthday when you clearly cared. Family who labelled you flaky, distant, selfish. Some of those people will read your diagnosis differently now. Some won't. Grieving the ones who won't is its own work, and it is fair to take time for it."},
        {h:"The career you didn't have.", p:"The job you left because you couldn't make the admin work. The promotion you turned down because the meetings were already too much. The dream you parked at twenty-five because you assumed you weren't disciplined enough. You were disciplined. You were running on a brain that needed scaffolding no one had told you existed."},
        {h:"The version of you that might have been.", p:"This is the hardest one. The hypothetical you who got caught at twelve, started medication at eighteen, never developed the people-pleasing armour, never lost a decade to burnout. That person doesn't exist. It is normal to grieve that version of you."},
        {h:"The energy you spent masking.", p:"The cumulative cost of pretending to be someone whose brain worked differently, for twenty or thirty or forty years. The exhaustion that never made sense, the burnouts that came out of nowhere, the weekends you needed just to recover from being functional during the week. That energy is gone, and it is normal to feel angry about that before you feel ready to move on."},
        {h:"What grief is not.", p:"It is not a sign that diagnosis was a mistake. It is not evidence that you are stuck or self-pitying. It is not something you have to fix on a timeline. Grief is common after a late diagnosis. Giving yourself space to acknowledge it can help. If it is overwhelming or persistent, consider speaking to someone you trust or a qualified professional."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What helps</h3>
      <PBSlider items={[
        {h:"Name it out loud.", p:"To one person, a friend or therapist or a community space, say the sentence \"I think I am grieving the years I lost\". Once you have said it out loud the feeling tends to get smaller, because grief that stays inside you tends to expand."},
        {h:"Write a letter to the kid you were.", p:"The version of you at eight, at fourteen, at twenty-two. Tell them what you know now that they didn't. Tell them it wasn't their fault. It sounds like a workbook exercise, but it is one of the most useful things late-diagnosed adults describe doing."},
        {h:"Find a community of late-diagnosed people.", p:"r/ADHDUK, the ADHD Babes community (UK Black women), Sistas with ADHD. What helps grief most, for many people, is realising you are part of a generation of people who got missed, not a person uniquely missed."},
        {h:"Therapy specifically with someone ADHD-trained.", p:"Generalist therapy can struggle with diagnostic grief because it is a relatively new specialism. When you contact a therapist, ask directly whether they work with adults diagnosed late with ADHD. The right person makes this faster to move through."},
      ]} />

      <div className="disclaim">
        You can grieve the lost years and feel relieved to finally know, both at once.
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
          <h1 style={{marginTop:16}}>For trans, nonbinary &amp; gender-diverse readers.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Most ADHD writing talks only about men and women. For trans, nonbinary and gender-diverse adults, ADHD can be shaped by hormones, by masking, and by years of being seen as someone you are not. Healthcare can also make you choose which need to raise first.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What we know, and what we don't</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>The research base on ADHD in trans and gender-diverse adults is small but growing, and the picture so far is consistent. A large 2020 study in Nature Communications found that autism and other neurodevelopmental conditions, including ADHD, were more common among transgender and gender-diverse people, which means many of you arrive at an ADHD diagnosis after, or alongside, transition, and many clinicians have never thought carefully about how the two interact. The community has been doing this thinking for years and what is in this page is drawn directly from that community, not from a textbook.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-20-couple.webp')`}}></div>
      </div>


      <PBSlider items={[
        {h:"Symptoms can shift, sometimes a lot.", p:"Testosterone affects dopamine. Some trans men and trans masculine people with ADHD say their symptoms changed in their first year on testosterone. For some it got easier, for others harder. Research is limited, but if your ADHD changes alongside hormone treatment, tell whoever prescribes your ADHD medication."},
        {h:"The cyclical pattern can show up.", p:"If you take oestrogen and progesterone in a cycle, the menstrual cycle page may apply to you too. Some trans women with ADHD notice their symptoms get worse at the same point each cycle. Tracking your symptoms for three cycles, as that page suggests, can show the pattern."},
        {h:"You may have been misread for years.", p:"If you were assigned female at birth, the late-diagnosed women page may sound familiar: masking, quiet inattentive symptoms, and a diagnosis in your thirties. If you were assigned male at birth, your masking may look different. Tell your assessor about both."},
        {h:"The cumulative cost is real.", p:"Hiding your ADHD and your gender at the same time is tiring. Many trans and nonbinary adults say their ADHD felt easier after coming out or transitioning, because they had more energy left over. If you are not out yet and feel exhausted, this may be part of the reason."},
        {h:"You can pursue both at once.", p:"You do not have to finish a gender clinic referral before asking for an ADHD assessment, or the other way round. Different services run them and both have long waits, so it makes sense to start both at once. The Fast Track GP letter works alongside a gender clinic referral."},
        {h:"You can ask explicitly.", p:"When you book, ask the Right to Choose provider whether their clinicians have worked with gender-diverse patients. It is a fair question. If they react badly, that tells you something before you commit. People in online communities have described Psychiatry UK and ProblemShared as generally trans-friendly, though experiences vary."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>Communities and resources</h3>
      <PBSlider items={[
        {h:"Neuroqueer (online)", p:"An online community for LGBTQIA+ neurodivergent adults, with an active Discord and many UK members."},
        {h:"r/adhdwomen", p:"Explicitly welcomes \"trans women, non-binary, agender, and genderqueer folks\". The moderators enforce this."},
        {h:"Gendered Intelligence (UK)", p:"UK charity supporting trans, nonbinary and gender-diverse people. It is not ADHD-specific, but its support workers can help when you are dealing with several health services at once."},
        {h:"ADHD UK forums", p:"The main UK forum is generally inclusive. If you ask a question about your own situation, someone who has been through it will often reply."},
      ]} />

      <div className="disclaim">
        <strong>If your GP misgenders you while you are also trying to get an ADHD referral.</strong> You can raise it. The two issues are separate, and you do not have to put up with one to get help with the other. A short, calm "could you use my correct name and pronouns, please, and then we can talk about the ADHD referral" usually works, and sets the tone with that practice.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_3 = [
  { ch: "self", title: "Diagnostic grief", render: () => <PageGrief /> },
  { ch: "self", title: "Trans, nonbinary & gender-diverse readers", render: () => <PageGenderDiverse /> },
];
