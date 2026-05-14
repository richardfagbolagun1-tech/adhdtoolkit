// Untangle Playbook, Chapters 4-6 (Daily tools, Podcasts, Videos)

const FRAMEWORKS = [
  {
    id: "body-doubling",
    num: "01",
    name: "Body doubling",
    when: "When you can't start",
    photo: R("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"),
    lede: "Sit alongside another person, in real life or on video, while you both work on your own thing. Their presence anchors yours.",
    steps: [
      { h: "Pick a buddy", b: "A friend, a colleague, or honestly a complete stranger on a body-doubling app like Focusmate or Flow Club, all of these work just as well." },
      { h: "Set a timer", b: "Agree a window before you start, fifty minutes seems to be the sweet spot for most people. Say what you're each working on at the top so you're both anchored." },
      { h: "Stay quiet, stay visible", b: "Don't chat your way through it, the magic is parallel presence rather than conversation. Camera on if you're doing this remotely, it really does make a difference." },
    ],
  },
  {
    id: "pomodoro",
    num: "02",
    name: "Pomodoro",
    when: "When you can't focus",
    photo: R("https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=900&q=80"),
    lede: "Work in 25-minute sprints with 5-minute breaks. ADHD brains hate open-ended tasks. Pomodoro gives them a finish line.",
    steps: [
      { h: "Pick one task", b: "One thing, not three. Write it down on the page in front of you so your brain has something to come back to when it drifts, because it will drift." },
      { h: "25 on, 5 off", b: "Use a timer with a visible countdown if you can, a TimeTimer or any app works. When it rings, you stop, even if you're mid-sentence, that's the rule." },
      { h: "After 4 rounds, take 20", b: "Give yourself a proper longer break, walk somewhere, stretch, eat something real. Then come back for the next four if you've got it in you." },
    ],
  },
  {
    id: "eisenhower",
    num: "03",
    name: "Eisenhower matrix",
    when: "When you're overwhelmed",
    photo: R("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=80"),
    lede: "Sort everything on your plate into four boxes: urgent or not, important or not. Most ADHD overwhelm comes from treating everything as urgent.",
    steps: [
      { h: "Brain-dump", b: "Get every single task out of your head and onto the page, no order, no judgement, no editing as you go. The point is the emptying, not the list." },
      { h: "Sort into the grid", b: "Urgent and important goes in 'do now'. Important but not urgent goes in 'schedule'. Urgent but not important goes in 'delegate or shrink'. Neither goes in the bin." },
      { h: "Trust the bottom-right bin", b: "ADHD brains love to hoard 'maybe one day' tasks that drain attention without ever getting done. They're noise pretending to be work. Delete them with confidence." },
    ],
  },
  {
    id: "brain-dump",
    num: "04",
    name: "1-3-5 brain dump",
    when: "When the day feels too big",
    photo: R("https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=80"),
    lede: "Empty everything onto paper. Then pick one big thing, three medium things, and five small things. That's the day.",
    steps: [
      { h: "Dump for 10 minutes", b: "Every task, every errand, every worry, get it all on the page. Don't filter, don't organise, don't tidy as you go. Just empty the brain." },
      { h: "Pick 1 + 3 + 5", b: "One Big Important Thing, three Medium Things, five Small Quick Wins. Everything else slides over to tomorrow's list, no guilt attached." },
      { h: "Cross off as you go", b: "ADHD brains live for visible progress. Use a thick pen, cross things off with proper vigour, and let yourself feel the small win each time." },
    ],
  },
  {
    id: "dopamine",
    num: "05",
    name: "Dopamine menu",
    when: "When everything feels flat",
    photo: "assets/page-45-dopamine-menu.jpg",
    lede: "Build a list of small reliable joys. When you're flat or shutdown, pick one. Stop scrolling, start regulating.",
    steps: [
      { h: "Make four columns", b: "Starters (about 5 minutes), mains (around 30), sides (things you do in the background), and desserts (proper treats). Three to five things you genuinely enjoy in each." },
      { h: "Stick it on the fridge", b: "Somewhere external and visible, because when your brain is offline you don't want to be making decisions, you want to be reading them." },
      { h: "Order off the menu", b: "Next time you're stuck, just pick one. Don't deliberate, don't optimise. The whole point is that the menu has already made the choice for you." },
    ],
  },
  {
    id: "spoons",
    num: "06",
    name: "Spoons mapping",
    when: "When you keep crashing",
    photo: "assets/page-46-spoons.jpg",
    lede: "Map your daily energy. ADHD energy isn't linear, it's a series of waves. Plan around them or pay the price.",
    steps: [
      { h: "Track for a week", b: "Note your energy hour by hour on a scale of one to ten. Look for your peaks, for most ADHDers they fall somewhere around 10am to noon, or 4pm to 7pm." },
      { h: "Schedule hard tasks at peaks", b: "Stop trying to write hard things at 3pm if 3pm is your trough. Move admin and emails into the troughs and save the thinking work for when your brain is online." },
      { h: "Protect the troughs", b: "When the dip hits, lie down, walk, eat protein, do anything except fight it with caffeine and shame. That always crashes you harder later." },
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
          <p className="lede">You can skip the productivity gurus. These are the six small frameworks our community keeps quietly recommending to each other when life gets loud. We've given each one its own page so you can really sit with it. Pick the one that sounds gentlest, and try it for a week.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-40-tools.jpg')`}}></div>
      </div>
    </div>
  );
}

function PageFramework({fw}) {
  return (
    <div>
      <div className="fw-hero">
        <div>
          <span className="num-big">{fw.num}</span>
          <h2 style={{marginTop:8}}>{fw.name}</h2>
          <div className="meta" style={{marginTop:16}}>
            <span className="chip">{fw.when}</span>
          </div>
          <p className="lede">{fw.lede}</p>
        </div>
        <div className="photo" style={{backgroundImage:`url('${fw.photo}')`}}></div>
      </div>
      <div className="steps-list">
        {fw.steps.map((s, i) => (
          <div key={i} className="step-card">
            <span className="n">{i+1}</span>
            <h4>{s.h}</h4>
            <p>{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// =================== CHAPTER 5: PODCASTS ===================

const PODCASTS = [
  { name: "ADHD Chatter", host: "Alex Partridge", desc: "Long-form interviews from a UK host who was diagnosed at 35. Funny, honest, and deeply useful.", cv: { initials: "AC", c1: "#FF5A36", c2: "#1A1814" }, url: "https://open.spotify.com/show/6F0Yb1xPTKzZSb4mTcZUkj", country: "UK" },
  { name: "ADHD for Smart Ass Women", host: "Tracy Otsuka", desc: "Specifically for late-diagnosed women. Reframes ADHD as a strength.", cv: { initials: "SA", c1: "#E8B948", c2: "#6B4D7A" }, url: "https://open.spotify.com/show/5UmIQAv0KZ4yhDDeYW1ULd", country: "US" },
  { name: "I Have ADHD Podcast", host: "Kristen Carder", desc: "Non-judgmental, weekly. Strong on emotional regulation and shame.", cv: { initials: "IH", c1: "#8AB4C8", c2: "#1A1814" }, url: "https://open.spotify.com/show/3xQU9pPePvA6tdQwGAv6JS", country: "US" },
  { name: "The ADHD Adults Podcast", host: "James Brown & co", desc: "UK-based. Three ADHD adults talking research, lived experience, and tangents.", cv: { initials: "AA", c1: "#9FB89A", c2: "#1A1814" }, url: "https://open.spotify.com/show/0wxHB6QvU2YbnNHaJiQqLJ", country: "UK" },
  { name: "Hyperfocus", host: "Rae Jacobson", desc: "Short-form, magazine style. Single ADHD topics in 20 minutes.", cv: { initials: "HF", c1: "#6B4D7A", c2: "#FF5A36" }, url: "https://open.spotify.com/show/3wIvtHHoyCKwOWMQpYJWVx", country: "US" },
  { name: "ADHD Experts", host: "ADDitude Magazine", desc: "Clinicians and researchers, no fluff. Best for the science-curious.", cv: { initials: "AE", c1: "#1A1814", c2: "#E8B948" }, url: "https://open.spotify.com/show/0bAOH2g0nVeGqVuP2KNi33", country: "US" },
  { name: "Distraction", host: "Dr Edward Hallowell", desc: "From the Dr who literally wrote the book on ADHD. Warm, generous, expert.", cv: { initials: "DT", c1: "#FF5A36", c2: "#8AB4C8" }, url: "https://open.spotify.com/show/4LfTJTLuJdljbsFiUm0H0v", country: "US" },
  { name: "Translating ADHD", host: "Shelly & Cam", desc: "Two coaches. Practical, gentle, focuses on the 'now what' after diagnosis.", cv: { initials: "TA", c1: "#1DB954", c2: "#1A1814" }, url: "https://open.spotify.com/show/1QQxJqxxScrxnIyhc4lOzh", country: "US" },
  { name: "ADHD Aha!", host: "Laura Key (Understood)", desc: "Quick listens. People share the moment they realised they had ADHD.", cv: { initials: "AH", c1: "#FFD23F", c2: "#FF5A36" }, url: "https://open.spotify.com/show/5JD6yo08OMfFLPzZNxLXZA", country: "US" },
  { name: "Squirrels of a Feather", host: "Cathy Rashidian", desc: "Late-diagnosed women. Cosy, warm, like a chat with your most chaotic friend.", cv: { initials: "SF", c1: "#9FB89A", c2: "#6B4D7A" }, url: "https://open.spotify.com/show/4tHANI0Q6VGjOGbjQ26HVU", country: "UK" },
  { name: "The ADHD Women's Wellbeing Podcast", host: "Kate Moryoussef", desc: "UK podcast. Hormones, perimenopause, ADHD. Hugely needed niche.", cv: { initials: "WW", c1: "#E8B948", c2: "#1A1814" }, url: "https://open.spotify.com/show/4ESjJBVXjOQF1cf6jztU1c", country: "UK" },
  { name: "Climbing the Walls", host: "Danielle Elliot", desc: "Investigation into the late-diagnosed-women boom. Journalistic, gripping.", cv: { initials: "CW", c1: "#8AB4C8", c2: "#FF5A36" }, url: "https://open.spotify.com/show/2ngL40oHe3cP5xsvJ6HVbX", country: "US" },
];

function PagePodcastsIntro() {
  return (
    <div>
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--spotify)", borderColor:"var(--spotify)", color:"#000"}}>Chapter 5 · Podcasts</span>
          <h2 style={{marginTop:16}}>Twelve podcasts worth<br/>your <span className="accent">commute</span>.</h2>
          <p className="lede">Twelve we keep coming back to, gathered from listeners and creators across the UK and the US. No affiliates, no sponsors, just the ones that have helped people in our community feel a bit less alone on the commute. Tap any cover to open it in Spotify right now.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PagePodcasts({slice}) {
  const items = PODCASTS.slice(...slice);
  return (
    <div>
      <span className="chip">Chapter 5 · Picks {slice[0]+1}-{slice[1]}</span>
      <h2 style={{marginTop:16, marginBottom: 10}}>Curated on Spotify.</h2>
      <p style={{maxWidth:640, fontSize:14, color:"var(--muted)", marginBottom:24}}>Each cover opens the show in Spotify. Real cover artwork sits inside Spotify itself, the swatches below are our visual shorthand so this page works even when an image host is blocked.</p>
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
                <span>Open in Spotify →</span>
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
      <div className="ph">
        <div>
          <span className="chip" style={{background:"var(--plum)", borderColor:"var(--plum)", color:"#fff"}}>Chapter 6 · Videos</span>
          <h2 style={{marginTop:16}}>Nine short videos<br/>worth <span className="accent">watching</span>.</h2>
          <p className="lede">A small library of clips we send people when words on a page aren't quite landing. There are explainers from clinicians, honest lived-experience stories, and a few practical how-tos. None of them are longer than sixteen minutes, so they're easy to fit between meetings or on the bus.</p>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80")}')`}}></div>
      </div>
    </div>
  );
}

