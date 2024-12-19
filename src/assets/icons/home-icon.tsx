import { SVGProps } from "react";

export default function HomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4.01923 21.106V9.1349L12 3.10602L19.9807 9.1349V21.106H13.4912V14.3976H10.5087V21.106H4.01923Z"
				fill="currentColor"
				stroke="currentColor"
				strokeWidth="1.14011"
			/>
		</svg>
	);
}
