import { DevModeMetadata } from "@/context/dev-mode-context";

export const READINGS_CATEGORY_TAG_METADATA: DevModeMetadata = {
  target: "Badges de Categoria (Tags Coloridas)",
  title: "Codificação Cromática e Escaneabilidade",
  nielsenHeuristic: "#6: Reconhecimento em vez de memorização",
  explanation:
    "O uso de cores consistentes para categorias (ex: Laranja para UX, Marrom para Usabilidade) permite que o usuário filtre visualmente o conteúdo sem ler cada palavra. Isso aplica o princípio da Gestalt de Similaridade.",
  academicRef: "Ware, C. (2012). Information Visualization: Perception for Design.",
  wcag: "WCAG 1.4.1 (Use of Color) - Cor não deve ser a única forma de informação.",
};

export const READINGS_DESCRIPTION_METADATA: DevModeMetadata = {
  target: "Descrição/Resumo do Livro",
  title: "Teoria do Rastro de Informação (Information Scent)",
  nielsenHeuristic: "Eficiência de Uso",
  explanation:
    "Usuários são 'vorazes' por informação. O resumo curto funciona como um 'rastro' (scent) que ajuda o usuário a prever se o clique valerá a pena, economizando tempo e cliques desnecessários (Pogosticking).",
  academicRef: "Pirolli, P. & Card, S. (1999). Information Foraging Theory.",
  wcag: null,
};

export const READINGS_LINK_METADATA: DevModeMetadata = {
  target: "Link Externo ('Acessar Conteúdo ->')",
  title: "Segurança e Expectativa de Navegação",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "Links que abrem em nova aba (target='_blank') devem ter indicação visual. Além de UX, há um detalhe técnico crítico: sempre usamos 'rel=noopener noreferrer' para evitar vulnerabilidades de segurança (Tabnabbing) ao linkar sites externos.",
  academicRef: "OWASP Cheat Sheet (HTML5 Security).",
  wcag: "WCAG 3.2.5 (Change on Request)",
};

export const READINGS_CARD_METADATA: DevModeMetadata = {
  target: "Layout em Grid (Repetição de Cards)",
  title: "Consistência e Lei da Similaridade",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "Ao repetir a mesma estrutura (Título > Autor > Texto > Link) em todos os itens, reduzimos a carga cognitiva. O usuário aprende o padrão no primeiro card e não precisa 'reaprender' como ler os próximos 20.",
  academicRef: "Krug, S. (2014). Don't Make Me Think (Dissecting pages).",
  wcag: "WCAG 1.3.1 (Info and Relationships)",
};

export const READINGS_GRID_METADATA: DevModeMetadata = {
  target: "Container da Lista (Grid de Cards)",
  title: "Rolagem vs. Paginação (Scrolling vs Paging)",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "Para listas de tamanho médio (< 50 itens), a rolagem contínua é cognitivamente mais eficiente do que a paginação. O usuário mantém o fluxo de leitura sem a interrupção de cliques ('Click Tax'), e o recurso nativo de busca do navegador (Ctrl+F) permanece funcional em todo o conteúdo.",
  academicRef: "Nielsen Norman Group. (2018). Scrolling is Faster than Paging.",
  wcag: "WCAG 2.1 (Pointer Gestures) - Rolagem simples.",
};

