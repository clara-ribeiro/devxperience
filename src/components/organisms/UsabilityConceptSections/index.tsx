"use client";

import React from "react";
import { TopicConceptSections } from "@/components/layout/topic-page/TopicConceptSections";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { UX_ISO_CARD_METADATA, UX_ROI_CARD_METADATA } from "@/components/organisms/UXConceptSections/metadata";
import { USAB_THEORY_BLOCKS_METADATA } from "./metadata";

const UsabilityConceptSections: React.FC = () => {
  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("usab_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <TopicConceptSections
      ariaLabel="Conceitos de Usabilidade"
      sectionMetadata={SECTION_CONTAINER_METADATA}
      blocksGroupMetadata={USAB_THEORY_BLOCKS_METADATA}
      cards={[
        {
          title: "O que é Usabilidade?",
          metadata: UX_ISO_CARD_METADATA,
          body: (
            <>
              <p>
                A norma NBR ISO/IEC 9241-11 define usabilidade como o grau em que um produto pode ser usado para alcançar
                objetivos com eficácia, eficiência e satisfação em um contexto específico{" "}
                <a href="#usab-ref-1" onClick={handleReferenceClick}>
                  ⁽¹⁾
                </a>
                .
              </p>
              <p>
                Não é uma característica intrínseca do produto, mas um atributo relacional. Depende da interação entre
                quem usa, a tarefa a ser feita e o ambiente. Eficácia é atingir o objetivo; Eficiência é o recurso gasto
                (tempo/esforço) para isso; e Satisfação é a ausência de desconforto{" "}
                <a href="#usab-ref-1" onClick={handleReferenceClick}>
                  ⁽¹⁾
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Qualidade de Software",
          metadata: UX_ROI_CARD_METADATA,
          body: (
            <>
              <p>
                A norma ISO/IEC 9126-1 classifica a usabilidade como uma característica vital da qualidade do software.
                Ela se subdivide em 5 pilares: Inteligibilidade (entender para que serve), Apreensibilidade (fácil de
                aprender), Operacionalidade (fácil de controlar), Atratividade (visual agradável) e Conformidade com
                normas{" "}
                <a href="#usab-ref-2" onClick={handleReferenceClick}>
                  ⁽²⁾
                </a>
                .
              </p>
              <p>
                Um software com boa usabilidade é aquele que é compreendido, aprendido e operado de forma natural pelo
                usuário{" "}
                <a href="#usab-ref-2" onClick={handleReferenceClick}>
                  ⁽²⁾
                </a>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default UsabilityConceptSections;


