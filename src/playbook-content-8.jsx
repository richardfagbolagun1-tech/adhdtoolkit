// Untangle Playbook — Content-8: MP Letter Generator + Time Blindness page

const { useState: useS8 } = React;

// =================== GAP 4: MP LETTER GENERATOR ===================

function PageMPLetter() {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const [name, setName] = useS8("");
  const [postcode, setPostcode] = useS8("");
  const [mpName, setMpName] = useS8("");
  const [story, setStory] = useS8("waited");
  const [waitYears, setWaitYears] = useS8("");
  const [askedShared, setAskedShared] = useS8(false);
  const [copied, setCopied] = useS8(false);

  const storyBlock = {
    waited: `I have been on the NHS waiting list for an adult ADHD assessment for ${waitYears || "[X]"} years. During that time I have struggled with work, relationships and basic daily functioning, knowing that a diagnosis and the right treatment could change all of this, but I have no realistic way of accessing it through the NHS in my lifetime as things stand.`,
    refused: `My GP has refused to refer me under the NHS Right to Choose framework, citing local limits on Right to Choose referrals (Indicative Activity Plans). I understand this reflects local funding arrangements rather than a personal decision by my GP, which is precisely why I am writing to you.`,
    sharedCare: `I have been diagnosed with ADHD and prescribed medication that is working well for me. My GP has now refused to enter into a shared-care agreement with my provider, meaning I face paying privately for medication indefinitely, even though my treatment is otherwise fully covered by the NHS. This is unaffordable on my income and the inconsistency of provision across England feels deeply unfair.`,
    family: `A close family member has been waiting more than ${waitYears || "[X]"} years for an NHS ADHD assessment. Watching them struggle, knowing the support exists but is functionally inaccessible, is heartbreaking. I am writing because they cannot easily advocate for themselves and because I believe this affects thousands of families across our constituency.`,
  }[story];

  const sharedCareNote = askedShared
    ? `\n\nI have already asked my GP about shared care and was refused. I have requested the refusal in writing and reported it to ADHD UK, who are tracking these refusals nationally.`
    : "";

  const letter = `${name || "[Your full name]"}
${postcode || "[Your postcode]"}

${today}

Dear ${mpName || "[MP name]"},

I am one of your constituents and I am writing to ask for your help in raising the issue of adult ADHD care within the NHS in England.

${storyBlock}${sharedCareNote}

The current situation is, I believe, unsustainable. The NHS waiting list for adult ADHD assessments has been growing for years, with waits of several years in many areas. Right to Choose was intended to help, but local Indicative Activity Plans now limit how many assessments some providers can carry out each year. ADHD UK has launched a legal challenge over one ICB's decision to suspend referrals for adults over 25 entirely, and reports from the community suggest similar restrictions are spreading.

ADHD is a recognised neurodevelopmental condition associated, when untreated, with significantly higher rates of unemployment, addiction, accidents, criminal justice involvement, and suicide. Treating it well, in contrast, is one of the more cost-effective interventions in mental health, because medication and support are inexpensive relative to the lifetime cost of untreated ADHD on the NHS and the wider economy.

I would be grateful if you could:

1. Raise the question of NHS adult ADHD waiting times and local Indicative Activity Plans with the Department of Health and Social Care, in writing.
2. Ask whether your local Integrated Care Board has paused or is considering pausing Right to Choose ADHD referrals.
3. Consider supporting ADHD UK's campaign for ringfenced funding for adult ADHD services and consistent shared-care provision across England.

I would be very happy to share more of my own experience with you, or to put you in touch with ADHD UK directly. I look forward to your reply.

Yours sincerely,

${name || "[Your full name]"}
${postcode || "[Your postcode]"}`;

  function copyLetter() {
    navigator.clipboard.writeText(letter).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }
  function downloadLetter() {
    const blob = new Blob([letter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Letter to my MP about ADHD care.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"#FFE94A", borderColor:"#FFE94A", color:"#1A1814"}}>Chapter 9 · Take action</span>
          <h2 style={{marginTop:16}}>Write to your MP, in 90 seconds.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">ADHD UK is asking people to write to their MPs about NHS ADHD care. This generator writes the letter for you to post or email. Everything stays in your browser. We never see what you type.</p>
          <div className="card" style={{marginTop:20, padding:"22px 26px", background:"var(--bg-2)"}}>
            <h4 style={{marginTop:0, fontFamily:"var(--display)", fontWeight:500, fontSize:20}}>What to expect, and why this matters</h4>
            <p style={{fontSize:14.5, color:"var(--ink-2)", lineHeight:1.65, margin:"10px 0 0"}}>Many MPs reply. The standard pattern is a written acknowledgement within a fortnight, sometimes a substantive reply within a month, and in some cases a written question put to the Department of Health. Even a templated reply has value, because each MP letter is logged against the issue, and those logs are how Parliament prioritises debates. Please also copy ADHD UK (campaigns@adhduk.co.uk) so they can track how many of us are doing this.</p>
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/mp-stamp.webp')`}}></div>
      </div>

      <div className="rtc-gen">
        <form className="rtc-form" onSubmit={(e) => e.preventDefault()}>
          <div className="rtc-fieldset">
            <h4>About you</h4>
            <label>Your full name<input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Jane Doe" /></label>
            <label>Your postcode<input type="text" value={postcode} onChange={e=>setPostcode(e.target.value)} placeholder="SW1A 1AA" /></label>
            <label>Your MP's name<input type="text" value={mpName} onChange={e=>setMpName(e.target.value)} placeholder="Find them at members.parliament.uk" /></label>
            <p style={{fontSize:13, color:"var(--muted)", margin:"4px 0 0"}}>Not sure who your MP is? Type your postcode at members.parliament.uk and it tells you in seconds.</p>
          </div>

          <div className="rtc-fieldset">
            <h4>Your story</h4>
            <label>What is happening to you (pick the closest)
              <select value={story} onChange={e=>setStory(e.target.value)}>
                <option value="waited">I have been waiting years for an NHS assessment</option>
                <option value="refused">My GP has just refused a Right to Choose referral</option>
                <option value="sharedCare">My GP has refused shared care after diagnosis</option>
                <option value="family">A family member is affected, not me directly</option>
              </select>
            </label>
            {(story === "waited" || story === "family") && (
              <label>How many years waiting?<input type="number" min="0" max="20" value={waitYears} onChange={e=>setWaitYears(e.target.value)} placeholder="e.g. 3" /></label>
            )}
            <label style={{display:"flex", alignItems:"center", gap:10, fontSize:14, color:"var(--ink-2)"}}>
              <input type="checkbox" checked={askedShared} onChange={e=>setAskedShared(e.target.checked)} style={{width:"auto"}} />
              <span>Mention that I have already reported a refusal to ADHD UK</span>
            </label>
          </div>

          <div className="rtc-actions">
            <button type="button" className="btn btn-accent" onClick={copyLetter}>
              {copied ? "✓ Copied to clipboard" : "Copy letter"}
            </button>
            <button type="button" className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={downloadLetter}>Download as .txt</button>
          </div>
        </form>

        <div className="rtc-preview">
          <div className="rtc-preview-head">Live preview</div>
          <pre className="rtc-preview-body">{letter}</pre>
        </div>
      </div>

    </div>
  );
}

