import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import { CurrentlyPlayingData } from "../../services/spotify";
import ButtonLink from "../Inputs/ButtonLink";

interface Props {
  className?: string;
}

export default function CurrentlyPlaying({ className = "" }: Props) {
  //#region Hooks

  const { data } = useQuery({
    queryKey: ["currently-playing"],
    queryFn: () =>
      fetch("/api/currently-playing").then((res) =>
        res.json()
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
    <div className={"flex items-center " + className}>
      {item ? (
        <ButtonLink
          href={item.external_urls.spotify}
          className={"flex items-center"}
        >
          <motion.div
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
          </motion.div>
          <span className="ml-1 max-w-[14rem] overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-xs xl:max-w-sm">
            {item.artists?.[0]?.name} — {item.name}
          </span>
        </ButtonLink>
      ) : (
        <>
          <MdMusicOff className={"inline-block text-2xl"} />
          <span className="ml-1">Not playing — Spotify</span>
        </>
      )}
    </div>
  );
}
