"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { DevModeMetadata } from "@/context/dev-mode-context";
import { StyledFilterButton } from "./styles";
import {
  FILTER_BUTTONS_METADATA,
  FILTER_BUTTON_ACTIVE_METADATA,
} from "@/components/molecules/FilterButtons/metadata";

export type FilterButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive = false,
  onClick,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  // Usa metadados diferentes para estado ativo vs inativo
  const metadata: DevModeMetadata | null = isActive
    ? FILTER_BUTTON_ACTIVE_METADATA
    : FILTER_BUTTONS_METADATA;
  const buttonInteraction = useDevModeInteraction(metadata);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode && metadata) {
      buttonInteraction.handleDevInteraction(event);
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledFilterButton
      type="button"
      onClick={handleClick}
      data-active={isActive}
      className={className}
      style={{ ...style, cursor: buttonInteraction.getCursor() }}
      data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
      data-devmode-target={metadata?.target}
      onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (metadata) buttonInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onMouseLeave={buttonInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) => {
        if (metadata) buttonInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onBlurCapture={buttonInteraction.hideMetadataTooltip}
    >
      {label}
    </StyledFilterButton>
  );
};

export default FilterButton;

