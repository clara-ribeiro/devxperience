"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledActions, StyledActionLink, StyledActionButton, StyledSeparator } from "./styles";

export type ErrorAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "link" | "button";
};

export type ErrorActionsProps = {
  actions: ErrorAction[];
  className?: string;
  style?: React.CSSProperties;
  metadata?: DevModeMetadata | null;
};

export const ErrorActions: React.FC<ErrorActionsProps> = ({
  actions,
  className,
  style,
  metadata,
}) => {
  const router = useRouter();
  const { isDevMode } = useDevMode();
  const actionsInteraction = useDevModeInteraction(metadata || null);

  const handleAction = (action: ErrorAction, event?: React.MouseEvent) => {
    if (isDevMode && metadata) {
      if (event) {
        actionsInteraction.handleDevInteraction(event);
      }
      return;
    }

    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      router.push(action.href);
    }
  };

  return (
    <StyledActions className={className} style={style}>
      {actions.map((action, index) => (
        <React.Fragment key={index}>
          {action.type === "button" || action.onClick ? (
            <StyledActionButton
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleAction(action, event)}
              data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
              data-devmode-target={metadata?.target}
              onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (metadata) actionsInteraction.showMetadataTooltip(event.currentTarget);
              }}
              onMouseLeave={actionsInteraction.hideMetadataTooltip}
              onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) => {
                if (metadata) actionsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }}
              onBlurCapture={actionsInteraction.hideMetadataTooltip}
              style={{ cursor: actionsInteraction.getCursor() }}
            >
              {action.label}
            </StyledActionButton>
          ) : (
            <StyledActionLink
              href={action.href || "/"}
              as={Link}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                if (isDevMode && metadata) {
                  actionsInteraction.handleDevInteraction(event);
                }
              }}
              data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
              data-devmode-target={metadata?.target}
              onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
                if (metadata) actionsInteraction.showMetadataTooltip(event.currentTarget);
              }}
              onMouseLeave={actionsInteraction.hideMetadataTooltip}
              onFocus={(event: React.FocusEvent<HTMLAnchorElement>) => {
                if (metadata) actionsInteraction.showMetadataTooltip(event.currentTarget);
              }}
              onBlur={actionsInteraction.hideMetadataTooltip}
              style={{ cursor: actionsInteraction.getCursor() }}
            >
              {action.label}
            </StyledActionLink>
          )}
          {index < actions.length - 1 && <StyledSeparator aria-hidden="true">|</StyledSeparator>}
        </React.Fragment>
      ))}
    </StyledActions>
  );
};

export default ErrorActions;

