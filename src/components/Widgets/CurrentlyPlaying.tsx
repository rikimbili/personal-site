import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import ButtonLink from "../Inputs/ButtonLink";

interface CurrentlyPlayingItem {
  name: string;
  artists: {
    name: string;
  }[];
  external_urls: {
    spotify: string;
  };
}

interface CurrentlyPlayingData {
  is_playing: boolean;
  currently_playing_type: string;
  item: CurrentlyPlayingItem;
}

interface Props {
  className?: string;
}

export default function CurrentlyPlaying({ className = "" }: Props) {
  //#region Hooks
  const [item, setItem] = useState<CurrentlyPlayingItem | null>(null);

  useEffect(() => {
    const getCurrPlaying = () =>
      fetch(`${window.location.origin}/api/currently-playing`, {
        method: "GET",
      }).then((res) =>
        res.json().then((data: CurrentlyPlayingData) => {
          if (data?.currently_playing_type === "track" && data?.is_playing) {
            setItem(data.item);
          } else {
            setItem(null);
          }
        })
      );
    const interval = setInterval(getCurrPlaying, 15000);

    getCurrPlaying();

    return () => clearInterval(interval);
  }, []);

  //#endregion

  return (
    <div className={"flex " + className}>
      {item ? (
        <>
          <motion.div
            animate={{
              rotate: [10, 0, -10],
              y: [-5, 0, -5],
              // fill: ["#000", "#fff"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              duration: 0.4,
            }}
          >
            <ButtonLink
              href={item.external_urls.spotify}
              className={"inline-block text-2xl"}
            >
              <MdMusicNote />
            </ButtonLink>
          </motion.div>
          <span className="ml-1 max-w-[15rem] overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-xs">
            {item.artists?.[0]?.name} - {item.name}
          </span>
        </>
      ) : (
        <>
          <MdMusicOff className={"inline-block text-2xl"} />
          <span className="ml-1">Not playing</span>
        </>
      )}
    </div>
  );
}
