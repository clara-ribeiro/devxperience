import type { Meta, StoryObj } from "@storybook/react";
import { FAQIcon } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FAQIcon> = {
  title: "Atoms/FAQIcon",
  component: FAQIcon,
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
type Story = StoryObj<typeof FAQIcon>;

export const LightMode: Story = {
  name: "Light Mode - Collapsed",
  args: {
    isExpanded: false,
    onClick: () => {},
  },
};

export const LightModeExpanded: Story = {
  name: "Light Mode - Expanded",
  args: {
    isExpanded: true,
    onClick: () => {},
  },
};
