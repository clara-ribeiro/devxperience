import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FilterButton> = {
  title: "Atoms/FilterButton",
  component: FilterButton,
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
type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {
  name: "Light Mode - Inativo",
  args: {
    label: "UX Design",
    isActive: false,
  },
};

export const Active: Story = {
  name: "Light Mode - Ativo",
  args: {
    label: "UX Design",
    isActive: true,
  },
};

export const DarkMode: Story = {
  name: "Dark Mode - Inativo",
  args: {
    label: "Usabilidade",
    isActive: false,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#1B1412" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

export const DarkModeActive: Story = {
  name: "Dark Mode - Ativo",
  args: {
    label: "Acessibilidade",
    isActive: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#1B1412" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

