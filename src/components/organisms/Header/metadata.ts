import { DevModeMetadata } from "@/context/dev-mode-context";

export const NAV_DEV_METADATA: DevModeMetadata = {
  target: "Links de Navegação (Menu)",
  title: "Status do Sistema e Proximidade",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "O sublinhado informa onde o usuário está. O espaçamento generoso aplica a Lei da Proximidade da Gestalt, agrupando o menu logicamente e evitando cliques acidentais.",
  academicRef: "Norman, D. A. (2013). The Design of Everyday Things.",
  wcag: null,
};

export const NAV_TEXT_METADATA: DevModeMetadata = {
  target: "Itens de Navegação (Fonte 18px)",
  title: "Legibilidade e Navegabilidade",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "O uso de fonte 18px (acima do padrão 16px) melhora significativamente a legibilidade e a velocidade de escaneamento. Além disso, cria uma área de clique maior, reduzindo o esforço motor necessário para interagir com o menu.",
  academicRef: "Bulas, M. (2019). 'The optimal font size for web readability'.",
  wcag: "WCAG 1.4.4 (Resize text) e 1.4.1 (Distinguishable Content)",
};

export const ACTION_ICONS_METADATA: DevModeMetadata = {
  target: "Ícones de Ação (Busca, Code)",
  title: "Lei de Fitts e Áreas de Toque",
  nielsenHeuristic: null,
  explanation:
    "A área clicável respeita o mínimo de 44x44px (touch target) para acessibilidade motora, mesmo que o ícone visual seja menor.",
  academicRef: "Google Material Design Guidelines (Touch targets).",
  wcag: "WCAG 2.5.5 (Target Size)",
};

export const LOGO_METADATA: DevModeMetadata = {
  target: "Logotipo (Raposa)",
  title: "Convenções de Navegação",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "Seguindo a convenção web universal (Jakob's Law), o logo sempre retorna à Home, reduzindo a carga cognitiva de procurar um botão 'Início'.",
  academicRef: "Krug, S. (2014). Don't Make Me Think.",
  wcag: null,
};

export const THEME_TOGGLE_METADATA: DevModeMetadata = {
  target: "Theme Toggle (Sol/Lua)",
  title: "Controle do Usuário e Foco",
  nielsenHeuristic: "#3: Controle e Liberdade do Usuário",
  explanation:
    "Permite acomodação visual (ex: fotofobia). O anel de foco visível ao redor do ícone é essencial para navegação via teclado.",
  academicRef: null,
  wcag: "WCAG 2.4.7 (Focus Visible)",
};

export const CONTAINER_METADATA: DevModeMetadata = {
  target: "Container Geral/Background",
  title: "Contraste e Safe Margins",
  nielsenHeuristic: "Estética e Design Minimalista",
  explanation:
    "Fundo escuro com fonte clara garante alto contraste. As margens laterais (Safe Margins) evitam que o conteúdo cole nas bordas, facilitando o escaneamento.",
  academicRef: "Mullet, K., & Sano, D. (1995). Designing Visual Interfaces.",
  wcag: "WCAG 1.4.3 (Contrast)",
};

