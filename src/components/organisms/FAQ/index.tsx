"use client";

import React from "react";
import { Section, ContentWrapper, FAQList } from "./styles";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FAQItem } from "@/components/molecules/FAQItem";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  ACCORDION_PATTERN_METADATA,
  ICON_FEEDBACK_METADATA,
  CLICKABLE_AREA_METADATA,
} from "./metadata";

export type FAQItemData = {
  question: string;
  answer: string;
};

export type FAQProps = {
  items: FAQItemData[];
  className?: string;
  style?: React.CSSProperties;
};

const FAQ: React.FC<FAQProps> = ({ items, className, style }) => {
  const { isDevMode } = useDevMode();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0); // Primeiro item expandido por padrão

  // Interações do Dev Mode
  const accordionInteraction = useDevModeInteraction(ACCORDION_PATTERN_METADATA);
  const iconFeedbackInteraction = useDevModeInteraction(ICON_FEEDBACK_METADATA);
  const clickableAreaInteraction = useDevModeInteraction(CLICKABLE_AREA_METADATA);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section
      className={className}
      aria-labelledby="faq-heading"
      style={style}
    >
      <ContentWrapper>
        <SectionTitle id="faq-heading">Perguntas Frequentes</SectionTitle>

        <FAQList>
          {items.map((item, index) => {
            // Alterna entre Accordion e Lei de Fitts para o header
            const headerMetadata = index % 2 === 0 ? ACCORDION_PATTERN_METADATA : CLICKABLE_AREA_METADATA;
            const headerInteraction = index % 2 === 0 ? accordionInteraction : clickableAreaInteraction;

            return (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
                id={`faq-item-${index}`}
                data-devmode-highlight={isDevMode ? "true" : undefined}
                data-devmode-target={headerMetadata.target}
                onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                  if (isDevMode) {
                    headerInteraction.showMetadataTooltip(event.currentTarget);
                  }
                }}
                onMouseLeave={() => {
                  if (isDevMode) {
                    headerInteraction.hideMetadataTooltip();
                  }
                }}
                onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) => {
                  if (isDevMode) {
                    headerInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
                  }
                }}
                onBlurCapture={() => {
                  if (isDevMode) {
                    headerInteraction.hideMetadataTooltip();
                  }
                }}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  if (isDevMode) {
                    event.preventDefault();
                    headerInteraction.handleDevInteraction(event);
                  }
                }}
                iconDataDevModeHighlight={isDevMode ? "true" : undefined}
                iconDataDevModeTarget={ICON_FEEDBACK_METADATA.target}
                onIconMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
                  if (isDevMode) {
                    iconFeedbackInteraction.showMetadataTooltip(event.currentTarget);
                  }
                }}
                onIconMouseLeave={() => {
                  if (isDevMode) {
                    iconFeedbackInteraction.hideMetadataTooltip();
                  }
                }}
                onIconFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) => {
                  if (isDevMode) {
                    iconFeedbackInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
                  }
                }}
                onIconBlurCapture={() => {
                  if (isDevMode) {
                    iconFeedbackInteraction.hideMetadataTooltip();
                  }
                }}
                onIconClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  if (isDevMode) {
                    event.preventDefault();
                    iconFeedbackInteraction.handleDevInteraction(event);
                  }
                }}
                iconStyle={{ cursor: iconFeedbackInteraction.getCursor() }}
              />
            );
          })}
        </FAQList>
      </ContentWrapper>
    </Section>
  );
};

export default FAQ;

