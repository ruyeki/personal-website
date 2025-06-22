import { title } from "@/components/primitives";
import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function ExperiencePage() {
  return (
  <section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10">
    <div className="inline-block max-w-xl text-left justify-left">
      <span className={title({ color: "violet" })}>Experiences</span>
      <Card>
        <CardBody>
          <h2>Software Engineer</h2>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        </Card>


</div>
</section>
  );
}
