"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { TopicReadingsSection } from "@/components/layout/topic-page/TopicReadingsSection";
import { UX_READINGS_TITLES_SUMMARIES_METADATA } from "@/components/organisms/UXReadingsSection/metadata";
import { USAB_READINGS_SECTION_TITLE_METADATA } from "./metadata";

const UsabilityReadingsSection: React.FC = () => {
  const { isDevMode } = useDevMode();

  return (
    <TopicReadingsSection
      headingId="usab-readings-heading"
      title="Referências Fundamentais de Usabilidade"
      subtitle="Conheça os livros que consolidaram os princípios de usabilidade e avaliação de interfaces usados até hoje na indústria."
      resources={[
        {
          category: "Usabilidade",
          title: "Usability Engineering",
          author: "Jakob Nielsen",
          description:
            "A obra que definiu as heurísticas de usabilidade usadas mundialmente para inspeção de interfaces.",
          linkHref: "https://www.nngroup.com/books/usability-engineering/",
          linkLabel: "Ver livro",
        },
        {
          category: "Usabilidade",
          title: "Don't Make Me Think",
          author: "Steve Krug",
          description:
            "O guia definitivo sobre como a usabilidade na web deve ser óbvia e autoexplicativa.",
          linkHref: "https://sensible.com/dont-make-me-think/",
          linkLabel: "Ver livro",
        },
        {
          category: "Usabilidade",
          title: "Handbook of Usability Testing",
          author: "Rubin & Chisnell",
          description:
            "Como planejar e executar testes com usuários para medir eficácia, eficiência e satisfação.",
          linkHref: "https://www.wiley.com/en-us/Handbook+of+Usability+Testing%3A+How+to+Plan%2C+Design%2C+and+Conduct+Effective+Tests%2C+2nd+Edition-p-9780470185483",
          linkLabel: "Ver livro",
        },
      ]}
      sectionTitleMetadata={USAB_READINGS_SECTION_TITLE_METADATA}
      cardsGroupMetadata={UX_READINGS_TITLES_SUMMARIES_METADATA}
      ctaLabel={isDevMode ? "Ver leituras filtradas" : "Ver todas as referências"}
      ctaHref="/leituras?filter=usabilidade"
    />
  );
};

export default UsabilityReadingsSection;


