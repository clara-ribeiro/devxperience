"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { TopicReadingsSection } from "@/components/layout/topic-page/TopicReadingsSection";
import { UX_READINGS_TITLES_SUMMARIES_METADATA } from "@/components/organisms/UXReadingsSection/metadata";
import { A11Y_READINGS_SECTION_TITLE_METADATA } from "./metadata";

const AccessibilityReadingsSection: React.FC = () => {
  const { isDevMode } = useDevMode();

  return (
    <TopicReadingsSection
      headingId="a11y-readings-heading"
      title="Referências Fundamentais de Acessibilidade"
      subtitle="Comece por aqui para entender a base normativa e prática da acessibilidade digital aplicada ao front-end."
      resources={[
        {
          category: "Acessibilidade",
          title: "Diretrizes WCAG 2.2",
          author: "W3C Recommendation",
          description:
            "O padrão internacional definitivo. Define os princípios POUR: Perceptível, Operável, Compreensível e Robusto.",
          linkHref: "https://www.w3.org/TR/WCAG22/",
          linkLabel: "Ver WCAG 2.2",
        },
        {
          category: "Acessibilidade",
          title: "ABNT NBR 17225:2023",
          author: "Associação Brasileira de Normas Técnicas",
          description:
            "Norma brasileira de Acessibilidade Digital. Essencial para adequação legal de projetos nacionais.",
          linkHref: "https://www.abnt.org.br/",
          linkLabel: "Ver detalhes da norma",
        },
      ]}
      sectionTitleMetadata={A11Y_READINGS_SECTION_TITLE_METADATA}
      cardsGroupMetadata={UX_READINGS_TITLES_SUMMARIES_METADATA}
      ctaLabel={isDevMode ? "Ver leituras filtradas" : "Ver todas as referências"}
      ctaHref="/leituras?filter=acessibilidade"
    />
  );
};

export default AccessibilityReadingsSection;


