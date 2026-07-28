import { site } from '../../data';

export const orderControlSlug = 'outsourced-order-processing-philippines-control-guide';
export const orderControlTitle = 'Outsourced order processing Philippines: a control and exception guide';
export const orderControlDescription = 'Plan a Philippines order processing lane with clear checks, exception rules, safe access, and records the buyer can review.';

const canonical = `https://outsourcedservice.com/blog/${orderControlSlug}`;

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
    note: 'World Bank population series. The API reports 67.263% for 2024 and 77.867% for 2023; neither figure measures a worker, home connection, or order operation.',
  },
  {
    name: 'Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official statutory text dated August 15, 2012. It covers controller accountability and safeguards when another party processes personal information.',
  },
  {
    name: 'NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation used in this guide.',
  },
  {
    name: 'FTC: Data Breach Response, a guide for business',
    url: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business',
    note: 'Federal Trade Commission guidance for securing operations, preserving evidence, fixing vulnerabilities, and deciding whom to notify after a breach.',
  },
] as const;

const faqs = [
  {
    question: 'What order work should a Philippine team handle first?',
    answer: 'Start with orders that follow a known path and can be checked against a source record. Keep unusual discounts, payment changes, address disputes, large replacements, and policy exceptions with named buyer managers until the lane has been tested.',
  },
  {
    question: 'How should the buyer check order accuracy?',
    answer: 'Check the order against its source, then confirm the item, quantity, customer details, status, and handoff note. Include normal orders and exceptions in the sample because a clean routine queue can hide weak judgment at the edges.',
  },
  {
    question: 'Should an outsourced processor be allowed to change every field?',
    answer: 'No. Access should follow the assigned task, and sensitive actions should stay with named buyer owners. Use individual accounts, limited permissions, and a record of who changed what.',
  },
  {
    question: 'What belongs in an order exception note?',
    answer: 'Record the order number, source checked, mismatch found, action already taken, missing decision, and named owner. Add a due time so the issue does not sit between shifts.',
  },
] as const;

