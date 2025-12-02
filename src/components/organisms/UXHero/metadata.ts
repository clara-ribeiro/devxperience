import { DevModeMetadata } from "@/context/dev-mode-context";

export const UX_HERO_SECTION_METADATA: DevModeMetadata = {
  target: "Título Hero ('UX na prática')",
  title: "Framing e Expectativa",
  nielsenHeuristic: "Correspondência com o mundo real",
  explanation:
    "O título e o subtítulo funcionam como um 'enquadramento' (Framing). Eles sinalizam imediatamente que esta página não é um artigo teórico chato, mas um guia prático para desenvolvedores. Isso ajusta a expectativa do usuário e aumenta a probabilidade de engajamento.",
  academicRef: "Tversky, A., & Kahneman, D. (1981). The Framing of Decisions.",
  wcag: null,
};

export const UX_HERO_FOX_METADATA: DevModeMetadata = {
  target: "Mascote (Raposa na Hero)",
  title: "Design Emocional (Nível Visceral)",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "O mascote atua no nível Visceral de Don Norman: gera uma resposta emocional positiva imediata, criando 'personalidade' para o produto. Isso aumenta a tolerância do usuário a pequenas falhas e melhora a memorização da marca em comparação com interfaces neutras ou excessivamente corporativas.",
  academicRef: "Norman, D. A. (2004). Emotional Design.",
  wcag: null,
};


