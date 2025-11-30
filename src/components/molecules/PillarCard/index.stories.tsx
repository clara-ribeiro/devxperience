import type { Meta, StoryObj } from "@storybook/react";
import { PillarCard } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof PillarCard> = {
  title: "Molecules/PillarCard",
  component: PillarCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PillarCard>;

export const Default: Story = {
  args: {
    title: "UX DESIGN",
    description:
      "Entenda como criar jornadas lógicas que retêm usuários e transformam a navegação em uma experiência fluida.",
    linkHref: "/ux",
    linkLabel: "Guia de UX",
  },
};

export const DarkMode: Story = {
  args: {
    title: "UX DESIGN",
    description:
      "Entenda como criar jornadas lógicas que retêm usuários e transformam a navegação em uma experiência fluida.",
    linkHref: "/ux",
    linkLabel: "Guia de UX",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Usability: Story = {
  args: {
    title: "USABILIDADE",
    description:
      "Aprenda a reduzir a fricção e o esforço cognitivo, tornando suas aplicações intuitivas e à prova de erros.",
    linkHref: "/usabilidade",
    linkLabel: "Práticas de Usabilidade",
  },
};

export const Accessibility: Story = {
  args: {
    title: "ACESSIBILIDADE",
    description:
      "Aprenda a eliminar barreiras de acesso via código, tornando suas interfaces utilizáveis por todos.",
    linkHref: "/acessibilidade",
    linkLabel: "Acessibilidade Web",
  },
};

