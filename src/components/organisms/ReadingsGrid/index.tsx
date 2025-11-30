"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Container } from "@/components/layout/Container";
import { ReadingCard } from "@/components/atoms/ReadingCard";
import { ReadingCardContent, ReadingCardContentProps } from "@/components/molecules/ReadingCardContent";
import { BackToTopButton } from "@/components/atoms/BackToTopButton";
import { StyledSection, StyledGrid } from "./styles";
import {
  READINGS_CATEGORY_TAG_METADATA,
  READINGS_DESCRIPTION_METADATA,
  READINGS_LINK_METADATA,
  READINGS_CARD_METADATA,
  READINGS_GRID_METADATA,
} from "./metadata";

export type ReadingItem = ReadingCardContentProps & {
  id: string;
  href?: string;
};

export type ReadingsGridProps = {
  readings: ReadingItem[];
  className?: string;
  style?: React.CSSProperties;
};

export const ReadingsGrid: React.FC<ReadingsGridProps> = ({
  readings,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const gridInteraction = useDevModeInteraction(READINGS_GRID_METADATA);

  return (
    <StyledSection
      id="readings-grid"
      className={className}
      style={style}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={READINGS_GRID_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          const target = event.target as HTMLElement;
          // Só mostra tooltip se não estiver sobre um card ou elemento instrumentado
          if (!target.closest('[data-devmode-target]') || target === event.currentTarget) {
            gridInteraction.showMetadataTooltip(event.currentTarget);
          }
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          gridInteraction.hideMetadataTooltip();
        }
      }}
      onFocusCapture={(event: React.FocusEvent<HTMLElement>) => {
        if (isDevMode) {
          gridInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onBlurCapture={() => {
        if (isDevMode) {
          gridInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          const target = event.target as HTMLElement;
          // Só abre modal se clicou na área vazia do grid, não em cards
          if (!target.closest('[data-devmode-target]') || target === event.currentTarget) {
            gridInteraction.handleDevInteraction(event);
          }
        }
      }}
    >
      <Container padding="section">
        <StyledGrid>
          {readings.map((reading) => (
            <ReadingCard key={reading.id} href={reading.href} metadata={READINGS_CARD_METADATA}>
              <ReadingCardContent
                category={reading.category}
                title={reading.title}
                author={reading.author}
                description={reading.description}
                linkHref={reading.linkHref}
                linkLabel={reading.linkLabel}
                categoryMetadata={READINGS_CATEGORY_TAG_METADATA}
                descriptionMetadata={READINGS_DESCRIPTION_METADATA}
                linkMetadata={READINGS_LINK_METADATA}
              />
            </ReadingCard>
          ))}
        </StyledGrid>
        <BackToTopButton />
      </Container>
    </StyledSection>
  );
};

export default ReadingsGrid;

