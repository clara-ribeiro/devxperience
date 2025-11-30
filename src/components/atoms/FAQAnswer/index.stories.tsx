import type { Meta, StoryObj } from "@storybook/react";
import { FAQAnswer } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FAQAnswer> = {
  title: "Atoms/FAQAnswer",
  component: FAQAnswer,
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
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FAQAnswer>;

export const LightModeCollapsed: Story = {
  name: "Light Mode - Collapsed",
  args: {
    isExpanded: false,
    children: "O projeto nasceu como um Trabalho de Conclusão de Curso (TCC) em Engenharia de Software, mas foi desenvolvido com código real (HTML, CSS e JS) e metodologias de mercado. O objetivo é que ele continue evoluindo como uma ferramenta de consulta para a comunidade.",
  },
};

export const LightModeExpanded: Story = {
  name: "Light Mode - Expanded",
  args: {
    isExpanded: true,
    children: "O projeto nasceu como um Trabalho de Conclusão de Curso (TCC) em Engenharia de Software, mas foi desenvolvido com código real (HTML, CSS e JS) e metodologias de mercado. O objetivo é que ele continue evoluindo como uma ferramenta de consulta para a comunidade.",
  },
};

export const DarkModeCollapsed: Story = {
  name: "Dark Mode - Collapsed",
  args: {
    isExpanded: false,
    children: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

export const DarkModeExpanded: Story = {
  name: "Dark Mode - Expanded",
  args: {
    isExpanded: true,
    children: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

