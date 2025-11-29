import React from "react";
import { HeroHeading } from "@/components/atoms/HeroHeading";
import { HeroFox } from "@/components/atoms/HeroFox";
import { StyledHeadingRow } from "./styles";

export type HeroHeadingGroupProps = {
  headingId?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const HeroHeadingGroup: React.FC<HeroHeadingGroupProps> = ({
  headingId,
  className,
  style,
}) => {
  return (
    <StyledHeadingRow className={className} style={style}>
      <HeroHeading id={headingId} />
      <HeroFox />
    </StyledHeadingRow>
  );
};

export default HeroHeadingGroup;

