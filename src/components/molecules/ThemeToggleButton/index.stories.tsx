import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggleButton } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof ThemeToggleButton> = {
  title: "Molecules/ThemeToggleButton",
  component: ThemeToggleButton,
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
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {
  name: "Botão de alternância de tema",
  args: {},
};

export const WithCustomLabels: Story = {
  name: "Com labels customizados",
  args: {
    ariaLabel: "Alternar tema",
    title: "Mudar tema",
  },
};



