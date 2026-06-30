export type Project = {
  name: string
  slug: string
  tagline: string
  description: string
  status: 'featured' | 'candidate' | 'experiment'
  category: 'Developer Tools' | 'AI Products' | 'Desktop Apps' | 'Full-stack Apps' | 'Experiments'
  stack: string[]
  highlights: string[]
  links: {
    type: 'github' | 'site'
    href: string
    label: string
  }[]
}

export const projects: Project[] = [
  {
    name: 'DepSpy',
    slug: 'depspy',
    tagline: 'npm dependency analysis and visualization tool',
    description:
      'A developer tool for exploring package dependency trees, duplicated dependencies, circular dependencies, and package metadata through both a local CLI and an online query experience.',
    status: 'featured',
    category: 'Developer Tools',
    stack: ['CLI', 'Dependency graph', 'Visualization', 'Caching', 'i18n'],
    highlights: [
      'Tree-based dependency rendering with pruning to keep complex graphs readable.',
      'Local CLI and online search modes for different analysis workflows.',
      'Duplicated and circular dependency detection with interactive inspection.'
    ],
    links: [
      { type: 'github', href: 'https://github.com/seasonHL/depspy', label: 'GitHub' },
      { type: 'site', href: 'https://depspy.github.io/search', label: 'Online query' }
    ]
  },
  {
    name: 'Prompt Hub',
    slug: 'prompthub',
    tagline: 'prompt discovery, submission, and review platform',
    description:
      'A full-stack prompt product MVP with public discovery pages, gated copy actions, authentication, submissions, review flow, database-backed content, and image storage.',
    status: 'featured',
    category: 'AI Products',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Vercel Blob', 'Playwright'],
    highlights: [
      'Public browsing flow backed by Prisma with a no-database fallback for local development.',
      'Auth-gated copy and SSO-ready account model.',
      'Submission and admin review flow with test and build scripts.'
    ],
    links: [{ type: 'github', href: 'https://github.com/seasonHL/prompthub', label: 'GitHub' }]
  },
  {
    name: 'Desktop Agent',
    slug: 'desktop-agent',
    tagline: 'local AI assistant with desktop task execution',
    description:
      'A Tauri desktop assistant that combines AI chat, conversation management, local task execution, and configurable desktop workflows.',
    status: 'featured',
    category: 'Desktop Apps',
    stack: ['Tauri', 'React', 'TypeScript', 'Rust', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Desktop-first AI interface with local file and command execution concepts.',
      'Multi-conversation management and configuration screens.',
      'Lightweight cross-platform app shell built with Tauri.'
    ],
    links: [{ type: 'github', href: 'https://github.com/seasonHL/season', label: 'GitHub' }]
  },
  {
    name: 'OpenClaw Desktop Pet',
    slug: 'desktop-pet',
    tagline: 'transparent desktop companion for agent runtime states',
    description:
      'A Tauri MVP that turns agent runtime state into a transparent desktop surface, with a control panel, WebSocket gateway, polling fallback, and behavior states.',
    status: 'featured',
    category: 'Experiments',
    stack: ['Tauri', 'React', 'Zustand', 'Zod', 'WebSocket', 'Vitest'],
    highlights: [
      'Transparent pet window plus secondary control panel.',
      'WebSocket-first bridge with degraded polling fallback.',
      'Mock gateway for validating idle, working, review, approval, warning, success, and offline states.'
    ],
    links: [{ type: 'github', href: 'https://github.com/seasonHL/desktop-pet', label: 'GitHub' }]
  },
  {
    name: 'Fridge Tracker',
    slug: 'fridge-tracker',
    tagline: 'mobile food inventory tracker',
    description:
      'A Nest.js and Flutter project for tracking fridge food inventory. It is a good mobile/full-stack candidate once screenshots and product notes are added.',
    status: 'candidate',
    category: 'Full-stack Apps',
    stack: ['Nest.js', 'Flutter', 'Prisma', 'Neon'],
    highlights: [
      'Monorepo with API and client workspaces.',
      'Mobile client plus server-side data layer.',
      'Useful life-tool concept that can show product thinking.'
    ],
    links: [{ type: 'github', href: 'https://github.com/seasonHL/fridge-tracker', label: 'GitHub' }]
  },
  {
    name: 'Content Sharing Platform',
    slug: 'content-sharing-platform',
    tagline: 'content platform backend and Expo app',
    description:
      'A content-sharing product candidate with a public backend repository and Expo client. Best used as a case study after the README and screenshots are tightened.',
    status: 'candidate',
    category: 'Full-stack Apps',
    stack: ['Expo', 'React Native', 'API', 'Content platform'],
    highlights: [
      'Product-shaped frontend and backend split.',
      'Good candidate for showing mobile and platform thinking.',
      'Needs a stronger narrative before becoming a homepage feature.'
    ],
    links: [
      {
        type: 'github',
        href: 'https://github.com/seasonHL/content-sharing-platform',
        label: 'Backend'
      },
      {
        type: 'github',
        href: 'https://github.com/seasonHL/content-sharing-platform-app',
        label: 'App'
      }
    ]
  }
]

export const featuredProjects = projects.filter((project) => project.status === 'featured')
