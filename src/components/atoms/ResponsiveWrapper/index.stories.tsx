import type { Meta, StoryObj } from "@storybook/react";
import { ResponsiveWrapper } from "./index";
import { ThemeProvider } from "@/context/theme-context";

const meta: Meta<typeof ResponsiveWrapper> = {
  title: "Atoms/ResponsiveWrapper",
  component: ResponsiveWrapper,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveWrapper>;

export const MobileOnly: Story = {
  name: "Apenas mobile",
  args: {
    variant: "mobileOnly",
    children: (
      <div style={{ padding: "1rem", backgroundColor: "#E7C19A", borderRadius: "0.5rem" }}>
        Este conteúdo só aparece em mobile
      </div>
    ),
  },
};

export const DesktopOnly: Story = {
  name: "Apenas desktop",
  args: {
    variant: "desktopOnly",
    children: (
      <div style={{ padding: "1rem", backgroundColor: "#99B69E", borderRadius: "0.5rem" }}>
        Este conteúdo só aparece em desktop
      </div>
    ),
  },
};

export const TabletOnly: Story = {
  name: "Apenas tablet",
  args: {
    variant: "tabletOnly",
    children: (
      <div style={{ padding: "1rem", backgroundColor: "#B86D6C", borderRadius: "0.5rem" }}>
        Este conteúdo só aparece em tablet
      </div>
    ),
  },
};



