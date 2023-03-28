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
    <div className={`h-full w-full ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        className={`bg-slate-400 transition duration-100 ease-out dark:bg-slate-600 ${
          isReady ? "scale-100 blur-0" : "scale-[102%] animate-pulse blur-md"
        } ${className}`}
        {...rest}
        onLoadingComplete={handleImageLoaded}
      />
    </div>
  );
}
