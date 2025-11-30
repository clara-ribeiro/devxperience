import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof NavLink> = {
  title: "Molecules/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  name: "Link de navegação padrão",
  args: {
    href: "/ux",
    label: "UX",
  },
};

export const Selected: Story = {
  name: "Link selecionado",
  args: {
    href: "/ux",
    label: "UX",
    selected: true,
  },
};

export const WithClickHandler: Story = {
  name: "Link com handler de clique",
  args: {
    href: "/acessibilidade",
    label: "Acessibilidade",
    onClick: () => {
      alert("Link clicado!");
    },
  },
};

