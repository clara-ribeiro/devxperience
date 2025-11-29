import React from "react";
import { Logo } from "@/components/atoms/Logo";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { StyledLogoLink } from "./styles";

export type LogoLinkProps = {
  href?: string;
  ariaLabel?: string;
  metadata?: DevModeMetadata;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const LogoLink: React.FC<LogoLinkProps> = ({
  href = "/",
  ariaLabel = "Página inicial",
  metadata,
  width = 44,
  height = 48,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const logoInteraction = useDevModeInteraction(metadata || null);

  const handleClick = (event: React.SyntheticEvent) => {
    if (metadata && logoInteraction.handleDevInteraction(event)) return;
  };

  const linkStyle = React.useMemo(() => {
    if (!metadata) return style;
    return {
      ...style,
      cursor: logoInteraction.getCursor(),
    };
  }, [metadata, logoInteraction, style]);

  if (metadata) {
    return (
      <StyledLogoLink
        href={href}
        aria-label={ariaLabel}
        onClick={handleClick}
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={metadata.target}
        onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) =>
          logoInteraction.showMetadataTooltip(event.currentTarget)
        }
        onMouseLeave={logoInteraction.hideMetadataTooltip}
        onFocus={(event: React.FocusEvent<HTMLAnchorElement>) =>
          logoInteraction.showMetadataTooltip(event.currentTarget)
        }
        onBlur={logoInteraction.hideMetadataTooltip}
        style={linkStyle}
        className={className}
      >
        <Logo width={width} height={height} />
      </StyledLogoLink>
    );
  }

  return (
    <StyledLogoLink href={href} aria-label={ariaLabel} style={style} className={className}>
      <Logo width={width} height={height} />
    </StyledLogoLink>
  );
};

export default LogoLink;

