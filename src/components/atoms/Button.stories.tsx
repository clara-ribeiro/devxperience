import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "radio" },
			options: ["primary", "ghost"],
		},
		size: {
			control: { type: "radio" },
			options: ["sm", "md", "lg"],
		},
		disabled: { control: "boolean" },
		onClick: { action: "clicked" },
		children: { control: "text" },
	},
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: { variant: "primary" },
};

export const Ghost: Story = {
	args: { variant: "ghost" },
};

export const Small: Story = {
	args: { size: "sm" },
};

export const Large: Story = {
	args: { size: "lg" },
};

// Interaction test via play function
export const Interactive: Story = {
	args: { children: "Click me" },
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		const btn = await canvas.findByRole("button", { name: /click me/i });
		await step("button is enabled", async () => {
			await expect(btn).toBeEnabled();
		});
		await step("click triggers active state via focus", async () => {
			await userEvent.click(btn);
			await expect(btn).toHaveFocus();
		});
	},
};

// A11y-oriented story to assert role/name
export const Accessible: Story = {
	args: { children: "Submit" },
	name: "Accessible (role/name)",
	parameters: {
		a11y: {
			// keep default checks; this is just to show intent
		},
	},
	play: async ({ canvasElement }: any) => {
		const canvas = within(canvasElement);
		await expect(await canvas.findByRole("button", { name: /submit/i })).toBeVisible();
	},
};


