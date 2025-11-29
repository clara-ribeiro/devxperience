import type { Meta, StoryObj } from "@storybook/react";
import MainHero from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof MainHero> = {
  title: "Organisms/MainHero",
  component: MainHero,
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
type Story = StoryObj<typeof MainHero>;

export const Default: Story = {
  name: "Hero padrão",
};

export const Accessible: Story = {
  name: "Hero acessível",
  parameters: {
    a11y: {
      // Configurações específicas de acessibilidade
    },
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("@storybook/testing-library");
    const canvas = within(canvasElement);
    
    // Verificar heading principal
    const heading = canvas.getByRole("heading", { name: /dev.*xperience/i });
    await expect(heading).toBeVisible();
    
    // Verificar botão Dev Mode
    const devModeButton = canvas.getByRole("button", { name: /modo dev/i });
    await expect(devModeButton).toBeVisible();
  },
};

