"use client";

import React from "react";
import Image from "next/image";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledIllustration } from "./styles";
import SadFoxIcon from "@/components/icons/sadFox.svg";

export type ErrorIllustrationProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  alt?: string;
  metadata?: DevModeMetadata | null;
};

export const ErrorIllustration: React.FC<ErrorIllustrationProps> = ({
  className,
  style,
  width = 200,
  height = 227,
  alt = "Ilustração de uma raposa triste",
  metadata,
}) => {
  const { isDevMode } = useDevMode();
  const foxInteraction = useDevModeInteraction(metadata || null);

  return (
    <StyledIllustration
      className={className}
      style={{ ...style, cursor: foxInteraction.getCursor() }}
      data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
      data-devmode-target={metadata?.target}
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        if (metadata) foxInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onMouseLeave={foxInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) => {
        if (metadata) foxInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
      }}
      onBlurCapture={foxInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        if (metadata) foxInteraction.handleDevInteraction(event);
      }}
    >
      <Image src={SadFoxIcon} alt={alt} width={width} height={height} priority />
    </StyledIllustration>
  );
};

export default ErrorIllustration;

