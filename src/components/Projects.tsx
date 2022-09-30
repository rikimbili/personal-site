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
          title={"Keymorph"}
          description={
            "Software development collective. Our goal is to create responsive and useful apps under a unified ecosystem."
          }
          tags={["Web Development", "UI/UX"]}
          image={"/../public/images/projects/keymorph_dark.png"}
          visitLink={"https://keymorph.com"}
          sourceLink={"https://github.com/keymorph"}
          visitTextOverride={"Visit"}
        />
        <ProjectCard
          title={"Notes"}
          description={
            "Note-taking web app with categories, rich text editing and markdown support."
          }
          tags={["Next.js", "MUI", "CosmosDB", "Framer Motion"]}
          image={"/../public/images/projects/notes.png"}
          visitLink={"https://notes.keymorph.com"}
          sourceLink={"https://github.com/keymorph/notes"}
        />
        <ProjectCard
          title={"AiBud"}
          description={
            "Discord chat bot that uses OpenAI's GPT-3 language models to generate reply prompts."
          }
          tags={["Discord.js", "TypeScript"]}
          image={"/../public/images/projects/AiBud.png"}
          sourceLink={"https://github.com/Rikimbili/AiBud"}
        />
        <ProjectCard
          title={"motionLED"}
          description={
            "Python program to control LED lights with motion detection and schedules."
          }
          tags={["Python", "IoT", "Raspberry Pi", "API"]}
          image={"/../public/images/projects/motionLED.png"}
          sourceLink={"https://github.com/Rikimbili/motionLED"}
        />
      </div>
    </section>
  );
}
