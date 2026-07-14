export const projects = [
  {
    id: 'grocery-management-store',
    title: 'Grocery Management Store',
    subtitle: 'Inventory and Sales Reporting System',
    category: 'Full Stack Web App',
    year: '2025',
    status: 'Completed',
    featured: true,
    shortDescription:
      'Database-backed grocery management application for product catalog, inventory tracking, billing, sales reporting, authentication, and CRUD workflows.',
    overview:
      'A practical grocery management system designed to help store teams manage products, track inventory, process billing, and understand sales activity through structured reports.',
    problem:
      'Small store workflows can become scattered when inventory, billing, and reporting are handled manually. The project focuses on keeping product, billing, and sales data organized in one place.',
    features: [
      'Product catalog and inventory management',
      'Billing and sales tracking workflows',
      'Authentication flow for controlled access',
      'CRUD operations for product/store data',
      'Sales reporting view for better visibility'
    ],
    technologies: ['React.js', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    role: 'Web Developer / Full-Stack Project Contributor',
    challenges:
      'Keeping inventory, billing, and sales information synchronized while maintaining a clean interface for non-technical users.',
    solution:
      'Designed data-driven screens and CRUD flows so store records can be updated consistently and reporting can be generated from structured data.',
    learnings:
      'Improved understanding of database-backed application flows, state-driven UI, CRUD operations, and business-friendly reporting.',
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      '/images/projects/grocery-management-store/cover.svg',
      '/images/projects/grocery-management-store/screenshot-1.svg'
    ],
    tags: ['Inventory', 'Billing', 'CRUD', 'Reporting', 'Web App']
  },
  {
    id: 'customer-support-analysis',
    title: 'Customer Support SLA Analysis',
    subtitle: 'Ticket Analytics Application',
    category: 'Data Analytics',
    year: '2025',
    status: 'Completed',
    featured: true,
    shortDescription:
      'Support ticket analytics project focused on cleaning customer support data, measuring SLA compliance, tracking KPIs, and finding bottlenecks.',
    overview:
      'An analytics project that studies customer support ticket data to measure SLA performance, identify high-volume issue categories, and uncover operational bottlenecks.',
    problem:
      'Support teams need reliable visibility into ticket delays, SLA misses, issue categories, and performance trends. Raw support data often needs cleaning before it becomes useful.',
    features: [
      'Data cleaning and preparation workflow',
      'SLA compliance measurement',
      'Ticket category and priority analysis',
      'KPI reporting for support performance',
      'Power BI-ready insights and dashboard structure'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'Data Cleaning'],
    role: 'Data Analyst',
    challenges:
      'Preparing support ticket data for reliable analysis and making performance indicators easy to interpret.',
    solution:
      'Cleaned and structured ticket data, used SQL/Python for analysis, and organized KPIs around SLA compliance, issue category patterns, and support bottlenecks.',
    learnings:
      'Strengthened skills in data preparation, KPI thinking, SLA analysis, and business-focused dashboard storytelling.',
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      '/images/projects/customer-support-analysis/cover.svg',
      '/images/projects/customer-support-analysis/screenshot-1.svg'
    ],
    tags: ['SLA', 'Analytics', 'KPIs', 'Power BI', 'SQL']
  },
  {
    id: 'noctra-grid-relay',
    title: 'Noctra Grid Relay',
    subtitle: 'Developer Grid & Relay Workflow Project',
    category: 'Web Development / Automation',
    year: '2025',
    status: 'Details Ready to Update',
    featured: true,
    shortDescription:
      'A premium project card and detail page prepared for Noctra Grid Relay. Add the final GitHub, live demo, screenshots, and technical notes in projects.js.',
    overview:
      'Noctra Grid Relay is included as a known project with a dedicated premium case-study page. The exact project details can be updated from the central projects data file without touching main UI components.',
    problem:
      'Final problem statement is intentionally kept editable because detailed project information was not provided yet.',
    features: [
      'Dedicated project card and detail route',
      'Ready-to-update project overview fields',
      'GitHub and live demo button support',
      'Screenshot/gallery support',
      'Technology badge system'
    ],
    technologies: ['JavaScript', 'React.js', 'Web Development', 'Automation Ready'],
    role: 'Web Developer / Project Owner',
    challenges:
      'Final project-specific challenges can be added once the project documentation and screenshots are ready.',
    solution:
      'The portfolio already includes a clean update system for adding the final Noctra Grid Relay case study content, screenshots, and links.',
    learnings:
      'Use this project slot to present technical decision-making, UI/UX decisions, backend/API work, automation logic, or analytics outcomes after final details are available.',
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      '/images/projects/noctra-grid-relay/cover.svg',
      '/images/projects/noctra-grid-relay/screenshot-1.svg'
    ],
    tags: ['Developer', 'Relay', 'Grid', 'Case Study', 'Update Ready']
  }
];

export const getProjectById = (id) => projects.find((project) => project.id === id);
