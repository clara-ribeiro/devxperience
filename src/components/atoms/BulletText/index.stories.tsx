import type { Meta, StoryObj } from "@storybook/react";
import { BulletText } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof BulletText> = {
  title: "Atoms/BulletText",
  component: BulletText,
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
type Story = StoryObj<typeof BulletText>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    children: "Interaja para descobrir: Passe o mouse sobre os componentes para revelar as explicações.",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    children: "Entenda as decisões: Veja os princípios de UX, usabilidade e acessibilidade aplicados no código real.",
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

