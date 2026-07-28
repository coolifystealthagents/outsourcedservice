import { site } from '../../data';

export const onboardingDataSlug = 'philippines-customer-onboarding-data-entry-control-guide';
export const onboardingDataTitle = 'Philippines customer onboarding data entry: a control and review guide';
export const onboardingDataDescription = 'Build a Philippines customer onboarding data lane with source checks, field rules, safe access, review samples, and clear exception owners.';

const canonical = `https://outsourcedservice.com/blog/${onboardingDataSlug}`;

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
    note: 'World Bank population series. It reports 67.263% for 2024 and 77.867% for 2023; the measure does not test a worker or home connection.',
  },
  {
    name: 'Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official Philippine statutory text dated August 15, 2012. It covers accountability and safeguards for personal information processing.',
  },
  {
    name: 'NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation in this guide.',
  },
  {
    name: 'FTC: Start with Security, a guide for business',
    url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business',
    note: 'Federal Trade Commission guidance on collecting needed data, controlling access, authentication, and secure storage.',
  },
] as const;

const faqs = [
  {
    question: 'What customer onboarding work can a Philippine team handle first?',
    answer: 'Start with repeated checks such as confirming required fields, copying approved details, naming missing documents, and preparing a manager review queue. Keep identity disputes, account ownership changes, unusual access, legal questions, and final approvals with named buyer owners.',
  },
  {
    question: 'How should a buyer check data entry quality?',
    answer: 'Compare each sampled record with its named source, not with another copied field. Include complete records, returned records, duplicates, and exceptions so the review tests both careful entry and safe stopping.',
  },
  {
    question: 'Should the onboarding team see every customer record?',
    answer: 'Access should follow the assigned queue and fields. Use named accounts, narrow permissions, and a removal step when the role, customer, or worker changes.',
  },
  {
    question: 'What should happen when two sources disagree?',
    answer: 'The worker should pause the affected field, save both source references, and send a short exception note to the named owner. The owner decides which source wins and the record should keep that decision for later review.',
  },
] as const;

