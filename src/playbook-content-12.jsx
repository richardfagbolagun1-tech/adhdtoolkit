// Untangle Playbook — Content-12: Loneliness + Sunday-night dread

// =================== GAP 12: LONELINESS ===================

function PageLoneliness() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · What it feels like</span>
          <h2 style={{marginTop:16}}>The particular loneliness of an ADHD adult.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">There is a kind of loneliness that comes with ADHD that other forms of loneliness don't quite touch. It is not the absence of people. It is the feeling, sitting in a room full of friends, that no one in your life has the same operating system as you, and that the small daily friction of translating yourself into a neurotypical world has worn away your capacity for closeness. This is real, it is common, and it is not your fault.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The three loops that make it worse</h3>
          <PBSlider items={[
            {h:"The maintenance loop.", p:"Friendships need maintenance, and maintenance is exactly the kind of low-novelty, recurring administrative task ADHD brains are worst at. You don't reply to the message. The friend goes quiet. You feel guilty, so you avoid the thread harder. Six months pass. The friendship doesn't end, it just quietly atrophies, and now there are five of them like that and you have no idea where to start."},
            {h:"The masking loop.", p:"You have spent so long performing the version of you that gets along, that your closest friends know that version, not you. When the mask comes off you are alone in a different way, because the people who know you don't know the unmasked you, and the unmasked you doesn't trust they would still be there if they did. The mask works, and the mask costs."},
            {h:"The RSD loop.", p:"Rejection-sensitive dysphoria, covered earlier in this playbook, makes the small ambiguities of friendship feel like rejections. A delayed reply means they hate you. A cancelled plan means they were always going to leave. You withdraw to protect yourself from a rejection that wasn't happening, and now the friendship really does drift, because you stopped showing up first."},
            {h:"Tell two people you have ADHD.", p:"Pick the two people in your life whose continued presence matters most. Tell them. Not a big production, just \"I got diagnosed, here is what tends to happen, please don't read my silence as not caring\". The single biggest reduction in ADHD loneliness comes from one or two close relationships being explicitly translated."},
            {h:"Find one neurodivergent friend.", p:"Not a community, not a Discord, one specific person whose brain works like yours. The relief of not having to translate is enormous, and the friendship is usually low-maintenance in exactly the ways that suit you both. r/ADHDUK meet-ups, ADHD Babes events, AuDHD spaces."},
            {h:"Build a \"low-effort\" friendship category.", p:"Some friendships need monthly check-ins, some need a meme exchanged once a quarter, some need a yearly long walk. Different friendships have different maintenance schedules and that is fine. Categorise yours and stop applying the high-maintenance template to all of them. You have more friendships than you think."},
            {h:"Use the \"I owe you a reply\" amnesty.", p:"Once a year, send three of your most-overdue replies a message that just says \"I owe you a proper reply and I have been carrying the guilt for months, I am sorry, can we just pretend the last six months didn't happen and pick up from here\". Almost everyone says yes. The shame was bigger than the friendship damage. It usually is."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-23-loneliness.jpg')`}}></div>
      </div>


      <div className="disclaim">
        <strong>And the gentle truth.</strong> Many ADHD adults find their twenties and early thirties are the loneliest part of their life, and then it gets noticeably better, because the friendships that survive the chaotic years tend to be the durable ones, and because you eventually find your neurodivergent people. The loneliness is real, and it is not permanent. It is the cost of having spent years in a world that wasn't built for your brain, and the cost goes down once you stop trying to live as if you don't have the brain you have.
      </div>
    </div>
  );
}

// =================== GAP 13: SUNDAY-NIGHT DREAD ===================

function PageSunday() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · What it feels like</span>
          <h2 style={{marginTop:16}}>Sunday-night dread, and why your week keeps starting late.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">It is 9pm on Sunday. You have not done the laundry. You have not replied to the work email from Friday. The thought of Monday is sitting on your chest like a small heavy animal, and the closer it gets to bedtime the more you stay up doing nothing, because going to sleep means Monday arrives faster. By 1am you are exhausted and dreading the morning and ashamed of yourself, and the week has not even started. This is one of the most universally-reported ADHD experiences and it has its own name in the community: revenge bedtime procrastination, on top of Sunday scaries, on top of executive dysfunction. It also has a way out.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What is actually happening</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Three different ADHD patterns collide on Sunday night. First, the week ahead is a giant undifferentiated mass of obligation, and your brain cannot break it into manageable pieces from a distance. Second, your weekend has run on novelty and pleasure, and the prospect of returning to low-novelty grind feels disproportionately heavy. Third, you are stealing back time from the day, refusing to go to bed because bedtime is the boundary between the freedom of the weekend and the constraint of Monday, and your nervous system would rather be exhausted than concede the territory. None of these are character flaws. All of them are predictable, and all of them respond to the same intervention.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${R("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80")}')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The Sunday-evening reset</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Borrowed from a thousand ADHD coaches and refined down to the version that actually works. It takes 25 minutes. Do it between 6pm and 8pm. Not later, because by 9pm the dread has already won.</p>

      <PBSlider items={[
        {h:"Empty the inbox of the brain.", p:"Set a timer for five minutes. Write down, on paper or in a note, every single thing scratching at your brain about the week ahead. Don't sort it, don't prioritise it, just get it out of you and onto something external. The relief is immediate and surprisingly large."},
        {h:"Find the three things.", p:"Read the list. Pick the three things that, if you did them on Monday and nothing else, would make the week okay. Star them. Everything else can drift, and that is fine. ADHD weeks run on three priorities, not seventeen, and pretending otherwise is the source of half the dread."},
        {h:"Set up Monday morning physically.", p:"Clothes out. Bag packed. Coffee ready. Phone charger by the bed. Tomorrow-you is a different person than tonight-you and tonight-you can give them an enormous gift by removing the small frictions that make Monday morning feel impossible."},
        {h:"Plan a Monday-evening reward.", p:"Something small and known and good. The same takeaway you always order. The new episode. A walk somewhere specific. Having a concrete thing to walk towards on Monday evening shrinks the week from a giant mass into \"Monday until 6pm, then this thing I like\"."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>About the staying-up-late part</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Revenge bedtime procrastination is its own specific thing, and it is one of the most common ADHD patterns. You are not failing to go to bed. You are refusing to give up the only part of the day that felt like yours. Knowing this does not fix it on its own, but it stops you treating it as a moral failure, which is the first thing that has to go before anything else can change.</p>

      <PBSlider items={[
        {h:"Give yourself \"yours\" time earlier.", p:"If you have 90 minutes of guaranteed, no-obligation, do-what-you-want time at 7pm, the urge to steal it back at 11pm goes down. Build it into the day deliberately, not as a reward after everything else, but as a fixed block."},
        {h:"Move the screen out of the bedroom.", p:"The most low-effort intervention with the highest return. Phone, tablet and laptop charge in another room from 10pm. The friction of having to walk down the hall to keep scrolling is exactly enough, for most people, to let bedtime actually happen."},
        {h:"Use a \"wind-down\" alarm, not a bedtime alarm.", p:"Set an alarm 45 minutes before you want to be asleep, labelled \"start winding down\". Bedtime alarms get ignored. Wind-down alarms work because they don't demand the thing you are resisting, they demand the thing you are willing to do, which is to start moving towards bed."},
        {h:"Stop reading \"one more thing\" as failure.", p:"If you are going to stay up an extra 30 minutes anyway, doing it from bed with the lights low is meaningfully better than doing it from the sofa with the overhead lights on. Lower the floor of \"bad bedtime\" and you will hit better bedtime more often."},
      ]} />

      <div className="disclaim">
        <strong>One last note.</strong> Sunday dread tends to ease significantly once you are medicated, if you choose to medicate, because the dread is partly a forecast of how hard the executive function will be on Monday, and medication softens that forecast. It does not vanish, but it goes from "small heavy animal on your chest" to "mildly anxious half-hour". If yours is severe and persistent and not budging with any of this, mention it to your prescriber, it is information they can use.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_5 = [
  { ch: "self", title: "The loneliness of an ADHD adult", render: () => <PageLoneliness /> },
  { ch: "self", title: "Sunday-night dread", render: () => <PageSunday /> },
];
