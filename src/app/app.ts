import { Component } from '@angular/core';

type Project = {
  name: string;
  url?: string;
  eyebrow: string;
  summary: string;
  impact: string;
  stack: string[];
};

type Role = {
  company: string;
  title: string;
  period: string;
  focus: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Email', href: 'mailto:career.oguchemaureen@outlook.com' }
  ];

  readonly metrics = [
    { value: '6+', label: 'years building production systems' },
    { value: '70%', label: 'reporting timeout reduction through ETL' },
    { value: '60%', label: 'processing speed and API latency gains' },
    { value: '25%', label: 'downtime reduction with event messaging' }
  ];

  readonly projects: Project[] = [
    {
      name: 'Pamoja',
      url: 'https://usepamoja.com',
      eyebrow: 'Education infrastructure',
      summary: 'An operating system for education foundations: student profiles, sponsor updates, report-card intelligence, and live programme visibility.',
      impact: 'Turns scattered school data into structured donor and student workflows.',
      stack: ['Angular', '.NET services', 'AI extraction', 'Cloud workflows']
    },
    {
      name: 'Whatsella',
      url: 'https://whatsella.com',
      eyebrow: 'AI commerce on WhatsApp',
      summary: 'A business growth platform that lets vendors list products, automate customer conversations, and sell through WhatsApp with AI assistance.',
      impact: 'Connects storefronts, product discovery, chat automation, orders, payouts, and trust signals.',
      stack: ['Angular', '.NET', 'AI agents', 'Payments']
    },
    {
      name: 'AgriSense Hub',
      url: 'https://agrisensehub.netlify.app',
      eyebrow: 'Smart farming assistant',
      summary: 'A farmer-facing experience for crop recommendations, disease detection, weather intelligence, and practical agricultural guidance.',
      impact: 'Makes precision farming decisions easier for small and growing farms.',
      stack: ['Next.js', 'AI models', 'Weather data', 'UX systems']
    },
    {
      name: 'Baige Payment Gateway',
      eyebrow: 'Banking and payment rails',
      summary: 'Secure integration layers between NCube Core Banking System, native MFB accounts, and NIBSS payment infrastructure.',
      impact: 'Owned reliability, reconciliation, regulatory alignment, and core payment flows.',
      stack: ['C#', '.NET', 'NIBSS', 'ISO 20022', 'SQL', 'AWS']
    },
    {
      name: 'Enterprise Bot and Reporting Platform',
      eyebrow: 'Conversational banking',
      summary: 'Chatbot and reporting infrastructure for loan applications, loan detail retrieval, statement downloads, and analytics pipelines.',
      impact: 'Moved reports from runtime S3/code transformations to prepared datasets and cut errors by over 70%.',
      stack: ['ASP.NET Core', 'AWS Glue', 'Athena', 'Lambda', 'SQL Server']
    },
    {
      name: 'Transcript and Verification Systems',
      eyebrow: 'Document automation',
      summary: 'Internal tools for parsing, verifying, and operationalizing documents across education and identity workflows.',
      impact: 'Reduced manual handling by converting documents into searchable, service-ready data.',
      stack: ['.NET', 'Playwright', 'PDF parsing', 'Angular']
    }
  ];

  readonly roles: Role[] = [
    {
      company: 'Baige Microfinance Bank',
      title: 'Chief Technology Officer',
      period: 'Oct 2025 - Present',
      focus: 'Payments ownership, core banking integration, customer-account migration, reconciliation, and regulatory alignment.'
    },
    {
      company: 'James Chase Consulting',
      title: 'Senior Software Engineer',
      period: 'Nov 2024 - Present',
      focus: 'Fintech automation, merchant installment payments, AWS Step Functions, EventBridge, and distributed .NET services.'
    },
    {
      company: 'eBanqo Inc',
      title: 'Senior Software Engineer',
      period: 'Nov 2024 - Sept 2025',
      focus: 'Enterprise chatbots, reporting ETL, analytics reliability, observability, and multi-client integrations.'
    },
    {
      company: 'Sterling Bank Plc',
      title: 'Backend Engineer',
      period: 'Feb 2023 - Aug 2024',
      focus: 'Legacy refactoring, caching, Azure Service Bus, performance tuning, and maintainability improvements.'
    }
  ];

  readonly stack = [
    'C#',
    '.NET Core',
    'ASP.NET Web API',
    'Node.js',
    'Fastify',
    'Angular',
    'SQL Server',
    'PostgreSQL',
    'MongoDB',
    'Azure Service Bus',
    'AWS Lambda',
    'Step Functions',
    'EventBridge',
    'Docker',
    'Redis',
    'Serilog'
  ];
}