function PageVideos() {
  const featured = "JiwZQNYlGQI"; // Jessica McCabe — Failing at Normal (TEDxBratislava)
  return (
    <div>
      <span className="chip">Chapter 6 · Library</span>
      <h2 style={{marginTop:16, marginBottom:10}}>The video library.</h2>
      <p style={{maxWidth:720, color:"var(--ink-2)", fontSize:16, lineHeight:1.55, marginBottom:24}}>One featured talk is embedded below, the rest open in YouTube where each title is searched for you. We avoid hot-linking specific video IDs so this page stays working even when creators rename or unlist a video.</p>

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
      <p style={{fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:24}}>Featured · Jessica McCabe · TEDxBratislava · 12 min</p>

      <h3 style={{fontSize:22, marginTop:8, marginBottom:14}}>More to watch</h3>
      <div className="video-grid">
        {VIDEOS.map((v, i) => (
          <a key={i} href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v.q)}`} target="_blank" rel="noopener" className={`video-card ${v.size || ""}`} style={{textDecoration:"none", color:"inherit", background:"linear-gradient(135deg, #1a1814 0%, #2a2620 100%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:18, minHeight:180}}>
            <span className="duration" style={{position:"absolute", top:14, right:14, background:"rgba(0,0,0,0.55)", color:"#fff", padding:"4px 10px", borderRadius:999, fontSize:11, fontFamily:"var(--mono)", letterSpacing:"0.05em"}}>{v.dur}</span>
            <span className="play-icon" aria-hidden="true" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:54, height:54, borderRadius:"50%", background:"rgba(255,255,255,0.92)", color:"#1a1814", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:600}}>▶</span>
            <div className="video-meta" style={{position:"relative", zIndex:1}}>
              <span className="cat" style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)"}}>{v.cat}</span>
              <h4 style={{marginTop:6, color:"#f4efe6", fontSize:18, lineHeight:1.3}}>{v.title}</h4>
              <span style={{display:"inline-block", marginTop:8, fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color:"#FF8060"}}>Open on YouTube →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

window.PB_PAGES_4_6 = [
  { ch: "tools", title: "Chapter intro", render: () => <PageToolsIntro /> },
  ...FRAMEWORKS.map(fw => ({ ch: "tools", title: fw.name, render: () => <PageFramework fw={fw} /> })),

  { ch: "podcasts", title: "Chapter intro", render: () => <PagePodcastsIntro /> },
  { ch: "podcasts", title: "Picks 1-6", render: () => <PagePodcasts slice={[0,6]} /> },
  { ch: "podcasts", title: "Picks 7-12", render: () => <PagePodcasts slice={[6,12]} /> },

  { ch: "videos", title: "Chapter intro", render: () => <PageVideosIntro /> },
  { ch: "videos", title: "Video library", render: () => <PageVideos /> },
];
