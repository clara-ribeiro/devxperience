"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, ContentWrapper, HeroContent, HeroTitle, FoxWrapper } from "@/components/organisms/UXHero/styles";
import { HeroDescription } from "@/components/atoms/HeroDescription";

export type TopicHeroProps = {
  headingId: string;
  titleLines: [string, string];
  description: React.ReactNode;
  sectionMetadata: DevModeMetadata;
  /**
   * Variante opcional de tamanho do título. Usado, por exemplo, para a página de Acessibilidade.
   */
  titleVariant?: "default" | "accessibility";
  foxMetadata?: DevModeMetadata | null;
  foxImage?: StaticImageData | string;
  foxAlt?: string;
};

export const TopicHero: React.FC<TopicHeroProps> = ({
  headingId,
  titleLines,
  description,
  sectionMetadata,
  titleVariant = "default",
  foxMetadata = null,
  foxImage,
  foxAlt = "",
}) => {
  const { isDevMode } = useDevMode();
  const heroInteraction = useDevModeInteraction(sectionMetadata);
  const foxInteraction = useDevModeInteraction(foxMetadata ?? null);

  return (
    <Section
      aria-labelledby={headingId}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={sectionMetadata.target}
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
          <HeroTitle id={headingId} data-title-variant={titleVariant !== "default" ? titleVariant : undefined}>
            <span>{titleLines[0]}</span>
            <span>{titleLines[1]}</span>
          </HeroTitle>
          <HeroDescription style={{ textAlign: "center" }}>{description}</HeroDescription>
        </HeroContent>

        {foxImage ? (
          <FoxWrapper
            aria-hidden={foxAlt === "" ? true : undefined}
            data-devmode-highlight={isDevMode && foxMetadata ? "true" : undefined}
            data-devmode-target={foxMetadata?.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode && foxMetadata) {
                foxInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode && foxMetadata) {
                foxInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode && foxMetadata) {
                foxInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: foxInteraction.getCursor() }}
          >
            <Image src={foxImage} alt={foxAlt} width={300} height={305} priority />
          </FoxWrapper>
        ) : null}
      </ContentWrapper>
    </Section>
  );
};

export default TopicHero;


