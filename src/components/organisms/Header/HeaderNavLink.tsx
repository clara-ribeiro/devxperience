import React from "react";
import { NavLink } from "./styles";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";

type HeaderNavLinkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
  selected: boolean;
  metadata: DevModeMetadata;
  onClick?: () => void;
};

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({
  href,
  label,
  ariaLabel,
  selected,
  metadata,
  onClick,
}) => {
  const { isDevMode } = useDevMode();
  const linkInteraction = useDevModeInteraction(metadata);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDevMode) {
      linkInteraction.handleDevInteraction(event);
      return;
    }
    if (linkInteraction.handleDevInteraction(event)) return;
    if (onClick) onClick();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (!isDevMode) return;
    if (event.key === "Enter" || event.key === " ") {
      linkInteraction.handleDevInteraction(event);
    }
  };

  const cursor = linkInteraction.getCursor();

  return (
    <NavLink
      href={href}
      aria-label={ariaLabel}
      data-selected={selected}
      aria-current={selected ? "page" : undefined}
      data-devmode-target={metadata.target}
      onClick={handleLinkClick}
      onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) =>
        linkInteraction.showMetadataTooltip(event.currentTarget)
      }
      onMouseLeave={linkInteraction.hideMetadataTooltip}
      onFocus={(event: React.FocusEvent<HTMLAnchorElement>) =>
        linkInteraction.showMetadataTooltip(event.currentTarget)
      }
      onBlur={linkInteraction.hideMetadataTooltip}
      onKeyDown={handleKeyDown}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      style={cursor ? { cursor } : undefined}
    >
      {label}
    </NavLink>
  );
};

