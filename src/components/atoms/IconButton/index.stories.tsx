import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./index";
import SearchIcon from "@/components/icons/SearchIcon";
import DevModeIcon from "@/components/icons/DevModeIcon";
import LightModeIcon from "@/components/icons/LightModeIcon";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
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
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  name: "Botão de ícone padrão",
  args: {
    icon: <SearchIcon />,
    ariaLabel: "Buscar",
    title: "Buscar",
  },
};

export const Pressed: Story = {
  name: "Botão pressionado (light mode)",
  args: {
    icon: <DevModeIcon bgColor="#261D1D" glyphColor="#E7C19A" />,
    ariaLabel: "Dev Mode ativo",
    title: "Dev Mode ativo",
    ariaPressed: true,
  },
};

export const PressedDark: Story = {
  name: "Botão pressionado (dark mode)",
  args: {
    icon: <DevModeIcon bgColor="#E7C19A" glyphColor="#542918" />,
    ariaLabel: "Dev Mode ativo",
    title: "Dev Mode ativo",
    ariaPressed: true,
  },
};
