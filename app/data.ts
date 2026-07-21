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
    slug: 'outsourced-service-planning',
    title: 'What belongs in a service plan?',
    excerpt: 'Turn a loose task list into a role a Filipino service team can run without constant guesswork.',
    minutes: 6,
  },
  {
    slug: 'outsourced-service-tasks-to-outsource',
    title: 'Which tasks should leave your desk first?',
    excerpt: 'Start with repeated work that has a clear example and a clear reviewer.',
    minutes: 7,
  },
  {
    slug: 'outsourced-service-provider-questions',
    title: 'Questions to ask a Philippines staffing provider',
    excerpt: 'Ask who screens, who manages quality, and what happens when the fit is wrong.',
    minutes: 8,
  },
  {
    slug: 'outsourced-service-onboarding-checklist',
    title: 'A first-week checklist for Filipino talent',
    excerpt: 'Set up tools, examples, approvals, QA, and reporting before the queue gets busy.',
    minutes: 9,
  },
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
