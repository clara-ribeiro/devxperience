import type { Meta, StoryObj } from "@storybook/react";
import { BulletIcon } from "./index";
import { MousePointerClick, Lightbulb, BookOpen } from "lucide-react";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof BulletIcon> = {
  title: "Atoms/BulletIcon",
  component: BulletIcon,
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
type Story = StoryObj<typeof BulletIcon>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    icon: MousePointerClick,
    color: "#542918",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    icon: Lightbulb,
    color: "#F1DFD2",
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

