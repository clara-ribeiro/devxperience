import { DevModeMetadata } from "@/context/dev-mode-context";

export const FOOTER_NAV_LINKS_METADATA: DevModeMetadata = {
  target: "Links de Navegação Centrais (UX, Usabilidade...)",
  title: "Rede de Segurança (Safety Net)",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Repetir a navegação no rodapé evita o 'efeito ioiô' (ter que rolar tudo para cima para mudar de página). Atua como uma rede de segurança para usuários que chegaram ao fim do conteúdo e não encontraram o que buscavam.",
  academicRef: "Nielsen Norman Group. (2016). Footers 101: Design Patterns.",
  wcag: "WCAG 2.4.5 (Multiple Ways) - Múltiplas formas de navegação.",
};

export const FOOTER_DIVIDER_METADATA: DevModeMetadata = {
  target: "Linha Divisória Horizontal (Divider)",
  title: "Gestalt: Princípio da Região Comum",
  nielsenHeuristic: "Estética e Organização Visual",
  explanation:
    "Esta linha não é apenas estética; ela cria uma fronteira cognitiva. Ela agrupa a navegação (ação) na parte superior e separa das informações legais/créditos (informação) na parte inferior, facilitando o processamento visual.",
  academicRef: "Palmer, S. E. (1992). Common region: A new principle of perceptual grouping.",
  wcag: "WCAG 1.4.11 (Non-text Contrast) - Visibilidade de divisores.",
};

export const FOOTER_SOCIAL_ICONS_METADATA: DevModeMetadata = {
  target: "Ícones Sociais (Github, Instagram, Linkedin)",
  title: "Imagens Funcionais e Atualização",
  nielsenHeuristic: "Credibilidade e Acessibilidade",
  explanation:
    "O uso de ícones atualizados e reconhecíveis transmite manutenção ativa do site. Tecnicamente, como são links sem texto, é OBRIGATÓRIO o uso de 'aria-label' para que leitores de tela não leiam apenas 'link' ou o nome do arquivo SVG.",
  academicRef: "Stanford Web Credibility Guidelines.",
  wcag: "WCAG 1.1.1 (Non-text Content) e 2.4.4 (Link Purpose).",
};

export const FOOTER_LOGO_CREDITS_METADATA: DevModeMetadata = {
  target: "Logotipo da Raposa e Créditos",
  title: "Efeito de Recência e Modelos Mentais",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "Usuários esperam encontrar informações de autoria no rodapé (Modelo Mental). Além disso, repetir o logo explora o 'Efeito de Recência', reforçando a memória da marca no momento final da interação.",
  academicRef: "Murdock, B. B. (1962). The serial position effect.",
  wcag: null,
};

