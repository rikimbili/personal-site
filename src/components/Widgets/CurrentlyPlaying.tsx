import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import {
  CurrentlyPlayingData,
  CurrentlyPlayingItem,
} from "../../services/spotify";
import ButtonLink from "../Inputs/ButtonLink";

interface Props {
  className?: string;
}

export default function CurrentlyPlaying({ className = "" }: Props) {
  //#region Hooks
  const [item, setItem] = useState<CurrentlyPlayingItem | null>(null);

  useEffect(() => {
    // Fetch the currently playing item from the Spotify API
    const getCurrPlaying = () =>
      fetch(`${window.location.origin}/api/currently-playing`, {
        method: "GET",
      }).then((res) =>
        res.json().then((data: CurrentlyPlayingData) => {
          // If not a track or not playing, set item to null
          if (data?.currently_playing_type === "track" && data?.is_playing) {
            setItem(data.item);
          } else {
            setItem(null);
          }
        })
      );
    // Fetch currently playing 3 times a minute
    const interval = setInterval(getCurrPlaying, 20000);

    getCurrPlaying();

    return () => clearInterval(interval);
  }, []);

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
