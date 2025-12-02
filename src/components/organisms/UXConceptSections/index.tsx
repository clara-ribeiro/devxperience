"use client";

import React from "react";
import { Section, CardsWrapper, Card, CardTitle, CardSeparator, CardBody } from "./styles";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { UX_THEORY_BLOCKS_METADATA } from "./metadata";
import { UX_ISO_CARD_METADATA, UX_ROI_CARD_METADATA } from "./metadata";
import { TopicConceptSections } from "@/components/layout/topic-page/TopicConceptSections";

const UXConceptSections: React.FC = () => {
  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ux_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <TopicConceptSections
      ariaLabel="Conceitos de UX"
      sectionMetadata={SECTION_CONTAINER_METADATA}
      blocksGroupMetadata={UX_THEORY_BLOCKS_METADATA}
      cards={[
        {
          title: "O que é UX?",
          metadata: UX_ISO_CARD_METADATA,
          body: (
            <>
              <p>
                A Experiência do Usuário (UX) vai muito além da interface ou das funcionalidades do produto em si. Ela
                abrange as emoções, crenças e percepções que o sistema desperta nas pessoas, considerando não apenas o
                momento do &quot;clique&quot;, mas tudo o que acontece antes e depois da interação{" "}
                <a href="#ux-ref-1" onClick={handleReferenceClick}>
                  ⁽¹⁾
                </a>
                .
              </p>
              <p>
                Essa visão holística está fundamentada na norma técnica ISO 9241-210, que define UX como o conjunto de
                reações do usuário decorrentes do uso — efetivo ou antecipado — de um sistema, produto ou serviço{" "}
                <a href="#ux-ref-2" onClick={handleReferenceClick}>
                  ⁽²⁾
                </a>
                . Ou seja, UX não é apenas sobre telas, mas sobre a amplitude das experiências humanas com tecnologias
                digitais, apoiando-se em princípios da filosofia, psicologia e ciências cognitivas{" "}
                <a href="#ux-ref-3" onClick={handleReferenceClick}>
                  ⁽³⁾
                </a>
                .
              </p>
              <p>
                Embora não exista um consenso único devido à multiplicidade de abordagens na área, o foco central
                permanece o mesmo: entender o estado interno do usuário (suas necessidades, humor e contexto) e como
                isso dialoga com as características do sistema que você desenvolve{" "}
                <a href="#ux-ref-1" onClick={handleReferenceClick}>
                  ⁽¹⁾
                </a>
                <a href="#ux-ref-4" onClick={handleReferenceClick}>
                  ⁽⁴⁾
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Por que UX é importante?",
          metadata: UX_ROI_CARD_METADATA,
          body: (
            <>
              <p>
                Para a engenharia de software, UX é um atributo de qualidade. Uma boa experiência não apenas melhora a
                satisfação, mas reduz falhas operacionais, aumenta a eficiência das tarefas e fortalece a relação de
                confiança com o produto{" "}
                <a href="#ux-ref-5" onClick={handleReferenceClick}>
                  ⁽⁵⁾
                </a>
                .
              </p>
              <p>
                Em um mercado competitivo, produtos com experiências ruins são abandonados rapidamente. Por outro lado,
                interfaces intuitivas e bem projetadas são determinantes para a fidelização do cliente e para o sucesso
                comercial do negócio{" "}
                <a href="#ux-ref-6" onClick={handleReferenceClick}>
                  ⁽⁶⁾
                </a>
                .
              </p>
              <p>
                Do ponto de vista técnico e gerencial, investir em UX é estratégico: reduz custos ao minimizar o
                retrabalho no desenvolvimento e no suporte técnico, ao mesmo tempo em que garante acessibilidade para
                diferentes perfis de usuários{" "}
                <a href="#ux-ref-7" onClick={handleReferenceClick}>
                  ⁽⁷⁾
                </a>
                . UX alinha o sucesso do usuário aos objetivos da organização.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default UXConceptSections;


