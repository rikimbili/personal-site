import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdMusicNote, MdMusicOff, MdOutlineInfo } from "react-icons/md";

import IconLink from "./Inputs/IconLink";

export default function Footer() {
  //#region Hooks
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const getCurrPlaying = () =>
      fetch(`${window.location.origin}/api/currently-playing`, {
        method: "GET",
      }).then((res) =>
        res.json().then((data) => {
          if (data?.currently_playing_type === "track" && data?.is_playing) {
            setCurrentlyPlaying(data.item);
          } else {
            setCurrentlyPlaying(null);
          }
        })
      );
    const interval = setInterval(getCurrPlaying, 15000);

    getCurrPlaying();

    return () => clearInterval(interval);
  }, []);

  console.log(currentlyPlaying);

  //#endregion

  return (
    <footer className="text-md flex justify-between py-6">
      <span>
        &copy; {new Date().getFullYear()} Raciel Antela Pardo. All rights
        reserved.
      </span>
      <span className="ml-4 flex">
        {currentlyPlaying && (
          <>
            <motion.div
              animate={{ rotate: [10, 0, -10], y: [-5, 0, -5] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.1,
                duration: 0.4,
              }}
            >
              <IconLink
                href={currentlyPlaying.external_urls.spotify}
                className={"inline-block text-2xl"}
              >
                <MdMusicNote />
              </IconLink>
            </motion.div>
            <span className="ml-1 text-center">
              {currentlyPlaying.artists?.[0]?.name} - {currentlyPlaying.name}
            </span>
          </>
        )}
        {!currentlyPlaying && (
          <>
            <MdMusicOff className={"inline-block text-2xl"} />
            <span className="ml-1">Not playing anything</span>
          </>
        )}
      </span>
      <span className={"flex"}>
        <MdOutlineInfo className={"inline-block text-2xl"} />
        <span className="ml-1">Website Info</span>
      </span>
    </footer>
  );
}
