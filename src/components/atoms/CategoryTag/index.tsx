"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { DevModeMetadata } from "@/context/dev-mode-context";
import { StyledCategoryTag } from "./styles";

export type CategoryTagProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  metadata?: DevModeMetadata | null;
};

export const CategoryTag: React.FC<CategoryTagProps> = ({ label, className, style, metadata }) => {
  const { isDevMode } = useDevMode();
  const tagInteraction = useDevModeInteraction(metadata || null);

  return (
    <StyledCategoryTag
      className={className}
      style={{ ...style, cursor: tagInteraction.getCursor() }}
      data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
      data-devmode-target={metadata?.target}
      onMouseEnter={(event: React.MouseEvent<HTMLSpanElement>) => {
        if (metadata) tagInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onMouseLeave={tagInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLSpanElement>) => {
        if (metadata) tagInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
      }}
      onBlurCapture={tagInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
        if (metadata) tagInteraction.handleDevInteraction(event);
      }}
    >
      {label}
    </StyledCategoryTag>
  );
};

export default CategoryTag;

