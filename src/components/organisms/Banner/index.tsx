"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { Section, ContentWrapper, BannerTitle, BannerDescription, BannerButton, FoxIllustration } from "./styles";
import Button from "@/components/atoms/Button";
import ExcitedFoxIcon from "@/components/icons/excitedFox.svg";
import {
  FOX_ILLUSTRATION_METADATA,
  CONTENT_WRAPPER_METADATA,
  BANNER_TITLE_METADATA,
  BANNER_BUTTON_METADATA,
} from "./metadata";

export type BannerProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
  className,
  style,
}) => {
  const router = useRouter();
  const { isDevMode } = useDevMode();

  const foxInteraction = useDevModeInteraction(FOX_ILLUSTRATION_METADATA);
  const contentWrapperInteraction = useDevModeInteraction(CONTENT_WRAPPER_METADATA);
  const titleInteraction = useDevModeInteraction(BANNER_TITLE_METADATA);
  const buttonInteraction = useDevModeInteraction(BANNER_BUTTON_METADATA);

  const buttonColors = React.useMemo(
    () => ({
      background: "#F1DFD2",
      text: "#261D1D",
      border: "#F1DFD2",
    }),
    [],
  );

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDevMode && buttonInteraction.handleDevInteraction(event)) {
      return;
    }
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      router.push(buttonHref);
    }
  };

  const handleContentWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDevMode) return;
    
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget;
    
    // Se clicou diretamente no ContentWrapper, abre o modal
    if (target === currentTarget) {
      contentWrapperInteraction.handleDevInteraction(event);
      return;
    }
    
    // Encontra todos os elementos instrumentados na hierarquia
    let element: HTMLElement | null = target;
    let foundInstrumentedChild = false;
    
    // Percorre a hierarquia até o ContentWrapper
    while (element && element !== currentTarget) {
      if (element.hasAttribute('data-devmode-target') && element !== currentTarget) {
        foundInstrumentedChild = true;
        break;
      }
      element = element.parentElement;
    }
    
    // Se não encontrou nenhum elemento instrumentado filho, é uma área vazia
    if (!foundInstrumentedChild) {
      contentWrapperInteraction.handleDevInteraction(event);
    }
  };

  return (
    <Section className={className} style={style} aria-labelledby="banner-heading">
      <ContentWrapper
        data-devmode-highlight={isDevMode ? "true" : undefined}
        data-devmode-target={CONTENT_WRAPPER_METADATA.target}
        onClick={handleContentWrapperClick}
        onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
          if (isDevMode) {
            // Mostra tooltip apenas quando hover diretamente no ContentWrapper (áreas vazias)
            if (event.target === event.currentTarget) {
              contentWrapperInteraction.showMetadataTooltip(event.currentTarget);
            }
          }
        }}
        onMouseLeave={() => {
          if (isDevMode) {
            contentWrapperInteraction.hideMetadataTooltip();
          }
        }}
        style={{ cursor: isDevMode ? contentWrapperInteraction.getCursor() : undefined }}
      >
        <div>
          <BannerTitle
            id="banner-heading"
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={BANNER_TITLE_METADATA.target}
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
                titleInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: isDevMode ? titleInteraction.getCursor() : undefined }}
          >
            {title}
          </BannerTitle>
          <BannerDescription>{description}</BannerDescription>
          <BannerButton>
            <Button
              type="button"
              label={buttonLabel}
              variant="solid"
              colors={buttonColors}
              onClick={handleButtonClick}
              data-devmode-highlight={isDevMode ? "true" : undefined}
              data-devmode-target={BANNER_BUTTON_METADATA.target}
              onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (isDevMode) {
                  buttonInteraction.showMetadataTooltip(event.currentTarget);
                }
              }}
              onMouseLeave={() => {
                if (isDevMode) {
                  buttonInteraction.hideMetadataTooltip();
                }
              }}
              onFocusCapture={(event: React.FocusEvent<HTMLButtonElement>) => {
                if (isDevMode) {
                  buttonInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
                }
              }}
              onBlurCapture={() => {
                if (isDevMode) {
                  buttonInteraction.hideMetadataTooltip();
                }
              }}
              style={{ cursor: isDevMode ? buttonInteraction.getCursor() : undefined }}
            />
          </BannerButton>
        </div>
        <FoxIllustration
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={FOX_ILLUSTRATION_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              foxInteraction.showMetadataTooltip(event.currentTarget);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              foxInteraction.hideMetadataTooltip();
            }
          }}
          onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) => {
            if (isDevMode) {
              foxInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onBlurCapture={() => {
            if (isDevMode) {
              foxInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            if (isDevMode) {
              foxInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: isDevMode ? foxInteraction.getCursor() : undefined }}
        >
          <Image
            src={ExcitedFoxIcon}
            alt="Ilustração de uma raposa com óculos"
            width={354}
            height={434}
            priority
          />
        </FoxIllustration>
      </ContentWrapper>
    </Section>
  );
};

export default Banner;

