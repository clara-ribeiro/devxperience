"use client";

import React from "react";
import { styled, darkTheme } from "@/styles/stitches.config";
import backgroundPattern from "@/components/templates/UXTemplate/background.webp";

export type TopicPageLayoutProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
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

export const TopicPageLayout: React.FC<TopicPageLayoutProps> = ({ className, style, children }) => {
  return (
    <PageWrapper className={className} style={style}>
      {children}
    </PageWrapper>
  );
};

export default TopicPageLayout;


