import { DevModeMetadata } from "@/context/dev-mode-context";

export const BACK_TO_TOP_BUTTON_METADATA: DevModeMetadata = {
  target: "Botão Flutuante (Voltar ao Topo)",
  title: "Aceleradores e Custo de Interação",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Em páginas longas, o esforço físico para retornar ao menu (scroll manual) é alto. Este botão atua como um 'Acelerador' (atalho), reduzindo o Custo de Interação drasticamente. Ele só aparece quando necessário para não poluir a interface inicial.",
  academicRef: "Nielsen, J. (1999). Designing Web Usability: The Practice of Simplicity.",
  wcag: "WCAG 2.1.1 (Keyboard) - O botão deve ser alcançável via TAB.",
};
