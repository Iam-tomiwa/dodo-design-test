import type { Meta, StoryObj } from "@storybook/react";
import Button from "components/button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		onClick: { action: "clicked" }, // Tracks clicks in the actions panel
	},
	args: {
		children: "Button", // Default button text
		variant: "contained", // Default to contained style
		color: "primary", // Default to primary color
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default button (Contained Primary)
export const Default: Story = {};

// Outlined Primary
export const OutlinedPrimary: Story = {
	args: {
		children: "Outlined Primary",
		variant: "outlined",
	},
};

// Text Primary
export const TextPrimary: Story = {
	args: {
		children: "Text Primary",
		variant: "text",
	},
};
