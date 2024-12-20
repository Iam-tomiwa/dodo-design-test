import classNames from "classnames";
import { ReactNode } from "react";

export interface AvatarProps {
	src: string;
	alt: string;
	size?: "sm" | "md" | "lg" | "xl";
	variant?: "circular" | "rounded" | "square";
	fallback?: string | ReactNode;
	className?: string;
}

// Generate fallback text
const getFallback = (alt: string) => {
	if (!alt) return "?";
	const words = alt.trim().split(" ");
	if (words.length > 1) {
		return words[0][0] + words[1][0]; // First letters of two words
	}
	return words[0].slice(0, 2).toUpperCase(); // First two letters of a single word
};

const Avatar = ({
	src,
	alt,
	size = "md",
	variant = "circular",
	fallback, // string || icon,
	className,
}: AvatarProps) => {
	const sizeClasses = {
		sm: "w-9 h-9 text-sm",
		md: "w-12 h-12 text-md",
		lg: "w-16 h-16 text-lg",
		xl: "w-20 h-20 text-xl",
	};

	const variantClasses = {
		circular: "rounded-full",
		rounded: "rounded-md",
		square: "rounded-none",
	};

	const baseClasses =
		"flex items-center justify-center bg-gray-200 text-gray-600 font-bold";

	return (
		<div
			className={classNames(
				baseClasses,
				sizeClasses[size],
				variantClasses[variant],
				!src && "bg-gray-300",
				className
			)}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					className={classNames(
						"object-cover",
						variantClasses[variant],
						"w-full h-full"
					)}
				/>
			) : (
				<span>{fallback || getFallback(alt)}</span>
			)}
		</div>
	);
};

export default Avatar;
