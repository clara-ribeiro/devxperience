import type { Meta, StoryObj } from "@storybook/react";
import { BulletPointsList } from "./index";
import { MousePointerClick, Lightbulb, BookOpen } from "lucide-react";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof BulletPointsList> = {
  title: "Molecules/BulletPointsList",
  component: BulletPointsList,
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
type Story = StoryObj<typeof BulletPointsList>;

const defaultItems = [
  {
    icon: MousePointerClick,
    text: "Interaja para descobrir: Passe o mouse sobre os componentes para revelar as explicações.",
  },
  {
    icon: Lightbulb,
    text: "Entenda as decisões: Veja os princípios de UX, usabilidade e acessibilidade aplicados no código real.",
  },
  {
    icon: BookOpen,
    text: "Aprofunde-se: Acesse links diretos para a teoria dos elementos que te interessarem.",
  },
];

export const LightMode: Story = {
  name: "Light Mode",
  args: {
    items: defaultItems,
    iconColor: "#542918",
  },
};

export const DarkMode: Story = {
  name: "Dark Mode",
  args: {
    items: defaultItems,
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

