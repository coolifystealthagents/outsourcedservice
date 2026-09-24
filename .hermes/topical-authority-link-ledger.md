# Service-led topical authority link ledger

Updated: 2026-09-24

This is a planning ledger, not reader-facing copy. It uses only existing Philippines service pillars and existing research pages that were confirmed in the production build. Before a reader-facing link is added, confirm that the source paragraph answers the question, the service route still exists, and the handoff states the work boundary without promising a result.

| Service pillar | Existing supporting research route | Reader's next question | Current route-local service link | Next controlled action |
| --- | --- | --- | --- | --- |
| Operations Support | `/research/philippines-access-review-support-research` | What access-review evidence should a buyer have before expanding recurring operations work? | Delivered locally: `/services/operations-support` (rendered source `c7291d2d4c3745485e5f071dcfcfd0de9266d9b1`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker and refreshed metadata. Do not add a second CTA. |
| Customer Support | `/research/philippines-customer-support-knowledge-handoff-research` | How can a buyer transfer approved support knowledge without turning old notes into customer-facing answers? | Present: `/services/customer-support` | Keep the current handoff. Do not add another service CTA. |
| Admin Support | `/research/philippines-document-version-research` | How can a buyer keep document versions and approval evidence clear when assigning routine admin work? | Delivered locally: `/services/admin-support` (rendered source `79cec8562604f976ece852d06f6902f6814c608b`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker, service href, and refreshed metadata. Do not add a second CTA. |
| Reporting and QA | `/research/philippines-client-report-source-research` | What source-to-summary checks make a weekly report reviewable? | Delivered locally: `/services/reporting-and-qa` (rendered source `f78a959e08a91716dd1436962260f7b83c0195f1`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker and refreshed metadata. Do not add a second CTA. |
| Order Status Support | `/research/philippines-order-status-evidence-research` | How can a buyer give a customer a traceable order update without turning an uncertain carrier event into a promise? | Verified absent: 0 route-local `/services/order-status-support` links in the fresh production artifact | Candidate only. The existing page and service pillar are generated and in the sitemap. Before a later handoff, confirm that the typed research record can state that staff prepare source-based updates while the owner keeps commitments, compensation, and exceptions. |

## Deferred service lanes

The earlier ledger named nine research URLs that are not in the current generated research inventory. Keep these service routes out of the execution queue until an existing, matching research route is confirmed: Ticket Queue Management, Returns Administration, Customer Onboarding Support, Knowledge Base Maintenance, Service Quality Audits, Appointment Coordination, CRM Case Administration, Subscription Support, and Escalation Coordination.

## Release rule

Use one row at a time. Add one contextual handoff only when the existing research page and service page match the stated question. Keep financial decisions, customer promises, refunds, policy exceptions, and access approvals with the named owner.

## Deployment status — 2026-09-15

- Rendered source: `101531420fcb4156cf379aa3aa5ca1faa1ae82bf` added route-specific canonical and Open Graph URL metadata to all 14 service pages. The local production artifact for `/services/admin-support` has the expected H1, canonical `https://outsourcedservice.com/services/admin-support`, Open Graph URL, and sitemap location.
- Cache-busted apex and www pages both returned `200 text/html` with the expected Admin Support H1, but neither served a route-specific canonical tag and both retained `og:url` as `https://outsourcedservice.com`. The public sitemap includes the service URL on both hosts.
- Preserve rendered-source commit `101531420fcb4156cf379aa3aa5ca1faa1ae82bf`. Public deployment verification remains pending; do not add the planned document-version CTA until the Admin Support service pillar serves its own canonical metadata.

## Public-status record — 2026-09-18

- Rendered source: `79cec8562604f976ece852d06f6902f6814c608b` adds the document-version handoff to the existing `/services/admin-support` pillar. The local production artifact has the expected H1 and canonical, one route-local Admin Support href, the owner boundary, `Article.datePublished` `2026-08-12`, `Article.dateModified` and Open Graph modified time `2026-09-18`, and the sitemap location. This sitemap intentionally has no `lastmod`.
- Cache-busted apex and www each returned `200 text/html` with the expected H1 and apex canonical. Both route-local mains omit the new marker, Admin Support href, and modified time; both XML sitemaps include the canonical route. No repository-approved deployment workflow or usable authenticated API path is configured, so no deployment was triggered.
- Preserve rendered-source commit `79cec8562604f976ece852d06f6902f6814c608b`. Classification: `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`; this status entry must not be interpreted as rollout proof.
