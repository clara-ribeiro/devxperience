import React from "react";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { StyledNavLink } from "./styles";

export type NavLinkProps = {
  href: string;
  label: string;
  selected?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  metadata?: DevModeMetadata;
  className?: string;
  style?: React.CSSProperties;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  selected = false,
  ariaLabel,
  onClick,
  metadata,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const linkInteraction = useDevModeInteraction(metadata || null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDevMode && metadata) {
      linkInteraction.handleDevInteraction(event);
      return;
    }
    if (metadata && linkInteraction.handleDevInteraction(event)) return;
    if (onClick) onClick();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (!isDevMode || !metadata) return;
    if (event.key === "Enter" || event.key === " ") {
      linkInteraction.handleDevInteraction(event);
    }
  };

  const cursor = linkInteraction.getCursor();
  const linkStyle = cursor ? { ...style, cursor } : style;

  return (
    <StyledNavLink
      href={href}
      aria-label={ariaLabel}
      data-selected={selected}
      aria-current={selected ? "page" : undefined}
      data-devmode-target={metadata?.target}
      onClick={handleLinkClick}
      onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
        if (metadata) linkInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onMouseLeave={() => {
        if (metadata) linkInteraction.hideMetadataTooltip();
      }}
      onFocus={(event: React.FocusEvent<HTMLAnchorElement>) => {
        if (metadata) linkInteraction.showMetadataTooltip(event.currentTarget);
      }}
      onBlur={() => {
        if (metadata) linkInteraction.hideMetadataTooltip();
      }}
      onKeyDown={handleKeyDown}
      data-devmode-highlight={isDevMode && metadata ? "true" : undefined}
      style={linkStyle}
      className={className}
    >
      {label}
    </StyledNavLink>
  );
};

export default NavLink;