function ServiceWorkChart() {
  const bars = [
    { year: '2021', value: '56.810%', width: 398 },
    { year: '2022', value: '58.719%', width: 411 },
    { year: '2023', value: '59.019%', width: 413 },
    { year: '2024', value: '59.316%', width: 415 },
    { year: '2025', value: '59.548%', width: 417 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="order-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="order-chart-title order-chart-desc">
      <title id="order-chart-title">Philippine employment in services from 2021 through 2025</title>
      <desc id="order-chart-desc">Five horizontal bars show services at 56.810 percent of Philippine employment in 2021 and 59.548 percent in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">National context is not a work sample</text>
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
    <figcaption><strong>Methods note:</strong> Each bar uses the World Bank employment-in-services value for the Philippines and a width equal to the published share multiplied by seven. The series describes the national labor market, not remote-work supply, order accuracy, English skill, software knowledge, or provider quality.</figcaption>
  </figure>;
}

function ExceptionPathGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="order-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 330" role="img" aria-labelledby="order-graphic-title order-graphic-desc">
      <title id="order-graphic-title">Four-step order exception path</title>
      <desc id="order-graphic-desc">An order moves from source check to normal entry or pause, then to a named owner decision and a recorded close.</desc>
      <rect width="820" height="330" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">A mismatch needs a path, not a private guess</text>
      {[
        ['1', 'Check source', 'Find the record'],
        ['2', 'Enter or pause', 'Follow the rule'],
        ['3', 'Owner decides', 'Named approver'],
        ['4', 'Close and log', 'Save the reason'],
      ].map(([number, title, note], index) => {
        const x = 35 + index * 195;
        return <g key={number}>
          <rect x={x} y="88" width="165" height="136" rx="16" fill={index === 2 ? '#b9f227' : '#ffffff'} />
          <circle cx={x + 28} cy="116" r="16" fill="#4e63f5" />
          <text x={x + 28} y="121" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{number}</text>
          <text x={x + 16} y="157" fontSize="16" fontWeight="700" fill="#17304a">{title}</text>
          <text x={x + 16} y="187" fontSize="13" fill="#516174">{note}</text>
          {index < 3 && <text x={x + 176} y="162" fontSize="26" fill="#b9f227">›</text>}
        </g>;
      })}
      <text x="38" y="286" fontSize="14" fill="#dce6f0">The buyer writes the rules and names the people who may approve each exception.</text>
    </svg>
    <figcaption>This is a planning graphic, not a claim about every order desk. The buyer should replace each box with its own source system, pause rules, approval owners, record fields, and return-to-queue steps.</figcaption>
  </figure>;
}

export function OrderControlGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: orderControlTitle,
      description: orderControlDescription,
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
        { '@type': 'ListItem', position: 3, name: orderControlTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines order operations guide</p>
    <h1>{orderControlTitle}</h1>
    <p className="lead">Order processing looks simple until a record is missing, an address changes, or two systems disagree. This guide shows how to build a Philippine order lane that handles normal work and stops safely at exceptions.</p>

    <div className="answer-box" data-article-marker="ph-order-control-20260728">
      <strong>The short answer</strong>
      <p>Start with one order source and a short list of allowed actions. Check every order at first, write a pause rule for common mismatches, and keep sensitive changes with named buyer owners. Add volume only after the record shows who entered, checked, paused, approved, and closed the work.</p>
    </div>

    <div className="article-body accounting-guide order-control-guide">
      <p>An order desk can fail quietly. A wrong item, old address, duplicate record, or missing note may look small in one row, then turn into a customer complaint or hours of cleanup. The first role needs more than a request to process orders accurately.</p>
      <p>Give the Philippine team a real lane with a source, finish line, pause rule, and owner. Use recent orders to write it because old examples expose the odd cases that a neat process map misses. Keep the first version small enough for one buyer manager to read each day.</p>

      <aside className="article-banner banner-one"><strong>Start with the source record.</strong><span>Use the <a href="/services/operations-support">Philippines operations support guide</a> to name the first queue, tools, and owner-only decisions.</span></aside>

      <h2>Map one order from request to close</h2>
      <p>Pick a normal order and write down every system it touches. Name where the request begins, which details the processor copies or checks, what proves that entry is complete, and which team receives it next. A screenshot alone is weak if it hides the field names and source.</p>
      <p>Then repeat the map with a difficult order. Use one with a missing item code, changed address, duplicate customer, unavailable product, or conflicting note. Write the exact point where the processor must stop rather than deciding which system seems more believable.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Order processing control and exception table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Order check</th><th>Processor may do</th><th>Pause when</th><th>Review evidence</th></tr></thead>
          <tbody>
            <tr><td>Customer details</td><td>Copy approved fields from the named source</td><td>Name, address, or account ownership conflicts</td><td>Order number, source link, fields checked</td></tr>
            <tr><td>Items and quantity</td><td>Enter the recorded item code and count</td><td>The code is missing, retired, or different across systems</td><td>Source line, entered line, mismatch note</td></tr>
            <tr><td>Order status</td><td>Move the order after the known event</td><td>The event is missing or the next step is blocked</td><td>Old status, new status, event record, time</td></tr>
            <tr><td>Exception close</td><td>Apply an approved correction after a decision</td><td>The change affects money, policy, access, or a customer promise</td><td>Approver, decision, change made, final check</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table is a blank control pattern, not a ready policy. Replace its words with the buyer's real systems and promises, then test each pause rule on old orders. If two reviewers reach different answers, the rule still needs work.</p>

      <h2>Read Philippine figures as context only</h2>
      <p>The World Bank reports 52,204,133 people in the Philippine labor force in 2025, compared with 44,699,749 in 2021. Its modeled ILO series reports that services made up 59.548% of Philippine employment in 2025 and 56.810% in 2021. These national figures do not count people ready for a specific order role.</p>
      <p>The World Bank also reports internet use at 67.263% of the Philippine population in 2024 and 77.867% in 2023. That published change shows why one country figure should never stand in for a worker's actual setup. Check the person's device, connection, backup plan, schedule, and skill in the buyer's tools.</p>

      <ServiceWorkChart />

      <aside className="article-banner banner-two"><strong>Test the handoff before adding orders.</strong><span>Read the <a href="/blog/outsourced-service-tasks-to-outsource">30-day Philippines handoff plan</a> and keep the first tool permissions narrow.</span></aside>

      <h2>Separate normal work from exceptions</h2>
      <p>A normal order follows the source without asking the processor to invent a missing fact. An exception has a conflict, missing record, unusual request, or decision outside the role. Put both definitions at the top of the work guide so a busy shift does not blur them.</p>
      <p>Give every common exception a short label and named owner. A useful note says what record was checked, what failed, what has already happened, which decision is missing, and when someone must respond. The next person should not need to read a long chat thread to understand the stop.</p>

      <ExceptionPathGraphic />

      <h2>Keep sensitive changes with named owners</h2>
      <p>Order records may hold names, addresses, contact details, purchase history, and account notes. The Philippine Data Privacy Act says the personal information controller remains accountable for information under its control, including information transferred to another party for processing. It also calls for reasonable organizational, physical, and technical safeguards.</p>
      <p>Give each processor a named account and only the fields needed for the assigned lane. Keep user administration, full exports, deletion, payment changes, unusual credits, and broad customer-record access with named buyer owners. Review access when the queue changes and remove it as part of every departure.</p>
      <blockquote className="expert-quote">“Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad,” according to Kevin Stine, chief of NIST’s Applied Cybersecurity Division.</blockquote>
      <p>NIST published that exact statement on February 26, 2024, with Cybersecurity Framework 2.0. The practical point for an order desk is that controls must fit the real users and systems. A copied access sheet does little if nobody checks it after the lane changes.</p>

      <h2>Check the records, not just the order count</h2>
      <p>Start by checking every completed order during the first few days. Once the steps are steady, use a mixed sample that includes normal orders, paused work, corrected records, and at least one manager decision. Compare each item with the source rather than trusting a clean-looking queue.</p>
      <p>Record why work comes back. Useful reason labels include wrong source, missing field, wrong item, duplicate entry, missed stop rule, weak note, and unrecorded approval. If the same reason appears twice, fix the example or rule before telling the processor to move faster.</p>

      <aside className="article-banner banner-three"><strong>Turn the queue into a checked role.</strong><span>Review <a href="/services/reporting-and-qa">Philippines reporting and QA support</a> or <a href="/contact">send the first order list</a> once the pause rules are clear.</span></aside>

      <h2>Plan for mistakes and data incidents</h2>
      <p>The lane needs a separate path for an order sent to the wrong person, an exposed password, a suspicious login, a lost device, or private data placed in the wrong record. Tell the processor to stop the risky action, preserve the message or system evidence, and contact the named security owner. Do not ask an untrained worker to hide the mistake or investigate beyond the written role.</p>
      <p>The FTC's breach response guide tells businesses to secure operations, fix vulnerabilities, preserve evidence, and decide who must be notified. The legal duties depend on the event and affected people, so the order guide should name the buyer contacts for security, legal review, the service provider, and customer communication. Test that contact path before an incident.</p>

      <h2>Run a 30-day order lane test</h2>
      <p>During days 1 through 5, use low-risk orders and check every completed record. During days 6 through 15, add normal volume and two known exception types. Keep a list of repeated questions because each one may point to a missing source or rule.</p>
      <p>During days 16 through 30, review return reasons, blocked work, owner decisions, access, and handoff notes. Ask the processor which order still forces a guess. Add new order types only when the current lane leaves a readable record from request to close.</p>

      <h2>Questions for a provider call</h2>
      <p>Ask who tests candidates on the exact systems and fields in the order map. Ask who checks early work, supports attendance and equipment, and helps when the queue needs backup. Request names and records rather than a broad promise about accuracy.</p>
      <p>Use one plain script: "Show me how a normal order and a conflicting order move through your team. Which fields can the processor change, where must they pause, who approves the exception, and what record will our manager see?" A useful answer names the source, actions, owners, and evidence.</p>

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
