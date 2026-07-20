export const site = {
  domain: 'OutsourcedService.com',
  slug: 'outsourcedservice',
  brand: 'Outsourced Service',
  primary: 'outsourced service',
  audience: 'buyers comparing outsourced service options for back office and customer work',
  angle: 'service selection, plan ranges, handoff plans, and KPI tracking',
  style: 'Service catalog cards',
  dark: '#2e1065',
  color: '#8b5cf6',
  accent: '#06b6d4',
  heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  alt: 'service team reviewing customer operations dashboard',
  badge: 'Service stack',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Operations Support',
    desc: 'Operations support for teams that need recurring work, handoffs, and weekly checks handled without losing owner control.',
    bestFor: ['order updates', 'CRM cleanup', 'vendor follow-up', 'SOP checks'],
    firstWeek: ['pick 5 recurring tasks', 'share examples of good work', 'set daily notes', 'review the first 20 outputs'],
    ownerControls: ['approval rules for refunds, spend, and customer promises', 'limited tool access at launch', 'one scorecard for speed, accuracy, and follow-up'],
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    desc: 'Customer support for teams that need tickets, inbox replies, and follow-up covered with clear scripts and escalation rules.',
    bestFor: ['tier-1 tickets', 'shared inbox replies', 'status updates', 'review requests'],
    firstWeek: ['load saved replies', 'tag common issues', 'start with low-risk tickets', 'review escalations each day'],
    ownerControls: ['no refunds or policy exceptions without approval', 'sensitive complaints routed to a manager', 'daily ticket sample review'],
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    desc: 'Admin support for owners who need calendars, documents, inbox work, and follow-up handled from a simple daily list.',
    bestFor: ['calendar cleanup', 'document formatting', 'data entry', 'meeting follow-up'],
    firstWeek: ['make a daily admin list', 'share examples and templates', 'limit account permissions', 'check work before expanding scope'],
    ownerControls: ['approval before sending sensitive messages', 'password manager access by role', 'daily list with done, blocked, and needs-review notes'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Reporting and QA support for teams that need weekly numbers, spot checks, and simple issue logs before they scale.',
    bestFor: ['weekly scorecards', 'ticket audits', 'SOP checks', 'simple KPI reports'],
    firstWeek: ['choose the 3 numbers that matter', 'build a sample report', 'spot-check recent work', 'log issues with examples'],
    ownerControls: ['source links for every reported number', 'sample-size notes on audits', 'clear owner decision list'],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-service-planning',
    title: 'Outsourced Service: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
  },
  {
    slug: 'outsourced-service-tasks-to-outsource',
    title: 'Outsourced Service: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-service-provider-questions',
    title: 'Outsourced Service: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-service-onboarding-checklist',
    title: 'Outsourced Service: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
