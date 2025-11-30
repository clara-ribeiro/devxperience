"use client";

import React from "react";
import Link from "next/link";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { DevModeMetadata } from "@/context/dev-mode-context";
import { CategoryTag } from "@/components/atoms/CategoryTag";
import {
  StyledCardContent,
  StyledCardTag,
  StyledCardTitle,
  StyledCardAuthor,
  StyledCardDescription,
  StyledCardLink,
  StyledCardExternalLink,
} from "./styles";

export type ReadingCardContentProps = {
  category: string;
  title: string;
  author: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  categoryMetadata?: DevModeMetadata | null;
  descriptionMetadata?: DevModeMetadata | null;
  linkMetadata?: DevModeMetadata | null;
};

export const ReadingCardContent: React.FC<ReadingCardContentProps> = ({
  category,
  title,
  author,
  description,
  linkHref,
  linkLabel = "Acessar Conteúdo",
  className,
  style,
  categoryMetadata,
  descriptionMetadata,
  linkMetadata,
}) => {
  const { isDevMode } = useDevMode();
  const descriptionInteraction = useDevModeInteraction(descriptionMetadata || null);
  const linkInteraction = useDevModeInteraction(linkMetadata || null);

  return (
    <StyledCardContent className={className} style={style}>
      <StyledCardTag>
        <CategoryTag label={category} metadata={categoryMetadata} />
      </StyledCardTag>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardAuthor>{author}</StyledCardAuthor>
      <StyledCardDescription
        data-devmode-highlight={isDevMode && descriptionMetadata ? "true" : undefined}
        data-devmode-target={descriptionMetadata?.target}
        onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) => {
          if (descriptionMetadata) descriptionInteraction.showMetadataTooltip(event.currentTarget);
        }}
        onMouseLeave={descriptionInteraction.hideMetadataTooltip}
        onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) => {
          if (descriptionMetadata) descriptionInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
        }}
        onBlurCapture={descriptionInteraction.hideMetadataTooltip}
        onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
          if (descriptionMetadata) descriptionInteraction.handleDevInteraction(event);
        }}
        style={{ cursor: descriptionInteraction.getCursor() }}
      >
        {description}
      </StyledCardDescription>
      {linkHref &&
        (linkHref.startsWith("http") ? (
          <StyledCardExternalLink
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            data-devmode-highlight={isDevMode && linkMetadata ? "true" : undefined}
            data-devmode-target={linkMetadata?.target}
            onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (linkMetadata) linkInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onMouseLeave={linkInteraction.hideMetadataTooltip}
            onFocus={(event: React.FocusEvent<HTMLAnchorElement>) => {
              if (linkMetadata) linkInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onBlur={linkInteraction.hideMetadataTooltip}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (isDevMode && linkMetadata) {
                linkInteraction.handleDevInteraction(event);
              } else if (!isDevMode) {
                // Navegação normal quando Dev Mode está desativado
              }
            }}
            style={{ cursor: linkInteraction.getCursor() }}
          >
            {linkLabel} →
          </StyledCardExternalLink>
        ) : (
          <StyledCardLink
            href={linkHref}
            as={Link}
            data-devmode-highlight={isDevMode && linkMetadata ? "true" : undefined}
            data-devmode-target={linkMetadata?.target}
            onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (linkMetadata) linkInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onMouseLeave={linkInteraction.hideMetadataTooltip}
            onFocus={(event: React.FocusEvent<HTMLAnchorElement>) => {
              if (linkMetadata) linkInteraction.showMetadataTooltip(event.currentTarget);
            }}
            onBlur={linkInteraction.hideMetadataTooltip}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (isDevMode && linkMetadata) {
                linkInteraction.handleDevInteraction(event);
              } else if (!isDevMode) {
                // Navegação normal quando Dev Mode está desativado
              }
            }}
            style={{ cursor: linkInteraction.getCursor() }}
          >
            {linkLabel} →
          </StyledCardLink>
        ))}
    </StyledCardContent>
  );
};

export default ReadingCardContent;

