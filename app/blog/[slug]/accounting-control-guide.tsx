import { site } from '../../data';

export const accountingGuideSlug = 'outsourced-accounting-services-philippines-control-guide';
export const accountingGuideTitle = 'Outsourced accounting services Philippines: a buyer control guide';
export const accountingGuideDescription = 'Plan a Philippines accounting support role with clear work limits, client-held approvals, careful access, and review evidence.';

const canonical = `https://outsourcedservice.com/blog/${accountingGuideSlug}`;

const sources = [
  {
    name: '1. World Bank Enterprise Surveys: Philippines 2023, management practices',
    url: 'https://www.enterprisesurveys.org/en/data/exploreeconomies/2023/philippines?view=table&subGroup=-1&topic=23&countries=All+Economies%2F%2FAll+Economies%2F%2F2023%2F%2F153%2F%2Fnull&subtopic=77&regions=East+Asia+%26+Pacific&IndicatorIds=203%2C204%2C205',
    note: 'Philippines 2023 data from interviews with 1,002 owners and top managers, conducted from April 2023 through February 2024. The table reports scores of 51.3 for management practices, 83.6 for action when a problem arose, and 49.3 for the number of performance indicators monitored.',
  },
  {
    name: '2. Republic Act No. 9298: Philippine Accountancy Act of 2004',
    url: 'https://lawphil.net/statutes/repacts/ra2004/ra_9298_2004.html',
    note: 'Official statutory text dated May 13, 2004. It sets the professional boundary for practicing accountancy and explains the default treatment of examination working papers.',
  },
  {
    name: '3. Republic Act No. 11232: Revised Corporation Code of the Philippines',
    url: 'https://lawphil.net/statutes/repacts/ra2019/ra_11232_2019.html',
    note: 'Official statutory text dated February 20, 2019. It places corporate powers, business conduct, and property control with the board, subject to the Code.',
  },
  {
    name: '4. Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official statutory text dated August 15, 2012. It requires reasonable organizational, physical, and technical safeguards, including when another party processes information for the controller.',
  },
  {
    name: '5. Republic Act No. 11976: Ease of Paying Taxes Act',
    url: 'https://lawphil.net/statutes/repacts/ra2024/ra_11976_2024.html',
    note: 'Official statutory text dated January 5, 2024. It states a five-year preservation period for books, subsidiary books, and other accounting records under the rule described in the Act.',
  },
  {
    name: '6. NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It explains the framework’s focus on governance and contains the exact Laurie E. Locascio quotation used in this guide.',
  },
  {
    name: '7. NIST SP 800-53 Rev. 5',
    url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
    note: 'NIST control catalog published in September 2020 and updated December 10, 2020. It covers account management, least privilege, audit logging, and review controls that buyers can adapt to their systems.',
  },
] as const;

const faqs = [
  {
    question: 'What accounting work can a Philippines support team prepare?',
    answer: 'A support team can prepare reconciliations, code routine items under written rules, organize source documents, update ledgers, and build draft close schedules. A named client reviewer should still approve unusual entries, filings, cash movement, policy choices, and final reports.',
  },
  {
    question: 'Does outsourcing remove the client’s legal responsibility?',
    answer: 'No. A provider can perform assigned work, but the company still needs its own officers, reviewers, privacy controls, record access, and approval rules. Local advice is needed when a task may count as regulated professional practice.',
  },
  {
    question: 'What should the buyer review each week?',
    answer: 'Review unreconciled items, changed vendor details, unusual journals, missing documents, access changes, and work returned for correction. The review should end with a short list of decisions, owners, and due dates.',
  },
  {
    question: 'Who should own the accounting files?',
    answer: 'The agreement should say who owns source files, system exports, schedules, and examination working papers. It should also explain how the client retrieves them during normal work and after the relationship ends.',
  },
] as const;

function ControlChart() {
  const bars = [
    { label: 'Action after a problem', value: 83.6, width: 501.6 },
    { label: 'Management practices', value: 51.3, width: 307.8 },
    { label: 'Indicators monitored', value: 49.3, width: 295.8 },
  ];
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="control-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 350" role="img" aria-labelledby="control-chart-title control-chart-desc">
      <title id="control-chart-title">Three management scores reported for Philippine firms</title>
      <desc id="control-chart-desc">Horizontal bars show 83.6 for action after a problem, 51.3 for management practices, and 49.3 for indicators monitored.</desc>
      <rect width="820" height="350" rx="24" fill="#f4f7ff" />
      <text x="36" y="45" fontSize="22" fontWeight="700" fill="#17304a">Philippines 2023 management scores</text>
      <text x="36" y="72" fontSize="14" fill="#516174">World Bank Enterprise Surveys, medium and large firms</text>
      {bars.map((bar, index) => {
        const y = 110 + index * 72;
        return <g key={bar.label}>
          <text x="36" y={y + 18} fontSize="15" fontWeight="700" fill="#17304a">{bar.label}</text>
          <rect x="225" y={y} width="520" height="28" rx="8" fill="#dbe2f2" />
          <rect x="225" y={y} width={bar.width} height="28" rx="8" fill={index === 0 ? '#4e63f5' : '#17304a'} />
          <text x="756" y={y + 20} fontSize="16" fontWeight="700" fill="#17304a">{bar.value}</text>
        </g>;
      })}
      <text x="36" y="326" fontSize="13" fill="#516174">Scores are shown as published. They are not a provider performance benchmark.</text>
    </svg>
    <figcaption><strong>Methods note:</strong> The three bars plot the World Bank table values as published for the Philippines 2023 survey. We multiplied each score by six only to set the bar width in the SVG; labels keep the original values, and no ranking or provider comparison was made.</figcaption>
  </figure>;
}

function ReviewLoopGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="review-loop-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 300" role="img" aria-labelledby="review-loop-title review-loop-desc">
      <title id="review-loop-title">Client-held accounting review loop</title>
      <desc id="review-loop-desc">A four-step loop moves from source records to preparation, client review, and approval or correction.</desc>
      <rect width="820" height="300" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">Keep the final check with the client</text>
      {[
        ['1', 'Source records', 'Client system'],
        ['2', 'Prepare', 'Philippine team'],
        ['3', 'Review', 'Named client owner'],
        ['4', 'Approve or return', 'Evidence saved'],
      ].map(([number, title, owner], index) => {
        const x = 35 + index * 195;
        return <g key={number}>
          <rect x={x} y="90" width="165" height="128" rx="16" fill={index === 2 ? '#b9f227' : '#ffffff'} />
          <circle cx={x + 28} cy="118" r="16" fill="#4e63f5" />
          <text x={x + 28} y="123" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{number}</text>
          <text x={x + 16} y="158" fontSize="16" fontWeight="700" fill="#17304a">{title}</text>
          <text x={x + 16} y="184" fontSize="13" fill="#516174">{owner}</text>
          {index < 3 && <text x={x + 176} y="157" fontSize="26" fill="#b9f227">›</text>}
        </g>;
      })}
      <text x="38" y="260" fontSize="14" fill="#dce6f0">Returned work goes back with a reason, a corrected example, and the same source record.</text>
    </svg>
    <figcaption>This graphic is a planning model. The buyer chooses the named reviewer, approval limits, and evidence needed for each account and system.</figcaption>
  </figure>;
}

