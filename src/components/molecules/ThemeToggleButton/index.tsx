import React from "react";
import { IconButton } from "@/components/atoms/IconButton";
import LightModeIcon from "@/components/icons/LightModeIcon";
import DarkModeIcon from "@/components/icons/DarkModeIcon";
import { useTheme } from "@/context/theme-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { StyledThemeToggleWrapper } from "./styles";

export type ThemeToggleButtonProps = {
  metadata?: DevModeMetadata;
  ariaLabel?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  metadata,
  ariaLabel,
  title,
  className,
  style,
}) => {
  const { isDark, toggleTheme } = useTheme();
  const themeToggleInteraction = useDevModeInteraction(metadata || null);
  const { isDevMode } = useDevMode();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (metadata && themeToggleInteraction.handleDevInteraction(event)) return;
    toggleTheme();
  };

  const defaultAriaLabel = isDark ? "Ativar modo claro" : "Ativar modo escuro";
  const defaultTitle = isDark ? "Modo claro" : "Modo escuro";

  const wrapperStyle = React.useMemo(() => {
    if (!metadata) return style;
    return {
      ...style,
      cursor: isDevMode ? themeToggleInteraction.getCursor() : "pointer",
    };
  }, [metadata, isDevMode, themeToggleInteraction, style]);

  if (metadata) {
    return (
      <StyledThemeToggleWrapper
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={metadata.target}
        onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
          themeToggleInteraction.showMetadataTooltip(event.currentTarget)
        }
        onMouseLeave={themeToggleInteraction.hideMetadataTooltip}
        onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
          themeToggleInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
        }
        onBlurCapture={themeToggleInteraction.hideMetadataTooltip}
        style={wrapperStyle}
        className={className}
      >
        <IconButton
          icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
          ariaLabel={ariaLabel || defaultAriaLabel}
          title={title || defaultTitle}
          onClick={handleClick}
          style={{ cursor: themeToggleInteraction.getCursor() }}
        />
      </StyledThemeToggleWrapper>
    );
  }

  return (
    <IconButton
      icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
      ariaLabel={ariaLabel || defaultAriaLabel}
      title={title || defaultTitle}
      onClick={handleClick}
      style={style}
      className={className}
    />
  );
};

export default ThemeToggleButton;
