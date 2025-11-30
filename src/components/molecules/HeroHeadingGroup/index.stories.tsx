import type { Meta, StoryObj } from "@storybook/react";
import { HeroHeadingGroup } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof HeroHeadingGroup> = {
  title: "Molecules/HeroHeadingGroup",
  component: HeroHeadingGroup,
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
type Story = StoryObj<typeof HeroHeadingGroup>;

export const Default: Story = {
  name: "Grupo de heading padrão",
};
