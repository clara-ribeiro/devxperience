import { DevModeMetadata } from "@/context/dev-mode-context";

export const UX_READINGS_TITLES_SUMMARIES_METADATA: DevModeMetadata = {
  target: "Estrutura de Títulos e Resumos",
  title: "Carga Cognitiva e Escaneabilidade",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Usuários escaneiam em vez de ler palavra por palavra (padrão em F). O uso de títulos claros e textos curtos reduz a carga cognitiva, permitindo que o cérebro processe rapidamente a estrutura da página e decida, com pouco esforço, qual conteúdo vale o clique.",
  academicRef: "Krug, S. (2014). Don't Make Me Think.",
  wcag: "WCAG 2.4.6 (Headings and Labels)",
};

export const UX_READINGS_SECTION_TITLE_METADATA: DevModeMetadata = {
  target: "Seção 'Quer se aprofundar?'",
  title: "Curadoria como Serviço",
  nielsenHeuristic: "Eficiência de Uso",
  explanation:
    "Em um mar de informações, a 'Curadoria' é um serviço de valor. Ao selecionar apenas 3 livros essenciais (em vez de listar 50), aplicamos a Lei de Hick, facilitando a decisão do usuário sobre qual deve ser seu próximo passo de aprendizado.",
  academicRef: "Schwartz, B. (2004). The Paradox of Choice.",
  wcag: null,
};


