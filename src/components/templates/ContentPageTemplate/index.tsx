"use client";

import React from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionDescription } from "@/components/atoms/SectionDescription";
import { Container } from "@/components/layout/Container";
import { styled } from "@/styles/stitches.config";

const ContentSection = styled("section", {
  paddingTop: "3.56rem",
  paddingBottom: "3.56rem",
  "@md": {
    paddingTop: "4.44rem",
    paddingBottom: "4.44rem",
  },
});

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  "@md": {
    gap: "2.22rem",
  },
});

export type ContentPageTemplateProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ContentPageTemplate: React.FC<ContentPageTemplateProps> = ({
  title,
  description,
  children,
  className,
  style,
}) => {
  return (
    <ContentSection className={className} style={style}>
      <Container padding="section">
        <ContentWrapper>
          <SectionTitle>{title}</SectionTitle>
          {description && <SectionDescription>{description}</SectionDescription>}
          {children}
        </ContentWrapper>
      </Container>
    </ContentSection>
  );
};

export default ContentPageTemplate;

