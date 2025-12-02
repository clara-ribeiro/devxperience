"use client";

import React from "react";
import SmartFox from "@/components/organisms/InformationSection/smartFox.svg";
import { TopicHero } from "@/components/layout/topic-page/TopicHero";
import { UX_HERO_FOX_METADATA } from "@/components/organisms/UXHero/metadata";
import { A11Y_HERO_SECTION_METADATA } from "./metadata";

const AccessibilityHero: React.FC = () => {
  return (
    <TopicHero
      headingId="a11y-hero-heading"
      titleLines={["Acessibilidade", "na Prática"]}
      titleVariant="accessibility"
      description={
        <>
          A web é para todos. Neste guia, vamos além da conformidade para entender como construir interfaces
          verdadeiramente inclusivas, eliminando barreiras invisíveis no código.
        </>
      }
      sectionMetadata={A11Y_HERO_SECTION_METADATA}
      foxMetadata={UX_HERO_FOX_METADATA}
      foxImage={SmartFox}
      foxAlt=""
    />
  );
};

export default AccessibilityHero;


