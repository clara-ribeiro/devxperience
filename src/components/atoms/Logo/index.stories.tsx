import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
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
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  name: "Logo padrão",
};

export const CustomSize: Story = {
  name: "Logo com tamanho customizado",
  args: {
    width: 88,
    height: 96,
  },
};
