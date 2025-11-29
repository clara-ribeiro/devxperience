import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledDescription } from "./styles";
import { HERO_DESCRIPTION_METADATA } from "@/components/organisms/MainHero/metadata";

export type HeroDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const HeroDescription: React.FC<HeroDescriptionProps> = ({ children, className, style }) => {
  const { isDevMode } = useDevMode();
  const descriptionInteraction = useDevModeInteraction(HERO_DESCRIPTION_METADATA);

  return (
    <StyledDescription
      className={className}
      style={{ ...style, cursor: descriptionInteraction.getCursor() }}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={HERO_DESCRIPTION_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) =>
        descriptionInteraction.showMetadataTooltip(event.currentTarget)
      }
      onMouseLeave={descriptionInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) =>
        descriptionInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
      }
      onBlurCapture={descriptionInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
        descriptionInteraction.handleDevInteraction(event);
      }}
    >
      {children}
    </StyledDescription>
  );
};

export default HeroDescription;

