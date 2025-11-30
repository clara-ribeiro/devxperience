"use client";

import React from "react";
import { MousePointerClick, Lightbulb, BookOpen } from "lucide-react";
import { Section, ContentWrapper, LeftContent, TitleWrapper } from "./styles";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { DesktopNote } from "@/components/atoms/DesktopNote";
import { BulletPointsList } from "@/components/molecules/BulletPointsList";
import { VideoDemo } from "@/components/molecules/VideoDemo";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useTheme } from "@/context/theme-context";
import {
  VIDEO_DEMO_METADATA,
  BULLET_POINTS_LIST_METADATA,
  SECTION_TITLE_METADATA,
  DESKTOP_NOTE_METADATA,
} from "./metadata";

export type BulletPointsWithVideoProps = {
  className?: string;
  style?: React.CSSProperties;
};

const BulletPointsWithVideo: React.FC<BulletPointsWithVideoProps> = ({ className, style }) => {
  const { isDevMode } = useDevMode();
  const { isDark } = useTheme();
  
  // Interações do Dev Mode
  const videoInteraction = useDevModeInteraction(VIDEO_DEMO_METADATA);
  const bulletPointsListInteraction = useDevModeInteraction(BULLET_POINTS_LIST_METADATA);
  const sectionTitleInteraction = useDevModeInteraction(SECTION_TITLE_METADATA);
  const desktopNoteInteraction = useDevModeInteraction(DESKTOP_NOTE_METADATA);

  const iconColor = isDark ? "#F1DFD2" : "#542918";

  const bulletPoints = [
    {
      icon: MousePointerClick,
      text: "Interaja para descobrir: Passe o mouse sobre os componentes para revelar as explicações.",
    },
    {
      icon: Lightbulb,
      text: "Entenda as decisões: Veja os princípios de UX, usabilidade e acessibilidade aplicados no código real.",
    },
    {
      icon: BookOpen,
      text: "Aprofunde-se: Acesse links diretos para a teoria dos elementos que te interessarem.",
    },
  ];

  return (
    <Section
      className={className}
      aria-labelledby="dev-mode-section-heading"
      style={style}
    >
      <ContentWrapper>
        <LeftContent>
          <TitleWrapper
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={SECTION_TITLE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                sectionTitleInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                sectionTitleInteraction.hideMetadataTooltip();
              }
            }}
            onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) => {
              if (isDevMode) {
                sectionTitleInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onBlurCapture={() => {
              if (isDevMode) {
                sectionTitleInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                sectionTitleInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: sectionTitleInteraction.getCursor() }}
          >
            <SectionTitle id="dev-mode-section-heading">
              Modo Dev: aprenda com a própria interface
            </SectionTitle>
          </TitleWrapper>

          <BulletPointsList
            items={bulletPoints}
            iconColor={iconColor}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={BULLET_POINTS_LIST_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLUListElement>) => {
              if (isDevMode) {
                bulletPointsListInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                bulletPointsListInteraction.hideMetadataTooltip();
              }
            }}
            onFocusCapture={(event: React.FocusEvent<HTMLUListElement>) => {
              if (isDevMode) {
                bulletPointsListInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onBlurCapture={() => {
              if (isDevMode) {
                bulletPointsListInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLUListElement>) => {
              if (isDevMode) {
                bulletPointsListInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: bulletPointsListInteraction.getCursor() }}
          />
        </LeftContent>

        <VideoDemo
          videoSrc="/shortTutorial.webm"
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={VIDEO_DEMO_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              videoInteraction.showMetadataTooltip(event.currentTarget);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              videoInteraction.hideMetadataTooltip();
            }
          }}
          onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) => {
            if (isDevMode) {
              videoInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onBlurCapture={() => {
            if (isDevMode) {
              videoInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              videoInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: videoInteraction.getCursor() }}
        >
          <DesktopNote
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={DESKTOP_NOTE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                desktopNoteInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                desktopNoteInteraction.hideMetadataTooltip();
              }
            }}
            onFocusCapture={(event: React.FocusEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                desktopNoteInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onBlurCapture={() => {
              if (isDevMode) {
                desktopNoteInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (isDevMode) {
                desktopNoteInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: desktopNoteInteraction.getCursor() }}
          >
            * Disponível apenas em Desktop
          </DesktopNote>
        </VideoDemo>
      </ContentWrapper>
    </Section>
  );
};

export default BulletPointsWithVideo;
