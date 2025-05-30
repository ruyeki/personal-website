import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ryan Uyeki
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-8">
            Computer Science Student at UC Davis
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Passionate software developer graduating in June 2025. I love building things,
            solving problems, and watching sports in my free time.
          </p>
          <div className="flex gap-4">
            <Link 
              href="#projects"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact" 
              className="px-6 py-3 border border-foreground text-foreground rounded-lg hover:bg-foreground/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg"
            alt="Developer coding"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-foreground/5">
        <h2 className="text-3xl font-bold text-foreground mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-foreground/70 mb-6">
              I'm a senior Computer Science student at UC Davis, set to graduate in June 2025.
              My academic journey has equipped me with strong problem-solving skills and
              a deep understanding of software development principles.
            </p>
            <p className="text-foreground/70">
              When I'm not coding, you can find me playing basketball, watching baseball,
              or following the latest UFC events. I believe in maintaining a healthy
              work-life balance and bringing the same dedication to both my professional
              and personal interests.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <ul className="text-foreground/70 space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technologies</h4>
                <ul className="text-foreground/70 space-y-1">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-foreground mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-foreground/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Project Name</h3>
            <p className="text-foreground/70 mb-4">
              Brief description of the project and the technologies used.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#"
                className="text-sm px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition"
              >
                View Demo
              </Link>
              <Link
                href="#"
                className="text-sm px-4 py-2 border border-foreground text-foreground rounded-lg hover:bg-foreground/10 transition"
              >
                Source Code
              </Link>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-foreground/5">
        <h2 className="text-3xl font-bold text-foreground mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-foreground/70 mb-8 text-center">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition"
            >
              Email Me
            </Link>
            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="px-6 py-3 border border-foreground text-foreground rounded-lg hover:bg-foreground/10 transition"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}