import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledSectionTitle } from "./styles";
import { SECTION_TITLE_METADATA } from "@/components/organisms/KnowledgePillars/metadata";

export type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  style,
  id,
}) => {
  const { isDevMode } = useDevMode();
  const titleInteraction = useDevModeInteraction(SECTION_TITLE_METADATA);

  return (
    <StyledSectionTitle
      id={id}
      className={className}
      style={{ ...style, cursor: titleInteraction.getCursor() }}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={SECTION_TITLE_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) => {
        if (isDevMode) {
          titleInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          titleInteraction.hideMetadataTooltip();
        }
      }}
      onFocusCapture={(event: React.FocusEvent<HTMLHeadingElement>) => {
        if (isDevMode) {
          titleInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onBlurCapture={() => {
        if (isDevMode) {
          titleInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
        if (isDevMode) {
          titleInteraction.handleDevInteraction(event);
        }
      }}
    >
      {children}
    </StyledSectionTitle>
  );
};

export default SectionTitle;

