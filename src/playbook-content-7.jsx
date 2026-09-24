// Untangle Playbook — Content-7: The Right to Choose GP Letter Generator
// Interactive form + live letter preview + copy/print
const { useState: useS7 } = React;

const RTC_PROVIDERS = [
  { name: "Psychiatry UK", note: "Largest RTC provider, ~6-8 month wait" },
  { name: "ADHD 360", note: "Telehealth specialist, ~3-5 month wait" },
  { name: "Clinical Partners", note: "Multidisciplinary, ~4-6 month wait" },
  { name: "ProblemShared", note: "Online ADHD service, ~3-5 month wait" },
  { name: "Dr Julian Medical Group", note: "NHS contracted, growing capacity" },
  { name: "ADHD Doctors", note: "Newer provider, shorter waits typical" },
];

function buildLetter(d) {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const imp1 = d.impact1.trim() || "[How ADHD affects your work or daily focus]";
  const imp2 = d.impact2.trim() || "[How ADHD affects your home or relationships]";
  const imp3 = d.impact3.trim() || "[How ADHD affects your mental health or wellbeing]";
  const provider = d.provider || "Psychiatry UK";
  const gp = d.gp.trim() || "[Your GP's name]";
  const fullName = d.fullName.trim() || "[Your full name]";
  const dob = d.dob.trim() || "[Your date of birth]";
  const nhs = d.nhs.trim() || "[Your NHS number]";
  const address = d.address.trim() || "[Your address, optional]";

  return `${today}

Dear Dr ${gp},

Subject: Formal request for an adult ADHD assessment referral under Patient Choice (Right to Choose)

I am writing to formally request a referral for an adult ADHD assessment under the NHS Patient Choice framework, also known as "Right to Choose".

Under the NHS Constitution and the NHS Choice Framework, I have the legal right, in England, to choose any qualified provider that holds an NHS standard contract for the service I need. I would like to exercise that right and be referred to ${provider}, who hold a relevant NHS contract for adult ADHD assessment.

I am requesting this referral because I am experiencing significant ongoing difficulties consistent with ADHD. In particular:

1. ${imp1}

2. ${imp2}

3. ${imp3}

I have completed the World Health Organisation's Adult ADHD Self-Report Scale (ASRS-v1.1), which is the screener recommended by NICE for use in primary care. My results are attached to this letter, along with a short personal summary of impact.

I understand that, where a provider holds an NHS standard contract with any Integrated Care Board (ICB) or with NHS England, you are able to make a Right to Choose referral and the funding follows the patient. I am asking, kindly but formally, that you process this referral as soon as possible.

If for any reason you feel unable to refer me to ${provider}, I would be grateful if you could write to me explaining the specific clinical or contractual reason, so that I can take this up with the practice manager or the local ICB if needed.

Thank you for your time and care.

Kind regards,

${fullName}
Date of birth: ${dob}
NHS number: ${nhs}${address && address !== "[Your address, optional]" ? "\n" + address : ""}`;
}

