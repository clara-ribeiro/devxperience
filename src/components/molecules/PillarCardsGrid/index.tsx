import React from "react";
import { StyledPillarCardsGrid } from "./styles";
import { PillarCard } from "@/components/molecules/PillarCard";

export type PillarCardData = {
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
};

export type PillarCardsGridProps = {
  cards: PillarCardData[];
  className?: string;
  style?: React.CSSProperties;
};

export const PillarCardsGrid: React.FC<PillarCardsGridProps> = ({
  cards,
  className,
  style,
}) => {
  return (
    <StyledPillarCardsGrid className={className} style={style}>
      {cards.map((card, index) => (
        <PillarCard
          key={index}
          title={card.title}
          description={card.description}
          linkHref={card.linkHref}
          linkLabel={card.linkLabel}
        />
      ))}
    </StyledPillarCardsGrid>
  );
};

export default PillarCardsGrid;

