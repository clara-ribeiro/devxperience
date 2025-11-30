import { DevModeMetadata } from "@/context/dev-mode-context";

export const ERROR_404_HEADING_METADATA: DevModeMetadata = {
  target: "Mensagem ('Oops! Não encontramos...')",
  title: "Nielsen #9: Diagnóstico e Recuperação",
  nielsenHeuristic: "#9: Ajudar usuários a reconhecer, diagnosticar e recuperar-se de erros",
  explanation:
    "Erros técnicos (404 Not Found) assustam usuários não-técnicos. Usamos linguagem natural e amigável ('Oops') em vez de códigos de servidor para explicar o problema claramente, reduzindo a ansiedade.",
  academicRef: "Nielsen, J. (2001). Error Message Guidelines.",
  wcag: "WCAG 3.3.1 (Error Identification)",
};

export const ERROR_404_ACTIONS_METADATA: DevModeMetadata = {
  target: "Links de Navegação (Voltar | Início)",
  title: "Caminhos de Recuperação (Constructive Way Out)",
  nielsenHeuristic: "#3: Controle e Liberdade do Usuário",
  explanation:
    "Uma página de erro nunca deve ser um beco sem saída (Dead End). Oferecemos duas rotas de escape claras: corrigir o erro imediato ('Voltar') ou reiniciar a jornada ('Início'), devolvendo o controle ao usuário.",
  academicRef: "Krug, S. (2014). Don't Make Me Think (Recovery).",
  wcag: "WCAG 2.4.5 (Multiple Ways)",
};

export const ERROR_404_FOX_METADATA: DevModeMetadata = {
  target: "Mascote Triste (Raposa)",
  title: "Design Emocional e Empatia",
  nielsenHeuristic: "Design Visceral",
  explanation:
    "A frustração de um erro gera cortisol (stress). O uso de uma ilustração empática e levemente humorada ajuda a difundir essa tensão negativa, transformando uma falha do sistema em um momento de conexão humana.",
  academicRef: "Walter, A. (2011). Designing for Emotion (Forgiveness).",
  wcag: null,
};

