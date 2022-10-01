interface Project {
  title: string;
  description: string;
  tags: string[];
  visitLink?: string;
  sourceLink?: string;
  image: string;
  visitTextOverride?: string;
}

export default [
  {
    title: "Keymorph",
    description:
      "Software development collective. Our goal is to create responsive and useful apps under a unified ecosystem.",
    tags: ["Web Development"],
    image: "/images/projects/keymorph_dark.png",
    visitLink: "https://keymorph.com",
    sourceLink: "https://github.com/keymorph",
    visitTextOverride: "Visit",
  },
  {
    title: "Notes",
    description:
      "Note-taking web app with categories, rich text editing and markdown support.",
    tags: ["Next.js", "MUI", "CosmosDB", "Framer Motion"],
    image: "/images/projects/notes_dark.png",
    visitLink: "https://notes.keymorph.com",
    sourceLink: "https://github.com/Keymorph/notes",
  },
  {
    title: "AiBud",
    description:
      "Discord chat bot that uses OpenAI's GPT-3 language models to generate reply prompts.",
    tags: ["Discord.js", "TypeScript"],
    image: "/images/projects/AiBud.png",
    sourceLink: "https://github.com/Rikimbili/AiBud",
  },
  {
    title: "motionLED",
    description:
      "Python program to control LED lights with motion detection and schedules.",
    tags: ["Python", "IoT", "Raspberry Pi", "API"],
    image: "/images/projects/motionLED.png",
    sourceLink: "https://github.com/Rikimbili/motionLED",
  },
] as Project[];
