import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import { NAV_DEV_METADATA, NAV_TEXT_METADATA } from "@/components/organisms/Header/metadata";

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

export const WithDevMode: Story = {
  name: "Link com Dev Mode (selecionado)",
  args: {
    href: "/ux",
    label: "UX",
    selected: true,
    metadata: NAV_DEV_METADATA,
  },
};

export const WithDevModeText: Story = {
  name: "Link com Dev Mode (texto)",
  args: {
    href: "/usabilidade",
    label: "Usabilidade",
    selected: false,
    metadata: NAV_TEXT_METADATA,
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

