export const site = {
  domain: 'OutsourcedService.com',
  slug: 'outsourcedservice',
  brand: 'Outsourced Service',
  primary: 'Filipino service teams',
  audience: 'buyers planning recurring back office, admin, reporting, and customer work',
  angle: 'service scope, handoff rules, safe access, and review ownership',
  style: 'Service operations desk',
  dark: '#17304a',
  color: '#4e63f5',
  accent: '#b9f227',
  heroImage: '/filipino-service-workflow.svg',
  serviceImage: '/filipino-service-workflow.svg',
  alt: 'Two specialists reviewing a service workflow board',
  badge: 'Philippines only',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Operations support',
    desc: 'Filipino operations support for recurring updates, handoffs, follow-up, and weekly checks, with the owner still in control.',
    bestFor: ['order updates', 'CRM cleanup', 'vendor follow-up', 'SOP checks'],
    firstWeek: ['choose five recurring tasks', 'share examples of finished work', 'set a daily handoff note', 'review the first 20 outputs'],
    ownerControls: ['approval rules for refunds, spend, and customer promises', 'limited tool access at launch', 'one scorecard for speed, accuracy, and follow-up'],
  },
  {
    slug: 'customer-support',
    title: 'Customer support',
    desc: 'Filipino customer support for tickets, shared inboxes, and follow-up, backed by scripts and clear escalation rules.',
    bestFor: ['tier-one tickets', 'shared inbox replies', 'status updates', 'review requests'],
    firstWeek: ['load approved replies', 'tag common issues', 'start with low-risk tickets', 'review escalations each day'],
    ownerControls: ['no refunds or policy exceptions without approval', 'sensitive complaints go to a manager', 'review a ticket sample each day'],
  },
  {
    slug: 'admin-support',
    title: 'Admin support',
    desc: 'Filipino admin support for calendars, documents, inbox work, data entry, and the follow-up that keeps slipping.',
    bestFor: ['calendar cleanup', 'document formatting', 'data entry', 'meeting follow-up'],
    firstWeek: ['make a daily admin list', 'share examples and templates', 'limit account permissions', 'check work before expanding the role'],
    ownerControls: ['approval before sensitive messages are sent', 'password-manager access by role', 'a daily list of done, blocked, and needs-review work'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Filipino reporting and QA support for weekly numbers, sample checks, and issue logs that someone actually owns.',
    bestFor: ['weekly scorecards', 'ticket audits', 'SOP checks', 'simple KPI reports'],
    firstWeek: ['choose the numbers that matter', 'build a sample report', 'check a recent work sample', 'log issues with examples'],
    ownerControls: ['source links for every reported number', 'sample-size notes on audits', 'a short owner decision list'],
  },
] as const;

export const blogPosts = [
  {
    slug: 'philippines-knowledge-base-maintenance-control-guide',
    title: 'Philippines knowledge base maintenance: an update and approval control guide',
    excerpt: 'Plan a Philippines knowledge base maintenance lane with source checks, article owners, approval limits, safe access, and review evidence.',
    minutes: 12,
  },
  {
    slug: 'philippines-appointment-scheduling-control-guide',
    title: 'Philippines appointment scheduling: a calendar control and confirmation guide',
    excerpt: 'Plan a Philippines appointment scheduling lane with calendar rules, confirmation checks, safe access, and named owners for exceptions.',
    minutes: 12,
  },
  {
    slug: 'philippines-customer-onboarding-data-entry-control-guide',
    title: 'Philippines customer onboarding data entry: a control and review guide',
    excerpt: 'Build a Philippines customer onboarding data lane with source checks, field rules, safe access, review samples, and clear exception owners.',
    minutes: 12,
  },
  {
    slug: 'outsourced-order-processing-philippines-control-guide',
    title: 'Outsourced order processing Philippines: a control and exception guide',
    excerpt: 'Plan a Philippines order processing lane with clear checks, exception rules, safe access, and records the buyer can review.',
    minutes: 12,
  },
  {
    slug: 'customer-service-outsourcing-philippines-queue-escalation-guide',
    title: 'Customer service outsourcing Philippines: a queue and escalation guide',
    excerpt: 'Build a Philippines customer support queue with clear reply limits, escalation rules, access controls, and review evidence.',
    minutes: 12,
  },
  {
    slug: 'staff-outsourcing-philippines-direct-hire-or-staffing-provider',
    title: 'Staff outsourcing Philippines: direct hire or staffing provider?',
    excerpt: 'Compare direct hiring with a Philippines staffing provider by looking at recruiting work, daily management, access, quality checks, and exit duties.',
    minutes: 12,
  },
  {
    slug: 'outsourced-accounting-services-philippines-control-guide',
    title: 'Outsourced accounting services Philippines: a buyer control guide',
    excerpt: 'Plan a Philippines accounting support role with clear work limits, client-held approvals, careful access, and review evidence.',
    minutes: 13,
  },
  {
    slug: 'outsourced-service-tasks-to-outsource',
    title: 'How to outsource work to the Philippines: a 30-day plan',
    excerpt: 'Choose the right work, set safe access rules, and launch a Filipino service role without handing over owner-only decisions.',
    minutes: 12,
  },] as const;

