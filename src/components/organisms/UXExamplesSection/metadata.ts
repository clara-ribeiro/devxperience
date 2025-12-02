import { DevModeMetadata } from "@/context/dev-mode-context";

export const UX_EXAMPLES_CONTAINER_METADATA: DevModeMetadata = {
  target: "Container de Exemplos Práticos",
  title: "Aprendizagem Contextual e Concretização",
  nielsenHeuristic: "Reconhecimento em vez de memorização",
  explanation:
    "Conceitos de UX podem ser muito abstratos. A estratégia de mostrar prints da própria interface que o usuário está usando aplica o conceito de 'Aprendizagem Contextual'. Transformamos teoria abstrata em exemplos concretos, facilitando a assimilação mental do conteúdo.",
  academicRef: "Kolb, D. A. (1984). Experiential Learning.",
  wcag: null,
};

export const UX_EXAMPLES_CARDS_METADATA: DevModeMetadata = {
  target: "Cards dentro dos Exemplos (Navbar/Botões)",
  title: "Modelagem de Comportamento (Role Modeling)",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "Ao exibir 'o jeito certo' de fazer (com prints de Navbar e Botões), fornecemos um modelo visual claro. Isso reduz a carga cognitiva de quem está aprendendo, pois o cérebro não precisa imaginar a solução; ele apenas precisa reconhecer e replicar o padrão apresentado.",
  academicRef: "Bandura, A. (1977). Social Learning Theory.",
  wcag: null,
};

