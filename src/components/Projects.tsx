import AnchorLink from "./Inputs/AnchorLink";
import ProjectCard from "./Surfaces/ProjectCard";

export default function Projects() {
  return (
    <section
      id={"projects"}
      className={
        "scroll-mt-20 text-justify text-lg sm:w-full sm:text-xl lg:text-2xl"
      }
    >
      <h2
        className={"group mb-4 w-fit text-3xl sm:mb-8 sm:text-4xl lg:text-5xl"}
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
        <ProjectCard
          title={"Notes"}
          description={
            "Note-taking webapp with categories, rich text editing and markdown support."
          }
          tags={["Next.js", "MUI", "CosmosDB", "Framer Motion"]}
          image={"/../public/images/projects/notes.png"}
          hostedLink={"https://notes.keymorph.com"}
          sourceLink={"https://github.com/keymorph/notes"}
        />
        <ProjectCard
          title={"Notes"}
          description={
            "Note-taking webapp with categories, rich text editing and markdown support."
          }
          tags={["Next.js", "MUI", "CosmosDB", "Framer Motion"]}
          image={"/../public/images/projects/notes.png"}
          hostedLink={"https://notes.keymorph.com"}
          sourceLink={"https://github.com/keymorph/notes"}
        />
        <ProjectCard
          title={"Notes"}
          description={
            "Note-taking webapp with categories, rich text editing and markdown support."
          }
          tags={["Next.js", "MUI", "CosmosDB", "Framer Motion"]}
          image={"/../public/images/projects/notes.png"}
          hostedLink={"https://notes.keymorph.com"}
          sourceLink={"https://github.com/keymorph/notes"}
        />
        <ProjectCard
          title={"Notes"}
          description={
            "Note-taking webapp with categories, rich text editing and markdown support."
          }
          tags={["Next.js", "MUI", "CosmosDB", "Framer Motion"]}
          image={"/../public/images/projects/notes.png"}
          sourceLink={"https://github.com/keymorph/notes"}
        />
      </div>
    </section>
  );
}
