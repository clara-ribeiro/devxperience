import type { Meta, StoryObj } from "@storybook/react";
import { HomeTemplate } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import { PillarCardData } from "@/components/molecules/PillarCardsGrid";
import { FAQItemData } from "@/components/organisms/FAQ";

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <Story />
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

const defaultKnowledgePillars = {
  title: "Conhecimento para ir além do código",
  description:
    "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
  cards: [
    {
      title: "UX DESIGN",
      description:
        "Entenda como criar jornadas lógicas que retêm usuários e transformam a navegação em uma experiência fluida.",
      linkHref: "/ux",
      linkLabel: "Guia de UX",
    },
    {
      title: "USABILIDADE",
      description:
        "Aprenda a reduzir a fricção e o esforço cognitivo, tornando suas aplicações intuitivas e à prova de erros.",
      linkHref: "/usabilidade",
      linkLabel: "Práticas de Usabilidade",
    },
    {
      title: "ACESSIBILIDADE",
      description:
        "Aprenda a eliminar barreiras de acesso via código, tornando suas interfaces utilizáveis por todos.",
      linkHref: "/acessibilidade",
      linkLabel: "Acessibilidade Web",
    },
  ] as PillarCardData[],
};

const defaultBanner = {
  title: "Referências que todo Dev deveria conhecer",
  description:
    "Uma seleção criteriosa de conteúdos sobre Experiência do Usuário (UX), Facilidade de Uso e Acessibilidade Web. O material certo para consultar sempre que tiver dúvidas.",
  buttonLabel: "Acessar materiais →",
  buttonHref: "/leituras",
};

const defaultFAQItems: FAQItemData[] = [
  {
    question: "As informações técnicas são confiáveis?",
    answer: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
  },
  {
    question: "O que exatamente o \"Modo Dev\" faz na página?",
    answer: "É uma camada de 'metaleitura'. Ao ativá-lo, a interface se torna interativa: você pode clicar nos elementos (como botões, menus e cards) para entender a teoria de UX e as regras de acessibilidade que motivaram aquela escolha de design.",
  },
  {
    question: "Por que não consigo ativar o Modo Dev no celular?",
    answer: "Por limitações de interação. O Modo Dev depende muito do evento de 'hover' (passar o mouse) para exploração, algo que não existe nativamente em telas de toque. Para garantir a integridade da experiência, restringimos o uso ao desktop.",
  },
  {
    question: "Como posso contatar os responsáveis pelo site?",
    answer: "O devXperience é open source! Você pode abrir Issues ou Pull Requests no nosso repositório do GitHub, ou entrar em contato através das redes sociais linkadas no rodapé desta página.",
  },
];

export const Default: Story = {
  name: "Template Home - Light Mode",
  args: {
    knowledgePillars: defaultKnowledgePillars,
    banner: defaultBanner,
    faqItems: defaultFAQItems,
  },
};

export const DarkMode: Story = {
  name: "Template Home - Dark Mode",
  args: {
    knowledgePillars: defaultKnowledgePillars,
    banner: defaultBanner,
    faqItems: defaultFAQItems,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme">
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

export const WithCustomContent: Story = {
  name: "Template Home - Conteúdo Customizado",
  args: {
    knowledgePillars: {
      title: "Título customizado dos pilares",
      description: "Descrição customizada dos pilares de conhecimento.",
      cards: [
        {
          title: "PILAR 1",
          description: "Descrição do primeiro pilar customizado.",
          linkHref: "/pilar1",
          linkLabel: "Ver mais",
        },
        {
          title: "PILAR 2",
          description: "Descrição do segundo pilar customizado.",
          linkHref: "/pilar2",
          linkLabel: "Ver mais",
        },
      ] as PillarCardData[],
    },
    banner: {
      title: "Banner customizado",
      description: "Descrição customizada do banner com informações adicionais.",
      buttonLabel: "Ação customizada →",
      buttonHref: "/custom",
    },
    faqItems: [
      {
        question: "Pergunta customizada?",
        answer: "Resposta customizada para a pergunta.",
      },
    ] as FAQItemData[],
  },
};





