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

export const Default: Story = {
  name: "Light Mode",
  args: {
    children: "O devXperience é um projeto real ou apenas conceitual?",
  },
};