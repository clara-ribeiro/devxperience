"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import {
  UX_READINGS_SECTION_TITLE_METADATA,
  UX_READINGS_TITLES_SUMMARIES_METADATA,
} from "./metadata";
import { TopicReadingsSection } from "@/components/layout/topic-page/TopicReadingsSection";

const uxReadings = [
  {
    title: "Design Centrado no Usuário",
    author: "Travis Lowdermilk",
  },
  {
    title: "About Face",
    author: "Alan Cooper",
  },
  {
    title: "Introdução e Boas Práticas em UX Design",
    author: "Fabricio Teixeira",
  },
];

const UXReadingsSection: React.FC = () => {
  const { isDevMode } = useDevMode();

  return (
    <TopicReadingsSection
      headingId="ux-readings-heading"
      title="Referências Fundamentais de UX"
      subtitle="Não reinvente a roda. Aprenda com os pioneiros da usabilidade, acessibilidade e design de interação através desta seleção bibliográfica comentada."
      resources={[
        {
          category: "UX Design",
          title: "Design Centrado no Usuário",
          author: "Travis Lowdermilk",
          description:
            "Escrito pela O'Reilly para desenvolvedores. Aprenda a integrar o feedback do usuário diretamente no seu ciclo de desenvolvimento, evitando retrabalho e criando features que as pessoas realmente usam.",
          linkHref: "https://novatec.com.br/livros/design-centrado-usuario/",
          linkLabel: "Ver detalhes",
        },
        {
          category: "UX Design",
          title: "About Face",
          author: "Alan Cooper",
          description:
            "A bíblia do Design de Interação. Essencial para entender como transformar requisitos abstratos em interfaces lógicas, fluxos de navegação eficientes e comportamentos de sistema previsíveis.",
          linkHref:
            "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576",
          linkLabel: "Ver detalhes",
        },
      ]}
      sectionTitleMetadata={UX_READINGS_SECTION_TITLE_METADATA}
      cardsGroupMetadata={UX_READINGS_TITLES_SUMMARIES_METADATA}
      ctaLabel="Ver todas as referências"
      ctaHref="/leituras?filter=ux-design"
    />
  );
};

export default UXReadingsSection;


