import { type SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  variant?: "outlined" | "filled";
}
