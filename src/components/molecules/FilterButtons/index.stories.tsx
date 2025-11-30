import type { Meta, StoryObj } from "@storybook/react";
import { FilterButtons, FilterOption } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FilterButtons> = {
  title: "Molecules/FilterButtons",
  component: FilterButtons,
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
type Story = StoryObj<typeof FilterButtons>;

const defaultFilters: FilterOption[] = [
  { label: "Experiência do Usuário", value: "ux-design" },
  { label: "Usabilidade", value: "usabilidade" },
  { label: "Acessibilidade", value: "acessibilidade" },
];

export const Default: Story = {
  name: "Light Mode - Sem filtro ativo",
  args: {
    filters: defaultFilters,
  },
};

export const WithActiveFilter: Story = {
  name: "Light Mode - Com filtro ativo",
  args: {
    filters: defaultFilters,
    activeFilter: "ux-design",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode - Sem filtro ativo",
  args: {
    filters: defaultFilters,
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

export const DarkModeWithActiveFilter: Story = {
  name: "Dark Mode - Com filtro ativo",
  args: {
    filters: defaultFilters,
    activeFilter: "usabilidade",
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

