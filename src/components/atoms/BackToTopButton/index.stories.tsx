import type { Meta, StoryObj } from "@storybook/react";
import { BackToTopButton } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof BackToTopButton> = {
  title: "Atoms/BackToTopButton",
  component: BackToTopButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div style={{ height: "200vh", padding: "2rem" }}>
            <div style={{ marginBottom: "100vh" }}>
              <p>Role a página para ver o botão aparecer</p>
            </div>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BackToTopButton>;

export const Default: Story = {
  name: "Light Mode",
  args: {
    label: "Voltar ao topo",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    label: "Voltar ao topo",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ height: "200vh", padding: "2rem", backgroundColor: "#1B1412" }}>
            <div style={{ marginBottom: "100vh" }}>
              <p style={{ color: "#F1DFD2" }}>Role a página para ver o botão aparecer</p>
            </div>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

export const CustomLabel: Story = {
  name: "Com label customizado",
  args: {
    label: "Ir para o topo",
  },
};

