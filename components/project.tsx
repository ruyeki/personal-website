import { title, subtitle } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Link} from "@heroui/link";
import { motion } from "framer-motion";

export default function Project(){
    const projects = [
      {
        title: "AI Karthik",
        tech: "Python, Langchain, OpenRouter, Gemini, Chroma, SQLite, React, Flask",
        description: [
          "Engineered a multi-agent chatbot using LangChain, OpenRouter, and Gemini LLMs to generate structured project reports by retrieving and synthesizing text, images, and graphs from Persist AI's Lab OneNotebook.",
          "Deployed a multi-modal RAG pipeline that integrates Chroma and SQLite for accurate document retrieval.",
          "Created an automated script to monitor OneNotebook updates and dynamically refreshes the Chroma and SQLite databases, ensuring real-time access to the latest lab data."
        ],
        github: "https://github.com/ruyeki/ai-karthik"
      },
      {
        title: "ScoutAI",
        tech: "Python, OpenAI API, Langchain, Beautiful Soup, SQLite",
        description: [
          "Developed an AI-powered scouting assistant for the UC Davis Basketball team to support game preparation.",
          "Led data pipeline development, including scraping opponent, player, and team statistics into a SQLite database.",
          "Implemented a memory module for the chatbot to maintain context across dialogues, enabling accurate responses."
        ],
        github: "https://github.com/nmaffly/SmartAnalytics"
      },
      {
        title: "Hephaestus",
        tech: "Flask, Jinja, Python, HTML, CSS, JavaScript",
        description: [
          "Individually developed a custom full-stack project management platform for Persist AI, which is currently serving as the company's central hub for task management and cross-team coordination.",
          "Implemented timeline views, project dashboards, booking for lab resources, and an interactive UI to enhance productivity."
        ],
        github: null
      }
    ];

    return(
    <section className="relative min-h-screen py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-purple-500/5"></div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={subtitle() + " text-violet-400 uppercase tracking-wider text-sm font-semibold"}>MY WORK</span>
          <h2 className={title({ color: "violet" }) + " mb-4"}>Projects.</h2>
          <p className="text-gray-400 text-lg">A list of all the projects I've completed, whether in a team setting or solo.</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 group">
                <CardHeader className="flex-col items-start gap-2 pb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((techItem, i) => (
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
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-violet-400 mt-1.5 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                {project.github && (
                  <CardFooter className="pt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-2 group/link"
                    >
                      <span>View on GitHub</span>
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
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
