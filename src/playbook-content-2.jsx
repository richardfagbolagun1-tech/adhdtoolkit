// Untangle Playbook, Chapters 4-6 (Daily tools, Podcasts, Videos)

const FRAMEWORKS = [
  {
    id: "body-doubling",
    num: "1",
    name: "Body doubling",
    when: "When you can't start",
    photo: "assets/body-doubling-laptops.webp",
    lede: "Sit alongside another person, in real life or on video, while you both work on your own thing. Their presence anchors yours.",
    steps: [
      { h: "Pick a buddy", b: "A friend, a colleague, or a complete stranger on a body-doubling app like Focusmate or Flow Club, all of these work just as well." },
      { h: "Set a timer", b: "Agree a window before you start, many people find fifty minutes works well. Say what you're each working on at the top so you're both anchored." },
      { h: "Stay quiet, stay visible", b: "Don't chat your way through it, it works because you are both working, not talking. If you are doing this online, many people find it helps to keep cameras on." },
    ],
  },
  {
    id: "pomodoro",
    num: "2",
    name: "Pomodoro",
    when: "When you can't focus",
    photo: "assets/pomodoro-clock.webp",
    lede: "Work in 25-minute sprints with 5-minute breaks. ADHD brains hate open-ended tasks. Pomodoro gives them a finish line.",
    steps: [
      { h: "Pick one task", b: "One thing, not three. Write it down on the page in front of you so your brain has something to come back to when it drifts, because it will drift." },
      { h: "25 on, 5 off", b: "Use a timer with a visible countdown if you can, a TimeTimer or any app works. When it rings, you stop, even if you're mid-sentence, that's the rule." },
      { h: "After 4 rounds, take 20", b: "Give yourself a proper longer break, walk somewhere, stretch, eat something real. Then come back for the next four if you've got it in you." },
    ],
  },
  {
    id: "eisenhower",
    num: "3",
    name: "Eisenhower matrix",
    when: "When you're overwhelmed",
    photo: "assets/eisenhower-notebook.webp",
    lede: "Sort everything on your plate into four boxes: urgent or not, important or not. Most ADHD overwhelm comes from treating everything as urgent.",
    steps: [
      { h: "Brain-dump", b: "Get every single task out of your head and onto the page, no order, no judgement, no editing as you go. Emptying your head matters more than the list itself." },
      { h: "Sort into the grid", b: "Urgent and important goes in 'do now'. Important but not urgent goes in 'schedule'. Urgent but not important goes in 'delegate or shrink'. Neither goes in the bin." },
      { h: "Trust the bottom-right bin", b: "ADHD brains love to hoard 'maybe one day' tasks that drain attention without ever getting done. They're noise pretending to be work. Delete them with confidence." },
    ],
  },
  {
    id: "brain-dump",
    num: "4",
    name: "1-3-5 brain dump",
    when: "When the day feels too big",
    photo: "assets/brain-dump-notes.webp",
    lede: "Empty everything onto paper. Then pick one big thing, three medium things, and five small things. That's the day.",
    steps: [
      { h: "Dump for 10 minutes", b: "Every task, every errand, every worry, get it all on the page. Don't filter, don't organise, don't tidy as you go. Just empty the brain." },
      { h: "Pick 1 + 3 + 5", b: "One Big Important Thing, three Medium Things, five Small Quick Wins. Everything else slides over to tomorrow's list, no guilt attached." },
      { h: "Cross off as you go", b: "ADHD brains live for visible progress. Use a thick pen, cross things off with proper vigour, and let yourself feel the small win each time." },
    ],
  },
  {
    id: "dopamine",
    num: "5",
    name: "Dopamine menu",
    when: "When everything feels flat",
    photo: "assets/page-45-dopamine-menu.webp",
    lede: "Build a list of small reliable joys. When you're flat or shutdown, pick one. Stop scrolling, start regulating.",
    steps: [
      { h: "Make four columns", b: "Starters (about 5 minutes), mains (around 30), sides (things you do in the background), and desserts (proper treats). Three to five things you enjoy in each." },
      { h: "Stick it on the fridge", b: "Somewhere external and visible, because when your brain is offline you don't want to be making decisions, you want to be reading them." },
      { h: "Order off the menu", b: "Next time you're stuck, just pick one. Don't overthink it. The menu has already made the choice for you." },
    ],
  },
  {
    id: "spoons",
    num: "6",
    name: "Spoons mapping",
    when: "When you keep crashing",
    photo: "assets/page-46-spoons.webp",
    lede: "Map your daily energy. ADHD energy comes in waves. Plan around them or pay the price.",
    steps: [
      { h: "Track for a week", b: "Note your energy hour by hour on a scale of one to ten. Look for your peaks, they differ from person to person, so track yours for a week." },
      { h: "Schedule hard tasks at peaks", b: "Stop trying to write hard things at 3pm if 3pm is your trough. Move admin and emails into the troughs and save the thinking work for when your brain is online." },
      { h: "Protect the troughs", b: "When the dip hits, lie down, walk, eat protein, do anything except fight it with caffeine and shame. That can leave you more tired later." },
    ],
  },
];

function PageToolsIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--mustard)", borderColor:"var(--mustard)", color:"var(--ink)"}}>Chapter 4 · Daily tools</span>
          <h2 style={{marginTop:16}}>Six tools that <span className="accent">actually</span><br/>work for ADHD brains.</h2>
          <p className="lede">Six small methods that people with ADHD recommend to each other. Each has its own page. Pick the one that sounds easiest and try it for a week. You do not need a diagnosis to try any of them. Take what helps and leave the rest.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-40-tools.webp')`}}></div>
      </div>
    </div>
  );
}

function PageFramework({fw}) {
  return (
    <div>
      <div className="ph ph-stack fw-page">
        <div>
          <h2 style={{marginTop:0}}>{fw.name}</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <div className="meta" style={{display:"flex", gap:10, flexWrap:"wrap", marginBottom:16}}>
              <span className="chip fw-chip">Framework {fw.num}</span>
              <span className="chip">{fw.when}</span>
            </div>
            <p className="lede">{fw.lede}</p>
            <PBSlider items={fw.steps.map(s => ({h: s.h, p: s.b}))} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${fw.photo}')`}}></div>
      </div>
    </div>
  );
}

// =================== CHAPTER 5: PODCASTS ===================

const PODCASTS = [
  { name: "ADHD Chatter", host: "Alex Partridge", desc: "Long interviews from a UK host who was diagnosed at 35. Funny and useful.", cv: { initials: "AC", c1: "#FF5A36", c2: "#1A1814" }, url: "https://open.spotify.com/show/6F0Yb1xPTKzZSb4mTcZUkj", country: "UK" },
  { name: "ADHD for Smart Ass Women", host: "Tracy Otsuka", desc: "For women diagnosed later in life. Focuses on strengths.", cv: { initials: "SA", c1: "#E8B948", c2: "#6B4D7A" }, url: "https://open.spotify.com/show/5UmIQAv0KZ4yhDDeYW1ULd", country: "US" },
  { name: "I Have ADHD Podcast", host: "Kristen Carder", desc: "A weekly show. Good on emotions and shame.", cv: { initials: "IH", c1: "#8AB4C8", c2: "#1A1814" }, url: "https://open.spotify.com/show/3xQU9pPePvA6tdQwGAv6JS", country: "US" },
  { name: "The ADHD Adults Podcast", host: "James Brown & co", desc: "From the UK. Three adults with ADHD talk about research and their own lives.", cv: { initials: "AA", c1: "#9FB89A", c2: "#1A1814" }, url: "https://open.spotify.com/show/0wxHB6QvU2YbnNHaJiQqLJ", country: "UK" },
  { name: "Hyperfocus", host: "Rae Jacobson", desc: "Short-form, magazine style. Single ADHD topics in 20 minutes.", cv: { initials: "HF", c1: "#6B4D7A", c2: "#FF5A36" }, url: "https://open.spotify.com/show/3wIvtHHoyCKwOWMQpYJWVx", country: "US" },
  { name: "ADHD Experts", host: "ADDitude Magazine", desc: "Interviews with clinicians and researchers. Good if you want the science.", cv: { initials: "AE", c1: "#1A1814", c2: "#E8B948" }, url: "https://open.spotify.com/show/0bAOH2g0nVeGqVuP2KNi33", country: "US" },
  { name: "Distraction", host: "Dr Edward Hallowell", desc: "From a doctor who has written widely on ADHD. Warm and expert.", cv: { initials: "DT", c1: "#FF5A36", c2: "#8AB4C8" }, url: "https://open.spotify.com/show/4LfTJTLuJdljbsFiUm0H0v", country: "US" },
  { name: "Translating ADHD", host: "Shelly & Cam", desc: "Two coaches talk about what to do after a diagnosis. Practical and kind.", cv: { initials: "TA", c1: "#1DB954", c2: "#1A1814" }, url: "https://open.spotify.com/show/1QQxJqxxScrxnIyhc4lOzh", country: "US" },
  { name: "ADHD Aha!", host: "Laura Key (Understood)", desc: "Short episodes. People describe the moment they realised they had ADHD.", cv: { initials: "AH", c1: "#FFD23F", c2: "#FF5A36" }, url: "https://open.spotify.com/show/5JD6yo08OMfFLPzZNxLXZA", country: "US" },
  { name: "Squirrels of a Feather", host: "Cathy Rashidian", desc: "For women diagnosed later in life. Relaxed and friendly.", cv: { initials: "SF", c1: "#9FB89A", c2: "#6B4D7A" }, url: "https://open.spotify.com/show/4tHANI0Q6VGjOGbjQ26HVU", country: "UK" },
  { name: "The ADHD Women's Wellbeing Podcast", host: "Kate Moryoussef", desc: "A UK podcast about hormones, perimenopause and ADHD.", cv: { initials: "WW", c1: "#E8B948", c2: "#1A1814" }, url: "https://open.spotify.com/show/4ESjJBVXjOQF1cf6jztU1c", country: "UK" },
  { name: "Climbing the Walls", host: "Danielle Elliot", desc: "A reported series on why so many women are being diagnosed later in life.", cv: { initials: "CW", c1: "#8AB4C8", c2: "#FF5A36" }, url: "https://open.spotify.com/show/2ngL40oHe3cP5xsvJ6HVbX", country: "US" },
];

function PagePodcastsIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--spotify)", borderColor:"var(--spotify)", color:"#000"}}>Chapter 5 · Podcasts</span>
          <h2 style={{marginTop:16}}>Twelve podcasts worth<br/>your <span className="accent">commute</span>.</h2>
          <p className="lede">Twelve we keep coming back to, gathered from listeners and creators across the UK and the US. No affiliates or sponsors. Tap any cover to open it in Spotify.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/podcasts-earbuds.webp"}')`}}></div>
      </div>
    </div>
  );
}

function PagePodcasts({slice, intro}) {
  const items = PODCASTS.slice(...slice);
  return (
    <div>
      <span className="chip">Chapter 5 · Picks {slice[0]+1}-{slice[1]}</span>
      <h2 style={{marginTop:16, marginBottom: 10}}>Curated on Spotify.</h2>
      {intro && <p className="lede" style={{marginBottom:12}}>Twelve we keep coming back to, gathered from listeners and creators across the UK and the US. No affiliates or sponsors. Tap any cover to open it in Spotify.</p>}
      <p style={{fontSize:14, color:"var(--muted)", marginBottom:24}}>Each cover opens the show in Spotify. Real cover artwork sits inside Spotify itself, the swatches below are our visual shorthand so this page works even when an image host is blocked.</p>
      <div className="pod-grid">
        {items.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener" className="pod-card">
            <div className="pod-art" style={{background:`linear-gradient(135deg, ${p.cv.c1} 0%, ${p.cv.c2} 100%)`, display:"flex", alignItems:"center", justifyContent:"center"}}>
              <span style={{fontFamily:"var(--display, 'Outfit', sans-serif)", fontSize:54, fontWeight:600, color:"#fff", letterSpacing:"-0.04em", lineHeight:1}}>{p.cv.initials}</span>
              <span className="play">▶</span>
            </div>
            <div className="pod-body">
              <h4>{p.name}</h4>
              <span className="host">{p.host}</span>
              <p>{p.desc}</p>
              <div className="pod-foot">
                <span>{p.country}</span>
                <span>Open in Spotify</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// =================== CHAPTER 6: VIDEOS ===================

const VIDEOS = [
  { title: "Failing at Normal: An ADHD Success Story (TEDx)", cat: "Lived experience", dur: "12 min", q: "Jessica McCabe TEDx Failing at Normal ADHD" },
  { title: "What is ADHD? (How to ADHD)", cat: "Explainer", dur: "5 min", q: "How to ADHD what is ADHD Jessica McCabe" },
  { title: "ADHD in adult women, explained", cat: "Clinical", dur: "15 min", q: "ADHD adult women diagnosis UK" },
  { title: "Right to Choose explained, UK", cat: "How-to", dur: "8 min", q: "ADHD Right to Choose UK explained" },
  { title: "Body doubling, demonstrated", cat: "Tool", dur: "5 min", q: "body doubling ADHD demonstration" },
  { title: "RSD: rejection sensitive dysphoria", cat: "Explainer", dur: "9 min", q: "ADHD RSD rejection sensitive dysphoria" },
  { title: "Parents on diagnosing their child", cat: "Parents", dur: "11 min", q: "parents diagnosing child ADHD UK" },
  { title: "ADHD medication, plain English", cat: "Clinical", dur: "13 min", q: "ADHD medication explained UK methylphenidate elvanse" },
  { title: "ADHD at work: rights you have (UK)", cat: "How-to", dur: "10 min", q: "ADHD at work UK Equality Act reasonable adjustments" },
];

function PageVideosIntro() {
  return (
    <div>
      <div className="ph ph-noline">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 6 · Videos</span>
          <h2 style={{marginTop:16}}>Nine short videos<br/>worth <span className="accent">watching</span>.</h2>
          <p className="lede">Short videos for when reading isn't working: explainers from clinicians, lived-experience stories and a few practical how-tos. None are longer than sixteen minutes.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/video-sofa.webp')`}}></div>
      </div>
    </div>
  );
}

function PageVideos() {
  const featured = "JiwZQNYlGQI"; // Jessica McCabe — Failing at Normal (TEDxBratislava)
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 6 · Library</span>
          <h2 style={{marginTop:16, marginBottom:10}}>The video library.</h2>
          <p className="lede">Short videos for when reading isn't working: explainers from clinicians, lived-experience stories and a few practical how-tos. None are longer than sixteen minutes.</p>
          <p style={{color:"var(--ink-2)", fontSize:16, lineHeight:1.55, marginTop:16, marginBottom:0}}>One talk plays on this page. The others open a YouTube search for the title, so the links keep working if a video moves.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/video-sofa.webp')`, backgroundPosition:"22% center"}}></div>
      </div>

      <div style={{position:"relative", width:"100%", aspectRatio:"16/9", borderRadius:14, overflow:"hidden", border:"1px solid var(--line)", marginBottom:8, background:"#000"}}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${featured}?rel=0`}
          title="Featured ADHD talk"
          style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0}}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p style={{fontSize:13, fontWeight:700, color:"var(--muted)", marginBottom:24}}>Featured · Jessica McCabe · TEDxBratislava · 12 min</p>

      <h3 style={{fontSize:22, marginTop:8, marginBottom:14}}>More to watch</h3>
      <div className="video-grid">
        {VIDEOS.map((v, i) => (
          <a key={i} href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v.q)}`} target="_blank" rel="noopener" className={`video-card ${v.size || ""}`} style={{textDecoration:"none", color:"inherit", background:"linear-gradient(135deg, #1a1814 0%, #2a2620 100%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:18, minHeight:180}}>
            <span className="duration" style={{position:"absolute", top:14, right:14, background:"rgba(0,0,0,0.55)", color:"#fff", padding:"4px 10px", borderRadius:999, fontSize:11, fontFamily:"var(--mono)", letterSpacing:"0.05em"}}>{v.dur}</span>
            <span className="play-icon" aria-hidden="true" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:54, height:54, borderRadius:"50%", background:"rgba(255,255,255,0.92)", color:"#1a1814", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:600}}>▶</span>
            <div className="video-meta" style={{position:"relative", zIndex:1}}>
              <span className="cat" style={{fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.7)"}}>{v.cat}</span>
              <h4 style={{marginTop:6, color:"#f4efe6", fontSize:18, lineHeight:1.3}}>{v.title}</h4>
              <span style={{display:"inline-block", marginTop:8, fontSize:12, fontWeight:700, color:"#FF8060"}}>Open on YouTube</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

window.PB_PAGES_4_6 = [
  { ch: "tools", title: "Daily tools", render: () => <PageToolsIntro /> },
  ...FRAMEWORKS.map(fw => ({ ch: "tools", title: fw.name, render: () => <PageFramework fw={fw} /> })),

  { ch: "podcasts", title: "Podcasts", render: () => <PagePodcasts slice={[0,6]} intro /> },
  { ch: "podcasts", title: "More podcasts", render: () => <PagePodcasts slice={[6,12]} /> },

  { ch: "videos", title: "Video library", render: () => <PageVideos /> },
];
