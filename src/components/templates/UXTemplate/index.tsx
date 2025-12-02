"use client";

import React from "react";
import UXHero from "@/components/organisms/UXHero";
import UXConceptSections from "@/components/organisms/UXConceptSections";
import UXExamplesSection from "@/components/organisms/UXExamplesSection";
import UXBestPracticesSection from "@/components/organisms/UXBestPracticesSection";
import UXReadingsSection from "@/components/organisms/UXReadingsSection";
import UXReferencesSection from "@/components/organisms/UXReferencesSection";
import { TopicPageLayout } from "@/components/layout/topic-page/TopicPageLayout";

export type UXTemplateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const UXTemplate: React.FC<UXTemplateProps> = ({ className, style }) => {
  return (
    <TopicPageLayout className={className} style={style}>
      <UXHero />
      <UXConceptSections />
      <UXExamplesSection />
      <UXBestPracticesSection />
      <UXReadingsSection />
      <UXReferencesSection />
    </TopicPageLayout>
  );
};

export default UXTemplate;


