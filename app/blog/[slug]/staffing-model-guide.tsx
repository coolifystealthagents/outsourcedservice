import { site } from '../../data';

export const staffingModelSlug = 'staff-outsourcing-philippines-direct-hire-or-staffing-provider';
export const staffingModelTitle = 'Staff outsourcing Philippines: direct hire or staffing provider?';
export const staffingModelDescription = 'Compare direct hiring with a Philippines staffing provider by looking at recruiting work, daily management, access, quality checks, and exit duties.';

const canonical = `https://outsourcedservice.com/blog/${staffingModelSlug}`;

const sources = [
  {
    name: '1. World Bank: Philippines labor force, total',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.TOTL.IN?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. It reports 44,699,749 people in the labor force in 2021 and 52,204,133 in 2025, with annual values between those years.',
  },
  {
    name: '2. World Bank: Philippines unemployment, total',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.UEM.TOTL.ZS?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. The 2025 value is 2.235% of the total labor force.',
  },
  {
    name: '3. World Bank: Philippines employment-to-population ratio',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.EMP.TOTL.SP.ZS?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. The 2025 employment-to-population ratio for people age 15 and older is 59.979%.',
  },
  {
    name: '4. Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official statutory text dated August 15, 2012. It covers accountability, security safeguards, and duties when another party processes personal information for a controller.',
  },
  {
    name: '5. IRS: Independent contractor or employee',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee',
    note: 'U.S. tax guidance describing behavioral control, financial control, and the type of relationship. Buyers should get advice for the countries and facts involved.',
  },
  {
    name: '6. NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation used below and explains the framework’s added focus on governance.',
  },
] as const;

const faqs = [
  {
    question: 'Is direct hiring always more flexible?',
    answer: 'Direct hiring can give the buyer more control over recruiting, coaching, and role changes. It also leaves the buyer responsible for building the local hiring, attendance, equipment, backup, and exit process.',
  },
  {
    question: 'What does a Philippines staffing provider usually handle?',
    answer: 'The exact scope varies, so ask for it in writing. A provider may help with sourcing, screening, local support, attendance, equipment, replacement, and administrative duties while the buyer still directs the work and checks quality.',
  },
  {
    question: 'Who should approve customer or money decisions?',
    answer: 'The buyer should name the people who may approve refunds, credits, contract changes, vendor records, account access, and money movement. A new worker can prepare the facts and route the request without receiving approval authority on day one.',
  },
  {
    question: 'How should a buyer compare candidates from each path?',
    answer: 'Use the same work sample, role brief, schedule, tool list, and review score for both paths. A fair comparison looks at the person, the support around the role, and the work the buyer must still own.',
  },
] as const;

