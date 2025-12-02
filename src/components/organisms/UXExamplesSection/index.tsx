 "use client";

import React from "react";
import {
  Section,
  ContentWrapper,
  ExampleCard,
  ExampleTitle,
  ExampleDescription,
  ExampleItem,
  ExampleImageWrapper,
  ExampleSubtitle,
} from "./styles";
import ux1 from "./ux-1.webp";
import ux2 from "./ux-2.webp";
import ux3 from "./ux-3.webp";
import ux4 from "./ux-4.webp";
import { UX_EXAMPLES_CARDS_METADATA, UX_EXAMPLES_CONTAINER_METADATA } from "./metadata";
import { TopicExamplesSection } from "@/components/layout/topic-page/TopicExamplesSection";

const UXExamplesSection: React.FC = () => {
  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ux_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <TopicExamplesSection
      headingId="ux-examples-heading"
      title="Exemplos práticos de UX"
      containerMetadata={UX_EXAMPLES_CONTAINER_METADATA}
      cardsMetadata={UX_EXAMPLES_CARDS_METADATA}
      examples={[
        {
          title: "1. Arquitetura de Informação",
          image: ux1,
          imageAlt: 'Header com os links "UX", "Usabilidade" e "Acessibilidade".',
          description: (
            <>
              A decisão de dividir o vasto conhecimento de front-end em três pilares claros (UX, Usabilidade e
              Acessibilidade) utiliza a técnica de Chunking (agrupamento). Ao fragmentar um tema complexo em categorias
              digeríveis na navegação global, facilitamos a compreensão da estrutura do site e ajudamos o usuário a
              construir um mapa mental do conteúdo disponível{" "}
              <a href="#ux-ref-5" onClick={handleReferenceClick}>
                ⁽⁵⁾
              </a>
              .
            </>
          ),
        },
        {
          title: "2. Design Emocional",
          image: ux2,
          imageAlt: "Ilustração da raposa na Hero Section e na página 404.",
          description: (
            <>
              O uso consistente de um mascote (a raposa) não é apenas decoração. Segundo Don Norman, o design atua em
              três níveis: visceral, comportamental e reflexivo. O mascote atua no nível Visceral, gerando uma resposta
              emocional positiva imediata que torna a marca memorável e aumenta a tolerância do usuário a pequenas
              falhas durante a navegação{" "}
              <a href="#ux-ref-1" onClick={handleReferenceClick}>
                ⁽¹⁾
              </a>
              .
            </>
          ),
        },
        {
          title: "3. Carga Cognitiva e Escaneabilidade",
          image: ux3,
          imageAlt: "Seção de Leituras Recomendadas com cards de conteúdo.",
          description: (
            <>
              Usuários na web não leem linearmente; eles escaneiam. Ao estruturar o conteúdo com títulos claros,
              negritos estratégicos e resumos curtos (Microcopy), reduzimos a Carga Cognitiva. Isso permite que o
              usuário processe a informação rapidamente e decida se o conteúdo é relevante sem esforço mental
              desnecessário, respeitando o padrão de leitura em &quot;F&quot;{" "}
              <a href="#ux-ref-2" onClick={handleReferenceClick}>
                ⁽²⁾
              </a>
              .
            </>
          ),
        },
        {
          title: "4. Modelos Mentais",
          image: ux4,
          imageAlt: "Rodapé completo com informações institucionais e redes sociais.",
          description: (
            <>
              Usuários chegam ao site com Modelos Mentais pré-estabelecidos por suas experiências anteriores na web. Ao
              colocar informações de contato, copyright e
              redes sociais no rodapé, respeitamos a convenção padrão. Isso evita a fricção cognitiva, pois o usuário
              encontra as informações institucionais exatamente onde seu cérebro já foi treinado para procurar{" "}
              <a href="#ux-ref-3" onClick={handleReferenceClick}>
                ⁽³⁾
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
};

export default UXExamplesSection;


