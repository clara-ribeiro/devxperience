"use client";

import React from "react";
import { Section, Card, Title, ReferencesList, ReferenceItem, ReferenceNumber, ReferenceText, FooterActions } from "./styles";
import { SECTION_CONTAINER_METADATA } from "@/components/organisms/InformationSection/metadata";
import { TopicReferencesSection } from "@/components/layout/topic-page/TopicReferencesSection";

const references = [
  {
    id: 1,
    text: "BARBOSA, S. D. J. et al. Interação Humano-Computador e Experiência do Usuário. Autopublicação, 2021.",
  },
  {
    id: 2,
    text: "ISO 9241-210. Ergonomics of human-system interaction -- Part 210: Human-centred design for interactive systems. International Organization for Standardization, 2019.",
  },
  {
    id: 3,
    text: "TURNER, P. A Psychology of User Experience: Involvement, Affect and Aesthetics. Springer, 2017.",
  },
  {
    id: 4,
    text: "LAW, E. L.-C. et al. Understanding, Scoping and Defining User Experience: A Survey Approach. In: Proceedings of CHI '09, 2009.",
  },
  {
    id: 5,
    text: "NIELSEN, J.; BUDIU, R. Mobile Usability. New Riders, 2012.",
  },
  {
    id: 6,
    text: "HASSENZAHL, M.; TRACTINSKY, N. User experience - a research agenda. Behaviour & Information Technology, 2006.",
  },
  {
    id: 7,
    text: "PREECE, J.; ROGERS, Y.; SHARP, H. Interaction Design: Beyond Human-Computer Interaction. John Wiley & Sons, 2015.",
  },
];

const UXReferencesSection: React.FC = () => {
  return (
    <TopicReferencesSection
      id="ux-references"
      headingId="ux-references-heading"
      title="Referências"
      referenceIdPrefix="ux-ref"
      references={references}
      sectionMetadata={SECTION_CONTAINER_METADATA}
      scrollStorageKey="ux_last_ref_scroll"
    />
  );
};

export default UXReferencesSection;


