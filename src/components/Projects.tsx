import { ForwardedRef, forwardRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import projects from "../data/projects";
import AnchorLink from "./Inputs/AnchorLink";
import Button from "./Inputs/Button";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./Surfaces/ProjectCard";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  //#region Hooks

  const [showAll, setShowAll] = useState(false);

  //#endregion

  //#region Derived State

  const projectsToShow = showAll ? projects : projects.slice(0, 4);

  //#endregion

  return (
    <SectionWrapper
      id={"projects"}
      fadeInDelay={0.1}
      className={
        "scroll-mt-20 text-justify text-lg sm:w-full sm:text-xl lg:text-2xl"
      }
    >
      <h2
        ref={ref}
        className={
          "group mb-4 w-fit select-none text-3xl sm:mb-8 sm:text-4xl lg:text-5xl"
        }
      >
        Projects{" "}
        <AnchorLink
          href={"#projects"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <div
        className={
          "flex flex-col flex-wrap items-center justify-center gap-8 sm:gap-16 lg:flex-row"
        }
      >
        {projectsToShow.map((project, idx) => (
          <ProjectCard
            key={idx}
            fadeInDelay={0.1 + (idx % 2) * 0.1}
            title={project.title}
            description={project.description}
            images={project.images}
            logo={project.logo}
            tags={project.tags}
            visitLink={project.visitLink}
            sourceLink={project.sourceLink}
            visitTextOverride={project.visitTextOverride}
          />
        ))}
      </div>
      {projects.length > 4 && (
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
