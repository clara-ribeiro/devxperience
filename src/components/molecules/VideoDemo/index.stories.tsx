import type { Meta, StoryObj } from "@storybook/react";
import { VideoDemo } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof VideoDemo> = {
  title: "Molecules/VideoDemo",
  component: VideoDemo,
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
type Story = StoryObj<typeof VideoDemo>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    videoSrc: "/shortTutorial.webm",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    videoSrc: "/shortTutorial.webm",
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

