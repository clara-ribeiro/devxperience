import type { Meta, StoryObj } from "@storybook/react";
import { FAQItem } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FAQItem> = {
  title: "Molecules/FAQItem",
  component: FAQItem,
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
type Story = StoryObj<typeof FAQItem>;

export const LightModeCollapsed: Story = {
  name: "Light Mode - Collapsed",
  args: {
    question: "O devXperience é um projeto real ou apenas conceitual?",
    answer: "O projeto nasceu como um Trabalho de Conclusão de Curso (TCC) em Engenharia de Software, mas foi desenvolvido com código real (HTML, CSS e JS) e metodologias de mercado. O objetivo é que ele continue evoluindo como uma ferramenta de consulta para a comunidade.",
    isExpanded: false,
    onToggle: () => {},
  },
};

export const LightModeExpanded: Story = {
  name: "Light Mode - Expanded",
  args: {
    question: "As informações técnicas são confiáveis?",
    answer: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
    isExpanded: true,
    onToggle: () => {},
  },
};

export const DarkModeCollapsed: Story = {
  name: "Dark Mode - Collapsed",
  args: {
    question: "O que exatamente o \"Modo Dev\" faz na página?",
    answer: "É uma camada de 'metaleitura'. Ao ativá-lo, a interface se torna interativa: você pode clicar nos elementos (como botões, menus e cards) para entender a teoria de UX e as regras de acessibilidade que motivaram aquela escolha de design.",
    isExpanded: false,
    onToggle: () => {},
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
    question: "Por que não consigo ativar o Modo Dev no celular?",
    answer: "Por limitações de interação. O Modo Dev depende muito do evento de 'hover' (passar o mouse) para exploração, algo que não existe nativamente em telas de toque. Para garantir a integridade da experiência, restringimos o uso ao desktop.",
    isExpanded: true,
    onToggle: () => {},
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

