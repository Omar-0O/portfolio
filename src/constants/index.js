const PERSONAL_INFO = {
  fullName: 'Omar Mohamed Ahmed El-Sayed',
  displayName: 'Omar Mohamed',
  title: 'Software Engineer',
  role: 'Software Engineer',
  location: 'Cairo, Egypt',
  email: 'Contact.OmarMohamed@gmail.com',
  phone: '+20 106888907',
  github: 'https://github.com/Omar-0O',
  linkedin: 'https://www.linkedin.com/in/omar-el-sayed-21467837b/',
  copyright: '© 2026 Omar Mohamed Ahmed El-Sayed. All rights reserved.',
};


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: 'Code2',
    description: 'Core programming and scripting languages for systems, mobile, and web.',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'Kotlin',
      'C#',
      'SQL (PostgreSQL, T-SQL)',
      'C++',
      'Python',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Frontend & Mobile',
    icon: 'Smartphone',
    description: 'Modern reactive web and native Android client-side engineering.',
    skills: [
      'React 19',
      'Next.js 15',
      'Jetpack Compose',
      'Material 3',
      'Tailwind CSS',
      'shadcn/ui',
      'Radix UI',
      'TanStack Query',
      'Framer Motion',
      'Vite',
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'Database',
    description: 'Robust server-side frameworks, ORMs, secure relational databases & CMS.',
    skills: [
      'ASP.NET Core (.NET 9)',
      'Entity Framework Core',
      'Supabase (PostgreSQL, Auth, RLS)',
      'Microsoft SQL Server',
      'Room / SQLite',
      'Node.js',
      'Strapi CMS',
    ],
  },
  {
    title: 'Architecture, AI & DevOps',
    icon: 'Cpu',
    description: 'Enterprise architecture patterns, real-time multimodal AI, CI/CD and tooling.',
    skills: [
      'Clean Architecture',
      'MVVM',
      'Hilt (DI)',
      'Google Gemini Live API',
      'WebSockets',
      'Web Audio API',
      'Git',
      'GitHub Actions (CI/CD)',
      'Vitest',
      'JUnit',
      'Linux',
    ],
  },
];



const tech = [
  {
    name: 'React',
    color: '#53c1de',
  },
  {
    name: 'Next.js',
    color: '#ffffff',
  },
  {
    name: 'TypeScript',
    color: '#3178c6',
  },
  {
    name: 'ASP.NET Core',
    color: '#512bd4',
  },
  {
    name: 'Kotlin',
    color: '#7f52ff',
  },
  {
    name: 'Jetpack Compose',
    color: '#4285f4',
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
  },
  {
    name: 'Tailwind CSS',
    color: '#38bdf8',
  },
  {
    name: 'CI/CD & DevOps',
    color: '#21a366',
  },
];


const EXPERIENCES = [
  {
    type: 'Experience',
    badge: 'Volunteer Production Role',
    title: 'Software Engineer & Application Maintainer (Volunteer)',
    company: 'Resala Training Center (RTC) – Resala Charity Organization',
    location: 'Cairo, Egypt',
    website: 'https://resalartc.online',
    date: '2024 – Present',
    description: [
      'Actively own, develop, and maintain the official production platform (resalartc.online) used daily by the organization to manage internal operations, volunteer participation, courses, trainers, and beneficiaries.',
      'Engineered granular PostgreSQL/Supabase Row-Level Security (RLS) policies and versioned SQL migrations across 600+ commits to secure multi-branch and role-based workflows.',
      'Established automated CI/CD workflows using GitHub Actions for type-checking, linting, Vitest unit testing, and security scanning.',
    ],
    stack: [
      'React 18',
      'TypeScript',
      'Supabase',
      'PostgreSQL RLS',
      'GitHub Actions',
      'Vitest',
      'Tailwind CSS',
    ],
  },
];

