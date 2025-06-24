import Timeline from "@/components/timeline";
import { title, subtitle } from "@/components/primitives";

export default function Experience(){
    return( 
        <div>
    <section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-left justify-left">
        <span className={subtitle()}>WHAT I HAVE DONE SO FAR</span>
        <span className={title({ color: "violet" })}>Work Experiences.</span>
        <br/>
        </div>
    </section>

    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Timeline />
    </section>
        </div>      
    );
}