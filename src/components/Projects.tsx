"use client";

import Button from "@components/Inputs/Button";
import { spawnVariants } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
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
      fadeInDelay={0.08}
      className={
        "relative flex scroll-mt-20 flex-col gap-6 text-pretty sm:w-full sm:gap-8"
      }
    >
      <div className={"flex items-center gap-4"}>
        <h2
          className={
            "group flex w-fit select-none items-center gap-2 text-center text-3xl font-semibold sm:text-4xl"
          }
        >
          Projects
          <AnchorLink
            href={"#projects"}
            className={"opacity-0 group-hover:opacity-100"}
          />
        </h2>
      </div>
      <ul
        className={
          "grid w-full grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        }
      >
        <AnimatePresence initial={false}>
          {projectsToShow.map((project, idx) => (
            <m.li
              key={project.title}
              layout
              initial={"initial"}
              whileInView={"visible"}
              exit={{
                opacity: 0,
                scale: 0.98,
                transition: { duration: 0.18 },
              }}
              viewport={{
                once: true,
              }}
              variants={spawnVariants}
              custom={0.08 + (idx % 3) * 0.06}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={"min-w-0"}
            >
              <ProjectCard
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
        </AnimatePresence>
      </ul>
      {projects.length > PROJECTS_TO_SHOW && (
        <Button
          className={"group mx-auto mt-2"}
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
