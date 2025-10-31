// components/Timeline.tsx
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { PersistIcon, CodeLabIcon } from "./icons";

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
              Rebuilt the Siegel Lab’s enzyme web database, serving over 40
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
              Recreated the frontend of the website to the design team’s
              specifications using NextUI and Tailwind CSS.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
);

export default Timeline;
