"use client";

import React from "react";
import Image from "next/image";
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
} from "./styles";
import { FeaturedCardWrapper } from "./styles";
import { ReadingCard } from "@/components/atoms/ReadingCard";
import { ReadingCardContent } from "@/components/molecules/ReadingCardContent";
import { useRouter } from "next/navigation";

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

  return (
    <Section aria-labelledby="ux-readings-heading">
      <ContentWrapper>
        <TextColumn>
          <Title id="ux-readings-heading">Referências Fundamentais de UX</Title>
          <Subtitle>
            Não reinvente a roda. Aprenda com os pioneiros da usabilidade, acessibilidade e design de interação através
            desta seleção bibliográfica comentada.
          </Subtitle>

          <FeaturedCardWrapper>
            <ReadingCard>
              <ReadingCardContent
                category="UX Design"
                title="Design Centrado no Usuário"
                author="Travis Lowdermilk"
                description="Escrito pela O'Reilly para desenvolvedores. Aprenda a integrar o feedback do usuário diretamente no seu ciclo de desenvolvimento, evitando retrabalho e criando features que as pessoas realmente usam."
                linkHref="https://novatec.com.br/livros/design-centrado-usuario/"
                linkLabel="Ver detalhes"
              />
            </ReadingCard>
            <ReadingCard>
              <ReadingCardContent
                category="UX Design"
                title="About Face"
                author="Alan Cooper"
                description="A bíblia do Design de Interação. Essencial para entender como transformar requisitos abstratos em interfaces lógicas, fluxos de navegação eficientes e comportamentos de sistema previsíveis."
                linkHref="https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576"
                linkLabel="Ver detalhes"
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


