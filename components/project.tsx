import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";

interface ProjectType {
  title: string;
  tech: string;
  description: string[];
  github: string | null;
  website?: string;
}

export default function Project() {
  const projects: ProjectType[] = [
    {
      title: "AI Karthik",
      tech: "Python, Langchain, OpenRouter, Gemini, Chroma, SQLite, React, Flask",
      description: [
        "Engineered a multi-agent chatbot using LangChain, OpenRouter, and Gemini LLMs to generate structured project reports by retrieving and synthesizing text, images, and graphs from Persist AI's Lab OneNotebook.",
        "Deployed a multi-modal RAG pipeline that integrates Chroma and SQLite for accurate document retrieval.",
        "Created an automated script to monitor OneNotebook updates and dynamically refreshes the Chroma and SQLite databases, ensuring real-time access to the latest lab data.",
      ],
      github: "https://github.com/ruyeki/ai-karthik",
    },
    {
      title: "ScoutAI",
      tech: "Python, OpenAI API, Langchain, Beautiful Soup, SQLite",
      description: [
        "Developed an AI-powered scouting assistant for the UC Davis Basketball team to support game preparation.",
        "Led data pipeline development, including scraping opponent, player, and team statistics into a SQLite database.",
        "Implemented a memory module for the chatbot to maintain context across dialogues, enabling accurate responses.",
      ],
      github: "https://github.com/nmaffly/SmartAnalytics",
    },
    {
      title: "Hephaestus",
      tech: "Flask, Jinja, Python, HTML, CSS, JavaScript",
      description: [
        "Individually developed a custom full-stack project management platform for Persist AI, which is currently serving as the company's central hub for task management and cross-team coordination.",
        "Implemented timeline views, project dashboards, booking for lab resources, and an interactive UI to enhance productivity.",
      ],
      github: null,
    },
    {
      title: "D2D Cure - Siegel Lab Data Platform",
      tech: "Next.js, TypeScript, Tailwind CSS, Prisma, MySQL, Firebase, NextUI",
      description: [
        "Revamped the Siegel Lab's protein data collection website used by 40+ institutions and 1000+ students across the country.",
        "Leveraged Next.js, TypeScript, Tailwind, Prisma, and MySQL to develop a platform for seamless student login and data uploads.",
        "Implemented user authentication and level-based authorization using Firebase, along with a user management page for administrators to approve/delete users within their institution.",
        "Recreated the frontend of the website to the design team's specifications using NextUI.",
      ],
      github: "https://github.com/d2dcure/d2d-cure",
    },
    {
      title: "NBA Slider Stats",
      tech: "Python, NBA API, Streamlit",
      description: [
        "Developed an interactive web application allowing users to customize stat preferences with sliders to generate personalized NBA player rankings.",
        "Integrated the NBA API to fetch real-time player statistics and dynamically rank all active NBA players based on user-selected criteria.",
        "Deployed on Streamlit to provide an intuitive and responsive user experience for basketball analytics enthusiasts.",
      ],
      github: null,
      website: "https://sliderstats.streamlit.app/",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-purple-500/5" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span
            className={
              subtitle() +
              " text-violet-400 uppercase tracking-wider text-sm font-semibold"
            }
          >
            MY WORK
          </span>
          <h2 className={title({ color: "violet" }) + " mb-4"}>Projects.</h2>
          <p className="text-gray-400 text-lg">
            A list of all the projects I&apos;ve completed, whether in a team
            setting or solo.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 group">
                <CardHeader className="flex-col items-start gap-2 pb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((techItem, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardBody className="py-4">
                  <ul className="space-y-3">
                    {project.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-violet-400 mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                {(project.github || project.website) && (
                  <CardFooter className="pt-4 flex gap-4">
                    {project.github && (
                      <Link
                        className="text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-2 group/link"
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>View on GitHub</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </Link>
                    )}
                    {project.website && (
                      <Link
                        className="text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-2 group/link"
                        href={project.website}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>View Website</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </Link>
                    )}
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
