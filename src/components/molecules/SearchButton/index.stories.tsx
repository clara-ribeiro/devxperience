import type { Meta, StoryObj } from "@storybook/react";
import { SearchButton } from "./index";

const meta: Meta<typeof SearchButton> = {
  title: "Molecules/SearchButton",
  component: SearchButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Default: Story = {
  name: "Botão de busca padrão",
};

export const WithClickHandler: Story = {
  name: "Botão com handler de clique",
  args: {
    onClick: () => {
      alert("Buscar clicado!");
    },
  },
};

export const CustomLabels: Story = {
  name: "Botão com labels customizados",
  args: {
    ariaLabel: "Pesquisar conteúdo",
    title: "Pesquisar",
  },
};

