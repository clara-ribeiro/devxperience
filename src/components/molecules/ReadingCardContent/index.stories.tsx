import type { Meta, StoryObj } from "@storybook/react";
import { ReadingCardContent } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof ReadingCardContent> = {
  title: "Molecules/ReadingCardContent",
  component: ReadingCardContent,
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
type Story = StoryObj<typeof ReadingCardContent>;

export const Default: Story = {
  name: "Light Mode",
  args: {
    category: "UX Design",
    title: "The Design of Everyday Things",
    author: "Donald A. Norman (2013)",
    description:
      "A bíblia do design. Norman ensina a observar o mundo (de portas a interruptores) para entender como a psicologia humana interage com objetos. Leitura obrigatória para entender o conceito de 'Affordance'.",
    linkHref: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
    linkLabel: "Acessar Conteúdo",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    category: "Usabilidade",
    title: "Don't Make Me Think, Revisited",
    author: "Steve Krug (2014)",
    description:
      "O livro mais popular sobre usabilidade web. Curto, ilustrado e direto ao ponto: o usuário não deve gastar energia mental tentando entender como sua interface funciona. Ela deve ser óbvia.",
    linkHref: "https://sensible.com/dont-make-me-think/",
    linkLabel: "Acessar Conteúdo",
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

export const WithoutLink: Story = {
  name: "Sem link",
  args: {
    category: "Acessibilidade",
    title: "Web Accessibility Initiative (WAI)",
    author: "W3C (Documentação Oficial)",
    description:
      "A fonte da verdade. Não é um livro, mas a documentação viva que todo Front-end deve consultar. Contém as diretrizes WCAG e técnicas para tornar a web acessível a todos.",
  },
};

export const Accessibility: Story = {
  name: "Categoria Acessibilidade",
  args: {
    category: "Acessibilidade",
    title: "Lei Brasileira de Inclusão (LBI)",
    author: "Lei nº 13.146 (2015)",
    description:
      "Essencial para projetos no Brasil. O Artigo 63 torna obrigatória a acessibilidade em sites de empresas com sede no país. Conhecer a lei é um diferencial competitivo para o desenvolvedor.",
    linkHref: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
    linkLabel: "Acessar Conteúdo",
  },
};

