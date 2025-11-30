import { DevModeMetadata } from "@/context/dev-mode-context";

export const FOX_ILLUSTRATION_METADATA: DevModeMetadata = {
  target: "Mascote (Posição e Olhar)",
  title: "Gaze Cueing (Dica Direcional)",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "Humanos e animais tendem a olhar para onde outros estão olhando. O posicionamento da raposa não é aleatório; ela cria uma linha visual imaginária que mantém o foco do usuário dentro do card, evitando que o olhar 'vaze' para fora da tela.",
  academicRef: "Nielsen Norman Group. (2014). Gaze Cueing in Web Design.",
  wcag: null,
};

export const CONTENT_WRAPPER_METADATA: DevModeMetadata = {
  target: "Container do Card vs. Fundo",
  title: "Gestalt: Figura e Fundo",
  nielsenHeuristic: "Princípios da Gestalt",
  explanation:
    "O fundo possui uma textura de texto com baixa opacidade, enquanto o card tem cor sólida e sombra. Isso aplica o princípio Figura-Fundo, onde o cérebro separa instantaneamente o objeto de interesse (Figura) do ambiente (Fundo), focando a atenção na mensagem.",
  academicRef: "Rubin, E. (1915). Synsoplevede Figurer.",
  wcag: "WCAG 1.4.3 (Contrast - Text over images)",
};

export const BANNER_TITLE_METADATA: DevModeMetadata = {
  target: "Título ('Referências que todo Dev...')",
  title: "Prova Social e Persuasão",
  nielsenHeuristic: "Psicologia Cognitiva",
  explanation:
    "O uso da frase 'que todo Dev deveria conhecer' aciona um gatilho de pertencimento e curiosidade (e um leve FOMO - Fear Of Missing Out). Isso aumenta a taxa de conversão ao sugerir que o conteúdo é essencial para a identidade profissional do usuário.",
  academicRef: "Cialdini, R. B. (1984). Influence: The Psychology of Persuasion.",
  wcag: null,
};

export const BANNER_BUTTON_METADATA: DevModeMetadata = {
  target: "Botão com Seta ('Acessar materiais ->')",
  title: "Affordance de Movimento",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "O ícone de seta não é decorativo; ele comunica explicitamente que haverá uma mudança de contexto (navegação para outra página), diferente de uma seta para baixo (download) ou externa (nova aba). Isso gerencia a expectativa do usuário antes do clique.",
  academicRef: "Gibson, J. J. (1979). The Ecological Approach to Visual Perception.",
  wcag: "WCAG 2.4.4 (Link Purpose - In Context)",
};

