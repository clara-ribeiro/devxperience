import type { Meta, StoryObj } from "@storybook/react";
import { FAQQuestion } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof FAQQuestion> = {
  title: "Atoms/FAQQuestion",
  component: FAQQuestion,
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
type Story = StoryObj<typeof FAQQuestion>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    children: "O devXperience é um projeto real ou apenas conceitual?",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    children: "As informações técnicas são confiáveis?",
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

