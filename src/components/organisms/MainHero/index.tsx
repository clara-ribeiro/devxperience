"use client";

import React from "react";
import Image from "next/image";
import StandardFox from "@/components/icons/standardFox.svg";
import StandardFoxLight from "@/components/icons/standardFoxLight.svg";
import { useTheme } from "@/context/theme-context";
import {
  Section,
  HeroCopy,
  HeadingRow,
  HeadingGroup,
  HeadingDev,
  HeadingXperience,
  Description,
  Actions,
  FoxWrapper,
} from "./styles";
import Button from "@/components/atoms/Button";
import { useDevMode } from "@/context/dev-mode-context";

const MainHero: React.FC = () => {
  const { isDark } = useTheme();
  const { isDevMode, toggleDevMode } = useDevMode();

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

  return (
    <Section aria-labelledby="hero-heading">
        <HeroCopy>
          <HeadingRow>
            <HeadingGroup id="hero-heading">
              <HeadingDev>DEV</HeadingDev>
              <HeadingXperience>XPERIENCE</HeadingXperience>
            </HeadingGroup>
            <FoxWrapper>
              <Image
                src={isDark ? StandardFox : StandardFoxLight}
                alt="Ilustração de uma raposa mascote da devXperience"
                width={222}
                height={266}
                priority
              />
            </FoxWrapper>
          </HeadingRow>

          <Description>
            Comunidade para devs que querem criar interfaces mais humanas. UX, usabilidade e acessibilidade, sem
            complicação.
          </Description>

          <Actions>
            <Button
              type="button"
              label={isDevMode ? "Modo Dev Ativado" : "Modo Dev"}
              variant="solid"
              colors={primaryButtonColors}
              onClick={() => toggleDevMode("hero-cta")}
              aria-pressed={isDevMode}
            />
            <Button
              type="button"
              label="Explorar Conteúdos"
              variant="outline"
              colors={secondaryButtonColors}
            />
          </Actions>
        </HeroCopy>

    </Section>
  );
};

export default MainHero;


