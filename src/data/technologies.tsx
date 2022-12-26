import {
  SiFramer,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const TECHNOLOGIES = {
  TYPESCRIPT: {
    name: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  NEXTJS: {
    name: "Next.js",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
  },
  TAILWINDCSS: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
  },
  HEADLESSUI: {
    name: "Headless UI",
    icon: null,
    link: "https://headlessui.com/",
  },
  MOTION: {
    name: "Framer Motion",
    icon: <SiFramer />,
    link: "https://www.framer.com/motion/",
  },
  VERCEL: {
    name: "Vercel",
    icon: <SiVercel />,
    link: "https://vercel.com/",
  },
  GITHUB: {
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com",
  },
};

export default TECHNOLOGIES;
