import React from "react";
import Image from "next/image";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { styled } from "@/styles/stitches.config";
import {
  Section,
  ContentWrapper,
  ExampleCard,
  ExampleTitle,
  ExampleDescription,
  ExampleItem,
  ExampleImageWrapper,
  ExampleSubtitle,
} from "@/components/organisms/UXExamplesSection/styles";
import a11yExample1 from "./acessibilidade-1.webp";
import a11yExample2 from "./acessibilidade-2.webp";
import a11yExample3 from "./acessibilidade-3.webp";
import a11yExample5 from "./acessibilidade-5.webp";
import { UX_EXAMPLES_CARDS_METADATA } from "@/components/organisms/UXExamplesSection/metadata";
import { A11Y_EXAMPLES_CONTAINER_METADATA } from "./metadata";

const A11yImageWrapper = styled(ExampleImageWrapper, {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  "& img": {
    width: "100%",
    height: "auto",
  },
  "@lg": {
    width: "30%",
    maxWidth: "30%",
  },
});

const AccessibilityExamplesSection: React.FC = () => {
  const { isDevMode } = useDevMode();
  const containerInteraction = useDevModeInteraction(A11Y_EXAMPLES_CONTAINER_METADATA);
  const cardsInteraction = useDevModeInteraction(UX_EXAMPLES_CARDS_METADATA);

  return (
    <Section aria-labelledby="a11y-examples-heading">
      <ContentWrapper>
        <ExampleCard
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={A11Y_EXAMPLES_CONTAINER_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              containerInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
            }
          }}
          onMouseLeave={() => {
            if (isDevMode) {
              containerInteraction.hideMetadataTooltip();
            }
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (isDevMode) {
              containerInteraction.handleDevInteraction(event);
            }
          }}
          style={{ cursor: containerInteraction.getCursor() }}
        >
          <ExampleTitle id="a11y-examples-heading">Exemplos práticos de Acessibilidade</ExampleTitle>

          <ExampleItem
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_EXAMPLES_CARDS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            <ExampleSubtitle> Foco Visível (Keyboard Navigation)</ExampleSubtitle>
            <A11yImageWrapper>
              <Image src={a11yExample1} alt="Exemplo de foco visível ao navegar por teclado usando a tecla Tab." />
            </A11yImageWrapper>
            <ExampleDescription>
              Usuários que navegam por teclado dependem do anel de foco (outline) para saber onde estão. Removê-lo via
              CSS (outline: none) sem fornecer um substituto torna o site inoperável para quem não usa mouse. Neste
              projeto, mantivemos o foco nativo visível em todos os botões e links interativos.
            </ExampleDescription>
          </ExampleItem>

          <ExampleItem
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_EXAMPLES_CARDS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            <ExampleSubtitle>Semântica HTML (Heading Structure)</ExampleSubtitle>
            <A11yImageWrapper>
              <Image src={a11yExample2} alt="Estrutura de títulos da página usando tags h1, h2 e h3 corretamente." />
            </A11yImageWrapper>
            <ExampleDescription>
              Leitores de tela usam cabeçalhos (h1 a h6) para navegar. Visualmente, um texto grande e em negrito pode
              parecer um título, mas sem a tag de heading correta ele é invisível na árvore de acessibilidade. A
              estrutura semântica do HTML é a base para que pessoas cegas possam entender a hierarquia do conteúdo.
            </ExampleDescription>
          </ExampleItem>

          <ExampleItem
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_EXAMPLES_CARDS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            <ExampleSubtitle>Contraste de Cores (WCAG 1.4.3)</ExampleSubtitle>
            <A11yImageWrapper>
              <Image src={a11yExample3} alt="Comparação entre combinações de cores com contraste adequado e inadequado." />
              <br />
              <em>
                Teste de contraste de cores entre texto e fundo através da ferramenta WebAIM.
              </em>
            </A11yImageWrapper>
            <ExampleDescription>
              A paleta do site foi validada para garantir uma relação de contraste mínima de 4.5:1 entre texto e fundo.
              Isso é vital não apenas para pessoas com baixa visão, mas para qualquer usuário lendo em telas com
              reflexo, brilho alto ou baixa luminosidade. Contraste adequado reduz esforço visual e fadiga.
            </ExampleDescription>
          </ExampleItem>


          <ExampleItem
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_EXAMPLES_CARDS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            <ExampleSubtitle>Descrição de Imagens (Text Alternatives)</ExampleSubtitle>
            <A11yImageWrapper>
              <Image src={a11yExample5} alt="Interface mostrando configuração de texto alternativo para ícones e imagens." />
            </A11yImageWrapper>
            <ExampleDescription>
              Ícones isolados, como os links sociais no rodapé, utilizam aria-label para descrever seu destino. Sem
              isso, um leitor de tela anunciaria apenas &quot;link&quot; ou o nome do arquivo SVG, deixando o usuário
              cego sem contexto sobre para onde aquele clique o levará.
            </ExampleDescription>
          </ExampleItem>
        </ExampleCard>
      </ContentWrapper>
    </Section>
  );
};

export default AccessibilityExamplesSection;


