import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "components/avatar";

const meta = {
	title: "Components/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		fallback: {
			control: "text",
		},
	},
	args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "",
		alt: "Default Avatar",
		size: "md",
		variant: "circular",
		fallback: "DA",
	},
};

export const WithImage: Story = {
	args: {
		src: "https://dodo-design-test.vercel.app/images/avatar-df.png",
		alt: "User Avatar",
		size: "lg",
		variant: "circular",
	},
};

export const CustomFallback: Story = {
	args: {
		src: "",
		alt: "Jane Doe",
		size: "sm",
		variant: "rounded",
		fallback: "JD",
	},
};

export const SquareVariant: Story = {
	args: {
		src: "",
		alt: "Square Avatar",
		size: "xl",
		variant: "square",
	},
};
