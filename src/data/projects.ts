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
    name: "More coming soon...",
    emoji: "✨",
    description: "New projects are always brewing. Stay tuned.",
    status: "coming-soon",
  },
];
