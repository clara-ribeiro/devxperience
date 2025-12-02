"use client";

import React from "react";
import { TopicChecklistSection } from "@/components/layout/topic-page/TopicChecklistSection";
import { A11Y_CHECKLIST_METADATA } from "./metadata";

const accessibilityChecklistItems: string[] = [
  "As imagens possuem texto alternativo (alt)?",
  "O site é navegável apenas pelo teclado (Tab)?",
  "O contraste de cores é de pelo menos 4.5:1?",
  "Os formulários possuem etiquetas (labels) associadas?",
  "A hierarquia de títulos (H1-H6) é lógica?",
  "O foco do teclado é visível em todos os elementos?",
  "Vídeos possuem legendas e transcrição?",
];

const AccessibilityChecklistSection: React.FC = () => {
  return (
    <TopicChecklistSection
      headingId="a11y-checklist-heading"
      title="Checklist de Acessibilidade"
      description="Use este checklist rápido para garantir que sua interface não cria barreiras de acesso desnecessárias."
      checklistItems={accessibilityChecklistItems}
      checklistMetadata={A11Y_CHECKLIST_METADATA}
    />
  );
};

export default AccessibilityChecklistSection;


