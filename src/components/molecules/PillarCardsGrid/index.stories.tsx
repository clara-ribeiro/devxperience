import type { Meta, StoryObj } from "@storybook/react";
import { PillarCardsGrid } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof PillarCardsGrid> = {
  title: "Molecules/PillarCardsGrid",
  component: PillarCardsGrid,
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
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof PillarCardsGrid>;

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
    cards: defaultCards,
  },
};
