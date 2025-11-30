import React from "react";
import { StyledPillarLink } from "./styles";

export type PillarLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export const PillarLink: React.FC<PillarLinkProps> = ({
  href,
  children,
  className,
  style,
  ariaLabel,
}) => {
  return (
    <StyledPillarLink
      href={href}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </StyledPillarLink>
  );
};

export default PillarLink;

