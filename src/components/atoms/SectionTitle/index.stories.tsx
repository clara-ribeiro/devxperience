import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof SectionTitle> = {
  title: "Atoms/SectionTitle",
  component: SectionTitle,
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
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    children: "Conhecimento para ir além do código",
  },
};

export const DarkMode: Story = {
  args: {
    children: "Conhecimento para ir além do código",
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

