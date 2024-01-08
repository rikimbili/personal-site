import { type SVGProps, useId } from "react";

interface Props extends SVGProps<SVGFilterElement> {
  className?: string;
}

export default function Noise({ className = "", ...rest }: Props) {
  const id = useId();
  return (
    <svg className={"hidden"}>
      <filter id={id} className={className} {...rest}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
  );
}
