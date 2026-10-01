// Untangle Playbook — Content-15: Pregnancy, Diagnosed over 60, Fostering and kinship care, Housing

function PBHelpList({ items }) {
  return (
    <div className="help-list">
      {items.map((x, i) => (
        <div key={i} className="card help-list-item">
          <h4>{x.name}</h4>
          {x.phone && <p className="help-list-phone">{x.phone}</p>}
          <p>{x.body}</p>
        </div>
      ))}
    </div>
  );
}

// =================== PREGNANCY ===================

function PagePregnancy() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 1 · Pregnancy</span>
          <h1 style={{marginTop:16}}>ADHD and pregnancy.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">If you take ADHD medicine and are pregnant, planning a pregnancy or breastfeeding, talk to your prescriber before you change anything. This page sets out what UK medicine experts say in 2026. It is general information, not medical advice.</p>
            <PBAccordion items={[
              {h:"Stopping medicine: Talk to your prescriber first", p:"Do not stop or reduce ADHD medicine without speaking to your prescriber. Stopping can bring symptoms back and may cause withdrawal effects. Your prescriber can help you decide what is safest for you before or during pregnancy."},
              {h:"Lisdexamfetamine and dexamfetamine: Discuss the evidence", p:"bumps says therapeutic amfetamine use in pregnancy is not known to cause birth defects. Use later in pregnancy has been linked with poor growth, early birth and pregnancy complications in some studies. These studies cannot always separate the effect of the medicine from other factors. Discuss your own treatment with your prescriber."},
              {h:"Methylphenidate: Most babies are not affected", p:"Most babies exposed to methylphenidate in pregnancy are born without a birth defect. Some studies suggest a small increase in the chance of miscarriage or certain heart defects after early-pregnancy use. It is not clear whether methylphenidate causes these findings. Your maternity team may offer extra checks later in pregnancy if needed."},
              {h:"Atomoxetine and guanfacine: Less evidence", p:"There is less pregnancy safety information for atomoxetine and guanfacine than for stimulant medicines. Available information has not shown that atomoxetine causes birth defects, but the evidence is limited. Guanfacine is not usually recommended in pregnancy. Ask your prescriber about the safest option for you."},
              {h:"After the birth: Your baby may be checked", p:"If you take ADHD medicine near the end of pregnancy, tell your midwife and birth team. Your baby may be checked after birth for short-term symptoms such as being unsettled, feeding poorly or having sleep problems. The checks offered during pregnancy depend on your medicine and circumstances."},
              {h:"Breastfeeding: Check your medicine", p:"NHS advice says methylphenidate may be used while breastfeeding if your baby is healthy. Small amounts pass into breast milk. Ask your prescriber, midwife, health visitor or pharmacist to check your medicine. Get medical advice if your baby feeds poorly, is unusually sleepy or irritable, or is not gaining weight as expected."},
              {h:"If the father takes ADHD medicine: No expected risk", p:"bumps does not expect any increased risk to the baby if the father takes methylphenidate, an amfetamine or atomoxetine."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/pregnancy-bump-1000.webp')`, backgroundPosition:"center 45%"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"bumps", body:"Plain-English leaflets on medicines in pregnancy at medicinesinpregnancy.org. There is no public phone line. Your midwife, GP or specialist can contact the UK Teratology Information Service for you."},
        {name:"National Breastfeeding Helpline", phone:"0300 100 0212", body:"Breastfeeding support and information. Check the service website for current opening hours."},
        {name:"Breastfeeding Network", body:"Information on medicines and breastfeeding at breastfeedingnetwork.org.uk. Check the website for the current contact route."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}>This advice is the same across England, Scotland, Wales and Northern Ireland. If you are pregnant and struggling with your mental health, ask your midwife or GP about local perinatal mental health support. Services vary by area.</div>
    </div>
  );
}

// =================== DIAGNOSED OVER 60 ===================

function PageOver60() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 1 · Later life</span>
          <h1 style={{marginTop:16}}>Diagnosed over 60.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">ADHD can be identified and diagnosed in adulthood. An assessment should consider your current difficulties, childhood history and other possible causes. This page explains what to expect later in life and what to discuss before starting medicine.</p>
            <PBAccordion items={[
              {h:"Getting started: See your GP", p:"Tell your GP how your symptoms affect your daily life, work or relationships. They will check for other causes and may refer you to an ADHD specialist. The specialist will ask about your childhood and school, and may want to speak to someone who knew you then."},
              {h:"No school reports: You can still be assessed", p:"School reports can help, but an assessment does not depend on having them. The specialist may use your own account, old records if available, and information from someone who knows you well. They will look for evidence that symptoms were present in childhood."},
              {h:"Memory changes: Get them checked", p:"Problems with memory and concentration have many causes, including menopause, stress, poor sleep and other health conditions. The NHS says to see your GP rather than work out the cause yourself. Tell the GP about all your symptoms so they can look at the whole picture."},
              {h:"Health checks: Before any medicine", p:"Before you start ADHD medicine, the specialist should check your medical history, other medicines, pulse, blood pressure and heart health. You only need a heart trace, known as an ECG, if there are certain warning signs. Your pulse and blood pressure should be checked after each dose change and every 6 months."},
              {h:"Medicine after 60: A decision for your prescriber", p:"There is less research on ADHD medicines in people over 60. Your prescriber should review your physical health, other medicines, pulse and blood pressure before treatment and during follow-up. They will discuss the possible benefits and risks with you, especially if you have heart or blood pressure problems."},
              {h:"Waiting times: Right to Choose in England", p:"Waiting times for an adult ADHD assessment vary widely. In England, you can ask your GP about an NHS-funded referral through Right to Choose. Check which providers accept referrals in your area before you decide. Scotland, Wales and Northern Ireland have different systems."},
              {h:"Prescriptions: Shared care", p:"ADHD medicine has to be started by a specialist. Your GP can take over prescribing only if they agree to a shared care agreement, and they do not have to. If you plan to be diagnosed privately, ask your GP about shared care before you pay."},
              {h:"Driving: Tell the DVLA if it affects you", p:"You must tell the DVLA if ADHD, or a treatment side effect, affects your ability to drive safely. You must also follow any advice about driving from your prescriber. If you are unsure whether to tell the DVLA, check its guidance or ask a healthcare professional."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/over60-hands.webp')`, backgroundPosition:"55% center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"ADHD UK", body:"Adult diagnosis routes, Right to Choose updates and a postcode checker at adhduk.co.uk."},
        {name:"ADHD Foundation", phone:"0151 541 9020", body:"Information and support for adults with ADHD at adhdfoundation.org.uk."},
        {name:"Age UK Advice Line", phone:"0800 678 1602", body:"Information on benefits, care and later life. Check the Age UK website for current opening hours."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Outside England.</strong> Referral routes and waiting times vary across Scotland, Wales and Northern Ireland. Ask your GP or local health board or trust about the adult ADHD pathway. If you are considering a private assessment, ask whether your NHS prescriber would consider shared care before you pay.</div>
    </div>
  );
}

// =================== FOSTERING, ADOPTION AND KINSHIP CARE ===================

function PageFostering() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 2 · Care</span>
          <h1 style={{marginTop:16}}>Fostering, adoption and kinship care.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">This page is for adults with ADHD who want to foster, adopt or raise a relative’s child. It is also for carers looking after a child who may have ADHD. It covers England first, with notes for the rest of the UK.</p>
            <h3 className="ph-subhead">If you have ADHD</h3>
            <PBAccordion items={[
              {h:"Fostering: ADHD does not rule you out", p:"The Fostering Network says nothing in the fostering rules tells a service to turn someone down because of a named condition or medicine. Your health is one part of a wider assessment."},
              {h:"Adoption: The same applies", p:"First4Adoption says past or current mental health problems do not rule you out, and neither does taking medicine. The agency looks at how your health might affect parenting as the child grows up."},
              {h:"The health report: Be open from the start", p:"Your GP will usually complete a health report for the agency’s medical adviser. Be open about your ADHD, any medicine you take and the support you use. Your health is one part of the wider assessment."},
            ]} />
            <h3 className="ph-subhead">If the child you care for may have ADHD</h3>
            <PBAccordion items={[
              {h:"Spotting it: The signs overlap", p:"Children in care are among the groups in whom ADHD is more common. Trauma, attachment difficulties and foetal alcohol spectrum disorder can have similar features, and a child may have more than one need. Ask the child’s GP, school or social worker how to request a full assessment."},
              {h:"Treatment: Attachment and ADHD are treated differently", p:"NICE says attachment difficulties should not be treated with medicine. If a child also has ADHD, it should be treated in line with the ADHD guideline."},
              {h:"Health checks: Every child in care gets them", p:"Children looked after by a local authority in England should have an initial health assessment and regular review health assessments. Reviews are usually every 6 months for children under 5 and every 12 months for older children. Raise concerns about attention, behaviour or learning at these checks."},
              {h:"School: Extra funding", p:"In England, Pupil Premium Plus may provide extra education funding for eligible children who are looked after or previously looked after. The amount and eligibility can change each year. Ask the child’s school or virtual school about the support available. Wales has separate funding arrangements."},
              {h:"Therapy: The support fund", p:"In England, adoptive families and some special guardianship families may be able to get therapeutic support through the Adoption and Special Guardianship Support Fund. Ask your local authority or regional adoption agency for a support needs assessment. Funding rules and limits can change, so check the current guidance."},
              {h:"Kinship carers: Ask about local support", p:"Support for kinship carers varies by local authority and by the child’s legal arrangement. Ask your council for its kinship local offer and speak to Kinship about benefits, allowances and practical support. Check current national guidance, as pilot schemes and legal duties can change."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/fostering-play.webp')`, backgroundPosition:"45% center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"Adoption UK", phone:"0300 666 0006", body:"For adopters, adopted people and kinship carers. Check the website for current opening hours."},
        {name:"Kinship", phone:"0300 123 7015", body:"Advice for kinship carers in England and Wales. Check the website for current opening hours."},
        {name:"Fosterline", phone:"0800 040 7675", body:"For current and future foster carers in England. Check the website for current opening hours."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Outside England.</strong> Rules and support differ in Scotland, Wales and Northern Ireland. In Scotland, contact the Kinship Care Advice Service at Children First for advice. In Northern Ireland, ask the relevant trust or adoption and fostering agency about its assessment process and available support.</div>
    </div>
  );
}

// =================== HOUSING ===================

function PageHousing() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 7 · Practical</span>
          <h1 style={{marginTop:16}}>ADHD and housing.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">ADHD can make rent, bills, letters and deadlines harder to keep on top of. If that has put your home at risk, you have rights, and there is free help. This page covers England first, with notes for Scotland, Wales and Northern Ireland. It is general information, not legal advice.</p>
            <PBAccordion items={[
              {h:"Your rights: ADHD can count as a disability", p:"Under the Equality Act 2010, a condition counts as a disability if it has a substantial and long-term effect on daily life. Government guidance uses ADHD as an example. The effects are judged as if you were not taking medicine. Whether it applies to you depends on your situation."},
              {h:"Reasonable adjustments: Ask your landlord", p:"You can ask your landlord, agent, council or housing association for reasonable adjustments. This could include phone calls instead of letters, a named contact, extra time to reply or text reminders before rent is due. Put your request in writing and keep a copy."},
              {h:"Private renters: Check the current rules", p:"Private renting rules in England are changing. Before relying on notice periods or eviction rules, check the current guidance from Shelter or Citizens Advice. If you receive a notice, get advice quickly and do not leave your home until you understand your options."},
              {h:"Rent arrears: Get advice early", p:"If you have rent arrears, contact your landlord and get advice straight away. Benefit delays, disability and the steps your landlord has taken may matter, but the law depends on your tenancy and the type of notice. Shelter or Citizens Advice can check your position and help you respond."},
              {h:"Council and housing association tenants: A set process", p:"If you rent from a council or housing association, get advice as soon as arrears build up. Your landlord should follow its arrears and complaints procedures. You can complain to the Housing Ombudsman after you have completed the landlord’s complaints process, or when the Ombudsman can accept the complaint."},
              {h:"Debt: Breathing Space", p:"Breathing Space can pause most creditor action while you get debt advice. A standard breathing space usually lasts up to 60 days. You still need to pay ongoing rent and other current bills. A debt adviser can tell you if it applies to your situation. It is available in England and Wales."},
              {h:"Help with rent: Ask your council", p:"Your council may offer discretionary help with housing costs, such as a rent shortfall, deposit or rent in advance. The scheme, eligibility and available budget vary by council. Check your council website or ask Citizens Advice for help to apply."},
              {h:"At risk of losing your home: Contact the council", p:"In England, the council must assess your case if you are homeless or likely to become homeless within 56 days. This can include when you have received a valid eviction notice. A disability may be relevant to whether you have priority need, but the council must consider your individual circumstances. Evidence from a doctor or support worker may help."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" style={{backgroundImage:`url('assets/housing-envelope.webp')`, backgroundPosition:"40% 65%"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"Shelter", phone:"0808 800 4444", body:"Free housing advice for England. Check Shelter’s website for current opening hours. Shelter Cymru and Shelter Scotland provide separate services in Wales and Scotland."},
        {name:"Citizens Advice", phone:"0800 144 8848", body:"Advice on housing, debt and benefits in England. Check the Citizens Advice website for current opening hours and local services."},
        {name:"Housing Ombudsman", phone:"0300 111 3000", body:"For complaints about council and housing association landlords in England. Check when the Ombudsman can accept your complaint on its website."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Outside England.</strong> Housing law differs across Wales, Scotland and Northern Ireland. For advice in Wales, contact Shelter Cymru or Citizens Advice. For Scotland, contact Shelter Scotland or Citizens Advice Scotland. In Northern Ireland, Housing Rights can advise. Check local advice before acting on any notice or arrears issue.</div>
    </div>
  );
}

// =================== WHO MADE THIS ===================

function PageAbout() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">About</span>
          <h1 style={{marginTop:16}}>Who made this.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">Hi, I'm Rich. I run <a href="https://richexperiments.com/" target="_blank" rel="noopener">Rich Experiments</a>, and in 2024 I was diagnosed with ADHD. I was shocked by how little I knew, and how hard it was to find answers that made sense to me.</p>
            <p className="about-p">Because of this I built Untangle. It puts clear, simple information in one place and is for people with ADHD, and for the parents, family, friends and partners who want to understand and support them.</p>
          </div>
        </div>
        <img className="about-photo" src="assets/rich-about.webp" alt="Rich mid-cartwheel in a studio" width="1000" height="1333" />
      </div>
    </div>
  );
}


function PageWaitTimes() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 3 · Waiting times</span>
          <h1 style={{marginTop:16}}>ADHD waiting times in the UK.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">There is no national waiting time target for ADHD assessment anywhere in the UK. In England, NHS figures show that in June 2026 there were up to 959,662 open referrals that may be for an ADHD assessment. Many people wait more than a year, and waits differ a lot between areas.</p>
            <h3 className="ph-subhead">How long is the ADHD waiting list in the UK?</h3>
            <PBAccordion items={[
              {h:"England: the NHS figures", p:"NHS England Digital publishes ADHD figures every three months. Its August 2026 release counted up to 959,662 open referrals in June 2026 that may be for an ADHD assessment. The count also includes some referrals for other conditions, such as dyslexia, so the real ADHD number may be a little lower."},
              {h:"Why the number jumped", p:"From February 2025, private companies that do NHS assessments started sending in their data too. That made the count go up. So you can't compare figures from before and after that date."},
              {h:"Scotland", p:"Scotland does not publish one national figure. Freedom of Information replies show big gaps between health boards. In 2026, NHS Lothian reported a median adult wait of 177 weeks, which is over three years."},
              {h:"Wales", p:"Wales does not publish ADHD waits separately. Waits depend on your health board, and many are long. Ask your GP or health board for the current wait in your area."},
              {h:"Northern Ireland", p:"A 2024 Northern Ireland Assembly research paper found the longest adult wait in the Belfast Trust was eight years. A 2026 Department of Health review found that adult ADHD services are not yet formally commissioned."},
            ]} />
            <h3 className="ph-subhead">What can I do while I wait?</h3>
            <PBAccordion items={[
              {h:"In England: ask about Right to Choose", p:"If your GP in England refers you, you can ask to be sent to another NHS-funded provider. It's free, and the wait can be shorter. It applies in England only. See the Three routes and Fast Track pages."},
              {h:"Ask how long your wait will be", p:"You can ask your GP, or the service you were referred to, how long the wait is. Ask them to confirm the referral in writing, with the date it was sent."},
              {h:"Get support now", p:"You don't need a diagnosis to try the daily tools in this guide. They include body doubling, the Pomodoro timer and the 1-3-5 list. The While you wait page has more ideas."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" role="img" aria-label="Three empty waiting room chairs against a white wall" style={{backgroundImage:`url('assets/waiting-chairs.webp')`, backgroundPosition:"60% center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"NHS England Digital", body:"ADHD Management Information. The official figures for England, published every three months at digital.nhs.uk."},
        {name:"ADHD UK", body:"Plain-English guides to Right to Choose and waiting lists, at adhduk.co.uk."},
        {name:"Your GP", body:"Ask for the current wait at your local service and written confirmation that your referral was sent."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>These figures change.</strong> Check the latest release on the NHS England Digital website. Figures for Scotland and Northern Ireland come from Freedom of Information replies and research papers, not from one national count.</div>
    </div>
  );
}

function PageScotland() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 3 · Scotland</span>
          <h1 style={{marginTop:16}}>ADHD assessment in Scotland.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">In Scotland, an NHS ADHD assessment starts with your GP. Right to Choose does not apply in Scotland. Your GP refers you to services run by your local health board, and what's on offer varies from board to board.</p>
            <h3 className="ph-subhead">How do I get an ADHD assessment in Scotland?</h3>
            <PBAccordion items={[
              {h:"Step 1: See your GP", p:"Your GP can't diagnose ADHD, but they can refer you. Tell them how your symptoms affect work, home and relationships. Take notes, and the self-check results from this guide if you've done it."},
              {h:"Step 2: The referral", p:"Adults are usually referred to adult mental health or psychiatry services. Some boards have a separate neurodevelopmental team. Children and young people usually go to CAMHS or a children's neurodevelopmental team."},
              {h:"Step 3: Ask for confirmation", p:"Ask your GP to confirm in writing that the referral has been sent, and when. If you hear nothing within 4 to 6 weeks, follow it up."},
              {h:"Referrals are not automatic", p:"Some boards only accept adult referrals where symptoms have a severe effect on daily life. If your GP says there is no local service, ask whether they can refer you to general adult psychiatry instead."},
            ]} />
            <h3 className="ph-subhead">What are my other options in Scotland?</h3>
            <PBAccordion items={[
              {h:"Right to Choose: England only", p:"Right to Choose lets people in England pick an NHS-funded provider. It does not apply if your GP is in Scotland."},
              {h:"Private assessment", p:"You can pay for a private assessment. Before you book, ask your GP whether they would accept a private diagnosis and share prescribing. Not all GPs will."},
              {h:"Students", p:"Many Scottish universities have disability services that can help with support while you wait. Some can also help you get an assessment."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" role="img" aria-label="A loch and mountains in Glencoe, Scotland" style={{backgroundImage:`url('assets/scotland-glencoe.webp')`, backgroundPosition:"center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"NHS inform", body:"Scotland's official health information website, at nhsinform.scot."},
        {name:"ADHD UK", body:"UK-wide guides to getting assessed, at adhduk.co.uk."},
        {name:"Citizens Advice Scotland", body:"Free advice on your rights, benefits and work, at cas.org.uk."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Services change.</strong> Ask your GP which route applies in your health board area, and whether referrals are open.</div>
    </div>
  );
}

function PageWales() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 3 · Wales</span>
          <h1 style={{marginTop:16}}>ADHD assessment in Wales.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">In Wales, an NHS ADHD assessment starts with a GP referral to your local health board. Right to Choose does not apply in Wales, even if you live in England but your GP is in Wales. Waits vary between health boards and are often long.</p>
            <h3 className="ph-subhead">How do I get an ADHD assessment in Wales?</h3>
            <PBAccordion items={[
              {h:"Step 1: See your GP", p:"Tell your GP how your symptoms affect your daily life. Ask them to refer you to your health board's adult neurodevelopmental or mental health service."},
              {h:"Step 2: The referral", p:"Some health boards assess ADHD and autism together in one neurodevelopmental service. Children are referred to the children's neurodevelopmental service in your area."},
              {h:"Step 3: Ask about the wait", p:"Ask your GP or health board how long the current wait is, and ask for the referral date in writing."},
              {h:"Welsh-language assessment", p:"Some NHS services in Wales offer assessments in Welsh. Ask for this when you are referred."},
            ]} />
            <h3 className="ph-subhead">What are my other options in Wales?</h3>
            <PBAccordion items={[
              {h:"Right to Choose: England only", p:"People registered with a GP in Wales do not have a legal right to choose where they are referred. You are usually referred outside your area only if the service isn't available locally."},
              {h:"Private assessment", p:"You can pay for a private assessment. Before you book, ask your GP whether they would share prescribing after a private diagnosis. Some GP practices in Wales will not."},
              {h:"If something goes wrong", p:"You can raise a concern with your health board through the NHS Wales complaints process, called Putting Things Right."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" role="img" aria-label="Sheep on a stone wall in the Welsh countryside" style={{backgroundImage:`url('assets/wales-sheep-wall.webp')`, backgroundPosition:"45% center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"NHS 111 Wales", body:"Health information and advice for Wales, at 111.wales.nhs.uk."},
        {name:"ADHD UK", body:"UK-wide guides to getting assessed, at adhduk.co.uk."},
        {name:"Citizens Advice Cymru", body:"Free advice on your rights, benefits and work, at citizensadvice.org.uk/wales."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Services change.</strong> Ask your GP which route applies in your health board area, and whether referrals are open.</div>
    </div>
  );
}

function PageNI() {
  return (
    <div>
      <div className="ph ph-stack">
        <div>
          <span className="chip">Chapter 3 · Northern Ireland</span>
          <h1 style={{marginTop:16}}>ADHD assessment in Northern Ireland.</h1>
          <div style={{gridColumn:1, minWidth:0, alignSelf:"start"}}>
            <p className="lede">In Northern Ireland, an adult ADHD assessment starts with a GP referral to your Health and Social Care (HSC) Trust. Right to Choose does not apply in Northern Ireland. A 2026 Department of Health review found that adult ADHD services are not yet formally commissioned, and waits in some Trusts run to several years.</p>
            <h3 className="ph-subhead">How do I get an ADHD assessment in Northern Ireland?</h3>
            <PBAccordion items={[
              {h:"Step 1: See your GP", p:"Tell your GP how your symptoms affect your daily life. Take a written record with you. Ask to be referred to adult mental health or psychiatry services."},
              {h:"Step 2: Ask for a specialist team", p:"Some HSC Trusts have specialist neurodevelopmental teams. Ask your GP whether yours does, and whether they can refer you to it."},
              {h:"Step 3: Ask for confirmation", p:"Ask your GP to confirm in writing that the referral has been sent, and when."},
              {h:"Children and young people", p:"Children are usually referred to CAMHS or community paediatrics. Young people who already take ADHD medicine may be referred on to adult services when they turn 18."},
            ]} />
            <h3 className="ph-subhead">What are my other options in Northern Ireland?</h3>
            <PBAccordion items={[
              {h:"Right to Choose: England only", p:"Right to Choose lets people in England pick an NHS-funded provider. It does not apply if your GP is in Northern Ireland."},
              {h:"Private assessment", p:"Private clinics in Northern Ireland are regulated by the RQIA. Before you book, ask your GP whether they would share prescribing after a private diagnosis. GP practices vary."},
              {h:"Support at work", p:"Access to Work (NI) is run by the Department for Communities. It can help pay for support at work if a condition has a long-term effect on your ability to work."},
            ]} />
          </div>
        </div>
        <div className="ph-photo" role="img" aria-label="The Giant's Causeway on the Northern Ireland coast" style={{backgroundImage:`url('assets/ni-causeway.webp')`, backgroundPosition:"center"}}></div>
      </div>
      <h3 className="help-list-h">Where to get help</h3>
      <PBHelpList items={[
        {name:"ADD-NI", body:"The main ADHD charity in Northern Ireland, offering support and signposting, at addni.org."},
        {name:"nidirect", body:"Official Northern Ireland government information on health and services, at nidirect.gov.uk."},
        {name:"Advice NI", body:"Free, independent advice on benefits, money and rights, at adviceni.net."},
      ]} />
      <div className="disclaim" style={{marginTop:24}}><strong>Services change.</strong> Ask your GP which route applies in your Trust area, and whether referrals are open.</div>
    </div>
  );
}

function PageEditorial() {
  return (
    <div>
      <span className="chip">About</span>
      <h1 style={{marginTop:16}}>How this guide is written.</h1>
      <p className="lede">Untangle is written by Rich, who was diagnosed with ADHD in 2024. It is free, independent and not paid for by any clinic, drug company or provider. It is information, not medical advice.</p>
      <h3>Who writes it?</h3>
      <p>Rich writes and edits every page. He is not a doctor. He writes from his own experience and from the sources below. You can read more on the <a href="who-made-this.html">Who made this</a> page.</p>
      <h3>Where do the facts come from?</h3>
      <p>Facts come from the NHS, NICE, NHS England Digital, GOV.UK and the NHS bodies in Scotland, Wales and Northern Ireland. Some also come from UK charities such as ADHD UK and ADHD Foundation. The main sources are listed on the <a href="sources.html">Sources</a> page.</p>
      <h3>How is it written?</h3>
      <p>Pages use plain British English and short sentences, so they are easy to read when you're tired or overwhelmed. Quotes from people with ADHD are real and credited.</p>
      <h3>How often are pages checked?</h3>
      <p>Pages are checked when NHS rules, laws or guidance change, and when a reader reports a problem. Pages about medicine, NHS routes and your rights get checked first.</p>
      <h3>Found a mistake?</h3>
      <p>Please tell us on the <a href="give-feedback.html">Give feedback</a> page. Say which page it's on and what's wrong. We read every message.</p>
      <div className="disclaim" style={{marginTop:24}}><strong>Not medical advice.</strong> Speak to your GP, prescriber or pharmacist before you change any treatment. If you're in crisis, see <a href="crisis-lines.html">Crisis lines</a>.</div>
    </div>
  );
}

window.PB_PAGES_NEW = [
  { after: "Sources", page: { ch: "support", title: "How this guide is written", render: () => <PageEditorial /> } },
  { after: "Three routes", page: { ch: "test", title: "ADHD waiting times in the UK", render: () => <PageWaitTimes /> } },
  { after: "ADHD waiting times in the UK", page: { ch: "test", title: "ADHD assessment in Scotland", render: () => <PageScotland /> } },
  { after: "ADHD assessment in Scotland", page: { ch: "test", title: "ADHD assessment in Wales", render: () => <PageWales /> } },
  { after: "ADHD assessment in Wales", page: { ch: "test", title: "ADHD assessment in Northern Ireland", render: () => <PageNI /> } },
  { after: "ADHD and the menstrual cycle", page: { ch: "self", title: "ADHD and pregnancy", render: () => <PagePregnancy /> } },
  { after: "Late-diagnosed women", page: { ch: "self", title: "Diagnosed over 60", render: () => <PageOver60 /> } },
  { after: "Books for the child", page: { ch: "parents", title: "Fostering, adoption and kinship care", render: () => <PageFostering /> } },
  { after: "Give feedback", page: { ch: "support", title: "Who made this", render: () => <PageAbout /> } },
  { after: "ADHD and money · The longer game", page: { ch: "support", title: "ADHD and housing", render: () => <PageHousing /> } },
];
