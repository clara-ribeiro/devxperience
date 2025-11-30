import type { Meta, StoryObj } from "@storybook/react";
import { LogoLink } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";

const meta: Meta<typeof LogoLink> = {
  title: "Molecules/LogoLink",
  component: LogoLink,
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
type Story = StoryObj<typeof LogoLink>;

export const Default: Story = {
  name: "Logo link padrão",
};

export const CustomSize: Story = {
  name: "Logo link com tamanho customizado",
  args: {
    width: 88,
    height: 96,
  },
};

export const CustomHref: Story = {
  name: "Logo link com href customizado",
  args: {
    href: "/home",
    ariaLabel: "Ir para home",
  },
};

