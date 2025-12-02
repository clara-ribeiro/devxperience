import { DevModeMetadata } from "@/context/dev-mode-context";
import { A11Y_HERO_SECTION_METADATA } from "@/components/organisms/AccessibilityHero/metadata";
import { A11Y_THEORY_BLOCKS_METADATA } from "@/components/organisms/AccessibilityConceptSections/metadata";
import { A11Y_EXAMPLES_CONTAINER_METADATA } from "@/components/organisms/AccessibilityExamplesSection/metadata";
import { A11Y_CHECKLIST_METADATA } from "@/components/organisms/AccessibilityChecklistSection/metadata";
import { A11Y_READINGS_SECTION_TITLE_METADATA } from "@/components/organisms/AccessibilityReadingsSection/metadata";

/**
 * Metadados agregados do Dev Mode específicos da página de Acessibilidade.
 * Estrutura espelhada na página de UX, mas com conteúdo focado em Inclusão e Normas.
 */
export const accessibilityPageDevData: DevModeMetadata[] = [
  // --- 1. HERO & FRAMING ---
  A11Y_HERO_SECTION_METADATA,

  // --- 2. TEORIA (TEXTOS ACADÊMICOS) ---
  A11Y_THEORY_BLOCKS_METADATA,

  // --- 3. A SEÇÃO DE EXEMPLOS ---
  A11Y_EXAMPLES_CONTAINER_METADATA,

  // --- 4. CHECKLIST ---
  A11Y_CHECKLIST_METADATA,

  // --- 5. RODAPÉ DE LIVROS ---
  A11Y_READINGS_SECTION_TITLE_METADATA,
];

