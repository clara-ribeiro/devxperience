"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import ExcitedFoxIcon from "@/components/icons/excitedFox.svg";
import {
  Section,
  ContentWrapper,
  TextColumn,
  Title,
  Subtitle,
  ReadingsList,
  ReadingItem,
  ReadingTitle,
  ReadingAuthor,
  ButtonWrapper,
  FoxColumn,
  FoxWrapper,
  FeaturedCardWrapper,
} from "./styles";
import { ReadingCard } from "@/components/atoms/ReadingCard";
import { ReadingCardContent } from "@/components/molecules/ReadingCardContent";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  READINGS_CARD_METADATA,
  READINGS_CATEGORY_TAG_METADATA,
  READINGS_DESCRIPTION_METADATA,
  READINGS_LINK_METADATA,
} from "@/components/organisms/ReadingsGrid/metadata";
import {
  UX_READINGS_SECTION_TITLE_METADATA,
  UX_READINGS_TITLES_SUMMARIES_METADATA,
} from "./metadata";

const uxReadings = [
  {
    title: "Design Centrado no Usuário",
    author: "Travis Lowdermilk",
  },
  {
    title: "About Face",
    author: "Alan Cooper",
  },
  {
    title: "Introdução e Boas Práticas em UX Design",
    author: "Fabricio Teixeira",
  },
];

const UXReadingsSection: React.FC = () => {
  const router = useRouter();
  const { isDevMode } = useDevMode();
  const titleInteraction = useDevModeInteraction(UX_READINGS_SECTION_TITLE_METADATA);
  const cardsInteraction = useDevModeInteraction(UX_READINGS_TITLES_SUMMARIES_METADATA);

  return (
    <Section aria-labelledby="ux-readings-heading">
      <ContentWrapper>
        <TextColumn>
          <Title
            id="ux-readings-heading"
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_READINGS_SECTION_TITLE_METADATA.target}
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
            onClick={(event: React.MouseEvent<HTMLHeadingElement>) => {
              if (isDevMode) {
                titleInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: titleInteraction.getCursor() }}
          >
            Referências Fundamentais de UX
          </Title>
          <Subtitle>
            Não reinvente a roda. Aprenda com os pioneiros da usabilidade, acessibilidade e design de interação através
            desta seleção bibliográfica comentada.
          </Subtitle>

          <FeaturedCardWrapper
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={UX_READINGS_TITLES_SUMMARIES_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                cardsInteraction.showMetadataTooltip(event.currentTarget);
              }
            }}
            onMouseLeave={() => {
              if (isDevMode) {
                cardsInteraction.hideMetadataTooltip();
              }
            }}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              if (isDevMode) {
                cardsInteraction.handleDevInteraction(event);
              }
            }}
            style={{ cursor: cardsInteraction.getCursor() }}
          >
            <ReadingCard metadata={READINGS_CARD_METADATA}>
              <ReadingCardContent
                category="UX Design"
                title="Design Centrado no Usuário"
                author="Travis Lowdermilk"
                description="Escrito pela O'Reilly para desenvolvedores. Aprenda a integrar o feedback do usuário diretamente no seu ciclo de desenvolvimento, evitando retrabalho e criando features que as pessoas realmente usam."
                linkHref="https://novatec.com.br/livros/design-centrado-usuario/"
                linkLabel="Ver detalhes"
                categoryMetadata={READINGS_CATEGORY_TAG_METADATA}
                descriptionMetadata={READINGS_DESCRIPTION_METADATA}
                linkMetadata={READINGS_LINK_METADATA}
              />
            </ReadingCard>
            <ReadingCard metadata={READINGS_CARD_METADATA}>
              <ReadingCardContent
                category="UX Design"
                title="About Face"
                author="Alan Cooper"
                description="A bíblia do Design de Interação. Essencial para entender como transformar requisitos abstratos em interfaces lógicas, fluxos de navegação eficientes e comportamentos de sistema previsíveis."
                linkHref="https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576"
                linkLabel="Ver detalhes"
                categoryMetadata={READINGS_CATEGORY_TAG_METADATA}
                descriptionMetadata={READINGS_DESCRIPTION_METADATA}
                linkMetadata={READINGS_LINK_METADATA}
              />
            </ReadingCard>
            <FoxColumn aria-hidden="true">
              <FoxWrapper>
                <Image
                  src={ExcitedFoxIcon}
                  alt=""
                  width={354}
                  height={434}
                />
              </FoxWrapper>
            </FoxColumn>
          </FeaturedCardWrapper>

          <ButtonWrapper>
            <Button
              type="button"
              label="Ver todas as referências"
              variant="solid"
              colors={{ background: "#F1DFD2", text: "#261D1D", border: "#261D1D" }}
              onClick={() => router.push("/leituras?filter=ux-design")}
            />
          </ButtonWrapper>
        </TextColumn>
      </ContentWrapper>
    </Section>
  );
};

export default UXReadingsSection;


