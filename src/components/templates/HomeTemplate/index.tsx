"use client";

import React from "react";
import MainHero from "@/components/organisms/MainHero";
import BulletPointsWithVideo from "@/components/organisms/BulletPointsWithVideo";
import InformationSection from "@/components/organisms/InformationSection";
import KnowledgePillars from "@/components/organisms/KnowledgePillars";
import Banner from "@/components/organisms/Banner";
import FAQ from "@/components/organisms/FAQ";
import { PillarCardData } from "@/components/molecules/PillarCardsGrid";
import { FAQItemData } from "@/components/organisms/FAQ";

export type HomeTemplateProps = {
  knowledgePillars: {
    title: string;
    description: string;
    cards: PillarCardData[];
  };
  banner: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  faqItems: FAQItemData[];
  className?: string;
  style?: React.CSSProperties;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  knowledgePillars,
  banner,
  faqItems,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <MainHero />
      <BulletPointsWithVideo />
      <InformationSection />
      <KnowledgePillars
        title={knowledgePillars.title}
        description={knowledgePillars.description}
        cards={knowledgePillars.cards}
      />
      <Banner
        title={banner.title}
        description={banner.description}
        buttonLabel={banner.buttonLabel}
        buttonHref={banner.buttonHref}
      />
      <FAQ items={faqItems} />
    </div>
  );
};

export default HomeTemplate;

