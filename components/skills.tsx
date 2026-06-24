const groups = [
  {
    label: "Languages",
    items: "Python, JavaScript, TypeScript, HTML/CSS, SQL",
  },
  {
    label: "Frameworks / Tools",
    items:
      "React, Next.js, Git, GitHub, Flask, Jinja, Prisma, MySQL, PostgreSQL",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

      <div className="mt-4 space-y-3">
        {groups.map((g) => (
          <p key={g.label} className="leading-relaxed">
            <span className="font-semibold">{g.label}:</span>{" "}
            <span className="text-[#c9a36b]">{g.items}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
