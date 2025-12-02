"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  Section,
  ContentWrapper,
  ExampleCard,
  ExampleTitle,
  ExampleDescription,
  ExampleItem,
  ExampleImageWrapper,
  ExampleSubtitle,
} from "@/components/organisms/UXExamplesSection/styles";

export type TopicExampleConfig = {
  title: string;
  image: StaticImageData | string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  description: React.ReactNode;
};

export type TopicExamplesSectionProps = {
  headingId: string;
  title: string;
  containerMetadata: DevModeMetadata;
  cardsMetadata: DevModeMetadata;
  examples: TopicExampleConfig[];
};

export const TopicExamplesSection: React.FC<TopicExamplesSectionProps> = ({
  headingId,
  title,
  containerMetadata,
  cardsMetadata,
  examples,
}) => {
  const { isDevMode } = useDevMode();
  const containerInteraction = useDevModeInteraction(containerMetadata);
  const cardsInteraction = useDevModeInteraction(cardsMetadata);

  return (
    <Section aria-labelledby={headingId}>
      <ContentWrapper>
        <ExampleCard
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={containerMetadata.target}
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
            if (isDevMode) {
              containerInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: containerInteraction.getCursor() }}
        >
          <ExampleTitle id={headingId}>{title}</ExampleTitle>

          {examples.map((example, index) => (
            <ExampleItem
              key={example.title}
              data-devmode-highlight={isDevMode ? "true" : undefined}
              data-devmode-target={cardsMetadata.target}
              onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
                if (isDevMode) {
                  cardsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
                }
              }}
              onMouseLeave={() => {
                if (isDevMode) {
                  cardsInteraction.hideMetadataTooltip();
                }
              }}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                if (isDevMode) {
                  cardsInteraction.handleDevInteraction(event);
                }
              }}
              style={{ cursor: cardsInteraction.getCursor() }}
            >
              <ExampleSubtitle>
                {index + 1}. {example.title}
              </ExampleSubtitle>
              <ExampleImageWrapper>
                {typeof example.image === "string" &&
                (example.image.endsWith(".webm") || example.image.endsWith(".mp4")) ? (
                  <video
                    src={example.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                ) : (
                  <Image
                    src={example.image}
                    alt={example.imageAlt}
                    width={
                      example.imageWidth ??
                      (typeof example.image !== "string" ? (example.image as StaticImageData).width : 1200)
                    }
                    height={
                      example.imageHeight ??
                      (typeof example.image !== "string" ? (example.image as StaticImageData).height : 630)
                    }
                  />
                )}
              </ExampleImageWrapper>
              <ExampleDescription>{example.description}</ExampleDescription>
            </ExampleItem>
          ))}
        </ExampleCard>
      </ContentWrapper>
    </Section>
  );
};

export default TopicExamplesSection;


