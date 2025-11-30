"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { Section, HeroCopy } from "./styles";
import { HeroHeadingGroup } from "@/components/molecules/HeroHeadingGroup";
import { HeroDescription } from "@/components/atoms/HeroDescription";
import { HeroActions } from "@/components/molecules/HeroActions";
import Button from "@/components/atoms/Button";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  HERO_PRIMARY_BUTTON_METADATA,
  HERO_SECONDARY_BUTTON_METADATA,
} from "./metadata";

const MainHero: React.FC = () => {
  const { isDark } = useTheme();
  const { isDevMode, toggleDevMode } = useDevMode();
  const primaryButtonInteraction = useDevModeInteraction(HERO_PRIMARY_BUTTON_METADATA);
  const secondaryButtonInteraction = useDevModeInteraction(HERO_SECONDARY_BUTTON_METADATA);

  const primaryButtonColors = React.useMemo(
    () =>
      isDark
        ? { background: "#F1DFD2", text: "#261D1D", border: "#F1DFD2" }
        : { background: "#261D1D", text: "#F1DFD2", border: "#261D1D" },
    [isDark],
  );

  const secondaryButtonColors = React.useMemo(
    () => (isDark ? { text: "#F1DFD2", border: "#F1DFD2" } : { text: "#261D1D", border: "#261D1D" }),
    [isDark],
  );

  const handlePrimaryButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode && primaryButtonInteraction.handleDevInteraction(event)) {
      return;
    }
    toggleDevMode("hero-cta");
  };

  const handleSecondaryButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode && secondaryButtonInteraction.handleDevInteraction(event)) {
      return;
    }
    // Ação normal do botão secundário (se houver)
  };

  return (
    <Section aria-labelledby="hero-heading">
      <HeroCopy>
        <HeroHeadingGroup headingId="hero-heading" />

        <HeroDescription>
          Comunidade para devs que querem criar interfaces mais humanas. UX, usabilidade e acessibilidade, sem
          complicação.
        </HeroDescription>

        <HeroActions>
          <Button
            type="button"
            label={isDevMode ? "Modo Dev Ativado" : "Modo Dev"}
            variant="solid"
            colors={primaryButtonColors}
            onClick={handlePrimaryButtonClick}
            aria-pressed={isDevMode}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={HERO_PRIMARY_BUTTON_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
              primaryButtonInteraction.showMetadataTooltip(event.currentTarget)
            }
            onMouseLeave={primaryButtonInteraction.hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) =>
              primaryButtonInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
            }
            onBlurCapture={primaryButtonInteraction.hideMetadataTooltip}
            style={{ cursor: primaryButtonInteraction.getCursor() }}
          />
          <Button
            type="button"
            label="Explorar Conteúdos"
            variant="outline"
            colors={secondaryButtonColors}
            onClick={handleSecondaryButtonClick}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={HERO_SECONDARY_BUTTON_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
              secondaryButtonInteraction.showMetadataTooltip(event.currentTarget)
            }
            onMouseLeave={secondaryButtonInteraction.hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) =>
              secondaryButtonInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
            }
            onBlurCapture={secondaryButtonInteraction.hideMetadataTooltip}
            style={{ cursor: secondaryButtonInteraction.getCursor() }}
          />
        </HeroActions>
      </HeroCopy>
    </Section>
  );
};

export default MainHero;
