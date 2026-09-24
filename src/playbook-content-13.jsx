// Untangle Playbook — Content-13: What ADHD actually is + For people who love an ADHDer

// =================== INTRO: WHAT ADHD ACTUALLY IS ===================

function PageWhatIsADHD() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Chapter 1 · Start here</span>
          <h2 style={{marginTop:16}}>So, what is ADHD actually?</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">If you have arrived at this playbook without already knowing what ADHD is, or with only the cartoon version of it from school and films, this page is the proper grounding. It is detailed enough to be useful and short enough to read in one sitting. By the end of it you will have an accurate picture of what is going on in the brain, what it actually feels like to live with, and why it has so often been misunderstood. Everything else in this playbook builds on this.</p>
            <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"20px 0 8px"}}>The short version</h3>
            <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>ADHD stands for Attention Deficit Hyperactivity Disorder, which is, frankly, a bad name for the condition it describes. People with ADHD do not have a deficit of attention. They have a difficulty <em>regulating</em> attention, which is a different thing entirely. They can focus deeply, for hours, on something genuinely interesting to them, and find it nearly impossible to focus for ten minutes on something they have decided is important but find boring. The condition is a difference in how the brain handles attention, motivation, time, and emotion. It is lifelong, it is highly heritable, and it is one of the most-studied conditions in psychiatry.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/what-adhd-looks-like.jpg')`, backgroundPosition:"center"}}></div>
      </div>

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 0"}}>What is happening in the brain</h3>

      <PBSlider items={[
        {h:"The interest chemical doesn't show up reliably.", p:"Dopamine is the brain chemical that tells you \"this matters, pay attention to this, finish this\". In an ADHD brain, the system that produces and uses dopamine is less efficient. The brain finds it harder to generate interest in things it has decided in advance are important, and easier to generate interest in whatever happens to be novel, urgent, intense, or genuinely fun in the moment. This is why an ADHDer can play a video game for nine hours and not load the dishwasher for nine days."},
        {h:"The brain's project manager is understaffed.", p:"Executive function is the collection of skills that lets the brain plan, prioritise, sequence, switch tasks, hold information in mind, and follow through. It lives mostly in the prefrontal cortex. In ADHD, this region develops more slowly and stays under-resourced into adulthood. The result is that the things neurotypical adults find effortless, planning a week, starting a boring task, finishing a started task, are the exact things ADHDers find disproportionately hard."},
        {h:"Time is felt in two settings, now and not now.", p:"The ADHD brain has a documented difficulty with time perception. Future deadlines feel theoretical until they are imminent, and past time feels both longer and shorter than it was. This is why ADHDers genuinely lose hours on something they were going to spend ten minutes on, and why a deadline that is two weeks away feels exactly as urgent as one that is two months away, which is to say, not urgent at all."},
        {h:"Feelings arrive at full volume.", p:"Less talked about, but increasingly recognised as central. ADHD brains process emotion with less of the dampening that neurotypical brains apply by default. Frustration, excitement, joy, hurt, all of them tend to land bigger and more immediately. Most ADHDers describe themselves as either \"too much\" or \"too sensitive\" by people who did not understand that this was a feature of how their brain processed the world, not a personality flaw."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>The three presentations</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Clinically, ADHD is described as having three presentations, and most adults are some mix of two of them. None of these is more or less "real" ADHD than the others.</p>

      <PBSlider items={[
        {h:"Predominantly inattentive.", p:"The quiet one. Daydreaming in class. Losing things. Mind drifting in conversations. Reading the same paragraph four times. Historically labelled ADD, and the presentation most likely to be missed in girls and women and people who learned to mask early. There is no hyperactivity on the outside, but the inside feels like a radio that won't tune."},
        {h:"Predominantly hyperactive-impulsive.", p:"The \"classic\" presentation, mostly because it is the easiest to see from outside. Restlessness, fidgeting, talking over people, interrupting, acting before thinking. In adults the hyperactivity often moves inward, less running about, more racing thoughts and an inability to sit still through a long meeting without your leg bouncing."},
        {h:"Combined.", p:"Both at once, which is the most common presentation in adults. Inattentive in some contexts, restless and impulsive in others, depending on whether the moment is asking for sustained focus or sustained stillness. If you are not sure which of the first two presentations fits you, you are probably combined."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What ADHD is not</h3>

      <PBSlider items={[
        {h:"It is not a lack of intelligence.", p:"ADHD and IQ are unrelated. Many ADHDers are very bright, which is part of why so many of them coped for so long, intelligence can compensate for executive dysfunction up to a point, and the wheels usually come off in the years when the workload finally outgrows the compensation."},
        {h:"It is not caused by bad parenting.", p:"ADHD is one of the most heritable conditions in psychiatry. If you have it, there is a 70 to 80 percent chance one of your biological parents has it too, often undiagnosed. Sugar, screens, and discipline have nothing to do with whether someone develops it."},
        {h:"It is not a modern invention.", p:"The clinical description of what we now call ADHD goes back to 1798, and it has appeared under different names in every decade since. What is recent is the rate of adult diagnosis, which is rising because we are finally catching the people, particularly women, who were missed as children, not because the condition itself has become more common."},
        {h:"It is not \"everyone has a bit of that\".", p:"Everybody loses their keys sometimes. Everybody gets distracted. ADHD is the diagnosis when those patterns are significantly more frequent, significantly more intense, started in childhood, happen in more than one part of your life, and cause meaningful difficulty. The bar is real, and the difference between a normal amount of forgetfulness and the ADHD amount is, generally, immediately obvious to a clinician."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What ADHD also is</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>It is also a brain that, when interested, can sustain a depth and intensity of focus most people will never experience. It is a brain that connects ideas across domains in ways neurotypical brains often don't. It is a brain that is unusually good in crises, where the high-stakes-right-now signal is exactly what it runs best on. Many of the people you have heard of, the ones who started things, fixed things, made things, were almost certainly ADHDers. None of this is a consolation prize for the hard parts. It is the same brain. You don't get one without the other, and the work of this playbook is to set you up so the same brain can have a life that uses the good bits without being capsized by the hard ones.</p>

      <div className="disclaim" style={{marginTop:24}}>
        <strong>One last clarification.</strong> ADHD is a recognised medical diagnosis under the NHS, made by a qualified psychiatrist or specialist nurse using a structured assessment. It is not self-diagnosed lightly, and a proper diagnosis matters because it unlocks medication, workplace adjustments, educational support, and access to the right kind of therapy. The rest of this playbook is about how to get from "I think this might be me" to "yes, this is, and here is what to do about it".
      </div>
    </div>
  );
}

// =================== GAP 14: FOR PEOPLE WHO LOVE AN ADHDER ===================

function PageForLovedOnes() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"#E8D6F5", borderColor:"#E8D6F5", color:"var(--ink)"}}>Chapter 9 · For everyone else</span>
          <h2 style={{marginTop:16}}>For the person reading this who doesn't have ADHD.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you have arrived here because someone you love handed you this playbook, or because you are quietly trying to understand a partner or parent or child or friend who has just been diagnosed, this page is for you. It is short, it is honest, and it will probably answer the question you have not yet found a way to ask. You are allowed to find this hard. You are also doing a kind, useful thing by reading it.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The things that will help you most to know</h3>
          <PBSlider items={[
            {h:"It is not personal or ill intentioned.", p:"The forgotten message, the late arrival, the half-listened conversation, the birthday remembered the day after, none of these are signals of how much you matter to them. ADHD makes the maintenance layer of relationships difficult in a way that has nothing to do with care. The person who forgot your birthday almost certainly spent the next day crushed about it, more than you did. Holding both of those things at once is the work."},
            {h:"They are not choosing it.", p:"The single most useful internal shift is to stop reading their behaviour through the lens of choice. They are not \"choosing\" to not do the washing up, or \"choosing\" to interrupt you, or \"choosing\" to spiral about something small. These behaviours come from a brain that is doing its best with a different operating system. They can absolutely work on them, with support and tools and sometimes medication. They cannot just \"try harder\", because trying harder has been their entire life so far."},
            {h:"Your frustration is allowed.", p:"Loving someone with ADHD is sometimes hard. The unfinished projects, the chaotic admin, the emotional weather, the things that keep going wrong in the same ways. You are allowed to be tired of it. You are allowed to need space. You are allowed to ask for things to change. \"Their brain works differently\" is an explanation, it is not a permission slip for everything, and a partnership where one person carries all of the executive function eventually fails. Both of those things are true."},
            {h:"Reminders are not nagging.", p:"One of the most common mistakes well-meaning partners make is deciding to stop reminding, on the principle that an adult should not need reminding. For an ADHD brain, an external reminder is not infantilising, it is genuinely how the brain is best supported. Calibrate together, agree what kind of prompts help and what kind feel like control, and remember that \"if I don't remind them it doesn't get done\" is, often, just true, and not a moral problem."},
            {h:"Diagnosis changes the conversation.", p:"Before diagnosis, you were probably labelling some of their behaviours as character. After diagnosis, you have a different vocabulary, and so do they. This is the moment to renegotiate the household, the schedule, the shared admin, with the new information in mind. Couples therapy with an ADHD-aware therapist, even briefly, is often transformational here, because it is much easier to redesign a partnership when a neutral third party is helping translate."},
            {h:"The medication conversation is theirs to make.", p:"If your loved one is deciding whether to start medication, the most useful thing you can do is have no agenda. Some partners push hard for medication because they are exhausted by the unmedicated version, some are anxious about medication and gently push the other way. Both are understandable, both are unhelpful. The decision is theirs, the experience is theirs, and your job is to be a calm presence on either side of it."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-69-loved-ones.jpg')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What actually helps day-to-day</h3>

      <PBSlider items={[
        {h:"Body-doubling without comment.", p:"Sitting in the same room while they do the tax return, or the laundry, or the form. You don't have to help. You just have to be there. It is one of the most-cited \"what my partner does that actually works\" answers in ADHD spaces."},
        {h:"Externalise the system, not the person.", p:"Put a shared calendar on the fridge. Set up shared shopping lists in an app you both use. Build the household admin into something visible and external, not into one of you remembering and the other being reminded. The goal is to take it out of the relationship dynamic entirely."},
        {h:"When they spiral, don't argue with the spiral.", p:"RSD, the rejection sensitivity covered earlier in this playbook, can turn small ambiguities into full-volume catastrophes. The least useful response is \"you are being ridiculous\". The most useful response is \"I love you, I am still here, this will pass in about 40 minutes\". The spiral burns out faster than you think, especially if you don't add fuel."},
        {h:"Celebrate the wins explicitly.", p:"ADHDers grew up with most of their effort being invisible because it produced \"normal\" results that didn't impress anyone, and most of their visible output being criticised. Saying out loud \"I noticed you did the thing\" is wildly more powerful than it sounds. Specific, brief, no irony. It rewires the relationship over months."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>If you are struggling</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Loving someone with ADHD can be wonderful and it can also be a particular kind of tiring that the people around you do not always recognise. Two things help here. First, find someone to talk to who has done it, ADDitude Magazine's partner community, the r/ADHD_partners subreddit, or a therapist who specialises in ADHD relationships. Second, do not let the ADHD become the only story in the relationship. Your partner is more than their diagnosis, you are more than their support system, and the parts of your life that have nothing to do with ADHD are the parts that keep the rest of it bearable. Protect them.</p>

      <div className="disclaim" style={{marginTop:24}}>
        <strong>One last thing.</strong> The fact that you are reading this means you are taking the work seriously, which is more than most people in your position ever do. The relationships that go well between ADHDers and non-ADHDers, and there are many of them, are almost always characterised by exactly this, both people learning the new vocabulary, both people taking the work seriously, and both people refusing to make the diagnosis the entire identity of either of them. You are already doing it. Keep going.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_BEFORE_SELF = [
  { ch: "self", title: "What ADHD actually is", render: () => <PageWhatIsADHD /> },
];
window.PB_PAGES_EXTRA_SUPPORT_LOVED = [
  { ch: "support", title: "For the person without ADHD", render: () => <PageForLovedOnes /> },
];
