import type { Meta, StoryObj } from "@storybook/react";
import { PillarLink } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof PillarLink> = {
  title: "Atoms/PillarLink",
  component: PillarLink,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PillarLink>;

export const Default: Story = {
  args: {
    href: "/ux",
    children: "Guia de UX →",
  },
};

export const DarkMode: Story = {
  args: {
    href: "/ux",
    children: "Guia de UX →",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="dark-theme" style={{ padding: "2rem", backgroundColor: "#261D1D" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

