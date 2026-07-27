import { site } from '../../data';

export const customerQueueSlug = 'customer-service-outsourcing-philippines-queue-escalation-guide';
export const customerQueueTitle = 'Customer service outsourcing Philippines: a queue and escalation guide';
export const customerQueueDescription = 'Build a Philippines customer support queue with clear reply limits, escalation rules, access controls, and review evidence.';

const canonical = `https://outsourcedservice.com/blog/${customerQueueSlug}`;

const sources = [
  {
    name: 'World Bank: Philippines labor force, total',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.TOTL.IN?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. It reports 52,204,133 people in the Philippine labor force in 2025, compared with 44,699,749 in 2021.',
  },
  {
    name: 'World Bank: employment in services, Philippines',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10',
    note: 'World Bank API series using modeled ILO estimates. Services accounted for 59.548% of total Philippine employment in 2025 and 56.810% in 2021.',
  },
  {
    name: 'World Bank: individuals using the Internet, Philippines',
    url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=10',
    note: 'World Bank series published as a share of the population. The API reports 67.263% for 2024 and 77.867% for 2023; these national values do not measure a candidate, home connection, or support operation.',
  },
  {
    name: 'Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official statutory text dated August 15, 2012. It covers accountability, security safeguards, and duties when another party processes personal information for a controller.',
  },
  {
    name: 'NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation used in this guide and explains the framework focus on governance.',
  },
  {
    name: 'FTC: Data Breach Response, a guide for business',
    url: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business',
    note: 'Federal Trade Commission response guide for securing operations, preserving evidence, fixing vulnerabilities, and notifying affected parties after a breach.',
  },
] as const;

const faqs = [
  {
    question: 'What customer work should a Philippine support team handle first?',
    answer: 'Start with repeated questions that have an approved answer and a clear stop point. Keep refunds, legal threats, safety issues, account closure, and unusual promises with named buyer managers until the process is tested.',
  },
  {
    question: 'How many ticket types should be in the first queue?',
    answer: 'A useful first test uses three to five common ticket types and one known exception. The exact number matters less than having examples, labels, reply limits, and a reviewer for each type.',
  },
  {
    question: 'Should an outsourced agent see every customer record?',
    answer: 'Access should follow the assigned queue rather than the broad job title. Give each person a named account, open only needed fields and actions, and review access after role changes or departure.',
  },
  {
    question: 'How should a buyer check customer support quality?',
    answer: 'Read a balanced sample that includes routine replies, escalations, and reopened tickets. Record the reason for each return so the team can fix the reply guide or decision rule instead of only correcting one ticket.',
  },
] as const;

