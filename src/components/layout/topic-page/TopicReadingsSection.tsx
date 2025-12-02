"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import ExcitedFoxIcon from "@/components/icons/excitedFox.svg";
import {
  Section,
  ContentWrapper,
  TextColumn,
  Title,
  Subtitle,
  ButtonWrapper,
  FoxColumn,
  FoxWrapper,
  FeaturedCardWrapper,
} from "@/components/organisms/UXReadingsSection/styles";
import { ReadingCard } from "@/components/atoms/ReadingCard";
import { ReadingCardContent } from "@/components/molecules/ReadingCardContent";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  READINGS_CARD_METADATA,
  READINGS_CATEGORY_TAG_METADATA,
  READINGS_DESCRIPTION_METADATA,
  READINGS_LINK_METADATA,
} from "@/components/organisms/ReadingsGrid/metadata";

export type TopicReadingResource = {
  category: string;
  title: string;
  author: string;
  description: string;
  linkHref: string;
  linkLabel: string;
};

export type TopicReadingsSectionProps = {
  headingId: string;
  title: string;
  subtitle: string;
  resources: TopicReadingResource[];
  sectionTitleMetadata: DevModeMetadata;
  cardsGroupMetadata: DevModeMetadata;
  ctaLabel: string;
  ctaHref: string;
};

export const TopicReadingsSection: React.FC<TopicReadingsSectionProps> = ({
  headingId,
  title,
  subtitle,
  resources,
  sectionTitleMetadata,
  cardsGroupMetadata,
  ctaLabel,
  ctaHref,
}) => {
  const router = useRouter();
  const { isDevMode } = useDevMode();
  const titleInteraction = useDevModeInteraction(sectionTitleMetadata);
  const cardsInteraction = useDevModeInteraction(cardsGroupMetadata);

  const handleCtaClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode && cardsGroupMetadata) {
      const handled = cardsInteraction.handleNeutralInteraction(event);
      if (handled) return;
    }
    router.push(ctaHref);
  };

  return (
    <Section aria-labelledby={headingId}>
      <ContentWrapper>
        <TextColumn>
          <Title
            id={headingId}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={sectionTitleMetadata.target}
            onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) => {
              if (isDevMode) {
                titleInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                titleInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
              if (isDevMode) {
                titleInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: titleInteraction.getCursor() }}
          >
            {title}
          </Title>
          <Subtitle>{subtitle}</Subtitle>

          <FeaturedCardWrapper
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={cardsGroupMetadata.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            {resources.map((resource) => (
              <ReadingCard key={resource.title} metadata={READINGS_CARD_METADATA}>
                <ReadingCardContent
                  category={resource.category}
                  title={resource.title}
                  author={resource.author}
                  description={resource.description}
                  linkHref={resource.linkHref}
                  linkLabel={resource.linkLabel}
                  categoryMetadata={READINGS_CATEGORY_TAG_METADATA}
                  descriptionMetadata={READINGS_DESCRIPTION_METADATA}
                  linkMetadata={READINGS_LINK_METADATA}
                />
              </ReadingCard>
            ))}

            <FoxColumn aria-hidden="true">
              <FoxWrapper>
                <Image src={ExcitedFoxIcon} alt="" width={354} height={434} />
              </FoxWrapper>
            </FoxColumn>
          </FeaturedCardWrapper>

          <ButtonWrapper>
            <Button
              type="button"
              label={ctaLabel}
              variant="solid"
              colors={{ background: "#F1DFD2", text: "#261D1D", border: "#261D1D" }}
              onClick={handleCtaClick}
            />
          </ButtonWrapper>
        </TextColumn>
      </ContentWrapper>
    </Section>
  );
};

export default TopicReadingsSection;


