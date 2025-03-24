"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface Props extends ImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
  className?: string;
}

/**
 * Image component with loading skeleton.
 *
 * @param src - The image URL.
 * @param alt - The image alt text.
 * @param containerClassName - Class name for the container div.
 * @param className - Additional styles to apply.
 * @param rest - Props to pass to the Image component.
 */
export default function CustomImage({
  src,
  alt,
  containerClassName = "",
  className = "",
  ...rest
}: Props) {
  //#region Hooks

  const [isReady, setIsReady] = useState(false);

  //#endregion

  //#region Handlers

  const handleImageLoaded = () => {
    setIsReady(true);
  };

  //#endregion

  return (
    <div className={containerClassName}>
      <Image
        src={src}
        alt={alt}
        className={`transition duration-100 ease-out ${
          isReady
            ? "opacity-100"
            : "animate-pulse bg-slate-400 opacity-0 dark:bg-slate-700"
        } ${className}`}
        {...rest}
        onLoad={handleImageLoaded}
        onError={handleImageLoaded}
      />
    </div>
  );
}
