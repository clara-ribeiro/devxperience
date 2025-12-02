import type { Meta, StoryObj } from "@storybook/react";
import { ContentPageTemplate } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof ContentPageTemplate> = {
  title: "Templates/ContentPageTemplate",
  component: ContentPageTemplate,
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
type Story = StoryObj<typeof ContentPageTemplate>;

export const Default: Story = {
  name: "Template de Conteúdo - Padrão",
  args: {
    title: "Título da Página",
    description: "Descrição da página de conteúdo.",
  },
};

export const WithDescription: Story = {
  name: "Template de Conteúdo - Com Descrição",
  args: {
    title: "UX Design",
    description: "Experiência do usuário para devs. Aprenda a criar interfaces mais humanas e intuitivas.",
  },
};

export const WithoutDescription: Story = {
  name: "Template de Conteúdo - Sem Descrição",
  args: {
    title: "Página Simples",
  },
};

export const WithChildren: Story = {
  name: "Template de Conteúdo - Com Children",
  args: {
    title: "Página com Conteúdo Adicional",
    description: "Esta página possui conteúdo adicional renderizado através de children.",
    children: (
      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Conteúdo Adicional</h2>
        <p style={{ lineHeight: 1.6 }}>
          Este é um exemplo de conteúdo adicional que pode ser passado através da prop children.
          Você pode adicionar qualquer conteúdo React aqui, como artigos, listas, cards, etc.
        </p>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          <li>Item de lista 1</li>
          <li>Item de lista 2</li>
          <li>Item de lista 3</li>
        </ul>
      </div>
    ),
  },
};

export const DarkMode: Story = {
  name: "Template de Conteúdo - Dark Mode",
  args: {
    title: "Página em Modo Escuro",
    description: "Exemplo de template de conteúdo em modo escuro.",
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

export const UXPage: Story = {
  name: "Template - Página UX",
  args: {
    title: "UX",
    description: "Experiência do usuário para devs.",
  },
};

export const UsabilidadePage: Story = {
  name: "Template - Página Usabilidade",
  args: {
    title: "Usabilidade",
    description: "Eficiência, eficácia e satisfação.",
  },
};

export const AcessibilidadePage: Story = {
  name: "Template - Página Acessibilidade",
  args: {
    title: "Acessibilidade",
    description: "Interfaces inclusivas e acessíveis.",
  },
};

export const LeiturasPage: Story = {
  name: "Template - Página Leituras",
  args: {
    title: "Leituras",
    description: "Artigos, guias e referências.",
  },
};




