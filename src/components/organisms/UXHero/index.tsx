"use client";

import React from "react";
import { Section, ContentWrapper, HeroContent, HeroTitle, FoxWrapper } from "./styles";
import { UX_HERO_FOX_METADATA, UX_HERO_SECTION_METADATA } from "./metadata";
import SmartFox from "@/components/organisms/InformationSection/smartFox.svg";
import { TopicHero } from "@/components/layout/topic-page/TopicHero";

const UXHero: React.FC = () => {
  return (
    <TopicHero
      headingId="ux-hero-heading"
      titleLines={["UX", "na prática"]}
      description={
        <>
          UX não é apenas sobre deixar a tela bonita; é sobre engenharia de requisitos e eficiência. Descubra como
          decisões de design impactam a estrutura do seu código e aprenda a criar produtos que não apenas funcionam,
          mas resolvem problemas reais.
        </>
      }
      sectionMetadata={UX_HERO_SECTION_METADATA}
      foxMetadata={UX_HERO_FOX_METADATA}
      foxImage={SmartFox}
      foxAlt=""
    />
  );
};

export default UXHero;


