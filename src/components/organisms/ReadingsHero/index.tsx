"use client";

import React from "react";
import Image from "next/image";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  StyledSection,
  StyledContentWrapper,
  StyledTextContent,
  StyledTitle,
  StyledDescription,
  StyledFoxWrapper,
  StyledScrollHint,
  StyledScrollArrow,
} from "./styles";
import { FilterButtons, FilterOption } from "@/components/molecules/FilterButtons";
import ExcitedFoxIcon from "@/components/icons/excitedFox.svg";
import {
  READINGS_HERO_TITLE_METADATA,
  READINGS_HERO_DESCRIPTION_METADATA,
} from "./metadata";

export type ReadingsHeroProps = {
  title: string;
  description: string;
  filters: FilterOption[];
  activeFilter?: string;
  onFilterChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const ReadingsHero: React.FC<ReadingsHeroProps> = ({
  title,
  description,
  filters,
  activeFilter,
  onFilterChange,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const titleInteraction = useDevModeInteraction(READINGS_HERO_TITLE_METADATA);
  const descriptionInteraction = useDevModeInteraction(READINGS_HERO_DESCRIPTION_METADATA);

  const scrollToCards = React.useCallback(() => {
    if (typeof document === "undefined") return;
    const target = document.getElementById("readings-grid");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleFilterChange = (value: string) => {
    if (onFilterChange) {
      onFilterChange(value);
    }
    scrollToCards();
  };

  return (
    <StyledSection className={className} style={style} aria-labelledby="readings-hero-heading">
      <StyledContentWrapper>
        <StyledFoxWrapper>
          <Image
            src={ExcitedFoxIcon}
            alt="Ilustração de uma raposa animada"
            width={354}
            height={434}
            priority
            style={{ position: "relative", zIndex: 2 }}
          />
        </StyledFoxWrapper>
        <StyledTextContent>
          <StyledTitle
            id="readings-hero-heading"
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={READINGS_HERO_TITLE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) => {
              if (isDevMode) titleInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onMouseLeave={titleInteraction.hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLHeadingElement>) => {
              if (isDevMode) titleInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onBlurCapture={titleInteraction.hideMetadataTooltip}
            onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
              if (isDevMode) titleInteraction.handleDevInteraction(event);
            }}
            style={{ cursor: titleInteraction.getCursor() }}
          >
            {title}
          </StyledTitle>
          <StyledDescription
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={READINGS_HERO_DESCRIPTION_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) descriptionInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onMouseLeave={descriptionInteraction.hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) => {
              if (isDevMode) descriptionInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onBlurCapture={descriptionInteraction.hideMetadataTooltip}
            onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) descriptionInteraction.handleDevInteraction(event);
            }}
            style={{ cursor: descriptionInteraction.getCursor() }}
          >
            {description}
          </StyledDescription>
          <FilterButtons
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          <StyledScrollHint
            type="button"
            aria-label="Ver lista de leituras abaixo"
            onClick={scrollToCards}
          >
            <StyledScrollArrow />
          </StyledScrollHint>
        </StyledTextContent>
      </StyledContentWrapper>
    </StyledSection>
  );
};

export default ReadingsHero;

