import type { SkillGroup } from "./types";

/**
 * `git config --list` — the toolchain.
 *
 * Skills grouped like INI sections in a git config. Edit the arrays —
 * SkillsSection maps over them.
 */
export const skillsMeta = {
  intro:
    "The stack I actually reach for, grouped like a config file. Most of it shows up somewhere in the log and branches above.",
};

export const skills: SkillGroup[] = [
  {
    section: "languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    section: "frontend",
    items: ["React", "HTML", "CSS"],
  },
  {
    section: "backend",
    items: ["FastAPI", "Flask / Jinja", "SQLAlchemy", "PostgreSQL", "SQLite", "REST APIs"],
  },
  {
    section: "ai-and-data",
    items: [
      "Multi-agent systems",
      "RAG",
      "LangChain",
      "OpenAI API",
      "OpenRouter",
      "Gemini",
      "Vector databases",
      "Chroma",
      "pgvector",
      "Web scraping / BeautifulSoup",
    ],
  },
  {
    section: "lab-automation",
    items: ["OPC-UA servers", "Workflow generation"],
  },
  {
    section: "testing",
    items: ["Pytest", "Playwright", "Vitest"],
  },
  {
    section: "infra-and-observability",
    items: ["Linux", "Ubuntu servers", "Prometheus", "Grafana", "node_exporter", "Self-hosting"],
  },
];
