import type { Meta, StoryObj } from "@storybook/react";
import { SectionDescription } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof SectionDescription> = {
  title: "Atoms/SectionDescription",
  component: SectionDescription,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SectionDescription>;

export const Default: Story = {
  args: {
    children:
      "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
  },
};

export const DarkMode: Story = {
  args: {
    children:
      "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

