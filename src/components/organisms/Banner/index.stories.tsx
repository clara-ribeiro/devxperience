import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof Banner> = {
  title: "Organisms/Banner",
  component: Banner,
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
type Story = StoryObj<typeof Banner>;

const defaultBannerData = {
  title: "Referências que todo Dev deveria conhecer",
  description:
    "Uma seleção criteriosa de conteúdos sobre Experiência do Usuário (UX), Facilidade de Uso e Acessibilidade Web. O material certo para consultar sempre que tiver dúvidas.",
  buttonLabel: "Acessar materiais →",
  buttonHref: "/leituras",
};

export const Default: Story = {
  name: "Banner padrão",
  args: {
    ...defaultBannerData,
  },
};

export const DarkMode: Story = {
  name: "Banner em modo escuro",
  args: {
    ...defaultBannerData,
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

export const WithCustomButtonClick: Story = {
  name: "Banner com handler customizado",
  args: {
    ...defaultBannerData,
    onButtonClick: () => {
      alert("Botão clicado!");
    },
  },
};

export const WithCustomContent: Story = {
  name: "Banner com conteúdo customizado",
  args: {
    title: "Título customizado do banner",
    description: "Descrição customizada do banner com informações adicionais.",
    buttonLabel: "Ação customizada →",
    buttonHref: "/custom",
  },
};

