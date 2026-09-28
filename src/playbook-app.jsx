// Untangle Playbook — app shell (navigation, chrome, drawer)
const { useState, useEffect, useMemo, useRef } = React;

const CHAPTERS = [
  { id: "intro",    label: "Welcome",            color: "#FF5A36" },
  { id: "self",     label: "Could I have ADHD?", color: "#FF5A36" },
  { id: "parents",  label: "For parents",        color: "#9FB89A" },
  { id: "test",     label: "Get tested",         color: "#8AB4C8" },
  { id: "tools",    label: "Daily tools",        color: "#E8B948" },
  { id: "podcasts", label: "Podcasts",           color: "#4FA37E" },
  { id: "videos",   label: "Videos",             color: "#6B4D7A" },
  { id: "meds",     label: "Medication",         color: "#D9738F" },
  { id: "work",     label: "Work & study",       color: "#3F5E8C" },
  { id: "support",  label: "Get help now",       color: "#B5543C" },
  { id: "end",      label: "Close",              color: "#1A1814" },
];

const PAGE_NOTES = {
 "adhd-and-pregnancy.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "diagnosed-over-60.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "adhd-and-housing.html": "This page provides general information and is not legal advice. Housing law differs across the UK and changes often. Speak to Shelter, Citizens Advice or a housing adviser about your situation. Last checked September 2026.",
 "fostering-adoption-and-kinship-care.html": "This page provides general information. Fostering, adoption and kinship rules differ across the UK. Speak to your agency, council, Kinship or Adoption UK about your situation. Last checked September 2026.",
 "medication-options.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "what-to-expect.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "first-two-weeks-on-meds.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "stimulants-and-your-body.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "adhd-and-the-menstrual-cycle.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "rsd.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "co-occurring.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "audhd-when-you-have-both.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "adhd-and-addiction-what-helps.html": "This page provides general information and is not medical advice. Speak to a qualified clinician or prescriber about diagnosis, treatment or medication changes. Last checked September 2026.",
 "getting-tested.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "three-routes.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "clinic-directory.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "gp-script.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "while-you-wait.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "shared-care.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "refusal-scripts.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "the-fast-track-gp-letter-generator.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "getting-assessed.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "for-parents.html": "NHS services, provider availability, waiting times and local arrangements change. Check current information with your GP, the provider or GOV.UK. Last checked September 2026.",
 "work-and-study.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026.",
 "reasonable-adjustments.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026.",
 "disclosure-email.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026.",
 "driving-and-the-dvla.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026.",
 "adhd-and-money-the-tax.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026.",
 "adhd-and-money-the-longer-game.html": "This page provides general information, not legal advice. Rights depend on your circumstances. Check current guidance on GOV.UK or with ACAS. Last checked September 2026."
};

// Essay-style pages: one column of text, no photo
const READING_PAGES = ["shame.html", "diagnostic-grief.html", "the-loneliness-of-an-adhd-adult.html", "sunday-night-dread.html", "if-you-already-feel-broken.html", "adhd-in-love.html", "rsd.html", "who-gets-missed.html"];

