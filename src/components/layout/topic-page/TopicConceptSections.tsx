"use client";

import React from "react";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, CardsWrapper, Card, CardTitle, CardSeparator, CardBody } from "@/components/organisms/UXConceptSections/styles";

export type TopicConceptCardConfig = {
  title: string;
  body: React.ReactNode;
  metadata: DevModeMetadata;
};

export type TopicConceptSectionsProps = {
  ariaLabel: string;
  sectionMetadata: DevModeMetadata;
  blocksGroupMetadata: DevModeMetadata;
  cards: [TopicConceptCardConfig, TopicConceptCardConfig];
};

export const TopicConceptSections: React.FC<TopicConceptSectionsProps> = ({
  ariaLabel,
  sectionMetadata,
  blocksGroupMetadata,
  cards,
}) => {
  const { isDevMode } = useDevMode();
  const sectionInteraction = useDevModeInteraction(sectionMetadata);
  const blocksInteraction = useDevModeInteraction(blocksGroupMetadata);
  const firstCardInteraction = useDevModeInteraction(cards[0].metadata);
  const secondCardInteraction = useDevModeInteraction(cards[1].metadata);

  return (
    <Section
      aria-label={ariaLabel}
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
      <CardsWrapper
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={blocksGroupMetadata.target}
        onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            blocksInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            blocksInteraction.hideMetadataTooltip();
          }
        }}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            blocksInteraction.handleDevInteraction(event);
          }
        }}
        style={{ cursor: blocksInteraction.getCursor() }}
      >
        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={cards[0].metadata.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              firstCardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              firstCardInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              firstCardInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: firstCardInteraction.getCursor() }}
        >
          <CardTitle>{cards[0].title}</CardTitle>
          <CardSeparator />
          <CardBody>{cards[0].body}</CardBody>
        </Card>

        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={cards[1].metadata.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              secondCardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              secondCardInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              secondCardInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: secondCardInteraction.getCursor() }}
        >
          <CardTitle>{cards[1].title}</CardTitle>
          <CardSeparator />
          <CardBody>{cards[1].body}</CardBody>
        </Card>
      </CardsWrapper>
    </Section>
  );
};

export default TopicConceptSections;