function PageRTCGenerator() {
  const [d, setD] = useS7({
    fullName: "",
    dob: "",
    nhs: "",
    address: "",
    gp: "",
    provider: "Psychiatry UK",
    impact1: "",
    impact2: "",
    impact3: "",
  });
  const [copied, setCopied] = useS7(false);
  const [downloaded, setDownloaded] = useS7(false);

  const letter = buildLetter(d);
  function set(k) { return (e) => setD(prev => ({ ...prev, [k]: e.target.value })); }

  function copyLetter() {
    navigator.clipboard.writeText(letter).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  function downloadLetter() {
    const blob = new Blob([letter], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `right-to-choose-letter-${(d.fullName || "untangle").replace(/\s+/g,"-").toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2200);
  }

  function printLetter() {
    const w = window.open("", "_blank");
    if (!w) return alert("Please allow pop-ups to print.");
    w.document.write(`<html><head><title>Right to Choose letter: ${d.fullName || "Untangle"}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap"><style>body{font-family:"Outfit",system-ui,sans-serif;font-size:13.5px;line-height:1.7;max-width:680px;margin:48px auto;padding:0 24px;white-space:pre-wrap;color:#1a1814}</style></head><body>${letter.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 250);
  }

  return (
    <div>
      <div className="loophole-hero">
        <div className="loophole-hero-meta">
          <span className="loophole-pill">★ The NHS ADHD Fast Track</span>
        </div>
        <h1 className="loophole-wordmark">
          <span className="loophole-line">The Fast Track</span>
        </h1>
        <p className="loophole-lede">Most GPs won't tell you this exists. The NHS legally has to refer you to an ADHD clinic of your choosing, on their bill, in months not years. Below is the letter that makes it happen. Fill in seven boxes, hand it to your GP, get assessed for free.</p>
        <div className="loophole-stats">
          <div><span className="loophole-stat-n">4 yrs</span><span className="loophole-stat-l">Typical NHS wait</span></div>
          <div><span className="loophole-stat-n">3–8 mo</span><span className="loophole-stat-l">With the Fast Track</span></div>
          <div><span className="loophole-stat-n">£0</span><span className="loophole-stat-l">Cost to you</span></div>
          <div><span className="loophole-stat-n">60 sec</span><span className="loophole-stat-l">To generate</span></div>
        </div>
      </div>

      <div className="rtc-alert fx-changed">
        <h3 className="rtc-alert-h">What's changed in 2025–26.</h3>
        <p className="rtc-alert-p">In late 2025 NHS England introduced <strong>Indicative Activity Plans (IAPs)</strong>, which cap how many Right to Choose ADHD assessments each ICB area funds per year. At least nine ICBs have asked providers to pause new RTC referrals while plans are refreshed, and Coventry &amp; Warwickshire ICB has suspended new adult referrals over 25 entirely (a decision ADHD UK is challenging legally). The Fast Track letter below still works in most of England, but in some postcodes your GP may now reply with "we've been told to pause new referrals". If that happens, it is not your GP being difficult, it is a national policy issue.</p>
        <p className="rtc-alert-p" style={{marginTop:10}}><strong>What to do if you hit a pause.</strong> Ask the GP for the refusal in writing, citing the IAP. Report the refusal to ADHD UK (adhduk.co.uk) — they keep a live tracker and are using these reports to push for policy change. Then come back to the Before-Private page in this playbook for the things you can do meanwhile.</p>
      </div>

      <div className="rtc-gen">
        <form className="rtc-form" onSubmit={(e) => e.preventDefault()}>
          <div className="rtc-field-group">
            <span className="rtc-step">Step 1 · You</span>
            <div className="rtc-row">
              <label>
                <span>Your full name</span>
                <input type="text" value={d.fullName} onChange={set("fullName")} placeholder="Jane Smith" />
              </label>
              <label>
                <span>Date of birth</span>
                <input type="text" value={d.dob} onChange={set("dob")} placeholder="01/01/1990" />
              </label>
            </div>
            <div className="rtc-row">
              <label>
                <span>NHS number (10 digits)</span>
                <input type="text" value={d.nhs} onChange={set("nhs")} placeholder="123 456 7890" />
              </label>
              <label>
                <span>Address (optional)</span>
                <input type="text" value={d.address} onChange={set("address")} placeholder="Optional, helps GP match record" />
              </label>
            </div>
            <p className="rtc-hint">Don't know your NHS number? Login to the NHS App or call your GP. You can submit without it but it speeds things up.</p>
          </div>

          <div className="rtc-field-group">
            <span className="rtc-step">Step 2 · Your GP</span>
            <div className="rtc-row">
              <label>
                <span>GP's surname</span>
                <input type="text" value={d.gp} onChange={set("gp")} placeholder="Patel" />
              </label>
              <label>
                <span>Choose your provider</span>
                <select value={d.provider} onChange={set("provider")}>
                  {RTC_PROVIDERS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </label>
            </div>
            <p className="rtc-hint">{RTC_PROVIDERS.find(p => p.name === d.provider)?.note || ""}. All providers shown hold NHS Right to Choose contracts as of 2025.</p>
          </div>

          <div className="rtc-field-group">
            <span className="rtc-step">Step 3 · The impact</span>
            <p className="rtc-hint" style={{marginTop:0, marginBottom:14}}>Three short sentences about how ADHD shows up in your day-to-day. Be specific, this is what GPs read closely. Examples: "I've been disciplined twice at work for missing deadlines." "I struggle to keep up with bills and admin." "I've been treated for anxiety since my twenties but it never quite went away."</p>
            <label>
              <span>Impact 1 · work or focus</span>
              <textarea value={d.impact1} onChange={set("impact1")} rows={2} placeholder="e.g. I cannot finish work projects without months of avoidance and last-minute panic."></textarea>
            </label>
            <label>
              <span>Impact 2 · home or relationships</span>
              <textarea value={d.impact2} onChange={set("impact2")} rows={2} placeholder="e.g. My partner has started doing all the household admin because I forget appointments and miss bills."></textarea>
            </label>
            <label>
              <span>Impact 3 · mental health or wellbeing</span>
              <textarea value={d.impact3} onChange={set("impact3")} rows={2} placeholder="e.g. I have been treated for anxiety and depression for ten years and feel something else is going on."></textarea>
            </label>
          </div>

          <div className="rtc-actions">
            <button type="button" className="btn btn-accent" onClick={copyLetter}>
              {copied ? "✓ Copied to clipboard" : "Copy letter →"}
            </button>
            <button type="button" className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={downloadLetter}>
              {downloaded ? "✓ Downloaded" : "Download as .txt"}
            </button>
            <button type="button" className="btn btn-ghost" style={{border:"1px solid var(--line)"}} onClick={printLetter}>Print / Save PDF</button>
          </div>
        </form>

        <aside className="rtc-preview">
          <div className="rtc-preview-head">
            <span className="rtc-step" style={{color:"#fff", opacity:0.85}}>Live preview</span>
            <span className="rtc-watermark">Untangle</span>
          </div>
          <pre className="rtc-letter">{letter}</pre>
        </aside>
      </div>

      <div className="rtc-faq">
        <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:28, marginBottom:16}}>Quick questions before you send</h3>
        <div className="rtc-faq-grid">
          <div className="card"><h4>Will my GP actually do this?</h4><p>Most will, and Right to Choose is statutory rather than optional. If your GP refuses outright, ask politely for the refusal in writing and forward that letter to your local ICB. r/ADHDUK quietly maintains a community list of surgeries that have refused, and you can usually switch to one nearby that already says yes without much fuss.</p></div>
          <div className="card"><h4>Is this only for England?</h4><p>For now, yes. Patient Choice / Right to Choose is an NHS England policy, so Scotland, Wales and Northern Ireland use different routes (the previous page covers each of them). If you live in England but happen to be registered with a GP elsewhere, it can sometimes still apply, so it is worth asking.</p></div>
          <div className="card"><h4>What happens after the referral?</h4><p>Your chosen provider tends to write to you within four to six weeks for a short phone or video screening, and then books in your full assessment. Waits run somewhere between three and eight months in practice. Diagnosis and titration are free at that point, with prescriptions at the standard £9.90 per item or covered by a prepayment certificate.</p></div>
          <div className="card"><h4>Does my data stay private?</h4><p>Yes, completely. Everything you type stays inside your own browser, and we do not store, send or even see any of it. If you refresh the page it is gone, so please save your letter somewhere safe before you close the tab.</p></div>
        </div>
      </div>

      <div className="disclaim" style={{marginTop:28}}>
        <strong>One important thing.</strong> This letter is a starting point, not legal advice. Right to Choose policy can shift, and individual ICBs sometimes push back. If you hit a wall, ADHD UK has a free template-letter helpline and a list of currently-cooperating GP surgeries by region. We are not affiliated, they are just brilliant.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_RTC_GEN = [
  { ch: "test", title: "★ The Fast Track: GP letter generator", render: () => <PageRTCGenerator /> },
];
