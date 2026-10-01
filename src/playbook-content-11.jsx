// Untangle Playbook — Content-11: The unfinished pile + Decision-fatigue dinner

// =================== GAP 10: THE UNFINISHED PILE ===================

function PageUnfinished() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Chapter 4 · Tools</span>
          <h1 style={{marginTop:16}}>The pile of unfinished things.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">Many adults with ADHD have one. The half-painted room, the course you stopped at module four, the friendship you haven't replied to since March, the book on chapter seven, the box from the move. It comes from a brain that finds starting easier than finishing, and there are ways to clear it.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>Why the pile exists</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>ADHD brains run on novelty. Starting something is the highest-novelty moment a task ever has. By the time you are 80 percent of the way through, the novelty is gone, the dopamine is gone, and the remaining 20 percent feels like running through wet concrete. This may be why many adults with ADHD have shelves of nearly finished projects. The work is mostly done. The brain has just moved on, and the body cannot drag it back.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-49-pile.webp')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>A triage, not a guilt trip</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Pull every unfinished thing into your head, or onto a single sheet of paper. Then put each one into exactly one of these four buckets. Do not skip the triage and try to finish them all. The triage IS the work.</p>

      <PBSlider items={[
        {h:"10 minutes from done.", p:"The email that needs a one-line reply. The form that needs signing. The book you have fifteen pages left of. Set a 25-minute timer, do them all in one sweep, and move on. Many people are surprised how many things end up here."},
        {h:"Worth finishing, but not this month.", p:"This could be a painting, a qualification or a project you still care about. Write the next step on a sticky note, put the note on the item and put it away on purpose. Choosing to pause it means you can stop worrying about it."},
        {h:"Done in spirit.", p:"You learned what you needed from it. The course taught you the bit that mattered by module four. The half-read book gave you the idea you needed. The relationship taught you what it needed to teach. You can mark it complete and move on. Finishing is not the only valid endpoint."},
        {h:"Let go.", p:"The hobby you bought £400 of equipment for and never touched. The course you paid for and won't return to. Sell, gift, or bin the artefacts. The sunk cost is real and the ongoing cost of keeping it visible, taking up space, generating guilt, is bigger. Letting go is allowed, and it gets easier with practice."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>The finishing techniques that work</h3>

      <PBSlider items={[
        {h:"Body-double the last 20 percent.", p:"A low-cost technique that many people find helpful for finishing tasks. A friend, a Focusmate session, or even a video call with someone silently doing their own work. The presence of another person artificially creates the novelty your brain has lost, and the last 20 percent suddenly becomes possible."},
        {h:"Reframe finishing as starting.", p:"Don't say \"I need to finish the report\". Say \"I am starting the closing paragraph\". Your brain will engage with starting in a way it cannot engage with finishing, because starting is where the novelty lives. The same task with the same words, framed differently, becomes accessible."},
        {h:"Make finishing the more interesting thing.", p:"If finishing is boring, attach a tiny reward to it, a coffee, an episode, a walk. If finishing is daunting, attach a smaller commitment to it, \"I will do 15 minutes\". Both work by putting novelty back into the task."},
        {h:"Use the \"next physical action\" rule.", p:"For every unfinished thing in bucket 2, write the next single physical action on it. Not \"finish report\", which the brain cannot execute. \"Open the document and reread the last paragraph\", which the brain can. Often, what stops you finishing is not knowing the next step. Naming it can make it easier to start again."},
      ]} />

      <div className="disclaim">
        Having a pile does not mean you are lazy. The aim is to sort it, not to feel bad about it.
      </div>
    </div>
  );
}

// =================== GAP 11: DECISION-FATIGUE DINNER ===================

function PageDinner() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip" style={{background:"var(--peach)", borderColor:"var(--peach)", color:"var(--ink)"}}>Chapter 4 · Tools</span>
          <h1 style={{marginTop:16}}>The 6pm decision-fatigue dinner problem.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
          <p className="lede">It is six in the evening. You are hungry. You have spent all day making decisions, and the part of your brain that decides things has gone offline. You stand in the kitchen, open the fridge, close the fridge, open it again. Twenty minutes later you order a takeaway you cannot afford and feel guilty about for the rest of the evening. This is decision fatigue, and you can plan around it.</p>
          <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"32px 0 16px"}}>Why dinner is uniquely hard</h3>
          <p style={{fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>Dinner brings together several things ADHD can make harder: planning, deciding and starting. It requires planning ahead, when you are bad at planning ahead. It requires a sequence of small actions, when sequences are exactly what executive dysfunction breaks. It requires deciding, when you are out of decisions. It happens at the exact moment your medication is wearing off, if you take stimulants. And it has the added load of being needed roughly seven times a week, every week, forever. No wonder it falls apart.</p>
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/page-50-kitchen.webp')`}}></div>
      </div>


      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"40px 0 16px"}}>The solution is not a meal plan</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>Many people with ADHD have tried meal planning. It works for two weeks, you don't follow it for one day, the whole system collapses, you feel like a failure, you go back to standing in front of the fridge. The problem with meal plans is that they require future you to be the same person as past you. They are not built for ADHD. These are.</p>

      <PBSlider items={[
        {h:"Reduce the decision to a coin flip.", p:"Write down five dinners you like and will eat. Five, not twenty-five. Pin the list to the fridge. At 6pm, you are not choosing what to eat, you are choosing one of five known options. This is a fundamentally different cognitive operation and your tired brain can do it."},
        {h:"Embrace the \"same dinner\" thing.", p:"Many ADHD adults eat the same two or three dinners for weeks at a time, then switch, then settle into a new set of two or three. This is a totally valid way to eat. The shame around it is borrowed from food media, not from nutritionists. Pick three dinners, rotate them, restock the ingredients on the same day every week, done."},
        {h:"Make decisions when you are not hungry.", p:"Sunday afternoon you, with a coffee, is a completely different person than 6pm Wednesday you. Sunday you can decide what Wednesday you eats. Write the four or five things on a piece of paper. Buy exactly the ingredients for them. Wednesday you doesn't have to decide anything."},
        {h:"Have a \"no-decision dinner\" on standby.", p:"Frozen pizza, a tin of soup, beans on toast, a meal-deal salad. Something that requires zero decisions and zero cooking. When you have one in the freezer or the cupboard, the spiral of \"I have nothing in\" gets shorter, because you always have something in. The no-decision dinner is not failure food. It is insurance."},
        {h:"Use the supermarket meal deal.", p:"\u00a33.60 for a sandwich, a snack and a drink is cheaper than the \u00a318 takeaway you order when standing in the kitchen has defeated you. Twice a week of meal deals on the days you know are decision-fatigue heavy is not giving up. It is harm reduction."},
        {h:"Meal kits can help.", p:"Meal kit boxes are expensive per meal compared to cooking from scratch. They are also dramatically cheaper than takeaways, and the cooking-from-scratch you are comparing them to is not happening. For decision-fatigue dinners, they remove the planning, the shopping, and most of the deciding. For many ADHD adults they are the most useful expensive thing they have bought."},
      ]} />

      <h3 style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24, margin:"8px 0 16px"}}>The "I have nothing in" loop</h3>
      <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>The most expensive kitchen pattern is the loop: you have nothing in, so you order takeaway, so you don't restock, so tomorrow you have nothing in. To break it, the only rule that matters is "buy the same ten things every week regardless of plans". Pasta, rice, frozen veg, tinned tomatoes, eggs, cheese, bread, beans, frozen chicken or a vegetarian protein, an onion. With those ten things you can make about thirty dinners. Without them you are stuck in the loop. Make the list, repeat it weekly via your supermarket's "buy again" feature, do not deviate.</p>

      <div className="disclaim">
        You don't need to cook from scratch every night. Eating something, on time, counts.
      </div>
    </div>
  );
}

window.PB_PAGES_EXTRA_TOOLS_2 = [
  { ch: "tools", title: "The unfinished pile", render: () => <PageUnfinished /> },
  { ch: "tools", title: "The 6pm dinner problem", render: () => <PageDinner /> },
];
