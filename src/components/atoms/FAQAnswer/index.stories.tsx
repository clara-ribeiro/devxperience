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

export const Default: Story = {
  name: "Light Mode - Expanded",
  args: {
    isExpanded: true,
    children: "O projeto nasceu como um Trabalho de Conclusão de Curso (TCC) em Engenharia de Software, mas foi desenvolvido com código real (HTML, CSS e JS) e metodologias de mercado. O objetivo é que ele continue evoluindo como uma ferramenta de consulta para a comunidade.",
  },
};
