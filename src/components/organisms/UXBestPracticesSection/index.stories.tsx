import type { Meta, StoryObj } from "@storybook/react";
import UXBestPracticesSection from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof UXBestPracticesSection> = {
  title: "Organisms/UXBestPracticesSection",
  component: UXBestPracticesSection,
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
type Story = StoryObj<typeof UXBestPracticesSection>;

export const Default: Story = {
  name: "UX Best Practices Section - Padrão",
};

export const DarkMode: Story = {
  name: "UX Best Practices Section - Dark Mode",
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

