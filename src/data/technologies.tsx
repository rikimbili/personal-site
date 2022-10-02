import { ReactNode } from "react";
import {
  SiFramer,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface Technology {
  name: string;
  icon?: ReactNode;
  link?: string;
}

const TECHNOLOGIES = {
  TYPESCRIPT: {
    name: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
  } as Technology,
  NEXTJS: {
    name: "Next.js",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
  } as Technology,
  TAILWINDCSS: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
  } as Technology,
  HEADLESSUI: {
    name: "Headless UI",
    link: "https://headlessui.com/",
  } as Technology,
  MOTION: {
    name: "Framer Motion",
    icon: <SiFramer />,
    link: "https://www.framer.com/motion/",
  } as Technology,
  VERCEL: {
    name: "Vercel",
    icon: <SiVercel />,
    link: "https://vercel.com/",
  } as Technology,
  GITHUB: {
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com",
  } as Technology,
};

export default TECHNOLOGIES;