const EDUCATION = [
  {
    type: 'Education',
    badge: 'Applied Technology Education',
    title: 'Diploma in Software Development',
    institution: 'Eva International Applied Technology School',
    location: 'Cairo, Egypt',
    date: 'Enrolled / In Progress',
    description: [
      'Rigorous software engineering curriculum with deep focus on Object-Oriented Programming (OOP), Data Structures & Algorithms, Relational Databases, UML, and Full-Stack Development.',
      'Practical engineering of layered backend architectures, secure RESTful APIs, and responsive client-side web and mobile systems.',
      'Comprehensive training in software design patterns, team Git workflows, database schema modeling, and unit testing.',
    ],
    focus: [
      'OOP',
      'Data Structures & Algorithms',
      'Relational Databases',
      'UML',
      'Full-Stack Development',
      'C# / ASP.NET',
      'Software Architecture',
    ],
  },
];

const ACHIEVEMENTS_LEADERSHIP = [
  {
    title: 'Competitive Programmer & Problem Solver',
    organization: 'Algorithmic & Data Structures Focus',
    badge: 'Competitive Programming',
    icon: 'Code2',
    description:
      'Actively engaged in algorithmic problem solving, competitive programming contests (Codeforces), and low-level system design using C++ and modern programming paradigms.',
  },
  {
    title: 'Committee Head & Technical Mentor',
    organization: 'Volunteer Community Initiatives & Workshops',
    badge: 'Leadership & Mentorship',
    icon: 'Users',
    description:
      'Led volunteer development initiatives and organized interactive student programming workshops covering Git, GitHub version control, modern web development, and clean architecture practices.',
  },
];

const PROJECT_IMAGES = {
  rtc: [
    '/projects/rtc/cover.svg',
    'https://placehold.co/1200x675/0f172a/38bdf8?text=RTC+Operations+Platform',
  ],
  evaSchool: [
    '/projects/eva-school/cover.svg',
    'https://placehold.co/1200x675/0f172a/6366f1?text=Eva-School+.NET+Backend+API',
  ],
  silah: [
    '/projects/silah/cover.svg',
    'https://placehold.co/1200x675/0f172a/a855f7?text=Silah+Android+App',
  ],
  evalyzer: [
    '/projects/evalyzer/cover.svg',
    'https://placehold.co/1200x675/0f172a/10b981?text=Evalyzer+Gemini+Live+AI',
  ],
  quranOnline: [
    '/projects/quran-online/cover.svg',
    'https://placehold.co/1200x675/0f172a/f59e0b?text=Quran+Online+Platform',
  ],
  medicalRep: [
    '/projects/medical-rep/cover.svg',
    'https://placehold.co/1200x675/0f172a/ec4899?text=Medical+Rep+Dashboard',
  ],
};

