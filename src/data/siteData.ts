import {
  BriefcaseBusiness,
  Code2,
  Earth,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

export type Pillar = {
  title: string
  shortTitle: string
  description: string
  items: string[]
  proof: string
  icon: LucideIcon
}

export const pillars: Pillar[] = [
  {
    title: 'Technology',
    shortTitle: 'Technology',
    description:
      'My technical work sits around data, automation and practical software solutions. I enjoy taking information from different places and turning it into something structured and useful.',
    items: [
      'Data engineering and ETL concepts',
      'Python, SQL and database work',
      'Workflow automation with n8n and Power Automate',
      'Dashboards, APIs and software development',
    ],
    proof:
      'Built an automated national dashboard that brought together information from more than 55 sources.',
    icon: Code2,
  },
  {
    title: 'Business',
    shortTitle: 'Business',
    description:
      'I have worked directly with companies, partners and internal teams. That experience taught me how to understand needs, communicate clearly and connect technical possibilities with business priorities.',
    items: [
      'Business development and outreach',
      'Partnership management',
      'Finance and operational follow-up',
      'Presentations, proposals and reporting',
    ],
    proof:
      'Supported partnership growth with DHL and UCB while developing relationships with international companies.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Leadership',
    shortTitle: 'Leadership',
    description:
      'My leadership experience comes from real responsibility: managing teams, coordinating recruitment, organizing conferences and helping people work toward the same objective.',
    items: [
      'Team and talent leadership',
      'Project and event coordination',
      'Recruitment and performance follow-up',
      'Stakeholder communication',
    ],
    proof:
      'Led talent-management work for more than 140 members and held national executive responsibilities in Belgium.',
    icon: UsersRound,
  },
  {
    title: 'International',
    shortTitle: 'International',
    description:
      'Working across countries and cultures has shaped how I communicate and collaborate. I have supported international talent programs, partnerships and events involving companies and global organizations.',
    items: [
      'Cross-cultural collaboration',
      'International partnerships',
      'Global talent programs',
      'Multilingual communication',
    ],
    proof:
      'Worked across Tunisia, Belgium, France, Canada and the United States, including relations with UNIDO and the United Nations.',
    icon: Earth,
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'AI and Business Development Trainee',
    company: 'OliveSoft',
    location: 'Paris, France · Remote',
    period: 'June 2026 — Present',
    summary:
      'Supporting internal automation and business-development work by connecting workflow tools, reporting processes and team needs.',
    highlights: [
      'Structured workflow automations with n8n and Microsoft 365 tools.',
      'Prepared proposals and presentation material for services and possible AI use cases.',
      'Presented progress to the team and translated business needs into practical workflow ideas.',
    ],
    tags: ['Technology', 'Business'],
  },
  {
    role: 'New Sales and Business Development Leader',
    company: 'AIESEC International',
    location: 'Montreal, Canada',
    period: 'January 2025 — February 2026',
    summary:
      'Built corporate relationships and led outreach around AIESEC’s international talent programs.',
    highlights: [
      'Managed external relations with international companies and organizations.',
      'Initiated communication with Autodesk and organized a major SAP event at NYIT in New York.',
      'Received an invitation to attend the United Nations General Assembly in September 2025.',
    ],
    tags: ['Business', 'International'],
  },
  {
    role: 'National Executive Board Member — Global Talent and Business Development',
    company: 'AIESEC in Belgium',
    location: 'Brussels, Belgium',
    period: 'August 2024 — July 2025',
    summary:
      'Managed international talent recruitment, partner relations and data-supported improvements to the matching process.',
    highlights: [
      'Built an automated CV-screening process on AIESEC’s EXPA platform.',
      'Used recruitment data and partner feedback to improve matching and reporting.',
      'Supported 70% growth in the DHL partnership and 60% growth with UCB.',
    ],
    tags: ['Technology', 'Business', 'Leadership', 'International'],
  },
  {
    role: 'National Executive Board Member — Finance, Legal and Information Management',
    company: 'AIESEC in Belgium',
    location: 'Brussels, Belgium',
    period: 'August 2023 — July 2024',
    summary:
      'Managed financial, legal and information-management responsibilities at national level.',
    highlights: [
      'Developed budgets and supported accurate financial follow-up.',
      'Managed legal documents and cross-border agreements.',
      'Built an automated dashboard combining data from more than 55 sources.',
    ],
    tags: ['Technology', 'Business', 'Leadership'],
  },
  {
    role: 'Final Year Project Intern — Software Development and Data Integration',
    company: 'Mobelite',
    location: 'Monastir, Tunisia',
    period: 'February 2022 — July 2022',
    summary:
      'Developed a web and mobile flight-reservation solution with real-time data integration.',
    highlights: [
      'Worked across frontend, backend and database components.',
      'Integrated Amadeus APIs for flight availability, schedules and pricing.',
      'Tested application data flows and completed the project with a grade of 17/20.',
    ],
    tags: ['Technology'],
  },
]

export type Project = {
  slug: string
  title: string
  category: string
  intro: string
  challenge: string
  contribution: string[]
  outcome: string
  technologies: string[]
  image: string
}

export const projects: Project[] = [
  {
    slug: 'national-reporting-automation',
    title: 'National Reporting Automation',
    category: 'Data & Operations',
    intro:
      'A reporting system that brought together information from more than 55 sources for national team leaders.',
    challenge:
      'Reporting required repeated manual work and made it harder for decision-makers to focus on analysis.',
    contribution: [
      'Structured information from multiple sources into one reporting view.',
      'Designed the workflow around the needs of national team leaders.',
      'Improved accessibility and consistency of recurring reporting.',
    ],
    outcome:
      'Reduced repetitive work and gave leaders more time to review performance and make decisions.',
    technologies: ['Dashboarding', 'Data workflows', 'KPI reporting', 'Automation'],
    image: '/projects/reporting.svg',
  },
  {
    slug: 'candidate-screening',
    title: 'Automated Candidate Screening',
    category: 'Talent & Automation',
    intro:
      'A structured CV-screening process built on AIESEC’s internal EXPA platform.',
    challenge:
      'Candidate shortlisting needed to be faster and more consistent across the international talent process.',
    contribution: [
      'Translated recruitment criteria into a structured screening workflow.',
      'Connected candidate information with partner hiring needs.',
      'Used feedback and recruitment data to improve the matching process.',
    ],
    outcome:
      'Made shortlisting more consistent and supported clearer decision-making during recruitment.',
    technologies: ['EXPA', 'Workflow design', 'Recruitment data', 'Process automation'],
    image: '/projects/screening.svg',
  },
  {
    slug: 'flight-reservation-platform',
    title: 'Flight Reservation Platform',
    category: 'Software & APIs',
    intro:
      'A web and mobile application for comparing and reserving flights using real-time information.',
    challenge:
      'The platform needed reliable flight, schedule, price and availability data across two interfaces.',
    contribution: [
      'Developed parts of the frontend and backend.',
      'Integrated real-time data through Amadeus APIs.',
      'Worked with databases and tested data flows across the application.',
    ],
    outcome:
      'Delivered a complete final-year project graded 17/20.',
    technologies: ['REST APIs', 'Amadeus API', 'Web development', 'Mobile development'],
    image: '/projects/flights.svg',
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation at OliveSoft',
    category: 'Automation & Business',
    intro:
      'Internal workflow ideas designed to support coordination, reporting and daily productivity.',
    challenge:
      'Information and follow-up activities were spread across different tools and needed clearer structure.',
    contribution: [
      'Built workflow concepts with n8n.',
      'Connected Microsoft 365 tools for documentation and follow-up.',
      'Presented technical possibilities in a business-friendly way.',
    ],
    outcome:
      'Created practical automation proposals linked to the team’s daily needs.',
    technologies: ['n8n', 'Power Automate', 'Microsoft 365', 'Process design'],
    image: '/projects/workflows.svg',
  },
]

export const skills = [
  {
    title: 'Data & Automation',
    items: ['Python', 'SQL', 'ETL concepts', 'Data cleaning', 'Data transformation', 'n8n', 'Power Automate'],
  },
  {
    title: 'Business Intelligence & Big Data',
    items: ['Power BI', 'Dashboarding', 'KPI reporting', 'Data modelling', 'Hadoop', 'Spark', 'Talend'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Oracle', 'PL/SQL', 'MongoDB'],
  },
  {
    title: 'Software & APIs',
    items: ['REST APIs', 'Angular', 'Symfony', 'Flutter', 'JavaScript', 'HTML/CSS', 'Java', 'C++', 'C#'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'AWS basics', 'Linux basics', 'Agile/Scrum', 'SDLC', 'Documentation'],
  },
  {
    title: 'Business & Leadership',
    items: ['Business development', 'Partnerships', 'Recruitment', 'Team leadership', 'Finance', 'Event management'],
  },
]

export const education = [
  {
    degree: 'Engineering Degree in Data Science and Artificial Intelligence',
    school: 'Polytechnic School of Sousse',
    location: 'Tunisia',
    period: '2025 — 2027 · Ongoing',
    detail:
      'Coursework and projects in machine learning, big data, advanced data processing and intelligent systems.',
  },
  {
    degree: 'Master’s Degree in Big Data Analytics and E-commerce',
    school: 'Institute of Higher Commercial Studies of Carthage',
    location: 'Tunisia',
    period: '2022 — 2023',
    detail:
      'Focused on large-scale data processing and the use of data for decisions in digital business.',
  },
  {
    degree: 'Bachelor’s Degree in Business Intelligence',
    school: 'Higher Institute of Management Studies of Sousse',
    location: 'Tunisia',
    period: '2019 — 2022',
    detail:
      'Focused on data analysis, dashboards and business reporting. Graduated as valedictorian.',
  },
]

export const milestones = [
  {
    title: 'United Nations General Assembly',
    detail: 'Invited to attend the UN General Assembly in New York in September 2025.',
  },
  {
    title: 'Valedictorian',
    detail: 'Graduated first in class from the Bachelor’s Degree in Business Intelligence.',
  },
  {
    title: 'Final Year Project',
    detail: 'Completed the flight-reservation project with a grade of 17/20.',
  },
  {
    title: 'Conference Leadership',
    detail: 'Conference Manager for NatCo 2023 and 2024, and Agenda Manager for SpringCo 2025.',
  },
]
