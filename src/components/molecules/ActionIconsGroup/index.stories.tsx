import type { Meta, StoryObj } from "@storybook/react";
import { ActionIconsGroup } from "./index";
import { SearchButton } from "../SearchButton";
import { DevModeToggleButton } from "../DevModeToggleButton";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import { ACTION_ICONS_METADATA } from "@/components/organisms/Header/metadata";

const meta: Meta<typeof ActionIconsGroup> = {
  title: "Molecules/ActionIconsGroup",
  component: ActionIconsGroup,
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
type Story = StoryObj<typeof ActionIconsGroup>;

export const Default: Story = {
  name: "Grupo de ícones padrão",
  args: {
    children: (
      <>
        <SearchButton />
        <DevModeToggleButton />
      </>
    ),
  },
};

export const MultipleIcons: Story = {
  name: "Grupo com múltiplos ícones",
  args: {
    children: (
      <>
        <SearchButton />
        <DevModeToggleButton />
        <SearchButton />
      </>
    ),
  },
};

