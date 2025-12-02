"use client";

import React from "react";
import { TopicPageLayout } from "@/components/layout/topic-page/TopicPageLayout";
import AccessibilityHero from "@/components/organisms/AccessibilityHero";
import AccessibilityConceptSections from "@/components/organisms/AccessibilityConceptSections";
import AccessibilityExamplesSection from "@/components/organisms/AccessibilityExamplesSection";
import AccessibilityChecklistSection from "@/components/organisms/AccessibilityChecklistSection";
import AccessibilityReadingsSection from "@/components/organisms/AccessibilityReadingsSection";
import AccessibilityReferencesSection from "@/components/organisms/AccessibilityReferencesSection";

export type AccessibilityTemplateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const AccessibilityTemplate: React.FC<AccessibilityTemplateProps> = ({ className, style }) => {
  return (
    <TopicPageLayout className={className} style={style}>
      <AccessibilityHero />
      <AccessibilityConceptSections />
      <AccessibilityExamplesSection />
      <AccessibilityChecklistSection />
      <AccessibilityReadingsSection />
      <AccessibilityReferencesSection />
    </TopicPageLayout>
  );
};

export default AccessibilityTemplate;


