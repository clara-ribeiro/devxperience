"use client";

import React from "react";
import Image from "next/image";
import {
  Section,
  ContentWrapper,
  ExampleCard,
  ExampleTitle,
  ExampleDescription,
  ExampleItem,
  ExampleImageWrapper,
  ExampleSubtitle,
} from "./styles";
import ux1 from "./ux-1.webp";
import ux2 from "./ux-2.webp";
import ux3 from "./ux-3.webp";
import ux4 from "./ux-4.webp";
import { Bold } from "lucide-react";

const UXExamplesSection: React.FC = () => {
  const handleReferenceClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ux_last_ref_scroll", String(window.scrollY));
    }
  };

  return (
    <Section aria-labelledby="ux-examples-heading">
      <ContentWrapper>
        <ExampleCard>
          <ExampleTitle id="ux-examples-heading">Exemplos práticos de UX</ExampleTitle>

          <ExampleItem>
            <ExampleSubtitle>1. Arquitetura de Informação</ExampleSubtitle>
            <ExampleImageWrapper>
              <Image src={ux1} alt='Header com os links "UX", "Usabilidade" e "Acessibilidade".' />
            </ExampleImageWrapper>
            <ExampleDescription>
              A decisão de dividir o vasto conhecimento de front-end em três pilares claros
              (UX, Usabilidade e Acessibilidade) utiliza a técnica de Chunking (agrupamento). Ao fragmentar um tema
              complexo em categorias digeríveis na navegação global, facilitamos a compreensão da estrutura do site e
              ajudamos o usuário a construir um mapa mental do conteúdo disponível{" "}
              <a href="#ux-ref-5" onClick={handleReferenceClick}>
                ⁽⁵⁾
              </a>
              .
            </ExampleDescription>
          </ExampleItem>

          <ExampleItem>
            <ExampleSubtitle>2. Design Emocional</ExampleSubtitle>
            <ExampleImageWrapper>
              <Image src={ux2} alt="Ilustração da raposa na Hero Section e na página 404." />
            </ExampleImageWrapper>
            <ExampleDescription>
              O uso consistente de um mascote (a raposa) não é apenas decoração.
              Segundo Don Norman, o design atua em três níveis: visceral, comportamental e reflexivo. O mascote atua no
              nível Visceral, gerando uma resposta emocional positiva imediata que torna a marca memorável e aumenta a
              tolerância do usuário a pequenas falhas durante a navegação{" "}
              <a href="#ux-ref-1" onClick={handleReferenceClick}>
                ⁽¹⁾
              </a>
              .
            </ExampleDescription>
          </ExampleItem>

          <ExampleItem>
            <ExampleSubtitle>3. Carga Cognitiva e Escaneabilidade</ExampleSubtitle>
            <ExampleImageWrapper>
              <Image src={ux3} alt="Seção de Leituras Recomendadas com cards de conteúdo." />
            </ExampleImageWrapper>
            <ExampleDescription>
              Usuários na web não leem linearmente; eles escaneiam. Ao estruturar o
              conteúdo com títulos claros, negritos estratégicos e resumos curtos (Microcopy), reduzimos a Carga
              Cognitiva. Isso permite que o usuário processe a informação rapidamente e decida se o conteúdo é
              relevante sem esforço mental desnecessário, respeitando o padrão de leitura em &quot;F&quot;{" "}
              <a href="#ux-ref-2" onClick={handleReferenceClick}>
                ⁽²⁾
              </a>
              .
            </ExampleDescription>
          </ExampleItem>

          <ExampleItem>
            <ExampleSubtitle>4. Modelos Mentais</ExampleSubtitle>
            <ExampleImageWrapper>
              <Image src={ux4} alt="Rodapé completo com informações institucionais e redes sociais." />
            </ExampleImageWrapper>
            <ExampleDescription>
              Usuários chegam ao site com Modelos Mentais
              pré-estabelecidos por suas experiências anteriores na web. Ao colocar informações de contato, copyright e
              redes sociais no rodapé, respeitamos a convenção padrão. Isso evita a fricção cognitiva, pois o usuário
              encontra as informações institucionais exatamente onde seu cérebro já foi treinado para procurar{" "}
              <a href="#ux-ref-3" onClick={handleReferenceClick}>
                ⁽³⁾
              </a>
              .
            </ExampleDescription>
          </ExampleItem>
        </ExampleCard>
      </ContentWrapper>
    </Section>
  );
};

export default UXExamplesSection;


