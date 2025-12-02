"use client";

import React from "react";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { TopicReferencesSection, TopicReferenceItem } from "@/components/layout/topic-page/TopicReferencesSection";

const accessibilityReferences: TopicReferenceItem[] = [
  {
    id: 1,
    text: "ISO 9241-11. Ergonomics of human-system interaction. International Organization for Standardization, 2018.",
  },
  {
    id: 2,
    text: "W3C. Introduction to Web Accessibility. World Wide Web Consortium, 2025.",
  },
  {
    id: 3,
    text: "W3C. Accessibility, Usability, and Inclusion. World Wide Web Consortium, 2025.",
  },
  {
    id: 4,
    text: "ABNT NBR 17225. Acessibilidade em ambientes virtuais. Associação Brasileira de Normas Técnicas, 2025.",
  },
  {
    id: 5,
    text: "BRASIL. Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI). Lei nº 13.146, 2015.",
  },
];

const AccessibilityReferencesSection: React.FC = () => {
  return (
    <TopicReferencesSection
      id="a11y-references"
      headingId="a11y-references-heading"
      title="Referências"
      referenceIdPrefix="a11y-ref"
      references={accessibilityReferences}
      sectionMetadata={SECTION_CONTAINER_METADATA}
      scrollStorageKey="a11y_last_ref_scroll"
    />
  );
};

export default AccessibilityReferencesSection;


