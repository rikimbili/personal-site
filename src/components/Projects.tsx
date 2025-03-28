"use client";

import Button from "@components/Inputs/Button";
import { spawnVariants } from "@styles/motion-definitions";
import { m } from "framer-motion";
import { type ForwardedRef, forwardRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import projects from "../data/projects";
import ProjectCard from "./DataDisplay/ProjectCard";
import AnchorLink from "./Inputs/AnchorLink";
import SectionWrapper from "./SectionWrapper";

const PROJECTS_TO_SHOW = 6;

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  //#region Hooks

  const [showAll, setShowAll] = useState(false);

  //#region Derived State

  const projectsToShow = showAll
    ? projects
    : projects.slice(0, PROJECTS_TO_SHOW);

  //#endregion

  return (
    <SectionWrapper
      ref={ref}
      id={"projects"}
      fadeInDelay={0.1}
      className={
        "flex scroll-mt-20 flex-col gap-4 text-pretty sm:w-full sm:gap-6"
      }
    >
      <h2
        className={
          "group flex w-fit select-none items-center gap-2 text-center text-2xl sm:text-3xl"
        }
      >
        Projects
        <AnchorLink
          href={"#projects"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <ul className={"grid w-full grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2"}>
        {projectsToShow.map((project, idx) => (
          <m.li
            key={idx}
            initial={"initial"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={spawnVariants}
            custom={0.1 + (idx % 2) * 0.1}
          >
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              images={project.images}
              logo={project.logo}
              tags={project.tags}
              visitLink={project.visitLink}
              sourceLink={project.sourceLink}
              visitTextOverride={project.visitTextOverride}
            />
          </m.li>
        ))}
      </ul>
      {projects.length > PROJECTS_TO_SHOW && (
        <Button
          className={"group mx-auto mt-8"}
          variant={"text"}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
          {showAll ? (
            <MdExpandLess
              className={
                "text-3xl transition duration-200 group-hover:-translate-y-0.5"
              }
            />
          ) : (
            <MdExpandMore
              className={
                "text-3xl transition duration-200 group-hover:translate-y-0.5"
              }
            />
          )}
        </Button>
      )}
    </SectionWrapper>
  );
});

Projects.displayName = "Projects";

export default Projects;
