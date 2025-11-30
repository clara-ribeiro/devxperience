import type { Meta, StoryObj } from "@storybook/react";
import { CategoryTag } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof CategoryTag> = {
  title: "Atoms/CategoryTag",
  component: CategoryTag,
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
type Story = StoryObj<typeof CategoryTag>;

export const Default: Story = {
  name: "Light Mode",
  args: {
    label: "UX Design",
  },
};

export const Usability: Story = {
  name: "Usabilidade",
  args: {
    label: "Usabilidade",
  },
};

export const Accessibility: Story = {
  name: "Acessibilidade",
  args: {
    label: "Acessibilidade",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    label: "UX Design",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#1B1412" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

