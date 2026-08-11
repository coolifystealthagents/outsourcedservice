import { site, generatedBlogPosts, batchBlogPosts, blogPublicationDate } from '../data';

export function GeneratedArticle({ slug }: { slug: string }) {
  const post = generatedBlogPosts.find((item) => item[0] === slug);
  const batch = batchBlogPosts.find((item) => item.slug === slug);
  if (!post && !batch) return null;
  const postSlug = post ? post[0] : batch!.slug;
  const title = post ? post[1] : batch!.title;
  const excerpt = post ? post[2] : batch!.excerpt;
  const canonical = `https://outsourcedservice.com/blog/${postSlug}`;
  const sources = [
    ['NIST SP 800-53 Rev. 5, Access Control family', 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'],
  ];
  const thumbnail = '/blog-thumbnails/outsourced-service-guide.svg';
  const batchFocus = batch?.focus || 'the first work lane';
  const batchOutput = batch?.output || 'a completed record with evidence and an escalation note';
  const batchRisk = batch?.risk || 'sensitive actions and decisions outside the approved scope';
  const relatedLinks = batch ? batchBlogPosts.filter((item) => item.slug !== postSlug).slice(0, 3).map((item) => ({ slug: item.slug, title: item.title })) : generatedBlogPosts.filter((item) => item[0] !== postSlug).slice(0, 3).map((item) => ({ slug: item[0], title: item[1] }));
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${canonical}#article`, headline: title, description: excerpt, datePublished: batch ? blogPublicationDate : '2026-08-07', dateModified: batch ? blogPublicationDate : '2026-08-07', mainEntityOfPage: canonical, image: `https://outsourcedservice.com${thumbnail}`, author: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' }, publisher: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedservice.com' }, citation: sources.map((source) => source[1]) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <p className="eyebrow">Philippines outsourcing guide</p>
    <h1>{title}</h1>{batch && <time dateTime={blogPublicationDate}>August 10, 2026</time>}
    <p className="lead">{excerpt}</p>
    <div className="answer-box"><strong>The short answer</strong><p>Start with one repeatable queue, one source of truth, and one named reviewer. Give the specialist only the access needed for that queue. Keep money, policy exceptions, sensitive promises, and final publishing decisions with the owner.</p></div>
    <div className="article-body">
      <p>A useful Philippines service role begins with a defined handoff. For {batchFocus}, write down what enters the queue, what a finished item looks like, which source wins when records disagree, and when the work must pause for a manager. This makes the role easier to train and the output easier to review. See the <a href="/services/operations-support">operations support scope</a> for a practical example.</p>
      <h2>Define the first work lane</h2>
      <p>Choose three to five recurring actions that use the same tools and finish with a visible result. For this lane, the expected output is {batchOutput}. Avoid a broad instruction such as “help with operations.” Keep unusual judgment calls in an exception queue.</p>
      <ul><li>Input: a named inbox, report, request, or source file.</li><li>Output: a completed record, approved draft, checked list, or escalation note.</li><li>Review: a sample size and a person responsible for the decision.</li></ul>
      <h2>Use source checks and safe access</h2>
      <p>Give each person a named account and the minimum permissions needed for the first task list. Use a source link or record identifier for every important update. NIST describes least privilege as limiting access to the minimum needed for assigned work. The FTC also recommends limiting access to people who need the information. The <a href="/blog/outsourced-service-tasks-to-outsource">30-day handoff plan</a> shows how to stage access during onboarding.</p>
      <p>When two systems disagree, do not guess. Pause the item, record both sources, and send it to the named owner. The role should not handle {batchRisk}. This protects the customer record and gives the team a reusable rule for the next similar case.</p>
      <h2>Review quality before expanding the queue</h2>
      <p>During the first week, review every high-risk action and a sample of routine work. Track completed, returned, blocked, and escalated items. A fast queue with missing evidence is not a stable queue. Fix the example, checklist, or permission when the same error appears more than once.</p>
      <div className="table-wrap"><table className="article-table"><thead><tr><th>Work stage</th><th>Specialist may do</th><th>Pause and escalate</th></tr></thead><tbody><tr><td>Prepare</td><td>Collect source records and apply the written checklist</td><td>Missing, conflicting, or sensitive information</td></tr><tr><td>Complete</td><td>Make routine updates within the approved scope</td><td>Deletion, payment, policy, or customer promise</td></tr><tr><td>Handoff</td><td>Link evidence and summarize open items</td><td>Any decision that changes the rule</td></tr></tbody></table></div>
      <h2>Keep a small daily scorecard</h2>
      <p>Record volume, returned work, blocked items, and the reason for each escalation. Add one quality measure tied to the role. The owner should be able to read the scorecard quickly and see what needs a decision without reopening every record.</p>
      <div className="quote-box"><span>Daily handoff script</span><blockquote>“Today I completed the routine queue, returned the items missing source details, and placed the conflicting records in the owner review lane. One rule needs confirmation before I continue.”</blockquote></div>
      <h2>Related Articles</h2><ul className="related-links">{relatedLinks.map((item) => <li key={item.slug}><a href={`/blog/${item.slug}`}>{item.title}</a></li>)}</ul>
      <h2>Sources</h2><ul className="source-list">{sources.map((source) => <li key={source[1]}><a href={source[1]} rel="noopener noreferrer" target="_blank">{source[0]}</a></li>)}</ul>
      <aside className="article-banner banner-two"><strong>Plan the handoff before adding volume.</strong><span>Connect the queue to a clear role scope before expanding access.</span></aside>
    </div>
  </>;
}
