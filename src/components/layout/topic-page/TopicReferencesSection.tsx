"use client";

import React from "react";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  Section,
  Card,
  Title,
  ReferencesList,
  ReferenceItem,
  ReferenceNumber,
  ReferenceText,
  FooterActions,
} from "@/components/organisms/UXReferencesSection/styles";
import { StyledBackToTopButton } from "@/components/atoms/BackToTopButton/styles";
import { BACK_TO_TOP_BUTTON_METADATA } from "@/components/atoms/BackToTopButton/metadata";

export type TopicReferenceItem = {
  id: number;
  text: string;
};

export type TopicReferencesSectionProps = {
  id: string;
  headingId: string;
  title: string;
  referenceIdPrefix: string;
  references: TopicReferenceItem[];
  sectionMetadata: DevModeMetadata;
  backToTopMetadata?: DevModeMetadata;
  scrollStorageKey?: string;
};

export const TopicReferencesSection: React.FC<TopicReferencesSectionProps> = ({
  id,
  headingId,
  title,
  referenceIdPrefix,
  references,
  sectionMetadata,
  backToTopMetadata,
  scrollStorageKey,
}) => {
  const { isDevMode } = useDevMode();
  const sectionInteraction = useDevModeInteraction(sectionMetadata);
  const buttonInteraction = useDevModeInteraction(backToTopMetadata ?? BACK_TO_TOP_BUTTON_METADATA);

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode) {
      buttonInteraction.handleDevInteraction(event);
      return;
    }

    if (typeof window !== "undefined") {
      if (scrollStorageKey) {
        const stored = sessionStorage.getItem(scrollStorageKey);
        if (stored) {
          const y = parseInt(stored, 10);
          sessionStorage.removeItem(scrollStorageKey);
          window.scrollTo({ top: y, behavior: "smooth" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Section
      aria-labelledby={headingId}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={sectionMetadata.target}
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
      id={id}
    >
      <Card
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={sectionMetadata.target}
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
        <Title id={headingId}>{title}</Title>
        <ReferencesList>
          {references.map((reference) => (
            <ReferenceItem key={reference.id} id={`${referenceIdPrefix}-${reference.id}`}>
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

export default TopicReferencesSection;