function ServicesContextChart() {
  const bars = [
    { year: '2021', value: '56.810%', width: 398 },
    { year: '2022', value: '58.719%', width: 411 },
    { year: '2023', value: '59.019%', width: 413 },
    { year: '2024', value: '59.316%', width: 415 },
    { year: '2025', value: '59.548%', width: 417 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="onboarding-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="onboarding-chart-title onboarding-chart-desc">
      <title id="onboarding-chart-title">Philippine employment in services from 2021 through 2025</title>
      <desc id="onboarding-chart-desc">Five bars show services at 56.810 percent of Philippine employment in 2021 and 59.548 percent in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">Country context cannot approve a worker</text>
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
    <figcaption><strong>Methods note:</strong> Each bar uses the World Bank employment-in-services value for the Philippines and a width equal to the published share multiplied by seven. The series describes the national labor market, not data-entry accuracy, remote-work supply, identity-check skill, software knowledge, or provider quality.</figcaption>
  </figure>;
}

function RecordReviewGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="onboarding-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 350" role="img" aria-labelledby="onboarding-graphic-title onboarding-graphic-desc">
      <title id="onboarding-graphic-title">Customer onboarding record review path</title>
      <desc id="onboarding-graphic-desc">A four-step path moves from source capture to field entry, exception review, and approved close with an audit note.</desc>
      <rect width="820" height="350" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">A record is ready when another person can retrace it</text>
      {[
        ['1', 'Capture source', 'Link the evidence'],
        ['2', 'Enter fields', 'Follow field rules'],
        ['3', 'Review conflict', 'Named owner'],
        ['4', 'Close and log', 'Save the decision'],
      ].map(([number, title, note], index) => {
        const x = 35 + index * 195;
        return <g key={number}>
          <rect x={x} y="92" width="165" height="142" rx="16" fill={index === 2 ? '#b9f227' : '#ffffff'} />
          <circle cx={x + 28} cy="120" r="16" fill="#4e63f5" />
          <text x={x + 28} y="125" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{number}</text>
          <text x={x + 16} y="162" fontSize="16" fontWeight="700" fill="#17304a">{title}</text>
          <text x={x + 16} y="192" fontSize="13" fill="#516174">{note}</text>
          {index < 3 && <text x={x + 176} y="168" fontSize="26" fill="#b9f227">›</text>}
        </g>;
      })}
      <text x="38" y="294" fontSize="14" fill="#dce6f0">The buyer names the source, field rules, exception owners, and proof needed to close a record.</text>
      <text x="38" y="320" fontSize="13" fill="#aebfd0">Planning graphic: replace every label with the buyer's real systems and approval names.</text>
    </svg>
    <figcaption>This graphic is a control pattern, not a claim that all onboarding systems use four steps. The buyer should map its real form, CRM, document store, approval queue, and retention rules before work begins.</figcaption>
  </figure>;
}

export function CustomerOnboardingDataGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: onboardingDataTitle,
      description: onboardingDataDescription,
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
        { '@type': 'ListItem', position: 3, name: onboardingDataTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines customer onboarding guide</p>
    <h1>{onboardingDataTitle}</h1>
    <p className="lead">Customer onboarding data can look tidy while the source, approval, or exception is missing. This guide shows how to give a Philippine team a clear entry lane that a buyer can check without opening every record or decision.</p>

    <div className="answer-box" data-article-marker="ph-onboarding-data-20260728">
      <strong>The short answer</strong>
      <p>Choose one onboarding record and name the source for every required field. Let the Philippine team enter only approved facts, pause conflicts, and send exceptions to named buyer owners. Review a mixed sample against the original sources before the queue expands.</p>
    </div>

    <div className="article-body accounting-guide onboarding-data-guide">
      <p>A new customer record may pull details from a form, email, contract, identity document, meeting note, and sales system. Copying those details is only part of the job. The team also needs to know which source wins, what should stay blank, and who may approve a change.</p>
      <p>Start with one record type rather than a broad request to handle onboarding. Write a field list, source list, stop list, and close rule that fit the buyer's own tools. A small lane is easier to test and easier to repair when the first real exception appears.</p>

      <aside className="article-banner banner-one"><strong>Begin with one customer record.</strong><span>Use the <a href="/services/admin-support">Philippines admin support page</a> to list the forms, fields, documents, and owner-only decisions.</span></aside>

      <h2>Define ready before anyone enters data</h2>
      <p>A record is ready when the required source material has arrived and the worker can tell what belongs in each field. Put required fields in a short checklist beside the entry screen. Do not make the worker hunt through chat to learn whether a blank value is allowed.</p>
      <p>Name the source beside each important field. A legal business name may come from one approved document, while a contact preference may come from the customer's form. If the buyer accepts several sources, write their order and the conflict rule rather than leaving the choice to memory.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Customer onboarding field control and review table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Record area</th><th>Entry rule</th><th>Pause when</th><th>Review evidence</th></tr></thead>
          <tbody>
            <tr><td>Customer identity</td><td>Copy the approved name and reference from the named source</td><td>Names, owners, or identifiers conflict</td><td>Source link, field checked, worker note</td></tr>
            <tr><td>Contact details</td><td>Enter the submitted channel and consent status exactly as recorded</td><td>The address is shared, incomplete, or disputed</td><td>Submission time, source, entered value</td></tr>
            <tr><td>Required documents</td><td>Mark only documents that are present and readable</td><td>A file is missing, expired, damaged, or unrelated</td><td>File name, date checked, missing-item note</td></tr>
            <tr><td>Account setup</td><td>Prepare allowed fields and route activation to the named owner</td><td>Access, identity, policy, or approval is unclear</td><td>Approver, decision time, final record link</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table is a blank control sheet, not a finished policy. Replace every row with the buyer's fields, sources, approval names, and retention rules. Test it on recent records that were clean, incomplete, duplicated, and corrected.</p>

      <h2>Keep country figures in their proper place</h2>
      <p>The World Bank reports 52,204,133 people in the Philippine labor force in 2025, compared with 44,699,749 in 2021. Its modeled ILO series reports that services made up 59.548% of Philippine employment in 2025 and 56.810% in 2021. These dated national figures describe a country, not the readiness of one applicant or onboarding team.</p>
      <p>The World Bank also reports internet use at 67.263% of the Philippine population in 2024 and 77.867% in 2023. That measure does not test a person's connection, backup power, device, privacy, or ability to use the buyer's software. Check those facts with the actual candidate and work setup.</p>

      <ServicesContextChart />

      <aside className="article-banner banner-two"><strong>Check the source before the screen.</strong><span>Read the <a href="/blog/outsourced-order-processing-philippines-control-guide">order processing control guide</a> for a second example of source checks and pause rules.</span></aside>

      <h2>Write field rules that survive a busy day</h2>
      <p>A field rule should tell the worker what to copy, what format to use, and what not to infer. For example, a worker may enter a submitted phone number but should not guess a missing country code from the customer's address. Small guesses can make a record look complete while making it less trustworthy.</p>
      <p>Use examples from the buyer's own records. Show one accepted value, one corrected value, and one item that stayed blank while a manager decided. Add the reason for each result so the worker learns the rule rather than copying the surface pattern.</p>

      <h2>Separate missing data from conflicting data</h2>
      <p>Missing data has no approved value in the named source. Conflicting data has two or more values that cannot both be used. The worker should label these cases differently because they may need different owners and different customer messages.</p>
      <p>A useful exception note is short and complete. It names the record, affected field, sources checked, values found, action already taken, owner needed, and response time. The next person should be able to decide without reopening the entire conversation.</p>

      <RecordReviewGraphic />

      <h2>Protect personal information during the handoff</h2>
      <p>Onboarding records may include names, addresses, contact details, identification files, account notes, and private business information. The Philippine Data Privacy Act says a personal information controller remains accountable for information under its control, including information transferred to another party for processing. It also calls for reasonable organizational, physical, and technical safeguards.</p>
      <p>Give each worker a named account and only the records and fields needed for the queue. Keep bulk exports, account administration, deletion, identity disputes, broad search, and final activation with named buyer owners. Remove access when the assignment ends or the role no longer needs it.</p>
      <blockquote className="expert-quote">“Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad,” according to Kevin Stine, chief of NIST’s Applied Cybersecurity Division.</blockquote>
      <p>NIST published that exact statement on February 26, 2024, with Cybersecurity Framework 2.0. The useful lesson here is simple: controls need to fit the people and systems that use them. A borrowed checklist can miss the buyer's real forms, account roles, and exception paths.</p>

      <h2>Collect less and open less</h2>
      <p>The FTC's Start with Security guide tells businesses to begin with security, control access sensibly, and require secure passwords and authentication. Apply that idea before a Philippine onboarding role begins. Remove fields the business does not need and avoid copying private files into extra folders for convenience.</p>
      <p>Use a password manager and multifactor authentication when the buyer's tools support them. Do not share one owner login across the team. Named accounts make it easier to review changes, close access, and investigate a mistake without blaming everyone.</p>

      <aside className="article-banner banner-three"><strong>Turn entries into a reviewable queue.</strong><span>Use <a href="/services/reporting-and-qa">Philippines reporting and QA support</a> to plan the sample, or <a href="/contact">send the first field list</a> when the buyer owners are named.</span></aside>

      <h2>Review a mixed sample against original sources</h2>
      <p>Check every record during the first small batch. Once the field rules are steady, use a mixed sample that includes complete records, missing items, conflicts, duplicates, corrections, and manager decisions. A sample of easy records alone can hide the places where judgment leaks into data entry.</p>
      <p>Compare each selected field with the original source. Do not compare one copied system with another copied system and call that proof. Record the error reason, correction, owner, and rule change so the same problem is less likely to return.</p>

      <h2>Run a 30-day onboarding data test</h2>
      <p>During days 1 through 5, use a small batch and check every record against its source. During days 6 through 15, add normal volume plus known missing and conflicting cases. Keep daily notes on questions that appear more than once.</p>
      <p>During days 16 through 30, review return reasons, manager waits, access, and closed exceptions. Ask which field still forces a guess and which owner still takes too long to answer. Expand the queue only when another reviewer can retrace the record without a private explanation.</p>

      <h2>Questions for a provider call</h2>
      <p>Ask how candidates are tested on source comparison, careful entry, and exception notes using sample records that do not contain real customer data. Ask who checks the first batch, supports attendance and equipment, and helps when a field rule changes. A useful answer names people, checks, and records.</p>
      <p>Use one plain script: “Show me how your team enters a complete record and stops on a conflicting one. Which source controls each field, what access does the worker receive, who decides an exception, and what evidence will our reviewer see?” Save the answer beside the field map.</p>

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