export function AccountingControlGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: accountingGuideTitle,
      description: accountingGuideDescription,
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
        { '@type': 'ListItem', position: 3, name: accountingGuideTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines accounting support guide</p>
    <h1>{accountingGuideTitle}</h1>
    <p className="lead">A Philippine team can prepare a large share of the monthly accounting queue. The buyer still needs clear limits, named reviewers, controlled access, and records that can be checked later.</p>

    <div className="answer-box" data-article-marker="ph-accounting-control-2026">
      <strong>The short answer</strong>
      <p>Start with work that follows a written rule and leaves evidence. Keep cash movement, unusual journals, final filings, policy choices, and corporate approvals with named client owners until a qualified adviser confirms a different arrangement is proper.</p>
    </div>

    <div className="article-body accounting-guide">
      <p>Outsourced accounting support works best when the role is built around a queue, not a vague promise to “handle the books.” The team needs source records, a finish line, and a clear point where work comes back to the client. That structure matters whether the first tasks are bank reconciliations, invoice checks, document collection, or a draft month-end pack.</p>
      <p>Philippine law also creates boundaries that a buyer should put into the plan. The Philippine Accountancy Act controls who may practice accountancy and use the CPA title in the country. The Revised Corporation Code says the board controls corporate powers and business, while officers perform the duties set by the bylaws or board.</p>

      <aside className="article-banner banner-one"><strong>Planning a support role?</strong><span>Map the first queue with our <a href="/services/reporting-and-qa">reporting and QA support guide</a>, then name the person who signs off.</span></aside>

      <h2>Split preparation from approval</h2>
      <p>A clean scope says what the Philippine team prepares and what the client approves. The support team may collect source files, match transactions, update a ledger under written rules, prepare reconciliations, and build draft schedules. Client owners can then review unusual items, approve changes, authorize money movement, and accept the final close pack.</p>
      <p>This split protects both sides. The worker is not forced to guess at a tax, legal, or corporate decision, and the buyer can see where judgment entered the process. If a task may count as regulated professional practice, check the credentials required under Republic Act No. 9298 and get advice for the actual engagement.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Accounting task and approval table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Queue item</th><th>Philippine support team can prepare</th><th>Client should keep</th><th>Evidence to save</th></tr></thead>
          <tbody>
            <tr><td>Bank reconciliation</td><td>Match records, list missing items, draft reconciling entries</td><td>Approve unusual entries and unresolved differences</td><td>Statement, ledger link, difference list, reviewer sign-off</td></tr>
            <tr><td>Accounts payable</td><td>Check documents, code under written rules, build an approval list</td><td>Add vendors, change bank details, release money</td><td>Invoice, approved vendor record, change log, payment approval</td></tr>
            <tr><td>Month-end close</td><td>Run the checklist, prepare schedules, collect open questions</td><td>Approve estimates, policy choices, and final reports</td><td>Close checklist, source links, exception log, signed review</td></tr>
            <tr><td>Record retention</td><td>Organize files, label periods, test exports</td><td>Set the legal rule and approve destruction</td><td>Retention map, export test, owner, deletion approval</td></tr>
          </tbody>
        </table>
      </div>
      <p>Do not turn the “client should keep” column into a pile of email messages. Put each approval in the accounting system or a controlled register with the item, decision, person, and date. A reviewer should be able to trace the final number back to the source without asking the preparer to rebuild the story.</p>

      <h2>Use Philippine management data as a warning, not a sales claim</h2>
      <p>The World Bank Enterprise Surveys interviewed 1,002 Philippine business owners and top managers from April 2023 through February 2024. For medium and large firms, the published Philippines 2023 table shows a 51.3 management-practices score. It also shows 83.6 for action when a problem arose and 49.3 for the number of performance indicators monitored.</p>
      <p>Those figures do not measure accounting providers, and they do not prove that one hiring model is better. They do point to three useful questions for a buyer: Which indicators will we watch, what happens when an error appears, and who checks whether the fix held? A small accounting support role needs plain answers to all three.</p>

      <ControlChart />

      <aside className="article-banner banner-two"><strong>Need a safer first handoff?</strong><span>Use the <a href="/blog/outsourced-service-tasks-to-outsource">30-day Philippines handoff plan</a> before adding more systems or records.</span></aside>

      <h2>Build a review pack that shows the work</h2>
      <p>A useful review pack is small enough to read every week. Include the reconciliation status, unresolved differences, changed master data, unusual journals, missing documents, and items returned for correction. Each line should point to its source and name the person who owns the next decision.</p>
      <p>Set a check for both completeness and accuracy. A finished reconciliation should cover the full account and also survive a sample review of the supporting items. When something is wrong, record the reason, correct the example, and check nearby work that used the same rule.</p>

      <ReviewLoopGraphic />

      <h2>Control access to money and personal data</h2>
      <p>Accounting systems often hold bank details, employee information, customer records, and tax documents. The Philippine Data Privacy Act says a personal information controller must use reasonable organizational, physical, and technical safeguards. It also says the controller must ensure that third parties processing information on its behalf use the required security measures.</p>
      <p>Give every worker a named account and only the permissions needed for the assigned queue. Keep vendor creation, bank-detail changes, user administration, and money release separate from routine preparation. Review access after the first week, after any role change, and when the relationship ends.</p>
      <blockquote className="expert-quote">“The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats,” said Under Secretary of Commerce for Standards and Technology and NIST Director Laurie E. Locascio. “CSF 2.0, which builds on previous versions, is not just about one document. It is about a suite of resources that can be customized and used individually or in combination over time as an organization’s cybersecurity needs change and its capabilities evolve.”</blockquote>
      <p>NIST published that statement on February 26, 2024. For this role, the practical point is that a copied checklist is not enough. The client should choose controls that fit the systems, review them as access changes, and keep evidence that the controls were used.</p>

      <h2>Write file ownership and retention into the agreement</h2>
      <p>Record ownership can become painful at the end of an engagement. Republic Act No. 9298 says examination working papers made by a CPA and staff are confidential and privileged and remain the CPA’s property unless a written agreement says otherwise, apart from reports submitted to the client. A buyer should therefore define source-file ownership, export rights, working-paper access, and handover steps before work begins.</p>
      <p>Republic Act No. 11976, dated January 5, 2024, says covered books, subsidiary books, and other accounting records must be preserved for five years under the timing rule stated in the Act. The client needs a retrievable copy throughout that period. Test an export during onboarding instead of discovering at exit that the records depend on one provider login.</p>

      <aside className="article-banner banner-three"><strong>Turn the scope into a real role.</strong><span>Review the <a href="/services/operations-support">Philippines operations support page</a> or <a href="/contact">send the first task list</a> for a role plan.</span></aside>

      <h2>A 30-day control setup</h2>
      <p>During days 1 through 3, choose one account or queue and mark every client-held approval. During days 4 through 10, run a small live sample with daily review and named user accounts. Save the source, preparer, reviewer, correction reason, and final approval for each checked item.</p>
      <p>During days 11 through 20, test normal volume and one common exception. During days 21 through 30, review access, export the records, read the exception log, and decide whether the work is ready to expand. Add another queue only when the first one can be checked without private knowledge from the preparer.</p>

      <h2>Questions to put in the provider call</h2>
      <p>Ask who performs the work, which credentials they hold, and who checks it before it reaches you. Ask how vendor changes, unusual journals, missing records, and access requests are handled. Then ask for a sample review pack with private details removed, so you can see whether the method leaves useful evidence.</p>
      <p>Use one direct script: “Show me how a bank difference moves from the source record to the preparer, reviewer, and client decision. Which actions can your team take, which actions come back to us, and what record will we have after the issue is closed?” The answer should describe people, systems, and evidence rather than a broad promise.</p>

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
