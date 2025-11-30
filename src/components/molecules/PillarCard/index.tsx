import React from "react";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { StyledPillarCard } from "./styles";
import {
  CARD_CONTAINER_METADATA,
  CARD_LINK_METADATA,
  CARD_TITLE_METADATA,
} from "@/components/organisms/KnowledgePillars/metadata";

export type PillarCardProps = {
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  className?: string;
  style?: React.CSSProperties;
};

export const PillarCard: React.FC<PillarCardProps> = ({
  title,
  description,
  linkHref,
  linkLabel,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const containerInteraction = useDevModeInteraction(CARD_CONTAINER_METADATA);
  const linkInteraction = useDevModeInteraction(CARD_LINK_METADATA);
  const titleInteraction = useDevModeInteraction(CARD_TITLE_METADATA);

  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDevMode) return;
    
    // Se clicou no span (link), usar a interação do link
    const target = event.target as HTMLElement;
    if (target.tagName === "SPAN" || target.closest("span")) {
      // O onClick do span já vai tratar isso
      return;
    }
    
    // Se clicou no h3, usar a interação do título
    if (target.tagName === "H3" || target.closest("h3")) {
      // O onClick do h3 já vai tratar isso
      return;
    }
    
    // Caso contrário, usar a interação do container
    if (containerInteraction.handleDevInteraction(event)) {
      return;
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (isDevMode) {
      event.stopPropagation();
      linkInteraction.handleDevInteraction(event);
    }
  };

  return (
    <StyledPillarCard
      href={linkHref}
      className={className}
      style={{ ...style, cursor: containerInteraction.getCursor() }}
      aria-label={isDevMode ? undefined : `Ir para ${linkLabel}: ${title}`}
      data-devmode-highlight={isDevMode ? "true" : undefined}
      data-devmode-target={CARD_CONTAINER_METADATA.target}
      onClick={handleCardClick}
      onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isDevMode) {
          const target = event.target as HTMLElement;
          if (target.tagName === "SPAN" || target.closest("span")) {
            linkInteraction.showMetadataTooltip(event.currentTarget);
          } else {
            containerInteraction.showMetadataTooltip(event.currentTarget);
          }
        }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          containerInteraction.hideMetadataTooltip();
          linkInteraction.hideMetadataTooltip();
        }
      }}
      onFocusCapture={(event: React.FocusEvent<HTMLAnchorElement>) => {
        if (isDevMode) {
          containerInteraction.showMetadataTooltip(event.currentTarget);
        }
      }}
      onBlurCapture={() => {
        if (isDevMode) {
          containerInteraction.hideMetadataTooltip();
        }
      }}
    >
      <h3
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={CARD_TITLE_METADATA.target}
        onMouseEnter={(event: React.MouseEvent<HTMLHeadingElement>) => {
          if (isDevMode) {
            titleInteraction.showMetadataTooltip(event.currentTarget);
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            titleInteraction.hideMetadataTooltip();
          }
        }}
        onFocusCapture={(event: React.FocusEvent<HTMLHeadingElement>) => {
          if (isDevMode) {
            titleInteraction.showMetadataTooltip(event.currentTarget);
          }
        }}
        onBlurCapture={() => {
          if (isDevMode) {
            titleInteraction.hideMetadataTooltip();
          }
        }}
        onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
          if (isDevMode) {
            event.stopPropagation();
            titleInteraction.handleDevInteraction(event);
          }
        }}
        style={{ cursor: titleInteraction.getCursor() }}
      >
        {title}
      </h3>
      <p>{description}</p>
      <span
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={CARD_LINK_METADATA.target}
        onClick={handleLinkClick}
        onMouseEnter={(event: React.MouseEvent<HTMLSpanElement>) => {
          if (isDevMode) {
            linkInteraction.showMetadataTooltip(event.currentTarget);
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            linkInteraction.hideMetadataTooltip();
          }
        }}
        onFocusCapture={(event: React.FocusEvent<HTMLSpanElement>) => {
          if (isDevMode) {
            linkInteraction.showMetadataTooltip(event.currentTarget);
          }
        }}
        onBlurCapture={() => {
          if (isDevMode) {
            linkInteraction.hideMetadataTooltip();
          }
        }}
        style={{ cursor: linkInteraction.getCursor() }}
      >
        {linkLabel} →
      </span>
    </StyledPillarCard>
  );
};

export default PillarCard;

