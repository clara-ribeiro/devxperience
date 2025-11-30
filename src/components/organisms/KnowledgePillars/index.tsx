"use client";

import React from "react";
import { Section, ContentWrapper } from "./styles";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionDescription } from "@/components/atoms/SectionDescription";
import { PillarCardsGrid, PillarCardData } from "@/components/molecules/PillarCardsGrid";

export type KnowledgePillarsProps = {
  title: string;
  description: string;
  cards: PillarCardData[];
  className?: string;
  style?: React.CSSProperties;
};

const KnowledgePillars: React.FC<KnowledgePillarsProps> = ({
  title,
  description,
  cards,
  className,
  style,
}) => {
  return (
    <Section className={className} style={style} aria-labelledby="knowledge-pillars-heading">
      <ContentWrapper>
        <SectionTitle id="knowledge-pillars-heading">{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
        <PillarCardsGrid cards={cards} />
      </ContentWrapper>
    </Section>
  );
};

export default KnowledgePillars;

