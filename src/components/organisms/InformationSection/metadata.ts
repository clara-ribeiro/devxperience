import { DevModeMetadata } from "@/context/dev-mode-context";

export const SECTION_CONTAINER_METADATA: DevModeMetadata = {
  target: "Seção de Informação (Container)",
  title: "Layout Responsivo e Hierarquia Visual",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Esta seção utiliza um layout flexível que se adapta de coluna única (mobile) para duas colunas (desktop), mantendo a hierarquia visual clara. O espaçamento generoso e a organização do conteúdo facilitam a leitura e compreensão.",
  academicRef: "Nielsen, J. (1997). How Users Read on the Web.",
  wcag: "WCAG 1.4.10 (Reflow)",
};

export const FOX_ILLUSTRATION_METADATA: DevModeMetadata = {
  target: "Mascote sobre a Linha (Quebra de Grid)",
  title: "Profundidade Visual e Dinamismo",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Observe como a raposa não está 'presa' dentro de uma caixa; ela se sobrepõe à linha divisória. Essa técnica de 'quebrar o grid' cria uma sensação de profundidade (camadas 3D em uma tela 2D) e torna o layout visualmente mais dinâmico e menos monótono.",
  academicRef: "Lidwell, W., et al. (2010). Universal Principles of Design (Depth cues).",
  wcag: null,
};

export const SEPARATOR_LINE_METADATA: DevModeMetadata = {
  target: "Linha Divisória Horizontal",
  title: "Ritmo de Leitura e Agrupamento (Chunking)",
  nielsenHeuristic: "Princípios da Gestalt (Proximidade/Separação)",
  explanation:
    "Esta linha não é apenas decorativa. Ela funciona como uma 'pausa visual', separando a história de origem (o TCC) do manifesto da comunidade. Isso ajuda o usuário a processar a informação em blocos lógicos (Chunking) em vez de um muro de texto.",
  academicRef: "Krug, S. (2014). Don't Make Me Think (Dividing up content).",
  wcag: "WCAG 1.4.11 (Non-text Contrast - Dividers)",
};

export const FIRST_PARAGRAPH_METADATA: DevModeMetadata = {
  target: "Primeiro Parágrafo (Menção ao TCC)",
  title: "Credibilidade e Identificação",
  nielsenHeuristic: "#2: Correspondência entre o sistema e o mundo real",
  explanation:
    "Ao mencionar 'TCC em Engenharia de Software', o texto cria uma conexão imediata com o público-alvo (desenvolvedores), estabelecendo autoridade e mostrando que o conteúdo fala a mesma língua técnica deles.",
  academicRef: "Stanford Guidelines for Web Credibility (Expertise).",
  wcag: null,
};

export const BOLD_TEXT_METADATA: DevModeMetadata = {
  target: "Bloco de Texto em Negrito (Manifesto)",
  title: "Pontos de Fixação no Escaneamento",
  nielsenHeuristic: "#6: Reconhecimento em vez de memorização",
  explanation:
    "Usuários raramente leem palavra por palavra; eles escaneiam. Este bloco em negrito com uma afirmação forte age como um 'ponto de fixação', interrompendo o padrão de escaneamento em F ou Z e forçando o usuário a absorver a mensagem principal da marca.",
  academicRef: "Nielsen, J. (1997). How Users Read on the Web.",
  wcag: "WCAG 1.4.3 (Contrast)",
};

