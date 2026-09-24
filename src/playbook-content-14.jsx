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
            <p className="lede">There are more than seventy pages here. You don't need to read them all, not now, probably not ever. This playbook is built to be read once at your own pace and then kept somewhere you can come back to when something specific comes up. Two minutes here will save you an hour of scrolling.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"24px 0 4px"}}>The four ways to use it</h3>
          <PBSlider items={[
            {h:"Start at the beginning and walk forward.", p:"If you have an hour, click through page by page. The order is intentional, from \"what is this thing\" through recognition, diagnosis, treatment, work, money, relationships, and the harder topics. The arrow keys on a keyboard work, the buttons at the bottom work, your phone's swipe works."},
            {h:"Skim the next page, jump to what you need.", p:"The next page is \"If you only read one page\", the eight things that matter most. Read that, then use the chapter drawer (the menu icon top-right) to jump straight to whatever is most pressing. Diagnostic process, medication, work, money, the harder topics, they all stand on their own."},
            {h:"Use the action pages.", p:"Two pages do something rather than say something. The Fast Track GP letter generator writes a letter to your GP requesting an NHS Right to Choose referral. The Write to your MP page writes a letter pushing for ADHD-care reform. Both take 90 seconds. Both are the reason this playbook exists."},
            {h:"Send it to someone.", p:"If you have already read it and someone you know is at the start of this, the most useful thing you can do is forward them the link. There is also a page specifically for partners, parents and friends, in chapter 9. They do not have to read everything to be useful to you."},
          ]} />
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, margin:"8px 0 4px"}}>Wayfinding</h3>
          <PBSlider items={[
            {h:"The page counter at the bottom.", p:"Tells you where you are out of 73. The top bar shows the current chapter and page title. You are never lost, you are just somewhere specific."},
            {h:"The drawer.", p:"The menu icon in the top-right opens a full table of contents, grouped by chapter, colour-coded. Click any title to jump straight there."},
            {h:"The keyboard.", p:"Left and right arrow keys turn pages. Useful if you are scrolling on a laptop. On phone, swipe or tap the arrow buttons at the bottom."},
            {h:"Saving and printing.", p:"Your browser's \"Save as PDF\" or \"Print\" will produce a clean, single-column, printable copy of the entire playbook. Useful if you want a paper version, or to share offline."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80")}')`}}></div>
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
            <p className="lede">The eight things from this playbook that matter most. If you read nothing else here, read these. Each one is a door, and the rest of the playbook is what is behind them.</p>
          <PBSlider items={[
            {h:"You are not lazy : ADHD is a neurological difference, not a character flaw.", p:"It affects attention regulation, executive function, time perception and emotion. It is one of the most heritable conditions in psychiatry. If you have been told you are lazy, weak, or undisciplined, that has been an explanation for a brain difference no one named correctly. The whole playbook starts here."},
            {h:"NHS Right to Choose : you can be assessed in months, not years, for free.", p:"The NHS waiting list for ADHD assessment in some areas is now 8+ years. You do not have to wait. Under \"Right to Choose\" you can request a referral to a faster NHS-funded provider, free at the point of use. The Fast Track page in this playbook generates the GP letter for you."},
            {h:"It doesn't look one way : if the screener said \"low\", you may still be ADHD.", p:"The classic profile, hyperactive boy, was built on a narrow sample. Late-diagnosed women, masked presentations, the quietly-inattentive, AuDHD, marginalised adults, all get missed routinely. Chapter 1 covers all of these. Score low and still recognise yourself, take that seriously."},
            {h:"Medication helps most people : and the first two weeks are not always the final answer.", p:"About 70 to 80 percent of adults respond well to stimulant medication. The first stimulant you try may not be the right one, the first dose probably won't be the right dose, and shared care with your GP is the long-term goal. The Meds chapter walks through all of it honestly."},
            {h:"Work has rights : ADHD is a disability under the Equality Act 2010.", p:"You are entitled to reasonable adjustments. Access to Work will fund coaching, equipment and adjustments up to roughly \u00a369,000 over five years. Most ADHDers don't know either of these things exist. The Work chapter is the cheat sheet."},
            {h:"The grief is real : most late-diagnosed adults mourn the years they lost.", p:"It is normal, it is allowed, and it tends to pass faster when you let yourself feel it rather than skipping straight to productivity. Shame and grief are different things, and the playbook covers both. You are not behind, you are on the timeline you actually lived."},
            {h:"You are not alone : there is a UK ADHD community, and it is good.", p:"ADHD Babes, Sistas with ADHD, ADHD UK, r/ADHDUK, AuDHD spaces, the loneliness eases significantly when you find one or two people whose brains work like yours. The community has been doing the work the system has not been doing. Find your corner of it."},
            {h:"The two action moments : the Fast Track letter, and the MP letter.", p:"Two pages in this playbook ask you to do something rather than read something. The first gets you seen. The second is how the system changes. Both take 90 seconds. Both matter. If reading the rest of the playbook feels like too much today, do those two things and come back later."},
          ]} />
          <div className="disclaim">
            <strong>That is the playbook in one page.</strong> If you want to go deeper on any of the eight, the chapter drawer (top right) will take you straight to the relevant pages. If you want to read everything in order, the right arrow at the bottom of the screen will take you through it. There is no wrong way to use this.
          </div>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_INTRO = [
  { ch: "self", title: "How to use this playbook", render: () => <PageHowToUse /> },
  { ch: "self", title: "If you only read one page", render: () => <PageSkim /> },
];
