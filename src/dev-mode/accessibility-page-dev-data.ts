import { DevModeMetadata } from "@/context/dev-mode-context";
import { A11Y_HERO_SECTION_METADATA } from "@/components/organisms/AccessibilityHero/metadata";
import { A11Y_THEORY_BLOCKS_METADATA } from "@/components/organisms/AccessibilityConceptSections/metadata";
import { A11Y_EXAMPLES_CONTAINER_METADATA } from "@/components/organisms/AccessibilityExamplesSection/metadata";
import { A11Y_CHECKLIST_METADATA } from "@/components/organisms/AccessibilityChecklistSection/metadata";
import { A11Y_READINGS_SECTION_TITLE_METADATA } from "@/components/organisms/AccessibilityReadingsSection/metadata";

export const accessibilityPageDevData: DevModeMetadata[] = [
  A11Y_HERO_SECTION_METADATA,
  A11Y_THEORY_BLOCKS_METADATA,
  A11Y_EXAMPLES_CONTAINER_METADATA,
  A11Y_CHECKLIST_METADATA,
  A11Y_READINGS_SECTION_TITLE_METADATA,
];
