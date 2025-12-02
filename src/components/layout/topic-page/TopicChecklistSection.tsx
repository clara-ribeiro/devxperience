"use client";

import React from "react";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  Section,
  ContentWrapper,
  Card,
  Title,
  Description,
  Separator,
  Checklist,
  ChecklistItem,
  Bullet,
} from "@/components/organisms/UXBestPracticesSection/styles";

export type TopicChecklistSectionProps = {
  headingId: string;
  title: string;
  description: React.ReactNode;
  checklistItems: string[];
  checklistMetadata: DevModeMetadata;
};

export const TopicChecklistSection: React.FC<TopicChecklistSectionProps> = ({
  headingId,
  title,
  description,
  checklistItems,
  checklistMetadata,
}) => {
  const { isDevMode } = useDevMode();
  const checklistInteraction = useDevModeInteraction(checklistMetadata);

  return (
    <Section aria-labelledby={headingId}>
      <ContentWrapper>
        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={checklistMetadata.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              checklistInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              checklistInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              checklistInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: checklistInteraction.getCursor() }}
        >
          <Title id={headingId}>{title}</Title>
          <Description>{description}</Description>
          <Separator />
          <Checklist>
            {checklistItems.map((item) => (
              <ChecklistItem key={item}>
                <Bullet aria-hidden="true" />
                <span>{item}</span>
              </ChecklistItem>
            ))}
          </Checklist>
        </Card>
      </ContentWrapper>
    </Section>
  );
};

export default TopicChecklistSection;


