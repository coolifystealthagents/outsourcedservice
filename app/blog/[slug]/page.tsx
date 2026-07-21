import { Header, Footer, CTA } from '../../components';
import { blogPosts, site } from '../../data';

const detailedSlug = 'outsourced-service-tasks-to-outsource';

const faqs = [
  {
    question: 'What work should I outsource to the Philippines first?',
    answer: 'Start with repeated work that has a clear input, a clear finish, and a named reviewer. Good first tasks include inbox sorting, CRM updates, order follow-up, document formatting, and tier-one support. Keep spending, refunds, policy exceptions, and sensitive customer promises with the owner at first.',
  },
  {
    question: 'How many tasks should the first role have?',
    answer: 'A useful planning example is three to five task types for the first two weeks. That gives the new hire enough real work without hiding problems inside a long list. Add more only after the first tasks meet the agreed check.',
  },
  {
    question: 'How long should onboarding take?',
    answer: 'Plan for a 30-day ramp, not a one-hour tool tour. Use days 1 to 3 for examples and access, days 4 to 7 for supervised work, days 8 to 14 for a larger sample, and days 15 to 30 for a steady queue and weekly review.',
  },
  {
    question: 'Should a Filipino team member get full system access?',
    answer: 'Usually not at the start. Give access by task and role. Use separate accounts, a password manager, multifactor authentication where available, and an approval step for actions that carry money, legal, privacy, or customer risk.',
  },
  {
    question: 'Do I hire directly or use a Philippines staffing provider?',
    answer: 'Direct hiring gives you more control over recruiting and management. A staffing provider can help with screening, matching, onboarding, attendance, and replacement questions. Ask exactly who employs the worker, who manages daily work, and what happens if the role changes.',
  },
] as const;

const sources = [
  {
    name: 'NIST SP 800-53 Rev. 5, Access Control family',
    url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
    note: 'Federal control catalog covering least privilege, account management, and access review.',
  },
  {
    name: 'CISA: Use strong passwords',
    url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    note: 'Plain guidance on long, unique passwords and password managers.',
  },
  {
    name: 'IRS: Independent contractor or employee',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee',
    note: 'U.S. tax guidance on behavioral control, financial control, and the type of relationship.',
  },
  {
    name: 'FTC: Data security guidance for businesses',
    url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security',
    note: 'Business guidance for collecting less data, limiting access, and protecting information.',
  },
] as const;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const url = `https://outsourcedservice.com/blog/${slug}`;
  return {
    title: post?.title || 'Guide',
    description: post?.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post?.title || 'Guide',
      description: post?.excerpt,
      url,
      type: 'article',
    },
  };
}

