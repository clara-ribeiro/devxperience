"use client";

import React from "react";
import UXHero from "@/components/organisms/UXHero";
import UXConceptSections from "@/components/organisms/UXConceptSections";
import UXExamplesSection from "@/components/organisms/UXExamplesSection";
import UXBestPracticesSection from "@/components/organisms/UXBestPracticesSection";
import UXReadingsSection from "@/components/organisms/UXReadingsSection";
import UXReferencesSection from "@/components/organisms/UXReferencesSection";
import { styled, darkTheme } from "@/styles/stitches.config";
import backgroundPattern from "./background.webp";

export type UXTemplateProps = {
  className?: string;
  style?: React.CSSProperties;
};

const pageBackgroundUrl = `url(${backgroundPattern.src})`;

const PageWrapper = styled("div", {
  minHeight: "100vh",
  backgroundColor: "#F1DFD2",
  backgroundImage: `linear-gradient(rgba(241, 223, 210, 0.9), rgba(241, 223, 210, 0.9)), ${pageBackgroundUrl}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center top",
  color: "$hiContrast",
  [`.${darkTheme} &`]: {
    backgroundColor: "#1B1412",
    backgroundImage: `linear-gradient(rgba(27, 20, 18, 0.95), rgba(27, 20, 18, 0.95)), ${pageBackgroundUrl}`,
    color: "$loContrast",
  },
});

export const UXTemplate: React.FC<UXTemplateProps> = ({ className, style }) => {
  return (
    <PageWrapper className={className} style={style}>
      <UXHero />
      <UXConceptSections />
      <UXExamplesSection />
      <UXBestPracticesSection />
      <UXReadingsSection />
      <UXReferencesSection />
    </PageWrapper>
  );
};

export default UXTemplate;


