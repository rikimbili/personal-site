import { type SVGProps } from "react";

interface Props extends SVGProps<SVGFilterElement> {
  filterId: string;
  className?: string;
}

export default function Noise({ filterId, className = "", ...rest }: Props) {
  return (
    <svg className={"hidden"}>
      <filter id={filterId} className={className} {...rest}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
  );
}
