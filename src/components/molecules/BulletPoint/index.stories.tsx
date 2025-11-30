import type { Meta, StoryObj } from "@storybook/react";
import { BulletPoint } from "./index";
import { MousePointerClick, Lightbulb } from "lucide-react";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof BulletPoint> = {
  title: "Molecules/BulletPoint",
  component: BulletPoint,
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
type Story = StoryObj<typeof BulletPoint>;

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    icon: MousePointerClick,
    text: "Interaja para descobrir: Passe o mouse sobre os componentes para revelar as explicações.",
    iconColor: "#542918",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    icon: Lightbulb,
    text: "Entenda as decisões: Veja os princípios de UX, usabilidade e acessibilidade aplicados no código real.",
    iconColor: "#F1DFD2",
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

