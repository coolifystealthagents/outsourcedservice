import { site } from '../../data';

export const schedulingGuideSlug = 'philippines-appointment-scheduling-control-guide';
export const schedulingGuideTitle = 'Philippines appointment scheduling: a calendar control and confirmation guide';
export const schedulingGuideDescription = 'Plan a Philippines appointment scheduling lane with calendar rules, confirmation checks, safe access, and named owners for exceptions.';

const canonical = `https://outsourcedservice.com/blog/${schedulingGuideSlug}`;

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
    note: 'World Bank population series. It reports 67.263% for 2024 and 77.867% for 2023; it does not test a worker, device, or home connection.',
  },
  {
    name: 'Republic Act No. 10173: Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Official Philippine statutory text dated August 15, 2012. It addresses accountability and safeguards for personal information processing.',
  },
  {
    name: 'NIST releases Cybersecurity Framework 2.0',
    url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    note: 'NIST announcement dated February 26, 2024. It contains the exact Kevin Stine quotation used below.',
  },
  {
    name: 'CISA: Use strong passwords',
    url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    note: 'CISA guidance on long, random, unique passwords and password managers for business accounts.',
  },
] as const;

const faqs = [
  {
    question: 'What appointment work can a Philippine team handle first?',
    answer: 'Start with requests that follow a written calendar rule, such as offering approved times, sending reminders, and recording responses. Keep unusual commitments, sensitive meetings, travel changes, and policy exceptions with the named buyer owner.',
  },
  {
    question: 'Should a scheduler control the whole calendar?',
    answer: 'Start with the calendars, event types, and permissions needed for the first queue. Keep private events, broad sharing, account administration, and final exception decisions outside that access unless the role truly needs them.',
  },
  {
    question: 'How should the buyer check scheduling quality?',
    answer: 'Review a mixed sample against the request, calendar rule, invitation, and final status. Include clean bookings, declines, time-zone questions, reschedules, cancellations, and items sent to a manager.',
  },
  {
    question: 'What happens when a request breaks the rule?',
    answer: 'Pause the booking and send a short note with the request, conflict, options already checked, and owner needed. The owner makes the decision, and the scheduler saves that answer beside the event so it can be checked later.',
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
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="scheduling-chart-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full chart</span>
    <svg className="evidence-chart" viewBox="0 0 820 430" role="img" aria-labelledby="scheduling-chart-title scheduling-chart-desc">
      <title id="scheduling-chart-title">Philippine employment in services from 2021 through 2025</title>
      <desc id="scheduling-chart-desc">Five bars show services at 56.810 percent of Philippine employment in 2021 and 59.548 percent in 2025.</desc>
      <rect width="820" height="430" rx="24" fill="#f4f7ff" />
      <text x="36" y="46" fontSize="22" fontWeight="700" fill="#17304a">Country context is not a scheduling test</text>
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
    <figcaption><strong>Methods note:</strong> Each bar uses the World Bank employment-in-services value for the Philippines and a width equal to the published share multiplied by seven. The series describes the national labor market, not calendar skill, written English, time-zone accuracy, equipment, internet reliability, or provider quality.</figcaption>
  </figure>;
}

function CalendarDecisionGraphic() {
  return <figure className="article-visual article-scroll" tabIndex={0} aria-labelledby="scheduling-graphic-title">
    <span className="scroll-cue">Swipe or use arrow keys to see the full graphic</span>
    <svg className="review-graphic" viewBox="0 0 820 370" role="img" aria-labelledby="scheduling-graphic-title scheduling-graphic-desc">
      <title id="scheduling-graphic-title">Appointment request control path</title>
      <desc id="scheduling-graphic-desc">A four-step path moves from request capture to rule check, owner decision, and confirmed calendar record.</desc>
      <rect width="820" height="370" rx="24" fill="#17304a" />
      <text x="38" y="46" fontSize="22" fontWeight="700" fill="#ffffff">A booking is done when the calendar and people agree</text>
      {[
        ['1', 'Capture request', 'Name the source'],
        ['2', 'Check the rule', 'Time, length, buffer'],
        ['3', 'Route exception', 'Named buyer owner'],
        ['4', 'Confirm and log', 'One final status'],
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
      <text x="38" y="304" fontSize="14" fill="#dce6f0">The buyer owns availability rules, sensitive meeting limits, and every exception decision.</text>
      <text x="38" y="332" fontSize="13" fill="#aebfd0">Planning graphic: replace the labels with the buyer's real calendars, event types, and owners.</text>
    </svg>
    <figcaption>This is a planning path, not a claim that every calendar uses four steps. The buyer should map the real request channel, availability rule, invitation system, owner queue, reminder timing, and cancellation record before the role starts.</figcaption>
  </figure>;
}

export function SchedulingControlGuide() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: schedulingGuideTitle,
      description: schedulingGuideDescription,
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
        { '@type': 'ListItem', position: 3, name: schedulingGuideTitle, item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines appointment scheduling guide</p>
    <h1>{schedulingGuideTitle}</h1>
    <p className="lead">A free time slot is not enough to make a good appointment. This guide shows how a Philippine team can check the request, follow the buyer's calendar rules, confirm both sides, and stop when an exception needs an owner.</p>

    <div className="answer-box" data-article-marker="ph-appointment-scheduling-20260728">
      <strong>The short answer</strong>
      <p>Give the scheduler one request channel, a written availability rule, and a named owner for exceptions. Let the Philippine team offer approved times, send the right invitation, record the response, and close the loop. Review a mixed sample before adding calendars or event types.</p>
    </div>

    <div className="article-body accounting-guide scheduling-control-guide">
      <p>Scheduling mistakes often begin before anyone opens the calendar. A request may be missing a time zone, attendee, location, or purpose. Guessing can produce a neat invitation that is still wrong.</p>
      <p>Begin with one event type and one calendar. Write down the allowed length, hours, buffer, and conflicts that go back to the buyer. Test the rules on recent requests with private details removed.</p>

      <aside className="article-banner banner-one"><strong>Start with one event type.</strong><span>Use the <a href="/services/admin-support">Philippines admin support page</a> to name the calendar, request source, confirmation step, and owner-only decisions.</span></aside>

      <h2>Define a ready request</h2>
      <p>A request is ready when the scheduler can identify the meeting, attendees, time zone, length, allowed window, location, and person who can settle an exception. Put those fields beside the request queue. Do not leave the rule in old chat messages or one manager's memory.</p>
      <p>Some details should be optional because the buyer says so, not because the scheduler forgot them. Mark each field as required, optional, or owner supplied. Add one example of a request that can move and one that must stop.</p>

      <div className="table-wrap article-scroll" tabIndex={0} aria-label="Appointment scheduling control and review table">
        <span className="scroll-cue">Swipe or use arrow keys to see all columns</span>
        <table className="article-table">
          <thead><tr><th>Calendar step</th><th>Scheduler may do</th><th>Pause when</th><th>Review evidence</th></tr></thead>
          <tbody>
            <tr><td>Request intake</td><td>Record the named people, purpose, length, and stated time zone</td><td>A required detail is missing or two sources disagree</td><td>Original request, intake note, open question</td></tr>
            <tr><td>Time search</td><td>Offer slots inside the written hours and buffer rule</td><td>The event crosses a protected block or needs unusual travel</td><td>Calendar view, rule used, options sent</td></tr>
            <tr><td>Invitation</td><td>Use the approved title, location, attendees, and message</td><td>The meeting is private, sensitive, or has an unknown guest</td><td>Final invite, attendee list, owner approval</td></tr>
            <tr><td>Close or change</td><td>Record accepted, declined, moved, cancelled, or owner review</td><td>Two calendars show different final states</td><td>Response time, final event, change note</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table is a blank control sheet. Replace every row with the buyer's event types, calendars, protected blocks, reply wording, and owners. Include reschedules and cancellations because those are where old links and duplicate events often survive.</p>

      <h2>Keep national figures in context</h2>
      <p>The World Bank reports 52,204,133 people in the Philippine labor force in 2025, up from 44,699,749 in 2021. Its modeled ILO series says services accounted for 59.548% of Philippine employment in 2025 and 56.810% in 2021. These figures describe a large national labor market, not the calendar skill of one person.</p>
      <p>The World Bank internet-use series reports 67.263% of the Philippine population online in 2024 and 77.867% in 2023. That shift is also a warning against treating one country number as a hiring test. Check the actual worker's connection, backup plan, device, work area, and ability to use the buyer's tools.</p>

      <ServicesEmploymentChart />

      <aside className="article-banner banner-two"><strong>Check the rule before offering a time.</strong><span>Read the <a href="/blog/philippines-customer-onboarding-data-entry-control-guide">customer onboarding data guide</a> for another way to separate approved facts from exceptions.</span></aside>

      <h2>Write one availability rule people can follow</h2>
      <p>A useful rule names the working time zone, open hours, event length, setup buffer, travel buffer, protected blocks, and how far ahead someone may book. It also says whether the scheduler may hold a slot and how long that hold lasts. Plain rules beat a calendar full of unexplained colors.</p>
      <p>Spell out the time zone in every request and reply until both parties confirm it. Avoid labels such as morning or end of day when people work in different countries. A copied offset can also fail around daylight-saving changes, so the calendar system should calculate the final local times.</p>

      <h2>Separate ordinary changes from real exceptions</h2>
      <p>An ordinary change follows a known rule, such as moving a standard call to another approved slot. An exception breaks a rule, touches a private block, adds an unknown attendee, changes travel, or asks the scheduler to decide who gets priority. Those cases need a named buyer owner.</p>
      <p>The exception note should be short enough to answer quickly. Include the request, conflict, options already checked, deadline, and exact decision needed. Save the answer with the event so the same question does not return as a mystery next week.</p>

      <CalendarDecisionGraphic />

      <h2>Open calendar access carefully</h2>
      <p>Calendar details can reveal names, contact information, locations, meeting subjects, business plans, and private relationships. The Philippine Data Privacy Act says a personal information controller remains accountable for information under its control, including information transferred to another party for processing. It also calls for reasonable organizational, physical, and technical safeguards.</p>
      <p>Use a named worker account and share only the calendars and event details needed for the queue. Keep account administration, broad calendar sharing, deletion history, private-event detail, and final sensitive decisions with named buyer owners. Remove access when the assignment or role changes.</p>
      <blockquote className="expert-quote">"Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices, this update aims to make the framework even more relevant to a wider swath of users in the United States and abroad," according to Kevin Stine, chief of NIST's Applied Cybersecurity Division.</blockquote>
      <p>NIST published that exact statement on February 26, 2024, when it announced Cybersecurity Framework 2.0. The point for a calendar lane is practical: controls should fit the people, tools, and risks in front of you. A copied access checklist may miss private event fields, guest permissions, and the buyer's real approval path.</p>

      <h2>Use separate accounts and strong sign-in rules</h2>
      <p>CISA advises people to use long, random, unique passwords and a password manager. Apply that guidance to the scheduler's own account rather than sharing an owner's login. Turn on multifactor authentication when the calendar and email tools support it.</p>
      <p>Check what the scheduler can view, create, change, delete, and share. A role that sends approved invitations may not need private event descriptions or account settings. Review permissions after the first week and again when the event list expands.</p>

      <aside className="article-banner banner-three"><strong>Turn the calendar into a checked queue.</strong><span>Use <a href="/services/reporting-and-qa">Philippines reporting and QA support</a> to plan the sample, or <a href="/contact">send the first event list</a> once the buyer owners are clear.</span></aside>

      <h2>Confirm people, calendar, and status</h2>
      <p>A sent invitation is not always a confirmed appointment. The scheduler should know which events need an explicit acceptance, which can close after a written reply, and which require a reminder. The final status should match across the request queue and calendar.</p>
      <p>Use approved reminders that state the time in each party's local zone, the meeting link or place, and the action needed. Do not add private background merely to make the message warmer. Record bounced messages, declines, and unanswered requests instead of quietly closing them.</p>

      <h2>Review a mixed sample</h2>
      <p>Check every item in the first batch. Later samples should include clean bookings, time-zone questions, protected blocks, new guests, changes, cancellations, and owner decisions.</p>
      <p>Compare each item with the request, calendar rule, invitation, response, and final state. Record the error reason and any rule or example that changed.</p>

      <h2>Run a 30-day calendar test</h2>
      <p>During days 1 through 5, use one event type and check every request before the invitation goes out. During days 6 through 15, add normal changes and known exceptions while the buyer answers the owner queue each day. Track repeated questions instead of blaming the worker for an unwritten rule.</p>
      <p>During days 16 through 30, review missed confirmations, duplicate events, time-zone errors, old links, manager waits, and access. Ask whether another reviewer can retrace the booking without private context. Add a new calendar or event type only after the first lane stays clear.</p>

      <h2>Questions for a provider call</h2>
      <p>Ask how candidates are tested on time zones, calendar rules, confirmations, private details, and exceptions using made-up requests. Ask who checks the first batch and helps when the buyer's rules change. A useful answer names the people, test, records, and owner path.</p>
      <p>Use one direct script: "Show me how your team handles a normal booking, a daylight-saving question, and a protected-block conflict. Which details may the scheduler see, who approves an exception, and what proof will our reviewer receive?" Save the answer beside the calendar map.</p>

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
