import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Botão padrão (solid)",
  args: {
    label: "Clique aqui",
    variant: "solid",
  },
};

export const Outline: Story = {
  name: "Botão outline",
  args: {
    label: "Clique aqui",
    variant: "outline",
  },
};

export const WithCustomColors: Story = {
  name: "Botão com cores customizadas",
  args: {
    label: "Botão customizado",
    variant: "solid",
    colors: {
      background: "#AD4528",
      text: "#F4E2D4",
      border: "#AD4528",
    },
  },
};

export const OutlineWithCustomColors: Story = {
  name: "Botão outline com cores customizadas",
  args: {
    label: "Botão outline",
    variant: "outline",
    colors: {
      text: "#AD4528",
      border: "#AD4528",
    },
  },
};

export const WithChildren: Story = {
  name: "Botão com children",
  args: {
    children: <span>Conteúdo customizado</span>,
    variant: "solid",
  },
};

