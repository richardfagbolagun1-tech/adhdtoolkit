// Untangle Playbook — Content-14: How to use + If you only read one page

// =================== HOW TO USE ===================

function PageHowToUse() {
  return (
    <div>
      <div className="ph ph-howto">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Read first · 90 seconds</span>
          <h2 style={{marginTop:16}}>How to use this playbook.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">There are 79 pages here and you don't need to read them all. Start with the one that matches where you are, and come back when something specific comes up.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"24px 0 4px"}}>The four ways to use it</h3>
          <PBSlider items={[
            {h:"Start at the beginning and walk forward.", p:"If you have an hour, click through page by page. The pages go in order: what ADHD is, spotting the signs, getting diagnosed, treatment, then work, money and relationships. Use the Next button at the bottom, or the arrow keys on a keyboard."},
            {h:"Skim the next page, jump to what you need.", p:"The next page is \"If you only read one page\", the eight things that matter most. Read that, then use the chapter drawer (the menu icon top-right) to jump straight to whatever is most pressing. Diagnostic process, medication, work, money, the harder topics, they all stand on their own."},
            {h:"Let the site write your letters.", p:"Two pages write letters for you. One asks your GP to refer you for an NHS assessment through Right to Choose. The other asks your MP to push for better ADHD care. Each takes about 90 seconds."},
            {h:"Send it to someone.", p:"If you know someone who is just starting out, send them the link. There is also a page for partners, parents and friends, called For the person without ADHD. They don't need to read everything to help you."},
          ]} />
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"8px 0 4px"}}>Finding your way around</h3>
          <PBSlider items={[
            {h:"The page counter at the bottom.", p:"Tells you where you are out of 79. The top bar shows the current chapter and page title."},
            {h:"The contents menu.", p:"Tap the menu button in the top right to see every page, grouped by chapter. Tap any title to go straight to it."},
            {h:"Turning pages.", p:"On a laptop, the left and right arrow keys turn pages. On a phone, tap Previous or Next at the bottom of the screen."},
            {h:"Saving and printing.", p:"Your browser's Print or Save as PDF saves the page you are on. Use it for the pages you want to keep, like the GP script or the letter generator."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/howto-phone.webp')`, backgroundPosition:"28% center"}}></div>
      </div>

    </div>
  );
}

// =================== IF YOU ONLY READ ONE PAGE ===================

function PageSkim() {
  return (
    <div>
      <div className="ph ph-howto ph-skim">
        <div>
          <span className="chip" style={{background:"#FFE94A", borderColor:"#FFE94A", color:"#1A1814"}}>The skim · 2 minutes</span>
          <h2 style={{marginTop:16}}>If you only read one page.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">The eight things from this playbook that matter most. If you read nothing else here, read these. Each one links to the page with more detail.</p>
          <PBSlider items={[
            {h:"You're not lazy. ADHD can affect attention, motivation, time and follow-through in ways other people may not see.", p:"It affects attention regulation, executive function, time perception and emotion. It is one of the most heritable conditions in psychiatry. If you have been told you are lazy, weak, or undisciplined, that was a brain difference nobody had named."},
            {h:"NHS Right to Choose. In England, it may offer a faster NHS-funded assessment route.", p:"Waiting times vary widely across the UK, and can be very long in some areas. If you live in England and your GP agrees you need an assessment, you have a legal right to choose which NHS-contracted provider does it. This is called Right to Choose. Since 2026 many areas cap how many assessments each provider is funded for, so waits still vary. The Fast Track page in this playbook generates the GP letter for you."},
            {h:"It doesn't look one way. A low screener result is not the final word.", p:"Older stereotypes centred on hyperactive boys. Women, people who mask, people with inattentive ADHD, autistic adults and marginalised groups are more often overlooked. Chapter 1 covers these. If you scored low but still recognise yourself, you can discuss it with a clinician."},
            {h:"Medication helps many people, and the first few weeks are not the final answer.", p:"Many adults find stimulant medication helpful, although the right medicine, dose and side effects vary. Finding the right medicine and dose can take time, and should be guided by your prescriber. If you are diagnosed privately or through some NHS-funded providers, you can ask about shared care, although local arrangements vary. The Meds chapter walks through all of it."},
            {h:"Work has rights. ADHD may be protected under the Equality Act 2010.", p:"If it has a substantial and long-term effect on your day-to-day life, you may be able to ask for reasonable adjustments at work. Access to Work may help fund practical support, such as equipment, coaching, support workers or travel. Support is assessed individually. Check current information on GOV.UK. Many people with ADHD don't know about either. The Work chapter explains both."},
            {h:"A late diagnosis can bring relief, grief or both. Some people mourn years that felt harder than they needed to be.", p:"Giving yourself space to acknowledge grief can help. There is no right timetable for how you feel. Shame and grief are different things, and the playbook covers both."},
            {h:"There is a UK ADHD community, and it helps to find it.", p:"Groups such as ADHD Babes, Sistas with ADHD, ADHD UK and r/ADHDUK are good places to start. For many people, finding one or two people who understand their experience can make loneliness feel less heavy."},
            {h:"Two things to do: the Fast Track letter and the MP letter.", p:"Two pages in this playbook ask you to do something rather than read something. The first can help you ask for a referral. The second is one way to make your views heard. Both take about 90 seconds. If reading the rest of the playbook feels like too much today, do those two things and come back later."},
          ]} />
          <div className="disclaim">
            <strong>That is the playbook in one page.</strong> If you want to go deeper on any of the eight, the chapter drawer (top right) will take you straight to the relevant pages. If you want to read everything in order, the right arrow at the bottom of the screen will take you through it.
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/skim-note.webp')`}}></div>
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_INTRO = [
  { ch: "self", title: "How to use this playbook", render: () => <PageHowToUse /> },
  { ch: "self", title: "If you only read one page", render: () => <PageSkim /> },
];
