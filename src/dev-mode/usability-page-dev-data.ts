import { DevModeMetadata } from "@/context/dev-mode-context";
import { USAB_HERO_SECTION_METADATA } from "@/components/organisms/UsabilityHero/metadata";
import { USAB_THEORY_BLOCKS_METADATA } from "@/components/organisms/UsabilityConceptSections/metadata";
import { USAB_EXAMPLES_CONTAINER_METADATA } from "@/components/organisms/UsabilityExamplesSection/metadata";
import { USAB_CHECKLIST_METADATA } from "@/components/organisms/UsabilityChecklistSection/metadata";
import { USAB_READINGS_SECTION_TITLE_METADATA } from "@/components/organisms/UsabilityReadingsSection/metadata";

/**
 * Metadados agregados do Dev Mode específicos da página de Usabilidade.
 * Foco: Eficiência, Eficácia, Satisfação e Métricas de Qualidade.
 */
export const usabilityPageDevData: DevModeMetadata[] = [
  // --- 1. HERO & FRAMING ---
  USAB_HERO_SECTION_METADATA,

  // --- 2. TEORIA (TEXTOS ACADÊMICOS) ---
  USAB_THEORY_BLOCKS_METADATA,

  // --- 3. SEÇÃO DE EXEMPLOS ---
  USAB_EXAMPLES_CONTAINER_METADATA,

  // --- 4. CHECKLIST ---
  USAB_CHECKLIST_METADATA,

  // --- 5. RODAPÉ DE LIVROS ---
  USAB_READINGS_SECTION_TITLE_METADATA,
];


