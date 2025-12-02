import type { Meta, StoryObj } from "@storybook/react";
import { DevModeHelpFab } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof DevModeHelpFab> = {
  title: "Organisms/DevModeHelpFab",
  component: DevModeHelpFab,
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
  },
};

export default meta;
type Story = StoryObj<typeof DevModeHelpFab>;

export const Default: Story = {
  name: "FAB de ajuda do Dev Mode",
  args: {},
};




