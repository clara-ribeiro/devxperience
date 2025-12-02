"use client";

import React, { useState, useEffect } from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledBackToTopButton } from "./styles";
import { BACK_TO_TOP_BUTTON_METADATA } from "./metadata";

export type BackToTopButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
};

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  className,
  style,
  label = "Voltar ao topo",
}) => {
  const { isDevMode } = useDevMode();
  const buttonInteraction = useDevModeInteraction(BACK_TO_TOP_BUTTON_METADATA);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode) {
      buttonInteraction.handleDevInteraction(event);
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <StyledBackToTopButton
      type="button"
      onClick={scrollToTop}
      className={className}
      style={{ ...style, cursor: buttonInteraction.getCursor() }}
      aria-label={label}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={BACK_TO_TOP_BUTTON_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (isDevMode) buttonInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onMouseLeave={buttonInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) => {
        if (isDevMode) buttonInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onBlurCapture={buttonInteraction.hideMetadataTooltip}
    >
      {label} ↑
    </StyledBackToTopButton>
  );
};

export default BackToTopButton;

