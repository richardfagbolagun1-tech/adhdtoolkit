// Untangle Playbook — Content-13: What ADHD is + For people who love an ADHDer

// =================== INTRO: WHAT ADHD ACTUALLY IS ===================

function PageWhatIsADHD() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Chapter 1 · Start here</span>
          <h1 style={{marginTop:16}}>So, what is ADHD?</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">ADHD is a difference in how the brain manages attention, motivation and time. It is not a lack of effort or intelligence. This page covers what is happening in the brain, what it feels like day to day, and why it is so often missed. You do not need to read it all at once.</p>
            <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"20px 0 8px"}}>The short version</h3>
            <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>ADHD stands for Attention Deficit Hyperactivity Disorder, which is, frankly, a bad name for the condition it describes. People with ADHD do not have a deficit of attention. They often find it hard to <em>control</em> where their attention goes. They can focus deeply, for hours, on something interesting to them, and find it nearly impossible to focus for ten minutes on something they have decided is important but find boring. The condition is a difference in how the brain handles attention, motivation, time, and emotion. It is lifelong, it is highly heritable, and it is one of the most-studied conditions in psychiatry.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/what-adhd-looks-like.webp')`, backgroundPosition:"center"}}></div>
      </div>
      <PBQuote q={"ADHD is a disorder of performance—of doing what you know rather than knowing what to do."} who={"Dr Russell A. Barkley, clinical psychologist"} src={"Taking Charge of Adult ADHD"} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 0"}}>What is happening in the brain</h3>

      <PBSlider items={[
        {h:"Interest and urgency can drive attention.", p:"ADHD is linked to differences in brain systems involved in attention, motivation and reward. Dopamine is one part of that picture. It is harder to get interested in important but dull tasks, and easier to focus on things that are new, urgent or fun. That is why someone with ADHD can play a game for hours but not load the dishwasher for days."},
        {h:"Planning and follow-through are harder.", p:"Executive function is the set of skills you use to plan, prioritise, switch tasks, remember things and follow through. People with ADHD often find some executive-function skills harder, especially when a task is boring, unclear or has no immediate deadline. So planning a week, starting a boring task or finishing one can be much harder than for other people."},
        {h:"Time feels like now or not now.", p:"People with ADHD often find it hard to judge time. Deadlines don't feel real until they are close. You might spend hours on something you meant to do in ten minutes. A deadline two weeks away can feel no more urgent than one two months away."},
        {h:"Feelings arrive at full volume.", p:"This gets less attention, but it is a big part of ADHD. Feelings like frustration, excitement and hurt tend to arrive faster and stronger. Many people with ADHD have been called too much or too sensitive by people who did not know this was part of ADHD."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>The three presentations</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Clinically, ADHD is described as having three presentations, and many adults fit the combined type. None of these is more or less "real" ADHD than the others.</p>

      <PBSlider items={[
        {h:"Predominantly inattentive presentation.", p:"This type is often missed. It shows up as daydreaming, losing things, drifting off in conversations and rereading the same paragraph. It used to be called ADD, and it is most often missed in girls, women and people who learned to mask early. There may be no visible hyperactivity, but your mind feels restless."},
        {h:"Predominantly hyperactive-impulsive presentation.", p:"This is the type most people picture, because it is easiest to see. It shows up as restlessness, fidgeting, interrupting and acting before thinking. In adults it often turns inward, as racing thoughts or struggling to sit still through a long meeting."},
        {h:"Combined presentation.", p:"This means having both, and it is the most common type in adults. You may be inattentive in some situations and restless in others. If neither of the first two fits you well, this one may."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What ADHD is not</h3>

      <PBSlider items={[
        {h:"It is not a lack of intelligence.", p:"ADHD and IQ are unrelated. Many people with ADHD are very bright, which helps them cope for years. Problems often appear when the workload grows too big to manage that way."},
        {h:"It is not caused by bad parenting.", p:"ADHD is one of the most heritable conditions in psychiatry. It is estimated to be 70 to 80 percent genetic, and it often runs in families without anyone being diagnosed. This estimate comes from twin studies. Sugar, screens, and discipline have nothing to do with whether someone develops it."},
        {h:"It is not a modern invention.", p:"Doctors first described what we now call ADHD in 1798. What is new is the number of adults being diagnosed. That is rising mainly because people who were missed as children, especially women, are now being recognised."},
        {h:"It is not \"everyone has a bit of that\".", p:"Everyone loses their keys or gets distracted sometimes. ADHD is diagnosed when this happens much more often, started in childhood, affects more than one area of your life and causes real problems. A trained clinician can assess the difference."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What ADHD also is</h3>
      <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>It is also a brain that, when interested, can focus with great depth and intensity. It is a brain that connects ideas across domains in ways neurotypical brains often don't. It is a brain that is unusually good in crises, where the high-stakes-right-now signal is exactly what it runs best on. Some people with ADHD describe strengths such as intense focus, creativity or calm in a crisis. These strengths vary by person, and ADHD can also be significantly disabling. None of this is a consolation prize for the hard parts. It is the same brain. You don't get one without the other, and the work of this playbook is to set you up so the same brain can have a life that uses the good bits without being capsized by the hard ones.</p>

      <div className="disclaim" style={{marginTop:24}}>
        <strong>One last clarification.</strong> ADHD is a recognised medical diagnosis under the NHS, made by a qualified psychiatrist or specialist nurse using a structured assessment. A formal diagnosis matters because it gives access to medication, workplace adjustments, educational support, and access to the right kind of therapy. The rest of this playbook is about how to get from "I think this might be me" to "yes, this is, and here is what to do about it".
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
          <h1 style={{marginTop:16}}>For the person reading this who doesn't have ADHD.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">If you have arrived here because someone you love handed you this playbook, or because someone close to you has just been diagnosed, start here. It is short. It is fine to find this hard.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The things that will help you most to know</h3>
          <PBSlider items={[
            {h:"It is not personal or ill intentioned.", p:"A forgotten message, a late arrival, a half-heard conversation or a birthday remembered a day late does not show how much you matter to them. ADHD makes it hard to keep up with the small things in relationships. Someone who forgets your birthday often feels terrible about it the next day."},
            {h:"They are not choosing it.", p:"It helps to stop seeing their behaviour as a choice. They are not choosing to leave the washing up, interrupt you or get upset about something small. They can work on these things with support, tools and sometimes medication. Telling them to try harder rarely helps, because many have been trying hard for years."},
            {h:"Your frustration is allowed.", p:"Loving someone with ADHD can be hard. Projects go unfinished, admin piles up and the same things keep going wrong. It is fine to feel tired, to need space and to ask for change. ADHD explains a lot, but it does not excuse everything. A relationship where one person does all the planning and remembering will struggle."},
            {h:"Reminders are not nagging.", p:"Some partners stop giving reminders because they feel an adult should not need them. For someone with ADHD, a reminder is a form of support. Agree together which reminders help and which feel controlling."},
            {h:"Diagnosis changes the conversation.", p:"Before the diagnosis, you may have seen some of their behaviour as part of who they are. Now you both understand more. This is a good time to agree new ways of sharing housework, plans and admin. A few sessions with a couples therapist who understands ADHD can help."},
            {h:"The medication conversation is theirs to make.", p:"If they are deciding whether to try medication, try not to push either way. Some partners push for it because they are worn out. Others worry about it and push against it. The decision is theirs. Your role is to support them whatever they choose."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-69-loved-ones.webp')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>What helps day-to-day</h3>

      <PBSlider items={[
        {h:"Body-doubling without comment.", p:"Sit in the same room while they do the tax return, the laundry or a form. You don't have to help. Being there makes it easier for them to start and keep going."},
        {h:"Externalise the system, not the person.", p:"Put a shared calendar on the fridge and use a shopping list app you can both see. When household tasks are written down, neither of you has to remember everything."},
        {h:"When they spiral, don't argue with the spiral.", p:"Rejection sensitivity can make small misunderstandings feel huge. Telling them they are being ridiculous makes it worse. It helps more to say you love them, you are still there and the feeling will pass. Staying calm can help it pass."},
        {h:"Celebrate the wins explicitly.", p:"Many people with ADHD grew up being criticised for what went wrong while their effort went unnoticed. Telling them you noticed something they did works better than it sounds. Keep it short and specific."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>If you are struggling</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Loving someone with ADHD can be wonderful, and it can also be tiring in ways other people don't always see. Two things help. First, talk to people who have been there, for example on the r/ADHD_partners forum or with a therapist who knows ADHD. Second, keep time for the parts of your life that have nothing to do with ADHD.</p>

      <div className="disclaim" style={{marginTop:24}}>
        Relationships between people with and without ADHD tend to go well when both learn how ADHD works and neither lets the diagnosis define the other.
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
