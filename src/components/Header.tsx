"use client";

import NavbarLink from "@components/Inputs/NavbarLink";
import { positionVariants, transitions } from "@styles/motion-definitions";
import { m, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdBook, MdHouse } from "react-icons/md";
import { useDebounce } from "usehooks-ts";

import ToggleButton from "./Inputs/ToggleButton";

const navStartOffset = 32;

export default function Header() {
  //#region Hooks

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const [isNavOpen, setIsNavOpen] = useState(true);
  const debouncedIsNavOpen = useDebounce(isNavOpen, 300);

  useEffect(
    () =>
      scrollY.on("change", () => {
        const [y, prevY] = [scrollY.get(), scrollY.getPrevious()];
        if (!prevY) return;
        const isScrollingUp = y < prevY;
        const isScrollingDown = y > navStartOffset && y > prevY;
        // On any change to the scroll position, update the nav state
        if (y < navStartOffset || isScrollingUp) {
          setIsNavOpen(true);
        } else if (isScrollingDown) {
          setIsNavOpen(false);
        }
      }),
    [scrollY],
  );

  //#endregion

  const isPage = {
    home: pathname === "/",
    bookshelf: pathname === "/bookshelf",
  };

  return (
    <m.header
      variants={positionVariants}
      animate={debouncedIsNavOpen ? "animate" : "initialTop"}
      transition={transitions.easeOut}
      className={`fixed z-20 flex h-14 w-11/12 max-w-7xl select-none items-center justify-between gap-4 self-center overflow-hidden 
      rounded-b-2xl border-x border-b border-slate-300 bg-slate-200/90 px-4 backdrop-blur-md transition duration-200 ease-out dark:border-slate-700 dark:bg-slate-800/80`}
    >
      <m.nav className={`flex gap-2`}>
        <NavbarLink
          href={"/"}
          label={"Home"}
          icon={<MdHouse />}
          isCurrentPage={isPage.home}
        />
        <NavbarLink
          href={"/bookshelf"}
          label={"Bookshelf"}
          icon={<MdBook />}
          isCurrentPage={isPage.bookshelf}
        />
      </m.nav>
      <div className={"w-10"}>
        <ToggleButton />
      </div>
    </m.header>
  );
}
