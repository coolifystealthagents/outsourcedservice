import { site } from '../../data';

export const knowledgeGuideSlug = 'philippines-knowledge-base-maintenance-control-guide';
export const knowledgeGuideTitle = 'Philippines knowledge base maintenance: an update and approval control guide';
export const knowledgeGuideDescription = 'Plan a Philippines knowledge base maintenance lane with source checks, article owners, approval limits, safe access, and review evidence.';

const canonical = `https://outsourcedservice.com/blog/${knowledgeGuideSlug}`;

const sources = [
  {
    name: 'World Bank: Philippines labor force, total',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.TOTL.IN?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. It reports 52,204,133 people in the Philippine labor force in 2025 and 44,699,749 in 2021.',
  },
  {
    name: 'World Bank: employment in services, Philippines',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. Services accounted for 59.548% of Philippine employment in 2025 and 56.810% in 2021.',
  },
  {
    name: 'World Bank: individuals using the Internet, Philippines',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=10',
    note: 'World Bank population series. It reports 67.263% for 2024 and 77.867% for 2023; it does not test a writer, device, or connection.',
  },
  {
    name: 'Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official Philippine statutory text dated August 15, 2012. It covers accountability and safeguards for personal information processing.',
  },
  {
    name: 'NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation used below.',
  },
  {
    name: 'W3C: Understanding Success Criterion 2.4.6, Headings and Labels',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html',
    note: 'W3C guidance explaining why descriptive headings and labels help users find information and understand relationships.',
  },
] as const;

const faqs = [
  {
    question: 'What knowledge base work can a Philippine team handle first?',
    answer: 'Start with a small set of articles that have named source records and clear owners. A Philippine specialist can check links, apply approved wording, fix headings, record changes, and send uncertain claims back to the owner.',
  },
  {
    question: 'Should the specialist publish every edit directly?',
    answer: 'Start with draft or review access. Let the specialist publish low-risk changes only after the buyer defines which edits are preapproved, who handles policy claims, and how a page can be restored.',
  },
  {
    question: 'How should a buyer test article quality?',
    answer: 'Review a mixed sample against the source record, current product behavior, article template, links, and change log. Include ordinary fixes, old screenshots, conflicting source notes, and articles that need an owner decision.',
  },
  {
    question: 'What belongs in the exception queue?',
    answer: 'Route legal claims, security promises, product limits, customer-specific facts, policy changes, and disputed source records to a named buyer owner. The specialist should state the old text, proposed text, evidence, and exact decision needed.',
  },
] as const;

