import type { Meta, StoryObj } from "@storybook/react";
import { DesktopNote } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof DesktopNote> = {
  title: "Atoms/DesktopNote",
  component: DesktopNote,
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
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof DesktopNote>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    children: "* Disponível apenas em Desktop",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    children: "* Disponível apenas em Desktop",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

