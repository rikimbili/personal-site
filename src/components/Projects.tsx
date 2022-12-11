import { ForwardedRef, forwardRef } from "react";

import projects from "../data/projects";
import AnchorLink from "./Inputs/AnchorLink";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./Surfaces/ProjectCard";

const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            fadeInDelay={0.1 + (index % 2) * 0.1}
            images={project.images}
            title={project.title}
            description={project.description}
            tags={project.tags}
            visitLink={project.visitLink}
            sourceLink={project.sourceLink}
            visitTextOverride={project.visitTextOverride}
          />
        ))}
      </div>
    </SectionWrapper>
  );
});

Projects.displayName = "Projects";

export default Projects;
