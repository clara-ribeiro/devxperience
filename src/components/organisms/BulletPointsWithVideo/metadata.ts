import { DevModeMetadata } from "@/context/dev-mode-context";

export const VIDEO_DEMO_METADATA: DevModeMetadata = {
  target: "Área do GIF (Demonstração Visual)",
  title: "Princípio 'Show, Don't Tell' e Carga Cognitiva",
  nielsenHeuristic: "#6: Reconhecimento em vez de memorização",
  explanation:
    "Em vez de forçar o usuário a ler um manual e *imaginar* como o recurso funciona (alta carga cognitiva), o GIF mostra a interação acontecendo. O usuário reconhece o padrão imediatamente sem esforço mental.",
  academicRef: "Krug, S. (2014). Don't Make Me Think (The crucial role of obviousness).",
  wcag: "WCAG 1.4.5 (Images of Text) - Preferir demonstrações visuais a blocos de texto.",
};

export const BULLET_POINTS_LIST_METADATA: DevModeMetadata = {
  target: "Lista de Passos (Interaja, Entenda, Aprofunde-se)",
  title: "Scaffolding e Divulgação Progressiva",
  nielsenHeuristic: "#10: Ajuda e documentação",
  explanation:
    "A lista usa a técnica de 'Scaffolding' (andaimes), quebrando um conceito novo em três etapas acionáveis iniciadas por verbos no imperativo. Isso guia o usuário do básico (interagir) ao avançado (aprofundar) sem sobrecarregá-lo.",
  academicRef: "Nielsen Norman Group. (2020). Progressive Disclosure.",
  wcag: null,
};

export const SECTION_TITLE_METADATA: DevModeMetadata = {
  target: "Título ('Aprenda com a própria interface')",
  title: "Proposta de Valor Clara (Value Prop)",
  nielsenHeuristic: "#2: Correspondência entre o sistema e o mundo real",
  explanation:
    "Um bom UX Writing foca no *benefício* para o usuário, não na *feature* técnica. O título não diz apenas 'Modo de Inspeção Ativo'; ele promete um resultado claro: o aprendizado prático.",
  academicRef: "Redish, J. (2012). Letting Go of the Words (Writing web content that works).",
  wcag: null,
};

export const DESKTOP_NOTE_METADATA: DevModeMetadata = {
  target: "Rodapé ('Disponível apenas em Desktop')",
  title: "Gerenciamento de Expectativas e Restrições",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "Ser honesto sobre as limitações técnicas (como a falta de 'hover' em mobile) previne a frustração do usuário. É um padrão de 'Honest UI' que constrói confiança ao comunicar restrições claramente antes que o erro ocorra.",
  academicRef: "Norman, D. (2013). The Design of Everyday Things (Constraints).",
  wcag: null,
};

