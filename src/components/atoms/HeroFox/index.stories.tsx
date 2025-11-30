import type { Meta, StoryObj } from "@storybook/react";
import { HeroFox } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof HeroFox> = {
  title: "Atoms/HeroFox",
  component: HeroFox,
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
type Story = StoryObj<typeof HeroFox>;

export const Default: Story = {
  name: "Raposa padrão",
};
