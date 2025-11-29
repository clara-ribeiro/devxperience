import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Header from "./index";
import { DevModeProvider } from "@/context/dev-mode-context";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
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
          {
            id: "keyboard-navigation",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: "Header padrão",
};

export const WithNavigation: Story = {
  name: "Header com navegação",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verificar se os links de navegação estão presentes
    await expect(canvas.getByRole("link", { name: /ux/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /usabilidade/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /acessibilidade/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /leituras/i })).toBeVisible();
  },
};

export const Accessible: Story = {
  name: "Header acessível",
  parameters: {
    a11y: {
      // Configurações específicas de acessibilidade
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verificar elementos acessíveis
    const nav = canvas.getByRole("navigation", { name: /navegação principal/i });
    await expect(nav).toBeVisible();
    
    // Verificar botão de tema
    const themeButton = canvas.getByRole("button", { name: /ativar modo/i });
    await expect(themeButton).toBeVisible();
    
    // Verificar logo
    const logo = canvas.getByRole("link", { name: /página inicial/i });
    await expect(logo).toBeVisible();
  },
};

export const WithCustomLinks: Story = {
  name: "Header com links customizados",
  args: {
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/contato", label: "Contato" },
      { href: "/blog", label: "Blog" },
    ],
  },
};
