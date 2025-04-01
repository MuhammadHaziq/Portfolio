"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { MotionSection } from "./Motion/MotionSectionWrapper";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <MotionSection
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technolgy</span>, I decided to
        pursue my passion for programming.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Next js, NoSQL and SQL
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies.
        {/* I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>
      <p className="mb-3">
        I have experience working with{" "}
        <span className="font-medium">agile methodologies</span>. I have worked
        on a variety of projects, from small websites to large web applications.
        I have experience working with both front-end and back-end technologies.
        I am always looking to improve my skills and learn new things.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Devops (Docker, CICD)</span>.
      </p>
    </MotionSection>
  );
}