// =================== GAP 5: TIME BLINDNESS ===================

function PageTimeBlindness() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 4 · Daily tools</span>
          <h2 style={{marginTop:16}}>Time blindness, and how to make time visible.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">You think you have an hour to spare, then realise you do not. It is a difference in how your brain perceives the passing of minutes and hours, and there are practical tools that help.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What it feels like</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Many people with ADHD describe time as having two modes, <em>now</em> and <em>not now</em>. Something happening in twenty minutes feels exactly as far away as something happening in three weeks, right up until the moment it arrives. An hour of focus can feel like ten minutes, and ten minutes of waiting can feel like an hour. You can lose four hours to a hyperfocus session and have no memory of where they went, and you can also leave a meeting feeling like it lasted forever when the clock says it took twenty minutes. None of this is in your imagination.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/time-blindness-watch.webp"}')`}}></div>
      </div>


      <PBSlider items={[
        {h:"Make time visible, everywhere.", p:"The most useful change is to put an analogue clock with a clear minute hand somewhere you cannot avoid looking at, in your kitchen, on your desk, in the bathroom. A digital clock shows numbers, but an analogue clock lets you see time passing, which is harder to ignore. A big clock works best, even if you don't like how it looks."},
        {h:"Use a Time Timer.", p:"The Time Timer is a physical disc that visibly counts down a coloured wedge of time. About £30 on Amazon. It exists because the inventor's child had ADHD, and almost every ADHDer who tries one says some version of \"oh, this is what people without ADHD see when they look at a clock\". Set it for 25 minutes when you start a task. Watching the red shrink does something no app notification can."},
        {h:"Calendar everything, and double the buffer.", p:"Put every appointment, every task, every social obligation into a single calendar app, and add a buffer that feels comically generous, then double it. If a journey should take 20 minutes, allow 50. If a meeting is at 3pm, block 2:45pm with a \"leave now\" reminder. The ADHD tax is mostly time tax, and protecting yourself from yourself is the whole game."},
        {h:"The \"what time is it really\" check.", p:"Three or four times a day, before you start the next thing, look at a clock and say the time out loud. Say the real time, not the time you think it is. It feels silly, but it helps you notice how much time has passed."},
        {h:"External countdowns for transitions.", p:"Transitions are where time blindness bites hardest, \"I'll just finish this then leave\" is the lie your brain tells itself most often. Set a series of alarms before you need to be somewhere, not just one. Fifteen minutes before, five minutes before, one minute before. Label them with what you should be doing at each point. Your future self will thank you."},
        {h:"Time auditing, for a week only.", p:"Try this for seven days, no longer. Every hour, write down what you did in that hour, in one short sentence. Many people find a big gap between where they thought their day went and what they wrote down. You do not need to keep doing this forever, just long enough to recalibrate your internal clock and notice your real patterns."},
      ]} />

      <div className="card" style={{padding:"24px 28px", background:"var(--bg-2)", borderColor:"var(--accent)"}}>
        <span className="eyebrow accent">A note on therapy and medication</span>
        <p style={{margin:"10px 0 0", fontSize:14.5, color:"var(--ink-2)", lineHeight:1.65}}>Stimulant medication often improves time perception meaningfully, because dopamine is involved in the brain's internal clock. ADHD coaches and therapists who understand ADHD can help you set up the tools above. If you can only afford one thing, start with the tools above. Coaching mainly helps you keep using them when your motivation dips.</p>
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_TOOLS_TIME = [
  { ch: "tools", title: "Time blindness", render: () => <PageTimeBlindness /> },
];
window.PB_PAGES_EXTRA_SUPPORT_MP = [
  { ch: "support", title: "Write to your MP", render: () => <PageMPLetter /> },
];