const projects = [
  {
    name: 'RTC — Volunteer Operations & Participation Platform',
    live: 'https://resalartc.online',
    github: 'https://github.com/Omar-0O/RTC',
    description: [
      {
        highlight: true,
        text: 'Production volunteer-operations platform',
      },
      {
        highlight: false,
        text: ' for Resala Training Center (600+ commits) replacing manual tracking with role- and branch-aware workflows for courses, trainers, attendance, and beneficiaries. Secured with ',
      },
      {
        highlight: true,
        text: 'PostgreSQL Row-Level Security (RLS)',
      },
      {
        highlight: false,
        text: ' and automated ',
      },
      {
        highlight: true,
        text: 'GitHub Actions CI/CD',
      },
      {
        highlight: false,
        text: '.',
      },
    ],
    stack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL RLS',
      'TanStack Query',
      'Vitest',
      'GitHub Actions',
    ],
    images: PROJECT_IMAGES.rtc,
  },
  {
    name: 'Eva-School — Student Results & Grade Management Backend API',
    live: '',
    github: 'https://github.com/Eva-School/Backend_Project/tree/dev',
    description: [
      {
        highlight: true,
        text: 'Layered school-management backend',
      },
      {
        highlight: false,
        text: ' (Api, Core, Repository, Services, Tests) handling academic dashboards, competency records, quarter/final grades, approvals, and audit logs. Engineered role-based ',
      },
      {
        highlight: true,
        text: 'JWT/Identity authentication',
      },
      {
        highlight: false,
        text: ', PostgreSQL/EF Core migrations, and ',
      },
      {
        highlight: true,
        text: 'Docker/Render deployment',
      },
      {
        highlight: false,
        text: ' configurations while providing technical direction across the team.',
      },
    ],
    stack: [
      'C#',
      'ASP.NET Core (.NET 10)',
      'Entity Framework Core 10',
      'PostgreSQL (Npgsql)',
      'ASP.NET Identity',
      'JWT',
      'AutoMapper',
      'Scalar/OpenAPI',
      'Docker',
      'xUnit',
    ],
    images: PROJECT_IMAGES.evaSchool,
  },
  {
    name: 'Silah — Local-First Android Family-Connection App',
    live: '',
    github: 'https://github.com/Omar-0O/Silah',
    description: [
      {
        highlight: true,
        text: 'Privacy-first native Android application',
      },
      {
        highlight: false,
        text: ' built with Clean Architecture and MVVM to track family communication logs on-device. Features ',
      },
      {
        highlight: true,
        text: 'contact/call-log synchronization',
      },
      {
        highlight: false,
        text: ', WorkManager scheduled reminders, and an ',
      },
      {
        highlight: true,
        text: 'urgency-based home-screen widget',
      },
      {
        highlight: false,
        text: '.',
      },
    ],
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Room/SQLite',
      'Hilt',
      'Coroutines/StateFlow',
      'WorkManager',
      'Robolectric',
    ],
    images: PROJECT_IMAGES.silah,
  },
  {
    name: 'Evalyzer — Real-Time Multimodal AI Skincare Consultant',
    live: '',
    github: 'https://github.com/Omar-0O/Evalyzer',
    description: [
      {
        highlight: true,
        text: 'Interactive Arabic voice- and camera-led skincare assistant',
      },
      {
        highlight: false,
        text: ' powered by Google Gemini Live API. Engineered a ',
      },
      {
        highlight: true,
        text: 'low-latency WebSocket audio pipeline',
      },
      {
        highlight: false,
        text: ' (16kHz PCM capture, 24kHz playback, voice interruption) and ',
      },
      {
        highlight: true,
        text: 'AI function-calling',
      },
      {
        highlight: false,
        text: ' for dynamic UI navigation.',
      },
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS 4',
      'Google GenAI SDK',
      'WebSockets',
      'Web Audio API',
    ],
    images: PROJECT_IMAGES.evalyzer,
  },
  {
    name: 'Quran Online — Reading, Search & Audio Platform',
    live: 'https://quran-app-ocz7.vercel.app/',
    github: 'https://github.com/Omar-0O/quran-app',
    description: [
      {
        highlight: true,
        text: 'Responsive Quran platform',
      },
      {
        highlight: false,
        text: ' for verse search, reading, and customizable audio recitations via Every Ayah API. Includes a ',
      },
      {
        highlight: true,
        text: 'custom audio player',
      },
      {
        highlight: false,
        text: ' with buffering/seeking and ',
      },
      {
        highlight: true,
        text: 'server-side route handlers',
      },
      {
        highlight: false,
        text: ' for offline downloads by Surah, Juz, and Hizb.',
      },
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Axios',
      'Next.js Route Handlers',
    ],
    images: PROJECT_IMAGES.quranOnline,
  },
  {
    name: 'Medical Rep Field-Sales Portal (Prototype)',
    live: 'https://medical-rep-psi.vercel.app/',
    github: 'https://github.com/Omar-0O/Medical-rep',
    description: [
      {
        highlight: true,
        text: 'Role-based field-sales dashboard',
      },
      {
        highlight: false,
        text: ' separating administrator and representative workflows for managing clients, products, orders, ',
      },
      {
        highlight: true,
        text: 'route tracking',
      },
      {
        highlight: false,
        text: ', and ',
      },
      {
        highlight: true,
        text: 'sales analytics',
      },
      {
        highlight: false,
        text: '.',
      },
    ],
    stack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'shadcn/ui',
    ],
    images: PROJECT_IMAGES.medicalRep,
  },
];

const additionalProjects = [];

export {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  PROJECT_IMAGES,
  tech,
  EXPERIENCES,
  EDUCATION,
  ACHIEVEMENTS_LEADERSHIP,
  projects,
  additionalProjects,
};



