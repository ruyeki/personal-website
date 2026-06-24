export default function Education() {
  return (
    <section id="education">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>

      <div className="mt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-lg font-semibold">
            University of California, Davis
          </h3>
          <span className="whitespace-nowrap text-sm text-foreground/45">
            2021 – 2025
          </span>
        </div>
        <p className="text-foreground/85">B.S. Computer Science</p>
        <p className="mt-2 text-sm leading-relaxed text-[#c9a36b]">
          Data Structures &amp; Algorithms, Operating Systems, Computer
          Networks, Databases, Computer Architecture, Web Programming, Software
          Engineering, Discrete Mathematics
        </p>
      </div>
    </section>
  );
}
