// Untangle Playbook — Content-6: dedicated Books for the Child page

const CHILD_BOOKS = [
  {
    age: "Age 5-8",
    title: "A Boy Called Bat",
    author: "Elana K. Arnold",
    body: "A series about a neurodivergent boy who adopts an orphaned baby skunk. The author never uses the word ADHD or autism, which is the point, Bat just is who he is. Beloved by teachers and SENCOs because it shows a child whose differences are part of how he sees the world, not a problem to be solved.",
    pair: "Pairs well with: family bedtime reading, ages 5 to 9."
  },
  {
    age: "Age 5-9",
    title: "My Brain is Magic",
    author: "Prasha Sooful & Lou Baker Smith",
    body: "A UK-published picture book that celebrates sensory and neurodivergent brains with bright illustrations. Children get to point at the page and say \"that one's me\", which is often the first time they've put words to how they feel. Particularly good for children of colour who rarely see themselves in ADHD books.",
    pair: "Pairs well with: bedtime, reading-corner at school, gift for newly diagnosed children."
  },
  {
    age: "Age 6-9",
    title: "Frankie's World",
    author: "Aoife Dooley",
    body: "A UK graphic novel by an Irish autistic author about a girl who feels like she's from another planet. Marketed as autism but the executive function struggles, friendship anxieties and sensory overwhelm will be familiar to ADHD children too. Funny, warm, never sentimental.",
    pair: "Pairs well with: reluctant readers, fans of Dog Man or Tom Gates."
  },
  {
    age: "Age 8-12",
    title: "Percy Jackson and the Olympians",
    author: "Rick Riordan",
    body: "The book series that has done more for ADHD self-image than any government campaign. Percy has ADHD and dyslexia, and in the story they turn out to be signs that he is a demigod. Children come out of this series believing their brain is interesting, not broken.",
    pair: "Pairs well with: any child who's been told they're \"not trying hard enough\"."
  },
  {
    age: "Age 9-13",
    title: "Fish in a Tree",
    author: "Lynda Mullaly Hunt",
    body: "Ally has spent years hiding the fact that letters move on the page. Although the book is about dyslexia, many children with ADHD who have felt stupid at school will recognise themselves. A teacher finally sees her. It is, a book about being witnessed.",
    pair: "Pairs well with: a child saying \"I'm just thick\". Read together if you can."
  },
  {
    age: "Age 9-13",
    title: "Can You See Me?",
    author: "Libby Scott & Rebecca Westcott",
    body: "Co-written by an autistic teenager. Tally is starting secondary school while masking her autism. Again, autism-led but the overlap with ADHD masking (especially in girls) is large: the social exhaustion, the meltdowns nobody else sees, the desperate effort to look normal.",
    pair: "Pairs well with: girls heading into Year 7. Often borrowed by parents after the child finishes it."
  },
  {
    age: "Age 10-14",
    title: "The Goldfish Boy",
    author: "Lisa Thompson",
    body: "Matthew has OCD, but the way Lisa Thompson writes neurodivergent inner monologue is especially well done. ADHD readers recognise the looping thoughts and the not-being-able-to-stop. A good way to start talking about what a brain that won't quiet down feels like.",
    pair: "Pairs well with: an older sibling, a school reading group."
  },
  {
    age: "YA / Teen",
    title: "The Reason I Jump",
    author: "Naoki Higashida",
    body: "Written by a non-speaking autistic Japanese boy at thirteen, this is one of the most affecting books ever written about a brain that works differently. It is not about ADHD, but one chapter speaks directly to teenagers who act on impulse and get called bad for it. Give it to your teen. Read it yourself.",
    pair: "Pairs well with: parents who want to understand from the inside."
  },
  {
    age: "YA / Teen",
    title: "You Are a Champion",
    author: "Marcus Rashford with Carl Anka",
    body: "Not ADHD-specific, but written by a UK national hero who openly talks about being different and being told he wouldn't make it. The tone is everything, warm, practical, big-brother energy. Teenage boys especially read this when they won't read anything else, and the messages about self-worth stay with them.",
    pair: "Pairs well with: boys 11+ who roll their eyes at \"feelings books\"."
  },
  {
    age: "YA / Teen",
    title: "A Kind of Spark",
    author: "Elle McNicoll",
    body: "Scottish, neurodivergent-authored, Carnegie-nominated. Addie is an autistic eleven-year-old fighting to put up a memorial to the witches accused in her village. It is fierce, political, and gives neurodivergent teen girls a heroine who refuses to be made smaller. ADHDers love it too.",
    pair: "Pairs well with: girls 10+ who are starting to mask. Now a CBBC series."
  },
  {
    age: "YA / Teen",
    title: "ADHD: An A-to-Z",
    author: "Leanne Maskell",
    body: "UK author, ADHD coach. A clear, jargon-free reference book a teenager can dip in and out of. Less story, more \"oh, that explains that\". Good for teens who have just been diagnosed and want answers without sitting through another adult lecture.",
    pair: "Pairs well with: a freshly diagnosed teen, or as a parent's read-along."
  },
  {
    age: "Parents",
    title: "The Explosive Child",
    author: "Dr Ross Greene",
    body: "If reading the list above made you think \"my child won't sit still for any of this\", read this first. Ross Greene's collaborative problem-solving approach has changed more ADHD households than any single book we know. He starts from the principle that children do well if they can, and helps you work out where the can't is. UK clinicians regularly recommend it.",
    pair: "Pairs well with: a parent at the end of their rope. Read with a highlighter."
  }
];

function PageChildBooks() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sage)", borderColor:"var(--sage)", color:"var(--ink)"}}>Chapter 2 · For the child</span>
          <h1 style={{marginTop:16}}>Books to give your child.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">A good book can help a child feel understood, with a main character who thinks and struggles the way they do.</p>
          <p style={{marginBottom:32, color:"var(--ink-2)", fontSize:16, lineHeight:1.6}}>You don't need to wait for a diagnosis to hand any of these over. Leave one on their bed, lend it from the library, read it together at night. We've grouped by age and added a short note about why each one matters, plus who it tends to land with. None of these are sponsored, and the list will keep growing.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/child-books-dinos.webp')`}}></div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:18}}>
        {CHILD_BOOKS.map((b, i) => (
          <article key={i} className="card" style={{display:"flex", flexDirection:"column", gap:10}}>
            <span className="eyebrow muted">{b.age}</span>
            <h4 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:22, lineHeight:1.2}}>{b.title}</h4>
            <p style={{fontSize:13, color:"var(--muted)", fontStyle:"italic", margin:0}}>{b.author}</p>
            <p style={{fontSize:14.5, color:"var(--ink-2)", lineHeight:1.6, marginTop:6}}>{b.body}</p>
            <p style={{fontSize:13, color:"var(--muted)", marginTop:"auto", paddingTop:8, borderTop:"1px dashed var(--line)"}}>{b.pair}</p>
          </article>
        ))}
      </div>
      <div className="disclaim" style={{marginTop:32}}>
        <strong>Where to buy them.</strong> All of these are available on Bookshop.org UK (which supports independent bookshops), Waterstones, your local library (request via the catalogue if not stocked), or as audiobooks on Spotify / Libby. Audiobooks often suit ADHD readers, and listening counts as reading.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_CHILD_BOOKS = [
  { ch: "parents", title: "Books for the child", render: () => <PageChildBooks /> },
];
