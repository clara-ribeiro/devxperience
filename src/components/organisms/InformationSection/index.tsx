"use client";

import React from "react";
import Image from "next/image";
import { Section, ContentWrapper, TextContent, SeparatorLine, FoxWrapper } from "./styles";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionDescription } from "@/components/atoms/SectionDescription";
import { StyledSectionDescription } from "@/components/atoms/SectionDescription/styles";
import SmartFox from "./smartFox.svg";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  FOX_ILLUSTRATION_METADATA,
  SECTION_CONTAINER_METADATA,
  SEPARATOR_LINE_METADATA,
  FIRST_PARAGRAPH_METADATA,
  BOLD_TEXT_METADATA,
} from "./metadata";

export type InformationSectionProps = {
  className?: string;
  style?: React.CSSProperties;
};

const InformationSection: React.FC<InformationSectionProps> = ({ className, style }) => {
  const { isDevMode } = useDevMode();
  const containerInteraction = useDevModeInteraction(SECTION_CONTAINER_METADATA);
  const foxInteraction = useDevModeInteraction(FOX_ILLUSTRATION_METADATA);
  const separatorLineInteraction = useDevModeInteraction(SEPARATOR_LINE_METADATA);
  const firstParagraphInteraction = useDevModeInteraction(FIRST_PARAGRAPH_METADATA);
  const boldTextInteraction = useDevModeInteraction(BOLD_TEXT_METADATA);

  return (
    <Section
      className={className}
      aria-labelledby="information-section-heading"
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={SECTION_CONTAINER_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          containerInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          containerInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (!isDevMode) return;
        const target = event.target as HTMLElement;
        if (target.closest(`[data-devmode-target]`)) return;
        containerInteraction.handleDevInteraction(event);
      }}
      style={{ cursor: containerInteraction.getCursor(), ...style }}
    >
      <ContentWrapper>
        <TextContent>
          <SectionTitle id="information-section-heading">Onde o código encontra o design</SectionTitle>

          <StyledSectionDescription
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={FIRST_PARAGRAPH_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                firstParagraphInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                firstParagraphInteraction.hideMetadataTooltip();
              }
            }}
            onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                firstParagraphInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onBlurCapture={() => {
              if (isDevMode) {
                firstParagraphInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                firstParagraphInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: firstParagraphInteraction.getCursor() }}
          >
            O devXperience nasceu de um TCC em Engenharia de Software com uma missão clara: provar que
            desenvolvimento e design não são mundos opostos.
          </StyledSectionDescription>

          <SeparatorLine
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={SEPARATOR_LINE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLHRElement>) => {
              if (isDevMode) {
                separatorLineInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                separatorLineInteraction.hideMetadataTooltip();
              }
            }}
            onFocusCapture={(event: React.FocusEvent<HTMLHRElement>) => {
              if (isDevMode) {
                separatorLineInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onBlurCapture={() => {
              if (isDevMode) {
                separatorLineInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLHRElement>) => {
              if (isDevMode) {
                separatorLineInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: separatorLineInteraction.getCursor() }}
          />

          <SectionDescription>
            <strong
              data-devmode-highlight={isDevMode ? "true" : undefined}
              data-devmode-target={BOLD_TEXT_METADATA.target}
              onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
                if (isDevMode) {
                  boldTextInteraction.showMetadataTooltip(event.currentTarget);
                }
              }}
              onMouseLeave={() => {
                if (isDevMode) {
                  boldTextInteraction.hideMetadataTooltip();
                }
              }}
              onFocusCapture={(event: React.FocusEvent<HTMLElement>) => {
                if (isDevMode) {
                  boldTextInteraction.showMetadataTooltip(event.currentTarget);
                }
              }}
              onBlurCapture={() => {
                if (isDevMode) {
                  boldTextInteraction.hideMetadataTooltip();
                }
              }}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                if (isDevMode) {
                  boldTextInteraction.handleDevInteraction(event);
                }
              }}
              style={{ cursor: boldTextInteraction.getCursor() }}
            >
              UX, usabilidade e acessibilidade não são bônus: são parte essencial de qualquer código bem feito.{" "}
            </strong>
            Este é um espaço para compartilhar, aprender e criar interfaces mais humanas. Aqui, o usuário está
            no centro — inclusive na hora de programar.
          </SectionDescription>
        </TextContent>

        <FoxWrapper
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={FOX_ILLUSTRATION_METADATA.target}
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
          style={{ cursor: foxInteraction.getCursor() }}
        >
          <Image
            src={SmartFox}
            alt="Ilustração de uma raposa inteligente usando óculos"
            width={402}
            height={404}
            priority
          />
        </FoxWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default InformationSection;

