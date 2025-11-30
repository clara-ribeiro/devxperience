import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { MobileMenuButton } from "./index";

const meta: Meta<typeof MobileMenuButton> = {
  title: "Molecules/MobileMenuButton",
  component: MobileMenuButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MobileMenuButton>;

export const Closed: Story = {
  name: "Menu fechado (hamburger)",
  args: {
    isOpen: false,
    onClick: () => {},
    ariaControls: "mobile-menu",
  },
};

export const Open: Story = {
  name: "Menu aberto (close)",
  args: {
    isOpen: true,
    onClick: () => {},
    ariaControls: "mobile-menu",
  },
};

const InteractiveComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileMenuButton
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      ariaControls="mobile-menu"
    />
  );
};

export const Interactive: Story = {
  name: "Botão interativo",
  render: () => <InteractiveComponent />,
};

export const CustomLabels: Story = {
  name: "Botão com labels customizados",
  args: {
    isOpen: false,
    onClick: () => {},
    ariaControls: "mobile-menu",
    ariaLabel: "Alternar menu de navegação",
    title: "Menu",
  },
};

