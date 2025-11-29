import type { Meta, StoryObj } from "@storybook/react";
import { DevModeToggleButton } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof DevModeToggleButton> = {
  title: "Molecules/DevModeToggleButton",
  component: DevModeToggleButton,
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
type Story = StoryObj<typeof DevModeToggleButton>;

export const Default: Story = {
  name: "Botão Dev Mode padrão",
};

export const WithHeaderTrigger: Story = {
  name: "Botão com trigger header-cta",
  args: {
    trigger: "header-cta",
  },
};

export const WithHeroTrigger: Story = {
  name: "Botão com trigger hero-cta",
  args: {
    trigger: "hero-cta",
  },
};

export const CustomLabels: Story = {
  name: "Botão com labels customizados",
  args: {
    ariaLabel: "Alternar modo desenvolvedor",
    title: "Modo desenvolvedor",
  },
};

