import classNames from "classnames";
import React, {
	DetailedHTMLProps,
	InputHTMLAttributes,
	ReactNode,
} from "react";

export type InputProps = {
	label?: string;
	id?: string;
	type?: string;
	className?: string;
	preffix?: ReactNode; // Node before the input (e.g., icon)
	suffix?: ReactNode; // Node after the input (e.g., icon)
	containerClass?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField: React.FC<InputProps> = ({
	label,
	id,
	type = "text",
	className = "",
	preffix,
	suffix,
	containerClass,
	...props
}) => {
	return (
		<div className={classNames("mb-4", containerClass)}>
			{label && (
				<label
					htmlFor={id}
					className="mb-1 block text-sm font-medium text-gray-700"
				>
					{label}
				</label>
			)}

			<div className="relative flex items-center">
				{preffix && <div className="absolute left-3">{preffix}</div>}

				<input
					id={id}
					type={type}
					className={classNames(
						"block sm:text-sm w-full px-4 py-2 bg-transparent border border-gray-200 text-gray-500 rounded-md focus:outline-none focus:border-primary",
						{
							"pl-10": preffix, // Add padding if prefix exists
							"pr-10": suffix, // Add padding if suffix exists
						},
						className
					)}
					{...props}
				/>

				{suffix && <div className="absolute right-3">{suffix}</div>}
			</div>
		</div>
	);
};

export default InputField;
