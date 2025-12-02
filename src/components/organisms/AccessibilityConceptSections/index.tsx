import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, CardsWrapper, Card, CardTitle, CardSeparator, CardBody } from "@/components/organisms/UXConceptSections/styles";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { UX_ISO_CARD_METADATA, UX_ROI_CARD_METADATA } from "@/components/organisms/UXConceptSections/metadata";
import { A11Y_THEORY_BLOCKS_METADATA } from "./metadata";

const AccessibilityConceptSections: React.FC = () => {
  const { isDevMode } = useDevMode();
  const sectionInteraction = useDevModeInteraction(SECTION_CONTAINER_METADATA);
  const theoryInteraction = useDevModeInteraction(A11Y_THEORY_BLOCKS_METADATA);
  const isoCardInteraction = useDevModeInteraction(UX_ISO_CARD_METADATA);
  const roiCardInteraction = useDevModeInteraction(UX_ROI_CARD_METADATA);

  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("a11y_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <Section
      aria-label="Conceitos de Acessibilidade"
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
      <CardsWrapper
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={A11Y_THEORY_BLOCKS_METADATA.target}
        onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            theoryInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            theoryInteraction.hideMetadataTooltip();
          }
        }}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (isDevMode) {
            theoryInteraction.handleDevInteraction(event);
          }
        }}
        style={{ cursor: theoryInteraction.getCursor() }}
      >
        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={UX_ISO_CARD_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              isoCardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              isoCardInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              isoCardInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: isoCardInteraction.getCursor() }}
        >
          <CardTitle>O que é Acessibilidade Digital?</CardTitle>
          <CardSeparator />
          <CardBody>
            <p>
              Segundo a norma ISO 9241-11, acessibilidade é a medida em que produtos e sistemas podem ser utilizados por
              pessoas com a mais ampla gama de necessidades e capacidades para alcançar objetivos em contextos
              específicos{" "}
              <a href="#a11y-ref-1" onClick={handleReferenceClick}>
                ⁽¹⁾
              </a>
              .
            </p>
            <p>
              No campo tecnológico, o W3C define que a acessibilidade web significa garantir que pessoas com deficiência
              possam perceber, compreender, navegar e interagir com a web em condições de igualdade. O foco é remover
              barreiras — sejam elas visuais, auditivas, motoras ou cognitivas — que impeçam o acesso à informação{" "}
              <a href="#a11y-ref-2" onClick={handleReferenceClick}>
                ⁽²⁾
              </a>
              .
            </p>
          </CardBody>
        </Card>

        <Card
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={UX_ROI_CARD_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              roiCardInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              roiCardInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              roiCardInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: roiCardInteraction.getCursor() }}
        >
          <CardTitle>Por que é importante?</CardTitle>
          <CardSeparator />
          <CardBody>
            <p>
              Além de ser um direito humano fundamental, a acessibilidade é um requisito legal no Brasil. A Lei Brasileira
              de Inclusão (LBI) torna obrigatória a acessibilidade em sites de empresas e órgãos públicos{" "}
              <a href="#a11y-ref-5" onClick={handleReferenceClick}>
                ⁽⁵⁾
              </a>
              .
            </p>
            <p>
              Mas vai além da lei: o W3C enfatiza que a acessibilidade beneficia a todos, inclusive pessoas com
              limitações temporárias (como um braço quebrado) ou situacionais (como tentar ler uma tela sob sol forte).
              Ao seguir a norma brasileira ABNT NBR 17225, garantimos que qualquer pessoa possa operar interfaces com
              segurança e autonomia{" "}
              <a href="#a11y-ref-4" onClick={handleReferenceClick}>
                ⁽⁴⁾
              </a>
              .
            </p>
          </CardBody>
        </Card>
      </CardsWrapper>
    </Section>
  );
};

export default AccessibilityConceptSections;


