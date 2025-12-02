"use client";

import React from "react";
import { TopicChecklistSection } from "@/components/layout/topic-page/TopicChecklistSection";
import { USAB_CHECKLIST_METADATA } from "./metadata";

const usabilityChecklistItems: string[] = [
  "O status do sistema está sempre visível?",
  "A linguagem utilizada é familiar ao usuário?",
  "O sistema previne erros antes que aconteçam?",
  "Existe uma saída de emergência para desfazer ações?",
  "A interface é consistente em todas as telas?",
  "A carga de memória do usuário foi minimizada?",
  "Existem atalhos para usuários experientes?",
];

const UsabilityChecklistSection: React.FC = () => {
  return (
    <TopicChecklistSection
      headingId="usab-checklist-heading"
      title="Checklist de Usabilidade"
      description="Use este checklist para validar se o fluxo do seu sistema é eficaz, eficiente e satisfatório para o usuário."
      checklistItems={usabilityChecklistItems}
      checklistMetadata={USAB_CHECKLIST_METADATA}
    />
  );
};

export default UsabilityChecklistSection;


