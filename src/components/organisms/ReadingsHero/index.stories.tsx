import type { Meta, StoryObj } from "@storybook/react";
import { ReadingsHero, FilterOption } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof ReadingsHero> = {
  title: "Organisms/ReadingsHero",
  component: ReadingsHero,
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
type Story = StoryObj<typeof ReadingsHero>;

const defaultFilters: FilterOption[] = [
  { label: "Experiência do Usuário", value: "ux-design" },
  { label: "Usabilidade", value: "usabilidade" },
  { label: "Acessibilidade", value: "acessibilidade" },
];

export const Default: Story = {
  name: "Light Mode",
  args: {
    title: "Leituras recomendadas",
    description:
      "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
    filters: defaultFilters,
  },
};

export const WithActiveFilter: Story = {
  name: "Light Mode - Com filtro ativo",
  args: {
    title: "Leituras recomendadas",
    description:
      "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
    filters: defaultFilters,
    activeFilter: "ux-design",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    title: "Leituras recomendadas",
    description:
      "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
    filters: defaultFilters,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme">
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
    title: "Leituras recomendadas",
    description:
      "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
    filters: defaultFilters,
    activeFilter: "usabilidade",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme">
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

