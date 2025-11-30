import { DevModeMetadata } from "@/context/dev-mode-context";

export const READINGS_HERO_TITLE_METADATA: DevModeMetadata = {
  target: "Título ('Leituras recomendadas')",
  title: "Clareza de Tópico e SEO",
  nielsenHeuristic: "Match entre Sistema e Mundo Real",
  explanation:
    "O título usa linguagem direta e sem jargões. Em termos de estrutura (HTML Semântico), ele deve ser o único <h1> da página, sinalizando para motores de busca e leitores de tela qual é o assunto principal deste documento.",
  academicRef: "W3C Web Content Accessibility Guidelines (Headings).",
  wcag: "WCAG 2.4.6 (Headings and Labels)",
};

export const READINGS_HERO_DESCRIPTION_METADATA: DevModeMetadata = {
  target: "Subtítulo (Texto de Apoio)",
  title: "Autoridade e Confiança",
  nielsenHeuristic: "Credibilidade",
  explanation:
    "Ao explicar que é uma 'curadoria feita para criar experiências humanas', o texto estabelece o critério de seleção. Isso aumenta a confiança do usuário, pois mostra que a lista não é aleatória, mas fruto de pesquisa intencional.",
  academicRef: "Fogg, B.J. (2003). Persuasive Technology (Credibility).",
  wcag: null,
};
