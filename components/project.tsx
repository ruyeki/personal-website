import { title, subtitle } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function Project(){
    return(
    <section className="flex min-h-screen flex-col items-left justify-left gap-4 py-8 md:py-10">
    <div className="inline-block max-w-xl text-left justify-left">
      <span className={subtitle()}>MY WORK</span>
      <span className={title({ color: "violet" })}>Projects.</span>
      <span className={subtitle()}>A list of all the projects I&apos;ve completed, whether in a team setting or solo.</span>
      <br/>
      <Card>
        <CardBody>
          <h1>D2D Cure Website</h1>
          <p>A comprehensive overhaul of the D2D Cure Database, enhancing user experience in submitting and curating enzyme data for the Siegel Lab.</p>
        </CardBody>
      </Card>

            <br/>
      <Card>
        <CardBody>
          <h1>Hephaestus</h1>
          <p>A task manager tool built for Persist AI for my intern project. This tool helps assign tasks and track sprint progress across all departments within the company.</p>
        </CardBody>
      </Card>

            <br/>
      <Card>
        <CardBody>
          <h1>ScoutAI</h1>
          <p>Built for UC Davis Basketball, this AI agent is customized to create scouting reports and analysis of opposing players and teams.</p>
        </CardBody>
      </Card>


            <br/>
      <Card>
        <CardBody>
          <h1>NBA SliderStats</h1>
          <p>A fun way to customize stat rankings for NBA players and teams using sliders!</p>
        </CardBody>
      </Card>


</div>
</section>

    );
}