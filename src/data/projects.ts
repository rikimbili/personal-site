interface Project {
  title: string;
  description: string;
  tags: string[];
  visitLink?: string;
  sourceLink?: string;
  image?: string;
  imageDark?: string;
  imageLight?: string;
  visitTextOverride?: string;
}

export default [
  {
    title: "Keymorph",
    description:
      "Softwaredevelopment collective. Our goal is to create responsive and useful apps under a unified ecosystem.",
    tags: ["Web Development"],
    imageDark: "/../public/images/projects/keymorph_dark.png",
    imageLight: "/../public/images/projects/keymorph_light.png",
    visitLink: "https://keymorph.com",
    sourceLink: "https://github.com/keymorph",
    visitTextOverride: "Visit",
  },
  {
    title: "Notes",
    description:
      "Note-taking web app with categories, rich text editing and markdown support.",
    tags: ["Next.js", "MUI", "CosmosDB", "Framer Motion"],
    imageDark: "/../public/images/projects/notes_dark.png",
    visitLink: "https://notes.keymorph.com",
    sourceLink: "https://github.com/Keymorph/notes",
  },
  {
    title: "AiBud",
    description:
      "Discord chat bot that uses OpenAI's GPT-3 language models to generate reply prompts.",
    tags: ["Discord.js", "TypeScript"],
    image: "/../public/images/projects/AiBud.png",
    sourceLink: "https://github.com/Rikimbili/AiBud",
  },
  {
    title: "motionLED",
    description:
      "Python program to control LED lights with motion detection and schedules.",
    tags: ["Python", "IoT", "Raspberry Pi", "API"],
    image: "/../public/images/projects/motionLED.png",
    sourceLink: "https://github.com/Rikimbili/motionLED",
  },
] as Project[];
