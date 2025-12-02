import { DevModeMetadata } from "@/context/dev-mode-context";
import { UX_HERO_SECTION_METADATA } from "@/components/organisms/UXHero/metadata";
import { UX_THEORY_BLOCKS_METADATA } from "@/components/organisms/UXConceptSections/metadata";
import {
  UX_EXAMPLES_CARDS_METADATA,
  UX_EXAMPLES_CONTAINER_METADATA,
} from "@/components/organisms/UXExamplesSection/metadata";
import { UX_BEST_PRACTICES_CHECKLIST_METADATA } from "@/components/organisms/UXBestPracticesSection/metadata";
import { UX_READINGS_SECTION_TITLE_METADATA } from "@/components/organisms/UXReadingsSection/metadata";

/**
 * Metadados agregados do Dev Mode específicos da página de UX.
 * Mantém alinhamento com a estrutura uxPageDevData usada na documentação.
 */
export const uxPageDevData: DevModeMetadata[] = [
  // --- 1. HERO & FRAMING ---
  UX_HERO_SECTION_METADATA,

  // --- 2. TEORIA (TEXTOS ACADÊMICOS) ---
  UX_THEORY_BLOCKS_METADATA,

  // --- 3. A SEÇÃO DE EXEMPLOS (O PULO DO GATO) ---
  UX_EXAMPLES_CONTAINER_METADATA,
  UX_EXAMPLES_CARDS_METADATA,

  // --- 4. CHECKLIST (BOAS PRÁTICAS) ---
  UX_BEST_PRACTICES_CHECKLIST_METADATA,

  // --- 5. RODAPÉ DE LIVROS ---
  UX_READINGS_SECTION_TITLE_METADATA,
];


