import type { Meta, StoryObj } from "@storybook/react";
import { HeroDescription } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof HeroDescription> = {
  title: "Atoms/HeroDescription",
  component: HeroDescription,
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
type Story = StoryObj<typeof HeroDescription>;

export const Default: Story = {
  name: "Descrição padrão",
  args: {
    children:
      "Comunidade para devs que querem criar interfaces mais humanas. UX, usabilidade e acessibilidade, sem complicação.",
  },
};

export const CustomText: Story = {
  name: "Descrição com texto customizado",
  args: {
    children: "Texto customizado para a descrição do hero.",
  },
};