export const generatedBlogPosts = [
  ['philippines-inbox-management-workflow', 'Philippines inbox management: a workflow and review guide', 'Build a safer inbox lane with triage rules, approved replies, escalation ownership, and a simple daily review.', 10],
  ['philippines-crm-data-cleanup-control-guide', 'Philippines CRM data cleanup: a control and handoff guide', 'Plan a CRM cleanup queue with source checks, field rules, duplicate handling, access limits, and review evidence.', 10],
  ['philippines-lead-follow-up-process-guide', 'Philippines lead follow-up: a process and escalation guide', 'Set up lead follow-up with approved messages, timing rules, source notes, and clear owner decisions.', 10],
  ['philippines-invoice-processing-control-guide', 'Philippines invoice processing: a control and approval guide', 'Design an invoice support lane that checks records, flags exceptions, and keeps payment approval with the owner.', 11],
  ['philippines-vendor-management-workflow-guide', 'Philippines vendor management: a workflow and records guide', 'Create a vendor update lane with document checks, renewal reminders, access controls, and escalation rules.', 10],
  ['philippines-calendar-management-control-guide', 'Philippines calendar management: a scheduling control guide', 'Hand off routine calendar work with time-zone rules, confirmation checks, and owner approval boundaries.', 10],
  ['philippines-document-processing-workflow-guide', 'Philippines document processing: a workflow and QA guide', 'Build a document queue with naming rules, source checks, version control, and sample-based quality review.', 10],
  ['philippines-market-research-support-guide', 'Philippines market research support: a source and review guide', 'Plan research support with source quality rules, evidence notes, synthesis limits, and a clear reviewer role.', 11],
  ['philippines-social-media-production-workflow', 'Philippines social media production: a workflow and approval guide', 'Organize content production with approved themes, asset checks, review gates, and owner-controlled publishing.', 10],
  ['philippines-email-marketing-operations-guide', 'Philippines email marketing operations: a control guide', 'Set up campaign operations with list checks, draft review, link testing, and permission boundaries.', 10],
  ['philippines-ecommerce-catalog-management-guide', 'Philippines ecommerce catalog management: a QA guide', 'Manage product records with source-of-truth rules, image checks, change logs, and escalation paths.', 10],
  ['philippines-recruiting-coordinator-workflow-guide', 'Philippines recruiting coordinator support: a workflow guide', 'Design a recruiting coordination lane with scheduling, record hygiene, candidate privacy, and decision limits.', 10],
  ['philippines-property-management-admin-guide', 'Philippines property management admin: a workflow guide', 'Plan routine property administration with request tracking, vendor follow-up, records, and owner approvals.', 10],
  ['philippines-logistics-coordination-control-guide', 'Philippines logistics coordination: a handoff and exception guide', 'Build a logistics support queue with status checks, updates, exception flags, and documented handoffs.', 10],
  ['philippines-podcast-production-support-guide', 'Philippines podcast production support: a workflow guide', 'Coordinate episode research, assets, transcripts, and publishing checks with a reviewable production board.', 9],
  ['philippines-website-content-operations-guide', 'Philippines website content operations: a QA guide', 'Create a content operations lane with briefs, source checks, metadata review, and publishing approval.', 10],
  ['philippines-customer-feedback-analysis-guide', 'Philippines customer feedback analysis: a review guide', 'Turn feedback into a tagged review queue with evidence, themes, privacy limits, and owner decisions.', 10],
  ['philippines-bookkeeping-data-prep-guide', 'Philippines bookkeeping data preparation: a control guide', 'Prepare bookkeeping records with source matching, exception queues, restricted access, and accountant review.', 10],
  ['philippines-sop-documentation-workflow-guide', 'Philippines SOP documentation: a workflow and review guide', 'Capture repeatable work in usable SOPs with examples, change ownership, version checks, and approval gates.', 10],
  ['philippines-operations-dashboard-maintenance-guide', 'Philippines operations dashboard maintenance: a QA guide', 'Maintain an operations dashboard with named sources, freshness checks, issue notes, and owner-controlled interpretation.', 10],
  ['philippines-client-reporting-support-guide', 'Philippines client reporting support: a control guide', 'Prepare client reports from approved sources with calculation checks, evidence links, and an accountable reviewer.', 10],
] as const;

export const stats = [
  { label: 'Role scope', value: 'Tasks first', note: 'define the repeated work before settling on a title' },
  { label: 'Access plan', value: 'Start narrow', note: 'open only the tools and permissions the role needs' },
  { label: 'Quality review', value: 'Check samples', note: 'read real work before adding more responsibility' },
] as const;

export const staffingOffer = {
  partner: 'a Philippines staffing partner',
  promise: 'Get a staffing plan for Filipino talent, built around the work you want handled.',
  fit: [
    'owners who want Filipino talent but do not want to screen alone',
    'teams that need backup coverage and a named management path',
    'companies planning admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role-planning call that turns the task list into a usable scope',
    'Filipino talent matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'a management path for quality, attendance, and replacement questions',
  ],
  proof: [
    'a written task scope before hiring',
    'a weekly reporting rhythm',
    'a named escalation owner',
    'a handoff plan for tools, SOPs, and checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the person use?',
  'What hours and response window do you need?',
  'Who checks quality during the first two weeks?',
  'What should never be decided without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the queue', body: 'Turn the loose task list into one role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match Filipino talent', body: 'A Philippines staffing partner can match the role to the right skills, schedule, and communication style.' },
  { step: '3', title: 'Open access slowly', body: 'Start with examples, limited permissions, daily review, and one simple scorecard.' },
  { step: '4', title: 'Add work after it settles', body: 'Once the first tasks are stable, expand the role without turning the handoff into a mess.' },
] as const;

export const staffingFitNote = 'Every request is limited to talent in the Philippines. Fit still depends on the work, schedule, tools, skill level, and management needs.';
