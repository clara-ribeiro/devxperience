import { DevModeMetadata } from "@/context/dev-mode-context";

export const CARD_CONTAINER_METADATA: DevModeMetadata = {
  target: "Área Total do Card (Container)",
  title: "Lei de Fitts e Hit Area",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Transformar o card inteiro em um botão aumenta drasticamente a área de contato (Hit Area). Segundo a Lei de Fitts, quanto maior o alvo, mais rápido e fácil é o clique, reduzindo a necessidade de precisão motora fina do usuário.",
  academicRef: "Fitts, P. M. (1954). The information capacity of the human motor system.",
  wcag: "WCAG 2.5.5 (Target Size - Enhanced)",
};

export const CARD_LINK_METADATA: DevModeMetadata = {
  target: "Link de Texto com Seta (CTA)",
  title: "Significadores (Signifiers) e Redundância",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "Embora o card todo seja clicável, o card em si não tem 'cara de botão' (Affordance fraco). O link 'Guia de UX ->' atua como um 'Significador', avisando explicitamente ao usuário que aquele elemento é interativo e leva a outro lugar.",
  academicRef: "Norman, D. (2013). The Design of Everyday Things (Affordance vs Signifiers).",
  wcag: "WCAG 2.4.4 (Link Purpose)",
};

export const CARD_BORDER_METADATA: DevModeMetadata = {
  target: "Bordas e Agrupamento",
  title: "Gestalt: Princípio da Região Comum",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "A borda contínua ao redor do conteúdo cria uma 'Região Comum'. Isso diz ao cérebro instantaneamente que o Título, o Texto e o Link pertencem ao mesmo contexto, separando-os claramente do fundo e dos outros cards.",
  academicRef: "Palmer, S. E. (1992). Common region: A new principle of perceptual grouping.",
  wcag: "WCAG 1.4.11 (Non-text Contrast - Borders)",
};

export const CARD_TITLE_METADATA: DevModeMetadata = {
  target: "Títulos dos Cards (UX, Usabilidade...)",
  title: "Escaneabilidade e Microcopy",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Títulos curtos e diretos em caixa alta funcionam como 'âncoras de escaneamento'. O usuário não lê, ele scaneia. Ao bater o olho nestas palavras-chave, ele decide se o conteúdo do card é relevante sem precisar ler o parágrafo inteiro.",
  academicRef: "Nielsen, J. (1997). How Users Read on the Web.",
  wcag: "WCAG 2.4.6 (Headings and Labels)",
};

export const SECTION_TITLE_METADATA: DevModeMetadata = {
  target: "Título da Seção (H2)",
  title: "Semântica HTML e Navegação Assistiva",
  nielsenHeuristic: "Acessibilidade e Padrões W3C",
  explanation:
    "O uso correto da tag <h2> cria uma árvore de navegação lógica. Usuários de leitores de tela (screen readers) costumam pular de cabeçalho em cabeçalho para entender o conteúdo. Usar tamanho de fonte sem a tag correta quebraria essa navegação.",
  academicRef: "W3C Web Accessibility Initiative (Headings).",
  wcag: "WCAG 1.3.1 (Info and Relationships)",
};

export const SECTION_DESCRIPTION_METADATA: DevModeMetadata = {
  target: "Subtítulo (Texto de Apoio)",
  title: "Comprimento de Linha (The Measure)",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Note que o texto não vai até a borda da tela. Limitamos a largura (max-width) para manter entre 45 a 75 caracteres por linha. Linhas muito longas cansam os olhos e dificultam encontrar o início da próxima linha (tracking).",
  academicRef: "Bringhurst, R. (2004). The Elements of Typographic Style.",
  wcag: "WCAG 1.4.8 (Visual Presentation - Line Width)",
};

