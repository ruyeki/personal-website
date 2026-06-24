import SiteHeader from "@/components/site-header";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <SiteHeader />
      <Experience />
      <Education />
      <Project />
      <Skills />
    </div>
  );
}
