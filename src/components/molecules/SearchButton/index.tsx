import React from "react";
import { IconButton } from "@/components/atoms/IconButton";
import SearchIcon from "@/components/icons/SearchIcon";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

const StyledSearchButtonWrapper = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export type SearchButtonProps = {
  metadata?: DevModeMetadata;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const SearchButton: React.FC<SearchButtonProps> = ({
  metadata,
  onClick,
  ariaLabel = "Buscar",
  title = "Buscar",
  style,
  className,
}) => {
  const { isDevMode } = useDevMode();
  const searchInteraction = useDevModeInteraction(metadata || null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (metadata && searchInteraction.handleDevInteraction(event)) return;
    if (onClick) onClick(event);
  };

  const wrapperStyle = React.useMemo(() => {
    if (!metadata) return style;
    return {
      ...style,
      cursor: isDevMode ? searchInteraction.getCursor() : "pointer",
    };
  }, [metadata, isDevMode, searchInteraction, style]);

  if (metadata) {
    return (
      <StyledSearchButtonWrapper
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={metadata.target}
        onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
          searchInteraction.showMetadataTooltip(event.currentTarget)
        }
        onMouseLeave={searchInteraction.hideMetadataTooltip}
        onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
          searchInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
        }
        onBlurCapture={searchInteraction.hideMetadataTooltip}
        style={wrapperStyle}
        className={className}
      >
        <IconButton
          icon={<SearchIcon />}
          ariaLabel={isDevMode ? undefined : ariaLabel}
          title={isDevMode ? undefined : title}
          onClick={handleClick}
          style={{ cursor: searchInteraction.getCursor() }}
        />
      </StyledSearchButtonWrapper>
    );
  }

  return (
    <IconButton
      icon={<SearchIcon />}
      ariaLabel={ariaLabel}
      title={title}
      onClick={onClick}
      style={style}
      className={className}
    />
  );
};

export default SearchButton;

