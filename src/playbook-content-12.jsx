// Untangle Playbook — Content-12: Loneliness + Sunday-night dread

// =================== GAP 12: LONELINESS ===================

function PageLoneliness() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--sky)", borderColor:"var(--sky)", color:"var(--ink)"}}>Chapter 1 · What it feels like</span>
          <h2 style={{marginTop:16}}>When ADHD can feel lonely.</h2>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">There is a kind of loneliness that comes with ADHD that other forms of loneliness don't quite touch. It is the feeling, sitting in a room full of friends, that no one in your life has the same operating system as you, and that the small daily friction of translating yourself into a neurotypical world has worn away your capacity for closeness.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>The three loops that make it worse</h3>
          <PBSlider items={[
            {h:"The maintenance loop.", p:"Friendships need maintenance, and maintenance is exactly the kind of low-novelty, recurring administrative task ADHD brains are worst at. You don't reply to the message. The friend goes quiet. You feel guilty, so you avoid the thread harder. Six months pass. The friendship doesn't end, it just atrophies, and now there are five of them like that and you have no idea where to start."},
            {h:"The masking loop.", p:"You have spent so long performing the version of you that gets along, that your closest friends know that version, not you. When you stop masking, you can feel lonely in a new way. Your friends know the masked version of you, and you may worry they would not stay if they knew the real one. The mask works, and the mask costs."},
            {h:"The RSD loop.", p:"Rejection-sensitive dysphoria, covered earlier in this playbook, makes the small ambiguities of friendship feel like rejections. A delayed reply means they hate you. A cancelled plan means they were always going to leave. You withdraw to protect yourself from a rejection that wasn't happening, and now the friendship really does drift, because you stopped showing up first."},
            {h:"Tell two people you have ADHD.", p:"Pick the two people in your life whose continued presence matters most. Tell them. Not a big production, just \"I got diagnosed, here is what tends to happen, please don't read my silence as not caring\". What helps ADHD loneliness most is one or two close relationships being explicitly translated."},
            {h:"Find one neurodivergent friend.", p:"One specific person whose brain works like yours. Not having to explain yourself is a big relief, and the friendship can be easier to keep up. r/ADHDUK meet-ups, ADHD Babes events, AuDHD spaces."},
            {h:"Build a \"low-effort\" friendship category.", p:"Some friendships need monthly check-ins, some need a meme exchanged once a quarter, some need a yearly long walk. Different friendships have different maintenance schedules. Categorise yours and stop applying the high-maintenance template to all of them. You have more friendships than you think."},
            {h:"Use the \"I owe you a reply\" amnesty.", p:"Once a year, pick three people you owe a reply and send a short message. Say sorry for the silence and ask if you can pick up where you left off. Often, the shame feels bigger than the damage. A short message can be a meaningful first step."},
          ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-23-loneliness.webp')`}}></div>
      </div>


      <div className="disclaim">
        For some people, loneliness eases when they find relationships, communities and systems that fit them better. For many people, it gets easier.
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
          <p className="lede">It is 9pm on Sunday. You have not done the laundry. You have not replied to the work email from Friday. The thought of Monday is sitting on your chest like a small heavy animal, and the closer it gets to bedtime the more you stay up doing nothing, because going to sleep means Monday arrives faster. By 1am you are exhausted and dreading the morning and ashamed of yourself, and the week has not even started. The staying-up part has a name: revenge bedtime procrastination.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>What is happening</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Three different ADHD patterns collide on Sunday night. First, the week ahead is a giant undifferentiated mass of obligation, and your brain cannot break it into manageable pieces from a distance. Second, your weekend has run on novelty and pleasure, and the prospect of returning to low-novelty grind feels disproportionately heavy. Third, you are stealing back time from the day, refusing to go to bed because bedtime is the boundary between the freedom of the weekend and the constraint of Monday, and your nervous system would rather be exhausted than concede the territory. None of these are character flaws. All of them are predictable, and all of them respond to the same intervention.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('${"assets/sunday-bag.webp"}')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The Sunday-evening reset</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Here is a short reset you can try before Monday. Take the parts that help and leave the rest. It takes about 25 minutes. Try it earlier in the evening, before the dread builds. If that time does not work for you, choose the earliest time that usually does.</p>

      <PBSlider items={[
        {h:"Empty the inbox of the brain.", p:"Set a timer for five minutes. Write down, on paper or in a note, every single thing scratching at your brain about the week ahead. Don't sort it, don't prioritise it, just get it out of you and onto something external. Many people feel a bit better straight away."},
        {h:"Find the three things.", p:"Read the list. Pick the three things that, if you did them on Monday and nothing else, would make the week okay. Star up to three. The rest can wait. If three feels like too much, choose one."},
        {h:"Set up Monday morning physically.", p:"Put your clothes out, pack your bag, get the coffee ready and leave your phone charger by the bed. This removes the small hurdles that make Monday morning feel hard."},
        {h:"Plan a Monday-evening reward.", p:"Choose something small you know you enjoy, such as your usual takeaway, a new episode or a walk somewhere you like. Having something to look forward to on Monday evening makes the start of the week feel more manageable."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>About the staying-up-late part</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Revenge bedtime procrastination is its own specific thing, and many people with ADHD recognise it. For many people, it is a way of holding on to the only part of the day that feels like their own. Knowing this won't fix it on its own, but it helps you stop blaming yourself, and that makes other changes easier.</p>

      <PBSlider items={[
        {h:"Give yourself \"yours\" time earlier.", p:"If you protect some free time earlier in the evening, you may feel less need to take it back late at night. Build it into the day deliberately, not as a reward after everything else, but as a fixed block."},
        {h:"Move the screen out of the bedroom.", p:"This is one change some people find useful. If screens keep you awake, try charging your phone away from the bed for a few nights and notice whether it helps. Having to get up to keep scrolling can be enough to help bedtime happen."},
        {h:"Use a \"wind-down\" alarm, not a bedtime alarm.", p:"Set an alarm 45 minutes before you want to be asleep, labelled \"start winding down\". Bedtime alarms get ignored. Wind-down alarms work because they don't demand the thing you are resisting, they demand the thing you are willing to do, which is to start moving towards bed."},
        {h:"Stop reading \"one more thing\" as failure.", p:"If you are going to stay up an extra 30 minutes anyway, do it in bed with low lights rather than on the sofa under bright ones. Lower the floor of \"bad bedtime\" and you will hit better bedtime more often."},
      ]} />

      <div className="disclaim">
        <strong>One last note.</strong> For some people, effective treatment can make the week feel more manageable. If Sunday dread is severe or persistent, mention it to your clinician or prescriber. It may not go away completely, but it often becomes much milder. If yours is severe and persistent and not budging with any of this, mention it to your prescriber, it is information they can use.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_AFTER_SELF_5 = [
  { ch: "self", title: "The loneliness of an ADHD adult", render: () => <PageLoneliness /> },
  { ch: "self", title: "Sunday-night dread", render: () => <PageSunday /> },
];
