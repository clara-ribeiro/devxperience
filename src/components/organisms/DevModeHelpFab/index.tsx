"use client";

import React from "react";
import { createPortal } from "react-dom";
import { HelpCircle, X } from "lucide-react";
import {
  FABContainer,
  FABIcon,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  IntroTextContainer,
  IntroText,
  VideoContainerWrapper,
  VideoContainer,
  VideoPlayer,
  ModalFooter,
} from "./styles";
import Button from "@/components/atoms/Button";
import { useTheme } from "@/context/theme-context";

export type DevModeHelpFabProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const DevModeHelpFab: React.FC<DevModeHelpFabProps> = ({
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentView, setCurrentView] = React.useState<"intro" | "video">("intro");
  const { isDark } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setCurrentView("intro");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentView("intro");
    }, 250);
  };

  const handleShowVideo = () => {
    setCurrentView("video");
  };

  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const primaryButtonColors = React.useMemo(
    () =>
      isDark
        ? { background: "#F1DFD2", text: "#261D1D", border: "#F1DFD2" }
        : { background: "#261D1D", text: "#F1DFD2", border: "#261D1D" },
    [isDark],
  );

  const secondaryButtonColors = React.useMemo(
    () =>
      isDark
        ? { text: "#F1DFD2", border: "#F1DFD2" }
        : { text: "#261D1D", border: "#261D1D" },
    [isDark],
  );

  const renderModal = () => {
    if (!isMounted || !isOpen || typeof document === "undefined") {
      return null;
    }

    return createPortal(
      <ModalOverlay
        role="presentation"
        onClick={handleClose}
        aria-label="Fechar modal"
      >
        <ModalContent
          role="dialog"
          aria-modal="true"
          aria-labelledby="devmode-help-title"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            event.stopPropagation()
          }
        >
          <ModalHeader>
            <ModalTitle id="devmode-help-title">Entenda o Modo Dev</ModalTitle>
            <CloseButton
              type="button"
              onClick={handleClose}
              aria-label="Fechar modal"
            >
              <X size={20} />
            </CloseButton>
          </ModalHeader>

          <ModalBody>
            {currentView === "intro" ? (
              <IntroTextContainer>
                <IntroText>
                  O <strong>Modo Dev</strong> transforma esta interface em um laboratório de estudo vivo. Ao ativá-lo, o site deixa de ser apenas uma página informativa e torna-se uma ferramenta de análise, permitindo que você enxergue a estrutura lógica por trás de cada pixel.
                </IntroText>
                <IntroText>
                  Navegue normalmente e interaja com os elementos. Botões, menus e layouts revelarão as decisões de engenharia que os sustentam — desde as <strong>Heurísticas de Nielsen</strong> e Leis da Gestalt até as regras rígidas de <strong>Acessibilidade (WCAG)</strong>.
                </IntroText>
                <IntroText>
                  Nosso objetivo é diminuir a distância entre o código e o design. Queremos que você não apenas veja <em>como</em> o componente foi feito, mas entenda o <em>porquê</em>, capacitando você a criar interfaces mais humanas em seus projetos.
                </IntroText>
              </IntroTextContainer>
            ) : (
              <VideoContainerWrapper>
                <VideoContainer>
                  <VideoPlayer
                    src="/Tutorial.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label="Demonstração do Modo Dev em ação"
                  >
                    <source src="/Tutorial.webm" type="video/webm" />
                    Seu navegador não suporta o elemento de vídeo.
                  </VideoPlayer>
                </VideoContainer>
              </VideoContainerWrapper>
            )}
          </ModalBody>

          {currentView === "intro" && (
            <ModalFooter>
              <Button
                variant="outline"
                colors={secondaryButtonColors}
                onClick={handleClose}
              >
                Fechar
              </Button>
              <Button
                variant="solid"
                colors={primaryButtonColors}
                onClick={handleShowVideo}
              >
                Ver demonstração em vídeo ▶
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>,
      document.body,
    );
  };

  return (
    <>
      <FABContainer
        type="button"
        onClick={handleOpen}
        aria-label="O que é isso?"
        title="O que é isso?"
        className={className}
        style={style}
      >
        <FABIcon>
          <HelpCircle size={28} />
        </FABIcon>
      </FABContainer>
      {renderModal()}
    </>
  );
};

export default DevModeHelpFab;
