# Service-led topical authority link ledger

Updated: 2026-10-02

This is a planning ledger, not reader-facing copy. It uses only existing Philippines service pillars and existing research pages that were confirmed in the production build. Before a reader-facing link is added, confirm that the source paragraph answers the question, the service route still exists, and the handoff states the work boundary without promising a result.

| Service pillar | Existing supporting research route | Reader's next question | Current route-local service link | Next controlled action |
| --- | --- | --- | --- | --- |
| Operations Support | `/research/philippines-access-review-support-research` | What access-review evidence should a buyer have before expanding recurring operations work? | Delivered locally: `/services/operations-support` (rendered source `c7291d2d4c3745485e5f071dcfcfd0de9266d9b1`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker and refreshed metadata. Do not add a second CTA. |
| Customer Support | `/research/philippines-customer-support-knowledge-handoff-research` | How can a buyer transfer approved support knowledge without turning old notes into customer-facing answers? | Present: `/services/customer-support` | Keep the current handoff. Do not add another service CTA. |
| Admin Support | `/research/philippines-document-version-research` | How can a buyer keep document versions and approval evidence clear when assigning routine admin work? | Delivered locally: `/services/admin-support` (rendered source `79cec8562604f976ece852d06f6902f6814c608b`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker, service href, and refreshed metadata. Do not add a second CTA. |
| Reporting and QA | `/research/philippines-client-report-source-research` | What source-to-summary checks make a weekly report reviewable? | Delivered locally: `/services/reporting-and-qa` (rendered source `f78a959e08a91716dd1436962260f7b83c0195f1`) | Preserve the rendered-source handoff. Cache-busted public proof is pending because both hosts still omit its route-local marker and refreshed metadata. Do not add a second CTA. |
| Order Status Support | `/research/philippines-order-status-evidence-research` | How can a buyer give a customer a traceable order update without turning an uncertain carrier event into a promise? | Delivered locally: `/services/order-status-support` (rendered source `9cfe34b9b4810629c73a7624b7e99008cec0be5d`). | Preserve the data-owned handoff. It prepares source-based updates and flags stale or conflicting records; the order owner keeps commitments, compensation, and exceptions. Do not add a second CTA. |

## October 2 delivered research handoffs

The October 2 research batch already owns five matching service handoffs. A fresh production build confirmed each source and destination is self-canonical and sitemap-listed, with exactly one matching service link inside the source route-local `<main>`. These are delivered/non-duplicable pairs; do not add a second CTA.

| Service pillar | Existing supporting research route | Reader's next question | Current route-local service link | Next controlled action |
| --- | --- | --- | --- | --- |
| Operations Support | `/research/escalation-receipt-operational-ownership-study` | How can an operations lane show whether an escalation was received and who owns the next step? | Present once: `/services/operations-support` | Preserve the typed handoff and keep authority for exceptions with the named owner. |
| Operations Support | `/research/order-field-event-lineage-study` | How can a buyer trace a material order change across systems without treating a final screen as the full record? | Present once: `/services/operations-support` | Preserve the typed handoff. The owner retains commercial decisions and unresolved-change authority. |
| Customer Support | `/research/identity-sensitive-account-change-evidence-study` | What evidence should a support lane retain before a sensitive account change is approved? | Present once: `/services/customer-support` | Preserve the typed handoff. The owner keeps verification, approval, and account-control decisions. |
| Customer Support | `/research/subscription-cancellation-authority-evidence-study` | Who can approve a cancellation when a support queue prepares the record and routes an exception? | Present once: `/services/customer-support` | Preserve the typed handoff. The owner retains cancellation and policy-exception authority. |
| Reporting and QA | `/research/quality-review-appeal-reproducibility-study` | What should a review packet retain when a quality finding is appealed? | Present once: `/services/reporting-and-qa` | Preserve the typed handoff. The owner decides the appeal outcome and any consequential action. |

## October 8 delivered research handoffs

The October 8 research batch already owns five Operations Support handoffs. A fresh production build confirmed each source and the existing service pillar are self-canonical and sitemap-listed, with exactly one matching service link inside the source route-local `<main>`. These pairs are delivered/non-duplicable; do not add a second CTA.

| Service pillar | Existing supporting research route | Reader's next question | Current route-local service link | Next controlled action |
| --- | --- | --- | --- | --- |
| Operations Support | `/research/service-handoff-acceptance-latency-research` | How can a buyer measure whether a handoff was received and ready for owner action? | Present once: `/services/operations-support` | Preserve the typed handoff. Owners retain policy, approval, and exception decisions. |
| Operations Support | `/research/customer-update-source-lineage-research` | How can a team check that a customer update uses the right source and approved version? | Present once: `/services/operations-support` | Preserve the typed handoff. Owners retain customer commitments and approval decisions. |
| Operations Support | `/research/service-queue-owner-agreement-research` | How can reviewers identify the current queue owner and escalation route from the same record? | Present once: `/services/operations-support` | Preserve the typed handoff. Owners retain policy, approval, and exception decisions. |
| Operations Support | `/research/shared-inbox-routing-recurrence-research` | How can a team investigate a repeated inbox-routing failure without rerouting work on guesswork? | Present once: `/services/operations-support` | Preserve the typed handoff. Owners retain policy, approval, and exception decisions. |
| Operations Support | `/research/service-access-removal-evidence-research` | What evidence should show that access was removed at offboarding without changing permissions by inference? | Present once: `/services/operations-support` | Preserve the typed handoff. Owners retain access authority and risk decisions. |

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

## Public-status record — 2026-10-02

- Rendered source: `9cfe34b9b4810629c73a7624b7e99008cec0be5d` adds one data-owned Order Status Support handoff to `/research/philippines-order-status-evidence-research`. The local production artifact has the expected H1, one self-canonical link, one route-local `/services/order-status-support` href, the owner boundary, `Article.datePublished` `2026-08-14`, `Article.dateModified` and Open Graph modified time `2026-10-02`, and the sitemap location. This sitemap intentionally has no `lastmod`.
- Cache-busted apex and www each returned `200 text/html` with the expected H1 and apex canonical. Both route-local mains omit the new marker and Order Status Support href; neither served the refreshed modified-time tag. Both XML sitemaps include the canonical route. No repository-approved deployment workflow, application identifier, or usable authenticated API path is configured, so no deployment was triggered.
- Preserve rendered-source commit `9cfe34b9b4810629c73a7624b7e99008cec0be5d`. Classification: `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`; recheck the exact route-local marker, href, and modified date after an approved deployment. Do not add a second CTA.
