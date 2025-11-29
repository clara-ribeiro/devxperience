import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggleButton } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import { THEME_TOGGLE_METADATA } from "@/components/organisms/Header/metadata";

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
  name: "Botão de tema padrão",
};

export const WithDevMode: Story = {
  name: "Botão de tema com Dev Mode",
  args: {
    metadata: THEME_TOGGLE_METADATA,
  },
};

export const CustomLabels: Story = {
  name: "Botão com labels customizados",
  args: {
    ariaLabel: "Alternar tema",
    title: "Clique para alternar",
  },
};

