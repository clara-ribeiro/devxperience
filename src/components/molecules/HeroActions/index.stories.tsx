import type { Meta, StoryObj } from "@storybook/react";
import { HeroActions } from "./index";
import Button from "@/components/atoms/Button";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof HeroActions> = {
  title: "Molecules/HeroActions",
  component: HeroActions,
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
type Story = StoryObj<typeof HeroActions>;

export const Default: Story = {
  name: "Grupo de ações padrão",
  args: {
    children: (
      <>
        <Button label="Botão primário" variant="solid" />
        <Button label="Botão secundário" variant="outline" />
      </>
    ),
  },
};

export const SingleButton: Story = {
  name: "Grupo com um botão",
  args: {
    children: <Button label="Botão único" variant="solid" />,
  },
};

export const MultipleButtons: Story = {
  name: "Grupo com múltiplos botões",
  args: {
    children: (
      <>
        <Button label="Botão 1" variant="solid" />
        <Button label="Botão 2" variant="outline" />
        <Button label="Botão 3" variant="solid" />
      </>
    ),
  },
};

