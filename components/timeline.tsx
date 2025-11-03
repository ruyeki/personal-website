// components/Timeline.tsx
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { PersistIcon, CodeLabIcon, ASAIcon, LibretextIcon, CEAIcon } from "./icons";

const Timeline = () => (
  <div className=" w-full  max-w-4xl flex justify-center px-4">
    <div className="max-w-4xl w-full">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work !mx-auto"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Jun 2025 – Current"
          icon={<PersistIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3 className="text-4xl font-extrabold text-white">
            Software Engineer
          </h3>
          <h4 className="text-lg text-gray-300">Persist AI</h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Built a full-stack React application integrating a multi-modal RAG
              pipeline with specialized AI agents to generate lab reports and
              synthesize insights from text, images, and tabular data, cutting
              reporting time by 70%.
            </li>
            <li>
              Automated Amscope microscope workflows with Python to enable XY
              stage control, brightfield imaging, microsphere detection, and
              amorphous vs. crystalline classification, enhancing experimental
              throughput.
            </li>
            <li>
              Co-developed a customer-facing CloudLab Viewer that lets clients
              upload formulation data and explore results via interactive
              graphs, charts, and tables, generating over $10,000/month in
              company revenue.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Feb 2025 – Jun 2025"
          icon={<PersistIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title text-4xl font-extrabold text-white"
            style={{ color: "white" }}
          >
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            Persist AI
          </h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Led development of a custom project management platform adopted as
              the central hub for task tracking and cross-functional
              collaboration, saving the company over $5,000 annually compared to
              Jira subscriptions.
            </li>
            <li>
              Implemented Python scripts to ensure a seamless migration of lab
              data from SQLite to a PostgreSQL database.
            </li>
            <li>
              Developed features for a full-stack biotech data platform,
              including interactive data visualization tools and automated
              onboarding pipelines for drug profiling, accelerating client
              workflows.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Dec 2023 – Dec 2024"
          icon={<CodeLabIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title text-4xl font-extrabold text-white"
            style={{ color: "white" }}
          >
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            CodeLab
          </h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Rebuilt the Siegel Lab's enzyme web database, serving over 40
              undergraduate institutions and 1000 students nationwide by
              transitioning the tech stack from PHP to a modern React, Next.js,
              and Typescript framework.
            </li>
            <li>
              Implemented user authentication and level-based authorization
              using Firebase and Google OAuth.
            </li>
            <li>
              Engineered a user management page for administrators to
              approve/delete selected users within their institution.
            </li>
            <li>
              Recreated the frontend of the website to the design team's
              specifications using NextUI and Tailwind CSS.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Jan 2024 – May 2025"
          icon={<ASAIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title text-4xl font-extrabold text-white"
            style={{ color: "white" }}
          >
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            Aggie Sports Analytics
          </h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Developed Scout AI Application during Winter and Spring 2024-2025 quarters to provide AI-powered sports analytics and scouting insights.
            </li>
            <li>
              Built NBA Slider Stats app enabling users to customize stat preferences with interactive sliders and generate personalized NBA player rankings based on selected criteria.
            </li>
            <li>
              Utilized Python and the NBA API to create a data-driven platform for sports analytics and player evaluation.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Jan 2023 – Feb 2024"
          icon={<LibretextIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title text-4xl font-extrabold text-white"
            style={{ color: "white" }}
          >
            Site Reliability Engineer (Part-time)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            LibreTexts, Davis, CA
          </h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Ensured functionality of an expansive Kubernetes cluster running educational software used by students and teachers alike.
            </li>
            <li>
              Implemented custom PromQL queries for real-time tracking of key user behaviors, including pod-spawning and cluster utilization.
            </li>
            <li>
              Implemented interactive HTML components to the JupyterHub website, culminating in a 10% increase in website usage.
            </li>
            <li>
              Improved software documentation accuracy to increase future team efficiency.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(5, 34, 59)" }}
          contentStyle={{ background: "rgb(5, 34, 59)", color: "#fff" }}
          date="Jun 2022 – Aug 2022"
          icon={<CEAIcon />}
          iconStyle={{ background: "orange", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title text-4xl font-extrabold text-white"
            style={{ color: "white" }}
          >
            Software Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            Clean Energy Associates, Shanghai, CN
          </h4>
          <ul className="mt-4 text-base text-gray-200 list-disc list-inside">
            <li>
              Collaborated with 15+ software developers, participating in daily stand-ups for smooth communication and operational efficiency.
            </li>
            <li>
              Employed React to reduce bug backlog by 20% by resolving issues for the company's Project Data Collector application.
            </li>
            <li>
              Played an instrumental role in integrating DocuSign within the company's operations by helping lead the implementation process.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
);

export default Timeline;
