import type { Meta, StoryObj } from "@storybook/react";
import { HeroFox } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof HeroFox> = {
  title: "Atoms/HeroFox",
  component: HeroFox,
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
type Story = StoryObj<typeof HeroFox>;

export const Default: Story = {
  name: "Raposa padrão",
};

export const CustomSize: Story = {
  name: "Raposa com tamanho customizado",
  args: {
    width: 300,
    height: 360,
  },
};

export const WithoutPriority: Story = {
  name: "Raposa sem priority",
  args: {
    priority: false,
  },
};

