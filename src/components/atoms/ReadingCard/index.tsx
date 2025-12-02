"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { DevModeMetadata } from "@/context/dev-mode-context";
import { StyledReadingCard } from "./styles";

export type ReadingCardProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  metadata?: DevModeMetadata | null;
};

export const ReadingCard: React.FC<ReadingCardProps> = ({
  children,
  href,
  className,
  style,
  metadata,
}) => {
  const { isDevMode } = useDevMode();
  const cardInteraction = useDevModeInteraction(metadata || null);

  const handleCardClick = (event: React.MouseEvent) => {
    if (isDevMode && metadata) {
      const target = event.target as HTMLElement;
      const currentTarget = event.currentTarget;
      const isClickableChild = target.closest('a') || target.closest('button') || target.closest('[data-devmode-target]');

      if (target === currentTarget || (!isClickableChild && !target.closest('[data-devmode-target]'))) {
        cardInteraction.handleDevInteraction(event);
      }
    }
  };

  const cardProps = {
    className,
    style: { ...style, cursor: cardInteraction.getCursor() },
    "data-devmode-highlight": isDevMode && metadata ? "true" : undefined,
    "data-devmode-target": metadata?.target,
    onMouseEnter: (event: React.MouseEvent) => {
      if (isDevMode && metadata) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-devmode-target]') || target === event.currentTarget) {
          cardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }
      }
    },
    onMouseLeave: () => {
      if (isDevMode && metadata) {
        cardInteraction.hideMetadataTooltip();
      }
    },
    onFocusCapture: (event: React.FocusEvent) => {
      if (isDevMode && metadata) {
        cardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
      }
    },
    onBlurCapture: () => {
      if (isDevMode && metadata) {
        cardInteraction.hideMetadataTooltip();
      }
    },
    onClick: handleCardClick,
  };

  if (href) {
    return (
      <StyledReadingCard as="a" href={href} {...cardProps}>
        {children}
      </StyledReadingCard>
    );
  }

  return (
    <StyledReadingCard {...cardProps}>
      {children}
    </StyledReadingCard>
  );
};

export default ReadingCard;

