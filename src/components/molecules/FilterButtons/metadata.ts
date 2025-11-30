import { DevModeMetadata } from "@/context/dev-mode-context";

export const FILTER_BUTTONS_METADATA: DevModeMetadata = {
  target: "Botões de Filtro (Tags: UX, Usabilidade...)",
  title: "Lei de Hick e Redução de Complexidade",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Apresentar 30 livros de uma vez pode paralisar o usuário (Paradoxo da Escolha). Os filtros reduzem o número de opções disponíveis, diminuindo o tempo de reação e o esforço cognitivo necessário para tomar uma decisão (Lei de Hick).",
  academicRef: "Hick, W. E. (1952). On the rate of gain of information.",
  wcag: "WCAG 3.2.2 (On Input) - Filtragem sem recarregar a página de forma brusca.",
};

export const FILTER_BUTTON_ACTIVE_METADATA: DevModeMetadata = {
  target: "Estado Ativo do Filtro (Botão Preenchido)",
  title: "Feedback Visual de Seleção",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "Não basta filtrar; o usuário precisa *saber* o que está filtrado. A mudança drástica de cor (de outline para sólido) fornece feedback imediato sobre o estado atual do sistema, evitando que o usuário se perca na navegação.",
  academicRef: "Norman, D. (2013). The Design of Everyday Things (Feedback Loops).",
  wcag: "WCAG 1.4.1 (Use of Color) - Garantir contraste suficiente no estado ativo.",
};

