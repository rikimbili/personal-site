import { SiGithub, SiLinkedin } from "react-icons/si";

import OpenInNew from "./Icons/OpenInNew";
import Button from "./Inputs/Button";

export default function Header() {
  return (
    <header className="flex h-12 w-fit select-none justify-center self-center rounded-b-2xl bg-slate-800 bg-opacity-90 px-6 text-xl backdrop-blur-md sm:w-full sm:justify-between">
      <div className="hidden items-center sm:flex sm:gap-4">
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Projects</a>
        <a className="cursor-pointer">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a>
          <SiGithub className={"cursor-pointer fill-slate-50 text-3xl"} />
        </a>
        <a>
          <SiLinkedin className={"cursor-pointer fill-slate-50 text-3xl"} />
        </a>
        <Button>
          Resume
          <OpenInNew className={"w-6 fill-slate-50"} />
        </Button>
      </div>
    </header>
  );
}
