// components/Timeline.tsx
'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CEAIcon, LibretextIcon, ASAIcon, PersistIcon, CodeLabIcon, Logo } from './icons';


const Timeline = () => (
    <div className=" w-full  max-w-4xl flex justify-center px-4">
    <div className="max-w-4xl w-full">
  <VerticalTimeline>
<VerticalTimelineElement
  className="vertical-timeline-element--work !mx-auto"
  contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)',  }}
  date="Jun 2025 - Present"
  iconStyle={{ background: 'orange', color: '#fff' }}
  icon={<PersistIcon />}
>
  <h3 className="text-4xl font-extrabold text-white">Software Engineer</h3>
  <h4 className="text-lg text-gray-300">Persist AI</h4>
  <p className="mt-4 text-base text-gray-200">
    Currently part of the Infrastructure team.
  </p>
</VerticalTimelineElement>

    
        <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)' }}
      date="Feb 2025 - Jun 2025"
      iconStyle={{ background: 'orange', color: '#fff' }}
      icon={<PersistIcon/>}
    >
      <h3 className="vertical-timeline-element-title text-4xl font-extrabold text-white" style = {{color: "white"}}>Software Engineer Intern</h3>
      <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">Persist AI</h4>
      <ul className=" mt-4 text-base text-gray-200 list-disc list-inside text-white">
        <li>Led the development of a project management platform called Hepahestus, which now serves as the main tool for task management across all teams at Persist.</li>
        <br />
        <li>Developed migration scripts in Python to assist in a mass database transfer from SQLite to Postgresql</li>
        <br />
        <li>Contributed features to a Flask data platform for the lab, integrating various data viewers as well as onboarding scripts for drugs. </li>
      </ul>
    </VerticalTimelineElement>
            <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)' }}
      date="Dec 2023 - Jun 2025"
      iconStyle={{ background: 'orange', color: '#fff' }}
      icon={<ASAIcon/>}
    >
      <h3 className="vertical-timeline-element-title text-4xl font-extrabold text-white" style = {{color: "white"}}>Software Engineer Intern</h3>
      <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">Aggie Sports Analytics</h4>
      <ul className=" mt-4 text-base text-gray-200 list-disc list-inside text-white">
        <li>FQ24-SQ25 - Worked as part of the ScoutAI team where we developed a custom AI chatbot that could generate scouting reports for the UC Davis basketball team. We used Langchain, python, and the OpenAI APi.</li>
        <br />
        <li>WQ23 - Worked as part of the NBA Sliderstats team to develop a custom NBA stat ranking website using the NBA API and python.</li>
      </ul>
    </VerticalTimelineElement>
        <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)' }}
      date="Dec 2023 - Dec 2024"
      iconStyle={{ background: 'orange', color: '#fff' }}
      icon={<CodeLabIcon/>}
    >
      <h3 className="vertical-timeline-element-title text-4xl font-extrabold text-white" style = {{color: "white"}}>Software Engineer Intern</h3>
      <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">CodeLab</h4>
      <ul className=" mt-4 text-base text-gray-200 list-disc list-inside text-white">
        <li>Rebuilt the Siegel labs enzyme web database, which serves over 40 US undergraduate institutions by transitioning the tech stack from PHP to a modern React, Next.js, and Typescript framework.</li>
        <br />
        <li>Worked as part of the authentication team, integrating Clerk then eventually Firebase as our main authentication services.</li>
        <br />
        <li>Developed an admin dashboard where users with admin privledges could easily view/edit/delete users within their organization.</li>
        <br />
        <li>Rebuilt the frontend using HeroUI based on the design team&apos;s specifications.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)' }}
      date="Dec 2023 - Feb 2024"
      iconStyle={{ background: 'orange', color: '#fff' }}
      icon = {<LibretextIcon/>}
    >
      <h2 className="vertical-timeline-element-title" style = {{color: "white"}}>Site Reliability Engineer</h2>
      <h4 className="vertical-timeline-element-subtitle">Libretexts</h4>
            <ul className=" mt-4 text-base text-gray-200 list-disc list-inside text-white">
        <li>Maintained a large Kubernetes cluster that ran the Jupyterhub website, utilized by thousands of students and teachers nationwide.</li>
        <br />
        <li>Developed queries for Prometheus that would allowed admin to easily view key user statistics.</li>
      </ul>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(5, 34, 59)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(5, 34, 59)' }}
      date="Jun 2022 - Aug 2022"
      iconStyle={{ background: 'orange', color: '#fff' }}
      icon = {<CEAIcon/>}
    >
      <h2 className="vertical-timeline-element-title" style = {{color: "white"}}>Software Engineer Intern</h2>
      <h4 className="vertical-timeline-element-subtitle">Clean Energy Associates</h4>
                  <ul className=" mt-4 text-base text-gray-200 list-disc list-inside text-white">
        <li>Performed upkeep on the company&apos;s Project Data Collector application using React.</li>
        <br />
        <li>Spearheaded the integration of DocuSign within the company.</li>
        <br />
        <li>Overall a nice learning experience and a good introduction to Software Engineering.</li>
      </ul>
    </VerticalTimelineElement>

    
  </VerticalTimeline>
  </div>
  </div>
);

export default Timeline;