function ServiceEmploymentChart() {
  const bars = [
    { year: '2021', value: '56.810%', width: 398 },
    { year: '2022', value: '58.719%', width: 411 },
    { year: '2023', value: '59.019%', width: 413 },
    { year: '2024', value: '59.316%', width: 415 },
    { year: '2025', value: '59.548%', width: 417 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="service-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="service-chart-title service-chart-desc">
      <title id="service-chart-title">Philippine employment in services from 2021 through 2025</title>
      <desc id="service-chart-desc">Five horizontal bars show the service share of employment rising from 56.810 percent in 2021 to 59.548 percent in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">Service work is common. Role fit still needs proof.</text>
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
      <text x="36" y="406" fontSize="13" fill="#516174">Source: World Bank API, modeled ILO estimate. Labels show published values rounded to three decimals.</text>
    </svg>
    <figcaption><strong>Methods note:</strong> The chart uses the World Bank employment-in-services series for the Philippines. Each bar width equals the published percentage multiplied by seven, while labels round to three decimals. The series describes the national labor market, not remote work, English skill, support quality, or candidate availability.</figcaption>
  </figure>;
}

function EscalationGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="escalation-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 320" role="img" aria-labelledby="escalation-graphic-title escalation-graphic-desc">
      <title id="escalation-graphic-title">Four-stop customer support escalation path</title>
      <desc id="escalation-graphic-desc">A customer message moves through classification, an approved reply or pause, a named manager decision, and a recorded close.</desc>
      <rect width="820" height="320" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">A safe queue has a clear place to stop</text>
      {[
        ['1', 'Classify', 'Tag the issue'],
        ['2', 'Reply or pause', 'Use the limit'],
        ['3', 'Manager decides', 'Named owner'],
        ['4', 'Close and record', 'Save the reason'],
      ].map(([number, title, owner], index) => {
        const x = 35 + index * 195;
        return <g key={number}>
          <rect x={x} y="88" width="165" height="132" rx="16" fill={index === 2 ? '#b9f227' : '#ffffff'} />
          <circle cx={x + 28} cy="116" r="16" fill="#4e63f5" />
          <text x={x + 28} y="121" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{number}</text>
          <text x={x + 16} y="157" fontSize="16" fontWeight="700" fill="#17304a">{title}</text>
          <text x={x + 16} y="185" fontSize="13" fill="#516174">{owner}</text>
          {index < 3 && <text x={x + 176} y="158" fontSize="26" fill="#b9f227">›</text>}
        </g>;
      })}
      <text x="38" y="270" fontSize="14" fill="#dce6f0">If the rule is missing, pause the reply and send the facts to the named owner.</text>
    </svg>
    <figcaption>This is a planning model, not a claim about every support desk. The buyer should set the categories, response limits, manager list, record fields, and return-to-service rule for its own customers.</figcaption>
  </figure>;
}

export function CustomerQueueGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: customerQueueTitle,
      description: customerQueueDescription,
      datePublished: '2026-07-27',
      dateModified: '2026-07-27',
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
        { '@type': 'ListItem', position: 3, name: customerQueueTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines customer support guide</p>
    <h1>{customerQueueTitle}</h1>
    <p className="lead">A Philippine support team needs more than a folder of reply templates. It needs a small queue, clear stopping rules, a named manager, and a review record that helps the next shift.</p>

    <div className="answer-box" data-article-marker="ph-customer-queue-20260727">
      <strong>The short answer</strong>
      <p>Start with three to five common ticket types and one known exception. Let the team answer only within an approved limit, route sensitive decisions to named buyer managers, and read a mixed sample before adding more work or access.</p>
    </div>

    <div className="article-body accounting-guide customer-queue-guide">
      <p>Customer service gets messy when a broad job title replaces a real queue. An agent may know how to write a kind reply but still lack the authority to promise a refund, change an account, or answer a legal complaint. The role brief must show where a normal answer ends.</p>
      <p>Build the first lane around work that appears often and has a known finish. Give each issue a label, an approved action, a pause rule, and a manager. This makes the handoff usable on a quiet morning and during a busy shift.</p>

      <aside className="article-banner banner-one"><strong>Start with the first real queue.</strong><span>Use the <a href="/services/customer-support">Philippines customer support service guide</a> to list common questions and owner-only decisions.</span></aside>

      <h2>Turn the inbox into a small set of lanes</h2>
      <p>Read recent tickets before writing a job description. Group them by the action the agent must take, such as giving an order update, collecting a missing detail, fixing a profile field, or routing a complaint. Keep rare issues in a manager lane until enough examples exist.</p>
      <p>A label is useful only when two people would apply it the same way. Add one positive example and one near miss for each lane. If the issue could fit two labels, state which rule wins and where the agent should pause.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Customer support queue and escalation table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Issue lane</th><th>Agent may do</th><th>Pause and escalate when</th><th>Review evidence</th></tr></thead>
          <tbody>
            <tr><td>Order status</td><td>Check the approved system and share the recorded status</td><td>Dates conflict or a promise is not in the system</td><td>Ticket link, source checked, reply sent</td></tr>
            <tr><td>Missing details</td><td>Use an approved request and mark the needed field</td><td>The customer sends sensitive or unexpected information</td><td>Requested field, reply template, next review date</td></tr>
            <tr><td>Account update</td><td>Change allowed contact fields after the set identity check</td><td>Ownership, payment, permission, or deletion is involved</td><td>Identity step, old value, new value, agent</td></tr>
            <tr><td>Complaint</td><td>Acknowledge the issue and collect the facts</td><td>There is a legal threat, safety concern, media request, or policy exception</td><td>Exact words, attachments, manager, decision time</td></tr>
          </tbody>
        </table>
      </div>
      <p>The table is a starting format, not a ready-made policy. Replace each row with the buyer's real system, customer promise, and approval owner. Test the pause rule on old tickets before a new agent uses it live.</p>

      <h2>Use national figures as context, not a hiring promise</h2>
      <p>The World Bank reports 52,204,133 people in the Philippine labor force in 2025, compared with 44,699,749 in 2021. Its modeled ILO series also reports that services made up 59.548% of Philippine employment in 2025, up from 56.810% in 2021. These numbers describe a country, not the people in your applicant list.</p>
      <p>A separate World Bank series reports internet use at 67.263% of the Philippine population in 2024 and 77.867% in 2023. The change is another reason not to turn one national measure into a claim about home reliability. Check the candidate's actual work setting, backup connection, schedule, and tool test.</p>

      <ServiceEmploymentChart />

      <aside className="article-banner banner-two"><strong>Protect the handoff before adding volume.</strong><span>Read the <a href="/blog/outsourced-service-tasks-to-outsource">30-day Philippines handoff plan</a> and open only the tools needed for the first lanes.</span></aside>

      <h2>Write the stopping rules in plain language</h2>
      <p>Agents should not have to guess whether a reply crosses a line. Name the actions that always need buyer approval, including money movement, contract changes, account closure, safety issues, legal demands, unusual customer promises, and access changes. Name a backup manager for each shift.</p>
      <p>Write the escalation note as a short fact packet. It should include the customer request, the record checked, the reply already sent, the missing decision, and the time by which the agent needs help. A manager can act faster when the ticket does not arrive as a long chat thread.</p>

      <EscalationGraphic />

      <h2>Give access by lane, not by title</h2>
      <p>A support role can touch names, addresses, account history, and private messages. The Philippine Data Privacy Act says the personal information controller remains accountable for information under its control, including information transferred to another party for processing. It also calls for reasonable organizational, physical, and technical safeguards.</p>
      <p>Give each person a named login and the smallest useful permission set. Keep user administration, data exports, account deletion, payment changes, and other sensitive actions with named buyer owners. Review the access list when a lane changes and remove access as part of every departure.</p>
      <blockquote className="expert-quote">“Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad,” according to Kevin Stine, chief of NIST’s Applied Cybersecurity Division.</blockquote>
      <p>NIST published that statement on February 26, 2024, with Cybersecurity Framework 2.0. For a small support queue, the useful point is that controls should fit the people and systems in front of you. A copied permission sheet is weak if no one checks it after the work changes.</p>

      <h2>Review both routine and hard tickets</h2>
      <p>A quality check should include normal replies, paused tickets, reopened issues, and at least one manager decision. Read whether the agent used the right source, stayed inside the reply limit, wrote clearly, and left a useful note. Do not judge the queue only by speed or ticket count.</p>
      <p>When a reply is returned, record the reason in a short list. Common reasons may include wrong source, missing identity check, unclear writing, missed stop rule, or incomplete handoff. Fix the example or rule when the same reason appears more than once.</p>

      <aside className="article-banner banner-three"><strong>Turn the queue into a role plan.</strong><span>Review <a href="/services/reporting-and-qa">Philippines reporting and QA support</a> or <a href="/contact">send the first ticket list</a> when the lanes and owners are clear.</span></aside>

      <h2>Prepare for a customer data incident</h2>
      <p>The team needs a separate path for a lost device, wrong recipient, exposed password, suspicious login, or customer-data mistake. Tell agents to stop the risky action, preserve the message or system record, and contact the named security owner. Do not ask them to investigate outside their training or hide the error.</p>
      <p>The FTC's business breach guide tells organizations to secure operations, fix vulnerabilities, preserve evidence, and consider who must be notified. The exact legal duties depend on the event and the people affected. The queue should therefore name who contacts legal, security, the provider, and customers when needed.</p>

      <h2>Use a 30-day queue test</h2>
      <p>During days 1 through 5, use a small set of low-risk tickets and review every reply before or soon after sending. During days 6 through 15, add normal volume and one common exception. Keep a list of questions that repeat because they often reveal a missing example.</p>
      <p>During days 16 through 30, review quality reasons, response times, escalations, reopened issues, and access. Ask the agent which lane still forces a guess. Expand the work only after the buyer can read the records and see how each sensitive decision moved.</p>

      <h2>Questions for the provider call</h2>
      <p>Ask who screens for writing, judgment, and the actual tools in your queue. Ask who supports attendance, coaching, equipment, and backup, then request the names of the people who handle each item. A broad promise about support is not a responsibility map.</p>
      <p>Use one direct script: "Show me how a complaint moves from the first message to an approved reply, a manager decision, and a closed record. Which actions can the agent take, which come back to us, and what will the next shift be able to see?" A useful answer describes people, systems, and evidence.</p>

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
