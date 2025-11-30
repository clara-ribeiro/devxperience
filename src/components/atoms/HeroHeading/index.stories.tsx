import type { Meta, StoryObj } from "@storybook/react";
import { HeroHeading } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof HeroHeading> = {
  title: "Atoms/HeroHeading",
  component: HeroHeading,
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
type Story = StoryObj<typeof HeroHeading>;

export const Default: Story = {
  name: "Heading padrão",
};
