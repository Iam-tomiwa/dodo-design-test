import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ColorType, VariantType } from "types/utils.types";

// Define the prop types for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: VariantType; // Default: "contained"
	color?: ColorType; // Default: "primary"
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "contained",
	color = "primary",
	className,
	...props
}) => {
	// Base styles applied to all buttons
	const baseStyles =
		"rounded-lg text-sm font-medium px-3 py-2 focus:outline-none transition flex gap-2 items-center justify-center";

	// Styles for different variants and colors
	const colorStyles: Record<ColorType, Record<VariantType, string>> = {
		primary: {
			contained: "bg-primary text-white hover:bg-primary-700",
			outlined:
				"border border-primary text-blue-600 hover:bg-primary hover:bg-opacity-15",
			text: "text-primary hover:bg-primary hover:bg-opacity-15",
		},
		// TODO: update with secondary color
		white: {
			contained: "bg-white text-gray-800 hover:bg-gray-100",
			outlined:
				"border border-gray-300 text-white hover:bg-gray-50 hover:bg-opacity-15",
			text: "text-white hover:bg-white hover:bg-opacity-15",
		},
	};

	// Fallback to avoid undefined styles
	const variantStyles =
		colorStyles[color]?.[variant] || colorStyles.primary.contained;

	return (
		<button
			className={classNames(baseStyles, variantStyles, className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
