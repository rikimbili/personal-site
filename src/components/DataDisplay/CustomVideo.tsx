"use client";

import { m } from "framer-motion";
import { useState } from "react";

interface Props {
  src: string;
  showProgress?: boolean;
  containerClassName?: string;
  className?: string;
}

export default function CustomVideo({
  src,
  showProgress = true,
  containerClassName = "",
  className = "",
}: Props) {
  const [videoProgress, setVideoProgress] = useState(0);

  return (
    <div className={`relative ${containerClassName}`}>
      <video
        loop
        autoPlay
        playsInline
        muted
        preload="none"
        className={className}
        onTimeUpdate={(e) => {
          const videoElement = e.currentTarget;
          if (showProgress)
            setVideoProgress(
              (videoElement.currentTime / videoElement.duration) * 100,
            );
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showProgress && (
        <m.span
          animate={{ width: `${videoProgress}%` }}
          transition={{ type: "tween", duration: 0.5 }}
          className={"absolute bottom-0 left-0 h-1 w-full bg-indigo-500"}
        />
      )}
    </div>
  );
}
