"use client";

import React from "react";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { TopicReferencesSection, TopicReferenceItem } from "@/components/layout/topic-page/TopicReferencesSection";

const usabilityReferences: TopicReferenceItem[] = [
  {
    id: 1,
    text: "ABNT. NBR ISO/IEC 9241-11: Requisitos ergonômicos para trabalho com escritórios com computadores. 2018.",
  },
  {
    id: 2,
    text: "ABNT. NBR ISO/IEC 9126-1: Engenharia de software - Qualidade de produto. 2001.",
  },
];

const UsabilityReferencesSection: React.FC = () => {
  return (
    <TopicReferencesSection
      id="usab-references"
      headingId="usab-references-heading"
      title="Referências"
      referenceIdPrefix="usab-ref"
      references={usabilityReferences}
      sectionMetadata={SECTION_CONTAINER_METADATA}
      scrollStorageKey="usab_last_ref_scroll"
    />
  );
};

export default UsabilityReferencesSection;


