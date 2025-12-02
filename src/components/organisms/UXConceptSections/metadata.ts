import { DevModeMetadata } from "@/context/dev-mode-context";

export const UX_ISO_CARD_METADATA: DevModeMetadata = {
  target: "Menção à 'Norma técnica internacional' (ISO)",
  title: "Padronização e Rigor Técnico",
  nielsenHeuristic: "Standards e Conformidade",
  explanation:
    "Citar a ISO 9241-210 eleva o nível da discussão. Mostra para engenheiros e stakeholders que UX não é 'gosto pessoal', mas uma disciplina regida por padrões internacionais de qualidade de software, assim como a segurança ou a performance.",
  academicRef: "ISO 9241-210:2019 (Human-centred design).",
  wcag: null,
};

export const UX_ROI_CARD_METADATA: DevModeMetadata = {
  target: "Trecho sobre 'Custos' (Regra 1:10:100)",
  title: "ROI de UX (Return on Investment)",
  nielsenHeuristic: "Eficiência de Projetos",
  explanation:
    "Este trecho está alinhado à Regra 1:10:100 de Pressman: corrigir um erro na fase de Design custa 1x; no Desenvolvimento, 10x; em Produção, 100x. Investir em UX antecipa problemas de usabilidade, reduzindo retrabalho, chamados de suporte e risco financeiro após o lançamento.",
  academicRef: "Pressman, R. S. (2010). Software Engineering: A Practitioner's Approach.",
  wcag: null,
};

export const UX_THEORY_BLOCKS_METADATA: DevModeMetadata = {
  target: "Blocos de Texto ('O que é' e 'Por que importa')",
  title: "Argumentação Baseada em Evidência",
  nielsenHeuristic: "Credibilidade",
  explanation:
    "Para convencer um público técnico (desenvolvedores), não basta opinião. O uso de citações diretas de normas (ISO 9241-210) e dados de mercado (ROI) serve para ancorar o conteúdo em fatos, aumentando a autoridade técnica da página.",
  academicRef: "Fogg, B.J. (2003). Persuasive Technology.",
  wcag: null,
};


