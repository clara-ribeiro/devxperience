"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, ContentWrapper, HeroContent, HeroTitle, FoxWrapper } from "./styles";
import { UX_HERO_FOX_METADATA, UX_HERO_SECTION_METADATA } from "./metadata";
import SmartFox from "@/components/organisms/InformationSection/smartFox.svg";
import Image from "next/image";
import { HeroDescription } from "@/components/atoms/HeroDescription";

const UXHero: React.FC = () => {
  const { isDevMode } = useDevMode();
  const heroInteraction = useDevModeInteraction(UX_HERO_SECTION_METADATA);
  const foxInteraction = useDevModeInteraction(UX_HERO_FOX_METADATA);

  return (
    <Section
      aria-labelledby="ux-hero-heading"
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={UX_HERO_SECTION_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          heroInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          heroInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          heroInteraction.handleDevInteraction(event);
        }
      }}
      style={{ cursor: heroInteraction.getCursor() }}
    >
      <ContentWrapper>
        <HeroContent>
          <HeroTitle id="ux-hero-heading">
            <span>UX</span>
            <span>na prática</span>
          </HeroTitle>
          <HeroDescription style={{ textAlign: "center" }}>
            UX não é apenas sobre deixar a tela bonita; é sobre engenharia de requisitos e eficiência. Descubra como
            decisões de design impactam a estrutura do seu código e aprenda a criar produtos que não apenas funcionam,
            mas resolvem problemas reais.
          </HeroDescription>
        </HeroContent>

        <FoxWrapper
          aria-hidden="true"
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={UX_HERO_FOX_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              foxInteraction.showMetadataTooltip(event.currentTarget);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              foxInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              foxInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: foxInteraction.getCursor() }}
        >
          <Image src={SmartFox} alt="" width={300} height={305} priority />
        </FoxWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default UXHero;


