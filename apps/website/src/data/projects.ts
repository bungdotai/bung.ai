export type ProjectStatus = "live" | "coming-soon";

export interface Project {
  name: string;
  emoji: string;
  description: string;
  url?: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: "Bung Portal",
    emoji: "🐡",
    description: "OpenClaw AI assistant dashboard",
    url: "https://openclaw.bung.ai",
    status: "live",
  },
  {
    name: "40 by 40 💰",
    emoji: "💰",
    description: "Are you on track to $40M by age 40?",
    url: "https://forty.bung.ai",
    status: "live",
  },
  {
    name: "Squanch 🏋️",
    emoji: "🏋️",
    description: "Track your squat, deadlift and bench with friends",
    url: "https://squanch.bung.ai",
    status: "live",
  },
  {
    name: "Wing 🍗",
    emoji: "🍗",
    description: "Track who shows up to Wingdome and where",
    url: "https://wing.bung.ai",
    status: "live",
  },
  {
    name: "More coming soon...",
    emoji: "✨",
    description: "New projects are always brewing. Stay tuned.",
    status: "coming-soon",
  },
];
