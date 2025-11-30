import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledSectionDescription } from "./styles";
import { SECTION_DESCRIPTION_METADATA } from "@/components/organisms/KnowledgePillars/metadata";

export type SectionDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const descriptionInteraction = useDevModeInteraction(SECTION_DESCRIPTION_METADATA);

  return (
    <StyledSectionDescription
      className={className}
      style={{ ...style, cursor: descriptionInteraction.getCursor() }}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={SECTION_DESCRIPTION_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) => {
        if (isDevMode) {
          descriptionInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          descriptionInteraction.hideMetadataTooltip();
        }
      }}
      onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) => {
        if (isDevMode) {
          descriptionInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onBlurCapture={() => {
        if (isDevMode) {
          descriptionInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
        if (isDevMode) {
          descriptionInteraction.handleDevInteraction(event);
        }
      }}
    >
      {children}
    </StyledSectionDescription>
  );
};

export default SectionDescription;

