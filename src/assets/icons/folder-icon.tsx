import React, { SVGProps } from "react";

export default function FolderIcon(props: SVGProps<SVGSVGElement>) {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 6C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V11.5C20 10.9477 19.5523 10.5 19 10.5H17.0704C16.0673 10.5 15.1306 9.9987 14.5742 9.1641L12.7617 6.4453C12.5762 6.1671 12.264 6 11.9296 6H5ZM2 7C2 5.34315 3.34315 4 5 4H11.9296C12.9327 4 13.8694 4.5013 14.4258 5.3359L16.2383 8.0547C16.4238 8.3329 16.736 8.5 17.0704 8.5H19C20.6569 8.5 22 9.84315 22 11.5V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z"
				fill="currentColor"
			/>
		</svg>
	);
}
