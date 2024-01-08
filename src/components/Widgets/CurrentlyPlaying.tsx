import { transitions } from "@styles/motion-definitions";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, m } from "framer-motion";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import { type CurrentlyPlayingData } from "~/services/spotify";

import CustomLink from "../Inputs/CustomLink";

interface Props {
  className?: string;
}

export default function CurrentlyPlaying({ className = "" }: Props) {
  //#region Hooks

  const { data } = useQuery({
    queryKey: ["currently-playing"],
    queryFn: () =>
      fetch("/api/currently-playing").then((res) =>
        res.json(),
      ) as Promise<CurrentlyPlayingData>,
    refetchInterval: 1000 * 20,
  });

  //#endregion

  //#region Derived Data

  const item =
    data?.is_playing && data?.currently_playing_type === "track"
      ? data.item
      : null;

  //#endregion

  return (
    <div className={"flex items-center justify-center " + className}>
      <AnimatePresence mode={"popLayout"} initial={false}>
        {item ? (
          <m.div
            key={item.name}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={transitions.springStiff}
            className={"w-full"}
          >
            <CustomLink
              href={item.external_urls.spotify}
              className={"flex w-full items-center justify-center"}
            >
              <m.div
                animate={{
                  rotate: [10, 0, -10],
                  y: [-5, 0, -5],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.1,
                  duration: 0.4,
                }}
              >
                <MdMusicNote className={"text-2xl"} />
              </m.div>
              <span className="ml-1 truncate xl:max-w-sm">
                {item.artists?.[0]?.name} — {item.name}
              </span>
            </CustomLink>
          </m.div>
        ) : (
          <m.div
            key={"not-playing"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={transitions.springStiff}
          >
            <MdMusicOff className={"inline-block text-2xl"} />
            <span className="ml-1">Not playing — Spotify</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
