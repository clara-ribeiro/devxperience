import type { Meta, StoryObj } from "@storybook/react";
import KnowledgePillars from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof KnowledgePillars> = {
  title: "Organisms/KnowledgePillars",
  component: KnowledgePillars,
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
type Story = StoryObj<typeof KnowledgePillars>;

const defaultCards = [
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
];

export const Default: Story = {
  args: {
    title: "Conhecimento para ir além do código",
    description:
      "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
    cards: defaultCards,
  },
};

export const DarkMode: Story = {
  args: {
    title: "Conhecimento para ir além do código",
    description:
      "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
    cards: defaultCards,
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

