import type { Meta, StoryObj } from "@storybook/react";
import { ReadingCard } from "./index";
import { ReadingCardContent } from "@/components/molecules/ReadingCardContent";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof ReadingCard> = {
  title: "Atoms/ReadingCard",
  component: ReadingCard,
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
type Story = StoryObj<typeof ReadingCard>;

export const Default: Story = {
  name: "Light Mode",
  args: {
    children: (
      <ReadingCardContent
        category="UX Design"
        title="The Design of Everyday Things"
        author="Donald A. Norman (2013)"
        description="A bíblia do design. Norman ensina a observar o mundo (de portas a interruptores) para entender como a psicologia humana interage com objetos. Leitura obrigatória para entender o conceito de 'Affordance'."
        linkHref="https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/"
        linkLabel="Acessar Conteúdo"
      />
    ),
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    children: (
      <ReadingCardContent
        category="Usabilidade"
        title="Don't Make Me Think, Revisited"
        author="Steve Krug (2014)"
        description="O livro mais popular sobre usabilidade web. Curto, ilustrado e direto ao ponto: o usuário não deve gastar energia mental tentando entender como sua interface funciona. Ela deve ser óbvia."
        linkHref="https://sensible.com/dont-make-me-think/"
        linkLabel="Acessar Conteúdo"
      />
    ),
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

export const WithHref: Story = {
  name: "Com link",
  args: {
    href: "/leituras/1",
    children: (
      <ReadingCardContent
        category="Acessibilidade"
        title="Web Accessibility Initiative (WAI)"
        author="W3C (Documentação Oficial)"
        description="A fonte da verdade. Não é um livro, mas a documentação viva que todo Front-end deve consultar. Contém as diretrizes WCAG e técnicas para tornar a web acessível a todos."
        linkHref="https://www.w3.org/WAI/"
        linkLabel="Acessar Conteúdo"
      />
    ),
  },
};

