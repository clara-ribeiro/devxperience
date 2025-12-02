"use client";

import React from "react";
import { TopicPageLayout } from "@/components/layout/topic-page/TopicPageLayout";
import UsabilityHero from "@/components/organisms/UsabilityHero";
import UsabilityConceptSections from "@/components/organisms/UsabilityConceptSections";
import UsabilityExamplesSection from "@/components/organisms/UsabilityExamplesSection";
import UsabilityChecklistSection from "@/components/organisms/UsabilityChecklistSection";
import UsabilityReadingsSection from "@/components/organisms/UsabilityReadingsSection";
import UsabilityReferencesSection from "@/components/organisms/UsabilityReferencesSection";

export type UsabilityTemplateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const UsabilityTemplate: React.FC<UsabilityTemplateProps> = ({ className, style }) => {
  return (
    <TopicPageLayout className={className} style={style}>
      <UsabilityHero />
      <UsabilityConceptSections />
      <UsabilityExamplesSection />
      <UsabilityChecklistSection />
      <UsabilityReadingsSection />
      <UsabilityReferencesSection />
    </TopicPageLayout>
  );
};

export default UsabilityTemplate;


