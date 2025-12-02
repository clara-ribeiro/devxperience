"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, Card, Title, ReferencesList, ReferenceItem, ReferenceNumber, ReferenceText, FooterActions } from "./styles";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { StyledBackToTopButton } from "@/components/atoms/BackToTopButton/styles";
import { BACK_TO_TOP_BUTTON_METADATA } from "@/components/atoms/BackToTopButton/metadata";

const references = [
  {
    id: 1,
    text: "BARBOSA, S. D. J. et al. Interação Humano-Computador e Experiência do Usuário. Autopublicação, 2021.",
  },
  {
    id: 2,
    text: "ISO 9241-210. Ergonomics of human-system interaction -- Part 210: Human-centred design for interactive systems. International Organization for Standardization, 2019.",
  },
  {
    id: 3,
    text: "TURNER, P. A Psychology of User Experience: Involvement, Affect and Aesthetics. Springer, 2017.",
  },
  {
    id: 4,
    text: "LAW, E. L.-C. et al. Understanding, Scoping and Defining User Experience: A Survey Approach. In: Proceedings of CHI '09, 2009.",
  },
  {
    id: 5,
    text: "NIELSEN, J.; BUDIU, R. Mobile Usability. New Riders, 2012.",
  },
  {
    id: 6,
    text: "HASSENZAHL, M.; TRACTINSKY, N. User experience - a research agenda. Behaviour & Information Technology, 2006.",
  },
  {
    id: 7,
    text: "PREECE, J.; ROGERS, Y.; SHARP, H. Interaction Design: Beyond Human-Computer Interaction. John Wiley & Sons, 2015.",
  },
];

const UXReferencesSection: React.FC = () => {
  const { isDevMode } = useDevMode();
  const sectionInteraction = useDevModeInteraction(SECTION_CONTAINER_METADATA);
  const buttonInteraction = useDevModeInteraction(BACK_TO_TOP_BUTTON_METADATA);

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode) {
      buttonInteraction.handleDevInteraction(event);
      return;
    }

    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("ux_last_ref_scroll");
      if (stored) {
        const y = parseInt(stored, 10);
        sessionStorage.removeItem("ux_last_ref_scroll");
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Section
      aria-labelledby="ux-references-heading"
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={SECTION_CONTAINER_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          sectionInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          sectionInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          sectionInteraction.handleDevInteraction(event);
        }
      }}
      style={{ cursor: sectionInteraction.getCursor() }}
      id="ux-references"
    >
      <Card
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={SECTION_CONTAINER_METADATA.target}
        onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            sectionInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            sectionInteraction.hideMetadataTooltip();
          }
        }}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            sectionInteraction.handleDevInteraction(event);
          }
        }}
        style={{ cursor: sectionInteraction.getCursor() }}
      >
        <Title id="ux-references-heading">Referências</Title>
        <ReferencesList>
          {references.map((reference) => (
            <ReferenceItem key={reference.id} id={`ux-ref-${reference.id}`}>
              <ReferenceNumber>{reference.id}.</ReferenceNumber>
              <ReferenceText>{reference.text}</ReferenceText>
            </ReferenceItem>
          ))}
        </ReferencesList>

        <FooterActions>
          <StyledBackToTopButton
            type="button"
            onClick={handleBackClick}
            style={{ cursor: buttonInteraction.getCursor() }}
            aria-label="Voltar ao início"
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={BACK_TO_TOP_BUTTON_METADATA.target}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (isDevMode) buttonInteraction.showMetadataTooltip(e.currentTarget);
            }}
            onMouseLeave={buttonInteraction.hideMetadataTooltip}
            onFocusCapture={(e: React.FocusEvent<HTMLButtonElement>) => {
              if (isDevMode) buttonInteraction.showMetadataTooltip(e.currentTarget);
            }}
            onBlurCapture={buttonInteraction.hideMetadataTooltip}
          >
            Voltar ao topo ↑
          </StyledBackToTopButton>
        </FooterActions>
      </Card>
    </Section>
  );
};

export default UXReferencesSection;