function LaborForceChart() {
  const bars = [
    { year: '2021', value: '44.70m', width: 447 },
    { year: '2022', value: '49.48m', width: 495 },
    { year: '2023', value: '50.38m', width: 504 },
    { year: '2024', value: '51.31m', width: 513 },
    { year: '2025', value: '52.20m', width: 522 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="labor-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="labor-chart-title labor-chart-desc">
      <title id="labor-chart-title">Philippines labor force from 2021 through 2025</title>
      <desc id="labor-chart-desc">Five horizontal bars rise from 44.70 million people in 2021 to 52.20 million in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">A large labor market still needs a narrow role brief</text>
      <text x="36" y="74" fontSize="14" fill="#516174">Philippines labor force, modeled ILO estimate</text>
      {bars.map((bar, index) => {
        const y = 105 + index * 58;
        return <g key={bar.year}>
          <text x="36" y={y + 21} fontSize="15" fontWeight="700" fill="#17304a">{bar.year}</text>
          <rect x="100" y={y} width="560" height="30" rx="8" fill="#dbe2f2" />
          <rect x="100" y={y} width={bar.width} height="30" rx="8" fill={index === 4 ? '#4e63f5' : '#17304a'} />
          <text x="682" y={y + 21} fontSize="16" fontWeight="700" fill="#17304a">{bar.value}</text>
        </g>;
      })}
      <text x="36" y="406" fontSize="13" fill="#516174">Source: World Bank API. Values rounded to two decimal million for labels.</text>
    </svg>
    <figcaption><strong>Methods note:</strong> The chart uses the World Bank labor-force series for the Philippines and its annual modeled ILO estimates. Bar width equals the published count divided by 100,000, labels round the count to two decimal million, and the graphic does not measure skill, fit, or provider quality.</figcaption>
  </figure>;
}

function HiringPathGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="path-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 330" role="img" aria-labelledby="path-graphic-title path-graphic-desc">
      <title id="path-graphic-title">Two Philippines staffing paths with the buyer in both</title>
      <desc id="path-graphic-desc">The direct path places recruiting and local support with the buyer. The provider path places matching and local support with the provider. Both lead to buyer-owned scope, coaching, access, and approval.</desc>
      <rect width="820" height="330" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">The support changes. Buyer ownership does not.</text>
      <rect x="36" y="82" width="220" height="154" rx="18" fill="#ffffff" />
      <text x="56" y="114" fontSize="18" fontWeight="700" fill="#17304a">Direct hire</text>
      <text x="56" y="145" fontSize="14" fill="#516174">Buyer recruits</text>
      <text x="56" y="170" fontSize="14" fill="#516174">Buyer builds local process</text>
      <text x="56" y="195" fontSize="14" fill="#516174">Buyer plans backup</text>
      <text x="278" y="164" fontSize="34" fill="#b9f227">›</text>
      <rect x="300" y="82" width="220" height="154" rx="18" fill="#e8edff" />
      <text x="320" y="114" fontSize="18" fontWeight="700" fill="#17304a">Staffing provider</text>
      <text x="320" y="145" fontSize="14" fill="#516174">Provider matches talent</text>
      <text x="320" y="170" fontSize="14" fill="#516174">Provider states local support</text>
      <text x="320" y="195" fontSize="14" fill="#516174">Provider states backup path</text>
      <text x="542" y="164" fontSize="34" fill="#b9f227">›</text>
      <rect x="564" y="82" width="220" height="154" rx="18" fill="#b9f227" />
      <text x="584" y="114" fontSize="18" fontWeight="700" fill="#17304a">Buyer keeps</text>
      <text x="584" y="145" fontSize="14" fill="#17304a">Scope and daily direction</text>
      <text x="584" y="170" fontSize="14" fill="#17304a">Access and quality review</text>
      <text x="584" y="195" fontSize="14" fill="#17304a">Final approvals</text>
      <text x="38" y="286" fontSize="14" fill="#dce6f0">Compare the written duties around the worker, then test the same real work sample.</text>
    </svg>
    <figcaption>This graphic is a decision map, not a statement about every contract. Ask each party to name the employer, daily manager, equipment owner, attendance contact, backup path, and exit duties in writing.</figcaption>
  </figure>;
}

export function StaffingModelGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: staffingModelTitle,
      description: staffingModelDescription,
      datePublished: '2026-07-25',
      dateModified: '2026-07-25',
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' },
      publisher: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' },
      citation: sources.map((source) => source.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedservice.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedservice.com/blog' },
        { '@type': 'ListItem', position: 3, name: staffingModelTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines staffing model guide</p>
    <h1>{staffingModelTitle}</h1>
    <p className="lead">Both paths can lead to a good hire. The better choice is the one that matches the recruiting work, local support, daily management, and backup duties your team can truly own.</p>

    <div className="answer-box" data-article-marker="ph-staffing-model-2026">
      <strong>The short answer</strong>
      <p>Choose direct hiring when you can run recruiting and build the local employment or contractor process yourself. Choose a staffing provider when you want help with matching and named local support, but check the contract because the buyer still owns the role, access rules, coaching, and final decisions.</p>
    </div>

    <div className="article-body accounting-guide staffing-model-guide">
      <p>The worker is only one part of this choice. Decide who writes the role, finds candidates, checks work, handles attendance, supports the person locally, and closes access at the end. Put a name beside every duty.</p>
      <p>Start with the work rather than a broad promise to find great talent. Write the first queue, the work hours, the tools, the examples, and the decisions that stay with your company. Then compare how a direct hire and a staffing provider would support that same role.</p>

      <aside className="article-banner banner-one"><strong>Start with one real queue.</strong><span>Use the <a href="/blog/outsourced-service-tasks-to-outsource">30-day Philippines handoff plan</a> to define the first tasks before comparing hiring paths.</span></aside>

      <h2>Compare duties, not labels</h2>
      <p>“Direct” can describe an employee hired through a local entity, a contractor engaged across borders, or another arrangement. “Provider” can describe recruitment help, an employer service, managed staffing, or a wider outsourced service. The name alone does not tell you who carries each duty.</p>
      <p>Ask for a one-page responsibility map before you choose. If a duty is shared, name the first contact and the final owner. If the answer is “it depends,” write down what it depends on and who makes that call.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Direct hire and staffing provider responsibility table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Duty</th><th>Direct path</th><th>Provider path to check</th><th>Buyer still owns</th></tr></thead>
          <tbody>
            <tr><td>Candidate search</td><td>Build the search, screen, interview, and check references</td><td>Ask who searches, how screening works, and whether you see the evidence</td><td>Role brief, work sample, final selection</td></tr>
            <tr><td>Local support</td><td>Set up the lawful engagement, equipment, attendance help, and worker contact</td><td>Ask which local duties are included and who answers the worker</td><td>Accurate company facts and timely decisions</td></tr>
            <tr><td>Daily work</td><td>Assign, coach, review, and change the queue</td><td>Ask whether the provider manages attendance, quality, or both</td><td>Priorities, examples, access, approvals</td></tr>
            <tr><td>Backup and exit</td><td>Plan coverage, records, access removal, and replacement search</td><td>Ask for the exact backup, handover, and replacement process</td><td>System ownership, file copies, final access check</td></tr>
          </tbody>
        </table>
      </div>
      <p>Do not call the provider path easier until each row has a clear answer. Some providers handle local support, while others mainly introduce a candidate. The written scope matters more than the sales label.</p>

      <h2>Read the labor figures with care</h2>
      <p>The World Bank labor-force series reports 52,204,133 people in the Philippines in 2025, up from 44,699,749 in 2021. Its separate modeled ILO series reports 2025 unemployment at 2.235% and the employment-to-population ratio for people age 15 and older at 59.979%. These are national measures, not a count of available remote workers.</p>
      <p>A large labor market does not prove that a person has the exact tool, schedule, writing skill, or judgment your role needs. It also does not prove that one provider can find the right match. Use the figures for context, then use a work sample and structured interview for the actual decision.</p>

      <LaborForceChart />

      <aside className="article-banner banner-two"><strong>Need a role-specific check?</strong><span>Read the <a href="/services/operations-support">Philippines operations support guide</a> and mark which tasks need a daily owner review.</span></aside>

      <h2>Choose direct hiring when you can build the support around it</h2>
      <p>The direct path may suit a company with a clear role owner and time to recruit. That owner should be able to screen candidates, run a fair work sample, explain the tools, coach the first month, and handle changes.</p>
      <p>Direct control can be useful when the role will change often or become part of a close internal team. Still, control brings work. Someone must answer attendance questions, keep documents in order, arrange equipment or access, plan backup, and manage a clean exit.</p>
      <p>Do not assume a contract label settles legal status. The IRS tells U.S. businesses to look at behavioral control, financial control, and the type of relationship when deciding whether a worker is an employee or independent contractor. Cross-border work adds local questions, so get advice based on the real arrangement.</p>

      <h2>Choose a provider when the written support fills a real gap</h2>
      <p>A provider may fit when you want a shorter search path and a named contact for local or administrative issues. The useful question is not whether the provider offers support. Ask who does what, when they step in, what record they keep, and what happens when the first match does not work.</p>
      <p>Check whether the person guiding quality has seen your actual queue. A provider contact cannot coach a tool or decision rule they have never reviewed. The buyer should still supply good examples, answer edge cases, review early work, and approve any move into more sensitive duties.</p>
      <p>Ask how backup works before an absence. Find out whether another person can cover the queue and which files make handover possible. A vague replacement promise is not a tested plan.</p>

      <HiringPathGraphic />

      <h2>Keep personal data and system authority with named owners</h2>
      <p>The Philippine Data Privacy Act says a personal information controller is accountable for personal information under its control, including information transferred to another party for processing. It also requires reasonable organizational, physical, and technical safeguards. The hiring path may change who helps, but it does not erase the buyer’s need to know where data goes and who can reach it.</p>
      <p>Give each worker a named account and open only the tools needed for the first queue. Keep refunds, contract changes, account administration, vendor changes, data exports, and deletion with named buyer approvers. Record access removal as part of every exit or role change.</p>
      <blockquote className="expert-quote">“Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad,” according to Kevin Stine, chief of NIST’s Applied Cybersecurity Division.</blockquote>
      <p>NIST published that statement on February 26, 2024, when it released Cybersecurity Framework 2.0. The simple lesson for a staffing decision is to make governance fit the real users and systems. A copied access list is weak if nobody checks it when the role changes.</p>

      <aside className="article-banner banner-three"><strong>Turn the choice into a role plan.</strong><span>Review <a href="/services/admin-support">Philippines admin support</a> or <a href="/contact">send the first task list</a> once the responsibility map is clear.</span></aside>

      <h2>Run the same proof before choosing either path</h2>
      <p>Give finalists the same small, paid work sample using made-up or safely redacted information. Score whether they followed the instructions, found missing details, wrote a clear handoff, and knew when to stop for approval. Do not use live customer records in a hiring test.</p>
      <p>Then compare the support around the person. Check who handles the local process and backup on the direct path, or the named contacts, handover, and exit steps on the provider path. The final decision should explain why the person and support model fit the queue.</p>

      <h2>Use a 30-day decision check</h2>
      <p>During days 1 through 5, keep the queue small and review every completed item. During days 6 through 15, test normal volume and one common exception. Record questions that repeat, because they usually point to a weak example or missing rule.</p>
      <p>During days 16 through 30, review quality, blocked work, attendance, access, and promised support. Ask the worker what still causes delay. Expand the queue only when the role can run without one person’s private knowledge.</p>

      <h2>Questions to take into the final call</h2>
      <p>Ask: “Who finds and screens the person, who supports them locally, and who checks attendance? If the worker is absent or leaves, which files, accounts, and handover steps keep the queue moving?” These questions force the model into concrete duties.</p>
      <p>Then ask: “Which decisions stay with us, how will early work be reviewed, and what evidence will show that access was opened and removed correctly?” A useful answer names people, systems, and records. A broad assurance is not enough.</p>

      <h2>Questions buyers ask</h2>
      <div className="faq-list">
        {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div>

      <h2>Numbered sources</h2>
      <ol className="source-list numbered-sources">
        {sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.name}</a><span>{source.note}</span></li>)}
      </ol>
    </div>
  </>;
}
