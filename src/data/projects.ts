interface Project {
  title: string;
  description: string;
  tags: string[];
  visitLink?: string;
  sourceLink?: string;
  images: string[];
  visitTextOverride?: string;
}

export default [
  {
    title: "Daydream",
    description:
      "A web app for sharing and creating AI generated images using Stable Diffusion.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    images: [
      "/images/projects/daydream_1.png",
      "/images/projects/daydream_2.png",
      "/images/projects/daydream_3.png",
      "/images/projects/daydream_4.png",
      "/images/projects/daydream_5.png",
    ],
    visitLink: "https://daydream.wtf",
    sourceLink: "https://github.com/poop-team/daydream",
    visitTextOverride: "Try it out!",
  },
  {
    title: "Notes",
    description:
      "Note-taking web app with categories, rich text editing and markdown support.",
    tags: ["Next.js", "MUI", "Framer Motion", "Azure Cosmos DB"],
    images: ["/images/projects/notes.png"],
    visitLink: "https://notes.keymorph.com",
    sourceLink: "https://github.com/Keymorph/notes",
  },
  {
    title: "AiBud",
    description:
      "Discord chat bot that uses OpenAI's GPT-3 language models to generate reply prompts.",
    tags: ["Discord.js", "TypeScript"],
    images: ["/images/projects/aibud.png"],
    sourceLink: "https://github.com/Rikimbili/AiBud",
  },
  {
    title: "motionLED",
    description:
      "Python program to control LED lights with motion detection and schedules.",
    tags: ["Python", "IoT", "Raspberry Pi", "API"],
    images: ["/images/projects/motionled.png"],
    sourceLink: "https://github.com/Rikimbili/motionLED",
  },
] as Project[];
