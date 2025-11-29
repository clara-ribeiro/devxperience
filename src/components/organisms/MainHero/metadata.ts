import { DevModeMetadata } from "@/context/dev-mode-context";

export const HERO_FOX_METADATA: DevModeMetadata = {
  target: "Mascote (A Raposa)",
  title: "Storytelling e Design Emocional",
  nielsenHeuristic: "#2: Correspondência entre o sistema e o mundo real",
  explanation:
    "Mascotes humanizam a interface e criam uma conexão emocional (Design Visceral). A raposa, associada à astúcia e adaptabilidade, reforça a identidade da marca e torna o site memorável, diferenciando-o de designs corporativos frios.",
  academicRef: "Walter, A. (2011). Designing for Emotion.",
  wcag: null,
};

export const HERO_HEADING_METADATA: DevModeMetadata = {
  target: "Título (H1 - Tipografia Mista)",
  title: "Hierarquia Tipográfica e Contraste",
  nielsenHeuristic: "Estética e Design Minimalista",
  explanation:
    "O uso de uma fonte Serifada (DEV) contraposta a uma Sans-Serif (XPERIENCE) cria um 'ritmo visual'. O tamanho grande estabelece o H1 como o ponto de entrada da leitura, essencial para escaneabilidade imediata.",
  academicRef: "Bringhurst, R. (2004). The Elements of Typographic Style.",
  wcag: "WCAG 1.4.3 (Contrast - Enhanced)",
};

export const HERO_DESCRIPTION_METADATA: DevModeMetadata = {
  target: "Subtítulo (Descrição)",
  title: "Proposta de Valor e Clareza",
  nielsenHeuristic: "#6: Reconhecimento em vez de memorização",
  explanation:
    "Este texto passa pelo 'Teste dos 5 Segundos'. Ele explica o propósito do site sem jargões complexos, reduzindo a carga cognitiva do usuário que acaba de aterrissar na página.",
  academicRef: "Krug, S. (2000). Don't Make Me Think (Clareza de Propósito).",
  wcag: "WCAG 1.4.4 (Resize Text)",
};

export const HERO_PRIMARY_BUTTON_METADATA: DevModeMetadata = {
  target: "Botão 'Modo Dev' (Primário)",
  title: "Affordance e Saída de Emergência (ESC)",
  nielsenHeuristic: "#3: Controle e Liberdade do Usuário",
  explanation:
    "Este é o CTA (Call to Action) principal, destacado por preenchimento sólido para atrair o clique. DICA PRO: Agora que você ativou este modo, lembre-se que a tecla 'ESC' é o padrão universal para sair/fechar estados modais.",
  academicRef: "Norman, D. (2013). Affordance e Signifiers.",
  wcag: "WCAG 2.1.1 (Keyboard Interaction)",
};

export const HERO_SECONDARY_BUTTON_METADATA: DevModeMetadata = {
  target: "Botão 'Explorar Conteúdos' (Secundário)",
  title: "Lei de Hick e Botões Fantasma",
  nielsenHeuristic: "#8: Estética e Design Minimalista",
  explanation:
    "O estilo 'Ghost Button' (borda sem preenchimento) define visualmente este botão como secundário. Isso reduz a competição visual com a ação principal, ajudando o usuário a decidir mais rápido (Lei de Hick).",
  academicRef: "Hick, W. E. (1952). On the rate of gain of information.",
  wcag: "WCAG 2.4.7 (Focus Visible)",
};

export const HERO_BACKGROUND_METADATA: DevModeMetadata = {
  target: "Background / Área Geral",
  title: "A Dobra (Above the Fold)",
  nielsenHeuristic: "Visibilidade e Atenção",
  explanation:
    "A Hero Section é a área mais valiosa do site. O fundo escuro com padrão sutil mantém o foco no conteúdo central sem causar distração visual, garantindo que a mensagem principal seja consumida antes de qualquer rolagem.",
  academicRef: "Nielsen Norman Group (2010). Scrolling and Attention.",
  wcag: null,
};

