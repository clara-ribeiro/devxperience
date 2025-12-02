import type { Meta, StoryObj } from "@storybook/react";
import UXExamplesSection from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof UXExamplesSection> = {
  title: "Organisms/UXExamplesSection",
  component: UXExamplesSection,
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
type Story = StoryObj<typeof UXExamplesSection>;

export const Default: Story = {
  name: "UX Examples Section - Padrão",
};

export const DarkMode: Story = {
  name: "UX Examples Section - Dark Mode",
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

