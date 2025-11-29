import React from "react";
import Image from "next/image";
import StandardFox from "@/components/icons/standardFox.svg";
import StandardFoxLight from "@/components/icons/standardFoxLight.svg";
import { useTheme } from "@/context/theme-context";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledFoxWrapper } from "./styles";
import { HERO_FOX_METADATA } from "@/components/organisms/MainHero/metadata";

export type HeroFoxProps = {
  width?: number;
  height?: number;
  alt?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const HeroFox: React.FC<HeroFoxProps> = ({
  width = 222,
  height = 266,
  alt = "Ilustração de uma raposa mascote da devXperience",
  priority = true,
  className,
  style,
}) => {
  const { isDark } = useTheme();
  const { isDevMode } = useDevMode();
  const foxInteraction = useDevModeInteraction(HERO_FOX_METADATA);

  return (
    <StyledFoxWrapper
      className={className}
      style={{ ...style, cursor: foxInteraction.getCursor() }}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={HERO_FOX_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
        foxInteraction.showMetadataTooltip(event.currentTarget)
      }
      onMouseLeave={foxInteraction.hideMetadataTooltip}
      onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
        foxInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
      }
      onBlurCapture={foxInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        foxInteraction.handleDevInteraction(event);
      }}
    >
      <Image
        src={isDark ? StandardFoxLight : StandardFox}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </StyledFoxWrapper>
  );
};

export default HeroFox;

