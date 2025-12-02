"use client";

import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, ContentWrapper, Card, Title, Description, Separator, Checklist, ChecklistItem, Bullet } from "./styles";
import { UX_BEST_PRACTICES_CHECKLIST_METADATA } from "./metadata";

const checklistItems: string[] = [
  "O projeto está alinhado às necessidades reais? O desenvolvimento foi baseado em pesquisa contextual e testes com usuários reais, garantindo que as expectativas sejam atendidas?",
  "A jornada é fluida? Os fluxos de interação ocorrem sem fricção ou etapas desnecessárias, facilitando o alcance dos objetivos?",
  "O produto gera satisfação emocional? A interação busca ser prazerosa e reduzir frustrações, considerando os afetos evocados pelo uso?",
  "O processo é centrado no usuário? Houve envolvimento contínuo do usuário durante todo o processo de design, e não apenas na validação final?",
  "O valor percebido é claro? O produto comunica claramente sua utilidade e como ele gera valor para quem o utiliza?",
  "A experiência permite customização? Existe a possibilidade de adaptar a experiência e a interface às preferências individuais do usuário?",
  "O design contempla inclusão e diversidade? Foram considerados diferentes perfis, culturas e contextos de uso para garantir uma experiência ampla?",
  "Existe avaliação contínua da experiência? São aplicados testes e métricas de forma recorrente para garantir a melhoria constante do produto?",
];

const UXBestPracticesSection: React.FC = () => {
  const { isDevMode } = useDevMode();
  const checklistInteraction = useDevModeInteraction(UX_BEST_PRACTICES_CHECKLIST_METADATA);
  return (
    <Section aria-labelledby="ux-best-practices-heading">
      <ContentWrapper>
        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={UX_BEST_PRACTICES_CHECKLIST_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              checklistInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              checklistInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              checklistInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: checklistInteraction.getCursor() }}
        >
          <Title id="ux-best-practices-heading">Boas práticas</Title>
          <Description>
            Use este checklist para se guiar no desenvolvimento de software priorizando a experiência do usuário.
          </Description>
          <Separator />
          <Checklist>
            {checklistItems.map((item, index) => (
              <ChecklistItem key={index}>
                <Bullet aria-hidden="true" />
                <span>{item}</span>
              </ChecklistItem>
            ))}
          </Checklist>
        </Card>
      </ContentWrapper>
    </Section>
  );
};

export default UXBestPracticesSection;