function BrandMark() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 14 C 4 8, 8 4, 14 4 S 24 8, 24 14 S 20 24, 14 24 S 4 20, 4 14 Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 10 C 12 14, 16 10, 20 14 M8 18 C 12 14, 16 18, 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function App() {
  // Build the full sequential page list
  const PAGES = useMemo(() => {
    const cover = { ch: "intro", title: "Welcome", render: (ctx) => <window.PB_COVER onStart={() => ctx.go(1)} total={ctx.total} resumeIdx={ctx.resumeIdx} resumeTitle={ctx.resumeTitle} /> };
    const end = { ch: "end", title: "Close", render: (ctx) => <window.PB_END onRestart={() => ctx.go(0)} onJump={(chId) => ctx.jumpToChapter(chId)} /> };
    // Splice extra pages into the right chapter slots
    // Chapter 1.5 inserts after self
    const p1_3 = [...(window.PB_PAGES_1_3 || [])];
    // Insert intro pages (how-to + skim + what ADHD is) at the very start of the self chapter
    const firstSelfIdx = p1_3.map(p => p.ch).indexOf("self");
    if (firstSelfIdx >= 0) {
      const intros = [...(window.PB_PAGES_EXTRA_INTRO || []), ...(window.PB_PAGES_EXTRA_BEFORE_SELF || [])];
      if (intros.length) p1_3.splice(firstSelfIdx, 0, ...intros);
    }
    const lastSelfIdx = p1_3.map(p => p.ch).lastIndexOf("self");
    const selfExtras = [...(window.PB_PAGES_EXTRA_AFTER_SELF || []), ...(window.PB_PAGES_EXTRA_AFTER_SELF_2 || []), ...(window.PB_PAGES_EXTRA_AFTER_SELF_3 || []), ...(window.PB_PAGES_EXTRA_AFTER_SELF_4 || []), ...(window.PB_PAGES_EXTRA_AFTER_SELF_5 || [])];
    if (lastSelfIdx >= 0 && selfExtras.length) p1_3.splice(lastSelfIdx + 1, 0, ...selfExtras);
    // Append child books after the last parents page
    const lastParentsIdx = p1_3.map(p => p.ch).lastIndexOf("parents");
    if (lastParentsIdx >= 0 && window.PB_PAGES_EXTRA_CHILD_BOOKS) p1_3.splice(lastParentsIdx + 1, 0, ...window.PB_PAGES_EXTRA_CHILD_BOOKS);
    // Test chapter inserts (Right to Choose / shared care) - splice at end of 'test' pages
    const lastTestIdx = p1_3.map(p => p.ch).lastIndexOf("test");
    if (lastTestIdx >= 0 && window.PB_PAGES_EXTRA_TESTED) p1_3.splice(lastTestIdx + 1, 0, ...window.PB_PAGES_EXTRA_TESTED);
    // GP letter generator slots after the test pages
    const lastTestIdx2 = p1_3.map(p => p.ch).lastIndexOf("test");
    if (lastTestIdx2 >= 0 && window.PB_PAGES_EXTRA_RTC_GEN) p1_3.splice(lastTestIdx2 + 1, 0, ...window.PB_PAGES_EXTRA_RTC_GEN);
    // Tools extras
    const p4_6 = [...(window.PB_PAGES_4_6 || [])];
    const lastToolsIdx = p4_6.map(p => p.ch).lastIndexOf("tools");
    if (lastToolsIdx >= 0 && window.PB_PAGES_EXTRA_AFTER_TOOLS) p4_6.splice(lastToolsIdx + 1, 0, ...window.PB_PAGES_EXTRA_AFTER_TOOLS);
    // Time blindness page into tools
    const lastToolsIdx2 = p4_6.map(p => p.ch).lastIndexOf("tools");
    if (lastToolsIdx2 >= 0 && window.PB_PAGES_EXTRA_TOOLS_TIME) p4_6.splice(lastToolsIdx2 + 1, 0, ...window.PB_PAGES_EXTRA_TOOLS_TIME);
    const lastToolsIdx3 = p4_6.map(p => p.ch).lastIndexOf("tools");
    if (lastToolsIdx3 >= 0 && window.PB_PAGES_EXTRA_TOOLS_2) p4_6.splice(lastToolsIdx3 + 1, 0, ...window.PB_PAGES_EXTRA_TOOLS_2);
    // Meds & work extras inserted into p7_9
    const p7_9 = [...(window.PB_PAGES_7_9 || [])];
    const lastMedsIdx = p7_9.map(p => p.ch).lastIndexOf("meds");
    if (lastMedsIdx >= 0 && window.PB_PAGES_EXTRA_MEDS) p7_9.splice(lastMedsIdx + 1, 0, ...window.PB_PAGES_EXTRA_MEDS);
    const lastWorkIdx = p7_9.map(p => p.ch).lastIndexOf("work");
    if (lastWorkIdx >= 0 && window.PB_PAGES_EXTRA_WORK) p7_9.splice(lastWorkIdx + 1, 0, ...window.PB_PAGES_EXTRA_WORK);
    // MP letter generator into support chapter
    const lastSupportIdx = p7_9.map(p => p.ch).lastIndexOf("support");
    if (lastSupportIdx >= 0 && window.PB_PAGES_EXTRA_SUPPORT_MP) p7_9.splice(lastSupportIdx + 1, 0, ...window.PB_PAGES_EXTRA_SUPPORT_MP);
    const lastSupportIdx2 = p7_9.map(p => p.ch).lastIndexOf("support");
    if (lastSupportIdx2 >= 0 && window.PB_PAGES_EXTRA_SUPPORT_LOVED) p7_9.splice(lastSupportIdx2 + 1, 0, ...window.PB_PAGES_EXTRA_SUPPORT_LOVED);
    // Practical + reference pages before end (still tagged 'support' for drawer grouping)
    const tail = [...(window.PB_PAGES_EXTRA_BEFORE_END || []), ...(window.PB_PAGES_EXTRA_PRACTICAL || []), ...(window.PB_PAGES_EXTRA_REFERENCE || []), ...(window.PB_PAGES_EXTRA_FEEDBACK || [])];
    const all = [cover, ...p1_3, ...p4_6, ...p7_9, ...tail, end];
    (window.PB_PAGES_NEW || []).forEach(n => { const at = all.findIndex(p => p.title === n.after); if (at >= 0) all.splice(at + 1, 0, n.page); });
    return all;
  }, []);

  const total = PAGES.length;

  // Every page is its own HTML file. Each file sets window.PB_START before this script runs.
  const SLUGS = useMemo(() => {
    const seen = {};
    return PAGES.map((p, i) => {
      if (i === 0) return "index.html";
      let s = (p.title || "page").toLowerCase().replace(/★/g, "").replace(/['’]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "page";
      if (seen[s]) s = s + "-" + (i + 1);
      seen[s] = true;
      return s + ".html";
    });
  }, [PAGES]);
  window.PB_SLUGS = SLUGS;
  window.PB_TITLES = PAGES.map(p => p.title);

  const initialIdx = (() => {
    if (typeof window.PB_START === "number") return Math.max(0, Math.min(total - 1, window.PB_START));
    const file = decodeURIComponent(location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") + ".html";
    const byFile = SLUGS.indexOf(file);
    return byFile > 0 ? byFile : 0;
  })();

  // Old links (index.html#p=12) forward to the matching page file
  useEffect(() => {
    const m = location.hash.match(/p=(\d+)/);
    if (m) {
      const t = Math.max(0, Math.min(total - 1, parseInt(m[1]) - 1));
      if (t !== initialIdx) location.replace(SLUGS[t]);
      else history.replaceState(null, "", location.pathname);
    }
  }, []);
  // Each page is its own file: switching pages goes straight to the next file,
  // without first redrawing the new page inside the old one (that caused a show-blank-show flicker).
  const idx = initialIdx;
  const setIdx = (n) => {
    const t = typeof n === "function" ? n(idx) : n;
    if (t === idx || !SLUGS[t]) return;
    if (t > 0) localStorage.setItem("untangle-last-page", String(t + 1));
    location.href = SLUGS[t];
  };
  const [direction, setDirection] = useState("forward");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerQuery, setDrawerQuery] = useState("");
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const theme = "cool";
  const [textSize, setTextSize] = useState(localStorage.getItem("untangle-textsize") || "md");
  const [visited, setVisited] = useState(() => new Set(JSON.parse(localStorage.getItem("untangle-visited") || "[]")));
  const [saved, setSaved] = useState(() => new Set(JSON.parse(localStorage.getItem("untangle-saved") || "[]")));
  const [readMins, setReadMins] = useState(1);
  const [resumeIdx] = useState(() => {
    const v = parseInt(localStorage.getItem("untangle-last-page") || "0", 10);
    return v > 1 && v <= PAGES.length ? v - 1 : null;
  });
  const lastFocusRef = useRef(null);

  // Theme application
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.removeItem("untangle-theme");
  }, [theme]);

  // Remember last position + mark visited + estimate read time; moving to another page loads its own file
  useEffect(() => {
    if (idx > 0) localStorage.setItem("untangle-last-page", String(idx + 1));
    window.scrollTo({ top: 0 });
    setVisited(v => {
      if (v.has(idx)) return v;
      const next2 = new Set(v); next2.add(idx);
      localStorage.setItem("untangle-visited", JSON.stringify([...next2]));
      return next2;
    });
    const t = setTimeout(() => {
      const el = document.querySelector(".pb-page");
      const words = el ? el.textContent.trim().split(/\s+/).filter(Boolean).length : 0;
      setReadMins(Math.max(1, Math.round(words / 200)));
    }, 60);
    return () => clearTimeout(t);
  }, [idx]);

  // Text size (scales reading area only, not chrome)
  useEffect(() => {
    localStorage.setItem("untangle-textsize", textSize);
  }, [textSize]);


  function toggleSaved(i) {
    setSaved(s => {
      const next2 = new Set(s);
      if (next2.has(i)) next2.delete(i); else next2.add(i);
      localStorage.setItem("untangle-saved", JSON.stringify([...next2]));
      return next2;
    });
  }

  // Prefetch the next and previous page files so turning the page is instant
  useEffect(() => {
    const add = (href) => { if (!href || document.querySelector('link[rel="prefetch"][href="' + href + '"]')) return; const l = document.createElement("link"); l.rel = "prefetch"; l.href = href; document.head.appendChild(l); };
    const near = [SLUGS[initialIdx + 1], SLUGS[initialIdx - 1]].filter(Boolean);
    // Chrome/Edge: fully prepare the next/previous page in the background so it appears instantly
    if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
      const s = document.createElement("script"); s.type = "speculationrules";
      s.textContent = JSON.stringify({ prerender: [{ source: "list", urls: near }] });
      document.head.appendChild(s);
    }
    const t = setTimeout(() => near.forEach(add), 300);
    return () => clearTimeout(t);
  }, []);

  // Hash links still work (e.g. #p=12)
  useEffect(() => {
    const onHash = () => {
      const m = location.hash.match(/p=(\d+)/);
      if (m) location.href = SLUGS[Math.max(0, Math.min(total - 1, parseInt(m[1]) - 1))];
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [total]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "Escape") { setDrawerOpen(false); setTweaksOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Open drawer event from cover
  useEffect(() => {
    const onOpen = () => setDrawerOpen(true);
    const onLoophole = () => {
      const i = PAGES.findIndex(p => p.title && p.title.indexOf("Fast Track") >= 0);
      if (i >= 0) setIdx(i);
    };
    const onFeedback = () => {
      const i = PAGES.findIndex(p => p.title && p.title.indexOf("Give feedback") >= 0);
      if (i >= 0) setIdx(i);
    };
    const onResume = () => { if (resumeIdx != null) { setDirection("forward"); setIdx(resumeIdx); } };
    window.addEventListener("pb-open-drawer", onOpen);
    window.addEventListener("pb-jump-loophole", onLoophole);
    window.addEventListener("pb-jump-feedback", onFeedback);
    window.addEventListener("pb-jump-resume", onResume);
    return () => {
      window.removeEventListener("pb-open-drawer", onOpen);
      window.removeEventListener("pb-jump-loophole", onLoophole);
      window.removeEventListener("pb-jump-feedback", onFeedback);
      window.removeEventListener("pb-jump-resume", onResume);
    };
  }, [PAGES]);

  // WordPress iframe height messaging
  useEffect(() => {
    const send = () => {
      try {
        const h = document.documentElement.scrollHeight;
        window.parent.postMessage({ untangleHeight: h }, "*");
      } catch(e){}
    };
    send();
    const t = setTimeout(send, 400);
    return () => clearTimeout(t);
  }, [idx]);

  // Touch swipe
  const touchRef = useRef({ x: 0, y: 0 });
  function onTouchStart(e) { touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }
  function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    if (Math.abs(dx) > 80 && Math.abs(dy) < 60) {
      if (dx < 0) go(idx + 1); else go(idx - 1);
    }
  }

  function go(n) {
    if (n < 0 || n >= total || n === idx) return;
    setDirection(n > idx ? "forward" : "back");
    setIdx(n);
  }
  function jumpToChapter(chId) {
    const i = PAGES.findIndex(p => p.ch === chId);
    if (i >= 0) go(i);
  }

  const page = PAGES[Math.max(0, Math.min(PAGES.length - 1, idx))] || PAGES[0];
  React.useEffect(() => {
    if (idx === 0) return;
    const el = document.querySelector('.pb-page .ph h2, .pb-page .ph h1') || document.querySelector('.pb-page h2, .pb-page h1');
    if (!el) return;
    document.querySelectorAll('.pb-page .chip').forEach(c => { const n = c.nextElementSibling; if (n && /^H[12]$/.test(n.tagName)) c.style.display = 'none'; });
    const want = `${idx + 1}. ${page.title.replace(/^[^A-Za-z0-9]+/, '')}`;
    if (el.textContent !== want) el.textContent = want;
    el.classList.add('pb-title');
  }, [idx, textSize]);
  const chapter = CHAPTERS.find(c => c.id === page.ch) || CHAPTERS[0];
  const pct = ((idx + 1) / total) * 100;
  const ctx = { go, jumpToChapter, total, resumeIdx, resumeTitle: resumeIdx != null && PAGES[resumeIdx] ? PAGES[resumeIdx].title : null };

  // Group pages by chapter for drawer
  const chapterGroups = useMemo(() => {
    const groups = {};
    PAGES.forEach((p, i) => { (groups[p.ch] = groups[p.ch] || []).push({...p, idx: i}); });
    return groups;
  }, [PAGES]);

  const themes = [
    { name: "warm", label: "Warm", swatch: "#FF5A36" },
    { name: "cool", label: "Cool", swatch: "#2C5FCC" },
    { name: "contrast", label: "Contrast", swatch: "#000" },
    { name: "dark", label: "Dark", swatch: "#FF6F4D" },
  ];
  const textSizes = [
    { name: "sm", label: "Small", zoom: 0.9 },
    { name: "md", label: "Default", zoom: 1 },
    { name: "lg", label: "Large", zoom: 1.18 },
  ];
  const savedPages = [...saved].sort((a,b) => a-b).filter(i => PAGES[i]).map(i => ({ ...PAGES[i], idx: i })).filter(p => p.title);

  return (
    <div className={`pb-app ${idx === 0 ? "pb-cover-active" : ""}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <a href="#pb-main" className="pb-skip-link">Skip to content</a>
      <div aria-live="polite" className="pb-sr-only">{page.title}, page {idx + 1} of {total}</div>
      <header className="pb-top">
        <div className="pb-top-row">
          <button className="pb-brand" onClick={() => go(0)} title="Back to cover" aria-label="Back to cover">
            <span>Untangle</span>
          </button>
          <div className="pb-chapter-label">
            <span className="pb-chapter-dot" style={{background: chapter.color}}></span>
            <span>{chapter.id === "intro" ? "Welcome" : chapter.id === "end" ? "End" : chapter.label}</span>
            {readMins >= 5 && <span className="pb-readtime">~{readMins} min</span>}
          </div>
          <div className="pb-top-actions">
            {idx !== 0 && <button className={`pb-icon-btn ${saved.has(idx) ? "active" : ""}`} onClick={() => toggleSaved(idx)} title={saved.has(idx) ? "Remove bookmark" : "Save this page"} aria-label={saved.has(idx) ? "Remove bookmark for this page" : "Save this page"} aria-pressed={saved.has(idx)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={saved.has(idx) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/></svg>
            </button>}
            <button className="pb-icon-btn pb-textsize-btn" onClick={() => setTextSize(s => s === "sm" ? "md" : s === "md" ? "lg" : "sm")} title="Increase or decrease text size" aria-label={`Text size: ${textSize === "sm" ? "small" : textSize === "lg" ? "large" : "default"}. Click to change.`}>
              <span aria-hidden="true">Aa</span>
            </button>
            <button className="pb-icon-btn" onClick={(e) => { lastFocusRef.current = e.currentTarget; setDrawerOpen(true); }} title="Contents" aria-label="Open contents" aria-expanded={drawerOpen}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
        <div className="pb-progress"><div style={{ width: `${pct}%` }}></div></div>
      </header>

      <main className="pb-stage" id="pb-main" style={{zoom: textSizes.find(t => t.name === textSize).zoom}}>
        <div key={idx} style={{"--ch": chapter.color}} className={`pb-page ${direction === "back" ? "back" : ""} ${idx === 0 ? "pb-page-cover" : ""} ${idx > 0 && PAGES[idx - 1] && PAGES[idx - 1].ch !== page.ch ? "pb-first" : ""} ${READING_PAGES.includes(SLUGS[idx]) ? "pb-reading" : ""}`}>
          {page.render(ctx)}
          {PAGE_NOTES[SLUGS[idx]] && <p className="pb-page-note">{PAGE_NOTES[SLUGS[idx]]}</p>}
        </div>
      </main>

      <footer className="pb-bottom">
        <div className="pb-bottom-row">
          {idx > 0 ? (
            <button className="pb-nav-btn pb-prev" onClick={() => go(idx - 1)}>
              <span className="full-label">Previous</span>
            </button>
          ) : <div></div>}
          <div className="pb-counter">
            <strong>{idx + 1}</strong> <span>/ {total}</span>
          </div>
          <button className="pb-nav-btn next pb-next" onClick={() => go(idx + 1)} disabled={idx === total - 1}>
            <span className="full-label">{idx === 0 ? "Start" : idx === total - 2 ? "Finish" : "Next"}</span>
          </button>
        </div>
        <p className="pb-credit">Made with love by <a href="https://richexperiments.com" target="_blank" rel="noopener"><strong>Rich Experiments</strong></a></p>
      </footer>

      {/* Drawer */}
      <div className={`pb-drawer-overlay ${drawerOpen ? "open" : ""}`} onClick={() => setDrawerOpen(false)}></div>
      <aside className={`pb-drawer ${drawerOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Contents">
        <div className="pb-drawer-head">
          <h3>Contents</h3>
          <button className="pb-icon-btn" onClick={() => { setDrawerOpen(false); lastFocusRef.current && lastFocusRef.current.focus(); }} aria-label="Close contents">✕</button>
        </div>
        <div className="pb-drawer-search">
          <input type="search" placeholder="Search pages…" value={drawerQuery} onChange={e => setDrawerQuery(e.target.value)} aria-label="Search pages" />
        </div>
        <div className="pb-drawer-list">
          {savedPages.length > 0 && !drawerQuery && (
            <div className="pb-drawer-chapter">
              <h4><span className="swatch" style={{background: "#FF5A36"}}></span>Saved</h4>
              {savedPages.map(p => (
                <button key={p.idx} className={`pb-drawer-page ${p.idx === idx ? "current" : ""}`} onClick={() => { go(p.idx); setDrawerOpen(false); }} aria-current={p.idx === idx ? "page" : undefined}>
                  <span className="num">{p.idx + 1}</span>
                  <span>{p.title}</span>
                </button>
              ))}
            </div>
          )}
          {CHAPTERS.map(ch => {
            const pages = (chapterGroups[ch.id] || []).filter(p => !drawerQuery || p.title.toLowerCase().includes(drawerQuery.toLowerCase()));
            if (!pages.length) return null;
            const allPages = chapterGroups[ch.id] || [];
            const doneCount = allPages.filter(p => visited.has(p.idx)).length;
            return (
              <div key={ch.id} className="pb-drawer-chapter">
                <h4>
                  <span className="swatch" style={{background: ch.color}}></span>{ch.label}
                  {!drawerQuery && <span className="pb-chapter-progress">{doneCount}/{allPages.length} read</span>}
                </h4>
                {pages.map(p => (
                  <button key={p.idx} className={`pb-drawer-page ${p.idx === idx ? "current" : ""} ${visited.has(p.idx) ? "visited" : ""}`} onClick={() => { go(p.idx); setDrawerOpen(false); }} aria-current={p.idx === idx ? "page" : undefined}>
                    <span className="num">{p.idx + 1}</span>
                    <span>{p.title}</span>
                    {visited.has(p.idx) && <span className="pb-sr-only">, read</span>}
                    <span className="pb-drawer-star-hit" onClick={(e) => { e.stopPropagation(); toggleSaved(p.idx); }} role="button" aria-label={saved.has(p.idx) ? `Remove bookmark for ${p.title}` : `Save ${p.title}`}>
                      <span className={`pb-drawer-star ${saved.has(p.idx) ? "active" : ""}`}>★</span>
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
          {drawerQuery && Object.values(chapterGroups).every(pages => !pages.some(p => p.title.toLowerCase().includes(drawerQuery.toLowerCase()))) && (
            <div className="pb-drawer-empty">No pages match "{drawerQuery}".</div>
          )}
        </div>
      </aside>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
