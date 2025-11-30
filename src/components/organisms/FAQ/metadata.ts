import { DevModeMetadata } from "@/context/dev-mode-context";

export const ACCORDION_PATTERN_METADATA: DevModeMetadata = {
  target: "O Padrão Accordion (Lista Expansível)",
  title: "Divulgação Progressiva (Progressive Disclosure)",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Mostrar todo o texto de uma vez sobrecarregaria o usuário (Information Overload). A técnica de Divulgação Progressiva apresenta apenas os tópicos principais (perguntas) e deixa o usuário decidir quando quer ver os detalhes (respostas), mantendo a interface limpa.",
  academicRef: "Nielsen Norman Group. (2006). Progressive Disclosure.",
  wcag: null,
};

export const ICON_FEEDBACK_METADATA: DevModeMetadata = {
  target: "Ícone de Seta (Chevron Up/Down)",
  title: "Feedback Visual de Estado",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "A rotação da seta não é apenas estética. Ela fornece feedback imediato sobre o estado do componente (aberto ou fechado) e atua como um significador de que aquela área é interativa e reversível.",
  academicRef: "Norman, D. (2013). The Design of Everyday Things (Feedback).",
  wcag: "WCAG 4.1.2 (Name, Role, Value - State Management)",
};

export const CLICKABLE_AREA_METADATA: DevModeMetadata = {
  target: "Área de Clique (Barra inteira)",
  title: "Lei de Fitts e Facilidade de Uso",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Embora a seta indique a ação, permitir o clique em toda a barra do título (e não apenas no ícone) aumenta drasticamente a área de contato (Target Size), reduzindo o esforço motor necessário para expandir a resposta.",
  academicRef: "Fitts, P. M. (1954). The information capacity of the human motor system.",
  wcag: "WCAG 2.5.5 (Target Size)",
};