function ServicesEmploymentChart() {
  const bars = [
    { year: '2021', value: '56.810%', width: 398 },
    { year: '2022', value: '58.719%', width: 411 },
    { year: '2023', value: '59.019%', width: 413 },
    { year: '2024', value: '59.316%', width: 415 },
    { year: '2025', value: '59.548%', width: 417 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="knowledge-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="knowledge-chart-title knowledge-chart-desc">
      <title id="knowledge-chart-title">Philippine employment in services from 2021 through 2025</title>
      <desc id="knowledge-chart-desc">Five bars show services at 56.810 percent of Philippine employment in 2021 and 59.548 percent in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">Country context is not an editing test</text>
      <text x="36" y="74" fontSize="14" fill="#516174">Employment in services, share of total Philippine employment</text>
      {bars.map((bar, index) => {
        const y = 105 + index * 58;
        return <g key={bar.year}>
          <text x="36" y={y + 21} fontSize="15" fontWeight="700" fill="#17304a">{bar.year}</text>
          <rect x="100" y={y} width="500" height="30" rx="8" fill="#dbe2f2" />
          <rect x="100" y={y} width={bar.width} height="30" rx="8" fill={index === 4 ? '#4e63f5' : '#17304a'} />
          <text x="625" y={y + 21} fontSize="16" fontWeight="700" fill="#17304a">{bar.value}</text>
        </g>;
      })}
      <text x="36" y="406" fontSize="13" fill="#516174">Source: World Bank API, modeled ILO estimate. Labels round published values to three decimals.</text>
    </svg>
    <figcaption><strong>Methods note:</strong> Each bar uses the World Bank employment-in-services value for the Philippines and a width equal to the published share multiplied by seven. The series describes the national labor market, not writing skill, source judgment, product knowledge, equipment, connection quality, or the work of a provider.</figcaption>
  </figure>;
}

function ArticleControlGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="knowledge-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 370" role="img" aria-labelledby="knowledge-graphic-title knowledge-graphic-desc">
      <title id="knowledge-graphic-title">Knowledge base article control path</title>
      <desc id="knowledge-graphic-desc">A four-step path moves from source capture to draft change, owner review, and a published record.</desc>
      <rect width="820" height="370" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">A useful article can be traced back to a current source</text>
      {[
        ['1', 'Capture source', 'Link and owner'],
        ['2', 'Draft the change', 'Show old and new'],
        ['3', 'Route the risk', 'Named buyer owner'],
        ['4', 'Publish and log', 'Date and reviewer'],
      ].map(([number, title, note], index) => {
        const x = 35 + index * 195;
        return <g key={number}>
          <rect x={x} y="92" width="165" height="152" rx="16" fill={index === 2 ? '#b9f227' : '#ffffff'} />
          <circle cx={x + 28} cy="120" r="16" fill="#4e63f5" />
          <text x={x + 28} y="125" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{number}</text>
          <text x={x + 16} y="162" fontSize="16" fontWeight="700" fill="#17304a">{title}</text>
          <text x={x + 16} y="194" fontSize="13" fill="#516174">{note}</text>
          {index < 3 && <text x={x + 176} y="171" fontSize="26" fill="#b9f227">›</text>}
        </g>;
      })}
      <text x="38" y="304" fontSize="14" fill="#dce6f0">The buyer owns product truth, policy claims, security promises, and every disputed source.</text>
      <text x="38" y="332" fontSize="13" fill="#aebfd0">Planning graphic: replace these labels with the buyer's real source records, permissions, and reviewers.</text>
    </svg>
    <figcaption>This is a planning path, not a claim that every content system has four steps. The buyer should map the actual source folder, article template, draft queue, approval limits, publishing rights, rollback record, and named owners before work begins.</figcaption>
  </figure>;
}

export function KnowledgeBaseMaintenanceGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: knowledgeGuideTitle,
      description: knowledgeGuideDescription,
      datePublished: '2026-07-28',
      dateModified: '2026-07-28',
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
        { '@type': 'ListItem', position: 3, name: knowledgeGuideTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines knowledge base guide</p>
    <h1>{knowledgeGuideTitle}</h1>
    <p className="lead">A tidy help article can still be wrong. This guide shows how a Philippine team can check the source, make a clear edit, send risky claims to the right owner, and leave a record another reviewer can follow.</p>

    <div className="answer-box" data-article-marker="ph-knowledge-base-20260728">
      <strong>The short answer</strong>
      <p>Start with one article group and one source folder. Give the Philippine specialist draft access, a list of preapproved edits, and named owners for product, policy, security, and legal questions. Review a mixed sample before the person can publish or take on more topics.</p>
    </div>

    <div className="article-body accounting-guide knowledge-base-guide">
      <p>Knowledge base work looks simple until the article and product disagree. Old screenshots survive, links move, feature names change, and a safe answer becomes a promise nobody approved. A writer cannot fix that with smoother wording alone.</p>
      <p>The first job is to make truth easy to find. Every article needs a source record, a person who owns the answer, and a clear line between an ordinary edit and a business decision.</p>

      <aside className="article-banner banner-one"><strong>Start with one article group.</strong><span>Use the <a href="/services/knowledge-base-maintenance">Philippines knowledge base maintenance page</a> to name the source folder, first queue, reviewer, and owner-only claims.</span></aside>

      <h2>Define a ready article</h2>
      <p>An article is ready for maintenance when the specialist can find its current source, intended reader, product or service owner, last checked date, and publishing path. Put those facts in the queue rather than asking someone to hunt through old messages.</p>
      <p>Mark each source as approved, background only, or expired. If two approved records disagree, stop the edit and send the conflict to the owner. The specialist should not pick whichever answer sounds better.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Knowledge base maintenance control and review table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Article step</th><th>Specialist may do</th><th>Pause when</th><th>Review evidence</th></tr></thead>
          <tbody>
            <tr><td>Source check</td><td>Open the named product note, policy, form, or approved reply</td><td>The source is missing, expired, private, or disputed</td><td>Source link, owner, checked date</td></tr>
            <tr><td>Draft edit</td><td>Correct headings, steps, links, labels, and approved wording</td><td>The change creates a new promise or removes a limit</td><td>Old text, new text, reason</td></tr>
            <tr><td>Owner review</td><td>Send the exact claim and evidence to the named owner</td><td>No owner can confirm the product, policy, or security answer</td><td>Question, decision, approver, date</td></tr>
            <tr><td>Publish and close</td><td>Apply the approved change and record the final page state</td><td>The live page differs from the approved draft</td><td>Page link, change note, final check</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table is a blank control sheet. Replace every row with the buyer's content system, sources, article types, approval limits, and restore steps. Include small changes such as link fixes because even a minor edit can send a reader to the wrong form.</p>

      <h2>Keep country figures in their proper place</h2>
      <p>The World Bank reports 52,204,133 people in the Philippine labor force in 2025, compared with 44,699,749 in 2021. Its modeled ILO series says services accounted for 59.548% of Philippine employment in 2025 and 56.810% in 2021. Those figures describe a national labor market, not the editing skill of one person.</p>
      <p>The World Bank internet-use series reports 67.263% of the Philippine population online in 2024 and 77.867% in 2023. The change is another reason to avoid using one country number as a hiring shortcut. Check the actual worker's source judgment, written work, device, connection, and backup plan.</p>

      <ServicesEmploymentChart />

      <aside className="article-banner banner-two"><strong>Make every claim traceable.</strong><span>Read the <a href="/blog/philippines-customer-onboarding-data-entry-control-guide">customer onboarding data guide</a> for another way to separate approved facts from missing or disputed records.</span></aside>

      <h2>Build a source record that a reviewer can use</h2>
      <p>A source record can be short. Save the source link or file, owner, effective date, article section, approved wording if needed, and next review date. Add a note when the source applies only to one product, location, customer type, or account state.</p>
      <p>Do not paste private customer details into a public article queue. Use a made-up example or remove names, account numbers, contact details, and private notes before the specialist sees it. Keep the original case in the buyer's protected system if it must support a decision.</p>

      <h2>Separate maintenance from product decisions</h2>
      <p>Routine maintenance follows an approved source. It may fix a broken link, match a renamed button, improve a heading, replace an old screenshot, or remove repeated text. A product decision changes what the company says people can do or expect.</p>
      <p>New eligibility rules, legal claims, security promises, policy exceptions, deadlines, and account actions belong with a named buyer owner. The specialist can prepare the question and draft, but should not turn a guess into published company policy.</p>

      <ArticleControlGraphic />

      <h2>Use headings that say what comes next</h2>
      <p>Readers scan help pages when they are stuck. W3C guidance for descriptive headings and labels explains that clear labels help users find information and understand relationships. Name the task or question instead of using empty labels such as overview, details, or more information.</p>
      <p>Keep one idea under each heading and use the same product words a reader sees on screen. If a button says Submit request, the article should not call it Send form unless the difference is explained. Check link text outside its paragraph so it still makes sense on its own.</p>

      <h2>Open publishing access slowly</h2>
      <p>A knowledge base may contain draft product notes, customer examples, contact details, hidden articles, and scripts that affect account access. The Philippine Data Privacy Act says a personal information controller remains accountable for information under its control, including information transferred to another party for processing. It also calls for reasonable organizational, physical, and technical safeguards.</p>
      <p>Start with a named account and draft rights for the first article group. Keep user administration, broad export, deletion, private collections, and sensitive publishing with buyer owners. Remove access when the assignment changes and record who checked it.</p>
      <blockquote className="expert-quote">"Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad," according to Kevin Stine, chief of NIST's Applied Cybersecurity Division.</blockquote>
      <p>NIST published that exact statement on February 26, 2024, when it announced Cybersecurity Framework 2.0. The useful lesson here is narrow: controls should match current people, systems, and risks. A copied checklist may miss hidden article groups, publishing keys, customer examples, and the buyer's real restore path.</p>

      <aside className="article-banner banner-three"><strong>Turn edits into a checked queue.</strong><span>Use <a href="/services/reporting-and-qa">Philippines reporting and QA support</a> to plan the sample, or <a href="/contact">send the first article list</a> when the source owners are clear.</span></aside>

      <h2>Review more than spelling</h2>
      <p>Spelling matters, but an article can read cleanly and still point to the wrong action. Check the title, audience, source, steps, links, screenshots, limits, owner note, and final page. Open every changed link rather than trusting that it looks familiar.</p>
      <p>Use a mixed sample after the first batch. Include a routine link repair, renamed control, old screenshot, disputed source, policy claim, and article that should remain unchanged. Record why an item failed and whether the source, template, or reviewer instruction needs repair.</p>

      <h2>Run a 30-day article test</h2>
      <p>During days 1 through 5, use one article group and review every draft before it moves. During days 6 through 15, add link checks, screenshots, and known source conflicts while a buyer owner answers the decision queue each day. Fix repeated questions in the source record instead of treating them as writer mistakes.</p>
      <p>During days 16 through 30, review published pages, missed approvals, stale sources, broken links, access, and restore notes. Ask whether another reviewer can retrace each material change without private context. Add another topic only after the first queue stays clear.</p>

      <h2>Questions for a provider call</h2>
      <p>Ask how candidates are tested on source conflicts, product words, headings, screenshots, private examples, approvals, and live page checks using made-up content. Ask who reviews the first batch and helps when the buyer changes a product or policy. A useful answer names the test, people, records, and exception path.</p>
      <p>Use one direct script: "Show me how your team handles a broken link, an old screenshot, and two source notes that disagree. Which edits may the specialist publish, who owns product and policy questions, and what record will our reviewer receive?" Save the answer beside the article map.</p>

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
