interface ProjectType {
  title: string;
  summary: string;
  tech: string;
  github?: string;
  website?: string;
}

const projects: ProjectType[] = [
  {
    title: "AI Karthik",
    summary:
      "Multi-agent chatbot with a multi-modal RAG pipeline that generates structured lab reports from text, images, and graphs.",
    tech: "Python, LangChain, OpenRouter, Gemini, Chroma, React, Flask",
    github: "https://github.com/ruyeki/ai-karthik",
  },
  {
    title: "ScoutAI",
    summary:
      "AI scouting assistant for the UC Davis basketball team, with opponent data scraping and conversational memory.",
    tech: "Python, OpenAI API, LangChain, BeautifulSoup, SQLite",
    github: "https://github.com/nmaffly/SmartAnalytics",
  },
  {
    title: "Hephaestus",
    summary:
      "Full-stack project-management platform serving as Persist AI's central hub for tasks and cross-team coordination.",
    tech: "Flask, Jinja, Python, JavaScript",
  },
  {
    title: "D2D Cure — Siegel Lab Data Platform",
    summary:
      "Protein data platform used by 40+ institutions and 1,000+ students, with Firebase auth and admin user management.",
    tech: "Next.js, TypeScript, Tailwind, Prisma, MySQL, Firebase",
    github: "https://github.com/d2dcure/d2d-cure",
  },
  {
    title: "NBA Slider Stats",
    summary:
      "Interactive app that ranks every active NBA player from real-time stats via customizable preference sliders.",
    tech: "Python, NBA API, Streamlit",
    website: "https://sliderstats.streamlit.app/",
  },
];

export default function Project() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="mt-4 space-y-6">
        {projects.map((p, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="flex gap-4 text-sm">
                {p.github && (
                  <a
                    className="text-[#c9a36b] underline decoration-[#c9a36b]/40 underline-offset-4 hover:decoration-[#c9a36b]"
                    href={p.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.website && (
                  <a
                    className="text-[#c9a36b] underline decoration-[#c9a36b]/40 underline-offset-4 hover:decoration-[#c9a36b]"
                    href={p.website}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Website ↗
                  </a>
                )}
              </div>
            </div>
            <p className="mt-1 leading-relaxed text-foreground/75">
              {p.summary} <span className="text-foreground/35">·</span>{" "}
              <span className="text-[#c9a36b]">{p.tech}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