function DetailedArticle() {
  const canonical = `https://outsourcedservice.com/blog/${detailedSlug}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: 'How to outsource work to the Philippines: a 30-day plan',
      description: 'Choose the right work, set safe access rules, and launch a Filipino service role without handing over owner-only decisions.',
      datePublished: '2026-07-21',
      dateModified: '2026-07-21',
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' },
      publisher: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' },
      citation: sources.map((source) => source.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedservice.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedservice.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'How to outsource work to the Philippines', item: canonical },
      ],
    },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <p className="eyebrow">Philippines outsourcing guide</p>
    <h1>How to outsource work to the Philippines: a 30-day plan</h1>
    <p className="lead">A good handoff starts with the work, not the job title. This guide shows you how to choose the first tasks, protect access, and build a review plan for Filipino talent.</p>

    <div className="answer-box">
      <strong>The short answer</strong>
      <p>Outsource work that repeats, has a clear example, and can be checked by one person. Start with three to five task types. Give only the access needed for those tasks. Review a small sample each day for the first two weeks, then expand the role when the work is steady.</p>
    </div>

    <div className="article-body">
      <p>The Philippines can be a strong fit for admin, customer support, operations, reporting, bookkeeping support, development support, and marketing production. But country fit does not fix a loose role. If the task changes every day and nobody owns the final call, a new hire will spend more time asking than doing.</p>
      <p>The fix is simple, though it takes a little work. Write down what enters the queue, what a finished item looks like, what the worker may decide, and what must come back to you. Then test that plan on real work before you add more.</p>

      <h2>Choose work that can leave your desk</h2>
      <p>Look at the last 10 business days. List the work you did more than once. Put a mark beside tasks that used the same tool, followed the same steps, or ended with the same kind of output. Those are better starting points than work that depends on your private judgment.</p>
      <p>A task is ready when you can answer four questions: What starts it? What does done look like? Who checks it? When should it be sent back for a decision? If one answer is missing, fix the task before you hire around it.</p>

      <div className="table-wrap">
        <table className="article-table">
          <thead><tr><th>Work type</th><th>Good first handoff</th><th>Keep with the owner at first</th><th>Simple check</th></tr></thead>
          <tbody>
            <tr><td>Shared inbox</td><td>Tag messages, draft approved replies, flag urgent items</td><td>Policy exceptions and sensitive complaints</td><td>Read 10 replies from the day</td></tr>
            <tr><td>CRM updates</td><td>Clean fields, add notes, move records after a known event</td><td>Deleting records or changing sales rules</td><td>Compare 10 records with source notes</td></tr>
            <tr><td>Order follow-up</td><td>Send status notes and request missing details</td><td>Refunds, credits, or promises outside policy</td><td>Check five open orders and five closed orders</td></tr>
            <tr><td>Weekly reporting</td><td>Collect set numbers and link each source</td><td>Changing targets or explaining financial results</td><td>Recheck the source for every number</td></tr>
            <tr><td>Calendar support</td><td>Find times, send invites, add meeting notes</td><td>Committing the owner to travel, spend, or a new deal</td><td>Review tomorrow's calendar each afternoon</td></tr>
          </tbody>
        </table>
      </div>

      <p>The numbers in this table are planning examples, not a rule for every company. A low-volume team may review every item. A busy team may use a smaller sample plus a full check of refunds, deletions, and other high-risk actions.</p>

      <h2>Write a one-page role brief</h2>
      <p>Keep the first brief short enough to use during a call. Name the main outcome, the first three to five task types, the tools, the needed work hours, and the decisions that stay with you. Add one example of good work and one example that should be escalated.</p>
      <p>A vague brief says, "Help with operations." A usable brief says, "By 3 p.m. Eastern, update the order board, send approved status notes, and place blocked orders in the manager queue. Do not issue credits or promise delivery dates that are not in the system."</p>

      <div className="quote-box">
        <span>Script for a provider call</span>
        <blockquote>"I need one person to own order updates and customer status notes. The first queue is about 20 to 30 open items a day. Who screens for this work, who checks quality in week one, and who handles a role change if the queue grows?"</blockquote>
      </div>

      <p>Ask who is responsible for recruiting, attendance, daily direction, equipment, payroll, and replacement questions. Those answers matter because the label on a contract does not decide a worker's status by itself. For U.S. buyers, the IRS looks at behavioral control, financial control, and the type of relationship. Get advice for your facts when classification is unclear.</p>

      <h2>Open tools without opening everything</h2>
      <p>Access should follow the task list. A person who formats documents may not need billing access. A support rep who drafts replies may not need permission to issue refunds. NIST calls this least privilege: users get only the access needed for assigned work. It is a useful rule for a small business even if you do not follow a formal federal control program.</p>
      <p>Create a separate account for the worker. Turn on multifactor authentication when the tool supports it. Use a password manager instead of sending passwords in chat. CISA recommends long, random, unique passwords and says a password manager can create and store them. The FTC also advises businesses to keep only the data they need and limit access to people who need it.</p>

      <div className="control-grid">
        <article><strong>1 account</strong><p>Give each person a named login. Shared logins make review and removal harder.</p></article>
        <article><strong>3 access levels</strong><p>Example: view, edit, and approve. Most first-week work should sit in view or edit.</p></article>
        <article><strong>2 reviews</strong><p>Example: check access on day 7 and day 30, then remove anything the role does not use.</p></article>
        <article><strong>0 owner passwords</strong><p>Do not hand over the owner's master login when a role account can do the work.</p></article>
      </div>
      <p>These counts are a planning model. Your tools may use different permission names. The point is to make access narrow, visible, and easy to remove.</p>

      <h2>Use a 30-day launch board</h2>
      <p>Do not drop a long SOP folder on day one and call it onboarding. Give the new team member a small live queue, review the output, and improve the instructions while both sides can still see the gap.</p>

      <div className="launch-grid">
        <article><span>Days 1-3</span><h3>Show the finish line</h3><p>Walk through two good examples and one bad example. Open only the first tools. Ask the worker to repeat the handoff in their own words.</p></article>
        <article><span>Days 4-7</span><h3>Run a small queue</h3><p>Use low-risk work. Review it every day. Write down questions that appear more than once and fix the SOP or reply guide.</p></article>
        <article><span>Days 8-14</span><h3>Test normal volume</h3><p>Add a larger sample and one common edge case. Track completed, returned, blocked, and escalated items without hiding mistakes.</p></article>
        <article><span>Days 15-30</span><h3>Set the weekly check</h3><p>Move stable work into the normal queue. Review quality, time, access, and open decisions once a week. Add tasks one at a time.</p></article>
      </div>

      <h2>Use one scorecard that people can read</h2>
      <p>A first scorecard does not need a dashboard. Track the few things tied to the role brief. For an order follow-up role, that might be items completed, items returned for correction, blocked items, and manager decisions still open. Add the source link or ticket number so someone can check the count.</p>
      <p>Do not reward speed alone. Fast work with missing notes creates cleanup for the next person. Pair volume with a small quality sample. If five of 10 checked records are wrong, the answer is not "work faster." Stop, find the repeated error, and fix the example or rule.</p>

      <div className="quote-box alt">
        <span>Script for a daily handoff</span>
        <blockquote>"Today I closed 24 items, returned three for missing customer details, and placed two in the manager queue. One issue repeated: the shipping status in the CRM did not match the order system. I paused those replies until you confirm which source wins."</blockquote>
      </div>

      <h2>A realistic first-role example</h2>
      <p>Imagine a small service company whose owner spends two hours each morning cleaning the CRM, chasing missing forms, and sending status notes. The owner wants to outsource all "operations," but that label is too wide.</p>
      <p>They narrow the role to three queues: clean new records, request missing documents with an approved email, and prepare a daily blocked-item list. The Filipino team member starts with 15 records a day. For the first week, the owner checks every request before it is sent. In week two, the worker sends standard requests and escalates unusual cases. The owner keeps price changes, contract questions, and account deletion.</p>
      <p>By day 30, the role has a clear input, a clear finish, and a short decision list. It may expand later, but the first win is not a grand transformation. It is a queue that no longer depends on the owner remembering every small step.</p>

      <h2>Pick the hiring path that matches your management time</h2>
      <p>Direct hiring can work when you can recruit, check references, set up contracts and payroll, manage attendance, and coach the role yourself. A Philippines staffing provider may fit better when you want help with candidate matching, onboarding, local support, attendance, and replacement questions.</p>
      <p>Neither path removes your job as the owner of the process. The worker still needs a real scope and a person who can answer questions. Before signing, ask for a written list of what the provider handles and what stays with you.</p>

      <div className="callout">
        <strong>Philippines-only scope:</strong> Outsourced Service plans roles for talent in the Philippines. We do not route hiring to another source region. Fit still depends on the task, schedule, tools, and level of support you need.
      </div>

      <h2>Questions buyers ask</h2>
      <div className="faq-list">
        {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div>

      <h2>Related planning pages</h2>
      <ul className="related-links">
        <li><a href="/services/operations-support">See what belongs in an operations support role</a></li>
        <li><a href="/services/admin-support">Plan a Filipino admin support role</a></li>
        <li><a href="/services/customer-support">Set the limits for customer support work</a></li>
        <li><a href="/blog/outsourced-service-provider-questions">Take better questions to a staffing provider call</a></li>
      </ul>

      <h2>Sources</h2>
      <ul className="source-list">
        {sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.name}</a><span>{source.note}</span></li>)}
      </ul>
    </div>
  </>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  return <>
    <Header />
    <main className="section content-page">
      <article className="container" style={{ maxWidth: 880 }}>
        {slug === detailedSlug ? <DetailedArticle /> : <>
          <p className="eyebrow">{site.brand} field note</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="card">
            <h2>The short version</h2>
            <p>Start with one role, a short task list, and one person who checks the work. Filipino talent should not have to reverse-engineer a process that nobody on your team can explain.</p>
            <h2>What to prepare</h2>
            <ul>
              <li>Examples of finished work and approved replies</li>
              <li>Tool permissions and access limits</li>
              <li>The daily output you expect</li>
              <li>Escalation rules for sensitive decisions</li>
            </ul>
            <h2>Questions for a Philippines staffing provider</h2>
            <ul>
              <li>Who screens the candidate?</li>
              <li>Who checks quality after the start date?</li>
              <li>What happens if the fit is wrong?</li>
              <li>How are passwords and customer data handled?</li>
            </ul>
          </div>
        </>}
      </article>
      <CTA />
    </main>
    <Footer />
  </>;
}
