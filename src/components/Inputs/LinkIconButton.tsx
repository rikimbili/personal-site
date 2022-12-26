import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

import IconButton from "./IconButton";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function LinkIconButton({
  children,
  className = "",
  target = "_blank",
  ...rest
}: Props) {
  return (
    <Link target={target} {...rest}>
      <IconButton className={className}>{children}</IconButton>
    </Link>
  );
}
