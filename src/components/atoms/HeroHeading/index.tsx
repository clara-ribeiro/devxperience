import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledHeadingGroup, StyledHeadingDev, StyledHeadingXperience } from "./styles";
import { HERO_HEADING_METADATA } from "@/components/organisms/MainHero/metadata";

export type HeroHeadingProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const HeroHeading: React.FC<HeroHeadingProps> = ({ id, className, style }) => {
  const { isDevMode } = useDevMode();
  const headingInteraction = useDevModeInteraction(HERO_HEADING_METADATA);

  return (
    <StyledHeadingGroup
      id={id}
      className={className}
      style={{ ...style, cursor: headingInteraction.getCursor() }}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={HERO_HEADING_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) =>
        headingInteraction.showMetadataTooltip(event.currentTarget)
      }
      onMouseLeave={headingInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLHeadingElement>) =>
        headingInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
      }
      onBlurCapture={headingInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
        headingInteraction.handleDevInteraction(event);
      }}
    >
      <StyledHeadingDev>DEV</StyledHeadingDev>
      <StyledHeadingXperience>XPERIENCE</StyledHeadingXperience>
    </StyledHeadingGroup>
  );
};

export default HeroHeading;

