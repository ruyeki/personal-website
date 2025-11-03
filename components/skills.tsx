import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
      gradient: "from-violet-600 to-purple-600",
    },
    {
      title: "Developer Tools",
      skills: [
        "React",
        "Next.js",
        "Git",
        "GitHub",
        "Flask",
        "Jinja",
        "Prisma",
        "MySQL",
        "PostgreSQL",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          className="text-left mb-12"
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
            MY ABILITIES
          </span>
          <h2 className={title({ color: "violet" })}>Technical Skills.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Gradient border effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
              />

              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 h-full">
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}
                  />
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-gray-300 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <span className="w-2 h-2 bg-violet-400 rounded-full group-hover/item:scale-125 transition-transform duration-200" />
                      <span className="group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-200">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
