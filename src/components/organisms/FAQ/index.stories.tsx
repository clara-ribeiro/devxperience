import type { Meta, StoryObj } from "@storybook/react";
import FAQ from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const faqData = [
  {
    question: "O devXperience é um projeto real ou apenas conceitual?",
    answer: "O projeto nasceu como um Trabalho de Conclusão de Curso (TCC) em Engenharia de Software, mas foi desenvolvido com código real (HTML, CSS e JS) e metodologias de mercado. O objetivo é que ele continue evoluindo como uma ferramenta de consulta para a comunidade.",
  },
  {
    question: "As informações técnicas são confiáveis?",
    answer: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
  },
  {
    question: "O que exatamente o \"Modo Dev\" faz na página?",
    answer: "É uma camada de 'metaleitura'. Ao ativá-lo, a interface se torna interativa: você pode clicar nos elementos (como botões, menus e cards) para entender a teoria de UX e as regras de acessibilidade que motivaram aquela escolha de design.",
  },
  {
    question: "Por que não consigo ativar o Modo Dev no celular?",
    answer: "Por limitações de interação. O Modo Dev depende muito do evento de 'hover' (passar o mouse) para exploração, algo que não existe nativamente em telas de toque. Para garantir a integridade da experiência, restringimos o uso ao desktop.",
  },
  {
    question: "Como posso contatar os responsáveis pelo site?",
    answer: "O devXperience é open source! Você pode abrir Issues ou Pull Requests no nosso repositório do GitHub, ou entrar em contato através das redes sociais linkadas no rodapé desta página.",
  },
];

const meta: Meta<typeof FAQ> = {
  title: "Organisms/FAQ",
  component: FAQ,
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
type Story = StoryObj<typeof FAQ>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    items: faqData,
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    items: faqData,
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

