"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, CardsWrapper, Card, CardTitle, CardSeparator, CardBody } from "./styles";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";

const UXConceptSections: React.FC = () => {
  const { isDevMode } = useDevMode();
  const sectionInteraction = useDevModeInteraction(SECTION_CONTAINER_METADATA);

  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ux_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <Section
      aria-label="Conceitos de UX"
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={SECTION_CONTAINER_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          sectionInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          sectionInteraction.hideMetadataTooltip();
        }
      }}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          sectionInteraction.handleDevInteraction(event);
        }
      }}
      style={{ cursor: sectionInteraction.getCursor() }}
    >
      <CardsWrapper>
        <Card>
          <CardTitle>O que é UX?</CardTitle>
          <CardSeparator />
          <CardBody>
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
              permanece o mesmo: entender o estado interno do usuário (suas necessidades, humor e contexto) e como isso
              dialoga com as características do sistema que você desenvolve{" "}
              <a href="#ux-ref-1" onClick={handleReferenceClick}>
                ⁽¹⁾
              </a>
              <a href="#ux-ref-4" onClick={handleReferenceClick}>
                ⁽⁴⁾
              </a>
              .
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Por que UX é importante?</CardTitle>
          <CardSeparator />
          <CardBody>
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
          </CardBody>
        </Card>
      </CardsWrapper>
    </Section>
  );
};

export default UXConceptSections;


