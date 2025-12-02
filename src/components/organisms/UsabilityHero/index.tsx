"use client";

import React from "react";
import SmartFox from "@/components/organisms/InformationSection/smartFox.svg";
import { TopicHero } from "@/components/layout/topic-page/TopicHero";
import { UX_HERO_FOX_METADATA } from "@/components/organisms/UXHero/metadata";
import { USAB_HERO_SECTION_METADATA } from "./metadata";

const UsabilityHero: React.FC = () => {
  return (
    <TopicHero
      headingId="usability-hero-heading"
      titleLines={["Usabilidade", "na Prática"]}
      titleVariant="accessibility"
      description={
        <>
          Não basta funcionar, tem que ser fácil de usar. Entenda como criar fluxos eficientes, eficazes e satisfatórios,
          reduzindo o esforço cognitivo do usuário.
        </>
      }
      sectionMetadata={USAB_HERO_SECTION_METADATA}
      foxMetadata={UX_HERO_FOX_METADATA}
      foxImage={SmartFox}
      foxAlt=""
    />
  );
};

export default UsabilityHero;


