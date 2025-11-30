"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { DevModeMetadata } from "@/context/dev-mode-context";
import {
  StyledContainer,
  StyledContent,
  StyledHeading,
  StyledDescription,
  StyledSeparator,
} from "./styles";
import { ErrorIllustration } from "@/components/atoms/ErrorIllustration";
import { ErrorActions, ErrorAction } from "@/components/molecules/ErrorActions";

export type ErrorPageContentProps = {
  heading: string;
  description: string;
  actions: ErrorAction[];
  showIllustration?: boolean;
  className?: string;
  style?: React.CSSProperties;
  headingMetadata?: DevModeMetadata | null;
  actionsMetadata?: DevModeMetadata | null;
  illustrationMetadata?: DevModeMetadata | null;
};

export const ErrorPageContent: React.FC<ErrorPageContentProps> = ({
  heading,
  description,
  actions,
  showIllustration = true,
  className,
  style,
  headingMetadata,
  actionsMetadata,
  illustrationMetadata,
}) => {
  const { isDevMode } = useDevMode();
  const headingInteraction = useDevModeInteraction(headingMetadata || null);

  return (
    <StyledContainer className={className} style={style}>
      <StyledContent>
        <StyledHeading
          data-devmode-highlight={isDevMode && headingMetadata ? "true" : undefined}
          data-devmode-target={headingMetadata?.target}
          onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) => {
            if (headingMetadata) headingInteraction.showMetadataTooltip(event.currentTarget);
          }}
          onMouseLeave={headingInteraction.hideMetadataTooltip}
          onFocusCapture={(event: React.FocusEvent<HTMLHeadingElement>) => {
            if (headingMetadata) headingInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
          }}
          onBlurCapture={headingInteraction.hideMetadataTooltip}
          onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
            if (headingMetadata) headingInteraction.handleDevInteraction(event);
          }}
          style={{ cursor: headingInteraction.getCursor() }}
        >
          {heading}
        </StyledHeading>
        <StyledDescription>{description}</StyledDescription>

        {showIllustration && <ErrorIllustration metadata={illustrationMetadata} />}

        <StyledSeparator />

        <ErrorActions actions={actions} metadata={actionsMetadata} />
      </StyledContent>
    </StyledContainer>
  );
};

export default ErrorPageContent;

